# Recreate the Experiment

> **Idea:** every lesson's hands-on project redoes the *original* historical experiment at kid scale. Students learn the algorithm the way its discoverers did, then compare their tiny version with the original and with today's.

This catalog is a research draft, not a lesson. Lesson authors pick from it. Follow [`STYLE.md`](STYLE.md) when quoting.

**Verification legend**

| Mark | Meaning |
|---|---|
| ✅ | Checked against the primary source, or several independent sources agree. |
| ⚠️ | Found only in secondary sources, or the sources disagree. Read the original before putting it in front of students. |
| ❓ | Unverified. Don't teach this as fact. |
| 🔗 | URL written from memory and not opened in this research pass. Open it before publishing. |

**Every coded recreation must:**
- use only the Python standard library,
- run on 3.12 or newer, in under a minute on a MacBook,
- use data that is **kid-made** (preferred: no license questions, and students own it) or **public domain**.

Working prototypes are in [`experiments/prototypes/`](experiments/prototypes/).

---

## Quick map

| Lesson / branch | Historical experiment | Kid recreation (unplugged → coded) |
|---|---|---|
| 01 guessing machine | Markov's *Onegin* count (1913) · Shannon's guessing game (1951) · Turing & Good's "ban" (1940) | Tally vowels and consonants in a stanza → bigram counter. Play "guess the next letter" → guess-counter. "Deciban detective" scoring → log-odds scorer. |
| 02 numbers that mean things | WWII radar and signal detection theory (1954 papers) | "Blip or noise?" cards, plotting hits vs false alarms → ROC plot in ASCII |
| 03 tables that transform | Wiener & Bigelow's anti-aircraft predictor (1940–42) | Predict where a walking classmate will be → weighted-sum "filter" as a table |
| 04 sliding downhill | Samuel's checkers learner (1959) | Tune 3 evaluation weights for a mini-game by "less wrong" nudges |
| 05 fake neuron | McCulloch–Pitts (1943) · Mark I Perceptron (1958–60) · Minsky–Papert (1969) | Logic gates made of kids → **prototype: X vs E, then XOR fails** |
| 06 blame flows backward | Backprop: Rumelhart, Hinton & Williams (1986) · LeCun's zip codes (1989) | Human "blame relay" → tiny 2-layer net learns XOR; kid-drawn digits |
| 07 babbling network | NETtalk (1987) | Letter-window → sound game → tiny letter-to-sound net "babbles" then improves |
| 08 words as places | word2vec analogies (2013) · Hinton's family trees (1986) | Human word map on the floor → co-occurrence vectors from a public-domain book |
| 09 memory problems | Karpathy's char-rnn (2015) | "Telephone" with a one-number memory → tiny RNN on public-domain text |
| 10 just look back | Transformer translation (2017) | Kids translate a made-up language by pointing back → toy attention translator |
| 11 nanoGPT | char-rnn Shakespeare → nanoGPT · GPT-2 unicorn sample (2019) | Continue the unicorn prompt by hand → tiny GPT on Shakespeare |
| 12 parrot to assistant | InstructGPT / RLHF (2022) | Kids rank Buddy's answers → Bradley–Terry scorer from rankings |
| 13 nanochat | nanochat (2025) | Budget the $100 run on paper → walk the pipeline on a toy model |
| 14 what we know now | Google Brain "cat neuron" (2012) · AlphaGo / AlphaZero (2016–17) | Find the "cat cell" in a doodle clusterer · self-play tic-tac-toe |
| branch-reinforcement-learning | **MENACE (1961)** · TD-Gammon (1992) · AlphaGo (2016) | **Matchboxes and beads → prototype** |
| branch-symbolic-ai | ELIZA (1966) · Deep Blue (1997) | Write ELIZA rules on cards → 40-line rule bot. Hand search of a mini game. |
| branch-vision | LeCun (1989) · AlexNet (2012) · cat neuron (2012) | Kid-drawn 7×7 digits |
| branch-memory-networks | Hopfield network (1982) | Bodies as ±1 "neurons" repair a noisy letter → Hopfield recall of 5×5 letters |
| branch-information-theory | Shannon (1948/1951) · Banburismus (1940) | Bits vs bans |
| branch-classic-ml | Signal detection / ROC | Threshold sweeps |
| branch-generative-images, branch-state-space | *Not researched yet.* | — |

---

## The WWII thread (age-appropriate framing)

Three Lesson 01–03 experiments come from World War II.
- **Bletchley Park codebreaking** (Lesson 01)
- **Radar operators** (Lesson 02)
- **Wiener's predictor** (Lesson 03)

Frame them as **puzzles people solved under pressure to protect others**: reading secret messages, spotting aircraft on a screen, aiming at a moving target. Keep the focus on the thinking. Leave out casualties, weapons effects and graphic detail. Optional reflection, in keeping with the course's Friends-school heritage: "Science done for war. What do we owe to the people it helped and harmed?" Let the teacher choose whether and how deep to go.

---

## 01 · The Guessing Machine

### 1a. Markov counts vowels in *Eugene Onegin* (1913)

