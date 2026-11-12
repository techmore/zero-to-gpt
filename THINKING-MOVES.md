# Thinking Moves

A **Thinking Move** is a habit of mind someone used to make a breakthrough. We learn them because they work far outside AI: in science class, in arguments with siblings, in fixing a bike, in writing an essay.

Each lesson introduces one move. Students collect them like cards. A printable card is one move per index card: the name on the front, the kid version and a doodle on the back.

Each entry has:
- **Who & the story:** who used the move, and when.
- **The move:** one line.
- **Kid version:** how to say it to a sixth grader.
- **Practice it yourself:** exercises that have nothing to do with AI.
- **Where it shows up:** the lesson(s).

> Dates and names are checked against original sources. Where a popular story is a legend, we say so. Spotting legends is itself a Bug Hunt skill.

---

## Index

| # | Move | Who | Lesson |
|---|---|---|---|
| 1 | Count instead of argue | Andrey Markov, 1913 | 01 |
| 2 | Be the machine | Claude Shannon, 1951 | 01 |
| 3 | Give it an address | René Descartes, 1637 | 02 |
| 4 | Write the recipe once, use it everywhere | Arthur Cayley, 1858 | 03 |
| 5 | Make it smooth so you can slide downhill | Augustin-Louis Cauchy, 1847 | 04 |
| 6 | Build a toy version | Warren McCulloch & Walter Pitts, 1943 | 05 |
| 7 | Know what it can't do | Marvin Minsky & Seymour Papert, 1969 | 05 |
| 8 | Pass the blame backward | Linnainmaa 1970 · Werbos 1974 · Rumelhart, Hinton & Williams 1986 | 06 |
| 9 | Let it learn its own features | Rumelhart, Hinton & Williams 1986 · Bengio et al. 2003 | 07 |
| 10 | Know a word by the company it keeps | J. R. Firth 1957 · Mikolov et al. 2013 | 08 |
| 11 | Find exactly where it breaks | Sepp Hochreiter, 1991 | 09 |
| 12 | Remove the bottleneck | Dzmitry Bahdanau, Kyunghyun Cho & Yoshua Bengio, 2014 | 10 |
| 13 | Throw out what you don't need | Vaswani et al., 2017 | 10 |
| 14 | Squeeze out the repeats | Philip Gage 1994 · Sennrich, Haddow & Birch 2015 | 11 |
| 15 | Make it bigger, then measure | Kaplan et al. 2020 · Hoffmann et al. 2022 | 11 |
| 16 | Ask people which they prefer | Christiano et al. 2017 · Ouyang et al. 2022 | 12 |
| 17 | Rebuild it small to understand it | Richard Feynman · Andrej Karpathy | 13 |
| 18 | Open the box | Chris Olah and colleagues; Anthropic | 14 |
| ★ | Test the test | Bug Hunters (this course) | every lesson |

---

## 1. Count instead of argue
- **Who & the story:** In **1913**, the Russian mathematician **Andrey Markov** was in a long-running disagreement with another mathematician, Pavel Nekrasov, about whether the laws of chance only work when events are independent. Markov didn't just argue harder. He took the first **20,000 letters** of Pushkin's poem *Eugene Onegin* and counted, by hand, how often a vowel followed a vowel and how often a consonant followed a vowel. The counts showed that letters depend on each other in a regular, predictable way. That idea, now called a *Markov chain*, is the great-great-grandparent of every language model.
- **The move:** When people disagree about what's true, go collect the data and count.
- **Kid version:** "Don't fight about it. Count it!"
- **Practice it yourself:**
  - Your family argues about whose turn it is to do dishes. Keep a tally for two weeks. Was anyone right?
  - "Everyone at school wears sneakers." Count at lunch. What fraction actually do?
  - Pick a book. Guess the most common first letter of a sentence, then count 50 sentences.
  - *Adults:* Pick a belief you hold about your own habits (sleep, screen time, spending). Log it for a week before you decide.
