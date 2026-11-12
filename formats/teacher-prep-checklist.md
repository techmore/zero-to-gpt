# Teacher Prep Checklist

For the [one-week intensive](one-week-intensive.md), the [two-week deep dive](two-week-deep-dive.md), or a [self-paced](self-paced.md) group.

**You don't need to be an AI expert.** This list is about what to *test, print, and gather*, so that nothing surprises you on Day 1. Work through it with your tech contact. Items marked **🔧** are for whoever runs the Mac mini.

**Timeline:**
- **3 weeks before:** family letter and tech setup
- **1 week before:** full dry run
- **Day before:** quick checks + room setup

---

## 1. Three weeks before

### Family letter
- [ ] Start from the template in [`../classroom/family-letter.md`](../classroom/family-letter.md). It explains Buddy, local-only data, and planted mistakes.
- [ ] Add the format-specific details (copy-paste block below).
- [ ] Decide the log-retention line for Buddy with your tech contact. Then make the letter say *exactly* what happens.
- [ ] If your school requires an opt-out, include it. Opted-out students use the scripted Buddy (no AI model), and every Bug Hunt still works.
- [ ] Send it at least 2 weeks before Day 1.

**Format add-on for the family letter (edit the brackets):**

> **Schedule:** [Monday–Friday / two weeks, Monday–Friday], [dates], [9:00–12:00 / 9:00–3:00].
> **Please send:** a water bottle, shoes and clothes for moving around and going outside (we take movement breaks every day), and [a snack / lunch, if full-day]. We use [no food in activities / allergy-safe counters].
> **You're invited:** to our showcase on [the last day] at [11:10]. Students will run the Paper Bag Machine for you, show what they built, [and demo the tiny GPT they trained], and challenge you to catch Buddy's mistakes.
> **At home:** ask your child to teach you a "Thinking Move". There's a new one each day.

### Tech: decide the setup
- [ ] Will students use **school MacBooks** or their own? Who can install software on them?
- [ ] 🔧 Will the **Mac mini** run Buddy *and* (two-week course) a backup training queue? If both, plan to pause Buddy during big training runs, or train on the MacBooks only.
- [ ] 🔧 Pick the model server and the exact model build. The Buddy proxy expects an OpenAI-compatible server such as `llama-server` or `mlx_lm.server`; see `infrastructure/buddy/`. Write the model's name and version into the family letter.

---

## 2. Tech checks

### 🔧 Mac mini (Buddy)
- [ ] **Power and sleep:** set the Mac to never sleep while plugged in, and to start automatically after a power failure (Energy settings).
- [ ] **Network:** give it a fixed address on the school LAN (a DHCP reservation). Write the address on a card taped to the Mac mini.
- [ ] **Model server** starts after a reboot without anyone logging in. Test it: reboot, wait 2 minutes, then ask a question from a student MacBook.
- [ ] **Buddy proxy** (`infrastructure/buddy/buddy_proxy.py`):
  - [ ] Bound to the LAN address, **not** exposed to the internet.
  - [ ] A **class keys file** is set. Without one, the proxy runs with auth *disabled* (dev only).
  - [ ] A teacher key is set if you want the flags view.
  - [ ] Log folder, retention days, and content-logging setting match what the family letter says.
  - [ ] Rate limit is sensible for your class size (about 12 seats).
  - [ ] The proxy's own header says it's a design sketch that hasn't been load-tested or security-reviewed. Have your tech contact read it and test it before students use it.
- [ ] **Planted-mistake check:** from a MacBook, select model `buddy/1.3` and confirm Buddy voices challenge 1.3's planted mistake. Select plain `buddy` and confirm it behaves normally.
- [ ] **Safety check:** try a few off-topic or inappropriate prompts and confirm the safety hook responds the way you expect.
- [ ] **Load test (light):** have 6 (or 12) people send a question at the same moment. Note how long answers take. If it's more than about 20 seconds, plan Bug Hunts in pairs and lean on the scripted Buddy.

