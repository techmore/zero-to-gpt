# Lesson 1: The Guessing Machine 🎲

> **Big idea:** You can build a machine that "writes" just by **counting which word
> comes after which**, then rolling weighted dice. GPT does the same job (guess the
> next piece of text). It's just enormously bigger.

| | |
|---|---|
| **Time** | 3 blocks × 45 min (A: unplugged + story, B: lab, C: Bug Hunt) |
| **You'll need** | Paper bags or envelopes, slips of paper, a MacBook with Python 3.12+ |
| **Files** | [Lab notebook](lab/01-guessing-machine.ipynb) · [Reference code](lab/guessing_machine.py) · [Story](lab/data/tiny_story.txt) · [Math Gym](math-gym.md) |
| **Teachers** | [Teacher guide](teacher/teacher-guide.md) · [Paper Bag Machine](teacher/unplugged-paper-bag.md) · [Answer key](teacher/answer-key.md) |
| **Bug Hunt** | Challenges 1.1–1.6: `python3 -m bughunt list` |

### Block plan (each block is 45 minutes and can be scheduled on its own)

| Block | What happens | Sections |
|---|---|---|
| **A: Unplugged + Story** | Play the Paper Bag Machine and Shannon's guessing game. Hear Markov's and Shannon's stories. | The Story, Kid version, Thinking Moves |
| **B: Lab** | Build the Guessing Machine in Python: split → count → chances → generate. | Build it, Adult version (optional) |
| **C: Bug Hunt** | Catch Buddy's planted mistakes (1.1–1.6) by checking and writing tests. | Build it → Bug Hunt |

---

## 📜 The Story

### 1913: A mathematician counts a poem (by hand)

In the early 1900s, two Russian mathematicians were in a long, bitter argument.

**Pavel Nekrasov** of Moscow claimed something about a famous idea called the
**law of large numbers**. That law says that if you repeat something many times, like
flipping a coin, the average settles down to a steady value. Nekrasov argued that
this only works if the events are **independent**, meaning each one isn't affected by
the one before. He then used this to make big claims about society and free will:
since things like crime statistics settle down to steady averages, he said, people's
choices must be independent.

**Andrey Markov** of St. Petersburg thought this was bad math. In 1906 he showed that
the law of large numbers can still work when each event **depends on the one before
it**. This kind of linked sequence is now called a **Markov chain**.

But Markov wanted a real example, not just a proof. So he picked the most famous text
in Russian: Alexander Pushkin's ***Eugene Onegin***, a novel written as a poem. He took the
first **20,000 letters**, threw away the spaces and punctuation, and sorted every
letter into **vowel** or **consonant**. Then he counted, **by hand**, which kind
of letter came after which. There were no computers. In January 1913 he presented the
results to the Academy of Sciences in St. Petersburg.

What he found (rounded):

- About **43%** of the letters were vowels.
- After a **vowel**, the next letter was a vowel only about **13%** of the time.
- After a **consonant**, the next letter was a vowel about **66%** of the time.

If letters were independent, the chance of a vowel would be about 43% no matter
what came before. It wasn't even close. **What comes next depends on what came
before**, and you can measure it. That's the seed of every language model.

### 1948: Shannon builds fake English out of a book

In 1948, **Claude Shannon**, an engineer at Bell Labs in New Jersey, published
*A Mathematical Theory of Communication*. That paper started the field of
**information theory**. In it he names the unit of information: "binary digits, or more
briefly bits, a word suggested by J. W. Tukey" ([Shannon 1948](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x)).

To show how much structure English has, Shannon made "approximations to English"
using a book. One version worked like this: open a book at a random page and note a
word. Then flip to another random page, read until you find that same word, and write
down **the word that comes right after it**. Repeat. With word pairs, his
machine-without-a-machine produced:

> THE HEAD AND IN FRONTAL ATTACK ON AN ENGLISH WRITER THAT THE CHARACTER OF THIS
> POINT IS THEREFORE ANOTHER METHOD FOR THE LETTERS THAT THE TIME OF WHO EVER TOLD
> THE PROBLEM FOR AN UNEXPECTED.

It's nonsense, but it's English-shaped nonsense. That is exactly what our Guessing
Machine does with its tiny story.

### 1951: The guessing game

In 1951 Shannon published *Prediction and Entropy of Printed English*. He showed people
some text and asked them to **guess the next letter**, over and over, counting how
many guesses they needed. People who could see a long stretch of text before the gap
were very good at it. From the guesses, Shannon estimated that English carries only
about **0.6 to 1.3 bits of information per letter**. A random choice among 27 symbols
(26 letters plus space) would be about 4.75 bits. Most of English is predictable.

