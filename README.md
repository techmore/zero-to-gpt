# Zero to GPT

**How do machines that "write" actually work? Let's build one, from counting letters by hand all the way to a tiny GPT.**

Zero to GPT is a free, open-source course on how large language models work. It starts with zero: a paper bag, some slips of paper, and a story. It ends at Andrej Karpathy's [nanoGPT](https://github.com/karpathy/nanoGPT) and [nanochat](https://github.com/karpathy/nanochat). Along the way it follows the real history: who was stuck on what problem, what they tried, and what they called it in their own words.

## Who it's for

- **Kids (grades 6–8).** Every lesson has a *Kid version*, an unplugged activity, and a short Python lab. It's built for a class of about 12, or a summer group of about 5.
- **Adults learning on their own.** Every lesson also has an *Adult version* with the real math, plus a **Math Ladder** that climbs from fractions to the attention formula.
- **Teachers, including non-experts.** Each lesson comes with a teacher guide, an answer key and timed block plans. You don't need to know machine learning to teach Lesson 1. You do need to be willing to say "let's check."

## Three ways to run it

| Path | For | Start here |
|---|---|---|
| **One-week intensive** | A summer week or a school "intensive" week | [`formats/one-week-intensive.md`](formats/one-week-intensive.md) |
| **Two-week deep dive** | Ends with every pair training and Bug-Hunting their own tiny GPT | [`formats/two-week-deep-dive.md`](formats/two-week-deep-dive.md) |
| **Self-paced** | A student at home, or an adult on their own; mastery checks, no deadlines | [`formats/self-paced.md`](formats/self-paced.md) |

Teachers: start with the [teacher prep checklist](formats/teacher-prep-checklist.md).

## The course map

The full map is in **[`ROADMAP.md`](ROADMAP.md)**: 14 main-path lessons, 8 optional side branches, and the Math Ladder. Every lesson runs as three 45-minute blocks: **A** unplugged + story, **B** Jupyter lab, **C** Bug Hunt.

| # | Lesson | Status |
|---|---|---|
| 01 | [The Guessing Machine](lessons/01-the-guessing-machine/README.md): can you guess the next word just by counting? | 🟡 In progress (complete draft, not yet classroom-tested) |
| 02–14 | Vectors → matrices → gradient descent → neurons → backprop → embeddings → attention → nanoGPT → assistants → nanochat → what we know now | ⚪ Planned ([see the roadmap](ROADMAP.md)) |

## The timeline

[`site/`](site/index.html) is a small static website with an interactive timeline of AI, from Bayes (1763) to nanochat (2025): 63 moments, the people behind them, the "AI winters" and hype booms, plus checked links to videos and books. Every event links to its lesson, or to its plan in the roadmap. Open `site/index.html` in a browser, or publish the repo with GitHub Pages (from the repo root). Its data lives in [`site/timeline/data/events.json`](site/timeline/data/events.json).

## Bug Hunters

In this course, students use an AI helper called **Buddy**, which runs on a computer at school. Buddy sometimes makes mistakes **on purpose**, and students are told this up front. Their job is to catch them by checking evidence and writing small tests. Sometimes Buddy is right, and then they have to *prove* it.

Buddy's planted mistakes climb the **mistake ladder** ([`classroom/bug-ladder.md`](classroom/bug-ladder.md)):

| Level | Name | What it looks like |
|---|---|---|
| **L1** | Plain wrong | An answer that is simply wrong. Count it, look it up, or run it. |
| **L2** | Confident fib | True facts mixed with made-up ones, said with total confidence |
| **L3** | Runs but wrong | Code that runs without errors and gives the wrong answer |
| **L4** | Lazy test | A test that passes but checks almost nothing |
| **L5** | Actually right | Buddy is correct. Distrust without checking is as lazy as trust without checking. |

The `bughunt` tool grades students' tests with no AI at all, so every Bug Hunt also works offline. `python3 -m bughunt list` hides the levels by default (mystery mode); teachers can add `--levels`.

## Recreate the Experiment

Each lesson's hands-on project redoes the *original* historical experiment at kid scale: Markov counting vowels in *Eugene Onegin*, Shannon's next-letter guessing game, Rosenblatt's perceptron learning X vs E, Michie's matchbox machine (MENACE) learning tic-tac-toe. Students compare their tiny version with the original and with today's. The catalog, with sources and verification marks, is in [`EXPERIMENTS.md`](EXPERIMENTS.md). Working prototypes are in [`experiments/prototypes/`](experiments/prototypes/).

## Threads that run through the whole course

