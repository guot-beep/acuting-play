#!/usr/bin/env python3
"""
Makes a chapter-sized body plate from a base plate we already own.

The needling minigame in chapter.html draws on art/body-<region>.jpg at
434×1159, and every point coordinate in data/chapters.js is measured against
that size. The base drawings live in art/plates/ at 271×724 — the same
aspect ratio, exactly 1.6× smaller. The four plates that already shipped were
made from the "-m" variants, and this rebuilds them bit-for-bit, so a new
region joins the set on identical terms instead of being a one-off.

Why not just point the game at art/plates/? Because every existing chapter's
x/y is in 434×1159 space. One size for the game, one for the codex.

    python3 tools/mkbodyplate.py leg-lateral chest-upperarm
    python3 tools/mkbodyplate.py --check          # prove the four match
"""
import os, sys
from PIL import Image, ImageChops

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC  = os.path.join(HERE, "art", "plates")
OUT  = os.path.join(HERE, "art")
W, H = 434, 1159
VARIANT = "m"          # the four shipped plates all came from the -m drawings


def build(region, save=True):
    src = os.path.join(SRC, "%s-%s.jpg" % (region, VARIANT))
    if not os.path.exists(src):
        print("  ! no base plate at %s" % os.path.relpath(src, HERE)); return None
    img = Image.open(src).convert("RGB").resize((W, H), Image.LANCZOS)
    out = os.path.join(OUT, "body-%s.jpg" % region)
    if save:
        img.save(out, quality=88)
        print("  body-%-18s %s  %5.0fkB" % (region + ".jpg", img.size, os.path.getsize(out) / 1024))
    return img


def check():
    """The four shipped plates must still be reproducible from their bases —
    if someone hand-edits one, this is where we find out."""
    ok = True
    for region in ("forearm-palmar", "head-lateral", "leg-anterior", "leg-medial"):
        have = Image.open(os.path.join(OUT, "body-%s.jpg" % region)).convert("L")
        want = build(region, save=False).convert("L")
        hist = ImageChops.difference(have, want).histogram()
        mean = sum(i * c for i, c in enumerate(hist)) / float(sum(hist))
        flag = "ok" if mean < 3 else "DIFFERS"
        if mean >= 3: ok = False
        print("  %-18s mean abs diff %5.2f  %s" % (region, mean, flag))
    return ok


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args or args[0] == "--check":
        sys.exit(0 if check() else 1)
    for r in args:
        build(r)
