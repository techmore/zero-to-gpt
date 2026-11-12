# Training on Apple Silicon: what's realistic for the course

> Status: research as of **2026-11-12**. No training was run for this
> document. Timings are either **cited** (with source) or marked
> **[estimate]**. Re-measure on one MacBook Neo and the mini before
> building lesson timings around them.

## Hardware recap

| Machine | GPU | Memory | Bandwidth |
|---|---|---|---|
| Student **MacBook Neo** (A18 Pro) | 5-core | 8 GB | 60 GB/s [1] |
| **Mac mini M4** | 10-core | 16/24/32 GB | 120 GB/s [2][3] |
| Reference: MacBook Pro M3 Max (Karpathy's nanochat CPU/MPS tuning machine) | up to 40-core | — | up to 400 GB/s |

## 1. nanoGPT `shakespeare_char` with PyTorch MPS

nanoGPT supports `--device=mps` on Apple Silicon. The README notes a 2–3×
speed-up over CPU, and you must also pass `--compile=False` off-CUDA [4][5].
The repo is now marked deprecated in favour of nanochat, but it's still the
cleanest teaching code [5].

| Config | Where | Time | Source |
|---|---|---|---|
| **Full "baby GPT"** (6 layers, 384 dim, ~10.7 M params, 5000 iters) | A100 | ~3 min, val loss ~1.47 | nanoGPT README [4] |
| Full baby GPT, MPS | **M4 Mac mini 16 GB** | **~88 min** (~1 s/iter; first step 88 s for Metal shader compile) | one developer's log [6] |
| Full baby GPT, MPS | "Apple Silicon" (chip unspecified) | ~25 min | HF model card [7] |
| **"MacBook" small config**: `--device=cpu --compile=False --eval_iters=20 --log_interval=1 --block_size=64 --batch_size=12 --n_layer=4 --n_head=4 --n_embd=128 --max_iters=2000 --lr_decay_iters=2000 --dropout=0.0` | MacBook CPU | **~3 min**, loss ~1.88 | README command [4]; time/loss quoted from a README mirror [8] |

**On the MacBook Neo [estimate]:**
- Small config: **~3–6 min** on CPU. With `--device=mps` it may be a little
  faster or slower, because tiny models often don't benefit from the GPU.
  Try both on day 0.
- Full baby GPT: the Neo has half the M4's GPU cores and half its
  bandwidth, so expect **~2–3 h**. That's **not a class activity.** Run it
  on the mini during the lesson and show the loss curve on the projector.
- Memory is not a problem. The full baby GPT needs well under 2 GB.

**Suggested lesson ladder:**
| Tier | Settings | Neo time [estimate] | Output quality |
|---|---|---|---|
| "Speed round" | small config, `max_iters=500` | ~1 min | gibberish with real-looking words |
| **"Class run"** | small config as above | ~3–6 min | Shakespeare-ish shape (names, line breaks) |
| "Lunch run" | `n_layer=6 n_embd=256 block_size=128 max_iters=3000` | ~20–40 min | noticeably better |
| "Overnight on the mini" | full baby GPT | ~1.5 h on M4 [6] | the README's sample quality |

## 2. MLX ports of nanoGPT

| Project | Notes |
|---|---|
| `vithursant/nanoGPT_mlx` | The original MLX port of nanoGPT. Prepares Shakespeare the same way and trains on the Mac GPU [9] |
| `generalMG/nanoGPT_mlx` | Fork with MLX-native LayerNorm/AdamW. Needs MLX ≥ 0.29.4 [10] |
| `pranavjad/mlx-gpt2` | ~200-line GPT-2 in MLX. ~10 min training on a MacBook (author's claim) [11] |
| `dx-dtran/gpt2-mlx` | GPT-2 in MLX, can train from scratch [11] |
| `scasella/nanochat-mlx` | nanochat on MLX **[found in search, not reviewed]** [12] |

**Course recommendation:** teach with **PyTorch nanoGPT**, because it
matches Karpathy's videos and nanochat. Offer **one MLX lab** as a "same
model, Apple-native framework" comparison, mainly for adult learners. None of
these ports is official or long-term maintained, so pin a commit.

## 3. Does nanochat run on a Mac?

**Yes, as a demo.** The repo ships **`runs/runcpu.sh`**: *"a very simple
example of running on CPU or Apple Silicon. It dramatically shrinks the LLM
that is being trained… You will not get strong results in this way"* [13].
The script header adds: *"Training LLMs requires GPU compute and $$$. You will
not get far on your Macbook."* [14]. Device auto-detects CUDA → MPS → CPU.
The default dtype on MPS is fp32, and `NANOCHAT_DTYPE=bfloat16` reportedly
works on recent macOS [13][15].

What `runcpu.sh` does (last tuned 2026-01-17) [14]:
```bash
uv sync --extra cpu
python -m nanochat.dataset -n 8                      # 8 data shards
python -m scripts.tok_train --max-chars=2000000000   # ~34 s on M3 Max
python -m scripts.base_train --depth=6 --head-dim=64 --window-pattern=L \
  --max-seq-len=512 --device-batch-size=32 --total-batch-size=16384 \
  --num-iterations=5000 ...                          # "~30 minutes on my MacBook Pro M3 Max"
python -m scripts.base_eval --device-batch-size=1 --split-tokens=16384 --max-per-task=16
python -m scripts.chat_sft --num-iterations=1500 ... # "~10 minutes on my MacBook Pro M3 Max"
# python -m scripts.chat_cli -p "What is the capital of France?"   -> should say Paris
```
A community walkthrough reports a 73 M-parameter run in **~43 min on an
M4 Max** (MPS) with final val_bpb 1.17 [15].

**Smallest meaningful local run:** `runcpu.sh` **as-is, on the Mac mini,
overnight.** It's "meaningful" because it walks the *entire* pipeline:
download → tokenizer → pretrain → eval → SFT → chat. The result is a class
chat model that can answer "capital of France?" and hilariously fail
everything else.
- **M4 mini [estimate]:** ~1.5–3 h total. The M4 has a quarter of the M3
  Max's maximum GPU cores, though fp32 at this tiny size is not purely GPU
  bound.
- **MacBook Neo:** **not recommended.** It has 8 GB, the tokenizer step
  scans 2 B characters, and the run would take an estimated 4+ hours.
  Students can still *read* the scripts and *chat* with the mini-trained
  model.

## 4. "Boss level": the real nanochat speedrun in the cloud

- `runs/speedrun.sh` targets **one 8×H100 node**. The README says
  **~1.5 h** (down from 3 h) and frames GPT-2-grade training as **"$48
  (~2 hours of 8×H100)"** at ~$3/GPU-h, or **~$15 on spot** [13].
- The "time to GPT-2" leaderboard's best entry is **1.65 h** of training
  (CORE 0.2626, 2026-03-14), using a d24 model with fp8 [16]. The leaderboard
  file showed nothing newer at the time of checking.
- **Prices in Nov 2026:** 8×H100 SXM on-demand is about **$3.79–$3.99 per
  GPU-hour** (Lambda), i.e. **~$30–32/h per node**. RunPod's community SXM
  tier is around $2.69/GPU-h (≈$21.50/h for 8) **[unverified for an 8-GPU
  node]** [17][18][19].

**Cost estimate for the class demo:** ~1.5–2 h of training + ~20–30 min of
setup/data download/eval ≈ 2–2.5 node-hours → **≈ $60–80 on-demand**, or
**≈ $45–55 on community/spot-style pricing**. **Budget $100** to absorb a
retry. That's still the README's "best ChatGPT that $100 can buy."

Privacy: the training data is public web text, and **no student data
leaves campus**. A staff member runs it on a school-owned account. Students
watch the loss curve live on the projector, and the weights can be
downloaded back to the mini afterward to chat with (a d20–d24 model is a few
GB) **[verify the export path in the current repo]**.

## 5. Capstone recommendation (local-only)

**"Build your own tiny GPT, then Bug-Hunt it."**

1. **Every student (Neo, ~5 min):** train a nanoGPT char-level model on a
   **class-picked, public-domain corpus** (e.g., fables, song lyrics in the
   public domain, the class's *fictional* stories). Avoid students'
   personal writing about real people. Then tune `temperature`/`top_k` and
   explain what changed.
2. **Bug Hunt on their own model:** the teacher plants bugs in a sampling
   function (e.g., softmax without subtracting the max, an off-by-one in the
   context window). Students write tests. Same ladder, same engine.
3. **Class project (mini, overnight):** run `nanochat/runs/runcpu.sh`. The
   proxy can expose the result as model `classgpt`, next to Buddy, so
   students can compare a 6-layer model trained overnight with a 4B model
   trained on trillions of tokens. **The lesson is scale.**
4. **Optional boss level (teacher-run, ~$100):** the 8×H100 speedrun,
   projected live. Opt-in, and only if budget allows.

## Sources

1. Apple support tech specs: MacBook Neo - https://support.apple.com/en-sg/126322
2. Apple M4 (Wikipedia) - https://en.wikipedia.org/wiki/Apple_M4
3. Mac mini (2024) configurations - https://lowendmac.com/?p=53416
4. karpathy/nanoGPT README (shakespeare_char, MacBook CPU command, MPS note) - https://github.com/karpathy/nanoGPT
5. nanoGPT troubleshooting (CPU needs `--device=cpu` and `--compile=False`) - https://www.mintlify.com/karpathy/nanoGPT/advanced/troubleshooting
6. Tiny GPT Shakespeare dev log (M4 Mac mini 16 GB, ~88 min / 5000 steps) - https://huggingface.co/bmeyer2025/tiny-gpt-shakespeare/blob/main/DEVLOG.md
7. nanoGPT Shakespeare model card (~25 min on Apple Silicon MPS) - https://huggingface.co/therealcharles/nanogpt-shakespeare
8. nanoGPT README mirror ("~3 minutes… loss of only 1.88") - https://gitee.com/alamhubb/nanoGPT
9. vithursant/nanoGPT_mlx - https://github.com/vithursant/nanoGPT_mlx
10. generalMG/nanoGPT_mlx - https://github.com/generalMG/nanoGPT_mlx
11. MLX GPT-2 ports - https://www.sourcepulse.org/projects/1837558 (pranavjad/mlx-gpt2), https://github.com/dx-dtran/gpt2-mlx
12. scasella/nanochat-mlx - https://github.com/scasella/nanochat-mlx
13. karpathy/nanochat README (CPU/MPS section; speedrun ~1.5 h; $48 / ~$15 spot) - https://github.com/karpathy/nanochat
14. nanochat `runs/runcpu.sh` - https://github.com/karpathy/nanochat/blob/master/runs/runcpu.sh
15. nanochat community walkthrough (73 M params, 43 min on M4 Max) - https://github.com/karpathy/nanochat/discussions/677
16. nanochat time-to-GPT-2 leaderboard - https://github.com/karpathy/nanochat/blob/master/dev/LEADERBOARD.md
17. H100 pricing tracker, Nov 2026 - https://www.thundercompute.com/blog/nvidia-h100-pricing
18. H100 pricing snapshot, Oct 2026 - https://www.hivenet.com/post/nvidia-h100-pricing
19. Lambda H100 pricing 2026 - https://www.spheron.network/blog/lambda-cloud-h100-pricing-2026/