- **Where it shows up:** Lesson 01 (bigram counting). Again in 11, where scaling laws are counting at enormous scale.

## 2. Be the machine
- **Who & the story:** In **1951**, **Claude Shannon** wanted to know how predictable English is. Instead of building a machine, he had *people* act as the predictor. He showed them part of a text and asked them to guess the next letter, keeping track of how many guesses they needed. People were very good at it, which showed English carries a lot of repetition (*redundancy*). His paper was *Prediction and Entropy of Printed English*.
- **The move:** To understand a process, do it yourself, step by step, following only the rules the machine follows.
- **Kid version:** "Pretend you're the computer. You only get to do what it does."
- **Practice it yourself:**
  - Follow a recipe *exactly* as written, with no guessing. Where does it break down?
  - Write directions for making a peanut-butter sandwich. A partner follows them literally.
  - Play "guess the next word" with a friend reading a book aloud. How many guesses does each word take?
  - *Adults:* Trace a piece of code by hand on paper, tracking each variable, before you run it.
- **Where it shows up:** Lesson 01 Block A (Paper Bag Machine). Every unplugged activity after that.

## 3. Give it an address
- **Who & the story:** In **1637**, **René Descartes** published *La Géométrie*, which showed that shapes could be described with numbers and equations. A point becomes a pair of numbers, and a curve becomes an equation. *Legend* says he got the idea watching a fly crawl on his ceiling. Nobody has evidence for that story, so treat it as a "confident fib" to discuss, not a fact.
- **The move:** Describe a thing as a list of numbers so you can measure, compare, and compute with it.
- **Kid version:** "Give it coordinates. Then you can measure how far apart things are."
- **Practice it yourself:**
  - Rate five foods on *sweet* (0–10) and *crunchy* (0–10). Plot them. Which two are closest?
  - Describe your friends' music taste with 3 numbers. Who's most alike?
  - Give every room in your home an (x, y) location and measure "walking distance".
  - *Adults:* Score job offers or apartments on 4 traits and compute which two options are most similar.
- **Where it shows up:** Lessons 02 and 08.

## 4. Write the recipe once, use it everywhere
- **Who & the story:** In **1858**, **Arthur Cayley** wrote *A Memoir on the Theory of Matrices*. He treated a table of numbers as a single object you can add and multiply. His friend **James Joseph Sylvester** had coined the word "matrix" in 1850. Instead of writing out the same calculation over and over, you write the table once, and it transforms anything you feed it.
- **The move:** When you're doing the same steps again and again, package them into one reusable tool.
- **Kid version:** "Make a stamp instead of drawing it 100 times."
- **Practice it yourself:**
  - Make a checklist for packing your backpack and use it all week.
  - Make a "conversion card" (cups ↔ tablespoons, or minutes ↔ hours) and use it in three recipes.
  - In art: make a stencil and see how many different pictures it can help with.
  - *Adults:* Find a task you do weekly and turn it into a template, script, or spreadsheet formula.
- **Where it shows up:** Lesson 03. Every layer in every network after that.

## 5. Make it smooth so you can slide downhill
- **Who & the story:** In **1847**, **Augustin-Louis Cauchy** described a general method for solving hard systems of equations, motivated by calculations in astronomy. Measure which direction makes your error go down fastest, take a step that way, and repeat. Today we call it *gradient descent*. It only works if small changes make small differences; the surface has to be *smooth*. Much of AI is a set of clever ways to make problems smooth enough to slide down.
- **The move:** Turn "right or wrong" into "how wrong", so you can improve a little at a time.
- **Kid version:** "Don't just say wrong. Say *how* wrong, and take a small step to be less wrong."
- **Practice it yourself:**
  - Free throws: instead of "made / missed", note "short / long / left / right" and adjust a bit each time.
  - Baking: change *one* thing a little each batch (sugar, time) and score each batch 1–10.
  - Hotter/colder: find a hidden object with only "warmer" or "colder" clues.
  - *Adults:* Replace a pass/fail goal ("go to the gym") with a measurable one (minutes per week) and nudge it weekly.
