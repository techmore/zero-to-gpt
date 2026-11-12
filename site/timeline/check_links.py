#!/usr/bin/env python3
"""Re-verify every link in data/events.json and rewrite LINKS-VERIFIED.md (standard library only).

    python3 check_links.py            # check all links, write LINKS-VERIFIED.md
    python3 check_links.py --dry-run  # check, print, but don't write the report

Methods, by link type:
  * YouTube video  -> YouTube oEmbed API (https://www.youtube.com/oembed?url=...): exists and is embeddable;
                      title and channel compared with the data.
  * doi.org link   -> doi.org handle API (https://doi.org/api/handles/<doi>): DOI is registered and resolves.
  * Amazon search  -> Amazon blocks automated requests, so the ISBN-13 in the link is looked up in
                      Open Library (https://openlibrary.org/isbn/<isbn>.json) and the checksum is checked.
  * anything else  -> HTTPS GET with redirects followed; any 2xx final status counts as verified.
Exit status is 1 if any link fails. Network access is required.
"""
import concurrent.futures as cf
import datetime as dt
import json
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
DATA = HERE / "data" / "events.json"
REPORT = HERE / "LINKS-VERIFIED.md"
UA = {"User-Agent": "Mozilla/5.0 (compatible; zero-to-gpt-link-checker/1.0)"}


def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.status, r.geturl(), r.read()


def isbn13_ok(isbn):
    return len(isbn) == 13 and isbn.isdigit() and sum(int(c) * (1 if i % 2 == 0 else 3) for i, c in enumerate(isbn)) % 10 == 0


def check(item):
    url, kind, expect = item["url"], item["kind"], item.get("expect", {})
    res = {"url": url, "kind": kind, "ok": False, "method": "", "detail": ""}
    for attempt in range(3):
        try:
            if kind == "youtube":
                res["method"] = "YouTube oEmbed"
                q = "https://www.youtube.com/oembed?format=json&url=" + urllib.parse.quote(url, safe="")
                _, _, body = fetch(q)
                d = json.loads(body)
                res["ok"] = True
                res["detail"] = f"\"{d.get('title')}\" by {d.get('author_name')}"
                if expect.get("title") and expect["title"] != d.get("title"):
                    res["detail"] += " (title in data differs)"
            elif kind == "doi":
                res["method"] = "doi.org handle API"
                doi = url.split("doi.org/", 1)[1]
                _, _, body = fetch("https://doi.org/api/handles/" + urllib.parse.quote(doi, safe="/()"))
                d = json.loads(body)
                res["ok"] = d.get("responseCode") == 1
                target = next((v["data"]["value"] for v in d.get("values", []) if v.get("type") == "URL"), "")
                res["detail"] = "resolves to " + urllib.parse.urlparse(target).netloc if target else f"responseCode {d.get('responseCode')}"
            elif kind == "isbn":
                res["method"] = "ISBN checksum + Open Library lookup"
                isbn = urllib.parse.parse_qs(urllib.parse.urlparse(url).query).get("k", [""])[0]
                if not isbn13_ok(isbn):
                    res["detail"] = "bad ISBN-13 checksum"
                    return res
                _, _, body = fetch(f"https://openlibrary.org/isbn/{isbn}.json")
                d = json.loads(body)
                res["ok"] = True
                res["detail"] = f"Open Library: \"{' '.join(str(d.get('title', '')).split())}\""
            else:
                res["method"] = "HTTPS GET"
                status, final, _ = fetch(url)
                res["ok"] = 200 <= status < 300
                res["detail"] = f"HTTP {status}" + (f" via {urllib.parse.urlparse(final).netloc}" if urllib.parse.urlparse(final).netloc != urllib.parse.urlparse(url).netloc else "")
            return res
        except urllib.error.HTTPError as e:
            res["detail"] = f"HTTP {e.code}"
            if e.code in (429, 500, 502, 503, 504) and attempt < 2:
                time.sleep(3 * (attempt + 1))
                continue
            return res
        except Exception as e:  # network errors, bad JSON
            res["detail"] = type(e).__name__ + ": " + str(e)[:80]
            if attempt < 2:
                time.sleep(2)
                continue
            return res
    return res


