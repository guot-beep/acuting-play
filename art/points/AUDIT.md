# Point Hall plates — what is trustworthy and what is not

Ting found two plates with the point on the wrong side of the bone (SP6 and
GB39, 2026-09). Both were right about height and wrong about front-versus-back.
This file records what was found, and the structural reason it happened, so the
next person does not have to rediscover it.

## Two classes of plate

**Class A — generated (7 plates).** Built by `tools/mkpointplate.py` from a base
anatomy plate we own, with the marker drawn at a coordinate written down in the
`PLATES` table. The position is a number in a file: it can be reviewed, argued
with, and corrected by editing one line.

    LU1.jpg  LU11.jpg  ST41.jpg  BL57.jpg  KI7.jpg  HT7.jpg  PC4.jpg

**Class B — drawn (30 plates).** Illustrations generated whole, with the dots,
the labels and the cun brackets baked into the pixels. Nothing about the
position is recorded anywhere, so nothing about it can be checked or fixed —
a wrong dot can only be replaced by regenerating the whole picture.

Both plates Ting caught are Class B. That is unlikely to be a coincidence.

## Confirmed wrong

| Plate | What is wrong | Should be |
|---|---|---|
| `SP6.jpg` | The dot sits anterior to the tibia, on the shin | 三陰交 is **posterior** to the medial border of the tibia, 3 cun above the tip of the medial malleolus |
| `GB39.jpg` | The dot sits mid-shaft or posterior on the fibula; GB38 is also drawn far too anterior, so the channel zigzags | 懸鐘 is on the **anterior border** of the fibula, 3 cun above the tip of the lateral malleolus, with GB38 one cun directly above it |

## Suspected, not yet confirmed with Ting

| Plate | Concern |
|---|---|
| `ST36.jpg` | The cun brackets are all correct (ST35→36 3, 36→37 3, 37→38 2, 38→39 1, ST40 level with ST38 and lateral). But the channel is drawn down the middle of the shin, and 足三里 should be **one middle-finger breadth lateral to the anterior crest of the tibia** — and ST35 犢鼻 is the hollow **lateral** to the patellar ligament, not the midline. |

Checked and found acceptable: `LI4.jpg` (LI4 at the midpoint of the radial side
of the second metacarpal, with the halving marks drawn correctly; LI1, LI2, LI3
and LI5 all in plausible positions).

## The fix, when there is time

Move Class B onto the Class A pipeline: our own base plate, a coordinate in
`tools/mkpointplate.py`, and Ting confirming the coordinate on
`calibrate.html`. Until then, treat any Class B plate as unverified.

`data/calib.js` and `tests/tcalib.js` already enforce this for the needling
coordinates the game actually tests players on. The Point Hall plates are the
part still outside that net.
