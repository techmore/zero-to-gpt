# Answer Key: Lesson 1 🔑

Every number here was checked by running the lab code on `tiny_story.txt`.
`python3 -m bughunt selfcheck` re-verifies the Bug Hunt answers and solutions automatically.

## Bug Hunt

| ID | Level | Answer / what catches it |
|---|---|---|
| **1.1** | L1 Plain wrong | **5**. Buddy says 7. `the → cat` occurs 5 times. (Other `the` followers: dog 5, mat 2, tree 2, bird 2, sun 2, log 1, for 19 total.) Accepts `5`, `5.0`, ` 5 `. |
| **1.2** | L2 Confident fib | **BC**. B is wrong: the book was Pushkin's *Eugene Onegin*, not *Hamlet*. C is wrong: he counted **by hand**, since there were no computers in 1913. A (1913) and D (counting letters, which he sorted into vowels and consonants) are true. Accepts `BC`, `CB`, `b, c`. *Teacher nuance:* Markov first described his chains in **1906**. 1913 is when he applied them to real text. Buddy's wording ("first tried this on a real book in 1913") is accurate on that point. |
| **1.3** | L3 Runs but wrong | Bug: `range(len(words) - 2)` skips the **last** pair. On the story it finds 65 pairs instead of 66 (it misses `sun → .`). Catching tests: `count_pairs(["a","b","c"]) == {"a":{"b":1},"b":{"c":1}}`, or "the total of all counts == len(words) - 1". The starter's `counts["the"]["cat"] == 5` does **not** catch it. |
| **1.4** | L3 Runs but wrong | Bug: divides by **all** 66 pairs instead of the 19 that start with `the`. `cat` gets 5/66 ≈ 0.076 instead of 5/19 ≈ 0.263, and the chances after `the` add up to 19/66 ≈ 0.288. Catching test: `math.isclose(sum(next_word_chances(counts, w).values()), 1)`. Note: `generate` still "works" with the bug, because `random.choices` normalizes weights. That's why it's L3. |
| **1.5** | L4 Lazy test | Bug: pairs stored **backwards** (`counts[next][current]`). Buddy's `buddy_test.py` (checks `is not None` and `len > 0`) passes on both versions, so it can't catch anything. Catching test: `count_pairs(["the","cat"]) == {"the":{"cat":1}}` or `counts["the"]["cat"] == 5`. |
| **1.6** | L5 Actually right | **No bug.** Buddy's `generate` is identical to the reference. Different output per run is intended. A strong answer tests properties over many runs: first word == start, every neighbor pair `b in counts[a]`, `len(words) <= length`. Bonus: the same `random.Random(seed)` gives the same output, and it stops early at a dead end. A test like `generate(...) == generate(...)` (without a seed) almost always **fails on correct code**, and the tool says "your test flags correct code". |

Full teacher solutions: [`solutions/`](solutions/). Run any of them as a student would,
for example: `python3 -m bughunt test 1.3 lessons/01-the-guessing-machine/teacher/solutions/solution_1_3.py`

## Lab notebook checkpoints

| Step | Expected |
|---|---|
| Split | 67 words, 17 different. Starts `['the', 'cat', 'sat', 'on', 'the', 'mat', '.', ...]` |
| Count | `counts["the"]` → `{'cat': 5, 'mat': 2, 'dog': 5, 'log': 1, 'tree': 2, 'bird': 2, 'sun': 2}`, `counts["cat"]` → `{'sat': 2, 'saw': 1, '.': 1, 'ran': 1}`, `counts["sat"]` → `{'on': 3, 'in': 1}` |
| Chances | cat 0.263, dog 0.263, mat/tree/bird/sun 0.105, log 0.053. Total `1.0` (or 0.9999999999999999, which is why we use `isclose`) |
| Generate | Varies every run (correct!). With `random.Random(42)` the two lines match each other. |
| Grown-up corner | cat/mat: P = 0.00831, 6.911 bits, 1.152 bits/word, 0.798 nats/word. dog/log: P = 0.00208, 8.911 bits. `0.01 ** 400` prints `0.0`, versus 2657.5 bits. |

## Math Gym (short answers)

W1 66 · W2 5/19 ≈ 0.263 · W3 1 · W4 `the`, chance 1, 0 bits ·
C1 3/361 ≈ 0.00831 · C2 3/1444 ≈ 0.00208, 4× less likely · C3 1.926 bits and 4.248 bits ·
C4 6.911 bits, 1.152 bits/word, 0.798 nats/word · C5 `0.0` (underflow), 2657.5 bits ·
S1 1/22 and 3/22 · S2 (a) 0.432, (b) π ≈ 0.4319 ✓ · S3 4.09 bits = 2.83 nats, scored on training data · S4 ln 65 ≈ 4.17, about 2.7 equally likely options.

## Exit ticket (sample strong answers)

1. *How does the Guessing Machine pick the next word?* It looks only at the current word,
   checks what came after that word in the story (the counts), and picks randomly, with
   more common followers more likely.
2. *Buddy says something confidently. What do you do?* Check it with evidence: count it,
   run it, or write a test. A confident voice isn't proof, and Buddy might also be right.
3. *Name one thing the machine can't do.* Remember more than one word back, know if
   something is true, or handle word pairs it never saw.
