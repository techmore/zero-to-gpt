# Zero to GPT: local AI infrastructure

Research and design for running the course **local-first**: one Mac mini
serves the "Buddy" model to a class of ~12 students on MacBook Neo laptops.
No cloud, and student data stays on campus.

> Status: **design only**, researched **2026-11-12**. Nothing has been
> installed, downloaded or load-tested. Every factual claim in these docs
> links to a source, and anything not verified is marked **[unverified]**
> or **[estimate]**.

| Doc | What's in it |
|---|---|
| [mac-mini-setup.md](mac-mini-setup.md) | Server comparison, model/quant choice, memory at 16/24/32 GB, expected tok/s, launchd, auth, monitoring |
| [student-macbook-setup.md](student-macbook-setup.md) | IDE + AI integration, uv, why no containers |
| [buddy-design.md](buddy-design.md) | Planted mistakes with a live model, Phase 0 prompt-only, Phase 1 LoRA recipe + evals |
| [buddy/system-prompt.md](buddy/system-prompt.md) | Buddy's system prompt (v0.1) |
| [buddy/buddy_proxy.py](buddy/buddy_proxy.py) | Stdlib-only proxy: challenge injection, safety hook, logging + retention |
| [training-on-apple-silicon.md](training-on-apple-silicon.md) | nanoGPT/nanochat on Macs, MLX ports, the cloud "boss level", capstone |
| [safety-and-privacy.md](safety-and-privacy.md) | COPPA/FERPA in practice, logging, filtering, teacher visibility, family letter, consent |

## Decision summary

| Question | Decision | Why (details in the linked doc) |
|---|---|---|
| Model | **Qwen3.5-4B**, thinking disabled | Newest ~4B Qwen (Mar 2026, Apache-2.0). Its hybrid attention makes the KV cache ~4–5× smaller than Qwen3-4B's, which matters for 12 concurrent students. |
| Fallback model | Qwen3-4B-Instruct-2507 | Non-thinking only, text-only, simple |
| Serving | **llama.cpp `llama-server`** (`-np 12`, continuous batching) on localhost | The only option with stable batching, built-in API keys **and** Prometheus metrics today. Flat memory under load. mlx-lm's server is "not for production"; Ollama's MLX concurrency fix is only in a release candidate. |
| Gateway | **`buddy_proxy.py`** on the LAN | Seat tokens, challenge injection, safety filter, local logs with retention |
| Mini RAM | **24 GB M4** (16 GB OK for serving only) | Room for Q5/Q6 weights, 12 KV slots, a guard model and overnight QLoRA |
| Student IDE | **VS Code + built-in BYOK "Custom Endpoint"** | No GitHub sign-in or Copilot plan needed. One tool for code, notebooks and chat. Continue is frozen after an acquisition. |
| Python | **uv**, Python pinned (3.12/3.13) | One binary, lockfile, no admin. nanochat already uses it. |
| Containers | **None** for students; none needed on the mini | Linux containers on macOS get no Metal GPU; training/inference must be native |
| Planted mistakes | **From `challenge.json`, voiced by the model** (never learned by it) | Known, gradable, scoped, honest |
| Fine-tuning | **Phase 1 LoRA for persona + plant-following**, gated by evals | Reliability at 4B; never fine-tune "make mistakes" |
| Training capstone | **nanoGPT char-level *small config* on each laptop** (~3–6 min) + **full `shakespeare_char` and nanochat `runcpu.sh` on the mini** (overnight) | Fits 8 GB laptops and class periods; full pipeline demo |
| Cloud | Optional teacher-run **8×H100 nanochat speedrun**, ~$60–80 (budget $100) | Public data only; a "boss level" demo |

## Recommended stack

```
                         STUDENT VLAN (school LAN)
 ┌──────────────────────────────┐            ┌────────────────────────────────────────────┐
 │ MacBook Neo ×12 (8 GB)       │            │ Mac mini M4 24 GB  "buddy-mini"            │
 │                              │            │                                            │
 │  VS Code (managed profile)   │  HTTP      │  launchd: org.zerotogpt.buddy-proxy        │
 │   ├ Chat → Custom Endpoint ──┼──:8088────▶│   buddy_proxy.py  (python3, stdlib)        │
 │   │   model = buddy/<id>     │  Bearer    │    ├ seat tokens, rate limit               │
 │   ├ Python + Jupyter ext.    │  seat token│    ├ + system-prompt.md + challenge.json   │
 │   └ terminal                 │            │    ├ safety hook (rules [+ Qwen3Guard])    │
 │                              │            │    ├ JSONL logs ─▶ /Users/Shared/buddy/logs │
 │  uv .venv (pinned Python)    │            │    │              (30-day auto purge)      │
 │   ├ PyTorch (MPS/CPU)        │            │    └─▶ 127.0.0.1:8081                      │
 │   ├ nanoGPT labs             │            │  launchd: org.zerotogpt.llama-server       │
 │   └ python3 -m bughunt  ◀────┼─ grades    │   llama-server -np 12 --metrics --api-key  │
 │      (offline fallback)      │  tests     │   Qwen3.5-4B Q5_K_M  (thinking off)        │
 └──────────────────────────────┘  locally   │                                            │
                                             │  after hours:                              │
 ┌──────────────────────────────┐            │   mlx-lm LoRA (persona) → fuse → GGUF      │
 │ Teacher laptop               │──:8088────▶│   nanochat runs/runcpu.sh (class model)    │
 │  GET /teacher/flags          │  teacher   │                                            │
 └──────────────────────────────┘  key       │  FileVault · firewall: 8088 from VLAN only │
                                             └────────────────────────────────────────────┘
        nothing leaves campus  ·  optional, teacher-run: cloud 8×H100 nanochat speedrun (public data)
```

