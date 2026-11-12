# Mac mini setup: serving Buddy to ~12 students over the school LAN

> Status: research and design, checked against sources as of **2026-11-12**.
> Nothing here has been installed or load-tested on the school's hardware.
> Items marked **[unverified]** or **[estimate]** must be checked on the real
> machine before the first class. Sources are numbered at the bottom.

## TL;DR

| Decision | Recommendation |
|---|---|
| Inference server | **llama.cpp `llama-server`** with parallel slots and continuous batching, bound to `127.0.0.1` |
| In front of it | **`buddy_proxy.py`** on the LAN. It handles class keys, challenge injection, the safety filter, and logs. |
| Model | **Qwen3.5-4B** (instruct, thinking **off**), GGUF **Q4_K_M** on 16 GB, **Q5_K_M/Q6_K** on 24 GB+ |
| Fallback model | Qwen3-4B-Instruct-2507: text-only, never thinks, simpler, but its KV cache is much larger (see memory) |
| Hardware | M4 with **24 GB** is the sweet spot. 16 GB works for serving only. M4 Pro is about 2.3× faster per token if budget allows. |
| Service | `launchd` LaunchDaemons running as a dedicated non-admin user, auto-restart |
| Monitoring | `llama-server --metrics` (Prometheus format) + `/health` + the proxy's JSONL log + a 5-minute cron health check |
| LoRA training | `mlx-lm` on the same mini, after school, with the server stopped or the model unloaded |

## 1. Which inference server?

All four candidates speak the OpenAI `/v1/chat/completions` API. The
deciding factors for 12 kids are (a) real concurrent batching, (b) built-in
auth and metrics, and (c) how boring it is to administer.

| | **llama.cpp `llama-server`** | **mlx-lm `mlx_lm.server`** | **Ollama** | **LM Studio (`llmster`)** |
|---|---|---|---|---|
| Concurrency | `-np/--parallel N` slots. Continuous batching is **on by default** [3]. | Has a batch generator. Apple's WWDC26 session says the server does continuous batching [6], but docs don't document the flags [4], and there are field reports of crashes under concurrency [7]. | Default is 1 request per model. The MLX runner **serialized requests** until PR #19197 (merged 2026-11-10; only in **v0.40.17-rc0**, not stable v0.40.16) [8][9]. | "Max Concurrent Predictions", default 4 slots, from llama.cpp's continuous batching (0.4.0, Jan 2026). MLX-engine parallelism came later [10][11]. |
| Speed on Apple GPU | Good. ~10–25% behind MLX on a 4B model on M4 Max (118 vs 129–159 tok/s single stream) [12]. | Fastest single stream on most models [12]. | MLX backend is now default on Apple Silicon [9][13]. | Both llama.cpp and MLX engines. |
| Auth | `--api-key` / `--api-key-file`, several keys allowed [3] | **None**. The docs say *"not recommended for production as it only implements basic security checks"* [4]. | None found in docs **[unverified]**, so put a proxy in front | API tokens since 0.4.0 ("Require Authentication") [14] |
| Monitoring | `--metrics` Prometheus endpoint, `/health`, `/slots` [3] | Minimal | `ollama ps`, logs | GUI and `lms` CLI |
| Memory under load | Flat as concurrency rises [15] | Climbs. The agent workload collapsed at concurrency 16 in one benchmark [15]. | Holds ~94–97% of the Metal limit from c=1 [15] | (not benchmarked) |
| Admin ease | One binary plus flags. Pairs well with launchd. | `pip install`; dev tool | Easiest install | Easiest GUI. Licensing for school use **[unverified]** |
| Passed all 3 audit gates in SiliconBench [15] | **Yes** | No | No | — |

**Pick `llama-server`**, because it is the only option that today has *all
three* of stable multi-slot batching, built-in key auth, and Prometheus
metrics, plus flat memory under load. MLX is a bit faster per token, but
that matters less than stability when 12 kids press Enter at the same
moment.

- **mlx-lm** stays in the stack for **LoRA training and evaluation** (§6
  and `buddy-design.md`), not for serving.
