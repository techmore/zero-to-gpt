#!/usr/bin/env python3
"""Validate the Zero to GPT timeline data (standard library only).

Usage:
    python3 validate.py              # check data/events.json (and that data/events.js matches it)
    python3 validate.py --write-js   # regenerate data/events.js from data/events.json, then check
    python3 validate.py path/to/events.json

Checks:
  * schema: required fields and types for meta, tracks, eras, periods, people, events
  * every event track is a known lesson or branch ID; every era is known and fits the year
  * no duplicate event IDs; IDs are kebab-case
  * ISBN-13 checksums; book links are plain Amazon search links (no affiliate tags)
  * every URL anywhere in the file uses https
  * everyone named in an event has an entry in "people"
  * data/events.js (the offline fallback) contains exactly the same data
Exit status is 1 if any error is found.
"""
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlparse, parse_qs

MAIN_LESSONS = [
    "01-the-guessing-machine",
    "02-numbers-that-mean-things",
    "03-tables-that-transform",
    "04-sliding-downhill",
    "05-the-fake-neuron",
    "06-blame-flows-backward",
    "07-the-babbling-network",
    "08-words-as-places",
    "09-memory-problems",
    "10-just-look-back",
    "11-nanogpt",
    "12-parrot-to-assistant",
    "13-nanochat",
    "14-what-we-know-now",
]
BRANCHES = [
    "branch-vision",
    "branch-reinforcement-learning",
    "branch-memory-networks",
    "branch-generative-images",
    "branch-state-space",
    "branch-symbolic-ai",
    "branch-classic-ml",
    "branch-information-theory",
]
ALLOWED_TRACKS = set(MAIN_LESSONS) | set(BRANCHES)
PERIOD_KINDS = {"winter", "hype"}
ID_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
DATE_RE = re.compile(r"^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$")
JS_PREFIX = "window.ZTG_DATA = "

EVENT_FIELDS = {
    "id": str,
    "year": int,
    "title": str,
    "people": list,
    "track": str,
    "era": str,
    "what_happened": str,
    "why_it_mattered_kid": str,
    "why_it_mattered_adult": str,
    "thinking_move": str,
    "deeper_dive": list,
    "sources": list,
    "watch": list,
    "read": list,
    "kid_friendly": bool,
}


def isbn13_ok(isbn: str) -> bool:
    if not re.fullmatch(r"\d{13}", isbn or ""):
        return False
    total = sum(int(c) * (1 if i % 2 == 0 else 3) for i, c in enumerate(isbn))
    return total % 10 == 0


class Report:
    def __init__(self):
        self.errors = []
        self.warnings = []

    def err(self, where, msg):
        self.errors.append(f"ERROR   {where}: {msg}")

    def warn(self, where, msg):
        self.warnings.append(f"warning {where}: {msg}")


def nonempty_str(r, where, obj, key):
    v = obj.get(key)
    if not isinstance(v, str) or not v.strip():
        r.err(where, f"'{key}' must be a non-empty string")
        return False
    return True


def walk_urls(node, path="$"):
    """Yield (json_path, string) for every string that looks like a URL."""
    if isinstance(node, dict):
        for k, v in node.items():
            yield from walk_urls(v, f"{path}.{k}")
    elif isinstance(node, list):
        for i, v in enumerate(node):
            yield from walk_urls(v, f"{path}[{i}]")
    elif isinstance(node, str):
        s = node.strip()
        if re.match(r"^[a-z][a-z0-9+.-]*://", s, re.I) or s.lower().startswith("www."):
            yield path, s


def check_link_list(r, where, items, required, kind):
    if not isinstance(items, list):
        r.err(where, f"'{kind}' must be a list")
        return
    for i, it in enumerate(items):
        w = f"{where}.{kind}[{i}]"
        if not isinstance(it, dict):
            r.err(w, "must be an object")
            continue
        for key in required:
            nonempty_str(r, w, it, key)
        url = it.get("url", "")
        if isinstance(url, str) and url:
            p = urlparse(url)
            if p.scheme != "https" or not p.netloc:
                r.err(w, f"url must be an absolute https URL: {url}")


