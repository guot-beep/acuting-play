/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/points.js
   穴位 · The point reference every engine shares

   One entry per point. Chapters, drills and the anatomy quizzes all
   resolve against this list, so a point always carries the same
   location, the same category, and the same reason you would reach
   for it.

   The design decision that matters: a point is NOT just a location.
   Knowing where Hegu is and not knowing what it does is half a fact.
   So every entry carries `use` — the clinical reason — and `hook`,
   the classic line that makes it stick. Questions are built from
   `use` as often as from `where`.

   LANGUAGE RULE — English first, Chinese only inside .zh spans.
     en / zh pairs everywhere; nothing English inside a zh field.

   Contract:
     id       LI4, ST36 … the standard alphanumeric code
     en/py/zh name in three forms
     ch       channel, English + Chinese
     cat      special-point category, or "" if none
     where    location, precise enough to find it
     acts     what it does — 2 to 4 short actions
     use      when you would actually reach for it
     hook     the classic line or memory anchor, if there is one
     img      which anatomy photo shows it (filled in once Ting
              confirms the framing — never guessed)
   ═══════════════════════════════════════════════════════════════ */
window.AG_POINTS = [

/* ── hand, dorsal ────────────────────────────────────────────── */
{ id:"LI4", en:"Hegu", py:"Hé Gǔ", zh:"合谷",
  ch:{en:"Large Intestine", zh:"手陽明大腸經"}, cat:{en:"Source point 原穴", zh:"原穴"},
  where:{en:"On the dorsum of the hand, at the midpoint of the radial side of the second metacarpal.",
         zh:"手背第二掌骨橈側中點處。"},
  acts:{en:"Releases the exterior · courses wind · unblocks the channel and stops pain · regulates the face and mouth",
        zh:"解表發汗、疏風、通經止痛、調理面口"},
  use:{en:"The first point most practitioners reach for in facial pain, toothache, headache and the early stage of an exterior invasion. It moves qi strongly through the whole upper body, which is why it also serves as a general analgesic point.",
       zh:"面痛、牙痛、頭痛、外感初起最常先取之穴。行氣力強，通行上半身，故亦為止痛通用穴。"},
  hook:{en:"For the face and mouth, Hegu will do — one of the Four Command Points.",
        zh:"四總穴歌：「面口合谷收」。"},
  caution:{en:"Strongly moves qi and blood downward — avoid in pregnancy.",
           zh:"行氣活血力強，孕婦禁針。"},
  img:"art/anatomy/hand-dorsal.jpg" },

{ id:"SI3", en:"Houxi", py:"Hòu Xī", zh:"後谿",
  ch:{en:"Small Intestine", zh:"手太陽小腸經"},
  cat:{en:"Stream point · opens the Governing Vessel 輸穴、通督脈", zh:"輸穴，八脈交會通督脈"},
  where:{en:"Make a loose fist: at the ulnar end of the crease distal to the fifth metacarpophalangeal joint, on the border of red and white flesh.",
         zh:"握拳，第五掌指關節後尺側，橫紋盡處赤白肉際。"},
  acts:{en:"Opens the Governing Vessel · relaxes the sinews of the neck and back · clears the mind · dispels wind",
        zh:"通督脈、舒筋活絡、清心安神、散風"},
  use:{en:"The distal point for a stiff neck and for pain along the spine, because it opens the Governing Vessel that runs up the back. Reach for it when the neck will not turn.",
       zh:"項強、脊背疼痛之遠端要穴——通督脈，督行於背。落枕不能轉側者尤宜。"},
  hook:{en:"It opens the Du channel, so it treats the whole length of the back.",
        zh:"通督脈，故治一身之背。"},
  img:"art/anatomy/hand-dorsal.jpg" },

{ id:"TE3", en:"Zhongzhu", py:"Zhōng Zhǔ", zh:"中渚",
  ch:{en:"Triple Burner", zh:"手少陽三焦經"}, cat:{en:"Stream point 輸穴", zh:"輸穴"},
  where:{en:"On the dorsum of the hand, in the depression proximal to the heads of the fourth and fifth metacarpals.",
         zh:"手背第四、五掌骨間，掌指關節後方凹陷中。"},
  acts:{en:"Clears heat from the Triple Burner · benefits the ears · relaxes the sinews of the shoulder and arm",
        zh:"清三焦熱、聰耳、舒筋活絡"},
  use:{en:"Ear problems along the Shaoyang line — tinnitus, deafness, ear fullness — and pain along the outside of the arm and shoulder. Useful when a headache sits at the temple rather than the forehead.",
       zh:"耳鳴、耳聾、耳脹等少陽經病，及肩臂外側痛。頭痛在側者尤宜。"},
  img:"art/anatomy/hand-dorsal.jpg" },

{ id:"LI5", en:"Yangxi", py:"Yáng Xī", zh:"陽谿",
  ch:{en:"Large Intestine", zh:"手陽明大腸經"}, cat:{en:"River point 經穴", zh:"經穴"},
  where:{en:"At the radial side of the wrist, in the hollow that appears when the thumb is lifted — the anatomical snuffbox.",
         zh:"腕背橈側，拇指上翹時兩肌腱之間凹陷處（鼻煙壺）。"},
  acts:{en:"Clears heat from the Large Intestine channel · benefits the wrist · reduces swelling of the throat and teeth",
        zh:"清大腸經熱、利腕關節、消腫（咽喉、齒）"},
  use:{en:"The local point for wrist pain and for tendon strain at the base of the thumb. Also used for toothache and sore throat along the same channel.",
       zh:"腕痛、拇指腱鞘不利之局部穴；本經之牙痛、咽痛亦可取。"},
  img:"art/anatomy/hand-dorsal.jpg" },

/* ── leg, lateral ────────────────────────────────────────────── */
{ id:"GB34", en:"Yanglingquan", py:"Yáng Líng Quán", zh:"陽陵泉",
  ch:{en:"Gallbladder", zh:"足少陽膽經"},
  cat:{en:"Sea point · Influential point of the sinews · Lower He-Sea of the Gallbladder", zh:"合穴、八會穴之筋會、膽之下合穴"},
  where:{en:"In the depression anterior and inferior to the head of the fibula.",
         zh:"腓骨頭前下方凹陷處。"},
  acts:{en:"Benefits the sinews and joints · courses the Liver and Gallbladder · clears damp-heat · unblocks the channel",
        zh:"舒筋利節、疏泄肝膽、清利濕熱、通經活絡"},
  use:{en:"The point for any sinew problem anywhere in the body, because it is the Influential Point of the sinews. Reach for it in stiffness, cramp, contracture and joint pain — and in Gallbladder patterns with a bitter taste and rib-side fullness.",
       zh:"筋會陽陵泉，一身之筋病皆可取：拘攣、抽筋、關節不利。膽經證見口苦、脅脹者亦宜。"},
  hook:{en:"The sinews gather at Yanglingquan — remember it as the sinew point.",
        zh:"八會穴：筋會陽陵泉。"},
  img:"art/anatomy/leg-lateral-a.jpg" },

{ id:"GB39", en:"Xuanzhong", py:"Xuán Zhōng", zh:"懸鐘",
  ch:{en:"Gallbladder", zh:"足少陽膽經"},
  cat:{en:"Influential point of the marrow 髓會", zh:"八會穴之髓會"},
  where:{en:"Three cun above the tip of the lateral malleolus, at the anterior border of the fibula.",
         zh:"外踝尖上 3 寸，腓骨前緣。"},
  acts:{en:"Benefits the marrow and the sinews and bones · dispels wind-damp · treats stiff neck",
        zh:"益髓壯骨、袪風濕、治項強"},
  use:{en:"Because the marrow gathers here, it is used where bone and marrow are involved — and classically for a stiff neck, hemiplegia and pain along the Gallbladder channel down the leg.",
       zh:"髓會絕骨，故骨髓之病取之；又主項強、半身不遂、膽經之下肢痛。"},
  hook:{en:"The marrow gathers at Xuanzhong — also called Juegu 絕骨.",
        zh:"八會穴：髓會絕骨（懸鐘）。"},
  img:"art/anatomy/leg-lateral-a.jpg" },

{ id:"GB37", en:"Guangming", py:"Guāng Míng", zh:"光明",
  ch:{en:"Gallbladder", zh:"足少陽膽經"}, cat:{en:"Connecting point 絡穴", zh:"絡穴"},
  where:{en:"Five cun above the tip of the lateral malleolus, at the anterior border of the fibula.",
         zh:"外踝尖上 5 寸，腓骨前緣。"},
  acts:{en:"Brightens the eyes · courses the Liver and Gallbladder · dispels wind from the channel",
        zh:"明目、疏肝膽、袪經絡之風"},
  use:{en:"The Connecting point that links Gallbladder to Liver — which is why a point on the lower leg treats the eyes. Used for blurred vision, night blindness and eye pain, and for pain along the lateral leg.",
       zh:"膽之絡穴，別走厥陰肝——肝開竅於目，故在小腿而能治目：目視不明、夜盲、目痛，兼治下肢外側痛。"},
  hook:{en:"Its name means brightness. The Liver opens into the eyes, and this is the Gallbladder's link to the Liver.",
        zh:"名曰光明。肝開竅於目，此為膽絡肝之穴。"},
  img:"art/anatomy/leg-lateral-a.jpg" },

{ id:"GB40", en:"Qiuxu", py:"Qiū Xū", zh:"丘墟",
  ch:{en:"Gallbladder", zh:"足少陽膽經"}, cat:{en:"Source point 原穴", zh:"原穴"},
  where:{en:"Anterior and inferior to the lateral malleolus, in the depression on the lateral side of the extensor digitorum longus tendon.",
         zh:"外踝前下方，趾長伸肌腱外側凹陷處。"},
  acts:{en:"Courses the Liver and Gallbladder · clears damp-heat · benefits the ankle and the rib-side",
        zh:"疏肝利膽、清濕熱、利踝、疏脅"},
  use:{en:"The Source point of the Gallbladder, so it treats that organ's patterns directly — bitter taste, rib-side pain, sighing. Locally it is the point for a sprained or painful ankle.",
       zh:"膽之原穴，直治膽腑之證：口苦、脅痛、太息。局部則為踝扭傷、踝痛之要穴。"},
  img:"art/anatomy/leg-lateral-a.jpg" },

/* ── leg, anterior ───────────────────────────────────────────── */
{ id:"ST36", en:"Zusanli", py:"Zú Sān Lǐ", zh:"足三里",
  ch:{en:"Stomach", zh:"足陽明胃經"},
  cat:{en:"Sea point · Lower Sea point of the Stomach 合穴、胃下合穴", zh:"合穴，胃之下合穴"},
  where:{en:"Three cun below ST35, one finger-breadth lateral to the anterior crest of the tibia.",
         zh:"犢鼻下 3 寸，脛骨前緣外開一橫指。"},
  acts:{en:"Harmonises the Stomach and Spleen · tonifies qi and blood · fortifies the body · resolves damp and phlegm",
        zh:"和胃健脾、補益氣血、扶正培元、化痰濕"},
  use:{en:"The great tonifying point. Used for every kind of digestive complaint — poor appetite, bloating, loose stools, nausea — and, more broadly, for building strength in someone depleted. Moxa here is the classic method for long-term deficiency.",
       zh:"補益第一要穴。一切脾胃病皆可取：納差、腹脹、便溏、嘔惡；虛損者尤宜久灸培元。"},
  hook:{en:"For the belly, keep Zusanli — one of the Four Command Points.",
        zh:"四總穴歌：「肚腹三里留」。"},
  img:"art/anatomy/leg-anterior.jpg" },

{ id:"ST40", en:"Fenglong", py:"Fēng Lóng", zh:"豐隆",
  ch:{en:"Stomach", zh:"足陽明胃經"}, cat:{en:"Connecting point 絡穴", zh:"絡穴"},
  where:{en:"Eight cun above the tip of the lateral malleolus, two finger-breadths lateral to the anterior crest of the tibia.",
         zh:"外踝尖上 8 寸，脛骨前緣外開二橫指。"},
  acts:{en:"Transforms phlegm and damp · clears the chest · calms the spirit · benefits the throat",
        zh:"化痰祛濕、寬胸、安神、利咽"},
  use:{en:"The phlegm point. Reach for it whenever phlegm is part of the picture — a productive cough, chest oppression, a heavy head, dizziness, or phlegm clouding the mind. Its effect is not limited to phlegm you can see.",
       zh:"化痰要穴。凡涉痰者皆可取：痰多咳嗽、胸悶、頭重、眩暈，乃至痰蒙心竅。所謂痰，不限有形。"},
  hook:{en:"For phlegm, seek Fenglong.",
        zh:"諸痰皆取豐隆。"},
  img:"art/anatomy/leg-anterior.jpg" },

{ id:"ST41", en:"Jiexi", py:"Jiě Xī", zh:"解谿",
  ch:{en:"Stomach", zh:"足陽明胃經"}, cat:{en:"River point 經穴", zh:"經穴"},
  where:{en:"On the front of the ankle joint, midway between the malleoli, between the two prominent tendons.",
         zh:"踝關節前橫紋中央，兩肌腱之間凹陷處。"},
  acts:{en:"Clears heat from the Stomach channel · benefits the ankle · calms the spirit · reduces swelling",
        zh:"清胃經熱、利踝關節、安神、消腫"},
  use:{en:"The local point for ankle pain and for weakness of the foot in dropfoot. Along the channel it also treats a frontal headache and facial swelling.",
       zh:"踝痛、足下垂之局部要穴；循經亦治前額頭痛、面浮。"},
  img:"art/anatomy/leg-anterior.jpg" },

/* ── leg, posterior ──────────────────────────────────────────── */
{ id:"BL40", en:"Weizhong", py:"Wěi Zhōng", zh:"委中",
  ch:{en:"Bladder", zh:"足太陽膀胱經"},
  cat:{en:"Sea point · Lower Sea point of the Bladder 合穴、膀胱下合穴", zh:"合穴，膀胱之下合穴"},
  where:{en:"At the midpoint of the popliteal crease, between the two hamstring tendons.",
         zh:"膕橫紋中點，兩筋之間。"},
  acts:{en:"Relaxes the sinews and unblocks the channel · cools the blood · clears summerheat · benefits the lower back and knee",
        zh:"舒筋通絡、涼血、清暑、利腰膝"},
  use:{en:"The distal point for low back pain — the classic pairing with local points on the back. Bleeding here is a traditional method for acute lumbar sprain and for skin conditions arising from blood heat.",
       zh:"腰痛遠端要穴，與腰部局部穴相配。急性腰扭傷、血熱皮膚病可刺絡放血。"},
  hook:{en:"For the low back, seek Weizhong — one of the Four Command Points.",
        zh:"四總穴歌：「腰背委中求」。"},
  img:"art/anatomy/leg-posterior.jpg" },

{ id:"BL57", en:"Chengshan", py:"Chéng Shān", zh:"承山",
  ch:{en:"Bladder", zh:"足太陽膀胱經"}, cat:{en:"", zh:""},
  where:{en:"In the depression that forms below the two bellies of the gastrocnemius when the calf is tensed.",
         zh:"腓腸肌兩肌腹之間凹陷處，用力伸足時人字紋下。"},
  acts:{en:"Relaxes the sinews · unblocks the channel · benefits the low back and leg · treats haemorrhoids",
        zh:"舒筋活絡、利腰腿、治痔"},
  use:{en:"Calf cramp, low back and leg pain along the Bladder channel, and — classically — haemorrhoids, because the Bladder channel runs through the anal region.",
       zh:"腓腸肌痙攣、腰腿痛（膀胱經循行）；經脈過肛，故亦為治痔要穴。"},
  img:"art/anatomy/leg-posterior.jpg" },

{ id:"BL60", en:"Kunlun", py:"Kūn Lún", zh:"崑崙",
  ch:{en:"Bladder", zh:"足太陽膀胱經"}, cat:{en:"River point 經穴", zh:"經穴"},
  where:{en:"In the depression between the tip of the lateral malleolus and the Achilles tendon.",
         zh:"外踝尖與跟腱之間凹陷處。"},
  acts:{en:"Unblocks the channel and stops pain · relaxes the sinews · clears heat from the head · calms wind",
        zh:"通經止痛、舒筋、清頭目、熄風"},
  use:{en:"Pain anywhere along the Bladder channel — occipital headache, neck stiffness, low back pain, ankle pain — because the channel runs the whole length of the back from head to heel.",
       zh:"膀胱經一線之痛皆可取：後頭痛、項強、腰痛、踝痛。經脈自頭至足，故上下皆治。"},
  caution:{en:"Traditionally avoided in pregnancy.",
           zh:"孕婦慎用。"},
  img:"art/anatomy/leg-posterior.jpg" },

/* ── head, lateral ───────────────────────────────────────────── */
{ id:"GB20", en:"Fengchi", py:"Fēng Chí", zh:"風池",
  ch:{en:"Gallbladder", zh:"足少陽膽經"}, cat:{en:"", zh:""},
  where:{en:"Below the occiput, in the hollow between the upper ends of sternocleidomastoid and trapezius.",
         zh:"枕骨下，胸鎖乳突肌與斜方肌上端之間凹陷處。"},
  acts:{en:"Dispels wind, external and internal · clears the head and eyes · benefits the neck · subdues Liver yang",
        zh:"袪風（外風、內風）、清頭明目、利項、平肝潛陽"},
  use:{en:"The wind point of the head. Used for headache, dizziness, stiff neck, red eyes, and for the early stage of a common cold when wind is at the surface. Its name says what it does — a pool where wind gathers.",
       zh:"頭部袪風要穴：頭痛、眩暈、項強、目赤，外感風邪初起亦取之。穴名風池，風之所聚也。"},
  hook:{en:"Its name means wind pool — the place wind collects, and the place you release it.",
        zh:"名曰風池：風所聚，亦風所出。"},
  caution:{en:"Needle toward the opposite eye or the tip of the nose, never deeply upward — the brainstem lies beyond.",
           zh:"針尖朝對側目內眥或鼻尖，不可向上深刺，內有延髓。"},
  img:"art/anatomy/head-lateral.jpg" },

{ id:"TE17", en:"Yifeng", py:"Yì Fēng", zh:"翳風",
  ch:{en:"Triple Burner", zh:"手少陽三焦經"}, cat:{en:"", zh:""},
  where:{en:"Behind the earlobe, in the depression between the mastoid process and the angle of the mandible.",
         zh:"耳垂後方，乳突與下頜角之間凹陷處。"},
  acts:{en:"Benefits the ears · dispels wind from the face · unblocks the channel",
        zh:"聰耳、袪面部之風、通經活絡"},
  use:{en:"The main local point for the ear — tinnitus, deafness, ear pain — and for facial paralysis, where wind has struck the face along the Shaoyang line.",
       zh:"耳病局部主穴：耳鳴、耳聾、耳痛；面癱（風中少陽之絡）亦為要穴。"},
  img:"art/anatomy/head-lateral.jpg" },

{ id:"GB8", en:"Shuaigu", py:"Shuài Gǔ", zh:"率谷",
  ch:{en:"Gallbladder", zh:"足少陽膽經"}, cat:{en:"", zh:""},
  where:{en:"Directly above the apex of the ear, one and a half cun within the hairline.",
         zh:"耳尖直上，入髮際 1.5 寸。"},
  acts:{en:"Clears the head and stops pain · harmonises the Stomach and stops vomiting · dispels wind",
        zh:"清頭止痛、和胃止嘔、袪風"},
  use:{en:"The local point for a one-sided headache at the temple — the Shaoyang headache — especially when it comes with nausea, which is the picture of a migraine.",
       zh:"偏頭痛（少陽頭痛）之局部要穴，兼嘔惡者尤宜——即今之偏頭痛。"},
  img:"art/anatomy/head-lateral.jpg" },

{ id:"TAIYANG", en:"Taiyang", py:"Tài Yáng", zh:"太陽",
  ch:{en:"Extra point", zh:"經外奇穴"}, cat:{en:"Extra point EX-HN5 奇穴", zh:"經外奇穴 EX-HN5"},
  where:{en:"In the depression about one finger-breadth posterior to the midpoint between the lateral end of the eyebrow and the outer canthus.",
         zh:"眉梢與目外眥之間向後約一橫指凹陷處。"},
  acts:{en:"Clears heat and stops pain · brightens the eyes · dispels wind",
        zh:"清熱止痛、明目、袪風"},
  use:{en:"The point everyone presses without being taught to — temporal headache and tired, sore eyes. Bleeding it is a traditional method for a stubborn headache with heat.",
       zh:"太陽穴：偏頭痛、目脹目澀，人人自按而不自知。熱盛頭痛久不解者可刺絡放血。"},
  img:"art/anatomy/head-lateral.jpg" },

/* ── points the chapters already use ─────────────────────────── */
{ id:"LU7", en:"Lieque", py:"Liè Quē", zh:"列缺",
  ch:{en:"Lung", zh:"手太陰肺經"},
  cat:{en:"Connecting point · opens the Conception Vessel 絡穴、通任脈", zh:"絡穴，八脈交會通任脈"},
  where:{en:"Above the styloid process of the radius, 1.5 cun above the wrist crease.",
         zh:"橈骨莖突上方，腕橫紋上 1.5 寸。"},
  acts:{en:"Releases the exterior and dispels wind · diffuses the Lung and stops cough · benefits the head and nape",
        zh:"解表袪風、宣肺止咳、利頭項"},
  use:{en:"The point for a cough with an exterior pattern, and the distal point for a stiff neck and occipital headache.",
       zh:"外感咳嗽之要穴；項強、後頭痛之遠端配穴。"},
  hook:{en:"For the head and nape, seek Lieque — one of the Four Command Points.",
        zh:"四總穴歌：「頭項尋列缺」。"},
  img:"" },

{ id:"PC6", en:"Neiguan", py:"Nèi Guān", zh:"內關",
  ch:{en:"Pericardium", zh:"手厥陰心包經"},
  cat:{en:"Connecting point · opens the Yin Linking Vessel 絡穴、通陰維脈", zh:"絡穴，八脈交會通陰維脈"},
  where:{en:"Two cun above the wrist crease, between the two tendons on the front of the forearm.",
         zh:"腕橫紋上 2 寸，兩筋之間。"},
  acts:{en:"Regulates the Heart and calms the spirit · opens the chest and regulates qi · harmonises the Stomach and stops nausea",
        zh:"寧心安神、寬胸理氣、和胃止嘔"},
  use:{en:"Chest oppression, palpitations, anxiety and nausea — and the point that ties emotion to the chest and the stomach. Reach for it when tightness in the chest rises with feeling.",
       zh:"胸悶、心悸、煩躁、嘔惡；情志與胸胃相連之樞。遇情志而胸悶者取之。"},
  img:"" },

{ id:"LR3", en:"Taichong", py:"Tài Chōng", zh:"太衝",
  ch:{en:"Liver", zh:"足厥陰肝經"}, cat:{en:"Source point · Stream point 原穴、輸穴", zh:"原穴、輸穴"},
  where:{en:"On the dorsum of the foot, in the depression distal to the junction of the first and second metatarsals.",
         zh:"足背第一、二蹠骨結合部前方凹陷處。"},
  acts:{en:"Courses the Liver and regulates qi · subdues Liver yang · calms wind · brightens the eyes",
        zh:"疏肝理氣、平肝潛陽、熄風、明目"},
  use:{en:"The Liver's Source point, and the first choice when constraint has become irritability, sighing, rib-side distension or a premenstrual headache. Paired with LI4 it becomes the Four Gates.",
       zh:"肝之原穴。鬱而為煩躁、太息、脅脹、經前頭痛者首選。配合谷，是為四關。"},
  hook:{en:"With Hegu it forms the Four Gates — the classic pair for moving stagnant qi through the whole body.",
        zh:"配合谷為四關穴，行一身之氣滯。"},
  img:"" },
/* ── leg, medial (the plate Ting supplied last) ──────────────── */
{ id:"SP9", en:"Yinlingquan", py:"Yīn Líng Quán", zh:"陰陵泉",
  ch:{en:"Spleen", zh:"足太陰脾經"}, cat:{en:"Sea point 合穴", zh:"合穴"},
  where:{en:"In the depression on the lower border of the medial condyle of the tibia, level with the tuberosity.",
         zh:"脛骨內側髁下緣凹陷處。"},
  acts:{en:"Drains damp and promotes urination · fortifies the Spleen · frees the water passages · benefits the knee",
        zh:"利水滲濕、健脾、通調水道、利膝"},
  use:{en:"The damp point of the lower body. Reach for it in oedema, heaviness, loose stools, vaginal discharge and difficult urination. Where ST36 builds, SP9 drains — they are often needled together for a damp, weak middle.",
       zh:"下焦祛濕要穴：水腫、身重、便溏、帶下、小便不利。足三里主補，陰陵泉主利，脾虛濕困常二穴並用。"},
  hook:{en:"Yang Mound Spring is GB34 on the outside; Yin Mound Spring is SP9 on the inside. Same height, opposite faces.",
        zh:"外為陽陵泉，內為陰陵泉；高低相當，內外相對。"},
  img:"art/channel-3.jpg" },

{ id:"KI3", en:"Taixi", py:"Tài Xī", zh:"太谿",
  ch:{en:"Kidney", zh:"足少陰腎經"},
  cat:{en:"Source point · Stream point 原穴、輸穴", zh:"原穴、輸穴"},
  where:{en:"In the depression between the tip of the medial malleolus and the Achilles tendon.",
         zh:"內踝尖與跟腱之間凹陷處。"},
  acts:{en:"Tonifies Kidney yin and yang · anchors the qi · strengthens the low back and knees · benefits the ear and throat",
        zh:"補腎陰腎陽、納氣、強腰膝、利耳咽"},
  use:{en:"The Kidney's Source point, and the point to reach for in the whole picture of Kidney depletion — sore lower back and knees, tinnitus, night sweats, dizziness, waking at night. It tonifies both yin and yang, which is unusual and worth remembering.",
       zh:"腎之原穴，腎虛諸證皆取：腰膝痠軟、耳鳴、盜汗、眩暈、夜寐不安。陰陽俱補，此為其特別處。"},
  hook:{en:"The Source point of the Kidney sits where you can feel the pulse behind the ankle.",
        zh:"腎之原穴，在踝後動脈應手處。"},
  img:"art/channel-3.jpg" }


];
