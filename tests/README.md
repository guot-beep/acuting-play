# Tests

`bash tests/run.sh` — runs everything. Green means safe to deploy.

Most of these exist because the bug they catch actually shipped once.

| test | what it protects |
|---|---|
| `tch04` | every chapter's body plate loads, has the right viewBox and a target marker |
| `therb` | no herb picture is on the wrong herb; chapter rewards resolve to real codex entries |
| `therbroom2` | every herb has a visit, and every visit is on the shelf |
| `tpoint` | every point story resolves, one answer key each, a full visit plays |
| `tshelf` | no point falls off the wall because its region has no shelf |
| `tdrill` | all 11 practice decks play through and every correct answer is reachable |
| `tsort` | all 4 sorting sets play through; wrong answers show the right family |
| `tui` | the town links to pages that exist; every deck and set is reachable; chapters listed in order |
| `tchindex` | the generated chapter spine matches `data/chapters.js` (re-run `tools/mkchapterindex.py`) |
| `tglobals` | two data files never claim the same `window.AG_*` global |
| `tretreat` | the in-chapter retreat drills still resolve for every chapter |
| `tlayout` | page content clears the HUD bar and the chapter line |
| `tnozh` | with 中文 off, no screen is left showing only Chinese |
| `ttags` | every HTML fragment in `data/` has balanced tags |
| `tsupport` | the Support button hides itself when `SUPPORT_LINK` is empty |
| `twish2` | the 催更 form posts the chosen topic to the right field |

## Not covered by tests

`tlive-assets.sh` checks the **live host** for missing images — run it after
deploying, because a file that exists locally proves nothing about what
GitHub Pages is serving. That mistake cost a day once.