- **Where it shows up:** Lesson 04. All training after that.

## 6. Build a toy version
- **Who & the story:** In **1943**, the neuroscientist **Warren McCulloch** and the young logician **Walter Pitts** published *A Logical Calculus of the Ideas Immanent in Nervous Activity*. Real neurons are messy and complicated. They pretended a neuron is just a switch that turns ON if enough of its inputs are ON. The toy was wrong about biology in many ways, but simple enough to *reason about*, and it showed networks of switches can compute logic.
- **The move:** Strip a complicated thing down to the simplest version that still does something interesting.
- **Kid version:** "Make a LEGO model of it first."
- **Practice it yourself:**
  - Model a traffic intersection with toy cars and 3 rules. Where does it jam?
  - Explain a sport using only 3 rules. What does your toy version leave out?
  - Make a paper model of a bridge before arguing about which design is strongest.
  - *Adults:* Before a big decision, build a 5-row spreadsheet model with your rough guesses.
- **Where it shows up:** Lesson 05.

## 7. Know what it can't do
- **Who & the story:** In **1958**, **Frank Rosenblatt's** perceptron got huge press. *The New York Times* (July 8, 1958) reported that the Navy expected the machine to "be able to walk, talk, see, write, reproduce itself and be conscious of its existence." In **1969**, **Marvin Minsky** and **Seymour Papert** published the book *Perceptrons*, which *proved mathematically* that a single-layer perceptron cannot learn certain simple patterns. The easiest example is XOR ("one or the other but not both"). The book is often blamed for cooling interest in neural networks for years. Historians still debate how much. Either way, knowing the exact limit is what later told people what to fix: add more layers.
- **The move:** Find and prove the limits of a tool, not just its successes.
- **Kid version:** "Ask: what's one thing this *can't* do?"
- **Practice it yourself:**
  - Find a question a calculator can't answer. Find one a dictionary can't answer.
  - Your bike's brakes: when do they *not* work well (wet, downhill)?
  - Pick a rule at school. Find one situation where following it exactly would be unfair.
  - *Adults:* For a tool you rely on (a budget app, a spell checker), write down three things it gets wrong.
- **Where it shows up:** Lesson 05. Also in Bug Hunts: every L1–L3 mistake is a "can't do" in disguise.

## 8. Pass the blame backward
- **Who & the story:**
  - **1970.** The Finnish student **Seppo Linnainmaa** described, in his master's thesis, an efficient way to compute how each step of a long calculation affects the final result: *reverse-mode automatic differentiation*.
  - **1974.** **Paul Werbos** proposed using it to train neural networks in his PhD thesis.
  - **1986.** **David Rumelhart, Geoffrey Hinton and Ronald Williams** showed in *Nature* that it lets hidden layers learn. That paper made "backpropagation" famous.
  The same idea was found more than once, which is common in science.
- **The move:** When a long chain produces a wrong result, start at the end and work backward, assigning each step its share of the blame.
- **Kid version:** "Start at the mess and walk backward: who touched it last, and how much did each person change it?"
- **Practice it yourself:**
  - A cake came out flat. Work backward: oven → batter → mixing → ingredients. Which step mattered most?
  - A group project slipped. Trace backward without blaming *people*, only *steps*.
  - A math answer is wrong. Check from the last line up instead of starting over.
  - *Adults:* Do a "blameless postmortem" on something that went wrong at work or home.
- **Where it shows up:** Lesson 06. Every training run after that.

