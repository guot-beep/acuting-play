#!/usr/bin/env python3
"""
Builds a labelled acupoint plate from a base anatomy plate we own.

Why this exists: image models do not have anatomical precision — asked to mark
a point they produce a plausible dot in the wrong place. And tracing a third
party's teaching diagram, even restyled, is a derivative work. So:

    our own base plate  →  wash stylisation  →  markers drawn at computed
    coordinates  →  Ting checks against her textbook

Position is decided by a person with a textbook, not by a model. That is the
line between a study aid and a nice-looking picture.

    python3 tools/mkpointplate.py            # rebuild every plate below
"""
import os
from PIL import Image, ImageDraw, ImageEnhance, ImageFont, ImageFilter

HERE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT  = os.path.join(HERE, "art", "points")

PAPER = (242, 234, 216)
INK   = (51, 47, 40)
TERRA = (194, 109, 78)
GOLD  = (176, 141, 62)


def font(sz, bold=False):
    for p in ("/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf" % ("-Bold" if bold else ""),
              "/usr/share/fonts/truetype/liberation/LiberationSans%s.ttf" % ("-Bold" if bold else "")):
        if os.path.exists(p):
            return ImageFont.truetype(p, sz)
    return ImageFont.load_default()


def wash(img):
    """Toward ink-and-wash on warm ivory: keep the line work, lose the photo skin.

    Not a filter for its own sake — the Point Hall already holds ink-wash plates,
    and a photographic one among them reads as a different app."""
    g = img.convert("L")
    g = ImageEnhance.Contrast(g).enhance(1.28)
    # lift the paper toward ivory while holding the darks
    lut = [int(((i / 255.0) ** 1.12) * 255) for i in range(256)]
    g = g.point(lut)
    # map luminance across a warm ink-to-ivory ramp rather than pure grey
    ramp = []
    for i in range(256):
        t = i / 255.0
        ramp.append((int(62 + (PAPER[0] - 62) * t),
                     int(56 + (PAPER[1] - 56) * t),
                     int(48 + (PAPER[2] - 48) * t)))
    px = g.load()
    out = Image.new("RGB", g.size)
    op = out.load()
    for y in range(g.size[1]):
        for x in range(g.size[0]):
            op[x, y] = ramp[px[x, y]]
    return out


def build(base, crop, scale, points, title, subtitle, outfile, caption=""):
    """crop = (l,t,r,b) in base coordinates; points = [(x, y, code, name, side)]"""
    im = Image.open(os.path.join(HERE, base)).convert("RGB")
    im = im.crop(crop)
    w, h = im.size
    im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
    im = im.filter(ImageFilter.SMOOTH)
    im = wash(im)

    W, H = im.size
    PAD_T, PAD_B = 76, 78
    canvas = Image.new("RGB", (W, H + PAD_T + PAD_B), PAPER)
    canvas.paste(im, (0, PAD_T))
    d = ImageDraw.Draw(canvas)

    d.text((W // 2, 26), title, font=font(29, True), fill=INK, anchor="mm")
    d.text((W // 2, 54), subtitle, font=font(15), fill=GOLD, anchor="mm")

    f_code = font(19, True)
    f_name = font(16)
    for (bx, by, code, name, side) in points:
        x = (bx - crop[0]) * scale
        y = (by - crop[1]) * scale + PAD_T
        # leader line out to the margin, then the label
        lead = 46 if side == "r" else -46
        lx = x + lead
        d.line([(x, y), (lx, y)], fill=TERRA, width=2)
        d.ellipse([x - 9, y - 9, x + 9, y + 9], outline=TERRA, width=3)
        d.ellipse([x - 3, y - 3, x + 3, y + 3], fill=TERRA)
        anchor = "lm" if side == "r" else "rm"
        tx = lx + (7 if side == "r" else -7)
        d.text((tx, y - 10), code, font=f_code, fill=INK, anchor=anchor)
        d.text((tx, y + 10), name, font=f_name, fill=(110, 103, 90), anchor=anchor)

    # wrap the caption to the plate width instead of letting it run off both edges
    if caption:
        f_cap = font(13)
        words, line, lines = caption.split(" "), "", []
        for word in words:
            probe = (line + " " + word).strip()
            if d.textlength(probe, font=f_cap) > W - 32 and line:
                lines.append(line); line = word
            else:
                line = probe
        if line:
            lines.append(line)
        for i, ln in enumerate(lines[:3]):
            d.text((W // 2, H + PAD_T + 18 + i * 17), ln, font=f_cap, fill=(140, 132, 118), anchor="mm")
    d.text((W // 2, H + PAD_T + PAD_B - 14),
           "Apricot Grove  ·  check every position against your textbook",
           font=font(11), fill=(184, 176, 160), anchor="mm")

    os.makedirs(OUT, exist_ok=True)
    p = os.path.join(OUT, outfile)
    canvas.save(p, quality=88)
    print("  %-22s %s" % (outfile, canvas.size))


PLATES = [
    # ── LU1–LU4 · chest and upper arm ── one segment plate serves four points,
    #    the same convention as the existing LU5 forearm plate
    dict(base="art/plates/chest-upperarm-m.jpg",
         crop=(0, 96, 271, 384), scale=3.4,
         points=[(120, 160, "LU 2", "Yunmen", "r"),
                 (122, 174, "LU 1", "Zhongfu", "r"),
                 (48, 302,  "LU 3", "Tianfu", "l"),
                 (48, 325,  "LU 4", "Xiabai", "l")],
         title="Lung Channel · Chest and Upper Arm",
         subtitle="LU 1 – LU 4",
         caption="LU2 in the infraclavicular fossa, 6 cun lateral to the midline. LU1 one cun below it in the 1st intercostal space. LU3 3 cun below the anterior axillary fold on the radial side of biceps; LU4 one cun below LU3.",
         outfile="LU1.jpg"),

    # ── LU11 · thumb ──
    dict(base="art/body-forearm-palmar.jpg",
         crop=(0, 762, 226, 958), scale=3.6,
         points=[(40, 888, "LU 11", "Shaoshang", "r")],
         title="Lung Channel · Thumb",
         subtitle="LU 11",
         caption="On the radial side of the thumb, about 0.1 cun proximal to the corner of the nail. Shown here on a palmar view — the nail corner itself sits on the far edge of the thumb.",
         outfile="LU11.jpg"),

    # ── ST41 · anterior ankle ──
    dict(base="art/body-leg-anterior.jpg",
         crop=(108, 688, 344, 902), scale=3.4,
         points=[(220, 802, "ST 41", "Jiexi", "r")],
         title="Stomach Channel · Anterior Ankle",
         subtitle="ST 41",
         caption="On the front of the ankle at the joint crease, midway between the two malleoli, in the depression between the tendons of extensor hallucis longus and extensor digitorum longus. Stream point of the Stomach.",
         outfile="ST41.jpg"),

    # ── BL57 · posterior calf ──
    dict(base="art/plates/leg-posterior-m.jpg",
         crop=(38, 216, 238, 436), scale=4.2,
         points=[(118, 312, "BL 57", "Chengshan", "l")],
         title="Bladder Channel · Calf",
         subtitle="BL 57",
         caption="In the depression at the apex of the inverted V, where the two bellies of gastrocnemius meet — roughly 8 cun below Weizhong BL40. Found most easily with the calf tensed.",
         outfile="BL57.jpg"),
]

if __name__ == "__main__":
    for spec in PLATES:
        build(**spec)