## Phased rollout

| Phase | When | What | Exit criteria |
|---|---|---|---|
| **0: Pilot** | Summer session (~5 students) | Mini + llama-server + proxy. **Prompt-only Buddy** with rules-only safety. VS Code profile on 5 laptops. Scripted `bughunt` always available. Family letter + opt-in. | Load test passes (§4 of mac-mini-setup). Plant fidelity ≥ 90% on lesson 1. No unhandled safety events. Teacher comfortable reading flags. |
| **0.5: Harden** | Before fall | Plant-fidelity check in the proxy. Log permissions. Teacher daily digest. Red-team set written. Decide 16 vs 24 GB from pilot data. | Red-team 100% handled |
| **1: Class of 12** | Fall term | All 12 seats, 30-day retention, weekly flag review. Capstone: nanoGPT small config on laptops; full config and nanochat `runcpu.sh` on the mini. | p95 latency < 30 s at 12 concurrent; students' debrief feedback OK |
| **2: Persona LoRA** | Mid-year | Staff-written dataset (400–800 rows) → mlx-lm QLoRA overnight → eval gate (buddy-design §6) → GGUF → swap in with rollback. Optional Qwen3Guard-0.6B after measuring false positives. | All eval gates pass vs base |
| **3: Polish** | Later | Re-evaluate vllm-metal / Ollama-MLX concurrency. Teacher live view. TLS via an internal CA. Optional cloud "boss level". Adult self-paced track: run everything on one personal Mac. | — |

## Key numbers (details and sources in the linked docs)

- **Memory:** Qwen3.5-4B Q4_K_M ≈ 2.7 GB weights; KV ≈ 32 KB/token, so 12
  students × 8k context ≈ 3.2 GB. The same setup with Qwen3-4B would need
  ≈ 14 GB. A 16 GB mini holds the full serving stack in ~7 GB of GPU memory.
- **Speed (base M4) [estimate]:** ~30–40 tok/s for one student; ~6–10 tok/s
  each if all 12 generate at once (~70–120 aggregate). Kids read ~5–7 tok/s.
  An M4 Pro is ~2.3× faster.
- **nanoGPT shakespeare_char:** small "MacBook" config ~3 min (README).
  Full baby GPT ~88 min on an M4 mini (one report). On a Neo, ~2–3 h
  [estimate], so run it on the mini.
- **nanochat `runcpu.sh`:** ~40 min on an M3 Max (Karpathy). ~1.5–3 h on an
  M4 mini [estimate]. Not recommended on 8 GB Neos.
- **Cloud speedrun:** ~1.5 h on 8×H100 (README; leaderboard record 1.65 h
  of training). At $3.79–3.99/GPU-h that's ≈ $60–80 all-in; **budget $100**.
- **LoRA (QLoRA, 4B, ~1.7 M tokens):** ~1.5–3 h overnight on an M4
  [estimate].

## Open questions for the sysadmin

1. **Mini spec:** is a 24 GB M4 (or an M4 Pro) in budget? Is it already
   bought?
2. **Network:** is there a student VLAN? Can we reserve an IP and DNS name
   and firewall port 8088 to that VLAN only?
3. **MDM:** which one (Jamf, Mosyle, Kandji…)? Can it push VS Code
   settings/profiles and run `uv sync` before day 1?
4. **Federal funds:** does the school receive any Dept. of Education program
   funds directly (the FERPA trigger)? Does the school have counsel to
   review the family letter?
5. **Safeguarding:** who receives wellbeing flags (counselor?), and within
   what time?
6. **Retention:** is 30 days OK, or should it be end-of-term? Should logs
   keep content or metadata only?
7. **Who runs it day to day?** If it's not the sysadmin, consider LM Studio
   (GUI + tokens) instead of llama-server; check its license for school use.
8. **Cloud boss level:** is ~$100 one-off acceptable on a school account?
   Who holds the card?
9. **Verify on the hardware** before building lessons on them: VS Code's
   Custom Endpoint menu and settings; Metal from a LaunchDaemon; mlx-lm
   LoRA support for Qwen3.5's architecture; llama-server per-slot context
   semantics.