## 9. Let it learn its own features
- **Who & the story:** For decades, people hand-designed the *features* a program would look at, such as "does the word end in -ing?". In **1986**, **Rumelhart, Hinton and Williams** showed hidden units in a network could invent useful features on their own. In **2003**, **Yoshua Bengio** and colleagues built a language model that learned its own number-description for every word instead of being told what words mean.
- **The move:** Instead of deciding in advance what matters, set up a way to learn what matters from examples.
- **Kid version:** "Don't tell it what to notice. Let it figure out what's worth noticing."
- **Practice it yourself:**
  - Sort 30 leaves (or buttons, or LEGO bricks) into groups *without* deciding the rules first. What rules did you end up using?
  - Watch a game you don't know and figure out the rules just from watching.
  - Ask a friend to sort your photos. Compare their groups to yours.
  - *Adults:* Before categorizing your expenses, look at a month of raw data and let the categories emerge.
- **Where it shows up:** Lessons 07 and 08.

## 10. Know a word by the company it keeps
- **Who & the story:** In **1957**, the British linguist **J. R. Firth** wrote: "You shall know a word by the company it keeps." In **2013**, **Tomas Mikolov** and colleagues at Google built *word2vec*, which turned that sentence into an algorithm. Words that appear in similar contexts get nearby vectors. A follow-up paper showed you could do arithmetic on meanings: *king − man + woman* lands near *queen*. Later researchers (Tolga Bolukbasi and colleagues, 2016) showed the same arithmetic also picks up stereotypes from the training text, which connects to Equality.
- **The move:** Learn what something is by looking at what it's usually found with.
- **Kid version:** "Don't know a word? Look at the words around it."
- **Practice it yourself:**
  - Read a sentence with a made-up word ("The glorp barked at the mail carrier"). What's a glorp?
  - In a new school or club, figure out the unwritten rules from how people act around them.
  - Look at the ingredients a mystery spice appears with in 5 recipes. Guess what it tastes like.
  - *Adults:* Learn new jargon by collecting 5 sentences that use it before looking it up.
- **Where it shows up:** Lesson 08.

## 11. Find exactly where it breaks
- **Who & the story:** In **1991**, **Sepp Hochreiter**, a student in Munich, studied *why* recurrent networks couldn't learn long-range patterns. His diploma thesis showed that the learning signal shrinks (or explodes) as it's multiplied backward through many time steps: the *vanishing gradient problem*. **Bengio, Simard and Frasconi** analyzed it in 1994. Knowing the exact cause led to a precise fix: in **1997**, **Hochreiter and Jürgen Schmidhuber** published the **LSTM**, which gives memory a protected lane with "gates".
- **The move:** Before fixing something, pin down *exactly* where and why it fails.
- **Kid version:** "Don't just say it's broken. Find the exact spot it breaks."
- **Practice it yourself:**
  - A flashlight won't turn on. Test batteries, then bulb, then switch, one at a time.
  - In a long-division mistake, find the *first* wrong line.
  - Play telephone and check the message after every person. Where did it change?
  - *Adults:* When Wi-Fi is "slow", test device → router → modem → provider before calling anyone.
- **Where it shows up:** Lesson 09. Every Bug Hunt.

## 12. Remove the bottleneck
- **Who & the story:** In **2014**, translation networks squeezed a whole sentence into one fixed-size list of numbers before translating it, which worked badly for long sentences. **Dzmitry Bahdanau**, then working with **Kyunghyun Cho** and **Yoshua Bengio** in Montreal, let the translator *look back* at every word of the original as it wrote each new word. Bahdanau later wrote that the idea was partly inspired by translation exercises from learning English in middle school, where your eyes move back and forth between the original and your translation. This was *attention*.
- **The move:** Find the narrowest point everything must squeeze through, and make a way around it.
- **Kid version:** "If everything has to squeeze through one tiny door, add more doors."
- **Practice it yourself:**
  - At lunch, why is the line slow? Find the one spot everyone waits on.
  - Note-taking: instead of remembering a whole chapter, keep the book open and look back.
  - A group project waits on one person. How could work flow around them?
  - *Adults:* Map a weekly chore or work process and circle the step everything waits on.