Training GPT is this exact game: guess the next piece of text, see how surprised you
were, and get a little better.

---

## 🧒 Kid version

Imagine a bag for every word in a story. In the bag for **"the"**, you put a slip of
paper for every word that ever came right after "the". The story says "the cat" 5
times, so 5 "cat" slips go in. It says "the log" once, so 1 "log" slip.

To make the machine "talk":

1. Start with a word, like **the**.
2. Reach into that word's bag and pull out a slip without looking. Say it's **cat**.
3. Now reach into the **cat** bag. Keep going!

Words that showed up more often have more slips, so they get picked more. That's
called **weighted** randomness. The machine never **knows** what a cat is. It only
knows what it counted. It can say things that sound right but aren't true, like
"the dog sat on the cat". **Sounding right is not the same as being right.**

That's why, in this course, we use an AI helper called **Buddy** that sometimes makes
mistakes **on purpose**, and you learn to catch them. See the
[Bug Ladder](../../classroom/bug-ladder.md).

---

## 🧑‍🔬 Adult version

**Notation.** Write the text as tokens $w_1, w_2, \dots, w_N$. A bigram model estimates

$$P(w_t \mid w_{t-1}) = \frac{C(w_{t-1}, w_t)}{C(w_{t-1}, \cdot)}$$

where $C(a,b)$ counts how often $b$ follows $a$, and $C(a,\cdot)$ is the number of pairs
starting with $a$. This is the maximum-likelihood estimate. In our 67-token story,
"the" starts 19 pairs and "the cat" occurs 5 times, so $P(\text{cat}\mid\text{the}) = 5/19 \approx 0.263$.

**Chain rule.** Any sequence probability factors exactly:

$$P(w_1,\dots,w_n) = \prod_{t=1}^{n} P(w_t \mid w_1,\dots,w_{t-1}).$$

The **Markov assumption** replaces the full history with the last token:
$P(w_t \mid w_{<t}) \approx P(w_t \mid w_{t-1})$. Starting from "the":

$$P(\text{cat sat on the mat .}\mid\text{the}) = \tfrac{5}{19}\cdot\tfrac{2}{5}\cdot\tfrac{3}{4}\cdot 1\cdot\tfrac{2}{19}\cdot 1 = \tfrac{3}{361} \approx 0.00831.$$

**Surprise.** The information content of an outcome with probability $p$ is $-\log_2 p$
bits. That sentence costs $-\log_2(3/361) \approx 6.91$ bits, or about **1.15 bits per
predicted word**. In natural log, that's **0.798 nats per word**. "the dog sat on the log ." is
$3/1444$, which is 4× less likely (2 extra bits). Exactly two steps differ, and each halves the probability.

**Limits of one word of context.**

- *No memory:* "The dogs that chased the cat **are**/**is**..." Agreement needs the subject,
  which is several words back. A bigram only sees "cat".
- *Zeros:* any pair never seen gets probability 0 ("cat sang"), so one unseen pair makes a
  whole sentence impossible. Smoothing fixes this (see Branches).
- *Sparsity:* an $n$-gram table needs up to $V^n$ entries. Longer context means
  exponentially more counts that you'll never see. Neural networks escape this by
  **sharing** what they learn across similar contexts. That's where the rest of this course goes.

**The link to GPT's loss.** A language model is trained to minimize the average
surprise of the true next token, the **cross-entropy**:

$$\mathcal{L} = -\frac{1}{N}\sum_{t=1}^{N} \ln P_\theta(w_t \mid w_{<t}).$$

