# AcuTing Play — 美術素材清冊 Art Inventory

Ting 給的每一張圖都登記在這裡：檔名、內容、用在哪、還沒用的原因。
**加圖或改用途的時候要一起更新這份清冊。**

最後更新：2026-08-13（枸杞、紅棗入庫）

---

## 1 · 主視覺 Hero / Cinematic

| 檔名 | 內容 | 現在用在哪 |
|---|---|---|
| `cinematic-renshen.jpg` | 人參武者持針槍，山崖日出，電影感 | **首頁全屏主視覺**（index.html 標題畫面） |
| `town-map.jpg` | 水鄉小鎮俯瞰全景 | 小鎮地圖底圖（index.html `#s4`） |
| `scene-treatment.jpg` | **直式**診療室：藥櫃牆、診療床、燈籠，空景 | **章節場景底圖**（三章都用） |
| `scene-clinic.jpg` | 藥櫃藥堂內景（橫式） | 已被直式版取代，備用 |
| `ch00-clinic.jpg` | 藥堂另一角度 | 序章場景 |

## 2 · 吉祥物 Mascots（人參家族）

| 檔名 | 內容 | 現在用在哪 |
|---|---|---|
| `mascot-renshen-stand.jpg` | 人參站姿 | 備用 |
| `mascot-renshen-dash.jpg` | 人參奔跑 | 備用 |
| `mascot-renshen-leap.jpg` | 人參跳躍 | 備用 |
| `mascot-renshen-satchel.jpg` | 人參背藥袋 | 備用 |
| `mascot-jiang-run.jpg` | 生薑奔跑 | 生薑藥草卡（第一章獎勵） |
| `mascot-hongzao-warrior.jpg` | 紅色圓果實武者 | **⛔ 已退役** — 枸杞與紅棗都有正式圖了 |
| `sprite-renshen-jump.webp` | 人參跳躍 8 格 sprite sheet（90 KB） | 章節結局的小動畫 |

### ⚠️ `mascot-hongzao-warrior.jpg` 為什麼停用

檔名寫 hongzao（紅棗），但畫出來是一顆**圓形**紅果。
- 枸杞應該是**細長橢圓**、成串 → 不像
- 紅棗應該有**明顯皺褶**、單顆橢圓 → 也不像

Ting 自己也說不確定是哪一個。放錯圖等於教錯本草，所以不掛在任何一味藥上。
**2026-08-13 已由 `herb-gouqi.jpg` 和 `herb-hongzao.jpg` 正式取代。**
檔案留著當美術資產，但不進圖鑑。

## 3 · 藥草卡 Herb Codex

圖鑑共 9 味，目前 5 味有圖。沒有圖的顯示中文字印版（不是缺圖，是刻意留白）。

| 藥 | id | 檔名 | 狀態 |
|---|---|---|---|
| 生薑 Fresh Ginger | `shengjiang` | `mascot-jiang-run.jpg` | ✅ |
| 乾薑 Dried Ginger | `ganjiang` | — | 印版（原本配錯圖，已移除） |
| 人參 Ginseng | `renshen` | `herb-renshen.jpg` | ✅ 風格基準 |
| 艾葉 Mugwort | `aiye` | `herb-aiye.jpg` | ✅ 風格基準 |
| 當歸 Angelica | `danggui` | — | 待生成 |
| 紅棗 Jujube | `hongzao` | `herb-hongzao.jpg` | ✅ 皺褶橢圓，正確 |
| 枸杞子 Goji | `gouqi` | `herb-gouqi.jpg` | ✅ 細長橢圓成串＋紫色花，正確 |
| 玫瑰花 Rose Bud | `meiguihua` | — | 待生成（原本誤用艾葉圖，已修正） |
| 茯苓 Poria | `fuling` | — | 待生成 |

**風格基準：**新圖一律以 `herb-renshen.jpg` 和 `herb-aiye.jpg` 為準
（象牙紙底、淡墨山水、雲紋、大眼睛、腮紅、圓身體、細點陣質感）。

## 4 · 器具 Tools

| 檔名 | 內容 | 現在用在哪 |
|---|---|---|
| `tool-needles.jpg` | 毫針 | 針道館 |
| `tool-cupping.jpg` | 拔罐 | 待用 |
| `tool-guasha.jpg` | 刮痧板 | 待用 |

## 5 · 解剖照片 Anatomy（穴位題目用）

真人照片，**醫學精確層級**——不套用遊戲的插畫風格。

| 檔名 | 部位 |
|---|---|
| `anatomy/hand-dorsal.jpg` | 手背 |
| `anatomy/leg-lateral-a.jpg` | 小腿外側 A |
| `anatomy/leg-lateral-b.jpg` | 小腿外側 B |
| `anatomy/leg-anterior.jpg` | 小腿前面 |
| `anatomy/leg-posterior.jpg` | 小腿後面 |
| `anatomy/head-lateral.jpg` | 頭側面 |

**⛔ 全部還沒接上題目。** 卡在一件事：需要 Ting 指定**每張圖上要考哪些穴位**，
以及每個穴位在圖上的大概位置。沒有這個資訊，我不能自己標穴位——標錯就是教錯。

給我的格式範例：
```
hand-dorsal.jpg → 合谷 LI4、後谿 SI3、中渚 TE3
leg-lateral-a.jpg → 足三里 ST36、陽陵泉 GB34
```
座標我可以自己在圖上量，你只要給穴名就好。

## 6 · App 圖示（我用程式生成的，非 Ting 提供）

| 檔名 | 用途 |
|---|---|
| `icon-32.png` | 分頁小圖示 |
| `icon-192.png` / `icon-512.png` | Android / PWA |
| `icon-apple-180.png` | iOS 加到主畫面 |
| `icon-maskable-512.png` | Android 自適應遮罩 |
| `../favicon.ico` | 傳統書籤圖示 |

重新生成：`python3 mkicon.py`

## 7 · 收到但沒放進來的

| 東西 | 為什麼 |
|---|---|
| 2.5 MB MP4 動畫 | 檔案太大會拖慢載入。Ting 已同意改用 sprite sheet；MP4 留給真正的大場面 |

---

## 規矩

1. **一張圖只能對應一個東西。** 同一張圖出現在兩味藥上，就是教錯。
   `/tmp/therb.js` 這支測試會自動抓到。
2. **不確定就留白。** 文字印版比錯誤的圖好。
3. **背景圖要直式。** 橫式 1920×1080 在手機上只看得到約 26%。
   `scene-treatment.jpg`（1000×1285）是正確示範——而且是**空景**，
   角色才站得進去。以後場景圖都照這個規格生成。
4. 新圖丟進 `art/`，更新這份清冊，跑 `node /tmp/therb.js` 確認對應正確。