- **Where it shows up:** Lesson 10.

## 13. Throw out what you don't need
- **Who & the story:** In **2017**, eight researchers, most of them at Google (**Ashish Vaswani** and colleagues), asked: if attention is doing the important work, do we still need the recurrent network at all? Their paper, *Attention Is All You Need*, removed recurrence entirely. The result, the **Transformer**, was simpler *and* trained much faster on parallel hardware. It's the "T" in GPT. This is the Simplicity value, in a research paper.
- **The move:** After something works, test whether each piece is actually needed, and remove what isn't.
- **Kid version:** "Take one piece out. Does it still work? Then you didn't need it."
- **Practice it yourself:**
  - Edit an essay by cutting every sentence that doesn't change the meaning.
  - Pack for a trip, then remove three things. Did you miss them?
  - Simplify a board game's rules. Which rules can you drop and still have fun?
  - *Adults:* Cancel one recurring meeting or subscription for a month as an experiment.
- **Where it shows up:** Lesson 10.

## 14. Squeeze out the repeats
- **Who & the story:** In **1994**, **Philip Gage** described *byte pair encoding*, a simple compression trick: find the most common pair of symbols, replace it with a new symbol, and repeat. In **2015**, **Rico Sennrich, Barry Haddow and Alexandra Birch** used the same trick to break words into pieces for translation. GPT models use it to build their *tokens*.
- **The move:** Find what repeats most and give it a short name.
- **Kid version:** "If you write it a lot, make a shortcut for it."
- **Practice it yourself:**
  - Invent texting abbreviations for the 5 phrases you write most.
  - Look at a song's lyrics: which chunk repeats? (That's the chorus.)
  - Make a shorthand for taking class notes.
  - *Adults:* Find your 3 most-typed phrases and make text-expander shortcuts.
- **Where it shows up:** Lesson 11.

## 15. Make it bigger, then measure
- **Who & the story:**
  - **2020.** **Jared Kaplan** and colleagues at OpenAI trained many language models of different sizes and found smooth, predictable patterns, called *power laws*, linking model size, data, and compute to performance.
  - **2022.** **Jordan Hoffmann** and colleagues at DeepMind measured more carefully and found many models were *too big for their data*. Their 70-billion-parameter "Chinchilla", trained on much more text, beat a 280-billion-parameter model.
  The lesson: don't just guess that bigger is better. Measure *how much* better, and check the recipe.
- **The move:** Change one thing in steps, measure carefully each time, and look for the pattern before betting big.
- **Kid version:** "Try it small, medium, and large, and write down what happens. *Then* decide."
- **Practice it yourself:**
  - Paper airplanes: try 3 wing sizes, 5 throws each, and graph the average distance.
  - Plants: 3 pots with different amounts of water. Measure weekly.
  - Study time: 10, 20, or 30 minutes before a quiz. Does more always help?
  - *Adults:* Plot something on log-log paper (or log axes in a spreadsheet) and see if it's a straight line.
- **Where it shows up:** Lesson 11.

## 16. Ask people which they prefer
- **Who & the story:** In **2017**, **Paul Christiano**, **Jan Leike** and colleagues at OpenAI and DeepMind trained a simulated robot to do a **backflip** without ever writing down what a good backflip is. They showed a person two short video clips and asked which looked more like a backflip, about **900** times. The system learned what people preferred. They also caught a robot arm *fooling* its human judges: it hovered between the camera and the object so it looked like it was grabbing it. In **2022**, **Long Ouyang** and colleagues used the same idea (*InstructGPT*). People preferred answers from a much smaller instruction-tuned model over the original large GPT-3.
- **The move:** When "good" is hard to define, compare two options at a time and ask people which is better. Then check that nobody is being fooled.
- **Kid version:** "Hard to say what makes it good? Show two, ask which is better, and watch out for tricks."
- **Practice it yourself:**
  - Rank 5 snacks by only doing head-to-head taste tests.
  - Choose a class name by pairwise votes instead of one big vote. Same winner?
  - Writing: give a friend two versions of your opening sentence and ask which is better.
  - *Adults:* Use pairwise comparison to rank your project to-do list.
