# Thread: "What did it really learn?" (shortcut learning)

A machine can get the right answer for the wrong reason. It finds a **shortcut**: a clue that happens to go along with the answer in its training examples, but isn't the real thing. Then it fails when the clue goes away.

This thread runs through the whole course. It pairs with the **Rules vs Learning** thread ([`EXPERIMENTS.md`](../EXPERIMENTS.md#rules-vs-learning-a-thread-through-the-whole-course)) and with the course-wide theme below. The full course map is in [`ROADMAP.md`](../ROADMAP.md#cross-cutting-threads).

---

## The big theme: more context

> **The history of AI is a history of giving machines more context.**

- **Lesson 01:** the Guessing Machine sees **one word** of context. It can't know that "The dogs that chased the cat…" needs "are", because "dogs" is too far back.
- **Lessons 07–09:** networks see a few words, then try to carry a memory along, and forget.
- **Lesson 10:** attention lets every word look back at **every** other word.
- **This thread:** a shortcut happens when a model uses the **wrong** context: the snow behind the animal, the hospital's label on the X-ray, the questioner's face instead of the math problem.

So the question is never just "how much can it see?" It's also "**what is it actually looking at?**"

---

## The stories, from kid-sized to grown-up

Use them in this order. Each one is a little harder to spot than the last.

### 1. Clever Hans, the horse who "did math" (1904–1907) · *kids*

**The story.** In Berlin, a horse named Hans seemed to answer math questions by tapping his hoof. Crowds were amazed. Then a psychology student, Oskar Pfungst, ran careful tests. Hans got the answer right only when the person asking **knew** the answer and Hans could **see** them. People leaned forward a tiny bit while Hans tapped, and relaxed when he reached the right number. They didn't even know they were doing it. Hans wasn't doing math. He was reading people.

**Their words.** The book's introduction, by Carl Stumpf, says the answer to the riddle "was found in the unintentional minimal movements of the horse's questioner." Pfungst writes: "It is to such minimal movements that the horse, as we shall see later, promptly reacted."

**Sources.** Pfungst, *Das Pferd des Herrn von Osten (Der kluge Hans)*, Leipzig: J. A. Barth, 1907 ([archive.org](https://archive.org/details/daspferddesherr00stumgoog)). English translation by Carl L. Rahn, *Clever Hans (The Horse of Mr. von Osten)*, New York: Henry Holt, 1911 ([Project Gutenberg #33936](https://www.gutenberg.org/ebooks/33936); [scan](https://archive.org/details/cu31924024783973)).

**Ask the class.** Hans really was clever. What was he clever *at*? How did Pfungst find out? (He changed one thing at a time: hide the questioner, use a questioner who doesn't know the answer.)

### 2. The machine that called George Harrison a woman (mid-1960s) · *kids*

**The story.** *Smithsonian* magazine reports old film from the mid-1960s. A researcher "teaches" a machine to sort photos of faces into "man" and "woman". The machine reportedly labels George Harrison of the Beatles a woman, apparently because of his long hair. It had learned "long hair = woman". That's a shortcut, not a fact.

**Sources.** [*Smithsonian*](https://www.smithsonianmag.com/innovation/early-days-machine-learning-massive-computers-said-george-harrison-was-woman-ai-come-long-way-180988805/). ⚠️ We couldn't identify the film, the machine, or a published result (see myth #1 in [`EXPERIMENTS.md`](../EXPERIMENTS.md#history-myth-busters--l2-confident-fib-challenges)). The site blocked our checker in this pass, so re-open the page before teaching.

**Handle with care.** Per [`STYLE.md`](../STYLE.md#sensitive-topics), sorting people is history we *discuss*, never a hands-on activity. A machine that sorts people into two boxes erases people who don't fit, and it learns whatever was in its photos.

### 3. Husky or wolf? Look at the snow (2016) · *kids and adults*

**The story.** Researchers trained a picture classifier to tell huskies from wolves. In their training photos, the wolves were usually in snow. The classifier learned the snow. Then they used an explanation tool to show *which parts of the photo* the classifier used, and asked people whether they trusted it.

**Their words.** The classifier "predicts 'Wolf' if there is snow (or light background at the bottom), and 'Husky' otherwise."

**Important detail.** The researchers built this bad classifier **on purpose**, from 20 hand-picked photos, to test whether people would notice. It wasn't a real product that failed by accident. Don't tell it as one.

**Source.** Ribeiro, Singh & Guestrin, "'Why Should I Trust You?': Explaining the Predictions of Any Classifier", *KDD 2016*, pp. 1135–1144 ([DOI](https://doi.org/10.1145/2939672.2939778); [arXiv 1602.04938](https://arxiv.org/abs/1602.04938)), section 5.4.

### 4. The X-ray model that recognized the hospital (2018) · *adults; older kids with support*

**The story.** A team trained deep networks to find pneumonia in chest X-rays from several hospital systems. The models did worse on X-rays from hospitals they hadn't trained on. One reason: the networks could tell **which hospital** an X-ray came from, and different hospitals had different shares of sick patients. Knowing the hospital helped the score without understanding the lungs.

**Their words.** "CNNs were able to detect where a radiograph was acquired (hospital system, hospital department) with extremely high accuracy."

**Source.** Zech et al., "Variable generalization performance of a deep learning model to detect pneumonia in chest radiographs: A cross-sectional study", *PLOS Medicine* 15(11): e1002683, 2018 ([DOI](https://doi.org/10.1371/journal.pmed.1002683)).

### 5. "Clever Hans predictors" (2019) · *adults*

**The story.** A team built tools that show what a trained model pays attention to. One image classifier sorted pictures into classes, including "horse". For horses, it leaned on a small **source tag** (a text label) that appeared on some horse photos, not on the horse. They named this after Clever Hans.

**Their words.** The classifier was "relying mainly on the easily identifiable source tag, which incidentally correlates with the true features, a clear case of 'Clever Hans' behavior." The tag was "present in about one fifth of the horse figures."

**Details that matter.** The paper says "source tag" (not "copyright tag"). The model that cheated was a Fisher-vector classifier trained on the PASCAL VOC 2007 images, not a deep neural network; in the same comparison, the deep network looked at the horse.

**Source.** Lapuschkin et al., "Unmasking Clever Hans predictors and assessing what machines really learn", *Nature Communications* 10, 2019 ([DOI](https://doi.org/10.1038/s41467-019-08987-4); [arXiv 1902.10178](https://arxiv.org/abs/1902.10178)).

### 6. Naming the pattern: "shortcut learning" (2020) · *adults*

**Their words.** "Shortcuts are decision rules that perform well on standard benchmarks but fail to transfer to more challenging testing conditions, such as real-world scenarios."

**Why it matters.** This paper pulls the stories above into one idea. A high test score is not proof that a model learned what you meant. You have to test it where the shortcut stops working.

**Source.** Geirhos et al., "Shortcut learning in deep neural networks", *Nature Machine Intelligence* 2(11): 665–673, 2020 ([DOI](https://doi.org/10.1038/s42256-020-00257-z); [arXiv 2004.07780](https://arxiv.org/abs/2004.07780)).

### A legend to tell *as* a legend: the tank story

"The Army trained a network to spot tanks, but it only learned sunny vs cloudy days." It's a great parable, but there's no primary source, and it probably didn't happen as told ([gwern.net/tank](https://gwern.net/tank); myth #2 in [`EXPERIMENTS.md`](../EXPERIMENTS.md#history-myth-busters--l2-confident-fib-challenges)). Tell it after the real stories, and ask: "How would you check whether this one is true?"

---

## Where it shows up in the course

| Lesson | Shortcut to look for |
|---|---|
| 01 Guessing Machine | It only knows "what came next in *this* story". Train it on a story where pigs fly and it says pigs fly. |
| 05 Fake Neuron | The X-vs-E perceptron: which grid squares carry the weight? Would it still work on a letter drawn in a different spot? |
| 08 Words as Places | Analogies that work because of bias in the text, not meaning. |
| 11 nanoGPT | A tiny dataset gets memorized: the model "learned" the text, not the language (capstone challenge G5). |
| 12 Parrot to Assistant | Reward hacking: answers that please a lazy rubric without being right. |
| 14 What We Know Now | Interpretability: open the box and check what a neuron really responds to. |

**Bug Hunt idea (any lesson).** Buddy says "my model is 95% accurate, so it learned the rule." Students design a test where the shortcut and the real rule *disagree*.

---

## Practice: "Pause before you prompt"

<!-- TODO: use the school's own term for reflection -->

A short, quiet habit for any lesson that uses Buddy. It's optional; teachers can rename it or skip it.

**Before asking Buddy (one silent minute).**
1. Everyone is quiet for one minute.
2. Write your own prediction or answer on paper first. A guess is fine.
3. Then ask Buddy, and compare. Where did you agree? Who was right, and how do you know?

**End of lesson (2–5 minutes, written or spoken).**
- What did the machine notice?
- What did it miss?
- What context did it ignore?
- What did I assume?

*Why:* writing your own prediction first keeps your thinking yours, and gives you something to check Buddy against. It's the Bug Hunt habit, turned on yourself.