The loss nanoGPT prints during training is this number, measured in **nats per token**
(it calls PyTorch's `cross_entropy`, which uses the natural log). Two sanity checks:
a model that guesses uniformly over $V$ tokens scores $\ln V$. For 65 characters that's
≈ 4.17, which is roughly where a character-level run should start. Our bigram, scored on its own
training story, averages ≈ 0.85 nats/word (1.23 bits), compared with $\ln 17 \approx 2.83$ for
uniform guessing over its 17 words. Divide nats by $\ln 2$ to get bits.

**Go further.** Andrej Karpathy's lecture
[*The spelled-out intro to language modeling: building makemore*](https://www.youtube.com/watch?v=PaCmpygFfXo)
builds a character-level bigram model from counts and then trains the same model as a
tiny neural net, measuring it with exactly this loss. Later lessons use
[nanoGPT](https://github.com/karpathy/nanoGPT) and its successor
[nanochat](https://github.com/karpathy/nanochat).

For practice problems with worked solutions, see the [Math Gym](math-gym.md).

---

## 🛠️ Build it

1. **Block B (lab):** open [`lab/01-guessing-machine.ipynb`](lab/01-guessing-machine.ipynb)
   and work through it: split → predict-then-count → chances → generate → add your own
   sentences → (grown-up corner) surprise in bits.
   No Jupyter? Run `python3 lessons/01-the-guessing-machine/lab/guessing_machine.py`.
2. **Block C (Bug Hunt):** from the `zero-to-gpt` folder:

   ```
   python3 -m bughunt list          # see the challenges (levels are hidden: mystery mode)
   python3 -m bughunt show 1.1      # read one
   python3 -m bughunt answer 1.1 …  # answer a quiz
   python3 -m bughunt test 1.3      # run your tests in my_test.py
   ```

   | ID | Buddy's mistake… or is it? |
   |---|---|
   | 1.1 | A count about the story |
   | 1.2 | A "fun fact" about this lesson's history |
   | 1.3 | `count_pairs` |
   | 1.4 | `next_word_chances` (learn `math.isclose`) |
   | 1.5 | `count_pairs` + Buddy's own test |
   | 1.6 | `generate` gives different output every run |

   Levels are hidden on purpose: you won't know which mistake type you're facing (or whether
   Buddy is wrong at all) until you check. Teachers: see `teacher/answer-key.md`, or run
   `python3 -m bughunt list --levels`.

   A good test **passes on correct code and fails on buggy code**. The tool checks both.

---

## 💡 The Thinking Moves

**Count instead of argue (Markov).** Nekrasov and Markov could have argued forever about
whether letters in real writing are independent. Markov turned the argument into a
question you could **count**: how often does a vowel follow a vowel? Twenty thousand
letters later, the numbers settled it. *Try it:* when you and Buddy disagree, ask
"what could we count or run to find out?"

**Be the machine (Shannon).** Shannon didn't have a computer to generate text, so he
**acted out** the algorithm with a book and random pages. In 1951 he made people *be*
the predictor. Acting out an algorithm by hand, like with the Paper Bag Machine, shows
you exactly what it can and can't know. *Try it:* before you code anything, run it on
paper with a tiny example.

*Something to think about (optional): honesty means checking claims before repeating
them, and Markov settled an argument with evidence. Simplicity: a tiny 10-sentence story is
enough to see the whole idea.*

---

## 🧵 Threads that start here

- **More context.** Our machine sees just **one word** before the gap. That's why it can't tell
  "The dogs that chased the cat **are**…" from "…**is**…". The whole history of AI is a history of
  giving machines more context. By Lesson 10, every word can look at every other word.
- **What did it really learn?** Our machine says "the cat sat on the mat" because the story said
  so, not because it knows about cats. Machines often learn a **shortcut** instead of the real
  idea. Read the stories (a horse that "did math", a computer that looked at snow instead of
  wolves) in [What did it really learn?](../../threads/shortcut-learning.md).
- **Pause before you prompt** *(optional)*. Before you ask Buddy, take one quiet minute and write
  your own guess. At the end, ask: What did the machine notice? What did it miss? What context did
  it ignore? What did I assume?
  <!-- TODO: use the school's own term for reflection -->

---

## 🌿 Branches (go deeper if you're curious)

- **Smoothing.** Unseen pairs get probability 0. *Add-one (Laplace) smoothing* pretends
  every pair was seen once more: $P(\text{sang}\mid\text{cat}) = \frac{0+1}{5+17} = \frac{1}{22}$.
  Better methods, like **Kneser–Ney** smoothing (Kneser & Ney, 1995), ask how many
  *different* contexts a word appears in, not just how often it appears. That made
  them the standard for n-gram models before neural nets.
- **PageRank is a Markov chain.** Google's original ranking (Brin & Page, 1998) imagines a
  "random surfer" clicking links. Each page is a state, and the long-run share of
  time spent on each page is its rank. Markov's vowels have a long-run share too: from
  his numbers, $0.663 / (1 - 0.128 + 0.663) \approx 0.432$, which matches the 43% he counted.
- **Prediction = compression.** If you can predict the next symbol well, you can store
  text in fewer bits (arithmetic coding gets close to the model's surprise). That's
  why Shannon measured English in bits per letter, and why "better language model"
  and "better compressor" are nearly the same thing.
- **MCMC (Markov chain Monte Carlo).** In 1953, Metropolis, the Rosenbluths and the
  Tellers used a carefully designed Markov chain to *sample* from distributions too complicated
  to calculate directly. Today the same trick powers a lot of statistics and physics.