- **Re-evaluate in Phase 3:** **vllm-metal** (vLLM's Apple Silicon plugin,
  v0.28, Sept 2026) had the best concurrency scaling in SiliconBench: 3.65×
  chat throughput from c=1→16 and sub-250 ms TTFT at c=16 [15][16]. Caveat:
  the benchmark's first author also wrote the vllm-metal announcement [15][16].
  Also re-check Ollama once the MLX concurrency fix reaches a stable release.
- **LM Studio** is the right choice if the person running the mini day to day
  is *not* the sysadmin: it has a GUI, built-in tokens and parallel slots.
  Check its license terms for school use first **[unverified]**.

## 2. Which model and quantization?

**Qwen3.5-4B** (released 2026-03-02, Apache-2.0) is the newest ~4B Qwen
[1][2]. Newer Qwen releases (3.6, 3.8) did not ship a new 4B-class open model
as of this check [2][17] **[verify on the Qwen HF org before install]**.

Things that matter for Buddy:
- **Thinking is ON by default.** Qwen3.5 does not support Qwen3's
  `/think` / `/no_think` soft switch. Disable it per request with
  `chat_template_kwargs: {"enable_thinking": false}` [18][19]. The proxy
  sends this on every request and also strips any `<think>` block that leaks
  through. Users report the 4B "overthinks" even greetings when thinking is
  left on [20].
- **Hybrid architecture.** Of 32 layers, 24 are Gated-DeltaNet
  (linear attention, fixed-size state) and only 8 are full attention, with 4 KV
  heads and head dim 256 [2]. **This makes the KV cache tiny**, which is a big
  deal for 12 concurrent students (see §3).
- It is natively multimodal [1]. Buddy only needs text. When serving with
  llama.cpp you simply don't load the vision projector (mmproj).
- GGUF builds were published at launch (e.g. Unsloth) [21].

**Fallback: Qwen3-4B-Instruct-2507.** It is non-thinking only, so there is
nothing to disable, it is text-only, and it has 36 layers [22]. Use it if
Qwen3.5's template or tooling causes trouble, e.g. if LoRA tooling lags for
the hybrid architecture.

### Quantization choice

Decode on Apple Silicon is memory-bandwidth-bound, so a smaller file means
faster tokens. The base M4 has **120 GB/s** [23][24], so the theoretical
ceiling is about 120 ÷ model-bytes tokens/s for a single stream.

| Quant (GGUF) | ~Weights for a 4B* | Single-stream ceiling on M4 (120 GB/s) | Use when |
|---|---|---|---|
| Q4_K_M | ~2.6–2.8 GB | ~40 tok/s | 16 GB mini, or speed matters most |
| Q5_K_M | ~3.1 GB | ~35 tok/s | **24 GB default**: good quality/speed balance for a 4B |
| Q6_K | ~3.5 GB | ~30 tok/s | 24–32 GB, if evals show Q5 errors |
| Q8_0 | ~4.5 GB | ~25 tok/s | 32 GB; for evaluating your LoRA, not serving |
| BF16 | ~8.5 GB | ~13 tok/s | LoRA training only |

\* **[estimate]** from ~4.2 B total parameters [25] × bits-per-weight. It
excludes the vision tower, which you won't load. Check the actual file sizes
on the model page.

Small models lose more quality to 4-bit quantization than big ones, so
prefer Q5/Q6 if memory allows. **Run the Buddy eval suite
(`buddy-design.md` §6) on each quant**, because "does it still voice the
planted bug faithfully" is the metric that matters, not perplexity.

## 3. Memory at 16, 24 and 32 GB

Budget = macOS + services (~3–4 GB) + model weights + KV cache for all slots
+ (optional) guard model + headroom. By default macOS lets the GPU wire only
part of RAM, roughly 65–75%. It can be raised with
`sudo sysctl iogpu.wired_limit_mb=…`, but the key is undocumented by Apple
and the default percentage is reported inconsistently [26][27].
**Leave it at the default unless you hit the limit.**

**KV cache math** (fp16 KV, per token = 2 × attn_layers × kv_heads × head_dim × 2 bytes):

