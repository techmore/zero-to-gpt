# Self-Paced: Units, Mastery Checks, and Your Own Pace

**Who this is for:**
- A middle schooler continuing at home or in a study hall.
- A student who missed a session.
- An adult learning on their own, including anyone using the course for math practice.

**How it works:** Each lesson is a **unit**. You work through the unit's steps, pass a short **mastery check**, and *then* move on, like Khan Academy. There's no deadline. The only rule is **don't skip the mastery check**, because later lessons stand on earlier ones.

Map of all units: [`../ROADMAP.md`](../ROADMAP.md). Thinking Moves: [`../THINKING-MOVES.md`](../THINKING-MOVES.md).

---

## The units

| Unit | Lesson | Before you start, you should be able to… | Math Ladder rungs (adults) |
|---|---|---|---|
| 1 | `01-the-guessing-machine` | Count and make fractions | 1–3 |
| 2 | `02-numbers-that-mean-things` | Plot points on a grid | 4–5 |
| 3 | `03-tables-that-transform` | Do a dot product | 6 |
| 4 | `04-sliding-downhill` | Read a graph and find a slope | 7–9 |
| 5 | `05-the-fake-neuron` | Use weighted sums (Unit 2) | 10 |
| 6 | `06-blame-flows-backward` | Do gradient descent (Unit 4) | 11 |
| 7 | `07-the-babbling-network` | Explain backprop in your own words (Unit 6) | 12–13 |
| 8 | `08-words-as-places` | Do cosine similarity (Unit 2) and softmax (Unit 7) | 14 |
| 9 | `09-memory-problems` | Use the chain rule (Unit 6) | 15 |
| 10 | `10-just-look-back` | Do matrices (Unit 3), softmax (Unit 7), and embeddings (Unit 8) | 16 |
| 11 | `11-nanogpt` | Work through Unit 10 | 17 |
| 12 | `12-parrot-to-assistant` | Work through Unit 11 | 18 |
| 13 | `13-nanochat` | Work through Unit 12 | 19 |
| 14 | `14-what-we-know-now` | Work through Unit 13 | 20 |

**Branches** are optional side-units. Each branch says which unit you need first; see the roadmap's branch table.

---

## Inside every unit: 6 steps

Each step matches a section of the lesson. Check them off as you go.

1. **📖 The Story.** Read it. Find the event on the course timeline (`site/timeline/`). *Write one sentence:* what problem were they stuck on?
2. **🧒 Kid version** or **🧑 Adult version.** Read the one that fits you. Adults should also read the kid version, because it's the best one-paragraph summary.
3. **✂️ Unplugged at home.** Do the paper activity from Block A with whatever you have. A paper bag and slips work for Unit 1, masking tape on the floor for Unit 2, and so on. Family members make great "machines".
4. **💻 Build it.** The Block B notebook. Run every cell, change at least one number, and predict before you run it.
5. **🐞 Bug Hunt.** Block C. `python3 -m bughunt list`, then `show`, `test`, and `answer`.
6. **✅ Mastery check.** See below.

**Time per unit:**
- **Kids:** about 3 sessions of 45 minutes, plus the check.
- **Adults:** 2–5 hours, depending on how far up the Math Ladder you go.

---

## Mastery checks

You've mastered a unit when you can do **all four**:

| Check | What it looks like | Pass when… |
|---|---|---|
| **1. Bug Hunt** | The unit's Bug Hunt challenges | Every L1–L3 challenge is caught, *and* you correctly handled at least one **L4** (lazy test) and one **L5** (actually right). The `bughunt` tool tells you when your test is a real bug trap. |
| **2. Quick quiz** | 5 short questions on the unit's math, done on paper *before* checking with Python | 4 of 5 correct. If you miss, redo the quiz in a day or two with new numbers. Don't just re-read the answers. |
| **3. Explain-back** | Teach the unit's big idea to someone (a family member, a friend, a pet, a voice memo) in 2 minutes, without notes | You can answer "why does that matter?" once. Adults: also write it in 5 sentences. |
| **4. Thinking Move** | Use the unit's Thinking Move on something that isn't AI. See the "practice it yourself" ideas. | You can say what you did and what happened. |

**Not there yet?** That's normal. Go back to the step that felt shakiest, try one branch activity, and retry the check. The goal is mastery, not speed.

**Teacher sign-off (in school):** a teacher, or a student who has already mastered the unit, listens to the explain-back and initials the tracker.

---

