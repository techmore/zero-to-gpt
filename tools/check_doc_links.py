#!/usr/bin/env python3
"""Check relative links between the repo's docs. Standard library only.

    python3 tools/check_doc_links.py

For every Markdown file (and every HTML file under site/), find relative links
(`[text](path)`, `[ref]: path`, `<a href="path">`) and check that:
  * the target file or folder exists, and
  * a `#fragment` pointing into a Markdown file matches a heading
    (GitHub-style slug) or an explicit `<a id="...">` in that file.

External links (http, https, mailto) are skipped: site/timeline/check_links.py
checks those. Links inside code blocks and inline code are ignored, as are
links built at runtime by JavaScript. Exits 1 if anything is broken.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKIP_DIRS = {".git", "__pycache__", ".venv", "node_modules", ".ipynb_checkpoints"}

MD_LINK = re.compile(r"!?\[(?:[^\[\]]|\[[^\]]*\])*\]\(\s*<?([^)\s>]+)>?(?:\s+\"[^\"]*\")?\s*\)")
MD_REF = re.compile(r"^\s{0,3}\[[^\]]+\]:\s*<?(\S+?)>?(?:\s+.*)?$", re.M)
HTML_HREF = re.compile(r"""<a\b[^>]*?\bhref\s*=\s*["']([^"']+)["']""", re.I)
HTML_ID = re.compile(r"""<a\b[^>]*?\b(?:id|name)\s*=\s*["']([^"']+)["']""", re.I)
FENCE = re.compile(r"^(\s*)(```|~~~).*?^\1\2[^\n]*$", re.M | re.S)
INLINE_CODE = re.compile(r"`[^`\n]*`")
HEADING = re.compile(r"^#{1,6}\s+(.*?)\s*#*\s*$", re.M)


def iter_files():
    for p in sorted(ROOT.rglob("*")):
        if any(part in SKIP_DIRS for part in p.relative_to(ROOT).parts):
            continue
        if p.is_file() and (p.suffix == ".md" or (p.suffix == ".html" and "site" in p.relative_to(ROOT).parts)):
            yield p


def strip_code(text: str) -> str:
    text = FENCE.sub(lambda m: "\n" * m.group(0).count("\n"), text)
    return INLINE_CODE.sub("", text)


def github_slug(heading: str) -> str:
    s = re.sub(r"<[^>]+>", "", heading)                      # inline HTML
    s = re.sub(r"!?\[([^\]]*)\]\([^)]*\)", r"\1", s)          # links -> text
    s = s.replace("`", "").lower()
    s = re.sub(r"[^\w\- ]", "", s)                            # drop punctuation + emoji
    return s.replace(" ", "-")


_anchor_cache: dict[Path, set[str]] = {}


def anchors(md: Path) -> set[str]:
    if md not in _anchor_cache:
        raw = md.read_text(encoding="utf-8")
        found: set[str] = set(HTML_ID.findall(raw))
        counts: dict[str, int] = {}
        for h in HEADING.findall(strip_code_fences_only(raw)):
            base = github_slug(h)
            n = counts.get(base, 0)
            found.add(base if n == 0 else f"{base}-{n}")
            counts[base] = n + 1
        _anchor_cache[md] = found
    return _anchor_cache[md]


def strip_code_fences_only(text: str) -> str:
    return FENCE.sub(lambda m: "\n" * m.group(0).count("\n"), text)


def targets(path: Path, text: str):
    if path.suffix == ".md":
        body = strip_code(text)
        yield from MD_LINK.findall(body)
        yield from MD_REF.findall(body)
        yield from HTML_HREF.findall(body)
    else:  # HTML: static hrefs only (skip ones assembled in <script>)
        body = re.sub(r"<script\b.*?</script>", "", text, flags=re.S | re.I)
        yield from HTML_HREF.findall(body)
        yield from re.findall(r"""data-md-href\s*=\s*["']([^"']+)["']""", body)


def check() -> int:
    problems: list[str] = []
    n_links = 0
    n_files = 0
    for f in iter_files():
        n_files += 1
        text = f.read_text(encoding="utf-8")
        for target in targets(f, text):
            if re.match(r"^[a-z][a-z0-9+.-]*:", target, re.I) or target.startswith("//"):
                continue  # http:, https:, mailto:, data:, javascript:
            n_links += 1
            path_part, _, frag = target.partition("#")
            where = f.relative_to(ROOT)
            if not path_part:
                dest = f
            else:
                dest = (f.parent / path_part).resolve()
                if not dest.exists():
                    problems.append(f"{where}: missing file  -> {target}")
                    continue
            if frag and dest.is_file() and dest.suffix == ".md" and frag not in anchors(dest):
                problems.append(f"{where}: missing anchor -> {target}")
    for p in problems:
        print("✗", p)
    print(f"{n_files} files, {n_links} relative links checked, {len(problems)} broken")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(check())
