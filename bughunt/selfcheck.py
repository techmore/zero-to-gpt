"""Check that the whole curriculum still holds together.

For every challenge:
  * challenge.json has the fields it needs, and ids are unique
  * quiz: the answer in teacher/solutions/answers.json matches the hash
  * code: the teacher solution PASSES on the reference
  * code, buggy: the teacher solution FAILS on Buddy's code (it catches the bug)
  * code, not buggy: the teacher solution passes on Buddy's code too
  * code: the starter my_test.py passes on the reference AND on Buddy's code
    (so students start from zero, not from a test that already catches it)
  * code: an included lazy test (L4) passes on both (that's what makes it lazy)
  * code: Buddy's code differs from the reference in exactly one function
    when buggy, and in no function when not buggy
Also: every lessons/*/lab/*.ipynb is valid nbformat-4 JSON with empty outputs.
"""

from __future__ import annotations

import ast
import copy
import json
from pathlib import Path

from . import challenges as ch
from .runner import run_tests


def function_dumps(path: Path) -> dict[str, str]:
    tree = ast.parse(path.read_text(encoding="utf-8"))
    out = {}
    for node in tree.body:
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            # Ignore docstrings so Buddy can explain itself differently.
            node = copy.deepcopy(node)
            if ast.get_docstring(node) is not None:
                node.body = node.body[1:] or [ast.Pass()]
            out[node.name] = ast.dump(node, annotate_fields=False, include_attributes=False)
    return out


def load_answers(lesson_dir: Path, cache: dict) -> dict:
    if lesson_dir not in cache:
        p = lesson_dir / "teacher" / "solutions" / "answers.json"
        cache[lesson_dir] = json.loads(p.read_text(encoding="utf-8")) if p.exists() else {}
    return cache[lesson_dir]


def check_challenge(c: ch.Challenge, answers_cache: dict) -> list[str]:
    problems = ch.validate_fields(c)
    if problems:
        return problems

    if c.kind == "quiz":
        answers = load_answers(c.lesson_dir, answers_cache)
        if c.id not in answers:
            return [f"no answer for {c.id} in teacher/solutions/answers.json"]
        if not ch.check_answer(c, answers[c.id]):
            return ["answers.json answer does not match answer_sha256"]
        return []

    paths = {k: c.path(k) for k in ("buddy_code", "reference", "solution", "starter_test", "lazy_test")}
    for key, p in paths.items():
        if key == "lazy_test" and not c.data.get("lazy_test"):
            continue
        if p is None or not p.exists():
            problems.append(f"{key} file not found: {p}")
    if problems:
        return problems

    buddy, ref = paths["buddy_code"], paths["reference"]

    # One planted bug (or none).
    b_funcs, r_funcs = function_dumps(buddy), function_dumps(ref)
    if set(b_funcs) != set(r_funcs):
        problems.append("Buddy's code and the reference define different functions")
    else:
        changed = sorted(n for n in r_funcs if r_funcs[n] != b_funcs[n])
        if c.buggy and len(changed) != 1:
            problems.append(f"buggy challenge should change exactly 1 function, changed: {changed}")
        if not c.buggy and changed:
            problems.append(f"non-buggy challenge must match the reference, but changed: {changed}")

    sol_ref = run_tests(ref, paths["solution"])
    sol_buddy = run_tests(buddy, paths["solution"])
    if not sol_ref.all_passed:
        problems.append(f"solution does not pass on the reference: {describe(sol_ref)}")
    if c.buggy and sol_buddy.all_passed:
        problems.append("solution does not catch Buddy's bug (passes on Buddy's code)")
    if not c.buggy and not sol_buddy.all_passed:
        problems.append(f"solution fails on Buddy's (correct) code: {describe(sol_buddy)}")

    for key in ("starter_test", "lazy_test"):
        p = paths[key]
        if key == "lazy_test" and not c.data.get("lazy_test"):
            continue
        on_ref, on_buddy = run_tests(ref, p), run_tests(buddy, p)
        if on_ref.load_error or (on_ref.tests and not on_ref.all_passed):
            problems.append(f"{key} fails on the reference: {describe(on_ref)}")
        if on_buddy.load_error or (on_buddy.tests and not on_buddy.all_passed):
            problems.append(f"{key} already catches the bug: {describe(on_buddy)}")
    return problems


def describe(r) -> str:
    if r.load_error:
        return r.load_error
    if not r.tests:
        return "no test functions found"
    return "; ".join(f"{t['name']}: {t['message']}" for t in r.failures) or "all passed"


def check_notebooks() -> list[tuple[str, list[str]]]:
    results = []
    for nb in sorted(ch.LESSONS.glob("*/lab/*.ipynb")):
        problems = []
        try:
            data = json.loads(nb.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            results.append((str(nb.relative_to(ch.REPO_ROOT)), [f"not valid JSON: {e}"]))
            continue
        if data.get("nbformat") != 4:
            problems.append("nbformat must be 4")
        cells = data.get("cells")
        if not isinstance(cells, list) or not cells:
            problems.append("no cells")
        else:
            for i, cell in enumerate(cells):
                if cell.get("cell_type") not in ("code", "markdown", "raw"):
                    problems.append(f"cell {i}: bad cell_type")
                if "source" not in cell:
                    problems.append(f"cell {i}: no source")
                if cell.get("cell_type") == "code" and cell.get("outputs"):
                    problems.append(f"cell {i}: outputs should be empty")
        results.append((str(nb.relative_to(ch.REPO_ROOT)), problems))
    return results


def run() -> int:
    try:
        found = ch.discover()
    except ch.ChallengeError as e:
        print(f"❌ {e}")
        return 1

    failures = 0
    seen = set()
    answers_cache: dict = {}
    print(f"🔎 Bug Hunt selfcheck: {len(found)} challenges\n")
    for c in found:
        problems = []
        if c.id in seen:
            problems.append("duplicate id")
        seen.add(c.id)
        problems += check_challenge(c, answers_cache)
        label = f"{c.id:<6} L{c.data.get('level', '?')} {c.data.get('kind', '?'):<4} {c.data.get('title', '')}"
        if problems:
            failures += 1
            print(f"  ❌ {label}")
            for p in problems:
                print(f"       - {p}")
        else:
            print(f"  ✅ {label}")

    notebooks = check_notebooks()
    if notebooks:
        print("\n📓 Notebooks")
        for name, problems in notebooks:
            if problems:
                failures += 1
                print(f"  ❌ {name}")
                for p in problems:
                    print(f"       - {p}")
            else:
                print(f"  ✅ {name}")

    print()
    if failures:
        print(f"❌ selfcheck found {failures} problem item(s).")
        return 1
    print("✅ selfcheck passed. Every bug is catchable, and every solution is fair.")
    return 0