- **Where it shows up:** Lesson 12.

## 17. Rebuild it small to understand it
- **Who & the story:** When the physicist **Richard Feynman** died in **1988**, his Caltech blackboard said: *"What I cannot create, I do not understand."* **Andrej Karpathy** has built a series of tiny, readable projects in that spirit: **micrograd** (backprop in about a hundred lines), **makemore**, **nanoGPT**, and in **2025** **nanochat**, the whole recipe for a small chat model. They let anyone see every part of a huge system at a size you can hold in your head.
- **The move:** To really understand something big, build a small working copy of it yourself.
- **Kid version:** "Build a mini one. Then you'll *really* get it."
- **Practice it yourself:**
  - Build a mini volcano, mini catapult, or mini water filter.
  - Make a 10-card version of a board game.
  - Re-create a favorite recipe from memory, then compare it to the real one.
  - *Adults:* Rebuild a spreadsheet you use from scratch, without looking at the original formulas.
- **Where it shows up:** Lessons 06, 11, and 13.

## 18. Open the box
- **Who & the story:**
  - **2020.** **Chris Olah** and colleagues published *Zoom In*, arguing that you can study individual pieces of a neural network, called *circuits*, the way a biologist studies cells.
  - **2024.** Researchers at **Anthropic** found millions of interpretable "features" inside a large language model (*Scaling Monosemanticity*). They turned up one feature for the Golden Gate Bridge so far that the model, briefly released as "Golden Gate Claude", kept bringing the bridge into every conversation.
  Scientists are still early in this work, and that's part of the lesson.
- **The move:** Don't just judge a system by its outputs. Look inside and test what each part does.
- **Kid version:** "Don't just ask *what* it says. Peek inside and find out *why*."
- **Practice it yourself:**
  - Take apart an old (unplugged!) toy or clicky pen. Can you explain each part?
  - When a friend changes their mind, ask what *one* fact changed it.
  - Look at a recipe's ingredients and predict which one makes it rise, then test it.
  - *Adults:* Read a privacy policy or a terms-of-service section you've never opened.
- **Where it shows up:** Lesson 14.

---

## ★ Test the test (Bug Hunters' own move)
- **Who & the story:** This one belongs to *us*. Buddy makes mistakes on purpose, and students write tests to catch them. The trickiest rungs on the mistake ladder teach this move:
  - **L4, lazy test:** a test that passes even when the code is wrong.
  - **L5, actually right:** Buddy is correct, and you have to *prove* it instead of assuming it's lying.
  The same idea shows up in science as controls and replication. The robot arm in move 16 is a real example of a test that could be fooled.
- **The move:** Before trusting a check, make sure it would *fail* if the thing were wrong. Before rejecting a claim, check it fairly.
- **Kid version:** "Would my test catch a mistake? Try breaking it on purpose." And: "Don't just distrust. Verify."
- **Practice it yourself:**
  - A smoke alarm has a test button. What does pushing it actually prove?
  - Check your math homework with a *different* method than you used to solve it.
  - A rumor sounds false. Find one piece of evidence that would show it's *true*, then look.
  - *Adults:* For a backup you rely on, actually try restoring one file.
- **Where it shows up:** Every Block C.

---

## Sources

These are cited by title so you can look them up. Per `STYLE.md`, we don't invent links. Where a story comes from a later recollection rather than the original paper, we say so.

