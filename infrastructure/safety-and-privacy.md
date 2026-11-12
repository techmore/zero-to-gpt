# Safety and privacy

> **Not legal advice.** This is a practical summary written for a sysadmin
> and a teacher, as of **2026-11-12**. Have the school's counsel, or your
> accrediting association's guidance (e.g., NAIS [5]), confirm how these laws
> apply to your school and state. Sources are at the bottom.

## 1. The laws, in plain terms

### FERPA (education records)
- FERPA applies to schools that **receive funds from U.S. Department of
  Education programs** [1][2].
- **Most private K-12 schools don't receive such funds directly, so FERPA
  usually doesn't apply to them** [2][3]. Some secondary sources claim
  "virtually all" private schools are covered. The Department's own guidance
  treats K-12 private schools as generally outside FERPA unless they take ED
  program money [1][3].
- **Action:** ask the business office whether the school receives *any* ED
  program funds directly. Either way, **design as if FERPA applied**
  (minimize, restrict access, honor parent requests). It costs us almost
  nothing, and parents expect it.

### COPPA (children under 13, online)
- COPPA regulates **operators of commercial websites/online services** that
  collect personal information from children under 13. Grades 6–8 includes
  11- and 12-year-olds.
- **The amended COPPA Rule** took effect 2025-06-23, with **compliance
  required by 2026-04-22** [4]. Changes relevant to us:
  - **Separate verifiable parental consent** is required before an operator
    discloses a child's personal information to third parties **for
    training or developing AI** (and for targeted ads) [4][6].
  - The definition of personal information is broader (e.g., biometric
    identifiers) [6].
- **School authorization:** under the FTC's guidance (COPPA FAQ section N),
  a school can consent *on parents' behalf* only for services used **solely
  for the school's educational purpose**, with no commercial use of the
  data. The FTC recommends the **school, not individual teachers**, make
  that call and tell parents which services are approved [7][8]. The FTC
  **declined to codify** school authorization in the 2025 rule, so the FAQ
  guidance is still what applies [7][8].
- **What this means here:** a Buddy that the school runs on its own Mac
  mini, with no vendor and no data leaving campus, is a much simpler
  situation than a cloud EdTech product. **[unverified legal
  interpretation; confirm with counsel]** The COPPA exposure is in *third
  parties* on the laptops: IDE extensions, telemetry, and any cloud AI
  feature that is accidentally left on. Hence telemetry off, no Copilot
  sign-in, and the pinned extension list in `student-macbook-setup.md`.
- Pending: "COPPA 2.0" reportedly passed the Senate in March 2026 but was
  not law at the time of checking [9] **[unverified]**.

### Also check
- **Your state's student-privacy law(s).** Several apply to operators
  serving K-12 regardless of public/private status **[verify for your
  state]**.
- **The school's existing acceptable-use and safeguarding policies.** Buddy
  should plug into them, not invent new ones.

## 2. Data design (what we actually do)

| Principle | Implementation |
|---|---|
| **No child identities on the server** | One token per **seat** (laptop), not per child. Any seat→child mapping lives with the teacher, not on the mini. |
| **Nothing leaves campus** | The model, proxy and logs are on the mini. The LAN-only port is firewalled to the student VLAN. No cloud APIs. |
| **Minimize what's logged** | Logs hold the last user message and Buddy's reply (PII-scrubbed by regex), seat, challenge, flags, and latency. `BUDDY_LOG_CONTENT=0` keeps metadata only. |
| **Short retention, automatic** | `BUDDY_RETENTION_DAYS=30` by default; the proxy deletes older day-files every hour. **Recommend:** 30 days during term, everything purged at term end, and flagged items handled per the safeguarding policy. |
| **No training on student chats** | Stated in the family letter. The LoRA dataset is written by staff (`buddy-design.md` §5.3). |
| **Access** | Logs readable by the admin account only (log dir `0700`). The teacher sees flagged events via `/teacher/flags`. Parents can ask to see or delete their child's seat logs for given dates. |
| **Encrypted at rest** | FileVault on the mini. |

## 3. Content filtering: layered, explainable

| Layer | What it catches | Cost | Phase |
|---|---|---|---|
| 1. System prompt rules | Steers tone and topics. **Soft**, because a 4B model can be talked out of it. | ~0 | 0 |
| 2. **Proxy rules** (`check_input` / `check_output`) | Wellbeing phrases → fixed kind hand-off (988, trusted adult). Off-limits topics → redirect. PII → scrubbed + reminder. Answer-key leak → deflect. | ~0 ms; deterministic; **easy to explain to parents** | 0 |
| 3. **Small guard model** (optional `BUDDY_GUARD_URL`) | Things the rules miss, e.g., paraphrases or other languages. **Qwen3Guard** comes in 0.6B/4B/8B, labels safe/controversial/unsafe, covers 119 languages, and has a token-level *streaming* variant [10]. | +1 model call per direction (~100–300 ms on the mini **[estimate]**), ~0.6–1 GB RAM | 1, after measuring false positives |
| 4. **Human** | Teacher reviews flags daily; wellbeing flags go through the school's safeguarding protocol | Teacher time | 0 |

**Rules first, guard model second.** Rules are predictable and auditable,
and a false positive is easy to diagnose ("it matched the word X"). A guard
model catches more but is opaque and adds latency. Add it once you've run
it over the staff red-team set and a week of (consented) real traffic, and
checked how often it blocks legitimate coding questions, e.g. "kill the
process" or "execute the function".

