#!/usr/bin/env python3
"""
Bakes calibrate.html into one file that runs from anywhere.

The calibration page normally lives on the site and loads data/calib.js and
six anatomy plates over the network. That is fine once it is deployed — but
the whole point of it is to unblock Ting *now*, and waiting for a deploy to
fix wrong point positions is the wrong order. So this inlines the data and
embeds every plate as a data: URI, and the result is a single file she can
open from a message, on a phone or a laptop, with no server involved.

Identical behaviour, identical output text. Only the plumbing changes.

    python3 tools/mkcalibstandalone.py    # -> build/acuting-point-calibration.html
"""
import base64, os, re, sys

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC  = os.path.join(HERE, "calibrate.html")
DATA = os.path.join(HERE, "data", "calib.js")
# Not in the site root: everything in the root is a page, and the whole test
# suite walks *.html there. A 1.8 MB build artifact that has no analytics and
# inlines its own data is not a page — it is a file to hand someone.
OUT  = os.path.join(HERE, "build", "acuting-point-calibration.html")

html = open(SRC, encoding="utf-8").read()
js   = open(DATA, encoding="utf-8").read()

# every plate the worklist names, turned into a data: URI
plates = sorted(set(re.findall(r'img:"(art/[^"]+)"', js)))
for rel in plates:
    path = os.path.join(HERE, rel)
    if not os.path.exists(path):
        sys.exit("missing plate: " + rel)
    b64 = base64.b64encode(open(path, "rb").read()).decode()
    uri = "data:image/jpeg;base64," + b64
    js   = js.replace('"%s"' % rel, '"%s"' % uri)
    html = html.replace('"%s"' % rel, '"%s"' % uri)

# bump.py stamps ?v=N onto every local script src, so match the tag with a
# pattern rather than a literal. A silent miss here produced a 20 KB file that
# looked fine and loaded nothing — hence the assertion underneath.
tag = re.compile(r'<script src="data/calib\.js(?:\?v=\d+)?"></script>')
if not tag.search(html):
    sys.exit("could not find the calib.js script tag in calibrate.html")
html = tag.sub(lambda m: "<script>\n/* data/calib.js, inlined — see tools/mkcalibstandalone.py */\n"
               + js.replace("\\", "\\\\") + "\n</script>", html, count=1)

# the plate paths also appear in the result text; keep that readable rather
# than printing a megabyte of base64 back at her
html = html.replace('p.img.replace("art/body-", "").replace(".jpg", "")',
                    'plateName(p.img)')
html = html.replace('k.replace("art/body-", "").replace(".jpg", "")',
                    'plateName(k)')
html = html.replace("const $    = id => document.getElementById(id);",
                    "const $    = id => document.getElementById(id);\n"
                    "const NAMES = " + repr({}).replace("'", '"') + ";\n"
                    "AG_CALIB.forEach(p => { NAMES[p.img] = NAMES[p.img] || p.plateName; });\n"
                    "function plateName(u){ return NAMES[u] || 'plate'; }")

# stamp each entry with a readable plate name before the URIs replaced them
for rel in plates:
    short = rel.replace("art/body-", "").replace(".jpg", "")
    b64 = base64.b64encode(open(os.path.join(HERE, rel), "rb").read()).decode()
    uri = "data:image/jpeg;base64," + b64
    html = html.replace('img:"%s",' % uri, 'img:"%s", plateName:"%s",' % (uri, short))

os.makedirs(os.path.dirname(OUT), exist_ok=True)
if "AG_CALIB" not in html or html.count("data:image/jpeg;base64,") < len(plates):
    sys.exit("the standalone did not inline its data — refusing to write a broken file")
open(OUT, "w", encoding="utf-8").write(html)
print("  build/%s   %.0f KB   %d plates embedded" % (os.path.basename(OUT),
         os.path.getsize(OUT) / 1024, len(plates)))