### Student MacBooks (each one)
- [ ] Python 3 runs: `python3 --version`.
- [ ] The course folder is present and opens in Jupyter (or the editor you're using).
- [ ] **Bug Hunt tool works offline:** `python3 -m bughunt list` shows challenges 1.1–1.6.
- [ ] The editor's AI panel (if used) points at the Buddy proxy, **not** at any cloud service. Check the settings on every machine.
- [ ] Turn Wi-Fi off and confirm the notebooks and `bughunt` still work. This is your fallback.
- [ ] Battery and chargers: label each charger and machine with the same number.

### Teacher check
- [ ] 🔧 `python3 -m bughunt selfcheck` passes (checks every challenge still works).
- [ ] You've done every Lesson 01 Bug Hunt yourself, using the teacher solutions in `lessons/01-the-guessing-machine/teacher/`.

- [ ] Skim [`../threads/shortcut-learning.md`](../threads/shortcut-learning.md) (the "What did it really learn?" stories and the optional "Pause before you prompt" practice). Decide whether to use your school's own word for the quiet minute.

### Two-week course only: tiny GPT capstone (Days 8–10)
- [ ] Clone [nanoGPT](https://github.com/karpathy/nanoGPT) onto each MacBook (or into a shared course folder) **while online**.
- [ ] Install what the `shakespeare_char` path needs: `torch`, `numpy`, `tiktoken` (used by `sample.py`), and `requests` (imported by `prepare.py`). The README's full list also has `transformers datasets wandb tqdm`, which aren't needed here.
- [ ] Apple GPU check: `python3 -c "import torch; print(torch.backends.mps.is_available())"` prints `True`. If not, use `--device=cpu`. It's slower, but works.
- [ ] Run `python data/shakespeare_char/prepare.py` **while online**, once per machine. It downloads the tiny Shakespeare text.
- [ ] **Time a training run** on one student MacBook (8 GB) with the exact small-config command in the two-week plan, once with `--device=cpu` and once with `--device=mps`. Write the faster time down: ______ min. Expect ~3–6 min. If it's over 15 minutes, shrink `max_iters` or `n_layer`.
- [ ] 🔧 The **full** `shakespeare_char` config is for the Mac mini only (~1.5 h on an M4; see `infrastructure/training-on-apple-silicon.md`). Plan when it runs so it doesn't slow Buddy during class.
- [ ] **1-minute smoke test** for students on Day 8: the same command with `--max_iters=50`, then `sample.py`. Check that it finishes and prints *something*.
- [ ] Pre-download 2–3 **public-domain** books for the dataset menu. Strip the distributor's header and footer text, and save each as `input.txt` in its own `data/<name>/` folder.
- [ ] Disk space: about 1 GB free per machine is plenty for this.
- [ ] Optional: try nanochat's `runs/runcpu.sh` on the Mac mini for a full-day demo. Expect weak results; the README says so.

---

## 3. Printing

| Item | Qty (12 / 5 students) | Source |
|---|---|---|
| Bug Ladder poster (large) | 1 | `classroom/bug-ladder.md` |
| Bug Hunter Pledge | 13 / 6 (one for you) | `classroom/bug-hunter-pledge.md` |
| Thinking Move cards (index-card size) | 1 per student per lesson | `THINKING-MOVES.md` |
| Wall timeline strip (1900 → today, one line per decade) | 1 long strip | Make it from the course timeline (`site/timeline/`) |
| Exit ticket cards (or plain index cards) | About 15 per day | Plain cards |
| Skill-map trackers (self-paced or ongoing) | 1 per student | See `self-paced.md` |
| Graph paper | 1 pad | — |
| Lesson unplugged handouts | Per lesson | Each lesson's Block A |
| Two-week only: dataset menu + capstone Bug Hunt sheet | 1 per pair | `two-week-deep-dive.md` |
| Showcase: station signs + family "Bug Hunt" quick card | 5 signs, 30 cards | Make them on the day |

---

## 4. Materials for unplugged activities

| Activity (day) | You need |
|---|---|
| Paper Bag Machine (L01) | About 30 paper lunch bags per team, scrap paper slips, markers, a short text printed large |
| Snack space + Arrow Simon Says (L02) | Masking tape for floor axes, snack picture cards. Use pictures, not real food. |
| Shape-shifter (L03) | Graph paper, colored pencils, 2×2 "recipe cards" |
| Hill walk + hotter/colder (L04) | A gentle grassy slope or gym mats. Optional blindfolds (eyes-closed with a spotter is fine; never require a blindfold). Bean bags, cones. |
| Human perceptron (L05) | Weight cards (−2 to +2), "threshold" sign, 0/1 finger cards |
| Blame relay (L06) | Number cards, "×2" / "+3" station signs, blank "blame cards", a soft ball |
| Softmax by counters (L07) | 20 counters per group (tokens or beads, not candy, to avoid allergies), dice |
| Word map + telephone (L08–09) | Word cards on lanyards, a list of 10 telephone messages |
| Attention party (L10) | Query cards, key name tags, value envelopes, 10 tokens per student |
| BPE on paper (L11) | Printed paragraph, highlighters |
| Showcase | Poster paper, tape, an extension cord, a projector or big screen |

**Movement and inclusion:** every movement break has a seated version (point, clap, or pass instead of walk). Know your students' allergies, mobility needs, and comfort with touch, blindfolds, and being "on stage". Offer roles like "caller", "recorder", or "judge" to anyone who wants them.

---

## 5. One week before: dry run
- [ ] Teach yourself Day 1 start to finish, with a colleague or family member as the student. Time each block.
- [ ] Run one Bug Hunt *with Buddy live* and one with Wi-Fi off (scripted Buddy).
- [ ] Two-week course: train one tiny GPT end to end and save a sample to show on Day 9.
- [ ] Decide pairs and a seating plan. Set up a rotation so everyone drives.
- [ ] Prepare a "plan B" card: if Buddy is down → scripted Buddy. If a MacBook dies → pair up. If it rains → indoor movement breaks.

## 6. Day before
- [ ] Charge all MacBooks. Reboot the Mac mini and test Buddy from one MacBook.
- [ ] Tape floor axes. Hang the Bug Ladder poster and wall timeline.
- [ ] Lay out Day 1 materials by station.
- [ ] Put exit-ticket cards and pencils by the door.

## 7. After each day (5 minutes)
- [ ] Read the exit tickets and sort them into "got it", "partly", and "not yet". Start tomorrow by answering 1–2 "not yet" cards out loud (anonymously).
- [ ] Note any Bug Hunt challenge that confused *everyone*. It may need a fix; tell the course maintainers.
- [ ] 🔧 Glance at the Buddy logs or flags if your retention policy allows, and only for safety.
