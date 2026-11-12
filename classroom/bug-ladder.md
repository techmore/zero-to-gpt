# The Bug Ladder 🪜🐞

Buddy, our AI helper, makes mistakes **on purpose** so you can practice catching them.
The mistakes get sneakier as you climb. (Real AI tools make all of these mistakes
by accident, too. That's why this skill matters.)

| Level | Name | What Buddy does | How you catch it |
|---|---|---|---|
| **L1** | Plain wrong | Gives an answer that is simply wrong. "'cat' comes after 'the' 7 times!" | Check it yourself. Count, look it up, run it. |
| **L2** | Confident fib | Mixes true facts with made-up ones and sounds 100% sure. | Check each part on its own. A sure voice is not evidence. |
| **L3** | Runs but wrong | Writes code with no error messages that still gives the wrong answer. | Work out a small answer by hand, then write a test that compares. |
| **L4** | Lazy test | Writes a test that passes, but checks almost nothing. | Ask "could this test ever fail?" Write a test with an exact expected answer. |
| **L5** | Actually right | Buddy is correct! | Don't just distrust Buddy. **Prove** it's right with tests that would catch a mistake. |

## The golden rule of a good test

> A good test **passes on correct code** and **fails on buggy code**.

`python3 -m bughunt test` checks both for you. It runs your test on the correct code
AND on Buddy's code:

| On correct code | On Buddy's code | What it means |
|---|---|---|
| ✅ passes | ❌ fails | 🎉 **CAUGHT IT!** Your test is a bug trap. |
| ✅ passes | ✅ passes | 🐛💨 The bug escaped (or, at L5, ✅ **verified**: Buddy was right). |
| ❌ fails | (anything) | 🤔 Your test flags correct code. Check your expectation. |

## Why L5 matters

If you assume Buddy is *always* wrong, you're not thinking. You're just guessing in
the other direction. Bug hunters **verify**: they trust evidence, not feelings.

*Something to think about (optional): honesty means our words match the truth. We
check claims, including our own, before we repeat them.*
