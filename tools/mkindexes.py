#!/usr/bin/env python3
"""
Generates the small index files the town and the progress page read.

data/chapter-index.js   ~2 KB   from data/chapters.js    (192 KB)
data/practice-index.js  ~1 KB   from data/practice.js    (140 KB) + data/sorts.js

Neither index.html nor progress.html needs the content of a chapter or a
practice deck — only its title and shape. Loading the full files on the first
screen cost ~73 KB gzipped for nothing.

GENERATED FILES — do not hand-edit. Run after touching the sources:
    python3 tools/mkindexes.py
tests/tchindex.js fails if they drift.
"""
import json, os, subprocess, sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(HERE, "data")


def read(src, expr):
    r = subprocess.run(["node", "-e",
                        "global.window={};require(process.argv[1]);console.log(JSON.stringify(%s));" % expr,
                        os.path.join(D, src)], capture_output=True, text=True)
    if r.returncode:
        sys.exit("could not read %s:\n%s" % (src, r.stderr))
    return json.loads(r.stdout)


def esc(v):
    return (v or "").replace("\\", "\\\\").replace('"', '\\"')


HEAD = ("/* ═══════════════════════════════════════════════════════════════\n"
        "   Apricot Grove 杏林行 · data/%s\n"
        "   GENERATED — do not edit. Run tools/mkindexes.py after changing\n"
        "   %s.\n\n"
        "   %s\n"
        "   ═══════════════════════════════════════════════════════════════ */\n")

# ── chapters ────────────────────────────────────────────────────────
rows = read("chapters.js",
            "(function(C){var ids=Object.keys(C).sort(function(a,b){return (+a)-(+b)});"
            "return ids.map(function(id){return {id:id,title:C[id].title,titleZh:C[id].titleZh,"
            "pattern:C[id].pattern||''}})})(window.AG_CHAPTERS)")
out = [HEAD % ("chapter-index.js", "data/chapters.js",
               "Just the spine of each chapter, so the town and the progress\n"
               "   page can list them without downloading every case."),
       "window.AG_CHAPTER_INDEX = ["]
for i, r in enumerate(rows):
    out.append(' {id:"%s", title:"%s", titleZh:"%s", pattern:"%s"}%s'
               % (r["id"], esc(r["title"]), esc(r["titleZh"]), esc(r["pattern"]),
                  "," if i < len(rows) - 1 else ""))
out.append("];")
open(os.path.join(D, "chapter-index.js"), "w", encoding="utf-8").write("\n".join(out) + "\n")
print("  data/chapter-index.js   %d chapters" % len(rows))

# ── practice decks + sorting sets ───────────────────────────────────
decks = read("practice.js",
             "Object.keys(window.AG_PRACTICE).map(function(k){var d=window.AG_PRACTICE[k];"
             "return {id:k,kind:'practice',title:d.title,titleZh:d.titleZh,axis:d.axis,n:d.items.length}})")
sorts = read("sorts.js",
             "Object.keys(window.AG_SORTS).map(function(k){var d=window.AG_SORTS[k];"
             "return {id:k,kind:'sort',title:d.title.en,titleZh:d.title.zh,axis:d.axis,n:d.items.length}})")
rows = decks + sorts
out = [HEAD % ("practice-index.js", "data/practice.js or data/sorts.js",
               "Title, axis and question count for every practice deck and\n"
               "   sorting set — enough to draw a progress list, 1 KB instead of 160."),
       "window.AG_PRACTICE_INDEX = ["]
for i, r in enumerate(rows):
    out.append(' {id:"%s", kind:"%s", axis:"%s", title:"%s", titleZh:"%s", n:%d}%s'
               % (r["id"], r["kind"], r["axis"], esc(r["title"]), esc(r["titleZh"]), r["n"],
                  "," if i < len(rows) - 1 else ""))
out.append("];")
open(os.path.join(D, "practice-index.js"), "w", encoding="utf-8").write("\n".join(out) + "\n")
print("  data/practice-index.js  %d practice decks + %d sorting sets" % (len(decks), len(sorts)))