| Model | Per token | 12 slots × 8k tokens (98k tokens total) |
|---|---|---|
| Qwen3.5-4B (8 attn layers × 4 KV heads × 256) [2] | **32 KB** | **~3.2 GB** (+ ~50 MB/seq of DeltaNet state **[estimate]**) |
| Qwen3-4B-Instruct-2507 (36 layers × 8 KV heads × 128) **[config values from memory; verify in config.json]** | 144 KB | **~14 GB** (≈7 GB with q8_0 KV) |

That difference is why Qwen3.5-4B is the primary pick for a 16–24 GB mini.

In llama.cpp, `-c` is the **total** context shared by all slots (e.g.
`-c 98304 -np 12` ≈ 8k each) **[verify: the README section on per-slot
splitting was not fully read; see `--kv-unified` / `--kv-unified-per-slot`
in `llama-server --help`]** [3].

| Mini RAM | What fits comfortably | Verdict |
|---|---|---|
| **16 GB** | Qwen3.5-4B Q4_K_M (~2.7 GB) + 12 × 8k KV (~3.2 GB) + optional Qwen3Guard-0.6B (~0.6 GB Q8) ≈ 7 GB on the GPU. That is inside the default limit. | **Serving only.** LoRA training a 4B means stopping the server and using QLoRA. |
| **24 GB** | Q5_K_M/Q6_K + 12 × 8–16k KV + guard model, with room to spare. You can keep the server up during QLoRA if the server is lightly loaded. | **Recommended.** Same price tier as the education 16 GB plus +$200 at launch [24]. |
| **32 GB** | Q8_0 for evals, a second model (e.g. Qwen3.5-9B for the teacher), BF16 LoRA on the 4B. | Comfortable; worthwhile if Phase 2 fine-tuning is certain. |

## 4. Expected speed under concurrent load

**No published benchmark covers a base M4 Mac mini serving a 4B model to 12
concurrent users.** The numbers below are derived from the closest
measurements, and every derived number is marked.

Measured anchors:
- Qwen3-4B 4-bit, **M4 Max** (546 GB/s), single stream: mlx-lm 128.9,
  llama.cpp 118.2, vllm-mlx 159.0 tok/s [12].
- Concurrency scaling, **M4 Max**, Qwen3-0.6B: 441 → 1642 tok/s aggregate at
  16 concurrent requests (3.7×). Qwen3-8B scales 2.6× [12].
- **M5 Pro**, Gemma-4-E4B (a ~4B-class model), vllm-metal: 24.3 / 93.4 /
  151.8 aggregate tok/s at c = 1 / 8 / 16 [15] *(values from the paper's
  tables via a summarised read. Re-check against the PDF.)*
- Published *estimates* for Qwen3.5-4B Q4_K_M on a base M4 16 GB:
  ~35–39 tok/s single stream [28][29].

**[estimate] for the base M4, Qwen3.5-4B Q4_K_M, llama-server, 12 slots:**

| Students generating *at the same moment* | Aggregate tok/s | Per-student tok/s | Feels like |
|---|---|---|---|
| 1 | ~30–40 | ~30–40 | instant |
| 4 | ~60–90 | ~15–22 | fast |
| 12 (everyone hits Enter together) | ~70–120 | **~6–10** | readable. Kids read ~4–5 words/s ≈ 5–7 tok/s. |

Reasoning: the M4 has ~22% of the M4 Max's bandwidth and a quarter of its GPU
cores. Batching gains on the base chip will be smaller than the 2.6–3.7×
seen on a Max, because compute saturates sooner. **Time-to-first-token is
the real risk.** Long system prompts (Buddy's is ~650 tokens with challenge
context) must be prefilled for every request. Keep prompts short and leave
llama.cpp's prompt cache on (it reuses a shared prefix per slot).

In real classes, students are rarely all generating at once. Expect 2–5
concurrent requests.

**If it's too slow:** (1) drop to Q4_K_M, (2) cap `max_tokens` (the proxy
defaults to 700), (3) drop to Qwen3.5-2B for Phase 0, or (4) step up to an
M4 Pro (273 GB/s ≈ 2.3× decode) [24].

### Load-test before the first class (30 minutes)

