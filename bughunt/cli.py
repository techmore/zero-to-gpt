"""The `python3 -m bughunt` command line."""

from __future__ import annotations

import argparse
import textwrap
from pathlib import Path

from . import challenges as ch
from . import runner
from . import selfcheck

WIDTH = 72


def say(text: str = "", indent: str = "") -> None:
    if not text:
        print()
        return
    for para in text.split("\n"):
        print(textwrap.fill(para, WIDTH, initial_indent=indent, subsequent_indent=indent) if para else "")


def rel(p: Path) -> str:
    try:
        return str(p.resolve().relative_to(Path.cwd().resolve()))
    except ValueError:
        return str(p)


# list -----------------------------------------------------------------------

def cmd_list(args) -> int:
    found = ch.discover()
    if not found:
        print("No challenges found. Are you in the zero-to-gpt folder?")
        return 1
    print("🐞 Bug Hunt challenges\n")
    lesson = None
    for c in found:
        if c.lesson_dir.name != lesson:
            lesson = c.lesson_dir.name
            print(f"📚 {lesson}")
        icon = "❓" if c.kind == "quiz" else "🧪"
        level = f"L{c.level} {ch.LEVEL_NAMES.get(c.level, ''):<16} " if args.levels else ""
        print(f"  {icon} {c.id:<5} {level}{c.title}")
    if not args.levels:
        print("\n🔒 Levels are hidden (mystery mode). Is Buddy wrong, or actually right?")
        print("   Teachers: python3 -m bughunt list --levels")
    print("\nNext: python3 -m bughunt show <ID>   (for example: python3 -m bughunt show 1.1)")
    return 0


# show -----------------------------------------------------------------------

def cmd_show(args) -> int:
    c = ch.find(args.id)
    d = c.data
    print(f"🐞 Challenge {c.id}: {c.title}")
    if args.levels:
        print(f"   Level {c.level}: {ch.LEVEL_NAMES.get(c.level, '')}")
    print()
    print("🤖 Buddy says:")
    say(d["buddy_says"], indent="   ")
    print()
    if c.kind == "quiz":
        say("❓ " + d["question"])
        for letter, text in d.get("choices", {}).items():
            print(f"   {letter}) {text}")
        if d.get("how_to_check"):
            print()
            say("🔍 How to check: " + d["how_to_check"])
        print()
        example = "B" if d["answer_format"] == "letters" else "42"
        print(f"✍️  Answer with: python3 -m bughunt answer {c.id} <your answer>")
        print(f"   (for example: python3 -m bughunt answer {c.id} {example})")
        if d["answer_format"] == "letters":
            print("   More than one letter? Type them together, like AC.")
    else:
        say("🔍 Your mission: " + d["how_to_check"])
        print()
        print("📂 Files:")
        print(f"   Buddy's code: {rel(c.path('buddy_code'))}")
        print(f"   Your tests:   {rel(c.path('starter_test'))}")
        if d.get("lazy_test"):
            print(f"   Buddy's test: {rel(c.path('lazy_test'))}")
        print()
        print(f"▶️  Run your tests with: python3 -m bughunt test {c.id}")
        if d.get("lazy_test"):
            print(f"   Try Buddy's test too: python3 -m bughunt test {c.id} {Path(d['lazy_test']).name}")
    if d.get("hints"):
        print()
        print("💡 Stuck? Hints (read one at a time!):")
        for i, h in enumerate(d["hints"], 1):
            say(f"{i}. {h}", indent="   ")
    return 0


# answer ---------------------------------------------------------------------

def cmd_answer(args) -> int:
    c = ch.find(args.id)
    if c.kind != "quiz":
        print(f"Challenge {c.id} is a code challenge. Use: python3 -m bughunt test {c.id}")
        return 2
    value = " ".join(args.value)
    if ch.check_answer(c, value):
        print("🎉 CORRECT! You checked instead of trusting. That's what bug hunters do.")
        if c.data.get("well_done"):
            say(c.data["well_done"], indent="   ")
        return 0
    print("🤔 Not quite. That's OK: checking again is the whole game.")
    if c.data.get("answer_format") == "letters":
        print("   Tip: pick EVERY letter that is wrong, like AC (order doesn't matter).")
    if c.data.get("how_to_check"):
        say("🔍 " + c.data["how_to_check"], indent="   ")
    return 1


# test -----------------------------------------------------------------------

def print_failures(result: runner.RunResult, indent="   ") -> None:
    if result.load_error:
        print(f"{indent}💥 Your test file didn't load: {result.load_error}")
    for t in result.failures:
        icon = "❌" if t["status"] == "fail" else "💥"
        print(f"{indent}{icon} {t['name']}: {t['message']}")


def resolve_test_file(c: ch.Challenge, given: str | None) -> Path:
    if not given:
        return c.path("starter_test")
    p = Path(given)
    if p.is_absolute() or p.exists():
        return p.resolve()
    return (c.folder / given).resolve()


