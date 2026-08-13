#!/usr/bin/env python3
"""
Apricot Grove 杏林行 · app / bookmark icon generator

One seal-plate mark: warm ivory paper, a soft apricot-gold ring, and the
character 杏 (apricot) cut like a carved seal in deep brown, and a
terracotta chop at the foot. Reads at 16px and still looks like a mark at 512px.

Rebuild:  python3 mkicon.py
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "art")
os.makedirs(OUT, exist_ok=True)

PAPER      = (244, 237, 220)
PAPER_DEEP = (232, 221, 197)
INK        = (58, 55, 48)
GOLD       = (176, 141, 62)
SAGE       = (124, 143, 111)
SEAL       = (168, 74, 55)

FONT = "/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc"


def rounded(size, radius_ratio, fill):
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, 0, size - 1, size - 1],
                        radius=int(size * radius_ratio), fill=fill)
    return im


def build(size, radius_ratio=0.22, bleed=False):
    S = size * 4                      # supersample, then downscale
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)

    r = 0 if bleed else int(S * radius_ratio)
    d.rounded_rectangle([0, 0, S - 1, S - 1], radius=r, fill=PAPER + (255,))

    # warm vignette so the plate does not read as flat white
    vig = Image.new("L", (S, S), 0)
    ImageDraw.Draw(vig).ellipse([-S * .25, -S * .35, S * 1.25, S * 1.05], fill=90)
    im = Image.composite(Image.new("RGBA", (S, S), PAPER_DEEP + (255,)), im,
                         vig.filter(ImageFilter.GaussianBlur(S * .10)))
    if not bleed:
        mask = Image.new("L", (S, S), 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, S - 1, S - 1], radius=r, fill=255)
        im.putalpha(mask)
    d = ImageDraw.Draw(im)

    # gold ring — the seal border
    pad = S * .105
    d.arc([pad, pad, S - pad, S - pad], start=104, end=76, fill=GOLD + (255,), width=int(S * .028))
    pad2 = S * .155
    d.ellipse([pad2, pad2, S - pad2, S - pad2], outline=GOLD + (70,), width=max(1, int(S * .008)))

    # 杏 — carved, deep brown
    fs = int(S * .40)
    try:
        f = ImageFont.truetype(FONT, fs, index=0)
    except Exception:
        f = ImageFont.load_default()
    ch = "杏"
    bb = d.textbbox((0, 0), ch, font=f)
    x = (S - (bb[2] - bb[0])) / 2 - bb[0]
    y = (S - (bb[3] - bb[1])) / 2 - bb[1] - S * .012
    d.text((x + S * .006, y + S * .008), ch, font=f, fill=INK + (46,))   # soft cut shadow
    d.text((x, y), ch, font=f, fill=INK + (255,))

    # the ring breaks at the foot and a terracotta seal sits in the gap —
    # the same chop mark that stamps every screen in the game
    d.rounded_rectangle([S * .445, S * .858, S * .555, S * .968],
                        radius=int(S * .014), fill=SEAL + (235,))

    return im.resize((size, size), Image.LANCZOS)


def build_small(size):
    """16/32px: the ring and chop turn to mud. Keep the glyph and the plate."""
    S = size * 8
    im = Image.new("RGBA", (S, S), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * .20), fill=INK + (255,))
    fs = int(S * .74)
    f = ImageFont.truetype(FONT, fs, index=0)
    bb = d.textbbox((0, 0), "杏", font=f)
    d.text(((S - (bb[2] - bb[0])) / 2 - bb[0], (S - (bb[3] - bb[1])) / 2 - bb[1]),
           "杏", font=f, fill=PAPER + (255,))
    return im.resize((size, size), Image.LANCZOS)


ico_sizes = [16, 32, 48]
ico = [build_small(s) for s in ico_sizes]
ico[0].save(os.path.join(OUT, "..", "favicon.ico"), sizes=[(s, s) for s in ico_sizes],
            append_images=ico[1:])

build(180, bleed=True).save(os.path.join(OUT, "icon-apple-180.png"))   # iOS masks it itself
build(192).save(os.path.join(OUT, "icon-192.png"))
build(512).save(os.path.join(OUT, "icon-512.png"))
build(512, bleed=True).save(os.path.join(OUT, "icon-maskable-512.png"))
build_small(32).save(os.path.join(OUT, "icon-32.png"))

print("wrote favicon.ico + art/icon-*.png")