## Tracking progress

Keep it simple. Pick one.

### Option A: Paper skill map (recommended for kids)
A poster or a folded card with the 14 units drawn as stops on a path, with branches drawn as side trails. Each stop has 4 boxes (the 4 checks). Use stickers or stamps. Put the Thinking Move card for each finished unit in a pocket or envelope on the back. Kids like seeing the path fill up, and it doesn't need a login.

### Option B: A progress file (adults; older kids)
Copy this into a file you keep, such as `my-progress.md` in your own folder, not in the course folder:

```markdown
## Unit 1: The Guessing Machine
- [ ] Story + timeline sentence
- [ ] Kid/Adult version
- [ ] Unplugged activity
- [ ] Notebook
- [ ] Bug Hunt (L1–L3 caught, one L4, one L5)
- [ ] Quiz 4/5 (date: ____ )
- [ ] Explain-back (to: ____ )
- [ ] Thinking Move used on: ____
- Math Ladder rungs done: __
```

### Option C: Class wall (in school)
A wall chart with one column per unit and one row per student, using dots instead of grades. Everyone moves at their own pace, and the chart celebrates progress, not rank. Consider using initials or chosen nicknames.

*Idea for a future feature, not built yet:* the `bughunt` tool could save a local, private record of which challenges a learner has caught, so the tracker fills itself in. That record would stay on the learner's own computer.

---

## Suggested pacing

| | Kids (grades 6–8) | Adults |
|---|---|---|
| **Sessions** | 2 × 45 min per week | 2–4 sessions per week, 45–90 min each |
| **One unit takes** | About 2 weeks, including the mastery check | About 1 week (2 for Units 4, 6, and 10) |
| **Whole main path** | About a school year (Units 1–10 by spring is a great goal) | About 3–5 months |
| **Math** | The math inside each lesson is enough | Run 2–3 Math Ladder rungs *ahead* of your current unit |
| **Branches** | One branch per term, chosen by interest | Pick branches tied to your work or curiosity |
| **Good stopping points** | After Unit 5 ("I know what a neuron is and what it can't do"), and after Unit 10 ("I know how a GPT looks back") | After Unit 7 (you can derive softmax + cross-entropy gradients) and after Unit 11 (scaling laws) |

**Adults studying math:** the calculus rungs (7–11) usually take longest. Free outside practice for each rung is in the roadmap's Math Ladder. Do each self-check by hand first, *then* check it in Python. That way you get practice at both.

---

## Using Buddy: on campus vs at home

Buddy is the course's AI helper. It runs on the **campus Mac mini** and makes planted mistakes during Bug Hunts. Students are told this up front.

### On campus
- Your MacBook's editor talks to Buddy over the school network. The teacher's setup notes are in `infrastructure/buddy/`.
- To have Buddy "voice" a specific challenge's planted mistake, pick the model named like `buddy/1.3`. Plain `buddy` is the regular helper.
- Buddy's conversations stay on the school computer. The teacher can tell families exactly what's kept and for how long.

### At home
Buddy lives on campus, so **at home you work without the live model**. That's fine:
- **Every Bug Hunt works offline.** Each challenge file already contains what Buddy said and Buddy's code, and `python3 -m bughunt` grades your tests with no AI at all. This is the "scripted Buddy".
- **Notebooks work offline** once the course folder and Python are installed.
- **For explanations,** use the lesson text and the Karpathy videos and repos linked in the roadmap, or ask a family member to be your "explain-back" audience.

**Kids:** please don't use other chatbots to do the Bug Hunts for you. The point is to build *your* checking muscles. If a family wants a local AI helper at home, ask the teacher or tech contact first. It's possible to run a small open model on a recent Mac, but setting it up is a family decision, and it won't have Buddy's planted-mistake setup.

**Pause before you prompt.** Before you ask any AI helper, take one quiet minute and write down your own answer or guess. Afterwards ask: *What did the machine notice? What did it miss? What context did it ignore? What did I assume?* See [`../threads/shortcut-learning.md`](../threads/shortcut-learning.md) for this habit and the "What did it really learn?" stories.

**Adults:** you're welcome to run a local model of your own for help. Treat everything it says the way the course teaches: as a claim to test. That's the Bug Hunter habit, and it's the most useful thing this course teaches.

### Never
- Don't give Buddy (or any AI) your full name, address, school, passwords, or photos.
- Don't try to reach the campus Buddy from home over the internet. It isn't built or secured for that.