def cmd_test(args) -> int:
    c = ch.find(args.id)
    if c.kind != "code":
        print(f"Challenge {c.id} is a quiz. Use: python3 -m bughunt answer {c.id} <answer>")
        return 2
    test_file = resolve_test_file(c, args.testfile)
    if not test_file.exists():
        print(f"😕 I can't find the test file {test_file}")
        return 2

    print(f"🧪 Challenge {c.id}: running {rel(test_file)}")
    print("   ...on the CORRECT code, then on BUDDY's code.\n")
    j = runner.judge(c.buggy, c.path("buddy_code"), c.path("reference"), test_file,
                     tuple(c.data.get("example_tests", ())))
    n_tests = len(j.on_reference.tests)

    if j.verdict == runner.BROKEN:
        print("💥 Your tests couldn't run:")
        print(f"   {j.on_reference.load_error}")
        print("   Fix that, then try again. (Every coder sees this a LOT. It's normal!)")
    elif j.verdict == runner.NO_TESTS:
        print("😶 I didn't find any tests. A test is a function whose name starts with test_")
        print("   like:  def test_cat_count():")
    elif j.verdict == runner.FLAGS_CORRECT:
        print("🤔 Hmm! Your test FAILED on the correct code.")
        print("   So the problem is in your test, not (only) in Buddy's code.")
        print("   Check your expectation: is the number or rule you wrote really true?\n")
        print("   On the correct code:")
        print_failures(j.on_reference, indent="     ")
        if not c.buggy:
            print()
            say("Remember: some of Buddy's code is actually RIGHT. "
                "Your job is to find out, not to assume.", indent="   ")
    elif j.verdict == runner.CAUGHT:
        print(f"🎉🐛 CAUGHT IT! All {n_tests} test(s) passed on the correct code,")
        print("   and at least one FAILED on Buddy's code. That test is a bug trap!\n")
        print("   Your trap went off here:")
        print_failures(j.on_buddy, indent="     ")
        print()
        say("🔓 What Buddy did: " + c.data["planted_bug"], indent="   ")
    elif j.verdict == runner.ESCAPED:
        print(f"🐛💨 The bug ESCAPED. Your {n_tests} test(s) passed on the correct code")
        print("   (good!) but ALSO passed on Buddy's buggy code.")
        print("   A test that passes on everything can't catch anything.")
        print("   Try a check that ONLY correct code can pass. Hints: python3 -m bughunt show " + c.id)
    elif j.verdict == runner.ONLY_EXAMPLES:
        print("👍 Everything passed, but only the free example test ran.")
        print("   One easy check isn't proof yet. Add YOUR OWN tests for the rules,")
        print("   then run this again. Hints: python3 -m bughunt show " + c.id)
    elif j.verdict == runner.VERIFIED:
        print(f"✅ VERIFIED! All {n_tests} test(s) passed on Buddy's code and the correct code.")
        print("   Buddy was right this time, and now you have PROOF, not just a feeling.")
        if c.data.get("well_done"):
            print()
            say(c.data["well_done"], indent="   ")

    if j.on_reference.printed.strip() and args.verbose:
        print("\n📝 Your tests printed:")
        print(textwrap.indent(j.on_reference.printed.rstrip(), "   "))
    return 0 if j.verdict in runner.GOOD_VERDICTS else 1


# main -----------------------------------------------------------------------

def main(argv=None) -> int:
    parser = argparse.ArgumentParser(
        prog="python3 -m bughunt",
        description="Bug Hunt: catch Buddy's planted mistakes by writing tests.",
    )
    sub = parser.add_subparsers(dest="cmd", required=True)

    p = sub.add_parser("list", help="show all challenges (levels hidden)")
    p.add_argument("--levels", action="store_true", help="also show each challenge's level (L1-L5)")
    p.set_defaults(fn=cmd_list)

    p = sub.add_parser("show", help="show one challenge (level hidden)")
    p.add_argument("id")
    p.add_argument("--levels", action="store_true", help="also show the challenge's level (teachers)")
    p.set_defaults(fn=cmd_show)

    p = sub.add_parser("test", help="run your tests on a code challenge")
    p.add_argument("id")
    p.add_argument("testfile", nargs="?", help="default: my_test.py in the challenge folder")
    p.add_argument("-v", "--verbose", action="store_true", help="show what your tests printed")
    p.set_defaults(fn=cmd_test)

    p = sub.add_parser("answer", help="answer a quiz challenge")
    p.add_argument("id")
    p.add_argument("value", nargs="+")
    p.set_defaults(fn=cmd_answer)

    p = sub.add_parser("selfcheck", help="(teachers) check every challenge still works")
    p.set_defaults(fn=lambda a: selfcheck.run())

    args = parser.parse_args(argv)
    try:
        return args.fn(args)
    except ch.ChallengeError as e:
        print(f"😕 {e}")
        return 2
