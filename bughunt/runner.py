"""Run a test file against Buddy's code and the reference, then judge it.

This is mutation testing for kids. A GOOD test:
  * passes on correct code (the reference), and
  * fails on buggy code (Buddy's version with a planted bug).
"""

from __future__ import annotations

import json
import subprocess
import sys
import tempfile
from dataclasses import dataclass
from pathlib import Path

WORKER = Path(__file__).resolve().parent / "_worker.py"
TIMEOUT_SECONDS = 20


@dataclass
class RunResult:
    load_error: str | None
    tests: list[dict]
    printed: str = ""

    @property
    def ran_any(self) -> bool:
        return self.load_error is None and bool(self.tests)

    @property
    def all_passed(self) -> bool:
        return self.ran_any and all(t["status"] == "pass" for t in self.tests)

    @property
    def failures(self) -> list[dict]:
        return [t for t in self.tests if t["status"] != "pass"]


def run_tests(implementation: Path, test_file: Path) -> RunResult:
    with tempfile.TemporaryDirectory() as tmp:
        out = Path(tmp) / "result.json"
        try:
            subprocess.run(
                [sys.executable, str(WORKER), str(implementation), str(test_file), str(out)],
                cwd=str(Path(test_file).resolve().parent),
                capture_output=True,
                text=True,
                timeout=TIMEOUT_SECONDS,
            )
        except subprocess.TimeoutExpired:
            return RunResult(
                load_error=f"took longer than {TIMEOUT_SECONDS} seconds. "
                "Is there a loop that never stops?",
                tests=[],
            )
        if not out.exists():
            return RunResult(load_error="the test run crashed before it could report", tests=[])
        data = json.loads(out.read_text(encoding="utf-8"))
        return RunResult(data["load_error"], data["tests"], data.get("printed", ""))


# Verdicts -------------------------------------------------------------------

CAUGHT = "caught"            # buggy: passes on reference, fails on Buddy
ESCAPED = "escaped"          # buggy: passes on both
VERIFIED = "verified"        # not buggy: passes on both
FLAGS_CORRECT = "flags_correct"  # fails on the reference (any challenge)
NO_TESTS = "no_tests"
ONLY_EXAMPLES = "only_examples"  # not buggy: only the free starter examples ran
BROKEN = "broken"            # test file itself would not load

GOOD_VERDICTS = {CAUGHT, VERIFIED}


@dataclass
class Judgement:
    verdict: str
    on_reference: RunResult
    on_buddy: RunResult


def judge(buggy: bool, buddy_code: Path, reference: Path, test_file: Path,
          example_tests: tuple = ()) -> Judgement:
    on_ref = run_tests(reference, test_file)
    if on_ref.load_error and not on_ref.tests:
        # Broken or stuck test file: no point running it again on Buddy's code.
        return Judgement(BROKEN, on_ref, on_ref)
    on_buddy = run_tests(buddy_code, test_file)

    if not on_ref.tests:
        verdict = NO_TESTS
    elif not on_ref.all_passed:
        verdict = FLAGS_CORRECT
    elif buggy:
        verdict = ESCAPED if on_buddy.all_passed else CAUGHT
    elif not on_buddy.all_passed:
        verdict = FLAGS_CORRECT
    elif all(t["name"] in example_tests for t in on_ref.tests):
        verdict = ONLY_EXAMPLES
    else:
        verdict = VERIFIED
    return Judgement(verdict, on_ref, on_buddy)