```bash
# On a staff laptop on the LAN. Uses only curl + xargs, nothing to install.
# 12 parallel requests, each asking for ~300 tokens.
seq 12 | xargs -P 12 -I{} sh -c '
  /usr/bin/time -p curl -s http://MINI_IP:8088/v1/chat/completions \
    -H "Authorization: Bearer $KEY" -H "Content-Type: application/json" \
    -d "{\"model\":\"buddy/1.3\",\"messages\":[{\"role\":\"user\",\"content\":\"Show me your count_pairs code and explain it.\"}]}" \
    -o /dev/null' 2>&1 | grep real
# Then: curl -s http://127.0.0.1:8081/metrics | grep -E "tokens_predicted|requests_processing"
```

Pass criteria: every request finishes within 60 s and none time out.
Record the numbers in this file for the next admin.

## 5. Step-by-step setup

> These are the steps **to perform later**. Nothing was executed during this
> research pass. Commands assume macOS 26 and Homebrew. Pin versions you
> tested; record them in `infrastructure/VERSIONS.md` (create on install).

### 5.1 Base OS hygiene
1. Name it `buddy-mini`. Give it a **DHCP reservation** (static IP) and an
   internal DNS name on the **student VLAN**.
2. System Settings: turn on FileVault. Turn off sleep: Energy → "Prevent
   automatic sleeping", or `sudo pmset -a sleep 0 disksleep 0`. Turn on
   "Start up automatically after a power failure". Turn on automatic security
   updates, but **schedule macOS major upgrades manually**, during breaks.
3. Create a standard (non-admin) user **`_buddy`**, or a hidden service
   account, to own the model files, logs and processes.
4. Firewall: turn on the macOS application firewall. Add a `pf` rule or
   switch ACL that allows **only TCP 8088 (the proxy) from the student VLAN**,
   plus SSH and Screen Sharing from the admin VLAN. Port 8081
   (llama-server) stays on `127.0.0.1` only.

### 5.2 Install the server and model
```bash
brew install llama.cpp          # provides llama-server; or use a pinned release build
mkdir -p /Users/Shared/buddy/{models,logs,keys}
# Download the GGUF ONCE on the admin network, verify its SHA256 against the
# model page, then copy it in. Record the hash in VERSIONS.md.
#   /Users/Shared/buddy/models/Qwen3.5-4B-Q5_K_M.gguf
```

### 5.3 Run `llama-server` (localhost only)
```bash
# -np 12 -c 98304 : 12 slots, total context (~8k each; verify split semantics)
# -ngl 99         : all layers on the GPU
# --jinja         : use the model's chat template (needed for enable_thinking)
# --metrics       : Prometheus /metrics
llama-server \
  -m /Users/Shared/buddy/models/Qwen3.5-4B-Q5_K_M.gguf \
  --alias buddy-base \
  --host 127.0.0.1 --port 8081 \
  -np 12 -c 98304 -ngl 99 --jinja --metrics \
  --api-key-file /Users/Shared/buddy/keys/upstream.key
```
Flag names come from the server README [3]. **Confirm them with
`llama-server --help` on the installed build**, since flags change between
builds.

### 5.4 Run the Buddy proxy (LAN-facing)
```bash
export BUDDY_HOST=0.0.0.0 BUDDY_PORT=8088 \
       BUDDY_UPSTREAM=http://127.0.0.1:8081/v1 \
       BUDDY_UPSTREAM_KEY="$(cat /Users/Shared/buddy/keys/upstream.key)" \
       BUDDY_KEYS_FILE=/Users/Shared/buddy/keys/class-keys.txt \
       BUDDY_TEACHER_KEY="$(cat /Users/Shared/buddy/keys/teacher.key)" \
       BUDDY_LESSONS_DIR=/Users/Shared/buddy/zero-to-gpt/lessons \
       BUDDY_LOG_DIR=/Users/Shared/buddy/logs \
       BUDDY_RETENTION_DAYS=30
python3 /Users/Shared/buddy/zero-to-gpt/infrastructure/buddy/buddy_proxy.py
```

### 5.5 launchd services

