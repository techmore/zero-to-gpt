# Unplugged: The Paper Bag Machine 🛍️ + Shannon's Guessing Game

No computers needed. This is Block A's main activity. Students *become* the language model.

## What you need

- Paper lunch bags or envelopes, one per word. Label each with its word in big letters.
- Small slips of paper, all the same size and color (so nobody can peek by feel).
- A marker, the board, and a printed copy of the story.

Prep time: about 15 minutes for the small version and about 35 for the full version.
Students can help fill the bags as a counting exercise. That *is* the training!

## How it works

1. **Training (counting):** for every pair of neighbor words in the story, put a slip
   with the **second** word into the bag labeled with the **first** word.
   "The cat sat" puts a `cat` slip in the **the** bag and a `sat` slip in the **cat** bag.
   The period `.` counts as a word, so sentence endings get their own bag.
2. **Generating (talking):** one student holds the **the** bag. Draw a slip without
   looking, read it aloud, and write it on the board. **Put it back!** (Otherwise the
   machine changes as it talks.) Hand off to whoever holds the bag for that word. Repeat
   until you've written about 12 words.
3. Run it 3–4 times. Every run is different, and that's on purpose.

---

## Small version (start here): first 4 sentences

> The cat sat on the mat. The dog sat on the log. The cat saw the dog. The dog saw the cat.

26 words → **25 slips** in **9 bags**:

| Bag | Slips inside | Total |
|---|---|---|
| **the** | cat ×3, dog ×3, mat ×1, log ×1 | 8 |
| **cat** | sat ×1, saw ×1, . ×1 | 3 |
| **dog** | sat ×1, . ×1, saw ×1 | 3 |
| **sat** | on ×2 | 2 |
| **on** | the ×2 | 2 |
| **saw** | the ×2 | 2 |
| **.** | the ×3 | 3 |
| **mat** | . ×1 | 1 |
| **log** | . ×1 | 1 |

(The very last period has nothing after it, so it adds no slip.
That's why there are 25 slips and not 26.)

## Full version: all 10 sentences of `tiny_story.txt`

67 words → **66 slips** in **17 bags**:

| Bag | Slips inside | Total |
|---|---|---|
| **the** | cat ×5, dog ×5, mat ×2, tree ×2, bird ×2, sun ×2, log ×1 | 19 |
| **.** | the ×8, a ×1 | 9 |
| **cat** | sat ×2, saw ×1, . ×1, ran ×1 | 5 |
| **dog** | . ×2, sat ×1, saw ×1, ran ×1 | 5 |
| **sat** | on ×3, in ×1 | 4 |
| **on** | the ×3 | 3 |
| **saw** | the ×3 | 3 |
| **bird** | sat ×1, sang ×1, saw ×1 | 3 |
| **mat** | . ×2 | 2 |
| **ran** | to ×2 | 2 |
| **to** | the ×2 | 2 |
| **tree** | . ×2 | 2 |
| **in** | the ×2 | 2 |
| **sun** | . ×2 | 2 |
| **log** | . ×1 | 1 |
| **a** | bird ×1 | 1 |
| **sang** | in ×1 | 1 |

These are exactly the counts that `count_pairs` produces in the lab, so students can
check their bags against the computer in Block B.

### Class of ~12

Give each student one or two bags. The **the** and **.** bags are busiest, so give them
to students who like being in the action. With 5 students (summer), use the small
version, about 2 bags each.

## Discussion while you play

- "Why does `cat` come out of the **the** bag so often?" (More slips, from more counting.)
- "We got *the dog sat on the cat*. Is that in the story?" (No! Every **pair** is in the
  story, but the whole sentence is new. Is it true? The machine has no idea.)
- "Does the **cat** bag know what a cat is?"
- "How could we make the machine smarter?" (More story, which means more slips. Or look
  back more than one word, which means many more bags. That's where GPT is headed.)

---

## Shannon's Guessing Game (10 minutes)

Claude Shannon's 1951 experiment, done as a class:

1. Pick a sentence students haven't seen (a line from a class read-aloud works well).
   Write the blanks on the board: `_ _ _   _ _ _ ...`, with a gap between words.
2. Students guess the **first letter**. Count the guesses until someone gets it right, then
   write the letter in. Then guess the next letter, and so on. Spaces count as a "letter".
3. Keep a tally of how many guesses each letter needed.

What happens: the first letters of words take many guesses, but later letters often take
just **one** ("elepha_" → "n"). Shannon used tallies like these to estimate that English
carries only about **0.6 to 1.3 bits per letter** when you can see a lot of text before
the gap. Most of what we write is predictable.

**The connection:** this is exactly the job GPT is trained on. It plays the guessing game
billions of times, and "loss" measures how surprised it was by the right answer.