**Original works**
- Markov, A. A. (1913). Lecture to the St. Petersburg Academy of Sciences. English translation: *An Example of Statistical Investigation of the Text Eugene Onegin Concerning the Connection of Samples in Chains* (Science in Context, 2006).
- Shannon, C. E. (1948). *A Mathematical Theory of Communication.* Bell System Technical Journal.
- Shannon, C. E. (1951). *Prediction and Entropy of Printed English.* Bell System Technical Journal.
- Descartes, R. (1637). *La Géométrie* (appendix to *Discourse on the Method*).
- Cayley, A. (1858). *A Memoir on the Theory of Matrices.* Philosophical Transactions of the Royal Society.
- Cauchy, A.-L. (1847). *Méthode générale pour la résolution des systèmes d'équations simultanées.* Comptes Rendus.
- McCulloch, W. & Pitts, W. (1943). *A Logical Calculus of the Ideas Immanent in Nervous Activity.* Bulletin of Mathematical Biophysics.
- *The New York Times* (July 8, 1958). "New Navy Device Learns By Doing."
- Minsky, M. & Papert, S. (1969). *Perceptrons.* MIT Press.
- Linnainmaa, S. (1970). Master's thesis, University of Helsinki (reverse-mode automatic differentiation).
- Werbos, P. (1974). *Beyond Regression.* PhD thesis, Harvard University.
- Rumelhart, D., Hinton, G. & Williams, R. (1986). *Learning representations by back-propagating errors.* Nature.
- Firth, J. R. (1957). *A Synopsis of Linguistic Theory, 1930–1955.*
- Bengio, Y., Ducharme, R., Vincent, P. & Jauvin, C. (2003). *A Neural Probabilistic Language Model.* JMLR.
- Mikolov, T. et al. (2013). *Efficient Estimation of Word Representations in Vector Space*. Also Mikolov, Yih & Zweig (2013), *Linguistic Regularities in Continuous Space Word Representations.*
- Bolukbasi, T. et al. (2016). *Man is to Computer Programmer as Woman is to Homemaker? Debiasing Word Embeddings.*
- Hochreiter, S. (1991). Diploma thesis, TU Munich. Bengio, Simard & Frasconi (1994), *Learning long-term dependencies with gradient descent is difficult.* Hochreiter & Schmidhuber (1997), *Long Short-Term Memory.*
- Bahdanau, D., Cho, K. & Bengio, Y. (2014). *Neural Machine Translation by Jointly Learning to Align and Translate.*
- Vaswani, A. et al. (2017). *Attention Is All You Need.*
- Gage, P. (1994). *A New Algorithm for Data Compression.* C Users Journal. Sennrich, Haddow & Birch (2015), *Neural Machine Translation of Rare Words with Subword Units.*
- Kaplan, J. et al. (2020). *Scaling Laws for Neural Language Models.* Hoffmann, J. et al. (2022), *Training Compute-Optimal Large Language Models.*
- Christiano, P. et al. (2017). *Deep reinforcement learning from human preferences.* Ouyang, L. et al. (2022), *Training language models to follow instructions with human feedback.*
- Olah, C. et al. (2020). *Zoom In: An Introduction to Circuits.* Distill. Templeton, A. et al. (2024), *Scaling Monosemanticity.* Anthropic.

**Later recollections and secondary sources**
- **Bahdanau's middle-school translation inspiration:** from Bahdanau's own email to Andrej Karpathy, which Karpathy published with permission in December 2024. Secondary coverage agrees, but we haven't checked the full original text. Quote it from the primary post before putting it in a lesson.
- **Backflip "900 bits" and the robot arm that fooled its judges:** from OpenAI's 2017 blog post *Learning from Human Preferences*, which accompanied the Christiano et al. paper.
- **Feynman's blackboard:** the photograph of his Caltech blackboard at the time of his death (1988), held in the Caltech Archives.
- **Markov vs Nekrasov:** widely documented in histories of probability. The 20,000-letter count is in Markov's 1913 paper itself.
