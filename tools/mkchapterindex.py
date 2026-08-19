#!/usr/bin/env python3
"""
Builds data/chapter-index.js from data/chapters.js.

Why: index.html only needs each chapter's number, title and pattern to draw
the story button and the chapter index — but loading data/chapters.js to get
them costs ~73 KB gzipped on the very first screen of the app, on a phone,
before the player has done anything. The index is about 1 KB.

Generated file — never edit it by hand. Run this after touching chapters.js:
    python3 tools/mkchapterindex.py
/tmp/tchindex.js fails if the two drift apart.
"""
import json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC  = os.path.join(HERE, "data", "chapters.js")
OUT  = os.path.join(HERE, "data", "chapter-index.js")

# read the data through node so the parser is the same one the browser uses
node = subprocess.run(
    ["node", "-e",
     "global.window={};require(process.argv[1]);"
     "const C=window.AG_CHAPTERS;"
     "const ids=Object.keys(C).sort((a,b)=>(+a)-(+b));"
     "console.log(JSON.stringify(ids.map(id=>({id:id,title:C[id].title,"
     "titleZh:C[id].titleZh,pattern:C[id].pattern||''}))));",
     SRC],
    capture_output=True, text=True)
if node.returncode:
    sys.exit("could not read chapters.js:\n" + node.stderr)

rows = json.loads(node.stdout)

lines = [
    "/* ═══════════════════════════════════════════════════════════════",
    "   Apricot Grove 杏林行 · data/chapter-index.js",
    "   GENERATED — do not edit. Run tools/mkchapterindex.py after any",
    "   change to data/chapters.js.",
    "",
    "   Just the spine of each chapter, so the town can draw the story",
    "   button and the chapter list without downloading every case.",
    "   ═══════════════════════════════════════════════════════════════ */",
    "window.AG_CHAPTER_INDEX = [",
]
for i, r in enumerate(rows):
    comma = "," if i < len(rows) - 1 else ""
    lines.append(
        ' {{id:"{id}", title:"{t}", titleZh:"{tz}", pattern:"{p}"}}{c}'.format(
            id=r["id"],
            t=r["title"].replace('"', '\\"'),
            tz=(r["titleZh"] or "").replace('"', '\\"'),
            p=(r["pattern"] or "").replace('"', '\\"'),
            c=comma))
lines.append("];")
open(OUT, "w", encoding="utf-8").write("\n".join(lines) + "\n")
print("wrote %s — %d chapters, %d bytes" % (
    os.path.relpath(OUT, HERE), len(rows), os.path.getsize(OUT)))