def validate(data, r: Report):
    # ---- top level
    for key, typ in [("title", str), ("tracks", dict), ("eras", list), ("periods", list), ("people", dict), ("events", list)]:
        if not isinstance(data.get(key), typ):
            r.err("$", f"top-level '{key}' must be a {typ.__name__}")
    if r.errors:
        return

    # ---- tracks
    tracks = data["tracks"]
    main_ids = [t.get("id") for t in tracks.get("main", [])]
    branch_ids = [t.get("id") for t in tracks.get("branches", [])]
    if main_ids != MAIN_LESSONS:
        r.err("$.tracks.main", f"must list exactly the 14 lesson IDs in order; got {main_ids}")
    if sorted(branch_ids) != sorted(BRANCHES):
        r.err("$.tracks.branches", f"must list exactly the branch IDs {BRANCHES}; got {branch_ids}")
    for group in ("main", "branches"):
        for i, t in enumerate(tracks.get(group, [])):
            nonempty_str(r, f"$.tracks.{group}[{i}]", t, "title")
    # has_lesson: true means the timeline links to lessons/<id>/ (else to ROADMAP.md#<id>)
    repo_root = Path(__file__).resolve().parents[2]
    for i, t in enumerate(tracks.get("main", [])):
        w = f"$.tracks.main[{i}]"
        if "has_lesson" in t and not isinstance(t["has_lesson"], bool):
            r.err(w, "has_lesson must be true or false")
        elif t.get("has_lesson") and not (repo_root / "lessons" / str(t.get("id")) / "README.md").is_file():
            r.err(w, f"has_lesson is true but lessons/{t.get('id')}/README.md does not exist")

    # ---- eras
    eras = {}
    prev_end = None
    for i, e in enumerate(data["eras"]):
        w = f"$.eras[{i}]"
        if not (nonempty_str(r, w, e, "id") and nonempty_str(r, w, e, "label")):
            continue
        if not isinstance(e.get("start"), int) or not isinstance(e.get("end"), int) or e["start"] > e["end"]:
            r.err(w, "start/end must be ints with start <= end")
            continue
        if e["id"] in eras:
            r.err(w, f"duplicate era id '{e['id']}'")
        if prev_end is not None and e["start"] != prev_end + 1:
            r.warn(w, f"era starts at {e['start']} but previous era ended at {prev_end}")
        prev_end = e["end"]
        eras[e["id"]] = e

    # ---- periods
    seen_periods = set()
    for i, p in enumerate(data["periods"]):
        w = f"$.periods[{i}]"
        nonempty_str(r, w, p, "id")
        nonempty_str(r, w, p, "label")
        nonempty_str(r, w, p, "note")
        if p.get("kind") not in PERIOD_KINDS:
            r.err(w, f"kind must be one of {sorted(PERIOD_KINDS)}")
        if not isinstance(p.get("start"), int) or not isinstance(p.get("end"), int) or p["start"] > p["end"]:
            r.err(w, "start/end must be ints with start <= end")
        if p.get("id") in seen_periods:
            r.err(w, f"duplicate period id '{p.get('id')}'")
        seen_periods.add(p.get("id"))

    # ---- people
    people = data["people"]
    for name, info in people.items():
        w = f"$.people[{name!r}]"
        if not isinstance(info, dict):
            r.err(w, "must be an object")
            continue
        nonempty_str(r, w, info, "bio")
        if "lived" in info and not isinstance(info["lived"], str):
            r.err(w, "'lived' must be a string")

    # ---- events
    ids = set()
    named = set()
    last_key = None
    for i, ev in enumerate(data["events"]):
        w = f"$.events[{i}]" + (f"({ev.get('id')})" if isinstance(ev, dict) else "")
        if not isinstance(ev, dict):
            r.err(w, "must be an object")
            continue
        for key, typ in EVENT_FIELDS.items():
            v = ev.get(key)
            if typ is int:
                ok = isinstance(v, int) and not isinstance(v, bool)
            else:
                ok = isinstance(v, typ)
            if not ok:
                r.err(w, f"'{key}' is required and must be {typ.__name__}")
        for key in ("id", "title", "what_happened", "why_it_mattered_kid", "why_it_mattered_adult", "thinking_move"):
            if isinstance(ev.get(key), str) and not ev[key].strip():
                r.err(w, f"'{key}' must not be empty")

        eid = ev.get("id")
        if isinstance(eid, str):
            if not ID_RE.match(eid):
                r.err(w, f"id '{eid}' must be kebab-case (a-z, 0-9, hyphens)")
            if eid in ids:
                r.err(w, f"duplicate id '{eid}'")
            ids.add(eid)

        year = ev.get("year")
        if isinstance(year, int):
            if not 1600 <= year <= 2030:
                r.err(w, f"year {year} out of range")
            date = ev.get("date")
            if date is not None:
                m = DATE_RE.match(date) if isinstance(date, str) else None
                if not m:
                    r.err(w, f"date '{date}' must be YYYY, YYYY-MM or YYYY-MM-DD")
                elif int(m.group(1)) != year:
                    r.err(w, f"date '{date}' does not match year {year}")
                elif m.group(2) and not 1 <= int(m.group(2)) <= 12:
                    r.err(w, f"date '{date}' has an invalid month")
                elif m.group(3) and not 1 <= int(m.group(3)) <= 31:
                    r.err(w, f"date '{date}' has an invalid day")
            key = (year, str(ev.get("date") or ""))
            if last_key and key < last_key:
                r.warn(w, "events are not in chronological order")
            last_key = key

        track = ev.get("track")
        if isinstance(track, str) and track not in ALLOWED_TRACKS:
            r.err(w, f"track '{track}' is not a known lesson or branch ID")

        era = ev.get("era")
        if isinstance(era, str):
            if era not in eras:
                r.err(w, f"era '{era}' is not defined in $.eras")
            elif isinstance(year, int) and not eras[era]["start"] <= year <= eras[era]["end"]:
                r.err(w, f"year {year} is outside era '{era}' ({eras[era]['start']}-{eras[era]['end']})")

        kid = ev.get("why_it_mattered_kid")
        if isinstance(kid, str) and len(re.findall(r"[.!?](?:\s|$)", kid.strip())) > 1:
            r.warn(w, "why_it_mattered_kid should be one sentence")

        dd = ev.get("deeper_dive")
        if isinstance(dd, list):
            if not 2 <= len(dd) <= 4:
                r.err(w, f"deeper_dive must have 2-4 paragraphs (has {len(dd)})")
            if not all(isinstance(p, str) and p.strip() for p in dd):
                r.err(w, "deeper_dive paragraphs must be non-empty strings")

        ppl = ev.get("people")
        if isinstance(ppl, list):
            if not ppl:
                r.err(w, "people must not be empty")
            for j, pp in enumerate(ppl):
                pw = f"{w}.people[{j}]"
                if not isinstance(pp, dict):
                    r.err(pw, "must be an object with name and role")
                    continue
                if nonempty_str(r, pw, pp, "name"):
                    named.add(pp["name"])
                    if pp["name"] not in people:
                        r.err(pw, f"'{pp['name']}' has no entry in $.people")
                nonempty_str(r, pw, pp, "role")

        check_link_list(r, w, ev.get("sources", []), ("title", "url"), "sources")
        if isinstance(ev.get("sources"), list) and not ev["sources"]:
            r.warn(w, "no sources listed")
        check_link_list(r, w, ev.get("watch", []), ("title", "channel", "url"), "watch")

        reads = ev.get("read", [])
        check_link_list(r, w, reads, ("title", "author", "isbn13", "url"), "read")
        if isinstance(reads, list):
            for j, b in enumerate(reads):
                if not isinstance(b, dict):
                    continue
                bw = f"{w}.read[{j}]"
                isbn = str(b.get("isbn13", ""))
                if not isbn13_ok(isbn):
                    r.err(bw, f"invalid ISBN-13 '{isbn}'")
                if not isinstance(b.get("year"), int):
                    r.err(bw, "'year' must be an int")
                if not isinstance(b.get("kid_friendly"), bool):
                    r.err(bw, "'kid_friendly' must be true or false")
                url = b.get("url", "")
                expected = f"https://www.amazon.com/s?k={isbn}"
                if url != expected:
                    r.err(bw, f"book url should be the plain search link {expected}")
                q = parse_qs(urlparse(url).query)
                if set(q) - {"k"}:
                    r.err(bw, f"book url has extra (possibly affiliate) parameters: {sorted(set(q) - {'k'})}")

    for name in people:
        if name not in named:
            r.warn(f"$.people[{name!r}]", "is not named in any event")

    # ---- every URL must be https
    for path, url in walk_urls(data):
        if not url.lower().startswith("https://"):
            r.err(path, f"URL is not https: {url}")