**Buffer-then-stream:** the proxy gets the whole reply, filters it, then
streams it to the IDE. That costs a little latency, but a stream can't
show a child something the filter would have caught.

## 4. Teacher visibility

- **Students are told plainly:** "Your teacher can read your Buddy chats,
  like your work on the class whiteboard."
- **Now:** `GET /teacher/flags` (teacher key) returns recent flagged events:
  wellbeing, off-limits, PII, upstream errors, leak attempts. A simple
  follow-up is a daily 3:30 pm digest emailed **internally** or printed.
- **Wellbeing flags are not the sysadmin's or teacher's to triage alone.**
  They go to the counselor per the existing safeguarding process. Agree on
  this before day 1.
- **Later (Phase 3):** a read-only page on the proxy that shows live seats,
  current challenge per seat, and flags. That's a small addition to
  `buddy_proxy.py`.

## 5. Family letter: key points

1. **What:** "Zero to GPT" teaches how AI chatbots work, from counting words
   up to training a tiny model. Students use a school-run AI helper called
   **Buddy**.
2. **Where the data lives:** Buddy runs **on a computer inside the school**.
   Chats don't go to any AI company or the internet. No student accounts
   are created anywhere.
3. **What's kept:** chat text is kept for **[30] days** for safety and
   teaching, then deleted automatically. It is labeled by laptop number,
   not by name.
4. **Who sees it:** your child's teacher (and IT, for maintenance). Safety
   concerns follow the school's usual counseling process.
5. **Never used for training:** we do not train AI on your child's chats.
6. **Planted mistakes (important):** Buddy is **designed to sometimes make
   mistakes on purpose** during "Bug Hunt" games, and students are told
   this up front. Students learn to check AI with tests instead of trusting
   it. Planted mistakes are only about the coding puzzle, never about
   safety, health, or anything outside the game. Buddy always admits a
   mistake when shown proof.
7. **Limits:** Buddy is a small AI. It can be wrong even outside the game,
   and it's not a search engine or a counselor.
8. **Choice:** families may opt out. Opted-out students do the same lessons
   with the scripted (non-AI) Bug Hunt and a partner.
9. **Contact and requests:** to see or delete your child's chats, or ask
   questions, contact [teacher/IT].

## 6. Informed consent for the planted-mistakes design

Purposefully misleading children, even for teaching, needs to be **open,
bounded and debriefed**:

- **Before:** an opt-in permission slip from a parent/guardian (the letter
  above). Recommended because some students are under 13 and because the
  design is unusual. Then a **student briefing** on day 1: "Buddy is a
  trickster in Bug Hunts. It will sometimes be wrong on purpose. Your job is
  to catch it with tests." A short **"Bug Hunter pledge"**, read aloud, makes
  the rule concrete.
- **During:** planted mistakes happen only when a **challenge model is
  selected** (`buddy/<id>`). Plain `buddy` is always in honest mode, so
  students always have a way to ask "for real". Buddy **concedes to
  evidence** every time, and never invents fake evidence (system prompt).
- **After:** every hunt ends with the reveal (`well_done` in
  `challenge.json`) and a 2-minute debrief: *What was the mistake? What made
  it believable? What test caught it?* Level 2 ("confident fib") debriefs
  should name the general lesson: **confidence is not evidence.**
- **Bounds:** no planted mistakes about people, health, safety, history or
  science outside the challenge's own material. No personalized or
  emotional manipulation. No mistakes in grades/feedback.
- **Opt-out with dignity:** the same learning goals via the scripted engine.
- **Adult learners:** the same disclosure in the course README. Consent is
  implied by enrolling, but say it anyway.
- **Feedback loop:** ask students mid-term whether the game makes them
  trust AI *less in a healthy way* or *trust Buddy less in a way that
  hurts learning*. Adjust the ratio of L5 ("actually right") challenges.

## Sources

1. US Dept. of Education, Student Privacy Policy Office FAQ: to which institutions does FERPA apply - https://studentprivacy.ed.gov/faq/which-educational-agencies-or-institutions-does-ferpa-apply
2. CDC Public Health Law Program, FERPA overview (private K-12 generally not subject) - https://www.cdc.gov/phlp/php/resources/family-educational-rights-and-privacy-act-ferpa.html
3. NCES Forum Guide, privacy of student information (few private K-12 receive federal funds directly) - https://nces.ed.gov/pubs2004/privacy/section_2a.asp
4. Federal Register, Children's Online Privacy Protection Rule (2025-05904): effective 2025-06-23, compliance 2026-04-22 - https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule
5. NAIS: education records federal privacy requirements - https://nais.org/articles/pages/education-records-federal-privacy-requirements
6. Loeb & Loeb summary of the amended COPPA Rule - https://www.loeb.com/en/insights/publications/2025/05/childrens-online-privacy-in-2025-the-amended-coppa-rule
7. Future of Privacy Forum: FTC updates to COPPA FAQs (school authorization) - https://fpf.org/blog/ftc-updates-coppa-faqs/
8. FTC, Complying with COPPA: FAQ (section N, schools) - https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions  **[URL not fetched in this pass; summarised via 7 and the 2025 rule text]**
9. COPPA 2.0 Senate passage (secondary source) - https://blog.promise.legal/coppa-april-2026-amendments-edtech/
10. Qwen3Guard technical report - https://arxiv.org/abs/2510.14276
11. 988 Suicide & Crisis Lifeline - https://988lifeline.org/
