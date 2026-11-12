# Math Gym 1: Counting, Chances, and Surprise 🏋️

All numbers come from [`lab/data/tiny_story.txt`](lab/data/tiny_story.txt). The words
are lowercased and every period `.` counts as a word.

**Story facts you can use:** 67 words (tokens), 17 different words. `the` appears 19
times and is always followed by something:
`cat 5, dog 5, mat 2, tree 2, bird 2, sun 2, log 1`.
After `cat`: `sat 2, saw 1, . 1, ran 1`. After `sat`: `on 3, in 1`. After `on`: `the 3`.
After `mat`: `. 2`.

Try each problem before you open the solution. Check your answers with Python if you like!

---

## 🔥 Warm-up

**W1.** How many neighbor pairs are in a list of 67 words?

<details><summary>Solution</summary>

66. Every word except the last starts a pair: $N - 1$. (Bug Hunt 1.3 is about exactly this.)
</details>

**W2.** What is $P(\text{cat} \mid \text{the})$, the chance that the next word is `cat` if the current word is `the`? Give a fraction and a decimal.

<details><summary>Solution</summary>

$5/19 \approx 0.263$. Divide by the 19 pairs that start with `the`, **not** by all 66 pairs (that's Bug Hunt 1.4).
</details>

**W3.** Add up all the chances after `the`. What do you get, and why must it be that?

<details><summary>Solution</summary>

$\frac{5+5+2+2+2+2+1}{19} = \frac{19}{19} = 1$. *Something* has to come next, so the chances must add up to 1.
In Python, use `math.isclose(total, 1)` because decimals pick up tiny rounding errors (`0.1 + 0.2 == 0.3` is `False`).
</details>

**W4.** After `on`, what word comes next, and how sure is the machine?

<details><summary>Solution</summary>

`the`, with chance $3/3 = 1$. The machine is completely certain. Its surprise is $-\log_2 1 = 0$ bits.
</details>

---

## 💪 Core

**C1.** Starting from `the`, what is the probability that the machine generates exactly `the cat sat on the mat .`?

<details><summary>Solution</summary>

Multiply each step (the chain rule with a one-word memory):

$$\tfrac{5}{19}\cdot\tfrac{2}{5}\cdot\tfrac{3}{4}\cdot\tfrac{3}{3}\cdot\tfrac{2}{19}\cdot\tfrac{2}{2}
= \frac{5\cdot2\cdot3\cdot3\cdot2\cdot2}{19\cdot5\cdot4\cdot3\cdot19\cdot2} = \frac{360}{43320} = \frac{3}{361} \approx 0.00831.$$

About 1 time in 120.
</details>

**C2.** Now do `the dog sat on the log .` (After `dog`: `sat 1, . 2, saw 1, ran 1`. After `log`: `. 1`.) How many times less likely is it than C1?

<details><summary>Solution</summary>

$$\tfrac{5}{19}\cdot\tfrac{1}{5}\cdot\tfrac{3}{4}\cdot 1\cdot\tfrac{1}{19}\cdot 1 = \frac{3}{1444} \approx 0.00208.$$

That's $\frac{3/361}{3/1444} = 4$ times less likely. Exactly two steps changed, `dog→sat` ($\tfrac15$ vs $\tfrac25$) and `the→log` ($\tfrac1{19}$ vs $\tfrac2{19}$), and each one halves the chance.
</details>

**C3.** *Surprise* is $-\log_2 p$ bits. How surprised is the machine when `the` is followed by `cat`? By `log`?

<details><summary>Solution</summary>

$-\log_2(5/19) \approx 1.926$ bits. $-\log_2(1/19) = \log_2 19 \approx 4.248$ bits.
Rarer means more surprising. Each halving of the chance adds exactly 1 bit.
</details>

**C4.** What is the total surprise of the C1 sentence in bits? The average per predicted word? The average in **nats** (natural log)?

<details><summary>Solution</summary>

Total: $-\log_2(3/361) \approx 6.911$ bits. There are 6 predictions, so $6.911/6 \approx 1.152$ bits/word.
In nats: $1.152 \times \ln 2 \approx 0.798$ nats/word. Equivalently, $-\ln(3/361)/6$.

Logs turn a product of chances into a **sum** of surprises, so you could also add the steps:
$1.926 + 1.322 + 0.415 + 0 + 3.248 + 0 = 6.911$.
</details>

**C5. Why logs? (Underflow.)** A real model predicts millions of tokens. Suppose each
prediction has chance 0.01. In Python, what is `0.01 ** 400`? What's the total surprise of
those 400 predictions in bits?

<details><summary>Solution</summary>

`0.01 ** 400` is $10^{-800}$, but Python prints `0.0`. The smallest positive float is about
$5 \times 10^{-324}$, so the true value **underflows** to zero, and every sentence would look
equally impossible. Surprises **add** instead: $400 \times \log_2 100 \approx 400 \times 6.644 = 2657.5$ bits.
No problem at all. That's why real models (including GPT) work with log-probabilities and
report **average** surprise.
</details>

---

## 🚀 Stretch

**S1. Smoothing.** `cat` is never followed by `sang`, so $P(\text{sang}\mid\text{cat}) = 0$, and any sentence containing "cat sang" gets probability 0. With *add-one smoothing*, pretend every one of the 17 possible next words was seen once more. Find $P(\text{sang}\mid\text{cat})$ and the new $P(\text{sat}\mid\text{cat})$.

<details><summary>Solution</summary>

`cat` starts 5 pairs. Adding 1 for each of 17 words makes the total $5 + 17 = 22$.
$P(\text{sang}\mid\text{cat}) = \frac{0+1}{22} = \frac{1}{22} \approx 0.045$.
$P(\text{sat}\mid\text{cat}) = \frac{2+1}{22} = \frac{3}{22} \approx 0.136$, down from $0.4$. Smoothing takes
probability from things we saw and gives it to things we didn't. With tiny data it takes a *lot*.
</details>

**S2. Markov's Onegin.** In 20,000 letters, Markov found about 43.2% vowels. After a vowel, the next letter was a vowel 12.8% of the time. After a consonant, 66.3%.
(a) If letters were independent, what would $P(\text{vowel}\mid\text{vowel})$ be?
(b) A two-state Markov chain settles into a long-run vowel share $\pi$ where "vowels in = vowels out": $\pi = \pi \cdot 0.128 + (1-\pi)\cdot 0.663$. Solve for $\pi$. Does it match his count?

<details><summary>Solution</summary>

(a) 0.432. Independence means the previous letter doesn't matter. The real 0.128 is far
from it, so letters **depend** on their neighbors. That was Markov's point.

(b) $\pi = 0.128\pi + 0.663 - 0.663\pi \Rightarrow \pi(1 - 0.128 + 0.663) = 0.663 \Rightarrow \pi = 0.663/1.535 \approx 0.4319$.
Yes, it matches the 43.2%. The chain's long-run behavior agrees with the overall count, which is
the "law of large numbers for dependent events" that Markov had proved in 1906.
(The same "long-run share" idea is how PageRank scores web pages.)
</details>

**S3. Baselines.** A machine that knows nothing guesses uniformly among the 17 words. What's its surprise per word, in bits and in nats? Our counted machine, scored on every pair in its own story, averages about 1.23 bits (0.85 nats) per word. Why is that comparison a little unfair to the uniform guesser?

<details><summary>Solution</summary>

Uniform: $\log_2 17 \approx 4.09$ bits $= \ln 17 \approx 2.83$ nats per word.
It's unfair because we scored the counting machine **on the same story it counted**. It has
already "seen the test". Fair scoring uses held-out text the model never saw. That's why
nanoGPT reports a separate **validation** loss.
</details>

**S4. GPT's loss.** nanoGPT prints a training loss in nats per token. Early in training, a character model with 65 possible characters reports a loss near 4.17. Where does that number come from, and what would a loss of 1.0 mean?

<details><summary>Solution</summary>

$\ln 65 \approx 4.17$: the average surprise of guessing uniformly among 65 characters, which is
what a freshly initialized model roughly does. A loss of 1.0 nat $\approx 1.44$ bits means the model
is, on average, about as uncertain as a fair choice among $e^{1} \approx 2.7$ options for each
next character. Compare Shannon's 0.6–1.3 bits/letter estimate for skilled human readers.
</details>
