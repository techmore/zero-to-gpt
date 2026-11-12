# Zero to GPT — Course Roadmap

This is the full map of the course: 14 main-path lessons and 8 side branches. It's for teachers planning a term, adults studying on their own, and anyone who wants to know what's coming.

- Every lesson has the same sections: **The Story · Kid version · Adult version · Build it · The Thinking Move · Branches**.
- Every lesson runs as **three 45-minute blocks**, like Lesson 1:
  - **Block A**: unplugged activity + story
  - **Block B**: Jupyter lab
  - **Block C**: Bug Hunt
- Bug Hunt challenges are numbered `<lesson>.<n>`, for example 1.1–1.6.
- Buddy (the local model on the campus Mac mini) makes planted mistakes on the mistake ladder:
  - **L1** plain wrong
  - **L2** confident fib
  - **L3** runs but wrong
  - **L4** lazy test
  - **L5** actually right

**Ways to run it**
- [`formats/one-week-intensive.md`](formats/one-week-intensive.md)
- [`formats/two-week-deep-dive.md`](formats/two-week-deep-dive.md)
- [`formats/self-paced.md`](formats/self-paced.md)
- [`formats/teacher-prep-checklist.md`](formats/teacher-prep-checklist.md)

The full Thinking Moves catalog is in [`THINKING-MOVES.md`](THINKING-MOVES.md). Dated events also appear in the course timeline (`site/timeline/`).

> **About accuracy:** Names and dates below come from the original papers and books, and were checked when this was written. If you find an error, open an issue. Getting history right counts as a Bug Hunt too.

---

## At a glance

| # | Lesson ID | Big question (kid words) | Math practiced | Thinking Move | Status |
|---|---|---|---|---|---|
| 01 | `01-the-guessing-machine` | Can you guess the next letter just by counting? | Counting, fractions, probability, conditional probability | Count instead of argue | 🟡 In progress |
| 02 | `02-numbers-that-mean-things` | How can a list of numbers *mean* something? | Coordinates, vectors, length, dot product | Give it an address | ⚪ Planned |
| 03 | `03-tables-that-transform` | How do you do the same math to everything at once? | Matrix × vector, matrix × matrix, shapes | Write the recipe once | ⚪ Planned |
| 04 | `04-sliding-downhill` | How does a computer get *less wrong* a little at a time? | Slope, derivatives, gradient descent | Make it smooth so you can slide downhill | ⚪ Planned |
| 05 | `05-the-fake-neuron` | Can one fake brain cell learn? What *can't* it learn? | Weighted sums, lines as boundaries, XOR | Know what it can't do | ⚪ Planned |
| 06 | `06-blame-flows-backward` | When a big machine is wrong, whose fault is it? | Chain rule, computation graphs | Pass the blame backward | ⚪ Planned |
| 07 | `07-the-babbling-network` | Can a network learn our counting table by itself? | Exponents, logs, softmax, cross-entropy | Let it learn its own features | ⚪ Planned |
| 08 | `08-words-as-places` | If words were places on a map, which would be neighbors? | High-dimensional vectors, cosine similarity, analogies | Know a word by the company it keeps | ⚪ Planned |
| 09 | `09-memory-problems` | Why do networks forget the start of a sentence? | Repeated multiplication, decay, sigmoid gates | Find exactly where it breaks | ⚪ Planned |
| 10 | `10-just-look-back` | What if every word could look back at every other word? | QKᵀ, scaling, row softmax, weighted averages, masking | Remove the bottleneck | ⚪ Planned |
| 11 | `11-nanogpt` | What happens when you make it bigger, and how do we know? | Logs, power laws, log-log plots, scientific notation | Make it bigger, then measure | ⚪ Planned |
| 12 | `12-parrot-to-assistant` | How do you turn an autocomplete into a helper? | Comparisons, sigmoid of a difference, log-odds | Ask people which they prefer | ⚪ Planned |
| 13 | `13-nanochat` | Can we see the whole pipeline, start to finish? | Estimation, units, budgets, evaluation statistics | Rebuild it small to understand it | ⚪ Planned |
| 14 | `14-what-we-know-now` | What's new, and what's still a mystery? | Rotations (sin/cos), top-k routing, averages over samples | Open the box | ⚪ Planned |

Status key: 🟡 in progress · ⚪ planned · 🟢 ready to teach · 🔵 classroom-tested.

---

## Lesson by lesson

<a id="01-the-guessing-machine"></a>

### 01 · `01-the-guessing-machine` · 🟡 In progress
- **Big question:** Can you guess the next letter, or the next word, just by counting what came before?
- **History:**
  - **Andrey Markov, 1913.** Markov was a Russian mathematician arguing with another mathematician, Pavel Nekrasov, about probability. Instead of arguing more, he counted by hand which letters followed which in the first 20,000 letters of Pushkin's *Eugene Onegin*.
  - **Claude Shannon, 1948.** *A Mathematical Theory of Communication* built fake English out of letter- and word-chains.
  - **Claude Shannon, 1951.** *Prediction and Entropy of Printed English* had people guess the next letter to measure how predictable English is.
