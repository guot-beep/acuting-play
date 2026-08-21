#!/usr/bin/env python3
"""
Generates the small index files the town and the progress page read.

data/chapter-index.js   ~2 KB   from data/chapters.js    (192 KB)
data/practice-index.js  ~2 KB   from data/practice.js    (140 KB) + data/sorts.js
data/chapters/NN.js     ~7 KB each   one chapter per file
data/practice/<id>.js   ~5 KB each   one deck per file

A player reads one chapter and plays one deck at a time. Shipping all ten
chapters to read chapter 7, or all eleven decks to answer eleven questions
about the pulse, is most of the weight of those pages for nothing.

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


# ── one file per chapter, one per practice deck ─────────────────────
# The whole-file sources stay the authoring format; these are built from them,
# so there is still exactly one place to edit a chapter.
import shutil

def split(src, glob_name, out_dir, keys_expr, item_expr, global_name, head_note):
    d = os.path.join(D, out_dir)
    if os.path.isdir(d):
        shutil.rmtree(d)
    os.makedirs(d)
    keys = read(src, keys_expr)
    for k in keys:
        body = subprocess.run(
            ["node", "-e",
             "global.window={};require(process.argv[1]);"
             "var k=process.argv[2];"
             "process.stdout.write(JSON.stringify(%s));" % item_expr,
             os.path.join(D, src), k],
            capture_output=True, text=True)
        if body.returncode:
            sys.exit("could not split %s[%s]:\n%s" % (src, k, body.stderr))
        txt = ("/* GENERATED from data/%s by tools/mkindexes.py — do not edit.\n"
               "   %s */\n"
               "window.%s = window.%s || {};\n"
               "window.%s[%s] = %s;\n"
               % (src, head_note, global_name, global_name, global_name,
                  json.dumps(k), body.stdout))
        open(os.path.join(d, "%s.js" % k), "w", encoding="utf-8").write(txt)
    total = sum(os.path.getsize(os.path.join(d, f)) for f in os.listdir(d))
    print("  data/%s/  %d files, %d KB total, biggest %d KB"
          % (out_dir, len(keys), total // 1024,
             max(os.path.getsize(os.path.join(d, f)) for f in os.listdir(d)) // 1024))

split("chapters.js", None, "chapters",
      "Object.keys(window.AG_CHAPTERS)",
      "window.AG_CHAPTERS[k]", "AG_CHAPTERS",
      "chapter.html loads only the one it was asked for")
split("practice.js", None, "practice",
      "Object.keys(window.AG_PRACTICE)",
      "window.AG_PRACTICE[k]", "AG_PRACTICE",
      "practice.html loads only the deck in the url")
