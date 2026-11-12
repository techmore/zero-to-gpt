# Teacher Guide: Lesson 1, The Guessing Machine

## 📄 One page: what you need to know (no AI background needed)

- **A language model guesses the next word.** That's the whole job, for our tiny machine and for
  ChatGPT alike. Ours guesses by **counting** which word followed which in a 10-sentence
  story. GPT learns its guesses from a vast amount of text, using a neural network instead of a
  table of counts (later lessons).
- **"Bigram"** is the grown-up name for a model that looks back only **one** word.
- **Counts → chances.** If "the" is followed by 19 words and 5 are "cat", the chance of
  "cat" after "the" is 5/19. The chances for any word's followers add up to 1.
- **Generating = rolling weighted dice** from those chances, one word at a time. Different
  output every run is correct behavior, not a bug.
- **The machine doesn't "know" anything.** It produces word sequences that *look like* its
  training text. It can produce false sentences ("the dog sat on the cat") as happily as true ones.
- **Surprise / loss (optional, adults):** how surprised the model was by the real next word.
  Training GPT means making that number go down.
- **Markov (1913)** counted letter patterns in a Russian poem by hand to win an argument with
  evidence. **Shannon (1948, 1951)** made fake English with a book and measured how predictable
  English is with a guessing game. You don't need more history than what's in the
  [lesson README](../README.md#-the-story).
- **You don't need to debug Python live.** Every Bug Hunt challenge has a verified solution,
  and `python3 -m bughunt test ID` tells students in plain words whether their test works.
  If you're stuck, "Let's find out together" is a great answer, and it's the lesson's whole point.

**Before class (15 min):** from the `zero-to-gpt` folder run `python3 -m bughunt selfcheck`
(should end with ✅), open the lab notebook once, and prep the paper bags
([instructions](unplugged-paper-bag.md)).

---

## ⏱️ Timed plans (45-minute blocks)

### Block A: Unplugged + Story

| Min | Activity |
|---|---|
| 0–5 | Hook: "Write the next word: *Once upon a ___*." Everyone guessed "time". How did you know? You're a language model! |
| 5–20 | **Paper Bag Machine**, small version: fill bags together (that's "training"), then generate 3–4 sentences on the board. |
| 20–28 | **The Story:** Markov vs. Nekrasov, counting *Eugene Onegin* by hand (5 min). Shannon's book-flipping fake English (3 min). |
| 28–38 | **Shannon's Guessing Game** on a fresh sentence, tallying guesses per letter. |
| 38–45 | Thinking Moves: "count instead of argue" and "be the machine". Read the [Bug Hunter Pledge](../../../classroom/bug-hunter-pledge.md) together and introduce the [Bug Ladder](../../../classroom/bug-ladder.md). |

### Block B: Lab

| Min | Activity |
|---|---|
| 0–5 | Open `lab/01-guessing-machine.ipynb`. Pairs: one "driver" types, one "navigator" reads. Swap at each step. |
| 5–12 | Step 1, split: why do periods count as words? (So the machine learns to end sentences.) |
| 12–22 | Step 2, **predict, then count**: everyone writes a guess *before* running. Compare to the paper bags from Block A. |
| 22–30 | Step 3, chances: sum to 1, and the `0.1 + 0.2` surprise. |
| 30–38 | Steps 4–5: generate, then add your own sentences. Share the funniest output. |
| 38–45 | Discussion questions 1–3 (below). Adults and fast finishers: Grown-up corner. |

### Block C: Bug Hunt

| Min | Activity |
|---|---|
| 0–5 | Recap the ladder. Remind everyone: Buddy is wrong **on purpose** sometimes, and sometimes right. Demo `python3 -m bughunt list` and `show 1.1`. `list` hides the levels by default (mystery mode), so students don't know which challenge is the "actually right" one; `python3 -m bughunt list --levels` shows them. |
| 5–12 | 1.1 and 1.2 (quizzes) as a whole class. For 1.2, check each choice against the Story. |
| 12–35 | Pairs work on 1.3 → 1.4 → 1.5 at their own pace. Circulate. When a pair gets "CAUGHT IT", have them explain *why* their test works to another pair. |
| 35–42 | 1.6 as a class: "Is different-every-time a bug?" Vote first, then prove it. |
| 42–45 | Exit ticket. |

**Pacing notes.** Expect most 6th graders to finish 1.1–1.4. 1.5 and 1.6 are fine to carry
into the next session. Summer groups (~5) can merge B and C into one longer block.
For self-paced adults, the order is README → Math Gym → lab → Bug Hunt.

---

## 🚧 Common misconceptions

| Misconception | What to say / do |
|---|---|
| **"The AI *knows* things."** | Point at the bags: "Does the **cat** bag know what a cat is?" The machine only stores *which words followed which*. Generate "the dog sat on the cat": every pair is from the story, but the whole sentence is new, and nobody checked if it's true. |
| **"It looks things up online."** | Our machine has only the 10 sentences. Unplug the Wi-Fi and it still works. (Buddy, too, runs on a school computer and doesn't look anything up.) Big chatbots also mostly generate from patterns they learned. Some products *add* web search, but the model itself is a guesser. |
| **"Random = broken."** | Rolling dice is the design. Random still follows rules: every pair came from the counts. That's challenge 1.6, where students prove the rules hold. |
| **"Probable = true."** | "The cat sat on the mat" is likely because it appeared in the story, not because it's true. A model trained on a story where pigs fly will say pigs fly. Likely ≠ correct. That's why we check (Integrity!). |
| "A test that passes is a good test." | Challenge 1.5: a test that can't fail can't catch anything. A good test passes on correct code **and** fails on buggy code. |
| "If Buddy is sometimes wrong, assume it's always wrong." | Challenge 1.6. Distrust without checking is just as lazy as trust without checking. |

## 💬 Discussion questions

1. Our machine made a sentence that was never in the story. Did it "make it up"? Is that creativity?
2. If we trained the machine on a story full of mistakes, what would it say? Whose fault is that?
3. Markov ended a long argument by counting. What's an argument you've had that counting could settle?
4. Shannon's guessers needed only one guess for many letters. Why is English so predictable? Would a list of random passwords be?
5. Buddy sounded 100% sure in challenge 1.2 and was wrong. When have you heard a person sound sure and be wrong? How did you find out?
6. *(Optional values question; use your school's own words if it has them.)* How is checking a claim before you repeat it a kind of honesty? How is hunting bugs as a team a kind of community?

## 🎟️ Exit ticket (3 questions, index card)

1. In one or two sentences: how does the Guessing Machine pick the next word?
2. Buddy tells you something in a very confident voice. What should you do?
3. Name one thing our Guessing Machine **can't** do.

Sample answers are in the [answer key](answer-key.md#exit-ticket-sample-strong-answers).

---

## 🤖 Scripted Buddy vs. live Buddy

There are two ways Buddy can show up:

| | **Scripted Buddy** (this lesson's default) | **Live Buddy** (optional, later) |
|---|---|---|
| What it is | Pre-written text and code in `bughunt/` challenge files. No AI model at all. | A small open language model (planned: about 4B parameters, in the Qwen family) running on the school's Mac mini. |
| Mistakes | Exactly the planted bug in `buddy_code.py`, every time. | Asked to voice the same planted mistake using `buddy_persona_note`. It may phrase things differently, or slip. |
| Grading | **The source of truth.** `python3 -m bughunt test` always compares against the reference code. | Never grades. It's for conversation: students can argue with it, ask for hints, and see it defend or admit mistakes. |
| Internet / data | None needed. | Runs on campus. Student text does not leave the school network. (Confirm with your tech lead.) |

Why both? The scripted Buddy makes the lesson **reliable and fair**: every student faces the
same bug, and selfcheck proves each one is catchable. A live model makes it **feel real**, but
live models are unpredictable, and that's a lesson in itself. If live Buddy accidentally
makes a *different* mistake, celebrate it: the class just found a real AI error. Grading still
comes only from the scripted engine.

Each code challenge's `challenge.json` includes:
- `planted_bug`: what's wrong, in plain words (revealed to students after they catch it).
- `buddy_persona_note`: how a live Buddy should voice the mistake, when to admit it, and (for L5)
  to **not** cave when a student wrongly insists there's a bug.

## ✅ Checking the curriculum

`python3 -m bughunt selfcheck` confirms that every quiz answer matches, every teacher solution
passes on correct code and catches Buddy's bug, every starter test begins at zero, and the
notebook is valid. It runs automatically on GitHub (`.github/workflows/selfcheck.yml`).
