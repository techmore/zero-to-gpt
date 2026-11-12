# One-Week Intensive: "Feel It, Don't Prove It"

**Who:** Grades 6–8, about 12 students (school year) or about 5 (summer). No coding or AI background needed.
**When:** Spring break or summer. **5 half-days, about 3 hours each.** A full-day variant is at the end.
**Covers:** Lessons 01–05, plus a taste of 06. See [`../ROADMAP.md`](../ROADMAP.md).
**Depth:** Students *feel* each idea with their hands and bodies, see it work in code, and catch Buddy's mistakes. They don't do proofs. Adults or fast finishers can follow the "Adult version" sections.
**Ends with:** A Friday showcase for families. Students run the Paper Bag Machine, show a learning curve, and challenge visitors to a live Bug Hunt.

Before you start, see the [teacher prep checklist](teacher-prep-checklist.md).

> **Block references.** `L01-A` means Lesson 01, Block A. Every lesson has three 45-minute blocks:
> - **A**: unplugged activity + story
> - **B**: Jupyter lab
> - **C**: Bug Hunt
>
> Lesson 01 is fully built. For Lessons 02–05, use the lesson folders as they land. Until then, the activities named here are enough to teach from.

---

## The daily rhythm (half-day, 3 hours)

| Time | What | Notes |
|---|---|---|
| 9:00–9:10 | **Gathering** | A minute of quiet, then a "one word" check-in around the circle. Each speaker is heard; no cross-talk. Post today's big question. |
| 9:10–9:55 | **Block 1** (45 min) | Usually Block A: unplugged activity + **story time** |
| 9:55–10:05 | **Movement break** (10 min) | Named in each day's plan |
| 10:05–10:50 | **Block 2** (45 min) | Usually Block B: lab notebook (pairs) |
| 10:50–11:10 | **Snack + outside** (20 min) | Screens closed. Fresh air. |
| 11:10–11:55 | **Block 3** (45 min) | Usually Block C: **Bug Hunt** |
| 11:55–12:00 | **Exit ticket** (5 min) | Index card. Collect at the door. |

**Story time:** about 10 minutes inside Block 1. Read or tell the lesson's story ("The Story" section), then find the event on the course timeline (`site/timeline/`). Add a sticky note to a paper timeline on the wall, and the wall timeline grows all week.

**Pause before you prompt (optional):** before students ask Buddy anything, one silent minute to write their own prediction. The exit ticket can use the four reflection questions (*What did the machine notice? What did it miss? What context did it ignore? What did I assume?*). See [`../threads/shortcut-learning.md`](../threads/shortcut-learning.md). <!-- TODO: use the school's own term for reflection -->

**Thinking Move cards:** At the end of Block 1, each student gets the day's move card from [`../THINKING-MOVES.md`](../THINKING-MOVES.md) and doodles on the back.

---

## Day 1 (Monday): The Guessing Machine
**Big question:** Can you guess the next letter just by counting?

| Time | Block | Activity |
|---|---|---|
| 9:10–9:55 | **L01-A** | **Unplugged:** the Paper Bag Machine. Each bag is a letter and holds slips for the letters that came next. Students "run" the machine by drawing slips. **Story time:** Markov counting 20,000 letters of *Eugene Onegin* by hand in 1913, then Shannon's guessing game. **Move:** *Count instead of argue.* |
| 9:55–10:05 | Break | **Human bigram chain.** Each student is a letter. When your letter is called, pick a random "next" student from your card and tag them. Run it twice to make two silly "words". |
| 10:05–10:50 | **L01-B** | **Lab:** count bigrams in `tiny_story.txt` and generate text. Pairs: driver + navigator, switching every 10 minutes. |
| 11:10–11:55 | **L01-C** | **Bug Hunt 1.1–1.6.** First, read the Bug Ladder and sign the pledge together (`classroom/bug-ladder.md`, `classroom/bug-hunter-pledge.md`). Commands: `python3 -m bughunt list`, `show`, `test`, `answer`. |
| 11:55 | Exit | "Buddy says the letter after **q** is usually **z**. How would you check?" |

**Differentiation**
- **5 students:**
  - Run a single Paper Bag Machine as a group. Everyone writes one bag.
  - In Block B, students work solo, and the teacher pair-programs with whoever is stuck.
  - Do Bug Hunts 1.1–1.6 in order, as a group discussion, one laptop on the projector, then solo retries.