- **Math practiced:** Tallying, fractions → probabilities, "rows add up to 1", conditional probability P(next | current), sampling from a distribution. *Adult extension:* expected value and a first look at surprise, −log p.
- **Thinking Move:** *Count instead of argue* (Markov). Block A also uses *Be the machine* (Shannon).
- **Build it:** A bigram counting table → a text generator. Block A is the unplugged Paper Bag Machine, Block B is the Jupyter lab, Block C is Bug Hunt 1.1–1.6.
- **Karpathy:** [makemore](https://github.com/karpathy/makemore). Video: *The spelled-out intro to language modeling: building makemore* (first half: counting bigrams). It's part of the *Neural Networks: Zero to Hero* series.
- **Branches:** `branch-information-theory`

<a id="02-numbers-that-mean-things"></a>

### 02 · `02-numbers-that-mean-things` · ⚪ Planned
- **Big question:** How can a list of numbers mean something, like "how sweet, how crunchy, how big"? How do you tell if two lists are alike?
- **History:**
  - **René Descartes, 1637.** *La Géométrie* tied algebra to points on a grid. The story about him watching a fly on the ceiling is a legend, which makes a good L2 "confident fib" discussion.
  - Vectors as arrows were developed in the 1800s by several people, including Hamilton, Grassmann, and later Gibbs and Heaviside. Keep this light.
- **Math practiced:** Coordinates, vectors as lists, adding and scaling vectors, length via Pythagoras, dot product, and the sign of a dot product as "agree / disagree". *Adult extension:* cosine similarity.
- **Thinking Move:** *Give it an address*: turn a thing into a point so you can measure it.
- **Build it:** A "snack space". Students rate snacks on 3 traits, then use dot products to find the most similar snack.
- **Karpathy:** No direct video. Optional outside resource: 3Blue1Brown's *Essence of Linear Algebra* (chapters 1–2, 9), searchable by name.
- **Branches:** `branch-classic-ml` (nearest neighbors)

<a id="03-tables-that-transform"></a>

### 03 · `03-tables-that-transform` · ⚪ Planned
- **Big question:** If a dot product answers one question, how do you ask many questions at once?
- **History:**
  - **James Joseph Sylvester, 1850.** Coined the word "matrix".
  - **Arthur Cayley, 1858.** *A Memoir on the Theory of Matrices* treated matrices as things you can add and multiply.
- **Math practiced:** Matrix × vector as a stack of dot products, matrix × matrix, shapes (rows × columns must line up), transpose, and matrices as stretch / rotate / squish. *Adult extension:* composition = multiplication, and why order matters.
- **Thinking Move:** *Write the recipe once, use it everywhere* (Cayley).
- **Build it:** A "shape-shifter" for drawings: apply 2×2 matrices to a doodle's points and watch it stretch and turn. Then make the Lesson 1 bigram table into a matrix: a one-hot row × table = that letter's row.
- **Karpathy:** No direct video. The *Let's build GPT* video's "mathematical trick in self-attention" section is a preview for adults.
- **Branches:** `branch-vision` (images are grids of numbers)

<a id="04-sliding-downhill"></a>

### 04 · `04-sliding-downhill` · ⚪ Planned
- **Big question:** How does a computer get less wrong a tiny bit at a time, when it can't see the whole answer?
- **History:**
  - **Augustin-Louis Cauchy, 1847.** Described the method of steepest descent to solve systems of equations, motivated by astronomy calculations.
- **Math practiced:** Slope of a line, rate of change, derivative by nudging (finite differences), the power rule, partial derivatives, the gradient, learning rate, and overshooting. *Adult extension:* derive d/dx of x², x³, and 1/x by limit, and compare to nudging.
- **Thinking Move:** *Make it smooth so you can slide downhill.*
- **Build it:** A blindfolded "hill walk" (unplugged), then a notebook that fits a line to points by gradient descent, with a learning-rate slider.
- **Karpathy:** [micrograd](https://github.com/karpathy/micrograd). Video: *The spelled-out intro to neural networks and backpropagation: building micrograd* (first part: derivatives by nudging).
- **Branches:** `branch-classic-ml` (linear regression), `branch-reinforcement-learning` (learning from reward rather than from a slope)

<a id="05-the-fake-neuron"></a>

### 05 · `05-the-fake-neuron` · ⚪ Planned
- **Big question:** Can one fake brain cell learn to sort things? Is there anything it can never learn?
- **History:**
  - **Warren McCulloch & Walter Pitts, 1943.** They called their units "neurons" and said that, because of the "all-or-none" character of nervous activity, they "can be treated by means of propositional logic" ([DOI](https://doi.org/10.1007/BF02478259)). Today: threshold logic units.
  - **Frank Rosenblatt, 1958.** The "perceptron", which his paper's title calls "a probabilistic model for information storage and organization in the brain" ([DOI](https://doi.org/10.1037/h0042519)). Today: a single-layer linear classifier. Newspaper coverage that year promised far more than it could do, which makes a good L2 "confident fib" story.
  - **Marvin Minsky & Seymour Papert, 1969.** The book *Perceptrons* proved what single-layer perceptrons cannot compute. XOR is the simplest example.
- **Math practiced:** Weighted sum + bias, step function, a line (or plane) as a decision boundary, linear separability, the perceptron update rule, and why XOR fails. *Adult extension:* graph w·x + b = 0 and show that no line separates XOR.
- **Thinking Move:** *Know what it can't do* (Minsky & Papert). Secondary move: *Build a toy version* (McCulloch & Pitts).
- **Build it:** A human perceptron (students hold weight cards), then a coded perceptron that learns AND and OR, then fails on XOR. Bug Hunt: Buddy "proves" a perceptron learned XOR.
- **Karpathy:** micrograd's `nn.py` (`Neuron`, `Layer`, `MLP`). Video: the neuron section of the micrograd video.
- **Branches:** `branch-symbolic-ai`, `branch-classic-ml`

<a id="06-blame-flows-backward"></a>

### 06 · `06-blame-flows-backward` · ⚪ Planned
- **Big question:** When a big chain of machines gets the wrong answer, how do you know which knob to turn?
- **History:**
  - **Seppo Linnainmaa, 1970.** Master's thesis describing reverse-mode automatic differentiation.
  - **Paul Werbos, 1974.** PhD thesis proposing it for neural networks.
  - **David Rumelhart, Geoffrey Hinton & Ronald Williams, 1986.** *Learning representations by back-propagating errors* (Nature) showed hidden units learning useful features.
- **Math practiced:** The chain rule, computation graphs, local derivatives of +, ×, and tanh, summing gradients at branch points, and reverse mode vs forward mode. *Adult extension:* backprop by hand through a 2-layer network.
- **Thinking Move:** *Pass the blame backward.*
- **Build it:** An unplugged "blame relay" (students pass gradient cards back down a line), then build micrograd's `Value` class and train a tiny MLP that solves the XOR problem from Lesson 05.
- **Karpathy:** [micrograd](https://github.com/karpathy/micrograd) and the micrograd video. Adults: *Building makemore Part 4: Becoming a Backprop Ninja*.
- **Branches:** `branch-vision` (LeNet used backprop on handwritten digits)

<a id="07-the-babbling-network"></a>

### 07 · `07-the-babbling-network` · ⚪ Planned
- **Big question:** Can a neural network learn Lesson 1's counting table on its own, by sliding downhill?
- **History:**
  - **Yoshua Bengio, Réjean Ducharme, Pascal Vincent & Christian Jauvin, 2003.** *A Neural Probabilistic Language Model* (JMLR) taught a network to predict the next word, using learned feature vectors for each word.
  - Cross-entropy comes from Shannon's information theory (Lesson 01).
- **Math practiced:** Exponentials and logarithms, softmax (turn scores into probabilities), one-hot vectors, negative log-likelihood, cross-entropy, and average loss. Baseline check: a model that guesses evenly over V choices has loss ln(V). *Adult extension:* the derivative of softmax + cross-entropy is (p − y).
- **Thinking Move:** *Let it learn its own features.*
- **Build it:** A neural bigram model that ends up matching the counting table, then an MLP over 3 previous characters (Bengio-style). Bug Hunt: Buddy's softmax doesn't sum to 1, and Buddy reports a loss lower than is possible.
- **Karpathy:** [makemore](https://github.com/karpathy/makemore). Videos: *building makemore* (second half: the neural-net version) and *Building makemore Part 2: MLP*.
- **Branches:** `branch-information-theory` (rejoins here), `branch-classic-ml` (logistic regression)

<a id="08-words-as-places"></a>

### 08 · `08-words-as-places` · ⚪ Planned
- **Big question:** If every word lived somewhere on a map, which words would be neighbors? Can you do math with meanings?
- **History:**
  - **J. R. Firth, 1957.** "You shall know a word by the company it keeps."
  - **Tomas Mikolov and colleagues at Google, 2013.** word2vec. The 2013 paper *Linguistic Regularities in Continuous Space Word Representations* (Mikolov, Yih & Zweig) showed king − man + woman ≈ queen.
- **Math practiced:** High-dimensional vectors, cosine similarity again, vector arithmetic, nearest neighbors, and the embedding lookup as one-hot × matrix (Lesson 03 pays off). *Adult extension:* projecting to 2-D (PCA intuition).
- **Thinking Move:** *Know a word by the company it keeps.*
- **Build it:** A human word map (stand closer to words you're like), then train small embeddings and plot them in 2-D. Bug Hunt: Buddy's analogies, some of which are cherry-picked. Bias in embeddings is discussed as a fairness conversation, not a hands-on activity (see the sensitivity policy in [`EXPERIMENTS.md`](EXPERIMENTS.md#sensitivity-policy)).
- **Karpathy:** The embedding table `C` in *Building makemore Part 2: MLP*.
- **Branches:** `branch-generative-images` (latent spaces), `branch-memory-networks` (retrieval by similarity)

<a id="09-memory-problems"></a>

### 09 · `09-memory-problems` · ⚪ Planned
- **Big question:** Why does a network forget how a sentence started, and how do you give it a better memory?
- **History:**
  - **Jeffrey Elman, 1990.** Simple recurrent networks (*Finding Structure in Time*).
  - **Sepp Hochreiter, 1991.** His diploma thesis diagnosed vanishing gradients.
  - **Yoshua Bengio, Patrice Simard & Paolo Frasconi, 1994.** Studied the same problem.
  - **Sepp Hochreiter & Jürgen Schmidhuber, 1997.** LSTM.
  - **Ilya Sutskever, Oriol Vinyals & Quoc Le, 2014.** Sequence-to-sequence translation.
  - **Kyunghyun Cho and colleagues, 2014.** Encoder–decoder with the GRU.
- **Math practiced:** Repeated multiplication (0.9⁵⁰ vs 1.1⁵⁰), exponential decay and growth, recurrence relations, sigmoid and tanh, and gates as "multiply by a number between 0 and 1". *Adult extension:* why products of many small derivatives vanish (Lesson 06 chain rule).
- **Thinking Move:** *Find exactly where it breaks* (Hochreiter).
- **Build it:** An unplugged telephone game with a "whisper multiplier", then a tiny RNN in a notebook, measuring how the gradient shrinks with distance. Bug Hunt: Buddy blames the wrong cause.
- **Karpathy:** makemore's RNN, LSTM, and GRU model options. *Building makemore Part 3: Activations & Gradients, BatchNorm* covers vanishing/exploding intuitions.
- **Branches:** `branch-memory-networks`, `branch-state-space`

<a id="10-just-look-back"></a>

### 10 · `10-just-look-back` · ⚪ Planned
- **Big question:** What if, instead of squeezing a whole sentence into one memory, every word could look back at all the words before it?
- **History:**
  - **Dzmitry Bahdanau, Kyunghyun Cho & Yoshua Bengio, 2014.** *Neural Machine Translation by Jointly Learning to Align and Translate*. Their words were "align" and "(soft-)search"; "attention" appears only twice in the paper ([arXiv](https://arxiv.org/abs/1409.0473)). Today we call it attention. Bahdanau later wrote that the idea was partly inspired by translation exercises from learning English in middle school: your eyes move back and forth between the original and your translation.
  - **Ashish Vaswani and seven co-authors, 2017.** *Attention Is All You Need* (the Transformer) dropped recurrence entirely.
- **Math practiced:** Queries, keys, values; QKᵀ as many dot products; scaling by √d; softmax across each row; weighted averages; causal masking with −∞; multi-head as parallel copies; sin/cos positional encodings. *Adult extension:* the variance argument for √d.
- **Thinking Move:** *Remove the bottleneck* (Bahdanau). Secondary move: *Throw out what you don't need* (Vaswani et al.).
- **Build it:** Unplugged "attention party": each student has a question card and a name tag, and listens most to whoever matches. Then a single self-attention head in a notebook, then a tiny character-level transformer.
- **Karpathy:** *Let's build GPT: from scratch, in code, spelled out.* Code: [ng-video-lecture](https://github.com/karpathy/ng-video-lecture), [nanoGPT](https://github.com/karpathy/nanoGPT) (`shakespeare_char`).
- **Branches:** `branch-vision` (Vision Transformer), `branch-state-space`

<a id="11-nanogpt"></a>

### 11 · `11-nanogpt` · ⚪ Planned
- **Big question:** What changes when you make the model bigger and feed it more text, and how do scientists know whether it's worth it?
- **History:**
  - **Philip Gage, 1994.** Byte pair encoding as a compression trick.
  - **Rico Sennrich, Barry Haddow & Alexandra Birch, 2015.** Used BPE for words in translation.
  - **Alec Radford et al. at OpenAI.** GPT-1 (2018) and GPT-2 (2019). GPT-2 was released in stages over misuse concerns.
  - **Tom Brown et al., 2020.** GPT-3.
  - **Jared Kaplan et al., 2020.** *Scaling Laws for Neural Language Models.*
  - **Jordan Hoffmann et al. at DeepMind, 2022.** "Chinchilla". A 70B model trained on more data beat a 280B model. Rule of thumb: about 20 tokens per parameter.
- **Math practiced:** Logarithms, power laws (L ∝ N^−α), log-log plots where a curve becomes a line, scientific notation, compute ≈ 6 × parameters × tokens, and fitting a line to logged data (Lesson 04 again). *Adult extension:* fit your own mini scaling curve from 4 tiny runs.
- **Thinking Move:** *Make it bigger, then measure.* Bonus move: *Squeeze out the repeats* (BPE).
- **Build it:** Unplugged BPE: merge the most common pair on paper, repeatedly. Then train `shakespeare_char` at 3 small sizes on student laptops (nanoGPT's small "MacBook" config and smaller: a few minutes each on an 8 GB MacBook Neo) and plot loss vs size. The full `shakespeare_char` config runs on the Mac mini or overnight (see [`infrastructure/training-on-apple-silicon.md`](infrastructure/training-on-apple-silicon.md)).
- **Karpathy:** [nanoGPT](https://github.com/karpathy/nanoGPT), [minbpe](https://github.com/karpathy/minbpe), [build-nanogpt](https://github.com/karpathy/build-nanogpt). Videos: *Let's build the GPT Tokenizer*, *Let's reproduce GPT-2 (124M)*, and the talk *Intro to Large Language Models*. Note: nanoGPT's README now calls nanoGPT deprecated in favor of nanochat. It's still the clearest small codebase for this lesson.
- **Branches:** `branch-information-theory` (compression = prediction)

<a id="12-parrot-to-assistant"></a>

### 12 · `12-parrot-to-assistant` · ⚪ Planned
- **Big question:** A model that only continues text is like a parrot. How do you turn it into a helpful, honest assistant?
- **History:**
  - **Paul Christiano, Jan Leike, Tom Brown, Miljan Martic, Shane Legg & Dario Amodei, 2017.** *Deep reinforcement learning from human preferences* (OpenAI + DeepMind). A simulated robot learned a backflip from about 900 bits of human feedback, where humans picked which of two clips was better. The project also caught a robot arm "cheating": it hovered between the camera and the object so it *looked* like it was grabbing the object. That's a real-life Bug Hunt.
  - **Long Ouyang et al., 2022.** InstructGPT. People preferred the 1.3B instruction-tuned model's answers over the 175B GPT-3's.
  - **Rafael Rafailov et al., 2023.** DPO (Direct Preference Optimization) skips the separate reward model.
- **Math practiced:** Pairwise comparisons, the sigmoid of a score difference (Bradley–Terry style), log-odds, expected value, and an intuitive picture of KL divergence ("don't drift too far from where you started"). *Adult extension:* derive the DPO loss's shape from "make the preferred answer more likely than the rejected one".
- **Thinking Move:** *Ask people which they prefer.*
- **Build it:** Unplugged "which answer is better?" voting with a class-made rubric. Then supervised fine-tuning of a tiny model on a few hundred class-written Q&A pairs. Bug Hunt: reward hacking. Buddy writes answers that score well on a lazy rubric but are wrong.
- **Karpathy:** Video: *Deep Dive into LLMs like ChatGPT* (the SFT and RLHF sections). The SFT and RL scripts in [nanochat](https://github.com/karpathy/nanochat).
- **Branches:** `branch-reinforcement-learning` (rejoins here)

<a id="13-nanochat"></a>

### 13 · `13-nanochat` · ⚪ Planned
- **Big question:** Can we see the whole recipe for a chat model, from raw text to a conversation, in one small project?
- **History:**
  - **Andrej Karpathy, October 2025.** Released nanochat, a minimal end-to-end pipeline: tokenizer, pretraining, fine-tuning, evaluation, and a chat UI.
  - **Richard Feynman.** His Caltech blackboard at his death in 1988 read "What I cannot create, I do not understand."
- **Math practiced:** Estimation and units (FLOPs, GPU-hours, dollars), Fermi problems, percentages and accuracy on evaluations, sample size and error bars. *Adult extension:* reproduce the README's cost math. In 2026, nanochat's README estimates GPT-2-level capability at about 2 hours on an 8×H100 node for about $48.
- **Thinking Move:** *Rebuild it small to understand it.*
- **Build it:** Read the pipeline as a class map. Run nanochat's `runs/runcpu.sh` (the shrunk CPU/MPS example) on the Mac mini overnight. It isn't recommended on the 8 GB student laptops. Talk to the result and Bug Hunt it. Results will be weak by design, and that's fine.
- **Karpathy:** [nanochat](https://github.com/karpathy/nanochat). The repo changes often, so re-read its README before teaching.
- **Branches:** all of them. This is a good point to review the branch map.

<a id="14-what-we-know-now"></a>

### 14 · `14-what-we-know-now` · ⚪ Planned
- **Big question:** What has changed since the original Transformer, and what don't scientists understand yet?
- **History:**
  - **Jianlin Su et al., 2021.** RoPE (rotary position embeddings).
  - **Mixture of Experts.** Robert Jacobs, Michael Jordan, Steven Nowlan & Geoffrey Hinton, 1991 (*Adaptive Mixtures of Local Experts*). Noam Shazeer et al., 2017 (sparsely-gated MoE).
  - **Reasoning via RL.** Jason Wei et al., 2022 (chain-of-thought prompting). OpenAI's o1, September 2024. DeepSeek-R1, January 2025 (reinforcement learning on problems with checkable answers).
  - **Interpretability.** Chris Olah et al., 2020 (*Zoom In*, on circuits). Anthropic, 2024 (*Scaling Monosemanticity*, the "Golden Gate Claude" demo).
- **Math practiced:** Rotations with sin and cos (RoPE), top-k selection and routing, averages over many sampled answers (reward estimates), and linear probes (Lesson 05's line, now used as a microscope).
- **Thinking Move:** *Open the box.*
- **Build it:** Probe a small trained model: find a neuron or direction that tracks something (for example "inside quotes"). Bug Hunt: Buddy's claims about "what this neuron means". Some are L5, actually right.
- **Karpathy:** Video: *Deep Dive into LLMs like ChatGPT* (reasoning and RL sections). nanochat's RL stage.
- **Branches:** `branch-reinforcement-learning`, `branch-state-space`, `branch-symbolic-ai` (neuro-symbolic debates)

---

## Branches: where the side paths split off

Branches are optional. A branch is good for:
- a student who gets curious
- a family project
- a summer session that wants a change of pace

Each branch notes the main-path lesson you need first.

| Branch | Splits off after | Rejoins at | Why it matters |
|---|---|---|---|
| <a id="branch-information-theory"></a>`branch-information-theory` | 01 (Shannon) | 07, 11 | Bits, entropy, and compression. Cross-entropy (07) and "a good predictor is a good compressor" (11) come straight from here. Shannon's 1948 paper is the root. |
| <a id="branch-classic-ml"></a>`branch-classic-ml` | 02 / 04 | 07 | Nearest neighbors, linear regression, decision trees, and support-vector machines (Cortes & Vapnik, 1995). Not every problem needs a neural net: use the smallest tool that works. |
| <a id="branch-symbolic-ai"></a>`branch-symbolic-ai` | 05 | 14 | The other road: the Dartmouth workshop (1956), ELIZA (Joseph Weizenbaum, 1966), and expert systems in the 1970s–80s. Hand-written rules vs learned weights, and why the field went through "AI winters". |
| <a id="branch-vision"></a>`branch-vision` | 03 / 06 | 10 | Images are grids of numbers. Yann LeCun's convolutional networks (1989), ImageNet (Fei-Fei Li and colleagues, 2009), and AlexNet (Krizhevsky, Sutskever & Hinton, 2012) restarted deep learning, before the Vision Transformer (2020). |
| <a id="branch-reinforcement-learning"></a>`branch-reinforcement-learning` | 04 | 12, 14 | Learning from rewards instead of answers. Arthur Samuel's checkers program (1959; his abstract describes "Two machine-learning procedures"), TD-Gammon (Gerald Tesauro, 1992), Atari-playing DQN (DeepMind, 2013/2015), and AlphaGo (2016). It powers RLHF (12) and reasoning models (14). |
| <a id="branch-memory-networks"></a>`branch-memory-networks` | 08 / 09 | 10 | Other ways to remember: Hopfield networks (John Hopfield, 1982), Neural Turing Machines and Memory Networks (2014), and retrieval-augmented generation (Lewis et al., 2020). This is how assistants "look things up". |
| <a id="branch-generative-images"></a>`branch-generative-images` | 08 | — | Variational autoencoders (Kingma & Welling, 2013), GANs (Goodfellow et al., 2014), and diffusion models (Sohl-Dickstein et al., 2015; Ho et al., 2020). Covers consent and deepfakes as a conversation about honesty. |
| <a id="branch-state-space"></a>`branch-state-space` | 09 | 14 | RNN-like models that train fast: S4 (Albert Gu et al., 2021) and Mamba (Gu & Dao, 2023). Is attention the only way? Shows that a research question is still open. |

```
01 ─ 02 ─ 03 ─ 04 ─ 05 ─ 06 ─ 07 ─ 08 ─ 09 ─ 10 ─ 11 ─ 12 ─ 13 ─ 14
 │    │    │    │    │    │    ▲    │    │    ▲    ▲    ▲         ▲
 └ information-theory ───────┘    │    │    │    │    │         │
      └ classic-ml (02/04) ──────┘    │    │    │    │         │
                     └ symbolic-ai (05) ─────────────────────────┘
           └ vision (03/06) ──────────────────┘    │
                └ reinforcement-learning (04) ─────────┘ (12, 14)
                                    └ memory-networks (08/09) → 10
                                    └ generative-images (08)
                                         └ state-space (09) → 14
```

---

## Cross-cutting threads

These run through every lesson instead of living in one.

**The big theme: the history of AI is a history of giving machines more context.** Lesson 01's Guessing Machine sees one word of context. Recurrent networks (09) try to carry a memory and forget. Attention (10) lets every word look at every other word. And shortcuts happen when a model uses the *wrong* context.

| Thread | The question it asks every lesson | Where it lives |
|---|---|---|
| **Rules vs Learning** | Did a person write the rule, or did the machine learn it from examples? | [`EXPERIMENTS.md`](EXPERIMENTS.md#rules-vs-learning-a-thread-through-the-whole-course) |
| **What did it really learn?** (shortcut learning) | It got the right answer. Was it for the right reason? | [`threads/shortcut-learning.md`](threads/shortcut-learning.md) |
| **Recreate the Experiment** | What did the original researchers actually do, in their words? | [`EXPERIMENTS.md`](EXPERIMENTS.md) |

### What did it really learn?

Stories laddered from kid-sized to grown-up. Full versions, quotes and sources are in [`threads/shortcut-learning.md`](threads/shortcut-learning.md).

| # | Story | Audience | Source |
|---|---|---|---|
| 1 | **Clever Hans**: a horse "did math" by reading tiny, unintended movements of the person asking | Kids | Pfungst 1907; English translation 1911 ([Gutenberg](https://www.gutenberg.org/ebooks/33936)) |
| 2 | A mid-1960s face-sorting machine reportedly called **George Harrison** a woman because of his hair (discussion only) | Kids | [*Smithsonian*](https://www.smithsonianmag.com/innovation/early-days-machine-learning-massive-computers-said-george-harrison-was-woman-ai-come-long-way-180988805/) ⚠️ film not identified |
| 3 | **Husky vs wolf**: a classifier built on purpose to rely on snow | Kids + adults | Ribeiro, Singh & Guestrin 2016, "Why Should I Trust You?" ([arXiv](https://arxiv.org/abs/1602.04938)) |
| 4 | **Chest X-rays**: models could tell which hospital an image came from | Adults | Zech et al. 2018, *PLOS Medicine* ([DOI](https://doi.org/10.1371/journal.pmed.1002683)) |
| 5 | **"Clever Hans predictors"**: a horse class that leaned on a source tag | Adults | Lapuschkin et al. 2019, *Nature Communications* ([DOI](https://doi.org/10.1038/s41467-019-08987-4)) |
| 6 | **Naming it**: "decision rules that perform well on standard benchmarks but fail to transfer" | Adults | Geirhos et al. 2020, *Nature Machine Intelligence* ([DOI](https://doi.org/10.1038/s42256-020-00257-z)) |

**Practice: "Pause before you prompt."** <!-- TODO: use the school's own term for reflection --> One silent minute to write your own prediction before asking Buddy. At the end of a lesson: *What did the machine notice? What did it miss? What context did it ignore? What did I assume?* Optional; details in the thread file.

---

## The Math Ladder (self-study path)

This is for adults, including the owner, who want real math practice that ends at the math inside a GPT. Each rung lists:
- what to be able to do
- a 10-minute self-check
- the lesson that uses it

Do the self-check *without* the computer first, then check your work in Python. Free practice: Khan Academy (Pre-algebra through AP Calculus AB and Statistics & Probability) and 3Blue1Brown (*Essence of Linear Algebra*, *Essence of Calculus*, *Neural Networks*). Search for these by name.

| Rung | Topic | You can… | Self-check | Lesson |
|---|---|---|---|---|
| 1 | Fractions, ratios, percents | Turn counts into fractions and percents, and compare them | 12 of 40 letters are vowels. What fraction? What percent? | 01 |
| 2 | Basic probability | Make a probability table whose rows sum to 1 | Build P(next \| "t") from a short sentence | 01 |
| 3 | Conditional probability & sampling | Use P(B \| A), and sample with a die or random number | Generate 10 letters by hand from your table | 01 |
| 4 | Coordinates & vectors | Add, scale, and measure the length of vectors (Pythagoras) | \|(3, 4)\| = ? | 02 |
| 5 | Dot product & cosine | Compute a·b and cos θ, and interpret the sign | Are (1, 2) and (2, −1) perpendicular? | 02, 08 |
| 6 | Matrices | Multiply matrix × vector and matrix × matrix, and check shapes | (2×3)·(3×4) = what shape? | 03 |
| 7 | Slope & rate of change | Find the slope of a line and the average rate of change of a curve | Slope of y = 3x + 1 between x = 2 and x = 5 | 04 |
| 8 | Derivatives | Differentiate polynomials (power rule) and check by nudging | d/dx (x³ − 2x) at x = 1, two ways | 04 |
| 9 | Gradients & gradient descent | Take partial derivatives and run 5 steps of descent by hand | Minimize (w − 3)² from w = 0 with lr = 0.1 | 04 |
| 10 | Lines as classifiers | Graph w·x + b = 0 and test which side a point is on | Show that no line separates XOR | 05 |
| 11 | Chain rule | Differentiate compositions, and backprop through a graph by hand | d/dx of (2x + 1)², via the chain rule | 06 |
| 12 | Exponents & logs | Use the log rules, ln vs log₁₀, and eˣ | ln(e³) = ? Why is −ln(1) = 0? | 07 |
| 13 | Softmax & cross-entropy | Compute softmax of 3 scores, and the loss for the right answer | softmax(2, 1, 0) and −ln(p_correct) | 07 |
| 14 | High-dimensional geometry | Use cosine similarity in many dimensions, and vector analogies | Find a − b + c and its nearest neighbor | 08 |
| 15 | Repeated multiplication | Work with exponential growth and decay, and sigmoid/tanh ranges | 0.9¹⁰, 0.9⁵⁰, 1.1⁵⁰ | 09 |
| 16 | Attention math | Compute QKᵀ/√d, row softmax, and the weighted sum of V, with a mask | A 3-token attention by hand with d = 2 | 10 |
| 17 | Power laws & log-log | Fit y = a·x^b on log-log axes, and use scientific notation | 6 × 10⁸ params × 10¹⁰ tokens × 6 = ? FLOPs | 11 |
| 18 | Comparisons & log-odds | Apply sigmoid to a score difference, and convert odds ↔ probability | Scores 2 vs 0: P(first preferred)? | 12 |
| 19 | Estimation | Fermi-estimate compute, time, and cost, with units | GPU-hours for 4 × 10¹⁹ FLOPs at 10¹⁵ FLOP/s | 13 |
| 20 | Rotations | Rotate a 2-D vector by θ using sin/cos | Rotate (1, 0) by 90°, then by 30° | 14 |

**Suggested adult pace:** one rung every 3–5 days, with 2–3 rungs running ahead of the lesson you're on. Rungs 7–11 (calculus) are where most adults need the most time. That's normal, and worth it.

---

## Sources

Most of the paper citations for the lesson histories are in the **Sources** section of [`THINKING-MOVES.md`](THINKING-MOVES.md). These are the extra ones used only here:

- Sylvester, J. J. (1850): coined "matrix" in *Philosophical Magazine*.
- Elman, J. (1990). *Finding Structure in Time.* Cognitive Science.
- Sutskever, I., Vinyals, O. & Le, Q. (2014). *Sequence to Sequence Learning with Neural Networks.* Cho, K. et al. (2014), *Learning Phrase Representations using RNN Encoder–Decoder for Statistical Machine Translation.*
- Radford, A. et al. (2018). *Improving Language Understanding by Generative Pre-Training* (GPT-1). Radford, A. et al. (2019), *Language Models are Unsupervised Multitask Learners* (GPT-2). Brown, T. et al. (2020), *Language Models are Few-Shot Learners* (GPT-3).
- Rafailov, R. et al. (2023). *Direct Preference Optimization: Your Language Model is Secretly a Reward Model.*
- Su, J. et al. (2021). *RoFormer: Enhanced Transformer with Rotary Position Embedding.* Jacobs, R., Jordan, M., Nowlan, S. & Hinton, G. (1991), *Adaptive Mixtures of Local Experts.* Shazeer, N. et al. (2017), *Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer.*
- Wei, J. et al. (2022). *Chain-of-Thought Prompting Elicits Reasoning in Large Language Models.* OpenAI (2024), *Learning to Reason with LLMs* (o1). DeepSeek-AI (2025), *DeepSeek-R1.*
- nanoGPT and nanochat facts (deprecation note, MacBook commands, cost estimates) come from those repositories' READMEs, as read in November 2026. Re-check them before teaching; the nanochat numbers change often.
- Branch-table dates (Dartmouth 1956, ELIZA 1966, LeCun 1989, ImageNet 2009, AlexNet 2012, Samuel 1959, TD-Gammon 1992, DQN 2013/2015, AlphaGo 2016, Hopfield 1982, NTM / Memory Networks 2014, RAG 2020, VAE 2013, GAN 2014, diffusion 2015/2020, S4 2021, Mamba 2023, Cortes & Vapnik 1995) are standard dates from the original papers. Each branch file should cite its own sources when it's written.
