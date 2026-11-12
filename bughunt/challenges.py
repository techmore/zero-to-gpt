"""Find and load Bug Hunt challenges.

Each challenge lives in its own folder:

    lessons/<lesson>/bughunt/<folder>/challenge.json

Paths inside challenge.json (buddy_code, starter_test, reference, solution,
lazy_test) are relative to that challenge folder.
"""

from __future__ import annotations

import hashlib
import json
import re
from dataclasses import dataclass, field
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
LESSONS = REPO_ROOT / "lessons"

LEVEL_NAMES = {
    1: "Plain wrong",
    2: "Confident fib",
    3: "Runs but wrong",
    4: "Lazy test",
    5: "Actually right?",
}

COMMON_FIELDS = ("id", "title", "level", "kind", "buddy_says")
QUIZ_FIELDS = ("question", "answer_format", "answer_sha256")
CODE_FIELDS = (
    "how_to_check",
    "buggy",
    "buddy_code",
    "starter_test",
    "reference",
    "solution",
    "planted_bug",
    "buddy_persona_note",
)


class ChallengeError(Exception):
    pass


@dataclass
class Challenge:
    folder: Path
    data: dict = field(repr=False)

    # Convenience accessors -------------------------------------------------
    @property
    def id(self) -> str:
        return str(self.data["id"])

    @property
    def title(self) -> str:
        return self.data["title"]

    @property
    def level(self) -> int:
        return int(self.data["level"])

    @property
    def kind(self) -> str:
        return self.data["kind"]

    @property
    def lesson_dir(self) -> Path:
        # lessons/<lesson>/bughunt/<folder>
        return self.folder.parent.parent

    def path(self, key: str) -> Path | None:
        value = self.data.get(key)
        if not value:
            return None
        return (self.folder / value).resolve()

    @property
    def buggy(self) -> bool:
        return bool(self.data.get("buggy", False))


def sort_key(challenge_id: str):
    """Sort '1.10' after '1.9'."""
    return [int(p) if p.isdigit() else p for p in re.split(r"[.\-]", challenge_id)]


def discover(root: Path = LESSONS) -> list[Challenge]:
    found = []
    for cj in sorted(root.glob("*/bughunt/*/challenge.json")):
        try:
            data = json.loads(cj.read_text(encoding="utf-8"))
        except json.JSONDecodeError as e:
            raise ChallengeError(f"{cj}: not valid JSON ({e})") from e
        found.append(Challenge(folder=cj.parent, data=data))
    found.sort(key=lambda c: sort_key(c.id))
    return found


def find(challenge_id: str) -> Challenge:
    for c in discover():
        if c.id == challenge_id:
            return c
    raise ChallengeError(
        f"I can't find a challenge called {challenge_id!r}. "
        "Try: python3 -m bughunt list"
    )


def validate_fields(c: Challenge) -> list[str]:
    """Return a list of problems with the challenge.json (empty = fine)."""
    problems = [f"missing field {k!r}" for k in COMMON_FIELDS if k not in c.data]
    kind = c.data.get("kind")
    if kind == "quiz":
        problems += [f"missing field {k!r}" for k in QUIZ_FIELDS if k not in c.data]
        if c.data.get("answer_format") not in ("number", "letters", "text"):
            problems.append("answer_format must be number, letters, or text")
    elif kind == "code":
        problems += [f"missing field {k!r}" for k in CODE_FIELDS if k not in c.data]
    else:
        problems.append(f"kind must be 'quiz' or 'code', not {kind!r}")
    if c.data.get("level") not in LEVEL_NAMES:
        problems.append("level must be 1-5")
    return problems


# Quiz answers ---------------------------------------------------------------

def normalize(answer: str, answer_format: str) -> str:
    """Make '5', ' 5.0 ' and '5' match; make 'c, b' and 'BC' match."""
    text = str(answer).strip()
    if answer_format == "letters":
        letters = sorted(set(ch for ch in text.upper() if ch.isalpha()))
        return "".join(letters)
    if answer_format == "number":
        cleaned = text.replace(",", "").replace(" ", "")
        try:
            value = float(cleaned)
        except ValueError:
            return cleaned.lower()
        if value.is_integer():
            return str(int(value))
        return repr(value)
    return " ".join(text.lower().split())


def answer_hash(challenge_id: str, normalized: str) -> str:
    """Hash of 'ID|answer'. Keeps answers out of plain sight, not secret."""
    return hashlib.sha256(f"{challenge_id}|{normalized}".encode("utf-8")).hexdigest()


def check_answer(c: Challenge, answer: str) -> bool:
    norm = normalize(answer, c.data["answer_format"])
    return answer_hash(c.id, norm) == c.data["answer_sha256"]