- **12 students:**
  - Build three machines (4 per team) from different texts and compare their output.
  - Use pairs in Block B.
  - In Block C, pairs pick from 1.1–1.4. Fast pairs try 1.5–1.6.
  - Assign a "bug reporter" role per pair who shares one catch with the class.

---

## Day 2 (Tuesday): Numbers That Mean Things & Tables That Transform
**Big question:** How can a list of numbers mean something, and how do you do the same math to everything at once?
**Lessons:** 02 and 03, compressed: L02-A + L02-B in the morning, then L03-A + a Bug Hunt.

| Time | Block | Activity |
|---|---|---|
| 9:10–9:55 | **L02-A** | **Unplugged:** "Snack space." Masking-tape axes on the floor (sweet → crunchy). Students stand where their favorite snack goes, then find their nearest neighbor. Dot product by "arrow agree / disagree" with arms. **Story time:** Descartes, 1637: shapes as numbers. The fly-on-the-ceiling legend makes a quick L2 discussion: "How would we check that story?" **Move:** *Give it an address.* |
| 9:55–10:05 | Break | **Arrow Simon Says.** "Point (2, 1)!" Everyone points. "Add (0, 1)!" Everyone moves their arm. |
| 10:05–10:50 | **L02-B** | **Lab:** vectors as Python lists → add, scale, dot product. Find the most similar snack. |
| 11:10–11:55 | **L03-A + C** | **Unplugged (20 min):** the shape-shifter. Draw a doodle on graph paper, apply a 2×2 "recipe card" to each corner point, and redraw it. Then show the Lesson 1 bigram table *is* a matrix. **Bug Hunt (25 min):** Lesson 02/03 challenges, e.g. Buddy's dot product forgets one term (L3), or Buddy's matrix shapes "line up" when they don't (L1). |
| 11:55 | Exit | "Draw two arrows with a dot product of zero." |

**Story time** (if time allows): Sylvester names the "matrix" in 1850, and Cayley's 1858 memoir.

**Differentiation**
- **5 students:**
  - One floor graph, everyone on it at once.
  - Add a third axis using height: stand, crouch, or tiptoe.
- **12 students:**
  - Two floor graphs with different traits. Groups compare which snacks moved closer.
  - Advanced pairs do the matrix-times-vector lab extension.

---

## Day 3 (Wednesday): Sliding Downhill
**Big question:** How does a computer get less wrong a little at a time?

| Time | Block | Activity |
|---|---|---|
| 9:10–9:55 | **L04-A** | **Unplugged:** blindfolded hill walk. Use a gentle slope outdoors or a ramp of mats. A partner can only say the *slope* under your feet, and you take steps proportional to it. Then a hotter/colder bean-bag hunt. **Story time:** Cauchy in 1847, solving astronomy equations by stepping downhill. **Move:** *Make it smooth so you can slide downhill.* |
| 9:55–10:05 | Break | **Learning-rate hop.** "Learning rate 0.1" = baby steps toward a cone. "Learning rate 5" = giant leaps that overshoot. Feel why too big a step is bad. |
| 10:05–10:50 | **L04-B** | **Lab:** derivative by nudging, then fit a line to points with gradient descent. A learning-rate slider makes the line wobble or settle. |
| 11:10–11:55 | **L04-C** | **Bug Hunt.** Buddy's derivative uses a giant nudge (L3). Buddy claims a bigger learning rate is "always faster" (L2). A lazy test only checks that the loss is a number (L4). |
| 11:55 | Exit | "Draw a loss curve that went *wrong*. What happened?" |

**Differentiation**
- **5 students:**
  - Everyone takes a turn blindfolded.
  - Try a 2-D "valley" (find the lowest spot in a small yard area).
- **12 students:**
  - Use 3 stations: hill walk, bean-bag hotter/colder, and a "learning-rate hop" race. Rotate every 7 minutes.
  - Strong math students compute 3 steps of descent on (w − 3)² by hand.

---

## Day 4 (Thursday): The Fake Neuron
**Big question:** Can one fake brain cell learn to sort things, and what can it *never* learn?