- **Rules vs Learning.** Did a person write the rule, or did the machine learn it from examples? McCulloch–Pitts vs Rosenblatt, Deep Blue vs MENACE, ELIZA vs InstructGPT. ([`EXPERIMENTS.md`](EXPERIMENTS.md#rules-vs-learning-a-thread-through-the-whole-course))
- **What did it really learn?** Machines often find a shortcut: Clever Hans the horse, a classifier that looked at snow instead of wolves, X-ray models that recognized the hospital. ([`threads/shortcut-learning.md`](threads/shortcut-learning.md))
- **More context.** The history of AI is a history of giving machines more context. Lesson 1's machine sees one word; attention sees everything; shortcuts happen when a model uses the wrong context.
- **Thinking Moves.** Each breakthrough comes with a habit of mind you can use anywhere: *Count instead of argue*, *Be the machine*, *Know what it can't do*. ([`THINKING-MOVES.md`](THINKING-MOVES.md))

## Quick start

You need Python 3.12 or newer. Everything in Lesson 1 and the Bug Hunt uses only the standard library.

```bash
git clone <this repo> zero-to-gpt && cd zero-to-gpt

# Bug Hunt (plain python3, or with uv: uv run python -m bughunt list)
python3 -m bughunt list              # see the challenges (levels hidden)
python3 -m bughunt show 1.1          # read one
python3 -m bughunt selfcheck         # teachers: check every challenge still works

# Lesson 1 lab without Jupyter
python3 lessons/01-the-guessing-machine/lab/guessing_machine.py

# Lesson 1 notebook (needs JupyterLab, or open it in VS Code with the Jupyter extension)
uv run --with jupyterlab jupyter lab lessons/01-the-guessing-machine/lab/01-guessing-machine.ipynb

# The timeline: just open it in a browser
open site/index.html                 # macOS; or double-click the file
```

## Hardware: local-first

The course is designed so that **student data never leaves campus** ([`infrastructure/`](infrastructure/README.md)).

- **One Mac mini** (M4; 24 GB recommended, 16 GB is enough for serving only) runs Buddy: a small open model (Qwen3.5-4B) behind `llama-server` and a tiny, standard-library proxy that adds seat tokens, planted mistakes, a safety filter and short-lived local logs.
- **Student laptops are clients.** The MacBook Neo has **8 GB** of memory, so it talks to Buddy over the school network instead of running a model itself.
- **Training:** students train nanoGPT's *small* "MacBook" config on their own laptops (about 3–6 minutes). The full `shakespeare_char` config and nanochat's CPU/MPS demo run on the Mac mini, often overnight. Numbers and sources: [`infrastructure/training-on-apple-silicon.md`](infrastructure/training-on-apple-silicon.md).
- **Optional "boss level":** a teacher-run cloud nanochat speedrun (about $100), using public data only.

### Containers (CPU-only tools)

The [`Dockerfile`](Dockerfile), [`compose.yaml`](compose.yaml) and [`.devcontainer/`](.devcontainer/devcontainer.json) run **JupyterLab and the `bughunt` tools** on a teacher machine or in CI. Python (3.13.17, pinned by digest) and JupyterLab (4.6.5, with every dependency hash-pinned in [`container/requirements.txt`](container/requirements.txt)) are pinned exactly. JupyterLab is published on **127.0.0.1 only**.

```bash
docker compose up lab                      # then open the 127.0.0.1:8888 link it prints
docker compose --profile ci run --rm selfcheck
```

> **GPU/Metal work does not run in containers.** Buddy (the model server) and all model training need Apple's Metal GPU, which Linux containers on macOS can't use. Run them natively on macOS, as described in [`infrastructure/`](infrastructure/README.md). Students don't need containers at all.

## Credits

This course stands on the shoulders of **Andrej Karpathy**'s teaching projects, and points to them throughout:

- [nanoGPT](https://github.com/karpathy/nanoGPT) and [nanochat](https://github.com/karpathy/nanochat), the destination of the course.
- *Neural Networks: Zero to Hero*, his video series, including [*The spelled-out intro to language modeling: building makemore*](https://www.youtube.com/watch?v=PaCmpygFfXo) and [*Let's build GPT: from scratch, in code, spelled out*](https://www.youtube.com/watch?v=kCc8FmEb1nY), with the code in [micrograd](https://github.com/karpathy/micrograd) and [makemore](https://github.com/karpathy/makemore).

We link to these projects; we don't copy them. They keep their own licenses. Historical quotes belong to their authors and are cited where they appear.

## Contributing

Corrections are especially welcome. Getting history right counts as a Bug Hunt too. Before you write or edit anything, read **[`STYLE.md`](STYLE.md)**. The short version:

- Use the researchers' own words, in quotes, with a source. Give the modern term after.
- Never make up a URL. Open every source before you cite it.
- Kid-facing text aims at a 6th-grade reading level.
- Never use people (faces, sex, race…) as hands-on classification data.

Checks to run before a pull request:

```bash
python3 -m bughunt selfcheck
python3 site/timeline/validate.py
python3 tools/check_doc_links.py
```

## License

- **Code** is under the [MIT License](LICENSE).
- **Lesson and content text** is under [Creative Commons Attribution-ShareAlike 4.0](LICENSE-CONTENT.md).

[`LICENSE-CONTENT.md`](LICENSE-CONTENT.md) lists which paths fall under which license.