def js_text(data) -> str:
    return ("/* Generated from events.json by validate.py --write-js. Do not edit by hand. */\n"
            + JS_PREFIX + json.dumps(data, ensure_ascii=False, indent=1) + ";\n")


def check_js(json_path: Path, data, r: Report):
    js_path = json_path.with_suffix(".js")
    if not js_path.exists():
        r.err(str(js_path), "missing (run: python3 validate.py --write-js)")
        return
    text = js_path.read_text(encoding="utf-8")
    start = text.find(JS_PREFIX)
    if start < 0:
        r.err(str(js_path), f"does not contain '{JS_PREFIX.strip()}'")
        return
    body = text[start + len(JS_PREFIX):].strip()
    if body.endswith(";"):
        body = body[:-1]
    try:
        js_data = json.loads(body)
    except json.JSONDecodeError as e:
        r.err(str(js_path), f"could not parse embedded data: {e}")
        return
    if js_data != data:
        r.err(str(js_path), "is out of date with events.json (run: python3 validate.py --write-js)")


def main(argv):
    write_js = "--write-js" in argv
    args = [a for a in argv[1:] if not a.startswith("--")]
    json_path = Path(args[0]) if args else Path(__file__).resolve().parent / "data" / "events.json"
    try:
        data = json.loads(json_path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        print(f"ERROR   could not read {json_path}: {e}")
        return 1

    if write_js:
        json_path.with_suffix(".js").write_text(js_text(data), encoding="utf-8")
        print(f"wrote {json_path.with_suffix('.js')}")

    r = Report()
    validate(data, r)
    check_js(json_path, data, r)

    for line in r.warnings + r.errors:
        print(line)
    events = data.get("events", []) if isinstance(data, dict) else []
    n_links = sum(1 for _ in walk_urls(data))
    n_books = sum(len(e.get("read", [])) for e in events if isinstance(e, dict))
    n_videos = sum(len(e.get("watch", [])) for e in events if isinstance(e, dict))
    print(f"\n{len(events)} events, {len(data.get('people', {}))} people, "
          f"{n_links} URLs ({n_videos} video entries, {n_books} book entries), "
          f"{len(r.warnings)} warning(s), {len(r.errors)} error(s)")
    print("OK" if not r.errors else "FAILED")
    return 1 if r.errors else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