| Time | Block | Activity |
|---|---|---|
| 9:10–9:55 | **L05-A** | **Unplugged:** human perceptron. Two "input" students raise 0 or 1 fingers. A "neuron" student holds weight cards, adds them up, and stands if the total is over the threshold. Teach it AND, then OR. Then try XOR. It can't be done, and students discover that. **Story time:** McCulloch & Pitts (1943). Rosenblatt's perceptron (1958) and the newspaper hype. Minsky & Papert's *Perceptrons* (1969). **Move:** *Know what it can't do.* |
| 9:55–10:05 | Break | **Neuron stand-up.** The teacher calls out inputs; the class (as one neuron) stands or sits by the rule on the board. Change the rule quickly. |
| 10:05–10:50 | **L05-B** | **Lab:** a perceptron learns AND and OR. Plot its decision line, then watch it fail forever on XOR. |
| 11:10–11:55 | **L05-C** | **Bug Hunt.** Buddy "proves" its perceptron learned XOR, but the test only checked 2 of 4 cases (L4). Buddy tells the 1958 newspaper story with an invented detail (L2). Buddy says Minsky & Papert proved *all* neural networks fail on XOR (L2: they analyzed single-layer perceptrons). |
| 11:55 | Exit | "Name one thing *you* can't do yet, and what it would take to learn it." |

**Differentiation**
- **5 students:**
  - Each student plays every role once.
  - Extra challenge: can *two* neurons, plus a third that combines them, do XOR? This previews Lesson 06.
- **12 students:**
  - Run three human perceptrons at once and race them to learn AND.
  - Showcase prep starts: each pair picks what they'll demo tomorrow.

---

## Day 5 (Friday): Blame Flows Backward (taste) + Showcase

| Time | Block | Activity |
|---|---|---|
| 9:10–9:55 | **L06-A (taste)** | **Unplugged:** blame relay. A line of students passes a number forward, each doing ×2 or +3 at their station. The last person compares with the target. Then "blame cards" travel backward, each multiplied by the station's local slope. **Story time:** Linnainmaa (1970), Werbos (1974), and Rumelhart, Hinton & Williams (1986). The same idea was found several times. **Move:** *Pass the blame backward.* |
| 9:55–10:05 | Break | **Reverse conga.** The line walks backward, passing a ball hand to hand. |
| 10:05–10:50 | **Showcase prep** | Pairs finish a poster or demo: one idea, one Thinking Move, and one bug they caught. Rehearse twice. |
| 10:50–11:10 | Snack + set-up | Families arrive at 11:10. |
| 11:10–11:55 | **Showcase** | Stations:<br>(1) Paper Bag Machine. Visitors generate a "word".<br>(2) Snack space on the floor.<br>(3) Learning-rate hop.<br>(4) Human perceptron tries XOR.<br>(5) **Live Bug Hunt:** visitors vs Buddy, coached by students. Use the scripted Buddy if the network is flaky.<br>Students rotate between "host" and "visitor". |
| 11:55 | Exit | Final card: "One thing I'll tell my family about how AI *really* works," plus "I'd like to learn next: ___". |

**Differentiation**
- **5 students:**
  - Each student hosts one station.
  - For a small audience, do a sit-down "teach-back" circle instead of stations.
- **12 students:**
  - Pairs host stations in two 20-minute shifts.
  - One volunteer is the emcee who explains Bug Hunters to families at the start.

---

## Full-day variant (about 9:00–3:00)

Keep the morning as above. Add after lunch:

| Time | What |
|---|---|
| 12:00–12:45 | Lunch + outdoor play |
| 12:45–1:30 | **Block D: Branch explorer.** Pick from the branch for the day's lesson in the roadmap:<br>Day 1 → `branch-information-theory` (play Shannon's guessing game for bits).<br>Day 2 → `branch-classic-ml` (nearest neighbors).<br>Day 3 → `branch-reinforcement-learning` (train a "dog" classmate with only "warmer" or "colder").<br>Day 4 → `branch-symbolic-ai` (write rules for a chatbot, ELIZA-style, on paper).<br>Day 5 → showcase. |
| 1:30–1:40 | Movement break |
| 1:40–2:25 | **Block E: Maker time.** Deeper lab extensions, make a Bug Hunt challenge *for Buddy's next class*, or build a showcase artifact. |
| 2:25–2:50 | Free choice / outdoor / quiet reading of the day's story |
| 2:50–3:00 | Exit ticket (moves to the end of the day) |

With a full day, Day 5 can do all of L06 (micrograd taste in Block B) and hold the showcase at 2:00.

## Notes for the teacher
- You don't need to be an AI expert. The Teacher notes in each lesson have answer keys. The phrase "Let's check it together" is always a fine response.
- If Buddy (the live model) is down, every Bug Hunt still works: challenge files contain Buddy's planted answers, and `python3 -m bughunt` grades without the model.
- Keep exit tickets. They're your best evidence of what landed, and a good source of questions for the next session.
