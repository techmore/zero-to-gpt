# Two-Week Deep Dive: "Build a Tiny GPT and Bug-Hunt It"

**Who:** Grades 6–8, about 12 students (school year) or about 5 (summer).
**Standalone:** Students do **not** need the one-week intensive. Day 1 starts from zero. Students who did the intensive become "lab captains" in week 1. See the differentiation notes.
**When:** **10 half-days, about 3 hours each.** A full-day variant is at the end.
**Covers:** Lessons 01–10 on the main path, plus the core of 11. See [`../ROADMAP.md`](../ROADMAP.md).
**Ends with:** Each pair (or each student, in a group of 5) trains a **tiny character-level GPT** on their own MacBook, using the *small* "MacBook" config from Karpathy's [nanoGPT](https://github.com/karpathy/nanoGPT) `shakespeare_char` recipe (about 3–6 minutes on an 8 GB MacBook Neo [estimate]). The *full* `shakespeare_char` config runs on the Mac mini or overnight, not on student laptops. Then they **Bug-Hunt their own model** and show it to families.

Before you start, see the [teacher prep checklist](teacher-prep-checklist.md). Days 8–10 need the nanoGPT setup tested in advance.

> `L04-B` = Lesson 04, Block B. Every lesson has three 45-minute blocks:
> - **A**: unplugged + story
> - **B**: Jupyter lab
> - **C**: Bug Hunt
>
> Two weeks can't fit 10 full lessons *plus* a capstone, so some days compress two lessons. The plans say which blocks to keep.

---

## Daily rhythm (half-day)