**Who / when / where.** Andrey Markov, a mathematician in St Petersburg. He presented the work to the Imperial Academy of Sciences on 23 January 1913. ✅ ([Hayes, *American Scientist* 2013](https://www.americanscientist.org/sites/americanscientist.org/files/201321152149545-2013-03Hayes.pdf))

**What he actually did.**
- He took the first **20,000 letters** of Pushkin's novel in verse, *Eugene Onegin*.
- He sorted every letter into vowel or consonant.
- He counted how often a vowel follows a vowel, a consonant follows a vowel, and so on.

The text tends to *alternate* vowels and consonants. A letter's category depends on the letter before it. ✅ That's the idea behind the "chain".

Exact counts differ between secondary sources (for example, "8,638 vowels"). ⚠️ Quote numbers only from the 2006 translation (*Science in Context*), which we haven't read yet.

**Why it mattered.** Markov had introduced dependent "chains" in **1906**, to win an argument with Nekrasov about the law of large numbers. ✅ ([Encyclopedia of Math](https://encyclopediaofmath.org/wiki/Markov,_Andrei_Andreevich); [Wikipedia: Andrey Markov](https://en.wikipedia.org/wiki/Andrey_Markov)) *Onegin* was one of the first times the idea was applied to real data, and it was language. The bigram model in Lesson 01 is exactly this, with 27 letters instead of 2 categories.

**Kid recreation.**
- *Unplugged:* Each pair of students gets a printed stanza. Mark each letter V or C on graph paper, then tally VV, VC, CV and CC in a 2×2 table. Pool the class's tables. Is P(V after V) different from P(V after C)?
- *Coded:* About 20 lines. Read text, map each letter to V or C, count pairs, print the 2×2 table and both conditional probabilities. Then generalise to 26×26 letters. That's Lesson 01's model.
- *Data:* Henry Spalding's 1881 English translation on [Project Gutenberg #23997](https://www.gutenberg.org/ebooks/23997). It's public domain in the USA. Strip the Gutenberg header and footer to comply with the Gutenberg license. Note for students: English is not Russian, so their numbers *should* differ from Markov's. That's a discussion point, not a bug.

**Algorithm learned.** Counting → conditional probability → first-order Markov chain.

**Bug Hunt.** L3 "runs but wrong": Buddy counts "y" as a consonant everywhere and treats spaces as consonants. The table still prints, but VV is suspiciously rare.

**Then vs now.** Markov: 20,000 letters, by hand, two categories. Lesson 01 bigram: a book, 27 symbols, under a second. A modern LLM: trillions of tokens, with roughly 100,000 possible next tokens at each step.

### 1b. Shannon's guessing game (1951)

**Who / when / where.** Claude Shannon at Bell Labs. "Prediction and Entropy of Printed English", *Bell System Technical Journal* 30(1): 50–64, 1951. ✅ ([PDF](https://sites.socsci.uci.edu/~rfutrell/teaching/itl-davis/readings/shannon1951prediction.pdf))

**What he actually did.**
- A person guesses the next letter of a hidden text until they get it right, then moves on.
- Shannon recorded the *number of guesses* for each letter.
- He used those counts to bound how much information each letter carries.

For long contexts he gave a *range* (upper and lower bounds), roughly around 1 bit per letter. Secondary sources quote different figures (for example, "1.3 bits"). ⚠️ Quote the bounds from the paper itself.

**Why it mattered.** It made the claim "language is predictable" measurable. Predicting the next symbol is what a GPT is trained to do.

**Kid recreation.**
- *Unplugged:* In pairs, one student hides a sentence and the other guesses letter by letter. Write the number of guesses under each letter. Where were there lots of 1s? (Middles and ends of words.)
- *Coded:* A "Buddy plays Shannon" script. The Lesson 01 bigram model guesses letters in its ranked order, and the script logs its guess counts. Kids compare *their* guess counts with the model's.
- *Data:* Kid-written sentences.

**Algorithm learned.** Ranking predictions; guesses as a measure of surprise (a stepping stone to entropy).

**Bug Hunt.** L2: "Shannon proved English has exactly 1.0 bit per letter." He gave *bounds* from an experiment, not one exact number.

**Then vs now.** A handful of human subjects and short passages, versus models trained to minimise exactly this surprise over the whole web.

### 1c. Turing & Good's "ban": weight of evidence at Bletchley Park (1940)

**Who / when / where.** Alan Turing and I. J. (Jack) Good at Bletchley Park, England, around 1940–41. ✅ ([Good, "Studies in the history of probability and statistics XXXVII: A. M. Turing's statistical work in World War II"](https://jhanley.biostat.mcgill.ca/bios601/CandH-ch0102/GoodOnTuring.pdf); [Wikipedia: Banburismus](https://EN.wikipedia.com/wiki/Banburismus))

**What they actually did.** Banburismus was a hand method for narrowing down the daily settings of the German *naval* Enigma.
- Operators lined up two intercepted messages on long punched sheets, printed in the town of Banbury, and counted letter "repeats".
- Each clue changes the odds a little. Turing measured evidence as the **logarithm of the odds factor**. One **ban** is a factor of 10 in odds, and a **deciban** is one tenth of a ban.
- Independent clues *add* in decibans. Good wrote that about 1 deciban is the smallest change in belief people can sense. ✅ (Good, linked above)

**Why it mattered.** This is "surprise measured with a logarithm", a decade before most people had heard of bits.
- 1 ban = log₂ 10 ≈ **3.32 bits**.
- It links straight to Lesson 01's surprise and to Lesson 12's log-odds.

**Kid recreation: "Deciban Detective."**
- *Unplugged:* Two strips of letters. Slide one under the other and count positions where the letters match.
  - Two pieces of *real English* lined up match more often than random letters do (roughly 1 in 15 vs 1 in 26). ⚠️ These are our English estimates, not Turing's German naval figures.
  - Each match adds about **+2 decibans** for "same language, lined up right". Each mismatch subtracts a little.
  - Kids keep a running score on a number line, and the first team past +20 decibans (100:1 odds) "calls it".
- *Coded:* A 30-line scorer.
  - Compute `10*log10(p_match_english / p_match_random)` from a public-domain book.
  - Slide two texts against each other and plot the score at each offset. The correct alignment stands out.
- *Data:* Any public-domain Gutenberg text, plus random letters made with `random`.

**Algorithm learned.** Log-odds and additive evidence. This is how naïve Bayes and the logit in a classifier work.

**Bug Hunt.** L2 "confident fib": "Turing invented the ban to break Enigma by himself, using the Colossus computer." See the myth busters below.

**Then vs now.** Rooms of people sliding paper sheets, versus a laptop scoring every alignment in milliseconds. Modern LLMs output **logits**, which are log-odds, Turing's units in base *e*.

### 1d. (Optional) The Bombe's crib trick

The British Bombe was an electromechanical machine. It was designed by Turing in 1939 and built on the Polish *bomba* of Marian Rejewski (1938), and the first one was installed in 1940. ✅ ([Britannica: Bombe](https://britannica.com/topic/Bombe)) Gordon Welchman's "diagonal board" greatly reduced false stops. ✅ ([Codes and Ciphers: Bombe menus](https://www.codesandciphers.org.uk/anoraks/menus.htm))

*Unplugged:* Enigma never enciphered a letter as itself. That ruled out some positions for a guessed word (a "crib"). Slide a crib along a ciphertext and cross out positions where any letter lands on itself. ⚠️ This is widely stated, but we didn't find a primary source in this pass. Use the Bletchley Park Trust or Codes and Ciphers material before teaching it. This is **search and logic, not learning**, which makes it a good "Rules vs Learning" contrast.

---

## 02 · Numbers That Mean Things

### Radar operators and signal detection (WWII → 1954)

**Who / when / where.**
- WWII radar operators had to decide "aircraft or noise?" from blips on a screen.
- After the war, W. W. Peterson, T. G. Birdsall and W. C. Fox (University of Michigan) published "The theory of signal detectability" (*Trans. IRE PGIT*, 1954). ✅ ([record](https://manuscript.isc.ac/Inventory/49/944474.htm))
- W. P. Tanner and J. A. Swets brought it to human perception: "A decision-making theory of visual detection", *Psychological Review* 61(6), 1954. ✅ ([DOI 10.1037/h0058700](https://doi.org/10.1037/h0058700))
- The receiver operating characteristic (ROC) curve comes from this work. ✅ ([Hardt & Recht, *Patterns, Predictions, and Actions*](https://arxiv.org/pdf/2102.05242))
- The popular line "ROC curves were invented to evaluate radar operators during the war" is a simplification. ⚠️ Say "grew out of wartime radar research and was formalised in the early 1950s."

**What they did.** They separated two things: how *detectable* a signal is, and where the observer sets their *threshold*. Plot hits against false alarms for every threshold and you get a curve. A better detector bows toward the top-left corner.

**Why it mattered.** Every classifier in this course has a threshold. ROC curves are still how we compare classifiers, from medical tests to spam filters.

**Kid recreation.**
- *Unplugged: "Blip or noise?"* Cards with dot speckle, half with a faint hidden shape.
  - Run three rounds: be "cautious", "normal" and "trigger-happy".
  - Each round gives one (false-alarm rate, hit rate) point, which is a pair of **coordinates**. Plot all three on the board.
- *Coded:* Simulate noisy "echo strengths" with `random.gauss`, sweep the threshold, and print an ASCII ROC curve. Then make the signal stronger and watch the curve bow out.
- *Data:* Simulated or kid-made.

**Algorithm learned.** Thresholds, the hit/false-alarm trade-off, and points as coordinates.

**Bug Hunt.** L4 "lazy test": Buddy's test checks only *accuracy* on a dataset that is 95% noise. "Always say noise" scores 95%. An ROC point exposes it.

**Then vs now.** People squinting at screens, versus every modern classifier reporting an ROC/AUC.

---

## 03 · Tables That Transform

### Wiener & Bigelow's anti-aircraft predictor (1940–42)

**Who / when / where.** Norbert Wiener and Julian Bigelow at MIT, from 1940. ✅ ([Open University](https://www.open.edu/openlearn/digital-computing/machines-minds-and-computers/content-section-2.3); [Principia Cybernetica](https://pespmc1.vub.ac.be/CYBSHIST.html))

**What they did.**
- They tried to predict where an aircraft would be a few seconds ahead, using a statistical **weighted combination of its recent positions** (a "filter").
- The Army chose a simpler Bell Labs system instead, so Wiener's predictor did not see combat use. ⚠️ (secondary sources agree)
- The work fed into his 1948 book *Cybernetics*, named from the Greek for "steersman". ✅

**Why it mattered.** Predicting the next value from a weighted sum of past values is a linear filter. That's a matrix times a vector, and the same shape as next-token prediction.

**Kid recreation.**
- *Unplugged:* One student walks a smooth curve across the gym. Others call out "they'll be HERE in 3 steps!" Then try a rule: next = last + (last − previous). That's a weighted sum with weights (2, −1).
- *Coded:* Positions of a curving dot.
  - Try several weight rows, written as a small table, and see which predicts best.
  - Then stack several predictors as rows of one matrix and apply them all at once. That's Lesson 03's "write the recipe once".
- Framing: a ball toss to a moving friend, not a gun. Mention the real history plainly.

**Algorithm learned.** Linear prediction as matrix × vector.

**Bug Hunt.** L3: the weights are applied in reverse order (oldest position gets the biggest weight). It runs but lags.

**Then vs now.** MIT's mechanical differential analyzer, versus GPUs doing trillions of multiply-adds per second.

---

## 04 · Sliding Downhill (and branch-reinforcement-learning)

### Samuel's checkers player (1959)

**Who / when / where.** Arthur Samuel at IBM. "Some Studies in Machine Learning Using the Game of Checkers", *IBM Journal of Research and Development* 3(3), 1959. ✅ ([PDF](https://www.cs.virginia.edu/evans/greatworks/samuel.pdf))

**What he did.**
- The program scored board positions with a **weighted sum of features** (piece advantage, mobility and so on).
- It adjusted the weights so that its evaluation of a position agreed better with what happened later in the game. It also memorised positions it had seen ("rote learning").
- The paper is one of the earliest uses of "machine learning". Its abstract opens: "Two machine-learning procedures have been investigated in some detail using the game of checkers." ✅ ([DOI 10.1147/rd.33.0210](https://doi.org/10.1147/rd.33.0210))
- Samuel's own claim: "a computer can be programmed so that it will learn to play a better game of checkers than can be played by the person who wrote the program." ✅

**Why it mattered.** It nudged weights to be "less wrong", decades before deep learning. It's also an ancestor of TD-Gammon's temporal-difference idea.

**Kid recreation.**
- *Unplugged:* A tiny game (Hexapawn or 4×4 mini-checkers). Kids give each position a score = a·(my pieces − yours) + b·(my moves − yours). After each game, nudge a and b toward what would have predicted the result.
- *Coded:* The same idea with 2–3 weights, printing the error after each batch of games so students watch it slide downhill.

**Algorithm learned.** Adjusting weights to reduce prediction error; the seed of gradient descent and temporal-difference learning.

**Bug Hunt.** L2: Samuel "defined machine learning as 'the field of study that gives computers the ability to learn without being explicitly programmed'" — see the myth busters below.

**Then vs now.** A 1950s IBM computer learning checkers, versus AlphaZero learning chess from scratch in hours.

---

## 05 · The Fake Neuron

### 5a. McCulloch & Pitts neurons as logic (1943)

**Who / when / where.** Warren McCulloch and Walter Pitts, Chicago. "A Logical Calculus of the Ideas Immanent in Nervous Activity", *Bulletin of Mathematical Biophysics* 5: 115–133, 1943. ✅ ([PubMed](https://pubmed.ncbi.nlm.nih.gov/2185863/))

**What they did.** They called their units "neurons". Their abstract says: "Because of the 'all-or-none' character of nervous activity, neural events and the relations among them can be treated by means of propositional logic." ✅ ([scan](https://jontallen.ece.illinois.edu/uploads/498-NS.S21/McCulloch-Pitts-1943-neural-networks-ocr.pdf)) Today we'd call their units threshold logic units. Their units fire when enough inputs fire, so they behave like AND, OR and NOT gates. **There was no learning.** The wiring was designed by hand.

**Kid recreation.**
- *Unplugged:* Three kids are a neuron. Two "inputs" raise hands, and the "neuron" stands if at least 2 hands are up (AND) or at least 1 (OR). Build NOT with an inhibitory input. Then chain neurons into a half-adder.
- *Coded:* The `two_layer()` XOR in the [perceptron prototype](experiments/prototypes/perceptron-letters/) is McCulloch–Pitts style: hand-set thresholds.

**Rules vs Learning.** These are *programmed* neurons, which sets up the next experiment.

### 5b. The Mark I Perceptron: what it actually recognised (1958–60)

**Who / when / where.**
- Frank Rosenblatt, Cornell Aeronautical Laboratory, Buffalo, New York, funded by the US Office of Naval Research.
- His paper's title calls the perceptron "a probabilistic model for information storage and organization in the brain" (*Psychological Review* 65(6), 1958). ✅ ([DOI 10.1037/h0042519](https://doi.org/10.1037/h0042519)) Today we'd call it a single-layer linear classifier.
- He showed the perceptron idea on an IBM 704 at a Navy press event on **7 July 1958**. ✅ ([Wikipedia: Perceptron](https://en.wikipedia.org/wiki/Perceptron); [Cornell](https://psychology.cornell.edu/news/professors-perceptron-paved-way-ai-60-years-too-soon))
- The hardware Mark I had a **20×20 = 400 photocell** "retina". ✅
- It went to the Smithsonian in 1967. ⚠️

**What it actually recognised.** Wikipedia cites Rosenblatt, "Perceptron Simulation Experiments", *Proc. IRE* 48(3), 1960. ⚠️ Read that paper before quoting the numbers.
- **Left vs right:** sheets marked on the left vs the right (1958).
- **Squares vs circles:** 99.8% on test images.
- **Squares vs diamonds:** 100% with 60 training images.
- **Letter X vs letter E:** 100% "when trained with only 20 images (10 images of each letter)", allowing small shifts and rotations.
- **E vs F:** above 80%.

([Wikipedia: Mark I Perceptron](https://en.wikipedia.org/wiki/Mark_I_Perceptron); the book version is Rosenblatt, *Principles of Neurodynamics*, 1962, [scan](https://papers.baulab.info/papers/Rosenblatt-1962.pdf))

**So, "the alphabet thing":** yes, the perceptron was tested on **letters of the alphabet**, starting with X vs E. That's our prototype. (For AlphaGo, see Lesson 14.)

**Why it mattered.** It was the first machine to *learn* its weights from examples by error correction. The press overreached. See the myth busters.

**Kid recreation.**
- *Unplugged:* A human perceptron on a 5×5 sticky-note grid. Each student holds one weight card, and the cards move one step whenever the class guesses wrong. (Details in the prototype README.)
- *Coded:* ✅ **Working prototype:** [`experiments/prototypes/perceptron-letters/`](experiments/prototypes/perceptron-letters/).
  - It learns X vs E from 20 smudged examples and scores 100% on 1000 new ones (seed 1958).
  - The hand-written rule scores 74.6% on the same letters.
- *Data:* Letters drawn in the code. Kids can draw their own on 5×5 graph paper.

**Algorithm learned.** The perceptron learning rule and linear decision boundaries.

**Then vs now.** Room-sized hardware with a 400-cell retina, versus 25 numbers in a list, versus vision models with billions of weights.

### 5c. Minsky & Papert and XOR (1969)

**Who / when / where.** Marvin Minsky and Seymour Papert (MIT), *Perceptrons*, 1969. ✅ ([Wikipedia: Perceptrons (book)](https://en.wikipedia.org/wiki/Perceptrons_(book)))

**What they actually did.**
- They proved limits of **single-layer** perceptrons with restricted connections. Examples: computing *parity* (XOR is 2-bit parity), and *connectedness* without impractically large units.
- They knew multi-layer networks could compute XOR. They *conjectured* that extending to multiple layers would be "sterile". ⚠️ That word is reported by Wikipedia; read the book's wording.

**Kid recreation.** Act 3 of the prototype: the perceptron rule loops forever on XOR. Then two hand-wired layers solve it. *Unplugged:* put the four XOR points on the floor and try to separate them with one rope. You can't.

**Bug Hunt.** L2: "Minsky and Papert proved neural networks can't do XOR, which killed AI for 20 years." See the myth busters below.

---

## 06 · Blame Flows Backward

### 6a. Backprop learns XOR and family trees (1986)

**Who / when / where.** David Rumelhart, Geoffrey Hinton and Ronald Williams.
- "Learning representations by back-propagating errors", *Nature* 323: 533–536, 1986. ✅ ([DOI 10.1038/323533a0](https://doi.org/10.1038/323533a0))
- The fuller treatment is in the *PDP* volumes (1986).
- The **family-trees** task: two family trees, one English and one Italian, with the same structure. The network learns relationships like "Colin's mother is Victoria" and builds its own internal features (nationality, generation) in the hidden layer. ✅ (described in [Hinton 1986, "Learning distributed representations of concepts"](https://fermatslibrary.com/s/learning-distributed-representations-of-concepts); the "24 people, 104 facts" counts are ⚠️ secondary)

**Why it mattered.** It showed a practical way to train the hidden layers Minsky and Papert worried about, and that the hidden units learn *meaningful* features.

Backprop has a longer prehistory (Linnainmaa 1970, Werbos 1974). ❓ We haven't verified those here. Say "1986 made it famous", not "1986 invented it".

**Kid recreation.**
- *Unplugged: "Blame relay."* Three rows of kids are a network. The output kid hears "you were 3 too high". They split the blame back to the kids who fed them, in proportion to how loudly each one "spoke" (their weight).
- *Coded:* A 2-2-1 sigmoid network learns XOR in pure Python (about 60 lines, a few seconds).
  - Stretch goal: a tiny family tree that the *class invents* (fictional families, so no personal data). Students check which hidden unit learned "generation".

**Bug Hunt.** L3: the gradient sign is flipped for one layer. Loss goes *up*, slowly.

**Then vs now.** A few dozen weights on 1980s workstations, versus billions of weights trained with the same chain rule.

### 6b. LeCun's zip codes (1989) → branch-vision

**Who / when / where.** Yann LeCun and colleagues at AT&T Bell Labs, Holmdel, New Jersey. "Backpropagation Applied to Handwritten Zip Code Recognition", *Neural Computation* 1(4): 541–551, 1989. ✅ ([DOI](https://doi.org/10.1162/neco.1989.1.4.541))
- The data: "9298 segmented numerals digitized from handwritten zip codes that appeared on U.S. mail passing through the Buffalo, N.Y. post office". ✅ ([paper PDF](https://papers.baulab.info/papers/LeCun-1989.pdf))
- The network used shared-weight local feature detectors, which became convolutional networks.

**Kid recreation.**
- *Unplugged:* Each student draws the digits 0–9 on 7×7 grids. Slide a 3×3 "edge stencil" over a drawing and count the matches. That's convolution done by hand.
- *Coded:* Pure-Python nearest-neighbour, then a perceptron, then a tiny conv layer on the **class's own digits**.
  - Avoid downloading MNIST: its licensing is often quoted inconsistently (❓), and kid-made data is better pedagogy.
  - Get consent before keeping handwriting samples. Store them unnamed.

**Then vs now.** About 9,000 digits read on a Bell Labs computer. Karpathy's 2022 blog post re-ran the 1989 network on a MacBook. 🔗 `https://karpathy.github.io/2022/03/14/lecun1989/`

---

## 07 · The Babbling Network

### NETtalk learns to read aloud (1986–87)

**Who / when / where.** Terrence Sejnowski and Charles Rosenberg (Sejnowski was at Johns Hopkins). "Parallel networks that learn to pronounce English text", *Complex Systems* 1: 145–168, 1987. ✅ ([Complex Systems](https://www.complex-systems.com/abstracts/v01_i01_a10/); [Salk PDF](https://papers.cnl.salk.edu/PDFs/NETtalk_%20A%20Parallel%20Network%20That%20Learns%20to%20Read%20Aloud%201988-3562.pdf))

**What they did.**
- A window of letters (7 letters, 203 input units) slides along the text. The network outputs the phoneme for the middle letter, and a DECtalk synthesiser speaks it.
- Training data: a transcription of a child's continuous speech plus a dictionary of about 20,000 words. ✅
- Recordings of training went from **babble**, to word-like sounds, to intelligible speech. ⚠️ This is well known, but we described it from secondary sources.

**Why it mattered.** You could *hear* a network learning. That's this lesson's name.

**Kid recreation.**
- *Unplugged:* A "letter window" card with 3 holes. Slide it along words. The class votes on the sound of the middle letter ("c" in "cat" vs "city").
- *Coded:* A tiny softmax network maps a 3-letter window to one of about 10 sound classes. It prints its guesses every epoch, so the output "babbles" before it settles.
- *Data:* A kid-made word/sound list. The original NETtalk corpus is on [UCI](https://archive.ics.uci.edu/dataset/150/connectionist+bench+nettalk+corpus). ❓ Check its license before use; we didn't.

**Then vs now.** Tens of thousands of weights (⚠️ exact count unverified) and a speech synthesiser, versus today's neural text-to-speech.

---

## 08 · Words as Places

### word2vec analogies (2013)

**Who / when / where.** Tomas Mikolov, Kai Chen, Greg Corrado and Jeffrey Dean (Google). "Efficient Estimation of Word Representations in Vector Space", 2013. ✅ ([arXiv 1301.3781](https://arxiv.org/abs/1301.3781))
- The famous example is "vector('King') − vector('Man') + vector('Woman') results in a vector that is closest to … Queen". ✅
- The paper credits that example to earlier work, "Linguistic Regularities in Continuous Space Word Representations" (Mikolov, Yih & Zweig, NAACL 2013). ✅

**Kid recreation.**
- *Unplugged:* The gym floor is a map. Kids holding word cards place themselves so that words used in similar sentences stand close together. Then walk the analogy: from "puppy" to "dog", then the same steps from "kitten".
- *Coded:* Build co-occurrence vectors from a public-domain book (Gutenberg) with `collections.Counter`. Compare words with cosine similarity, then try analogies. Expect many failures at this scale; that's honest.

**Sensitivity note.** Gender analogies in word vectors also carry **bias** (well documented, e.g. Bolukbasi et al. 2016 ❓ not checked here). Use animals or places for the hands-on part. Discuss bias as a fairness conversation.

**Then vs now.** Billions of words of news text, versus one Gutenberg novel on a laptop. LLM embeddings use the same "words as places" idea.

---

## 09 · Memory Problems

### Karpathy's char-rnn (2015)

**Who / when.** Andrej Karpathy, "The Unreasonable Effectiveness of Recurrent Neural Networks", May 2015, with the `char-rnn` code. ✅ (date from secondary sources). 🔗 `https://karpathy.github.io/2015/05/21/rnn-effectiveness/` 🔗 `https://github.com/karpathy/char-rnn`
- The model read text one character at a time and generated Shakespeare-like text, LaTeX and C code.
- He found individual cells tracking things like quotes and line length. ⚠️

**Kid recreation.**
- *Unplugged: "Telephone with one number."* Each kid can pass forward only a single number from 0 to 9 summarising the sentence so far. How much of the start survives?
- *Coded:* A tiny Elman RNN in pure Python on a few KB of Shakespeare. Show that its memory of an opening quote mark fades over distance.

**Data.** Shakespeare's text is public domain. The `tinyshakespeare` file sits in Karpathy's MIT-licensed repo. 🔗 Cite the text as Shakespeare/Gutenberg.

---

## 10 · Just Look Back

### The Transformer's translation task (2017)

**Who / when / where.** Vaswani et al. (Google Brain / Google Research), "Attention Is All You Need", 2017. ✅ ([arXiv 1706.03762](https://arxiv.org/abs/1706.03762))
- English→German (WMT 2014): **28.4 BLEU**, beating prior results "by over 2 BLEU". ✅
- The big model trained for **3.5 days on eight P100 GPUs**. The paper ties this to its English→French result. ✅

**Before the Transformer: "align", not "attention" (2014).** Bahdanau, Cho & Bengio, "Neural Machine Translation by Jointly Learning to Align and Translate" ([arXiv 1409.0473](https://arxiv.org/abs/1409.0473)). ✅ Their model learns "to automatically (soft-)search for parts of a source sentence that are relevant to predicting a target word". Their own key terms are "alignment model" and "(soft-)search", and they named the model RNNsearch. The word "attention" appears only twice, in one passage: "this implements a mechanism of attention in the decoder." Today we just call it attention.

**Kid recreation.**
- *Unplugged:* Invent a "class language" with word-order flips (adjective after noun, verb at the end). Translators must *point back* to the source word they're using for each output word. Draw the pointing lines: that's an attention map.
- *Coded:* A toy attention model "translates" the class language. For example, reverse, reorder or substitute 5–8 word sentences, generated by a script. It uses hand-coded dot-product attention and prints the attention grid in ASCII.

**Then vs now.** 8 GPUs for 3.5 days, versus a laptop translating a 30-word made-up language in seconds.

---

## 11 · nanoGPT

### From char-rnn Shakespeare to nanoGPT, and GPT-2's unicorns (2019)

- **GPT-2 (OpenAI, 14 February 2019),** "Better language models and their implications". ✅ ([OpenAI](https://openai.com/index/better-language-models/))
  - OpenAI showed a sample continuing a prompt about scientists discovering **unicorns**. Read the page for the exact prompt wording before quoting it; the "Andes" detail is ⚠️ from memory.
  - At first OpenAI withheld the full 1.5-billion-parameter model ("staged release"). ✅
- **nanoGPT** is Karpathy's minimal GPT training repo. Its README describes reproducing GPT-2 (124M) on OpenWebText. ⚠️ We didn't open it in this pass. 🔗 `https://github.com/karpathy/nanoGPT`

**Kid recreation.**
- *Unplugged:* The class writes the unicorn story one word at a time. Each student picks the next word from three options drawn from a hat ("sampling"). Compare with a "most likely word always" version. Which is more boring?
- *Coded:* A tiny GPT on Shakespeare that runs in under a minute in pure Python (very small: 1–2 layers, short context). It's the same shape as nanoGPT, scaled down by about a million.

**Then vs now.** GPT-2: 1.5 billion parameters. Our toy: about 10,000.

---

## 12 · Parrot to Assistant

### InstructGPT and RLHF (2022)

**Who / when.** Ouyang et al. (OpenAI), "Training language models to follow instructions with human feedback", 2022. ✅ ([arXiv 2203.02155](https://arxiv.org/abs/2203.02155))
- Labelers wrote demonstrations, then **ranked** model outputs. A reward model learned from the rankings, and reinforcement learning tuned the model toward it.
- Headline result: "outputs from the 1.3B parameter InstructGPT model are preferred to outputs from the 175B GPT-3, despite having 100x fewer parameters." ✅

**Kid recreation.**
- *Unplugged:* Buddy gives 3 answers to each of 5 prompts. Kids **rank** them privately, then pool the rankings.
- *Coded:* A Bradley–Terry scorer (a sigmoid of score differences) turns the rankings into a "reward" per answer style. Students see where they disagreed. Whose preferences got baked in? That's a conversation about fairness and honesty.
- *Data:* Class rankings, anonymised.

**Contrast with ELIZA (branch-symbolic-ai).** ELIZA's helpfulness was hand-written rules. RLHF's helpfulness is learned from people's rankings.

---

## 13 · nanochat

**nanochat (Karpathy, released 13 October 2025).** A minimal full-stack ChatGPT-like pipeline. Its `speedrun.sh` trains a small chat model in about 4 hours on an 8×H100 node, roughly $100. ✅ ([Hackaday](https://hackaday.com/2025/10/20/nanochat-lets-you-build-your-own-hackable-llm)) MIT license. ⚠️ Check the repo before quoting the parameter count.

**Kid recreation.**
- *Unplugged:* Budget the $100 run. How many GPU-hours is that? How many words per second? Compare with the class's pure-Python toy.
- *Coded:* Walk each nanochat stage (tokenise → pretrain → fine-tune → chat → evaluate) on the Lesson 11 toy model. Buddy is the "full-size" comparison on the Mac mini.

---

## 14 · What We Know Now (and branch-vision / branch-reinforcement-learning)

### 14a. The Google Brain "cat neuron" (2012)

**Who / when / where.** Quoc Le, Marc'Aurelio Ranzato, Rajat Monga, Matthieu Devin, Kai Chen, Greg Corrado, Jeff Dean and Andrew Ng (Google / Stanford). "Building high-level features using large scale unsupervised learning", ICML 2012. ✅ ([Google Research](https://research.google/pubs/pub38115/); [arXiv 1112.6209](https://arxiv.org/abs/1112.6209v3))

**What they actually did.**
- **10 million 200×200 images**, one frame per random YouTube video, with **no labels**.
- A 9-layer sparse autoencoder with **1 billion connections**, trained for **3 days on 1,000 machines (16,000 cores)**. ✅
- Afterwards, they found units that responded to **cat faces**, and others to **human faces** and **human bodies**. Nobody told it what a cat was.
- Its learned features reached 15.8% accuracy on 20,000 ImageNet categories, a 70% relative improvement on the previous best. ✅
- Myth-check: it was 16,000 *cores*, not 16,000 computers.

**Why it mattered.** It's evidence that features can emerge without labels, and an early "open the box and find a neuron that means something" result. Lesson 14 is about interpretability.

**Kid recreation.**
- *Unplugged:* The class makes 40 small doodles on 7×7 grids: cats, houses and suns, **with no labels on the back**. Small groups sort them into piles by "what looks alike" without naming categories. Afterwards, ask: did a "cat pile" appear on its own?
- *Coded:* Pure-Python k-means (or a 1-layer autoencoder) on the doodles. Find the cluster or unit that lights up most for cats.
  - Be explicit that k-means is a *stand-in* for their much bigger autoencoder, not the same method.
- **Do not use photos of people.** The original also found face neurons; *discuss* that, don't do it.

**Then vs now.** 10 million frames on 16,000 cores for 3 days, versus 40 doodles on a laptop in a second. Interpretability research today looks for features like this inside LLMs.

### 14b. AlphaGo (2016) and AlphaZero (2017)

- **AlphaGo** beat Lee Sedol **4–1** in Seoul, 9–15 March 2016. ✅ ([British Go Association match report](https://britgo.org/node/5458))
  - The Nature paper (Silver et al., 2016, "Mastering the game of Go with deep neural networks and tree search") describes the earlier Fan Hui match. 🔗 DOI `10.1038/nature16961`
  - AlphaGo **first learned from human expert games** (KGS server), then improved by self-play. ✅ (secondary sources agree)
- **AlphaGo Zero / AlphaZero (2017)** used **no human games**: "tabula rasa" self-play. ✅ ([arXiv 1712.01815](https://arxiv.org/abs/1712.01815v1))

**Kid recreation.** MENACE (below) *is* the kid-scale AlphaZero idea: self-play with reinforcement. Extensions:
- Let two MENACEs play each other.
- Coded stretch goal: Connect-4 on a 5×4 board with a lookup-table learner plus a tiny search.

### branch-reinforcement-learning: MENACE (1961) ★ prototype

**Who / when / where.** Donald Michie, Edinburgh. He built MENACE in **1961**. Some sources say he designed it in 1960. ⚠️
- Paper: "Experiments on the mechanization of game-learning. Part I. Characterization of the model and its parameters", *The Computer Journal* 6(3): 232–236, 1963. ✅ ([DOI 10.1093/comjnl/6.3.232](https://doi.org/10.1093/comjnl/6.3.232); read directly: [scan](https://gwern.net/doc/reinforcement-learning/model-free/1963-michie.pdf))

**What he actually did.** Quotes are from the paper.
- "Every one of the 287 essentially distinct positions which the opening player can encounter in the course of play is represented by a separate box." ✅
- **287 vs 304.** Most modern rebuilds use **304** boxes ([mscroggs](https://www.mscroggs.co.uk/blog/94)). Our prototype also counts 304: the positions MENACE meets on its moves 1–4 (1 + 12 + 108 + 183), with rotations and reflections merged and finished games left out. We couldn't find a source that explains where Michie's other 17 positions went. Rodney Brooks notes the same mismatch, and that Michie mentioned "288 matchboxes" in a 1986 paper ([Brooks](https://rodneybrooks.com/forai-machine-learning-explained/)). ⚠️ Teach it as: "Michie reported 287; most modern rebuilds use 304. Can you figure out why they differ?" That's a good Bug Hunt question with no answer key.
- Coloured beads, one colour per square.
- Starting beads by stage of play: 4 / 3 / 2 / 1.
- When it lost, it was "'punished' by confiscation of the selected bead". When it did well it was "'rewarded' by adding … an extra bead". In the maiden tournament, a draw got +1 bead and a win got +3.
- The tournament was against a human, Michie himself. The often-quoted "220 games over 16 hours" comes from secondary sources. ⚠️ ([mscroggs](https://mscroggs.co.uk/blog/19))
- He later simulated it on a Ferranti Pegasus 2 computer. ✅

**Why it mattered.** It's reinforcement learning you can hold in your hands, and the same loop as AlphaZero.

**Kid recreation.**
- *Unplugged:* 13 matchboxes (MENACE's first two moves) or a smaller game such as Hexapawn. Kids play, then do the bead bookkeeping.
- *Coded:* ✅ **Working prototype:** [`experiments/prototypes/menace/`](experiments/prototypes/menace/).
  - Against a random opponent: wins go from 64% to 88% over 2000 games.
  - Against a careful opponent: losses go from 19% to about 0%, and wins from 5% to 44%.
  - Each run takes under a second.

**Bug Hunt.** L3: a reward sign is flipped. L4: a "test" that only checks the game finishes.

**Then vs now.** 287 matchboxes (Michie's count) and hundreds of games played by hand, versus AlphaZero: a deep network plus search, reaching superhuman play within 24 hours of self-play.

### branch-reinforcement-learning: TD-Gammon (1992)

Gerald Tesauro (IBM Research). A neural network learned backgammon by **self-play** with temporal-difference learning. The final version was trained on about 1.5 million self-play games and played just below top human level. ✅ ([Tesauro, *CACM* 38(3), 1995](https://bkgm.com/articles/tesauro/tdl.html))

*Kid version:* add a TD update to the MENACE bead counts, so each move learns from the next position's value and not only the final result. Compare the learning curves.

---

## branch-symbolic-ai

### ELIZA (1966): rules that fooled people

Joseph Weizenbaum, MIT. ELIZA was published in *Communications of the ACM* in January 1966. ✅
- Its DOCTOR script used keyword patterns to imitate a Rogerian therapist, for example "I am unhappy" → "How long have you been unhappy?".
- Weizenbaum later recalled that his secretary asked him to leave the room so she could talk to it privately. ⚠️ This is his own later recollection. ([Smithsonian](https://www.smithsonianmag.com/history/why-the-computer-scientist-behind-the-worlds-first-chatbot-dedicated-his-life-to-publicizing-the-threat-of-ai-180987971/))

**Kid recreation.**
- *Unplugged:* Kids write ELIZA rules on index cards ("if you hear *mother*, say *Tell me more about your family*"). One kid "runs" the cards while another chats.
- *Coded:* A 40-line `re`-based ELIZA. Then compare its answers with Buddy's.

### Deep Blue (1997): search, not learning

IBM's Deep Blue beat Garry Kasparov in 1997. It used massive **search** plus a hand-designed evaluation function. Its speed was up to about 200 million positions per second (average ≈ 126 million in the match). ✅ ([Campbell, Hoane & Hsu 2002](https://www.cefns.nau.edu/~edo/Classes/CS470-570_WWW/Readings/Campbell2002.pdf))
- Some evaluation weights were tuned with help from master games and grandmaster advice. ⚠️
- It did **not** learn by playing itself.

*Kid version:* hand-search the game tree of a tiny Nim or tic-tac-toe ending on paper. Then compare with MENACE: Deep Blue is *search + rules*, MENACE is *learning*, AlphaZero is *both*.

---

## branch-memory-networks

### Hopfield network (1982): recalling a pattern from a noisy copy

John Hopfield, "Neural networks and physical systems with emergent collective computational abilities", *PNAS* 79: 2554, 1982. ✅ It's a recurrent network that acts as an **associative memory**. Hopfield and Hinton shared the **2024 Nobel Prize in Physics**. ✅ ([Royal Swedish Academy background](https://kva.se/app/uploads/2024/11/sciback_fy_en_24.pdf))

The "recall letters from noisy versions" setup is the standard textbook demo, not necessarily the 1982 paper's own example. ⚠️

**Kid recreation.**
- *Unplugged:* 25 kids stand in a 5×5 grid holding +1/−1 cards that store the letter "T". Scramble five cards. Each kid looks at neighbours' cards and flips toward the majority, weighted by the stored pattern. The T comes back.
- *Coded:* Pure-Python Hopfield net storing 3 letters on 5×5. Add noise and watch it settle. Then store too many letters and watch it fail (capacity).

---

## Rules vs Learning: a thread through the whole course

Every unit asks the same question: **did a person write the rule, or did the machine learn it from examples?**

| Pair | Programmed (rules) | Learned |
|---|---|---|
| Letters (05) | "Full left edge = E" rule: **74.6%** on smudged letters | Perceptron from 20 examples: **100%** on 1000 new ones (prototype, seed 1958) |
| Neurons (05) | McCulloch–Pitts gates, wired by hand (1943) | Rosenblatt's perceptron, weights learned (1958) |
| Games (RL) | Deep Blue's search plus evaluation (1997) | MENACE (1961) → TD-Gammon (1992) → AlphaZero (2017) |
| Chat (12) | ELIZA's keyword scripts (1966) | InstructGPT learned from human rankings (2022) |
| Codes (01) | The Bombe: logic and search (1940) | Banburismus: weighing evidence statistically. A bridge, not ML, but the same log-odds math as a learned classifier. |

**Recommended routine** (works in every unit):
1. Kids write rules first, timed at 10 minutes.
2. Test the rules on *new, messy* examples.
3. Let a learner train on the same examples.
4. Compare: accuracy, how easy it is to explain, and what it gets wrong.

Neither side always wins. Rules are explainable and need no data. Learning copes with mess but can pick up hidden biases from its examples.

**Big picture.** This is the historical split between **symbolic AI** and **machine learning**. The 1955 Dartmouth proposal (McCarthy, Minsky, Rochester and Shannon) coined "artificial intelligence". ✅ ([AI Magazine reprint](https://ojs.aaai.org/index.php/aimagazine/article/view/1904/1802))

Andrej Karpathy's essay **"Software 2.0"** (Medium, November 2017) frames neural networks as programs written in weights and found by optimisation from data, as opposed to "Software 1.0" written by people. ✅ (<https://karpathy.medium.com/software-2-0-a64152b37c35>)

**Bug Hunt tie-in.** Buddy is itself learned, not programmed. Its planted mistakes show *why* learned systems need testing: you can't read the rule.

---

## History Myth Busters (→ L2 "confident fib" challenges)

| # | Claim that sounds true | Verdict | What the sources say |
|---|---|---|---|
| 1 | "The 1950s perceptron was **first used to tell men from women**." | ❌ **False as stated**, with a kernel of later truth ⚠️ | **The documented first experiments (1958–60) were marks on the left vs right, squares vs circles, and the letters X vs E** ([Wikipedia: Mark I](https://en.wikipedia.org/wiki/Mark_I_Perceptron), citing Rosenblatt 1960). **But** *Smithsonian* magazine reports **mid-1960s film footage** of a researcher "teaching" a perceptron-style machine to sort slides of faces with switches marked "man / woman". The machine reportedly labelled George Harrison a woman, apparently because of his hair ([Smithsonian](https://www.smithsonianmag.com/innovation/early-days-machine-learning-massive-computers-said-george-harrison-was-woman-ai-come-long-way-180988805/)). We couldn't identify the film, the machine or a published result. ❓ Published work on this task came later: **SEXNET** (Golomb, Lawrence & Sejnowski, [NIPS 1990](https://papers.nips.cc/paper/1990/hash/bbcbff5c1f1ded46c25d28119a85c6c2-Abstract.html)) and Gray, Lawrence, Golomb & Sejnowski, "A perceptron reveals the face of sex", *Neural Computation* 7(6), **1995** ([record](https://mlanthology.org/neco/1995/gray1995neco-perceptron)). So: not *first*, not the purpose, and not 1950s. |
| 2 | "The Army trained a neural net to spot tanks, but it only learned sunny vs cloudy days." | ❌ **Probably an urban legend** | Gwern collected versions going back decades and found no primary source. The earliest is a remembered 1960s question from Ed Fredkin. Gwern's conclusion: it "probably didn't happen as described". A real 1964 tank-recognition study (Kanal & Randall) reported success, not this failure ([gwern.net/tank](https://gwern.net/tank)). Still a *useful parable* about shortcut learning; tell it as a legend, then tell the **real, documented** shortcut stories in [`threads/shortcut-learning.md`](threads/shortcut-learning.md). |
| 3 | "Turing invented the computer to break Enigma." | ❌ **False** (it mixes up three different things) | Turing's 1936 paper "On Computable Numbers" was pre-war logic. Enigma was attacked with the **electromechanical Bombe** (1939–40), building on Rejewski's Polish *bomba* and improved by Welchman ([Britannica](https://britannica.com/topic/Bombe)). The electronic **Colossus** (1943–44) was built by **Tommy Flowers** against the **Lorenz** cipher, not Enigma ([Discover](https://www.discovermagazine.com/testing-turings-legacy-17631)). |
| 4 | "Minsky & Papert proved neural networks can't learn XOR, and that killed AI." | ⚠️ **Misleading** | Their proofs cover **single-layer** perceptrons. They knew multi-layer nets could compute XOR ([Wikipedia](https://en.wikipedia.org/wiki/Perceptrons_(book))). How much the book caused the funding decline is contested by historians ([Olazaran 1993](https://gwern.net/doc/ai/nn/1993-olazaran.pdf)). And "AI" ≠ neural nets: symbolic AI thrived in the 1970s. |
| 5 | "Rosenblatt said his perceptron would walk, talk and be conscious." | ⚠️ **Misattributed** | The *New York Times* (8 July 1958) reported that the **Navy** expected a future machine to "walk, talk, see, write, reproduce itself and be conscious of its existence". Accounts say Rosenblatt's own statements were more measured ([Wikipedia: Frank Rosenblatt](https://en.wikipedia.org/wiki/Frank_Rosenblatt)). ⚠️ We didn't read the NYT original. |
| 6 | "Arthur Samuel defined ML as 'giving computers the ability to learn without being explicitly programmed.'" | ⚠️ **Popular paraphrase, not a quote** | Samuel's 1959 paper is a real early use of "machine learning". We didn't find that sentence in the paper ([PDF](https://www.cs.virginia.edu/evans/greatworks/samuel.pdf)). Quote the paper instead. |
| 7 | "Google's AI watched YouTube and was told to find cats, on 16,000 computers." | ❌ **Two errors** | It had **no labels**; cat-face units *emerged*. And it was **1,000 machines / 16,000 cores** ([Google Research](https://research.google/pubs/pub38115/)). |
| 8 | "AlphaGo taught itself Go from scratch." | ❌ **Wrong AlphaGo** | The 2016 AlphaGo first learned from human expert games. **AlphaGo Zero / AlphaZero (2017)** learned "tabula rasa" ([arXiv 1712.01815](https://arxiv.org/abs/1712.01815v1)). |
| 9 | "Deep Blue was an AI that learned chess." | ⚠️ **Mostly false** | It was brute-force search plus an expert-tuned evaluation function ([Campbell et al. 2002](https://www.cefns.nau.edu/~edo/Classes/CS470-570_WWW/Readings/Campbell2002.pdf)). It did not learn from self-play. |
| 10 | "ELIZA understood people's feelings." | ❌ **False** | ELIZA matched keyword patterns. Weizenbaum was alarmed that people *believed* it understood. That story is about humans, not the program ([Smithsonian](https://www.smithsonianmag.com/history/why-the-computer-scientist-behind-the-worlds-first-chatbot-dedicated-his-life-to-publicizing-the-threat-of-ai-180987971/)). |
| 11 | "Markov invented Markov chains to study poetry." | ❌ **False** | He introduced them in **1906** in a dispute about probability theory. *Onegin* (1913) was an *application* ([Hayes](https://www.americanscientist.org/sites/americanscientist.org/files/201321152149545-2013-03Hayes.pdf)). |
| 12 | "Colossus broke Enigma." | ❌ **False** | Colossus targeted **Lorenz** ("Tunny") teleprinter traffic ([Discover](https://www.discovermagazine.com/testing-turings-legacy-17631)). |
| 13 | "Backprop was invented in 1986." | ⚠️ **Oversimplified** | 1986 (Rumelhart, Hinton & Williams) made it widely known for neural nets. Earlier formulations exist. ❓ We haven't verified those here. |

**How to use these.** Buddy states one confidently. Students must find a primary source that confirms or refutes it, and say *how sure* they are. Myth #1 is the best one: the claim is false as stated, but there's a real kernel. Students practise "partly true" as a verdict.

---

## Sensitivity policy

1. **No hands-on classification of people.** Students will not build, train or run models that classify people by **sex/gender, race, ethnicity, age, emotion or identity**, and will not run **face recognition**. Not on classmates, not on celebrities, not on stock photos.
2. **Discuss it instead, quoting the authors' own terms** (per STYLE.md). The face-classification history (myth #1, SEXNET, Gray et al. 1995) and the face neurons in the cat paper are taught as **conversations** about bias, consent and who decides the categories. Framing:
   - **Fairness:** a model that sorts people into two boxes erases people who don't fit, and it learns whatever bias was in its photos. The George Harrison mistake is a gentle, real example: the machine learned "long hair = woman", which was a shortcut, not a fact.
   - **Honesty:** be truthful about what a system really does. Don't overclaim, like the 1958 headlines. Don't repeat myths, like the tank story told as fact.
3. **Prefer kid-made, non-personal data.** Use letters, digits, doodles, invented languages and fictional family trees. Handwriting is mildly personal: store it unnamed and delete it at term's end unless families opt in.
4. **Military history, age-appropriate.** WWII and radar topics are framed as puzzles and protection: codebreaking, spotting aircraft, predicting motion. No weapons-effects detail and no graphic content. An optional quiet reflection on peace and protection fits here. Recreations use neutral stand-ins: a ball toss, not a gun; "blips", not targets.
5. **Word-vector bias.** Gendered analogies (king/queen) can be *shown* by the teacher and discussed. Students build analogies with animals, places and food.
6. **Teacher override.** Any activity can be done in discussion-only mode.

---

## Open research to-dos

- Read Rosenblatt 1960 (*Proc. IRE*) and the 1962 book to confirm the X-vs-E numbers and the Mark I's weight hardware.
- Identify the 1960s "man/woman" perceptron film (archive, year, machine).
- Read Markov 1913 (2006 translation) for exact counts; Shannon 1951 for exact bounds.
- Confirm the "Enigma never encrypts a letter to itself" wording against a Bletchley Park Trust source.
- Open the 🔗 URLs (nanoGPT, char-rnn, Karpathy blog posts, AlphaGo DOI) before publishing.
- Check licenses: the NETtalk UCI corpus, and Gutenberg header-stripping for redistributed excerpts.
- Research branch-generative-images and branch-state-space experiments.
