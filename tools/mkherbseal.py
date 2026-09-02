#!/usr/bin/env python3
"""
Draws a printed drawer-label to stand in for an herb portrait we do not have.

The Herb Codex needs a picture per herb, and an image model asked for "a
botanical study of Prepared Rehmannia" will happily produce a confident,
wrong-looking root. Ting's brief already settles the trade:

    「如果哪一張你覺得『好像不太對但說不上來』，那就先不要放上去 ——
      寧可先用文字印版，也不要教錯本草。」

So a new herb ships with the thing an apothecary actually has on the drawer:
a label. It is honest — it claims to be lettering, not a specimen — and it
sits in the same warm paper world as the painted cards.

Output is art/herb-<id>.jpg, the ordinary portrait filename, so
tools/mkherbcard.py composes the codex card from it with no special case,
and dropping a real painting in at that path later is the entire upgrade.

    python3 tools/mkherbseal.py huangqi zhizi        # or no args for all
                                                     # herbs with no portrait
"""
import os, sys, json, subprocess
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART  = os.path.join(HERE, "art")

SIZE   = 1000
PAPER  = (238, 228, 203)
BOARD  = (72, 61, 46)          # the lacquered label
IVORY  = (240, 232, 212)
RULE   = (166, 148, 116)
TERRA  = (156, 71, 52)         # the vermilion of a seal
INK_SOFT = (104, 92, 72)

CJK    = "/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc"
CJK_TC = 3                     # JP, KR, SC, TC, HK in that order


def cjk(size):
    return ImageFont.truetype(CJK, size, index=CJK_TC)


def latin(size, bold=False):
    names = (["LiberationSerif-Bold.ttf", "DejaVuSerif-Bold.ttf"] if bold
             else ["LiberationSerif-Regular.ttf", "DejaVuSerif.ttf"])
    for root, _, files in os.walk("/usr/share/fonts"):
        for n in names:
            if n in files:
                return ImageFont.truetype(os.path.join(root, n), size)
    return ImageFont.load_default()


def herbs():
    js = os.path.join(HERE, "data", "herbs.js")
    out = subprocess.run(
        ["node", "-e",
         "global.window={};require(%r);process.stdout.write(JSON.stringify(window.AG_HERBS))" % js],
        capture_output=True, text=True, check=True)
    return {h["id"]: h for h in json.loads(out.stdout)}


def build(h):
    card = Image.new("RGB", (SIZE, SIZE), PAPER)
    d = ImageDraw.Draw(card)

    # ── the label board: a tall lacquered plate, as on an apothecary drawer ──
    L, R, T, B = 348, 652, 132, 868
    d.rounded_rectangle([L, T, R, B], 22, fill=BOARD)
    d.rounded_rectangle([L + 13, T + 13, R - 13, B - 13], 14, outline=IVORY, width=2)

    # ── the name, set vertically, the way a drawer is actually labelled ──
    name = h["zh"]
    size = 132 if len(name) <= 2 else 108 if len(name) == 3 else 84
    f = cjk(size)
    gap  = int(size * 1.16)
    top  = (T + B) // 2 - (len(name) * gap) // 2 - 34
    for i, ch in enumerate(name):
        d.text(((L + R) // 2, top + i * gap + gap // 2), ch,
               font=f, fill=IVORY, anchor="mm")

    # ── pinyin under it, small, so the label reads aloud ──
    fp = latin(30)
    d.text(((L + R) // 2, B - 128), h["py"], font=fp, fill=(206, 196, 174), anchor="mm")
    d.line([L + 74, B - 100, R - 74, B - 100], fill=(150, 136, 112), width=1)

    # ── a small vermilion seal, bottom right of the board ──
    sx, sy, s = R - 96, B - 84, 56
    d.rounded_rectangle([sx, sy, sx + s, sy + s], 6, fill=TERRA)
    d.text((sx + s // 2, sy + s // 2 + 1), "杏", font=cjk(38), fill=(246, 238, 222), anchor="mm")

    # ── a line of paper text under the board, so it reads as a printed plate ──
    d.text((SIZE // 2, B + 54), "PRINTED PLATE  ·  文字印版",
           font=latin(21), fill=INK_SOFT, anchor="mm")
    d.text((SIZE // 2, B + 84), "awaiting a painted portrait  待補圖",
           font=latin(19), fill=(150, 138, 116), anchor="mm")

    out = os.path.join(ART, "herb-%s.jpg" % h["id"])
    card.save(out, quality=90)
    print("  herb-%-14s %s  (printed plate)" % (h["id"] + ".jpg", card.size))
    return out


if __name__ == "__main__":
    H = herbs()
    ids = sys.argv[1:]
    if not ids:
        ids = [i for i, h in sorted(H.items())
               if not os.path.exists(os.path.join(HERE, h["img"]))]
        if not ids:
            print("  every herb already has a portrait — nothing to draw")
    for i in ids:
        if i not in H:
            print("  ! no herb called %r in data/herbs.js" % i); continue
        build(H[i])