| Time | What |
|---|---|
| 9:00–9:10 | **Gathering.** A minute of quiet, a one-word check-in, and today's big question |
| 9:10–9:55 | **Block 1.** Unplugged + **story time** (about 10 min, using the lesson's "The Story" plus the course timeline in `site/timeline/`) |
| 9:55–10:05 | **Movement break** |
| 10:05–10:50 | **Block 2.** Lab (pairs, driver/navigator, switch every 10 min) |
| 10:50–11:10 | **Snack + outside**, screens closed |
| 11:10–11:55 | **Block 3.** Bug Hunt |
| 11:55–12:00 | **Exit ticket** |

**Pause before you prompt (optional):** one silent minute to write your own prediction before asking Buddy, and the four reflection questions at the exit ticket. Days 9–10 are a good place for the "What did it really learn?" stories (husky vs wolf, Clever Hans): did *our* GPT learn the language, or memorize the text? See [`../threads/shortcut-learning.md`](../threads/shortcut-learning.md). <!-- TODO: use the school's own term for reflection -->

Each day adds a sticky note to the wall timeline and hands out a Thinking Move card ([`../THINKING-MOVES.md`](../THINKING-MOVES.md)). By Day 10 the wall runs from 1913 to today.

---

# Week 1: The building blocks

## Day 1: The Guessing Machine (L01)
| Time | Block | Activity |
|---|---|---|
| 9:10 | **L01-A** | **Unplugged:** Paper Bag Machine. **Story:** Markov (1913) and Shannon (1948, 1951). **Move:** *Count instead of argue.* |
| 9:55 | Break | **Human bigram chain**: tag the "next letter". |
| 10:05 | **L01-B** | **Lab:** bigram counts → text generator. |
| 11:10 | **L01-C** | **Bug Hunt 1.1–1.6.** Introduce the Bug Ladder and the pledge first. |
| 11:55 | Exit | "Our machine only looks back *one* letter. What goes wrong because of that?" Save these cards. Students answer their own question on Day 8. |

## Day 2: Numbers & Tables (L02 + L03)
| Time | Block | Activity |
|---|---|---|
| 9:10 | **L02-A** | **Unplugged:** snack space on a masking-tape floor graph, with arm-arrow dot products. **Story:** Descartes (1637) and the fly legend as an L2 check. **Move:** *Give it an address.* |
| 9:55 | Break | **Arrow Simon Says.** |
| 10:05 | **L02-B → L03-B** | **Lab:** vectors and dot products (25 min), then matrix × vector as "many dot products at once" (20 min). Show that a one-hot row × the bigram table = one row. |
| 11:10 | **L03-A + C** | **Unplugged shape-shifter** (2×2 recipe on a doodle, 15 min), then a Bug Hunt on shapes and dot products (30 min). **Story:** Sylvester (1850) and Cayley (1858). **Move:** *Write the recipe once.* |
| 11:55 | Exit | "(2×3) times (3×1) gives what shape? Draw it." |

## Day 3: Sliding Downhill (L04)
| Time | Block | Activity |
|---|---|---|
| 9:10 | **L04-A** | **Unplugged:** blindfolded hill walk + hotter/colder. **Story:** Cauchy (1847). **Move:** *Make it smooth so you can slide downhill.* |
| 9:55 | Break | **Learning-rate hop**: baby steps vs overshooting leaps. |
| 10:05 | **L04-B** | **Lab:** derivative by nudging, then line-fitting by gradient descent. |
| 11:10 | **L04-C** | **Bug Hunt:** a giant-nudge derivative (L3), "bigger learning rate is always faster" (L2), a lazy loss test (L4). |
| 11:55 | Exit | "Sketch a loss curve for a learning rate that's too big." |

## Day 4: The Fake Neuron (L05)
| Time | Block | Activity |
|---|---|---|
| 9:10 | **L05-A** | **Unplugged:** human perceptron learns AND and OR, then fails at XOR. **Story:** McCulloch & Pitts (1943), Rosenblatt (1958), Minsky & Papert (1969). **Move:** *Know what it can't do.* |
| 9:55 | Break | **Neuron stand-up.** |
| 10:05 | **L05-B** | **Lab:** a perceptron with a plotted decision line. XOR fails. |
| 11:10 | **L05-C** | **Bug Hunt:** a 2-of-4 XOR test (L4), and an overclaim about what Minsky & Papert proved (L2). |
| 11:55 | Exit | "Draw the four XOR points. Can one straight line split them?" |

## Day 5: Blame Flows Backward (L06)
| Time | Block | Activity |
|---|---|---|
| 9:10 | **L06-A** | **Unplugged:** blame relay. Numbers pass forward; blame cards pass backward, each multiplied by the station's slope. **Story:** Linnainmaa (1970), Werbos (1974), Rumelhart, Hinton & Williams (1986). **Move:** *Pass the blame backward.* |
| 9:55 | Break | **Reverse conga** ball pass. |
| 10:05 | **L06-B** | **Lab:** a micrograd-style `Value` class, then train a 2-layer net that *does* solve XOR. That fixes Day 4's limit. |
| 11:10 | **L06-C** | **Bug Hunt:** Buddy's backward pass forgets to *add* gradients when a value is used twice (L3). This is a classic real bug. |
| 11:40 | **Week-1 share** (15 min) | Each pair shows one "caught it!" moment to the group. Teacher adds notes to the parent update. |
| 11:55 | Exit | "In your own words: what does a gradient tell you?" |

---

# Week 2: From words to a tiny GPT

## Day 6: The Babbling Network (L07)
| Time | Block | Activity |
|---|---|---|
| 9:10 | **L07-A** | **Unplugged:** "softmax by candy." Turn 3 scores into shares of 20 candies so the bigger scores get much more. Then the **surprise meter**: how surprised were you, −log p, by each outcome? **Story:** Bengio et al. (2003). Shannon's surprise idea returns. **Move:** *Let it learn its own features.* |
| 9:55 | Break | **Probability corners.** Four corners of the room are four next letters. Students walk to their guess. Count the class "distribution". |
| 10:05 | **L07-B** | **Lab:** a neural bigram model trained by gradient descent ends up matching Day 1's counting table. Checkpoint: the starting loss is about ln(vocab size). |
| 11:10 | **L07-C** | **Bug Hunt:** softmax that doesn't sum to 1 (L3). A reported loss below 0 (L1). Buddy's correct claim that the neural bigram matches the counts (L5: prove it). |
| 11:55 | Exit | "If a model guesses evenly among 27 letters, what loss do you expect? (ln 27 ≈ 3.3)" |

## Day 7: Words as Places + Memory Problems (L08 + L09, story-heavy)
| Time | Block | Activity |
|---|---|---|
| 9:10 | **L08-A** | **Unplugged:** a human word map. Each student holds a word and moves to stand near words that "keep the same company". **Story:** Firth (1957) and word2vec (Mikolov et al., 2013). **Move:** *Know a word by the company it keeps.* |
| 9:55 | Break | **Telephone with a whisper multiplier.** Each person passes on only 90% of the message's loudness. After 10 people, what's left? (0.9¹⁰ ≈ 0.35) |
| 10:05 | **L08-B (25) + L09-B (20)** | **Lab:** plot small character embeddings in 2-D. Then compute 0.9ⁿ and 1.1ⁿ and see why gradients vanish or explode over long sequences. |
| 11:10 | **L09-A story + L08/09-C** | **Story (10 min):** Hochreiter's 1991 diagnosis, the LSTM (1997), seq2seq (2014). The "one fixed-size memory" bottleneck sets up tomorrow. **Move:** *Find exactly where it breaks.* **Bug Hunt (35 min):** Buddy's cherry-picked analogy (L2). Buddy blames the wrong cause for forgetting (L2). Buddy's code that computes 0.9ⁿ correctly (L5). |
| 11:55 | Exit | "Why would a network forget the beginning of a long sentence?" |

## Day 8: Just Look Back (L10)
| Time | Block | Activity |
|---|---|---|
| 9:10 | **L10-A** | **Unplugged:** attention party. Each student has a **query** card ("I'm looking for an animal"), a **key** name tag ("I'm a cat"), and a **value** envelope. Each student splits 10 tokens among the others by how well keys match their query, then mixes the values. Then the "no peeking ahead" rule: you can only attend to people on your left (the causal mask). **Story:** Bahdanau, Cho & Bengio (2014). Bahdanau credited translation exercises from his own middle-school English classes. Then Vaswani et al. (2017). **Moves:** *Remove the bottleneck*, *Throw out what you don't need.* |
| 9:55 | Break | **Spotlight.** One student calls a "query"; everyone whose key matches steps forward. |
| 10:05 | **L10-B** | **Lab:** one self-attention head by hand on 3 tokens, then in code: QKᵀ, scale, mask, softmax, × V. Then open nanoGPT's `model.py` and *find* the same lines. |
| 11:10 | **L10-C + setup** | **Bug Hunt (25 min):** a missing causal mask lets the model "cheat" by seeing the future, so training loss looks amazing (L3). Missing √d scaling (L3). **Smoke test (20 min):** each pair runs the 1-minute test from the prep checklist, so Day 9 isn't spent installing things. |
| 11:55 | Exit | Pull out the Day 1 exit cards: "Our machine only looked back one letter. How does attention fix that?" |

## Day 9: Train Your Tiny GPT (L11 core)
**Goal:** By 11:55, every pair has a trained model and a `samples.txt`.

| Time | Block | Activity |
|---|---|---|
| 9:10 | **L11-A** | **Unplugged (20 min):** BPE on paper. Find the most common letter pair in a paragraph, merge it into a new symbol, and repeat 5 times. Discuss: *we'll keep characters today*, so the model is simpler and easy to inspect. **Story (10 min):** GPT-1 (2018), GPT-2 (2019), scaling laws (Kaplan et al., 2020), Chinchilla (Hoffmann et al., 2022). **Move:** *Make it bigger, then measure.* **Pick a dataset (15 min):** see the dataset menu below. **Start training** before the break. |
| 9:55 | Break | **Loss-curve dance.** While models train, students act out a loss curve: high and wiggly at first, then slowly settling. |
| 10:05 | **L11-B** | **Watch and record:** students write the loss at iterations 0, 250, 500, 1000, 2000 on a class chart. Predict first: what should the loss be at iteration 0? About ln(vocab size): ln 65 ≈ 4.17 for Shakespeare. Run `sample.py` at temperature 0.5, 1.0, and 1.5. **Scale experiment:** half the pairs train with `n_layer=2`, half with `n_layer=4` (or `n_embd` 64 vs 128). Compare the final losses on the class chart. |
| 11:10 | **L11-C** | **Capstone Bug Hunt, part 1** (below): G1–G3. |
| 11:55 | Exit | "Paste your favorite and your worst generated line. Why do you think it wrote each?" |

## Day 10: Bug-Hunt Your GPT + Showcase
| Time | Block | Activity |
|---|---|---|
| 9:10 | **Capstone C** | **Capstone Bug Hunt, part 2:** G4–G6. Each pair writes up the 2 best catches and 1 thing Buddy got *right* (L5). **Story (10 min):** Feynman's blackboard ("What I cannot create, I do not understand") and Karpathy's small, readable rebuilds: micrograd, nanoGPT, nanochat. **Move:** *Rebuild it small to understand it.* |
| 9:55 | Break | **Gratitude circle on the move.** Walk a loop; thank one person for something they taught you. |
| 10:05 | **Showcase prep** | Posters. Each has: our dataset, our loss chart, our best sample, the bug we caught, and the Thinking Move we used most. Rehearse a 2-minute demo. |
| 10:50 | Snack + set-up | Families arrive at 11:10. |
| 11:10 | **Showcase** | Stations: (1) **Meet our GPTs**: visitors give a starting phrase and the model continues it. (2) **Is it memorized?**: visitors guess whether a line is from the training text or generated, and the pair checks with search. (3) **Attention party** (mini version). (4) **Live Bug Hunt vs Buddy.** (5) The wall timeline, 1913 → today. |
| 11:55 | Exit | "What's one thing a GPT *can't* do that people think it can? How would you test it?" |

---

## The capstone: nanoGPT `shakespeare_char`, local

**What's being trained:** a character-level GPT, the same architecture as Lesson 10, at a size a MacBook can train in minutes. Karpathy's nanoGPT README gives a "macbook" configuration that it says runs in about 3 minutes on CPU and reaches a validation loss around 1.88. It also notes that on Apple Silicon, `--device=mps` uses the on-chip GPU and is typically 2–3× faster, though tiny models like this one often don't gain much from the GPU.

**Which machine runs what** (numbers and sources in [`../infrastructure/training-on-apple-silicon.md`](../infrastructure/training-on-apple-silicon.md); re-time them on your own hardware during prep):

| Run | Where | Time |
|---|---|---|
| "Speed round": small config, `--max_iters=500` | Student MacBook Neo (8 GB) | ~1 min [estimate] |
| **"Class run": small config** (the command below) | **Student MacBook Neo** | **~3–6 min** [estimate]; ~3 min on a MacBook per the README |
| Full `train_shakespeare_char.py` config (6 layers, 384 dim, ~10.7 M parameters, 5000 iterations) | **Mac mini M4**, started early or run overnight | ~88 min (one developer's log) |
| Full config | MacBook Neo | ~2–3 h [estimate]. **Not a class activity.** | nanoGPT's README now calls the repo "old and deprecated" in favor of nanochat. It's still the right *teaching* codebase for this capstone because it's small and readable.

### Commands (from the nanoGPT README, adapted)
```bash
# one time, while online (the teacher does this during prep): downloads tiny Shakespeare
python data/shakespeare_char/prepare.py

# train the small "MacBook" config (the README's command; try --device=mps during prep and keep whichever is faster)
python train.py config/train_shakespeare_char.py --device=cpu --compile=False \
  --eval_iters=20 --log_interval=1 --block_size=64 --batch_size=12 \
  --n_layer=4 --n_head=4 --n_embd=128 --max_iters=2000 --lr_decay_iters=2000 --dropout=0.0

# generate text
python sample.py --out_dir=out-shakespeare-char --device=cpu
```

**Your own dataset:**
1. Copy `data/shakespeare_char/` to `data/<name>/`.
2. Replace `input.txt` with your text. `prepare.py` only downloads when `input.txt` is missing.
3. Run `python data/<name>/prepare.py`.
4. Train with the same command plus `--dataset=<name> --out_dir=out-<name>`.
5. Sample with `--out_dir=out-<name>`.

### Dataset menu (pick one per pair)
| Option | Size | What students learn |
|---|---|---|
| Tiny Shakespeare (default) | About 1 MB, 65 characters | The classic. Results are recognizable and funny. |
| A public-domain book the teacher pre-downloaded (e.g. fables or fairy tales; strip the distributor's header and footer) | 100 KB – 1 MB | "Style" is learnable. Compare with another pair's book. |
| Class-written text (stories, journal prompts) | Usually < 50 KB | **Deliberately too small.** The model memorizes, which makes a great Bug Hunt (G5). |
| Lesson 01's `tiny_story.txt` | Tiny | Compare the GPT with Day 1's bigram machine on the same text. |

Avoid copyrighted lyrics, fan fiction, or anyone's private writing. Ask before using a classmate's story.

### Capstone Bug Hunt challenges (G1–G6)
These are planned challenges for the capstone. They could live as `lessons/11-nanogpt/bughunt/11.x-*/` in the Bug Hunt format, with the scripted Buddy voicing the claims.

| # | Level | Buddy says… | Students test it by… |
|---|---|---|---|
| G1 | **L1** | "Your loss went from 4.2 to 1.9. That means it's 1.9% wrong now." | Explaining what loss *is*. Comparing to the ln(vocab) baseline. Showing that the loss isn't a percent. |
| G2 | **L3** | Gives code that computes the "random guessing baseline" as `log10(vocab_size)`. | Working out by hand that cross-entropy uses natural log: ln 65 ≈ 4.17, not log₁₀ 65 ≈ 1.81. Writing a test with the exact expected value. |
| G3 | **L2** | "Lower temperature makes the model more creative." | Sampling at 0.5 and 1.5 and counting repeated words or new made-up words in each. |
| G4 | **L4** | Offers a test: `assert len(sample) > 0`. | Asking "could this ever fail?" Writing a stronger test, e.g. every character in the sample is in the training vocabulary. |
| G5 | **L2 / L5** | "Your model memorized the whole play." | Searching `input.txt` for 10-, 20-, and 40-character chunks of the samples. Short chunks often *are* found; long ones usually aren't (except for tiny class datasets, where Buddy may be *right*!). |
| G6 | **L5** | "If validation loss starts rising while training loss keeps falling, the model is starting to memorize." | Proving it: train longer on a tiny dataset and plot both curves. Buddy is right. Verify, don't just distrust. |

---

## Differentiation

### Small class (5)
- **Week 1:**
  - Everyone does every unplugged role.
  - Solo labs, with the teacher circulating.
  - Bug Hunts as a group, then solo retries.
- **Days 9–10:**
  - Each student trains their *own* model on their own MacBook.
  - The Mac mini runs one extra "class model" on a combined dataset, as long as Buddy can share the machine.
  - Everyone runs both sizes of the scale experiment.
- **Showcase:** a sit-down demo circle may suit a small audience better than stations.

### Normal class (12)
- **Labs:** pairs (6 pairs).
- **Students who did the one-week intensive:** "lab captains" on Days 1–5. They also get the Adult-version extension tasks so they aren't bored.
- **Days 9–10:**
  - 6 models, one per pair.
  - Split the scale experiment so the class chart has 3 pairs at each size.
- **If a MacBook can't train:** that pair queues a small-config run on the Mac mini and shares a screen with a neighbor pair for sampling.
- **Roles per pair:** *driver*, *navigator*, *bug reporter* (shares catches), *chart keeper* (posts losses to the class chart). Rotate daily.

### Students who need more support
- Pre-filled notebooks with blanks instead of empty cells.
- Bug Hunts L1–L3 only; L4–L5 as a pair with the teacher.

### Students who need more challenge
- **Adult version** of each lesson.
- Math Ladder rungs from the roadmap.
- Read the matching lines in nanoGPT's `model.py`.
- Run the scale experiment at 3 sizes and plot loss vs parameters on log axes.

---

## Full-day variant (about 9:00–3:00)

Mornings stay the same. Afternoons:

| Time | What |
|---|---|
| 12:00–12:45 | Lunch + outdoors |
| 12:45–1:30 | **Block D.** Week 1: catch-up or the lab's Adult-version extension. Week 2: **branch explorer**:<br>Day 6 → `branch-information-theory`.<br>Day 7 → `branch-memory-networks`.<br>Day 8 → `branch-vision` (a picture is a grid of numbers). |
| 1:30–1:40 | Movement break |
| 1:40–2:25 | **Block E.** Week 1: games and maker time (build a better Paper Bag Machine, or write a Bug Hunt for next year's class). Week 2: **compare with a bigger model**: the full `train_shakespeare_char.py` config, started on the **Mac mini** first thing in the morning (~1.5 h on an M4) or the night before, compared with the students' small laptop models. Don't run the full config on the 8 GB laptops (~2–3 h [estimate]). |
| 2:25–2:50 | Outdoor / free choice |
| 2:50–3:00 | Exit ticket |

A full day frees enough time to fit all of L08 and L09 as separate days. It also makes room for nanochat's CPU/MPS demo (`runs/runcpu.sh` in [nanochat](https://github.com/karpathy/nanochat)) as a Day 10 afternoon "look how far it goes" demo. Test it first. The nanochat README warns that the shrunk CPU run "will not get strong results."