`/Library/LaunchDaemons/org.zerotogpt.llama-server.plist` (a system daemon,
so it starts at boot without anyone logged in):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>org.zerotogpt.llama-server</string>
  <key>UserName</key><string>_buddy</string>
  <key>ProgramArguments</key><array>
    <string>/opt/homebrew/bin/llama-server</string>
    <string>-m</string><string>/Users/Shared/buddy/models/Qwen3.5-4B-Q5_K_M.gguf</string>
    <string>--alias</string><string>buddy-base</string>
    <string>--host</string><string>127.0.0.1</string><string>--port</string><string>8081</string>
    <string>-np</string><string>12</string><string>-c</string><string>98304</string>
    <string>-ngl</string><string>99</string><string>--jinja</string><string>--metrics</string>
    <string>--api-key-file</string><string>/Users/Shared/buddy/keys/upstream.key</string>
  </array>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>ThrottleInterval</key><integer>10</integer>
  <key>StandardOutPath</key><string>/Users/Shared/buddy/logs/llama-server.out.log</string>
  <key>StandardErrorPath</key><string>/Users/Shared/buddy/logs/llama-server.err.log</string>
</dict></plist>
```

Create a second plist, `org.zerotogpt.buddy-proxy`, the same way, with
`ProgramArguments` = `/usr/bin/python3 …/buddy_proxy.py` and an
`EnvironmentVariables` dict holding the `BUDDY_*` values from §5.4. Then:

```bash
sudo chown root:wheel /Library/LaunchDaemons/org.zerotogpt.*.plist
sudo chmod 644 /Library/LaunchDaemons/org.zerotogpt.*.plist
sudo launchctl bootstrap system /Library/LaunchDaemons/org.zerotogpt.llama-server.plist
sudo launchctl bootstrap system /Library/LaunchDaemons/org.zerotogpt.buddy-proxy.plist
sudo launchctl print system/org.zerotogpt.llama-server | head -30   # check state
sudo launchctl kickstart -k system/org.zerotogpt.buddy-proxy         # restart after config edits
```

> GPU access from a LaunchDaemon running as a non-GUI user: Metal works
> headless for compute on Apple Silicon in community practice, but **test
> this specifically** **[unverified]**. If it fails, run the jobs as a
> LaunchAgent under an auto-login service account instead.

### 5.6 Auth model
- **Students → proxy:** one bearer token **per seat** (laptop), not per
  child, listed in `class-keys.txt` (`token seat-label`). Rotate them each
  term. A seat→child mapping, if needed, lives on paper or in the teacher's
  gradebook, **not on the mini**, so Buddy's logs stay pseudonymous.
- **Proxy → llama-server:** a separate upstream key, and llama-server
  listens on localhost only.
- **Teacher:** a separate `BUDDY_TEACHER_KEY` unlocks `GET /teacher/flags`.
- **No TLS on the LAN in Phase 0/1.** It is acceptable on a segmented
  student VLAN for low-sensitivity coding chat. To add TLS later, put
  Caddy in front with an internal CA, and push that CA to the MacBooks via
  MDM.
- Generate tokens with `python3 -c "import secrets;print(secrets.token_urlsafe(24))"`.

### 5.7 Monitoring (simple, local)
- `curl -s 127.0.0.1:8081/health` (llama-server) and
  `curl -s 127.0.0.1:8088/healthz` (proxy) from a cron job or launchd
  `StartInterval` script every 5 min. On failure, run
  `launchctl kickstart -k` and send a local notification or email to the admin.
- `curl -s -H "Authorization: Bearer $UPSTREAM" 127.0.0.1:8081/metrics`
  shows tokens/s, queue depth and slot usage (Prometheus format) [3]. If
  the school already runs Prometheus or Grafana, scrape it. If not,
  `/slots` plus the proxy's `latency_ms` field in the JSONL log are enough.
- Watch memory pressure with `memory_pressure` and in Activity Monitor during
  the load test.
- Disk: logs are small. A class of 12 makes a few MB a day, and retention
  deletes old files automatically.

## 6. Running LoRA training on the same mini

Do it **after school**. Either `launchctl bootout` llama-server, or keep it
up on a 24–32 GB machine with Q4 weights. The recipe is in
`buddy-design.md` §5. `mlx-lm` is pip-installed into a uv-managed venv
owned by the admin account, not `_buddy`.

## Sources

1. Qwen announcement of the Qwen3.5 small series (0.8B/2B/4B/9B) - https://x.com/Alibaba_Qwen/status/2028460046510965160
2. Qwen3.5-4B model card (architecture: 24 Gated DeltaNet + 8 attention layers, 4 KV heads, head dim 256, 262k context) - https://huggingface.co/Qwen/Qwen3.5-4B
3. llama.cpp server README (`--parallel`, `--cont-batching` default enabled, `--api-key`, `--api-key-file`, `--metrics`, `--slots`, `--kv-unified-per-slot`) - https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md
4. mlx-lm SERVER.md ("not recommended for production"; no auth; quantized KV disables batching) - https://github.com/ml-explore/mlx-lm/blob/main/mlx_lm/SERVER.md
5. mlx-lm releases (v0.32.2 latest at time of check) - https://github.com/ml-explore/mlx-lm/releases
6. Apple WWDC26 "Run local agentic AI on the Mac using MLX" (continuous batching in MLX-LM server) - https://developer.apple.com/videos/play/wwdc2026/232/
7. Field report: mlx_lm 0.31.3 batching crash, workaround disables concurrency - https://github.com/utku-local/aider-toolcalling/pull/100
8. Ollama MLX runner ignoring OLLAMA_NUM_PARALLEL (issue #17280 context) - https://www.popularai.org/p/ollama-num-parallel-mac-mlx
9. Ollama PR #19197 "mlx: support concurrent generation" (merged 2026-11-10) and releases (v0.40.16 stable, v0.40.17-rc0) - https://github.com/ollama/ollama/pull/19197 , https://github.com/ollama/ollama/releases
10. LM Studio 0.4.0 (parallel requests, llmster headless) - https://lmstudio.ai/blog/0.4.0
11. LM Studio parallel requests docs - https://lmstudio.ai/docs/app/advanced/parallel-requests
12. vllm-mlx paper, Table 1 and §4.1 (M4 Max throughput, concurrency scaling) - https://arxiv.org/abs/2601.19139
13. Ollama MLX performance blog - https://ollama.com/blog/mlx-performance
14. LM Studio API authentication docs - https://lmstudio.ai/docs/developer/core/authentication
15. SiliconBench: nine Apple Silicon serving engines (M5 Pro; audit gates, memory, scaling) - https://arxiv.org/abs/2609.19169
16. vllm-metal v0.28.0 announcement - https://vllm.ai/blog/2026-09-22-vllm-metal-v0-28-0
17. Qwen (Wikipedia; Qwen3.8 release history) - https://en.wikipedia.org/wiki/Qwen
18. Qwen3.5-4B thinking default / enable_thinking - https://docs.doubleword.ai/inference-api/models/qwen-qwen3-5-4b
19. Qwen3.5-4B (Modal listing: thinking on by default) - https://modal.com/library/qwen/qwen3-5-4b
20. Report on Qwen3.5-4B overthinking simple prompts - https://aiproductivity.ai/news/qwen35-4b-overthinking-simple-prompts/
21. Unsloth Qwen3.5 small GGUFs - https://x.com/UnslothAI/status/2028463220063871426
22. Qwen3-4B-Instruct-2507 model card - https://huggingface.co/Qwen/Qwen3-4B-Instruct-2507
23. Apple M4 (Wikipedia) - https://en.wikipedia.org/wiki/Apple_M4
24. Mac mini (2024) configs and bandwidth (M4 120 GB/s; 16/24/32 GB; M4 Pro 273 GB/s) - https://lowendmac.com/?p=53416 , https://www.techrepublic.com/article/apple-mac-mini-m4-launch/
25. dQwen3.5 paper (Qwen3.5-4B ≈ 4.21 B total params) - https://arxiv.org/abs/2609.20751
26. MLX `set_wired_limit` docs (iogpu.wired_limit_mb) - https://ml-explore.github.io/mlx/build/html/python/_autosummary/mlx.core.set_wired_limit.html
27. Community note on the macOS Metal wired-memory cap - https://github.com/ivanopcode/devnote-override-macos-metal-vram-cap
28. ModelFit estimate, Qwen3.5-4B on M4 16 GB (~35 tok/s est.) - https://modelfit.io/blog/best-llm-mac-mini-m4-16gb/
29. llmcheck estimate (~39 tok/s, Ollama) - https://llmcheck.net/benchmarks