def collect(data):
    items = {}
    for ev in data["events"]:
        for v in ev.get("watch", []):
            u = v["url"]
            host = urllib.parse.urlparse(u).netloc
            kind = "youtube" if host.endswith("youtube.com") or host == "youtu.be" else "web"
            items.setdefault(u, {"url": u, "kind": kind, "expect": {"title": v.get("title")}, "events": [], "label": v.get("title")})["events"].append(ev["id"])
        for s in ev.get("sources", []):
            u = s["url"]
            kind = "doi" if urllib.parse.urlparse(u).netloc == "doi.org" else "web"
            items.setdefault(u, {"url": u, "kind": kind, "events": [], "label": s.get("title")})["events"].append(ev["id"])
        for b in ev.get("read", []):
            u = b["url"]
            items.setdefault(u, {"url": u, "kind": "isbn", "events": [], "label": f"{b.get('title')} ({b.get('isbn13')})"})["events"].append(ev["id"])
    return list(items.values())


def md_escape(s):
    return str(s).replace("|", "\\|").replace("\n", " ")


def main(argv):
    data = json.loads(DATA.read_text(encoding="utf-8"))
    items = collect(data)
    with cf.ThreadPoolExecutor(6) as ex:
        results = list(ex.map(check, items))
    for it, r in zip(items, results):
        r["events"] = it["events"]
        r["label"] = it.get("label") or ""
    ok = [r for r in results if r["ok"]]
    bad = [r for r in results if not r["ok"]]
    for r in bad:
        print("FAILED", r["url"], "-", r["detail"])
    print(f"{len(ok)} verified, {len(bad)} failed, {len(results)} unique links")

    if "--dry-run" not in argv:
        today = dt.date.today().isoformat()
        order = {"youtube": 0, "doi": 1, "web": 2, "isbn": 3}
        titles = {"youtube": "Videos", "doi": "Papers by DOI", "web": "Web pages and PDFs", "isbn": "Books (Amazon search links)"}
        lines = [
            "# Links verified",
            "",
            f"Last checked: **{today}**, by `python3 check_links.py` (Python standard library only).",
            "",
            f"**{len(ok)} of {len(results)} unique links verified, {len(bad)} failed.** Links that could not be verified were left out of `data/events.json` (see below).",
            "",
            "## Methods",
            "",
            "- **YouTube videos:** the YouTube oEmbed API (`https://www.youtube.com/oembed?url=…&format=json`) must return the video. The title and channel in the data are copied from that response.",
            "- **DOIs:** the doi.org handle API (`https://doi.org/api/handles/<doi>`) must report the DOI as registered. When the data was assembled, each DOI's title, year and authors were also matched against Crossref (`https://api.crossref.org/works/<doi>`). Publisher sites often block scripts, so the publisher landing page itself is not fetched.",
            "- **Books:** Amazon blocks automated requests, so book links are not fetched. Each link is a plain search URL built from the ISBN-13 (`https://www.amazon.com/s?k=<ISBN>`, no affiliate tag). The ISBN must pass the ISBN-13 checksum and be found by Open Library (`https://openlibrary.org/isbn/<ISBN>.json`).",
            "- **Other pages (arXiv, PDFs, GitHub, nobelprize.org…):** an HTTPS GET, following redirects, must end with a 2xx status. arXiv titles, dates and authors were also matched against each abstract page's citation metadata when the data was assembled.",
            "",
        ]
        if bad:
            lines += ["## Failed on this run", "", "| Link | Method | Result | Used in |", "|---|---|---|---|"]
            for r in bad:
                lines.append(f"| {md_escape(r['url'])} | {r['method']} | {md_escape(r['detail'])} | {', '.join(r['events'])} |")
            lines.append("")
        for kind in sorted(titles, key=order.get):
            rows = [r for r in ok if r["kind"] == kind]
            if not rows:
                continue
            lines += [f"## {titles[kind]} ({len(rows)})", "", "| Link | What | Method | Result | Used in |", "|---|---|---|---|---|"]
            for r in sorted(rows, key=lambda r: r["url"]):
                lines.append(f"| {md_escape(r['url'])} | {md_escape(r['label'])} | {r['method']} | {md_escape(r['detail'])} | {', '.join(r['events'])} |")
            lines.append("")
        # Keep the hand-maintained section about candidates that were dropped.
        marker = "## Candidates dropped"
        old = REPORT.read_text(encoding="utf-8") if REPORT.exists() else ""
        if marker in old:
            lines += [old[old.index(marker):].strip(), ""]
        REPORT.write_text("\n".join(lines), encoding="utf-8")
        print("wrote", REPORT)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
