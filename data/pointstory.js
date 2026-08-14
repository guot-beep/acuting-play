/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/pointstory.js
   點穴堂 · The Point Hall — one visit per point

   Companion to data/points.js. That file is the reference: name,
   channel, category, location. THIS file is the teaching: a short
   scene in which the point is actually used, then three questions.

   THE RULE THAT SHAPES EVERY ENTRY
   Ting's instruction: 「請寫故事時 考這些穴位也加深這些穴位的功效應用」
   So the questions never stop at "where is it". Each visit asks:
     q1  application — why would you reach for this point at all
     q2  differentiation — this point versus the one beside it
     q3  the caution, the classic line, or the category that explains it
   A student who can point at Hegu but cannot say why has half a fact.

   LANGUAGE RULE — English first, Chinese only inside .zh spans.

   Contract:
     id     must match an id in data/points.js
     region hand | leg | back | head   (groups the hall's shelves)
     beats  [{en,zh}]  the scene, tapped through one at a time
     qs     [{q,cq,opts:[{t,c,ok,note}]}]
     card   {en,zh}  the line the player keeps

   Adding a point is a data edit. No code changes.
   ═══════════════════════════════════════════════════════════════ */
window.AG_POINTSTORY = [

/* ══════════════ HAND & ARM 手 ══════════════ */

{ id:"LI4", region:"hand",
  beats:[
    {en:"A carter comes in holding his jaw. A back tooth has been aching since the night before, and now the whole side of his face feels hot and tight.",
     zh:"一位車夫捂著下巴進來。後槽牙從昨夜疼到現在，如今半邊臉又熱又脹。"},
    {en:"Shen Yi does not touch his face. She takes his hand instead, and presses into the web between thumb and index finger, on the second metacarpal.",
     zh:"沈醫師並不碰他的臉，反而握起他的手，按在拇指與食指之間、第二掌骨橈側。"},
    {en:"\"The face and the mouth are far from the hand,\" she says, \"and that is exactly the point. A channel carries treatment along its whole length. What I press here arrives up there.\"",
     zh:"「面口離手甚遠，」她說，「這正是道理所在。經脈通其全程，我按在此處，力達彼處。」"}
  ],
  qs:[
    {q:"The carter has toothache and facial heat. Why does Shen Yi choose Hegu rather than a point on the face?",
     cq:"車夫牙痛面熱，沈醫師為何取合谷而不取面部穴？",
     opts:[
      {t:"Because Large Intestine channel qi reaches the face, so a distal point on that channel can move stagnation and stop pain there",
       c:"因手陽明大腸經上行頭面，遠端取穴可行氣通經、止其痛",ok:true,
       note:"<b>Correct.</b> This is distal point selection 遠端取穴. Hegu is the Source point 原穴 of the Large Intestine channel, and that channel ends at the face — so it treats the face and mouth from the hand."},
      {t:"Because points on the hand are safer than points on the face",
       c:"因手上穴位比面部穴位安全",ok:false,
       note:"Safety is not the reasoning here. The choice is <b>channel logic</b>: the Large Intestine channel travels to the face, so its Source point acts there."},
      {t:"Because Hegu is a local point for the tooth",
       c:"因合谷為牙齒之局部穴",ok:false,
       note:"Hegu is the opposite of local — it is far from the complaint. That distance is the teaching."}
     ]},
    {q:"Another patient has a stiff neck and cannot turn her head. Would Hegu be your first choice?",
     cq:"另一位病人項強不能轉側，合谷是首選嗎？",
     opts:[
      {t:"No — Houxi SI3 suits that better, because it opens the Governing Vessel that runs up the back and neck",
       c:"否——當取後谿。後谿通督脈，督行於項背",ok:true,
       note:"<b>Correct.</b> Hegu governs the <b>face and mouth</b>; Houxi 後谿 opens the Du channel and governs the <b>neck and spine</b>. Same hand, different territory."},
      {t:"Yes — Hegu treats all pain anywhere in the body",
       c:"是——合谷可治全身一切痛",ok:false,
       note:"Hegu is a broad analgesic point, but \"broad\" is not \"everywhere\". The command line is specific: <b>面口合谷收</b> — the face and mouth."},
      {t:"Yes — every upper-body problem is treated on the hand",
       c:"是——上半身諸疾皆取於手",ok:false,
       note:"Too loose. Point choice follows the <b>channel</b> that reaches the complaint, not simply the half of the body."}
     ]},
    {q:"A woman who is four months pregnant asks for the same treatment. What do you do?",
     cq:"一位懷孕四月的婦人求同樣的治療，當如何？",
     opts:[
      {t:"Do not needle Hegu — it moves qi and blood strongly downward and is contraindicated in pregnancy",
       c:"不針合谷——其行氣活血力強，孕婦禁針",ok:true,
       note:"<b>Correct, and this is the half students forget.</b> Hegu is classically contraindicated in pregnancy, and is often named alongside SP6 三陰交 for the same reason. Knowing when <i>not</i> to use a point is knowing the point."},
      {t:"Needle it, but shallowly",
       c:"淺刺即可",ok:false,
       note:"Depth does not remove the contraindication. In a teaching setting the safe answer is to choose a different point entirely."},
      {t:"Needle the other hand instead",
       c:"改針對側",ok:false,
       note:"The contraindication is about the point, not the side."}
     ]}
  ],
  card:{en:"For the face and mouth, Hegu will do — and in pregnancy, Hegu you leave alone.",
        zh:"「面口合谷收」；然孕婦禁針，不可不記。"} },

{ id:"SI3", region:"hand",
  beats:[
    {en:"A scribe wakes with his neck locked to one side. He can look down, he can look up a little, but turning is impossible.",
     zh:"一位書吏晨起落枕，頭偏向一側。俯仰尚可，左右轉動則不能。"},
    {en:"\"Make a loose fist,\" Shen Yi says. She finds the crease behind the little-finger knuckle, where red flesh meets white.",
     zh:"「輕輕握拳。」沈醫師取小指掌指關節後之橫紋盡處，赤白肉際間。"},
    {en:"\"Now turn your head — slowly — while the needle is in.\" The scribe turns further than he has all morning, and looks surprised about it.",
     zh:"「留針時慢慢轉頭。」書吏一轉，竟比整個早晨都轉得遠，面露訝色。"}
  ],
  qs:[
    {q:"Why does Houxi help a neck that will not turn?",
     cq:"後谿何以能治項強不能轉側？",
     opts:[
      {t:"It is one of the Eight Confluent points and opens the Governing Vessel, which runs up the spine and neck",
       c:"為八脈交會穴，通督脈；督脈行於脊項",ok:true,
       note:"<b>Correct.</b> 後谿通督脈. Open the Du channel from the hand and you reach the whole length of the back."},
      {t:"It is the Source point of the Small Intestine channel",
       c:"為小腸經原穴",ok:false,
       note:"Houxi is the <b>Stream point 輸穴</b>. The Source point 原穴 of the Small Intestine is Wangu SI4. The Du-opening property is what matters here."},
      {t:"It is a local point for the shoulder",
       c:"為肩部局部穴",ok:false,
       note:"It is on the hand — distal, not local."}
     ]},
    {q:"Shen Yi asks the scribe to move his neck while the needle rests in place. What is this technique called, and why use it?",
     cq:"沈醫師令其留針時活動頸項，此法為何？何以用之？",
     opts:[
      {t:"Moving needle technique 動氣針法 — the movement guides qi to the affected area while the distal point is stimulated",
       c:"動氣針法——遠端行針，令患部活動，導氣至病所",ok:true,
       note:"<b>Correct.</b> With distal points on the extremities, asking the patient to move the painful region while needling is a standard way to bring the effect to the site."},
      {t:"It tests whether the needle is deep enough",
       c:"用以試針之深淺",ok:false,
       note:"No — movement is therapeutic here, not diagnostic."},
      {t:"It distracts the patient from the needle",
       c:"用以分散病人注意",ok:false,
       note:"Comfort may improve, but the reason is channel activation, not distraction."}
     ]},
    {q:"A second patient has one-sided headache with pain behind the ear and along the side of the skull. Is Houxi still your point?",
     cq:"另一病人偏頭痛，痛在耳後及頭側，仍取後谿否？",
     opts:[
      {t:"No — the side of the head is Shaoyang territory, so GB20, GB8 or Taiyang fit better",
       c:"否——頭側屬少陽，當取風池、率谷或太陽",ok:true,
       note:"<b>Correct.</b> Match the region to the channel: <b>back of head and spine → Taiyang / Du</b>; <b>side of head → Shaoyang</b>; <b>forehead → Yangming</b>."},
      {t:"Yes — Houxi treats all headaches",
       c:"是——後谿治一切頭痛",ok:false,
       note:"Houxi's reach follows the Du and Taiyang route: <b>occiput, neck, spine</b>. A temporal headache belongs to a different channel."},
      {t:"Yes — all headaches are treated distally on the hand",
       c:"是——頭痛皆遠取於手",ok:false,
       note:"Distal treatment is right in principle, but <i>which</i> distal point depends on the channel involved."}
     ]}
  ],
  card:{en:"Houxi opens the Governing Vessel — so from the hand it reaches the neck, the spine, and the whole length of the back.",
        zh:"後谿通督脈，故一穴而及項、脊、背之全程。"} },

{ id:"TE3", region:"hand",
  beats:[
    {en:"A young weaver keeps rubbing her ear. It rings, faintly and constantly, and by evening the side of her head aches with it.",
     zh:"一位年輕織婦不住揉耳。耳中細鳴不絕，入夜則頭側亦痛。"},
    {en:"Shen Yi presses in the depression just behind the knuckles of the fourth and fifth fingers, on the back of the hand.",
     zh:"沈醫師按其手背第四、五掌指關節後之凹陷處。"},
    {en:"\"The Triple Burner channel climbs the arm, circles the ear, and ends at the brow,\" she says. \"When the ear complains, ask the channel that goes there.\"",
     zh:"「三焦經上行於臂，繞耳而終於眉梢，」她說，「耳有所苦，當問行經其地之經。」"}
  ],
  qs:[
    {q:"Why is Zhongzhu chosen for ringing in the ears and one-sided head pain?",
     cq:"耳鳴與頭側痛，何以取中渚？",
     opts:[
      {t:"The Triple Burner channel travels to the ear and temple, and TE3 is its Stream point — good for clearing along that route",
       c:"手少陽三焦經行至耳、顳；中渚為輸穴，善清其經之滯",ok:true,
       note:"<b>Correct.</b> TE3 中渚 is the <b>Stream point 輸穴</b> of the Triple Burner. Classic uses: tinnitus, deafness, temporal headache, sore throat, pain along the arm."},
      {t:"Because it is the Source point of the Small Intestine channel",
       c:"因其為小腸經原穴",ok:false,
       note:"Wrong channel. TE3 belongs to the <b>Triple Burner 手少陽三焦經</b>."},
      {t:"Because all ear problems are treated on the hand",
       c:"因耳疾皆取於手",ok:false,
       note:"Not a rule. TE17 翳風, directly behind the earlobe, is the local point most often paired with it."}
     ]},
    {q:"Which point would you most naturally pair with TE3 for this ear complaint?",
     cq:"治此耳疾，最宜與中渚相配者為何？",
     opts:[
      {t:"TE17 Yifeng — the local point right behind the earlobe, on the same channel",
       c:"翳風——耳垂後之局部穴，同屬三焦經",ok:true,
       note:"<b>Correct.</b> This is <b>local plus distal 局部配遠端</b> on one channel: TE17 at the ear, TE3 at the hand."},
      {t:"ST36 Zusanli",c:"足三里",ok:false,
       note:"ST36 tonifies and strengthens; it is not aimed at the ear. Useful in a deficiency picture, but not the pairing being taught here."},
      {t:"BL40 Weizhong",c:"委中",ok:false,
       note:"BL40 governs the lower back and the Bladder channel — a different region entirely."}
     ]},
    {q:"The weaver mentions the ringing began suddenly, is loud, and worsens when she is angry. What pattern does this suggest?",
     cq:"其鳴驟起、聲大，遇怒則甚，屬何證？",
     opts:[
      {t:"An excess pattern — Liver and Gallbladder fire rising, so clearing points suit; LR3 would pair well",
       c:"實證——肝膽火升，宜清；可配太衝",ok:true,
       note:"<b>Correct.</b> Sudden, loud, worse with anger points to <b>excess</b>. Gradual, faint, worse with fatigue points to <b>Kidney deficiency</b>, where KI3 太谿 would be the pairing instead."},
      {t:"A deficiency pattern — Kidney essence failing to reach the ear",
       c:"虛證——腎精不足，耳失所養",ok:false,
       note:"That picture is real, but it comes on <b>gradually</b>, the sound is faint, and it worsens with exhaustion — not with anger."},
      {t:"An exterior invasion of wind-cold",
       c:"風寒外襲",ok:false,
       note:"Nothing here suggests an exterior pattern — no chills, no fever, no recent onset with aversion to cold."}
     ]}
  ],
  card:{en:"Zhongzhu is the Stream point of the Triple Burner — the hand point for an ear that rings and a temple that aches.",
        zh:"中渚，三焦經輸穴。耳鳴頭側痛，取之於手。"} },

{ id:"LI5", region:"hand",
  beats:[
    {en:"A cooper has been driving hoops all week. Now the thumb side of his wrist hurts when he lifts, and there is a hot fullness in the hollow at the base of the thumb.",
     zh:"一位箍桶匠終週打箍，如今提物則腕之橈側作痛，拇指根凹陷處有熱脹之感。"},
    {en:"Shen Yi has him raise his thumb. Two tendons stand up, and between them a small depression appears — the anatomical snuffbox.",
     zh:"沈醫師令其翹起拇指，兩筋隆起，中現小陷——即所謂鼻煙窩。"},
    {en:"\"Right in the hollow,\" she says. \"Same channel as Hegu, one station further along. Where Hegu sends its work to the face, this one stays and tends the wrist.\"",
     zh:"「正在陷中。」她說，「與合谷同經，僅上一站。合谷之力達於面，此穴則守而治腕。」"}
  ],
  qs:[
    {q:"What kind of point is Yangxi, and what does that tell you about its use?",
     cq:"陽谿為何類穴？由此可知其用為何？",
     opts:[
      {t:"It is the River point 經穴 of the Large Intestine channel — River points classically treat cough, wheeze, chills and fever, and here it also serves as a local wrist point",
       c:"手陽明大腸經之經穴。經穴主喘咳寒熱；在此又為腕部局部穴",ok:true,
       note:"<b>Correct.</b> In the Five Shu 五輸穴 sequence, the River point 經穴 governs <b>喘咳寒熱</b>. Its position at the wrist also makes it the local point for radial wrist pain."},
      {t:"It is the Source point of the Large Intestine channel",
       c:"為大腸經原穴",ok:false,
       note:"The Source point 原穴 of the Large Intestine is <b>Hegu LI4</b>. Yangxi is the River point 經穴."},
      {t:"It is the Cleft point of the Large Intestine channel",
       c:"為大腸經郄穴",ok:false,
       note:"The Cleft point 郄穴 of the Large Intestine is <b>Wenliu LI7</b>."}
     ]},
    {q:"The Five Shu points run in a fixed order from the fingertip inward. What is that order?",
     cq:"五輸穴自指端向上，其序為何？",
     opts:[
      {t:"Well 井 · Spring 滎 · Stream 輸 · River 經 · Sea 合",
       c:"井、滎、輸、經、合",ok:true,
       note:"<b>Correct.</b> The classic image is water: a well appears, becomes a spring, a stream, a river, and finally joins the sea. Qi grows in volume as it moves up the limb."},
      {t:"Sea 合 · River 經 · Stream 輸 · Spring 滎 · Well 井",
       c:"合、經、輸、滎、井",ok:false,
       note:"That is the reverse. The sequence starts small at the <b>fingertip or toe</b> and grows as it travels toward the trunk."},
      {t:"Source 原 · Connecting 絡 · Cleft 郄 · Front-Mu 募 · Back-Shu 俞",
       c:"原、絡、郄、募、俞",ok:false,
       note:"Those are special point categories, but they are not the Five Shu 五輸穴 series."}
     ]},
    {q:"How would you position the cooper's hand to locate the point accurately?",
     cq:"欲準取此穴，當如何擺位？",
     opts:[
      {t:"Ask him to extend the thumb so the two tendons stand out, and take the depression between them at the wrist crease",
       c:"令拇指翹起，兩筋顯露，取腕橫紋上兩筋間之陷中",ok:true,
       note:"<b>Correct.</b> Many points only appear when the body is positioned properly. Position first, then palpate — a habit worth building early."},
      {t:"Let the hand rest flat and measure three cun from the wrist",
       c:"手平放，自腕上量三寸",ok:false,
       note:"Yangxi sits <b>at</b> the wrist crease, in the snuffbox — not proximal to it."},
      {t:"Make a tight fist and take the highest point of the muscle",
       c:"握緊拳，取肌肉最高處",ok:false,
       note:"That manoeuvre finds Hegu-region landmarks, not the snuffbox depression."}
     ]}
  ],
  card:{en:"Yangxi sits in the snuffbox — the River point of the Large Intestine, and the local point for a wrist worn out by work.",
        zh:"陽谿在鼻煙窩中。大腸經經穴，亦為勞損腕痛之局部要穴。"} },

{ id:"LU7", region:"hand",
  beats:[
    {en:"A ferryman comes in coughing, with a stiff, aching back of the head and a dislike of the wind on the river.",
     zh:"一位船夫咳嗽而來，後頭項強而痛，惡河上之風。"},
    {en:"Shen Yi crosses her thumb over his, index finger falling into the notch above the wrist. \"There. Above the crease, at the edge of the bone.\"",
     zh:"沈醫師以兩手虎口交叉，食指按於腕上骨隙。「此處。腕紋之上，骨邊之陷。」"},
    {en:"\"This one belongs to the Lung, but it borrows a road,\" she says. \"It opens the Conception Vessel, and it answers for the neck and the head.\"",
     zh:"「此穴屬肺，而能借道。」她說，「通任脈，又主頭項。」"}
  ],
  qs:[
    {q:"The ferryman has a cough with a stiff neck and aversion to wind. Why is Lieque a good single choice?",
     cq:"其咳嗽兼項強惡風，何以列缺一穴甚宜？",
     opts:[
      {t:"It is the Connecting point of the Lung, so it treats cough and releases the exterior, and it is also the command point for the head and neck",
       c:"肺經絡穴，宣肺止咳、解表；又為頭項之要穴",ok:true,
       note:"<b>Correct.</b> Two properties meet in one point: <b>絡穴</b> of the Lung (cough, wind invasion) and the Four Command line <b>頭項尋列缺</b>."},
      {t:"It is the Source point of the Lung channel",
       c:"為肺經原穴",ok:false,
       note:"The Source point 原穴 of the Lung is <b>Taiyuan LU9</b>. Lieque is the Connecting point 絡穴."},
      {t:"It is a local point for the neck",
       c:"為頸項之局部穴",ok:false,
       note:"It is on the forearm — distal. Its reach to the neck comes from the command-point relationship, not proximity."}
     ]},
    {q:"The Four Command Points 四總穴 each govern one region. Which line belongs to Lieque?",
     cq:"四總穴各主一部，列缺主何？",
     opts:[
      {t:"For the head and the nape, seek Lieque 頭項尋列缺",
       c:"頭項尋列缺",ok:true,
       note:"<b>Correct.</b> The full set: <b>肚腹三里留 · 腰背委中求 · 頭項尋列缺 · 面口合谷收</b>."},
      {t:"For the belly and abdomen, keep to Lieque",
       c:"肚腹尋列缺",ok:false,
       note:"That line belongs to <b>ST36 足三里</b> — 肚腹三里留."},
      {t:"For the lower back, seek Lieque",
       c:"腰背尋列缺",ok:false,
       note:"That line belongs to <b>BL40 委中</b> — 腰背委中求."}
     ]},
    {q:"Lieque is also one of the Eight Confluent points. Which extraordinary vessel does it open, and what pairs with it?",
     cq:"列缺亦為八脈交會穴，通何奇經？與何穴相配？",
     opts:[
      {t:"It opens the Conception Vessel 任脈, and pairs with KI6 Zhaohai",
       c:"通任脈，配照海",ok:true,
       note:"<b>Correct.</b> <b>列缺配照海，通任脈</b> — a classic pair for throat, chest and Lung-yin complaints."},
      {t:"It opens the Governing Vessel 督脈, and pairs with BL62 Shenmai",
       c:"通督脈，配申脈",ok:false,
       note:"That pair is <b>SI3 後谿 with BL62 申脈</b>, opening the Du channel."},
      {t:"It opens the Penetrating Vessel 衝脈, and pairs with PC6 Neiguan",
       c:"通衝脈，配內關",ok:false,
       note:"That pair is <b>SP4 公孫 with PC6 內關</b>, opening the Chong channel."}
     ]}
  ],
  card:{en:"For the head and the nape, seek Lieque — Connecting point of the Lung, and the hand that opens the Conception Vessel.",
        zh:"「頭項尋列缺」。肺之絡穴，八脈交會通任脈。"} },

{ id:"PC6", region:"hand",
  beats:[
    {en:"A merchant's wife has been queasy for three days. She has not been able to keep tea down, and she says her chest feels stuffed, as though something is pressing outward.",
     zh:"一位商人之妻噁心三日，飲茶亦吐，自訴胸中滿悶，如有物撐。"},
    {en:"Shen Yi measures two cun above the wrist crease, between the two tendons on the inner forearm, and rests her thumb there.",
     zh:"沈醫師量腕橫紋上二寸，兩筋之間，以拇指按之。"},
    {en:"\"Nausea, a tight chest, a heart that will not settle,\" she says. \"All three live in the same place. This point answers all three.\"",
     zh:"「嘔惡、胸悶、心神不寧，」她說，「三者同居一處，此穴皆能應之。」"}
  ],
  qs:[
    {q:"Why is Neiguan the point for nausea and vomiting?",
     cq:"何以內關為嘔吐之要穴？",
     opts:[
      {t:"It is the Connecting point of the Pericardium and connects with the Triple Burner, regulating qi in the chest and harmonising the Stomach so rebellious qi descends",
       c:"心包經絡穴，別走三焦，寬胸理氣、和胃降逆",ok:true,
       note:"<b>Correct.</b> Nausea is <b>rebellious Stomach qi 胃氣上逆</b>. PC6 內關 makes qi in the middle and upper burner descend again — which is why it is the first point taught for motion sickness and morning nausea alike."},
      {t:"It is a local point over the stomach",
       c:"為胃之局部穴",ok:false,
       note:"It is on the forearm. Its reach into the chest and stomach comes from channel relationship, not location."},
      {t:"It is the Source point of the Heart channel",
       c:"為心經原穴",ok:false,
       note:"The Source point 原穴 of the Heart is <b>Shenmen HT7</b>. PC6 is the Connecting point 絡穴 of the Pericardium."}
     ]},
    {q:"The same woman also reports palpitations and poor sleep since a family quarrel. Does that change your point choice?",
     cq:"其人自家中爭執後心悸失眠，是否須改穴？",
     opts:[
      {t:"No — PC6 also calms the spirit, so one point covers the nausea, the chest oppression and the palpitations",
       c:"不必改——內關兼能寧心安神，一穴而三症俱顧",ok:true,
       note:"<b>Correct.</b> 寬胸、和胃、寧心 — this breadth is why PC6 appears in so many prescriptions. A well-chosen point often answers the whole picture, not one symptom."},
      {t:"Yes — palpitations need a Heart channel point instead",
       c:"當改取心經之穴",ok:false,
       note:"The Pericardium 心包 protects the Heart and is treated for Heart symptoms constantly. PC6 is a standard choice for palpitations."},
      {t:"Yes — emotional causes require head points only",
       c:"情志所傷，惟取頭部穴",ok:false,
       note:"Not so. Emotional patterns are treated on the limbs very often — PC6 and LR3 among the most used."}
     ]},
    {q:"PC6 is one of the Eight Confluent points. Which vessel does it open, and which point is its partner?",
     cq:"內關為八脈交會穴，通何經？其配穴為何？",
     opts:[
      {t:"It opens the Yin Linking Vessel 陰維脈 and pairs with SP4 Gongsun, together governing the heart, chest and stomach",
       c:"通陰維脈，配公孫，合主心、胸、胃",ok:true,
       note:"<b>Correct.</b> <b>公孫配內關，合於心、胸、胃</b>. Learn the pairs by the <i>territory</i> they cover and they stop being a list."},
      {t:"It opens the Conception Vessel 任脈 and pairs with KI6",
       c:"通任脈，配照海",ok:false,
       note:"That pair is <b>LU7 列缺 with KI6 照海</b>."},
      {t:"It opens the Yang Motility Vessel 陽蹻脈 and pairs with SI3",
       c:"通陽蹻脈，配後谿",ok:false,
       note:"BL62 申脈 opens the Yang Motility Vessel, paired with SI3 後谿."}
     ]}
  ],
  card:{en:"Neiguan settles the chest, the stomach and the heart at once — two cun above the wrist, between the tendons.",
        zh:"內關，腕上二寸兩筋間。一穴而心、胸、胃三者俱安。"} },

/* ══════════════ LEG 足 ══════════════ */

{ id:"ST36", region:"leg",
  beats:[
    {en:"An old farmer sits down heavily. He eats little, tires by midmorning, and his stools have been loose for months.",
     zh:"一位老農重重坐下。納少，日未過午即倦，大便溏薄已數月。"},
    {en:"Shen Yi measures three cun below the kneecap, one finger-breadth lateral to the crest of the shin bone, and marks the spot.",
     zh:"沈醫師量犢鼻下三寸，脛骨前嵴外一橫指，記其處。"},
    {en:"\"This is the point people come back to for a lifetime,\" she says. \"Not because it is dramatic. Because it builds.\"",
     zh:"「此穴可用一生，」她說，「非因其效猛，乃因其能培。」"}
  ],
  qs:[
    {q:"The farmer is weak, eats poorly and tires easily. Why is Zusanli the anchor of the treatment?",
     cq:"其人虛弱納少易倦，何以足三里為主穴？",
     opts:[
      {t:"It is the Sea point and Lower He-Sea of the Stomach — it tonifies Spleen and Stomach, strengthens qi and blood, and supports the whole body over time",
       c:"胃經合穴、胃之下合穴。健脾和胃、補益氣血，久用可強壯全身",ok:true,
       note:"<b>Correct.</b> ST36 足三里 is the great tonifying point. Qi and blood are made in the middle burner, so strengthening it strengthens everything downstream."},
      {t:"It disperses food stagnation quickly",
       c:"善消食積",ok:false,
       note:"It does regulate the stomach, but this patient's picture is <b>deficiency 虛</b>, not accumulation. The reason to choose it here is that it <b>builds</b>."},
      {t:"It drains damp from the lower body",
       c:"利下焦濕",ok:false,
       note:"That is closer to <b>SP9 陰陵泉</b>. ST36 builds; SP9 drains."}
     ]},
    {q:"Which Four Command line belongs to ST36?",
     cq:"四總穴中，足三里主何？",
     opts:[
      {t:"For the belly and abdomen, keep to Zusanli 肚腹三里留",
       c:"肚腹三里留",ok:true,
       note:"<b>Correct.</b> Any complaint in the belly — pain, distension, nausea, loose stool, poor appetite — brings you back to ST36."},
      {t:"For the lower back, seek Zusanli",
       c:"腰背三里求",ok:false,
       note:"That line belongs to <b>BL40 委中</b>."},
      {t:"For the head and nape, seek Zusanli",
       c:"頭項尋三里",ok:false,
       note:"That line belongs to <b>LU7 列缺</b>."}
     ]},
    {q:"The farmer asks whether moxa would help. What is the reasoning?",
     cq:"老農問可否施灸，理據為何？",
     opts:[
      {t:"Yes — moxa on ST36 suits deficiency and cold patterns and is a classic method for building strength gradually",
       c:"可——虛寒之證，灸足三里，古法所以強壯培元",ok:true,
       note:"<b>Correct.</b> ST36 is one of the most-moxaed points in the tradition, precisely for long-term strengthening in deficiency. Moxa warms and supplements; this patient's picture is deficient and cold."},
      {t:"No — moxa is only for acute pain",
       c:"否——灸法惟用於急痛",ok:false,
       note:"Moxa's core indications are <b>deficiency and cold 虛寒</b>. Acute pain is not its defining use."},
      {t:"No — ST36 must never be moxaed",
       c:"否——足三里不可灸",ok:false,
       note:"The opposite is true; it is a classic moxa point. As always, avoid moxa over a heat pattern or on numb or damaged skin."}
     ]}
  ],
  card:{en:"For the belly and abdomen, keep to Zusanli — three cun below the knee, one finger lateral to the shin.",
        zh:"「肚腹三里留」。犢鼻下三寸，脛骨外一橫指。"} },

{ id:"ST40", region:"leg",
  beats:[
    {en:"A boat-hand describes a chest that feels packed with cotton wool. He coughs up thick sticky phlegm, and his head feels heavy and unclear, like a lid is on it.",
     zh:"一位船工訴胸中如塞棉絮，咳吐痰稠黏，頭重不清，如物覆之。"},
    {en:"Shen Yi measures the midpoint between the knee crease and the ankle, two finger-breadths lateral to the shin bone, into thick muscle.",
     zh:"沈醫師取膝與外踝連線之中點，脛骨前緣外二橫指，肌肉豐厚處。"},
    {en:"\"When phlegm is the problem,\" she says, \"there is one name every student learns first.\"",
     zh:"「痰為病者，」她說，「初學必先識一穴之名。」"}
  ],
  qs:[
    {q:"Why is Fenglong the point named first whenever phlegm appears?",
     cq:"凡痰證，何以首推豐隆？",
     opts:[
      {t:"It is the Connecting point of the Stomach channel and the principal point to transform phlegm and dampness",
       c:"胃經絡穴，化痰祛濕之要穴",ok:true,
       note:"<b>Correct.</b> The classic teaching: <b>脾為生痰之源，肺為貯痰之器</b> — the Spleen makes phlegm, the Lung stores it. ST40 addresses the making."},
      {t:"It is the Sea point of the Stomach channel",
       c:"為胃經合穴",ok:false,
       note:"The Sea point 合穴 of the Stomach is <b>ST36 足三里</b>. ST40 is the Connecting point 絡穴."},
      {t:"It is a local point for the chest",
       c:"為胸部局部穴",ok:false,
       note:"It sits on the lower leg — the effect travels along the channel."}
     ]},
    {q:"The boat-hand's head feels heavy and muddy. Is that a separate complaint?",
     cq:"其頭重昏濁，是否另為一症？",
     opts:[
      {t:"No — phlegm-damp clouding the head produces exactly that heaviness, so the same point addresses it",
       c:"非也——痰濕蒙清竅，正見頭重昏濁，同穴可治",ok:true,
       note:"<b>Correct.</b> Heavy, muddy, wrapped-in-cloth sensations are a signature of <b>damp and phlegm 痰濕</b>. One root, several branches."},
      {t:"Yes — head heaviness always means blood deficiency",
       c:"是——頭重必為血虛",ok:false,
       note:"Blood deficiency produces <b>dizziness and an empty light-headedness</b>, not the heavy wrapped feeling of damp."},
      {t:"Yes — it needs a separate head point before anything else",
       c:"是——須先取頭部穴",ok:false,
       note:"Local points may help, but treating the root — the phlegm — is what resolves the head."}
     ]},
    {q:"Which point would you add to strengthen the Spleen so phlegm stops being produced?",
     cq:"欲健脾以絕生痰之源，當加何穴？",
     opts:[
      {t:"SP9 Yinlingquan, to drain damp, often with ST36 to strengthen transformation",
       c:"陰陵泉利濕，常配足三里以助運化",ok:true,
       note:"<b>Correct.</b> Treat the branch and the root together: <b>ST40 transforms the phlegm, SP9 drains the damp, ST36 rebuilds the Spleen</b> so less is made."},
      {t:"LI4 Hegu, to release the exterior",
       c:"合谷解表",ok:false,
       note:"Releasing the exterior suits a wind invasion, not an interior damp-phlegm pattern."},
      {t:"SI3 Houxi, to open the Governing Vessel",
       c:"後谿通督",ok:false,
       note:"That serves the neck and spine, not phlegm."}
     ]}
  ],
  card:{en:"For phlegm, seek Fenglong — midway between knee and ankle, two fingers lateral to the shin.",
        zh:"「治痰先取豐隆」。膝踝中點，脛骨外二橫指。"} },

{ id:"ST41", region:"leg",
  beats:[
    {en:"A dancer turned her ankle on a loose stone. The front of the joint is swollen, and dorsiflexion hurts most.",
     zh:"一位舞者踏鬆石而扭足，踝之前方腫脹，背屈時痛甚。"},
    {en:"Shen Yi finds the depression at the middle of the front of the ankle, between the two tendons, level with the joint line.",
     zh:"沈醫師取足背踝關節橫紋中央、兩筋之間陷中。"},
    {en:"\"Local point, right where it hurts,\" she says. \"Not every choice needs to be clever. Sometimes the channel simply passes through the injury.\"",
     zh:"「局部取穴，痛在何處便取何處。」她說，「用穴不必皆巧，經行其地，即可取之。」"}
  ],
  qs:[
    {q:"What kind of point is Jiexi, and what does the category suggest?",
     cq:"解谿為何類穴？其類主何？",
     opts:[
      {t:"It is the River point 經穴 of the Stomach channel, and it is also the local point for the ankle",
       c:"胃經之經穴，兼為踝部局部穴",ok:true,
       note:"<b>Correct.</b> ST41 解谿 sits exactly on the ankle joint line — local point for ankle pain, plus the Five Shu River point of the Stomach channel."},
      {t:"It is the Connecting point of the Stomach channel",
       c:"為胃經絡穴",ok:false,
       note:"The Connecting point 絡穴 of the Stomach is <b>ST40 豐隆</b>."},
      {t:"It is the Source point of the Stomach channel",
       c:"為胃經原穴",ok:false,
       note:"The Source point 原穴 of the Stomach is <b>ST42 衝陽</b>."}
     ]},
    {q:"A different patient sprained the outer side of the ankle, below the lateral bone. Which point suits better?",
     cq:"另一病人傷在外踝下方，當取何穴？",
     opts:[
      {t:"GB40 Qiuxu, in the depression anterior and inferior to the lateral malleolus",
       c:"丘墟——外踝前下方陷中",ok:true,
       note:"<b>Correct.</b> Location follows the injury: <b>front of the ankle → ST41</b>; <b>anterolateral, below the outer bone → GB40</b>; <b>behind the outer bone → BL60 崑崙</b>."},
      {t:"ST41 Jiexi — it covers the whole ankle",
       c:"解谿——通治全踝",ok:false,
       note:"ST41 is anterior and central. An outer-side sprain calls for a point on that side."},
      {t:"SP9 Yinlingquan",c:"陰陵泉",ok:false,
       note:"SP9 is at the medial knee — far from the ankle and aimed at damp, not local injury."}
     ]},
    {q:"The dancer's ankle is hot, red and swollen from today's injury. What is the sensible caution?",
     cq:"其踝紅腫熱痛，傷在當日，當注意何事？",
     opts:[
      {t:"In an acutely inflamed, swollen joint, avoid moxa and heavy local stimulation; distal points and rest come first",
       c:"急性紅腫熱痛之關節，忌灸，慎重刺；宜先遠端取穴並令其休息",ok:true,
       note:"<b>Correct.</b> Moxa warms — adding heat to a hot, acute joint works against you. Distal points on the same channel are the safer opening move."},
      {t:"Apply strong moxa immediately to move the blood",
       c:"急施重灸以活血",ok:false,
       note:"Not into acute heat and swelling. Warming methods suit <b>cold and deficiency</b>."},
      {t:"There is no caution — ankle points are always safe",
       c:"無所忌——踝穴皆安",ok:false,
       note:"Every technique has a context. \"Always safe\" is never the right answer in a clinical setting."}
     ]}
  ],
  card:{en:"Jiexi sits in the hollow at the front of the ankle — River point of the Stomach, and the local point where the shoe laces cross.",
        zh:"解谿在足背踝橫紋中央陷中。胃經經穴，亦踝痛之局部要穴。"} },

{ id:"GB34", region:"leg",
  beats:[
    {en:"A stonemason cannot straighten his knee properly. The muscles down the outside of his leg feel like drawn rope, and his mouth tastes bitter in the mornings.",
     zh:"一位石匠膝不能全伸，腿外側筋肉緊如絞繩，晨起口苦。"},
    {en:"Shen Yi finds the depression below and in front of the head of the fibula, and presses until his whole calf twitches. \"Sinews,\" she says. \"Whenever the sinews are the problem, this is where you begin.\"",
     zh:"沈醫師取腓骨小頭前下方陷中，按之其腓腸盡顫。「筋也，」她說，「凡病在筋，皆自此始。」"}
  ],
  qs:[
    {q:"Why does a problem of tight, stiff sinews send you to Yanglingquan first?",
     cq:"筋急僵硬之證，何以首取陽陵泉？",
     opts:[
      {t:"It is the Influential point of the sinews 筋會 — the meeting point for all tendon and muscle disorders",
       c:"八會穴之筋會，凡筋病皆可取之",ok:true,
       note:"<b>Correct.</b> The Eight Influential Points 八會穴 each govern one tissue. <b>筋會陽陵泉</b> — sinews. Stiffness, spasm, contracture, weakness of the tendons: start here."},
      {t:"It is the Influential point of the bones",
       c:"為八會穴之骨會",ok:false,
       note:"<b>骨會大杼 BL11</b> governs bone. GB34 governs sinew."},
      {t:"It is the Influential point of the marrow",
       c:"為八會穴之髓會",ok:false,
       note:"<b>髓會絕骨</b> — that is GB39 懸鐘, a little further down the same leg. Easy to confuse; worth separating now."}
     ]},
    {q:"The mason also has a bitter taste and irritability. Does GB34 speak to that as well?",
     cq:"其口苦煩躁，陽陵泉能否兼顧？",
     opts:[
      {t:"Yes — it is the Lower He-Sea point of the Gallbladder, so it also regulates Liver and Gallbladder and clears damp-heat there",
       c:"能——膽之下合穴，兼疏肝利膽、清泄濕熱",ok:true,
       note:"<b>Correct.</b> GB34 carries three hats at once: <b>合穴 · 筋會 · 膽之下合穴</b>. Bitter taste, rib-side fullness and jaundice all sit inside that third role."},
      {t:"No — it only treats sinews",
       c:"否——惟主筋病",ok:false,
       note:"Its Lower He-Sea role makes it a working Gallbladder point too."},
      {t:"No — bitter taste requires a Stomach point",
       c:"否——口苦當取胃經",ok:false,
       note:"A bitter taste is classically <b>Gallbladder</b> 膽 — 膽氣上溢則口苦."}
     ]},
    {q:"Lower He-Sea points 下合穴 exist because of a specific idea. Which one?",
     cq:"下合穴之設，本於何理？",
     opts:[
      {t:"The six fu organs are treated through He-Sea points on the leg — 合治內腑",
       c:"六腑病取下合穴——「合治內腑」",ok:true,
       note:"<b>Correct.</b> The set: ST36 stomach · ST37 large intestine · ST39 small intestine · BL39 triple burner · BL40 bladder · GB34 gallbladder. Note that three of them sit on the Stomach channel."},
      {t:"They are where the channel qi is weakest",
       c:"乃經氣最弱之處",ok:false,
       note:"The opposite image — He-Sea 合穴 is where qi is most abundant, like a river joining the sea."},
      {t:"They pair each yin organ with a yang organ",
       c:"乃臟腑相配之穴",ok:false,
       note:"That describes Yuan-Luo pairing 原絡配穴, a different method."}
     ]}
  ],
  card:{en:"Yanglingquan is the meeting of the sinews — and the Gallbladder's own He-Sea point on the leg.",
        zh:"陽陵泉，筋之會，亦膽之下合穴。"} },

{ id:"GB39", region:"leg",
  beats:[
    {en:"An elderly weaver's neck aches constantly, her legs feel weak on stairs, and she says her bones feel hollow.",
     zh:"一位老織婦項痛不休，登階足軟，自覺骨中空虛。"},
    {en:"Shen Yi measures three cun above the tip of the outer ankle bone, at the front edge of the fibula. \"The old name for this point is Juegu — 'severed bone',\" she says. \"It is where the marrow gathers.\"",
     zh:"沈醫師量外踝尖上三寸，腓骨前緣。「此穴古名絕骨，」她說，「髓之所會也。」"}
  ],
  qs:[
    {q:"Xuanzhong is the Influential point of what?",
     cq:"懸鐘為八會穴之何會？",
     opts:[
      {t:"Marrow 髓會",c:"髓會",ok:true,
       note:"<b>Correct.</b> <b>髓會絕骨</b>. Because marrow relates to the Kidney and to the brain, GB39 is used for weak legs, bone problems, dizziness and stiff neck."},
      {t:"Sinews 筋會",c:"筋會",ok:false,
       note:"That is <b>GB34 陽陵泉</b>, higher on the same leg."},
      {t:"Blood 血會",c:"血會",ok:false,
       note:"<b>血會膈俞 BL17</b>."}
     ]},
    {q:"Name the eight Influential points and their tissues — which of these pairs is wrong?",
     cq:"八會穴之配屬，下列何者為誤？",
     opts:[
      {t:"Qi 氣會 — Danzhong CV17 · Blood 血會 — Geshu BL17 · Vessels 脈會 — Taiyuan LU9",
       c:"氣會膻中、血會膈俞、脈會太淵",ok:true,
       note:"<b>All three are correct.</b> The full eight: 臟會章門 · 腑會中脘 · 氣會膻中 · 血會膈俞 · 筋會陽陵泉 · 脈會太淵 · 骨會大杼 · 髓會絕骨."},
      {t:"Zang organs 臟會 — Zhongwan CV12",c:"臟會中脘",ok:false,
       note:"Reversed. <b>臟會章門 LR13</b>; <b>腑會中脘 CV12</b>. Zhang Men for the yin organs, Zhong Wan for the yang."},
      {t:"Bone 骨會 — Yanglingquan GB34",c:"骨會陽陵泉",ok:false,
       note:"<b>骨會大杼 BL11</b>. GB34 is the sinew point."}
     ]},
    {q:"The weaver's neck is stiff and her legs are weak. Which combination reasons well?",
     cq:"項強而足軟，何組配穴為當？",
     opts:[
      {t:"GB39 for marrow and the neck, with GB20 locally at the base of the skull and KI3 to support the Kidney",
       c:"懸鐘以充髓治項，配風池以治局部，太谿以補腎",ok:true,
       note:"<b>Correct.</b> The reasoning chain: <b>Kidney rules bone and produces marrow 腎主骨生髓</b> — so weak bones, weak legs and marrow emptiness bring the Kidney into the treatment."},
      {t:"LI4 and LU7 only",c:"惟取合谷、列缺",ok:false,
       note:"Both are exterior-releasing, head-and-face points. Neither addresses marrow or Kidney deficiency."},
      {t:"ST40 and SP9",c:"豐隆、陰陵泉",ok:false,
       note:"Those handle phlegm and damp — an excess picture, not this deficiency one."}
     ]}
  ],
  card:{en:"Xuanzhong — 'severed bone' — is where the marrow gathers, three cun above the outer ankle.",
        zh:"懸鐘，一名絕骨，髓之會也。外踝尖上三寸。"} },

{ id:"GB37", region:"leg",
  beats:[
    {en:"A copyist's eyes have grown dim. Fine characters blur by lamplight, and by evening they ache and water.",
     zh:"一位抄書人目漸昏花，燈下細字模糊，入夜則目脹流淚。"},
    {en:"Shen Yi measures five cun above the outer ankle bone. \"The name of this point is Guangming — Bright Light,\" she says. \"Points are often named after what they do. Learn the names and half the work is done.\"",
     zh:"沈醫師量外踝尖上五寸。「此穴名光明，」她說，「穴名多從其用而立。識其名，其功已得其半。」"}
  ],
  qs:[
    {q:"Why does a Gallbladder channel point on the lower leg treat the eyes?",
     cq:"膽經下肢之穴，何以能明目？",
     opts:[
      {t:"It is the Connecting point of the Gallbladder and links to the Liver — and the Liver opens into the eyes 肝開竅於目",
       c:"膽經絡穴，別走肝經；肝開竅於目",ok:true,
       note:"<b>Correct.</b> The Connecting point 絡穴 is the bridge between a paired yin and yang channel. GB37 crosses to the Liver, and the Liver governs the eyes."},
      {t:"Because the Gallbladder channel begins at the outer canthus, so any point on it treats the eye equally",
       c:"因膽經起於目外眥，經上諸穴皆同治目",ok:false,
       note:"The channel does begin at the outer canthus, but that alone would make every GB point an eye point. The reason GB37 stands out is its <b>Luo connection to the Liver</b>."},
      {t:"Because it is a Sea point",
       c:"因其為合穴",ok:false,
       note:"GB37 is the Connecting point 絡穴. The Gallbladder's Sea point is GB34 陽陵泉."}
     ]},
    {q:"A Source point and its paired Connecting point are often needled together. What is that method called?",
     cq:"原穴與其表裡經之絡穴同用，此法何名？",
     opts:[
      {t:"Host and guest — Yuan-Luo pairing 原絡配穴法, taking the Source of the affected channel and the Connecting point of its partner",
       c:"原絡配穴法（主客配穴）：取本經原穴，配表裡經絡穴",ok:true,
       note:"<b>Correct.</b> For an eye complaint of Liver origin you might take <b>LR3 太衝 (Source) with GB37 光明 (Connecting)</b> — the pattern in miniature."},
      {t:"Five Shu point selection",c:"五輸穴配法",ok:false,
       note:"That is the Well–Spring–Stream–River–Sea series, a different scheme."},
      {t:"Front-Mu and Back-Shu pairing",c:"俞募配穴",ok:false,
       note:"That pairs a chest or abdomen point with a back point for the same organ."}
     ]},
    {q:"The copyist's eyes are dry and gritty rather than red and swollen. What does that shift?",
     cq:"其目乾澀而不紅腫，辨證有何不同？",
     opts:[
      {t:"It suggests Liver blood or yin failing to moisten the eyes — so nourishing points such as LR3 and KI3 suit better than draining ones",
       c:"屬肝血肝陰不足，目失濡養；宜補，如太衝配太谿，不宜專清",ok:true,
       note:"<b>Correct, and this is the clinical half of the point.</b> Red, swollen, painful eyes = <b>excess fire</b>, drain. Dry, gritty, tired eyes = <b>deficiency</b>, nourish. Same region, opposite method."},
      {t:"Nothing — eye points work the same either way",
       c:"無別——治目之穴，用法皆同",ok:false,
       note:"The point may be the same; the <b>method</b> — reinforcing or reducing — is not."},
      {t:"It means the problem is not in the Liver at all",
       c:"其病不在肝",ok:false,
       note:"Still the Liver, but a deficient pattern of it rather than an excess one."}
     ]}
  ],
  card:{en:"Guangming — Bright Light — is the Gallbladder's Connecting point, crossing to the Liver, which opens into the eyes.",
        zh:"光明，膽經絡穴，別走於肝；肝開竅於目。"} },

{ id:"GB40", region:"leg",
  beats:[
    {en:"A drover rolled his ankle on the mountain road. The swelling sits in front of and below the outer ankle bone, and he cannot turn the foot outward.",
     zh:"一位趕牲口的人於山路扭傷，腫在外踝前下方，足不能外翻。"},
    {en:"Shen Yi rests her thumb in that same hollow. \"Source point of the Gallbladder,\" she says. \"Local treatment and channel treatment happen to be the same place today.\"",
     zh:"沈醫師以拇指按其陷中。「膽經原穴，」她說，「今日局部與循經，恰在一處。」"}
  ],
  qs:[
    {q:"What does calling GB40 a Source point 原穴 actually mean?",
     cq:"稱丘墟為原穴，其義為何？",
     opts:[
      {t:"It is where the original qi of that channel's organ gathers and can be reached — so it treats disorders of the Gallbladder itself, not only local pain",
       c:"原氣所留止之處，故能治本腑之病，不獨治局部",ok:true,
       note:"<b>Correct.</b> Yang channels have a Source point 原穴 distinct from the Stream point; on yin channels the Stream point <i>is</i> the Source. Source points are used for both organ and channel problems."},
      {t:"It is simply the first point of the channel",
       c:"乃本經之首穴",ok:false,
       note:"The first Gallbladder point is <b>GB1 瞳子髎</b>, at the outer canthus."},
      {t:"It is where the channel is most superficial",
       c:"乃經脈最淺之處",ok:false,
       note:"Depth is not the defining idea — the gathering of original qi 原氣 is."}
     ]},
    {q:"Three points sit around the outer ankle. Match them correctly.",
     cq:"外踝周圍三穴，其位為何？",
     opts:[
      {t:"GB40 anterior-inferior to the malleolus · BL60 in the hollow between the malleolus and the Achilles tendon · GB39 three cun above the tip",
       c:"丘墟在外踝前下；崑崙在外踝與跟腱之間；懸鐘在外踝尖上三寸",ok:true,
       note:"<b>Correct.</b> Front, back, above — a small map worth being able to draw from memory."},
      {t:"GB40 behind the malleolus · BL60 in front of it",
       c:"丘墟在踝後，崑崙在踝前",ok:false,
       note:"Reversed. <b>崑崙 BL60 is behind</b> — the Bladder channel runs down the back of the leg."},
      {t:"All three are on the Gallbladder channel",
       c:"三穴皆屬膽經",ok:false,
       note:"BL60 崑崙 belongs to the <b>Bladder 足太陽膀胱經</b>."}
     ]},
    {q:"The drover asks whether he should walk it off. What is a careful answer?",
     cq:"其人問可否忍痛續行，當如何答？",
     opts:[
      {t:"Rest the joint, and if there is severe swelling, deformity or inability to bear weight, have it examined for a fracture before any treatment",
       c:"宜先休息；若腫甚、畸形、不能負重，當先就醫排除骨折，再議針灸",ok:true,
       note:"<b>Correct.</b> Recognising what is <i>not</i> a needling problem is part of clinical skill. Acupuncture does not replace assessment of a possible fracture."},
      {t:"Yes — walking moves the blood and speeds healing",
       c:"可——行走活血，愈之愈速",ok:false,
       note:"Not in an acute joint injury, and not before serious injury has been ruled out."},
      {t:"Yes, as long as the point is needled first",
       c:"先針此穴，即可續行",ok:false,
       note:"Needling does not clear someone to load an injured joint."}
     ]}
  ],
  card:{en:"Qiuxu is the Gallbladder's Source point, in the hollow in front of and below the outer ankle bone.",
        zh:"丘墟，膽經原穴，在外踝前下方陷中。"} },

{ id:"BL40", region:"back",
  beats:[
    {en:"A porter has carried sacks all season. His lower back seizes when he bends, and the pain runs down the back of his thigh.",
     zh:"一位腳夫終季負重，腰俯則痛，痛引股後。"},
    {en:"Shen Yi has him lie face down and finds the midpoint of the crease behind the knee, between the two great tendons. \"For the lower back,\" she says, \"seek Weizhong.\"",
     zh:"沈醫師令其俯臥，取膕橫紋中點、兩大筋之間。「腰背委中求。」她說。"}
  ],
  qs:[
    {q:"Why does a point behind the knee treat the lower back?",
     cq:"膕中之穴，何以能治腰？",
     opts:[
      {t:"The Bladder channel runs the whole length of the back and down the leg, so BL40 reaches the lumbar region along that route — and it is the Four Command point for the low back",
       c:"足太陽膀胱經行於腰背下至於腿，故委中可循經治腰；且為四總穴之一",ok:true,
       note:"<b>Correct.</b> <b>腰背委中求</b>. It is also the Sea point 合穴 and the Lower He-Sea of the Bladder."},
      {t:"Because it is a local point for the lumbar spine",
       c:"為腰部局部穴",ok:false,
       note:"It is behind the knee — distal treatment along the channel."},
      {t:"Because it is the Source point of the Bladder",
       c:"為膀胱經原穴",ok:false,
       note:"The Bladder's Source point 原穴 is <b>BL64 京骨</b>."}
     ]},
    {q:"A different patient has summer-heat with vomiting, diarrhoea and a hot dark rash. BL40 is mentioned again. Why?",
     cq:"另一病人暑證吐瀉、身發紅疹，何以仍取委中？",
     opts:[
      {t:"BL40 is classically pricked to bleed to clear summer-heat and cool the blood",
       c:"委中古法點刺放血，以泄暑熱、涼血",ok:true,
       note:"<b>Correct.</b> The old name is <b>血郄</b>. Bleeding technique at BL40 is a classic method for heat in the blood and for stubborn skin conditions — done only with proper CNT and clean-field technique."},
      {t:"Because it tonifies qi in heat patterns",
       c:"暑證宜補氣，故取之",ok:false,
       note:"Heat patterns call for clearing, not tonifying."},
      {t:"Because summer-heat always enters through the knee",
       c:"暑邪皆從膝而入",ok:false,
       note:"Not a real mechanism."}
     ]},
    {q:"What must be respected anatomically at BL40?",
     cq:"針委中，解剖上當顧忌何事？",
     opts:[
      {t:"The popliteal artery and nerve lie there — needle with care and avoid deep or careless insertion",
       c:"膕動脈與神經在此，不宜深刺、亂刺",ok:true,
       note:"<b>Correct.</b> Knowing the vessel is beneath your hand is exactly what CNT training is for. Caution, correct depth, and never through broken or infected skin."},
      {t:"There are no structures of concern behind the knee",
       c:"膕中無所忌",ok:false,
       note:"The popliteal fossa carries a major artery, vein and nerve."},
      {t:"The lung apex is nearby",
       c:"近肺尖",ok:false,
       note:"That caution belongs to points around the upper chest and shoulder, not the knee."}
     ]}
  ],
  card:{en:"For the lower back, seek Weizhong — midpoint of the crease behind the knee.",
        zh:"「腰背委中求」。膕橫紋中點是也。"} },

{ id:"BL57", region:"back",
  beats:[
    {en:"A messenger who runs the river road gets calf cramps at night, hard enough to wake him.",
     zh:"一位跑河道的信差夜間腓腸拘攣，痛而驚醒。"},
    {en:"Shen Yi has him point his toes. The calf muscle parts into two heads and forms a narrow valley below them. \"Right in the valley,\" she says. \"The name means Supporting Mountain.\"",
     zh:"沈醫師令其足尖下踏，腓腸分為二頭，其下成一尖角凹陷。「正在陷中，」她說，「其名承山。」"}
  ],
  qs:[
    {q:"What is BL57 best known for?",
     cq:"承山最擅治何？",
     opts:[
      {t:"Calf cramp and spasm, lower leg pain — and it is a classic point for haemorrhoids",
       c:"腓腸拘急、小腿痛；又為治痔之要穴",ok:true,
       note:"<b>Correct.</b> Two very different indications on one point. The haemorrhoid use comes from the Bladder channel's connection through the lower back and anal region."},
      {t:"Cough and wheezing",c:"咳嗽氣喘",ok:false,
       note:"Those belong to Lung channel and upper back points."},
      {t:"Ear ringing",c:"耳鳴",ok:false,
       note:"That is Triple Burner and Gallbladder territory — TE3, TE17, GB20."}
     ]},
    {q:"The messenger's cramps come at night, with dry skin and pale nails. What pattern would you consider?",
     cq:"其攣在夜，膚燥甲淡，當考慮何證？",
     opts:[
      {t:"Liver blood deficiency failing to nourish the sinews — because the Liver rules the sinews and blood returns to the Liver at night",
       c:"肝血不足，筋失所養；肝主筋，夜臥血歸於肝",ok:true,
       note:"<b>Correct.</b> Cramping that is worse at night, with pale nails, dry skin and perhaps blurred vision, points to <b>血虛</b>. Local points ease the spasm; nourishing blood addresses why it keeps happening."},
      {t:"Damp-heat pouring into the lower limbs",
       c:"濕熱下注",ok:false,
       note:"That produces heaviness, swelling, heat and often a heavy greasy tongue coat — not dry skin and pale nails."},
      {t:"Exterior wind-cold",c:"風寒外束",ok:false,
       note:"Nothing here suggests an exterior pattern."}
     ]},
    {q:"Which point would you add to treat the root of that blood deficiency?",
     cq:"欲治其血虛之本，當加何穴？",
     opts:[
      {t:"GB34, the meeting of the sinews, together with points that build blood such as ST36 and SP6",
       c:"配陽陵泉（筋會），並取足三里、三陰交以生血",ok:true,
       note:"<b>Correct.</b> Local point for the cramp, sinew-meeting point for the tissue, and middle-burner points because <b>qi and blood are made from food and drink</b>."},
      {t:"LI4 and SI3",c:"合谷、後谿",ok:false,
       note:"Upper-body points aimed at face and neck — not this pattern."},
      {t:"GB8 and Taiyang",c:"率谷、太陽",ok:false,
       note:"Head points for temporal headache."}
     ]}
  ],
  card:{en:"Chengshan sits in the valley below the two heads of the calf — for cramp, for lower leg pain, and classically for haemorrhoids.",
        zh:"承山在腓腸肌兩頭之下陷中。主腓腸拘急、小腿痛，古亦治痔。"} },

{ id:"BL60", region:"back",
  beats:[
    {en:"A pilgrim arrives with a headache at the back of the skull, a stiff neck, and heels sore from the road.",
     zh:"一位香客而來，後頭痛、項強，足跟因跋涉而痛。"},
    {en:"Shen Yi finds the hollow between the tip of the outer ankle bone and the Achilles tendon. \"One point, and all three complaints are on the same road,\" she says.",
     zh:"沈醫師取外踝尖與跟腱之間陷中。「一穴而三症同在一經。」她說。"}
  ],
  qs:[
    {q:"How can Kunlun treat an occipital headache?",
     cq:"崑崙何以能治後頭痛？",
     opts:[
      {t:"The Bladder channel runs from the head down the back to the ankle, so its River point treats the far end of its own route",
       c:"膀胱經自頭下行至踝，經穴可治其經之遠端",ok:true,
       note:"<b>Correct.</b> Occipital headache and stiff neck are <b>Taiyang 太陽</b> territory. BL60 崑崙 is the River point 經穴 of that channel."},
      {t:"Because the Achilles tendon connects to the skull",
       c:"因跟腱直連於顱",ok:false,
       note:"Not anatomy — channel theory. The route is what carries the effect."},
      {t:"Because it is the Source point of the Bladder",
       c:"為膀胱經原穴",ok:false,
       note:"The Source point 原穴 is <b>BL64 京骨</b>. BL60 is the River point 經穴."}
     ]},
    {q:"Which pairing of headache region and channel is correct?",
     cq:"頭痛部位與經脈之配屬，何者為是？",
     opts:[
      {t:"Occiput → Taiyang · Sides → Shaoyang · Forehead → Yangming · Vertex → Jueyin",
       c:"後頭屬太陽、頭側屬少陽、前額屬陽明、巔頂屬厥陰",ok:true,
       note:"<b>Correct — memorise this one.</b> It turns 'headache' into a channel diagnosis, and a channel diagnosis into a point prescription."},
      {t:"Occiput → Yangming · Forehead → Taiyang",
       c:"後頭屬陽明、前額屬太陽",ok:false,
       note:"Reversed. Yangming runs over the <b>forehead</b>; Taiyang over the <b>back of the head</b>."},
      {t:"Vertex → Shaoyang",c:"巔頂屬少陽",ok:false,
       note:"The vertex is <b>Jueyin 厥陰</b> — the Liver channel reaches the top of the head, which is why LR3 is used there."}
     ]},
    {q:"Is there a caution for BL60?",
     cq:"崑崙有何禁忌？",
     opts:[
      {t:"It is traditionally contraindicated in pregnancy, as it moves strongly and is said to promote labour",
       c:"孕婦禁針——其行氣力強，古謂能催產",ok:true,
       note:"<b>Correct.</b> Keep the pregnancy-caution group together in your memory: <b>LI4 合谷 · SP6 三陰交 · BL60 崑崙 · BL67 至陰</b> and points over the lower abdomen and lumbosacral region."},
      {t:"There is no caution",c:"無所禁忌",ok:false,
       note:"There is a well-known one."},
      {t:"It must never be needled with LI4",c:"不可與合谷同用",ok:false,
       note:"They combine freely — the shared caution is pregnancy, not the combination."}
     ]}
  ],
  card:{en:"Kunlun is the River point of the Bladder, behind the outer ankle — for the back of the head, the neck, and the heel. Not in pregnancy.",
        zh:"崑崙，膀胱經經穴，在外踝後。主後頭項強、足跟痛。孕婦禁針。"} },

{ id:"SP9", region:"leg",
  beats:[
    {en:"A rice farmer's legs feel heavy and swollen after the wet season. His appetite is poor, his stools loose, and his tongue is puffy with tooth marks along the edge.",
     zh:"一位稻農經雨季後，兩腿沉重浮腫，納呆便溏，舌胖有齒痕。"},
    {en:"Shen Yi runs her thumb up the inner shin until it stops in the hollow below the knob at the top. \"Where the finger halts, the point is,\" she says.",
     zh:"沈醫師沿脛骨內側緣上推，至膝下高骨後之凹陷而止。「指止之處即是穴。」她說。"}
  ],
  qs:[
    {q:"Why is Yinlingquan the point for a damp, heavy, swollen picture?",
     cq:"濕重身腫，何以取陰陵泉？",
     opts:[
      {t:"It is the Sea point of the Spleen and the principal point to drain damp and open the waterways of the lower burner",
       c:"脾經合穴，利水滲濕、通調下焦水道之要穴",ok:true,
       note:"<b>Correct.</b> Oedema, heavy limbs, loose stool, vaginal discharge, difficult urination — all damp, all SP9 territory."},
      {t:"It tonifies Kidney yin",c:"滋補腎陰",ok:false,
       note:"That is closer to <b>KI3 太谿</b>, on the same lower leg but the Kidney channel."},
      {t:"It transforms phlegm in the chest",c:"化胸中之痰",ok:false,
       note:"ST40 豐隆 is the phlegm point. SP9 drains damp — related, but the emphasis differs."}
     ]},
    {q:"How do ST36 and SP9 divide the work?",
     cq:"足三里與陰陵泉，其用有何分別？",
     opts:[
      {t:"ST36 builds — it tonifies Spleen and Stomach; SP9 drains — it moves damp out. In Spleen deficiency with damp they are used together",
       c:"足三里主補，健脾益氣；陰陵泉主利，滲濕外出。脾虛濕困，二穴常並用",ok:true,
       note:"<b>Correct, and this is the pair worth remembering as a pair.</b> Deficiency creates damp; damp then burdens the Spleen further. Build and drain at the same time."},
      {t:"They do the same thing, so only one is needed",
       c:"二者功同，取一即可",ok:false,
       note:"Tonifying and draining are opposite methods. Using both is a deliberate choice, not redundancy."},
      {t:"ST36 drains damp and SP9 tonifies",
       c:"足三里滲濕，陰陵泉補虛",ok:false,
       note:"Reversed."}
     ]},
    {q:"There is a mirror-image point on the outside of the same knee. Which, and what does the pairing teach?",
     cq:"膝外側有一穴與之相對，為何穴？其對照之義為何？",
     opts:[
      {t:"GB34 Yanglingquan — Yang Mound Spring outside, Yin Mound Spring inside; same height, opposite sides, opposite channels",
       c:"陽陵泉——外為陽陵，內為陰陵；高低相當，內外相對",ok:true,
       note:"<b>Correct.</b> Point names are a memory system. 陽/陰, 陵 (mound), 泉 (spring) — once you hear the pattern, the location comes free."},
      {t:"ST36 Zusanli",c:"足三里",ok:false,
       note:"ST36 is lower and on the front of the leg, not directly opposite SP9."},
      {t:"BL40 Weizhong",c:"委中",ok:false,
       note:"BL40 is behind the knee, in the crease."}
     ]}
  ],
  card:{en:"Yinlingquan drains damp from the lower body — Yang Mound outside, Yin Mound inside, at the same height on the knee.",
        zh:"陰陵泉，下焦祛濕要穴。外為陽陵，內為陰陵，高低相當。"} },

{ id:"SP6", region:"leg",
  beats:[
    {en:"A young weaver has had painful periods for years. They come late, the blood is dark with clots, and she sleeps badly the week before.",
     zh:"一位年輕織婦經痛多年，經行後期，色暗有塊，經前一週輾轉難眠。"},
    {en:"Shen Yi measures four finger-breadths up from the tip of the inner ankle bone, and settles her thumb just behind the edge of the shin bone.",
     zh:"沈醫師自內踝尖上量四橫指，按於脛骨內側緣後方。"},
    {en:"\"Three channels cross under my thumb,\" she says. \"Spleen, Liver, Kidney. Her periods are all three at once — so I would rather use the crossing than chase each one.\"",
     zh:"「我指下有三經相交，」她說，「脾、肝、腎。她的經病三者俱涉，與其逐一而治，不如取其交會。」"}
  ],
  qs:[
    {q:"Why is Sanyinjiao used in almost every gynaecological prescription?",
     cq:"婦科諸方，何以幾乎必用三陰交？",
     opts:[
      {t:"It is the meeting point of the Spleen, Liver and Kidney channels, and menstrual disorders usually involve some combination of those three",
       c:"為脾、肝、腎三經交會穴；經病多不離此三經",ok:true,
       note:"<b>Correct.</b> Spleen makes and holds blood, Liver stores and moves it, Kidney governs reproduction. One point at the crossing reaches all three — that is the economy of it."},
      {t:"Because it is the Source point of the Spleen channel",
       c:"為脾經原穴",ok:false,
       note:"The Spleen's Source point 原穴 is <b>Taibai SP3</b>. SP6 is a meeting point 交會穴, not a Source point."},
      {t:"Because it is a local point over the uterus",
       c:"為胞宮之局部穴",ok:false,
       note:"It is on the lower leg — distal. Its reach comes from the three channels that pass through it."}
     ]},
    {q:"Her blood is dark with clots and the pain eases with a warm compress. What does that suggest, and what does it add to the treatment?",
     cq:"其血色暗有塊，得溫則減，屬何證？當增何法？",
     opts:[
      {t:"Cold with blood stasis — so warming methods suit, and moxa on SP6 or the lower abdomen fits the pattern",
       c:"寒凝血瘀——宜溫，可灸三陰交或小腹",ok:true,
       note:"<b>Correct.</b> Dark blood with clots, pain relieved by warmth and worse with cold, is a coherent <b>寒凝血瘀</b> picture. Note that this reasoning also tells you moxa is appropriate — pattern first, technique second."},
      {t:"Damp-heat in the lower burner — so cooling and draining suit",
       c:"下焦濕熱——宜清利",ok:false,
       note:"Damp-heat brings burning, yellow discharge, and pain that is <b>worse</b> with warmth. Here warmth helps, which points the other way."},
      {t:"Blood deficiency — so the period would be heavy and bright red",
       c:"血虛——當經量多而色鮮",ok:false,
       note:"Blood deficiency gives a <b>scant, pale</b> period with dull pain that eases with pressure — not dark clots."}
     ]},
    {q:"A month later the same woman returns and mentions she is pregnant. What changes?",
     cq:"一月後其人復診，告知已有身孕。當如何？",
     opts:[
      {t:"Stop using SP6 — it is contraindicated in pregnancy, in the same group as LI4 and BL60",
       c:"停用三陰交——孕婦禁針，與合谷、崑崙同屬此類",ok:true,
       note:"<b>Correct, and this is the answer that matters most.</b> Keep the pregnancy-caution group together: <b>LI4 合谷 · SP6 三陰交 · BL60 崑崙 · BL67 至陰</b>, plus points over the lower abdomen and lumbosacral area. Ask about pregnancy before you needle, not after."},
      {t:"Continue, but needle more gently",
       c:"照常施針，惟手法宜輕",ok:false,
       note:"A contraindication is not softened by technique. Choose a different point."},
      {t:"Continue — the contraindication only applies in the first month",
       c:"惟首月禁用，其後無妨",ok:false,
       note:"The caution is not limited to the first month."}
     ]}
  ],
  card:{en:"Sanyinjiao is where Spleen, Liver and Kidney cross — three cun above the inner ankle. Never in pregnancy.",
        zh:"三陰交，脾肝腎三經交會，內踝上三寸。孕婦禁針。"} },

{ id:"KI3", region:"leg",
  beats:[
    {en:"A widow in her sixties has ringing in her ears that grows louder when she is tired, aching in her lower back, and heat in her palms at night.",
     zh:"一位六旬孀婦，耳鳴遇勞則甚，腰痠，夜間手心發熱。"},
    {en:"Shen Yi finds the hollow between the inner ankle bone and the Achilles tendon, level with the tip. \"Great Ravine,\" she says. \"When the Kidney is empty, this is where you fill it.\"",
     zh:"沈醫師取內踝尖與跟腱之間陷中。「太谿也，」她說，「腎虛則補於此。」"}
  ],
  qs:[
    {q:"Why does this picture point to the Kidney?",
     cq:"此證何以歸之於腎？",
     opts:[
      {t:"The Kidney opens into the ear, rules the bones and the lower back, and Kidney yin deficiency produces night heat in the palms and soles",
       c:"腎開竅於耳，主骨，腰為腎之府；腎陰虛則五心煩熱",ok:true,
       note:"<b>Correct.</b> Three separate signs converging on one organ is what pattern differentiation 辨證 looks like in practice."},
      {t:"Because ear ringing is always a Kidney problem",
       c:"耳鳴皆屬腎",ok:false,
       note:"Not always — sudden loud tinnitus worse with anger is <b>Liver-Gallbladder fire</b>. It is the <i>combination</i> of signs that decides."},
      {t:"Because she is elderly, so it must be Kidney",
       c:"因其年老，故必屬腎",ok:false,
       note:"Age raises the likelihood; the signs confirm it. Diagnosis is not demographics."}
     ]},
    {q:"What kind of point is Taixi, and why does that matter for tonifying?",
     cq:"太谿為何類穴？於補法有何意義？",
     opts:[
      {t:"On yin channels the Stream point is also the Source point — so KI3 is 輸穴 and 原穴 together, and Source points are the classic choice for tonifying an organ",
       c:"陰經以輸為原，太谿既為輸穴亦為原穴；原穴為補臟之要",ok:true,
       note:"<b>Correct.</b> <b>陰經以輸為原</b> — a rule that saves you a whole column of the table."},
      {t:"It is the Sea point of the Kidney channel",
       c:"為腎經合穴",ok:false,
       note:"The Kidney's Sea point 合穴 is <b>KI10 陰谷</b>."},
      {t:"It is the Well point of the Kidney channel",
       c:"為腎經井穴",ok:false,
       note:"The Well point 井穴 is <b>KI1 湧泉</b>, on the sole."}
     ]},
    {q:"Her hands are hot at night but she also feels cold and her legs are weak. How do you read that?",
     cq:"其夜間手熱，而畏寒足軟，何以解之？",
     opts:[
      {t:"Kidney yin and yang can both be deficient; KI3 supports the Kidney in either direction, and the method — reinforcing, with or without moxa — is chosen to fit",
       c:"腎陰陽俱虛者有之。太谿補腎，陰陽皆可；隨證施補法，或加灸",ok:true,
       note:"<b>Correct.</b> Yin and yang deficiency are not mutually exclusive, especially in the elderly. The point stays; the technique adapts. Mixed pictures are common — say so rather than forcing one label."},
      {t:"One of the two observations must be wrong",
       c:"二者必有一誤",ok:false,
       note:"Real patients present mixed patterns. Discarding inconvenient signs is how a diagnosis goes wrong."},
      {t:"It rules out any Kidney involvement",
       c:"可排除腎病",ok:false,
       note:"It suggests the Kidney is involved on both sides of the pair."}
     ]}
  ],
  card:{en:"Taixi is the Kidney's Source point — behind the inner ankle, where an empty Kidney is filled.",
        zh:"太谿，腎經原穴，在內踝後。腎虛者補之於此。"} },

{ id:"LR3", region:"leg",
  beats:[
    {en:"A shopkeeper has been grinding her teeth. Her ribs feel tight, she sighs without meaning to, her head throbs at the very top, and her period comes late and painful.",
     zh:"一位店主夜間磨牙，脅肋脹滿，頻頻嘆息，巔頂脹痛，經行後期而痛。"},
    {en:"Shen Yi slides her thumb up between the first and second toes until it wedges. \"Great Rushing,\" she says. \"When qi will not move, this is the gate.\"",
     zh:"沈醫師自足背第一、二蹠骨間上推至骨縫盡處。「太衝也，」她說，「氣鬱不行，此其門戶。」"}
  ],
  qs:[
    {q:"Sighing, rib-side fullness and irritability. What does LR3 do about it?",
     cq:"善太息、脅脹、煩躁，太衝何以能治？",
     opts:[
      {t:"It is the Source point of the Liver and the main point to course Liver qi and release constraint",
       c:"肝經原穴，疏肝理氣、解鬱之要穴",ok:true,
       note:"<b>Correct.</b> <b>肝主疏泄</b> — the Liver keeps qi moving freely. When it fails, you get sighing, distension, irritability and irregular periods. LR3 is the first answer."},
      {t:"It tonifies Liver blood directly",
       c:"直補肝血",ok:false,
       note:"Its main action is <b>moving</b>. Blood-building leans on ST36, SP6 and diet."},
      {t:"It clears damp from the lower burner",
       c:"清下焦濕",ok:false,
       note:"That is SP9 陰陵泉."}
     ]},
    {q:"Her headache is at the very top of the head. Does that fit?",
     cq:"其痛在巔頂，與肝相合否？",
     opts:[
      {t:"Yes — the Liver channel reaches the vertex, so vertex headache is Jueyin territory",
       c:"合——肝經上至巔頂，巔頂痛屬厥陰",ok:true,
       note:"<b>Correct.</b> Vertex headache with irritability and a wiry pulse is a classic Liver picture. The location of the pain is itself a diagnostic clue."},
      {t:"No — the vertex belongs to the Bladder channel",
       c:"否——巔頂屬膀胱經",ok:false,
       note:"The Bladder channel does cross the top of the head, but the <b>vertex headache pattern</b> is classically assigned to Jueyin 厥陰肝經."},
      {t:"No — headaches never localise by channel",
       c:"否——頭痛不分經",ok:false,
       note:"They do, reliably, and that mapping is heavily tested."}
     ]},
    {q:"LI4 and LR3 together have a name. What is it, and what is it for?",
     cq:"合谷配太衝，其名為何？主治何用？",
     opts:[
      {t:"The Four Gates 四關 — used to move qi and blood powerfully through the whole body, for pain and constraint",
       c:"四關穴——大開氣血，行氣活血，主痛證與鬱證",ok:true,
       note:"<b>Correct.</b> Both are Source points, one on each hand and each foot. Because both move so strongly, the Four Gates are <b>avoided in pregnancy</b>."},
      {t:"The Eight Confluent points",c:"八脈交會穴",ok:false,
       note:"Those are the eight that open the extraordinary vessels — SI3, BL62, LU7, KI6, PC6, SP4, TE5, GB41."},
      {t:"The Four Command points",c:"四總穴",ok:false,
       note:"Those are ST36, BL40, LU7 and LI4 — each governing one region."}
     ]}
  ],
  card:{en:"Taichong is the Liver's Source point — the gate for stuck qi. With Hegu it forms the Four Gates.",
        zh:"太衝，肝經原穴，開鬱行氣之門。配合谷為「四關」。"} },

/* ══════════════ HEAD 頭 ══════════════ */

{ id:"GB20", region:"head",
  beats:[
    {en:"A traveller arrives chilled, with a headache at the back of the head, a stiff neck, and a strong dislike of the wind at his collar.",
     zh:"一位行旅受寒而至，後頭痛、項強，惡風襲頸。"},
    {en:"Shen Yi finds the two hollows below the base of the skull, between the great muscles. \"Wind Pool,\" she says. \"Wind gathers here, so this is where it is dispersed.\"",
     zh:"沈醫師取枕骨下兩大筋間之凹陷。「風池也，」她說，「風邪聚於此，故散之於此。」"}
  ],
  qs:[
    {q:"Why is GB20 the point for wind — both from outside and from within?",
     cq:"風池何以能治外風、內風？",
     opts:[
      {t:"It dispels exterior wind in a wind-cold or wind-heat invasion, and also subdues interior wind and Liver yang rising",
       c:"外可祛風解表，內可平肝熄風、潛陽",ok:true,
       note:"<b>Correct.</b> One point, two very different roles. External: chills, headache, stiff neck. Internal: dizziness, hypertension-type headache, Liver yang rising."},
      {t:"Only exterior wind",c:"惟治外風",ok:false,
       note:"It is used for interior wind and Liver yang patterns just as often."},
      {t:"Only interior wind",c:"惟治內風",ok:false,
       note:"It is a first-line exterior-releasing point for the neck and head."}
     ]},
    {q:"The traveller also complains of red, sore, tired eyes. Does GB20 help?",
     cq:"其目赤澀而倦，風池能治否？",
     opts:[
      {t:"Yes — it brightens the eyes and clears the head, and is used for eye and ear complaints as well as headache",
       c:"能——清頭明目，兼治目疾、耳疾與頭痛",ok:true,
       note:"<b>Correct.</b> GB20 風池 is one of the most-used points in the whole repertoire precisely because it covers head, eyes, ears, neck and wind together."},
      {t:"No — eyes require only points on the foot",
       c:"否——目疾惟取足穴",ok:false,
       note:"Local and distal both apply. GB37 光明 on the leg and GB20 at the head are often used together."},
      {t:"No — GB20 only treats the neck",
       c:"否——風池惟治項",ok:false,
       note:"Its reach is much wider than the neck."}
     ]},
    {q:"What is the essential safety point when needling GB20?",
     cq:"針風池，安全上最須注意者為何？",
     opts:[
      {t:"Angle the needle toward the tip of the nose or the opposite eye and control the depth — deep or wrongly angled insertion risks the medulla",
       c:"針尖向鼻尖或對側目內眥，嚴控深度——深刺或方向錯誤可傷延髓",ok:true,
       note:"<b>Correct, and this is a genuinely dangerous point.</b> Angle and depth are not stylistic choices here. This is why GB20 gets so much attention in CNT and safe-needling training."},
      {t:"Needle straight in as deeply as possible for a strong effect",
       c:"直刺宜深，以求強效",ok:false,
       note:"Never. Toward the midline and deep is exactly the dangerous direction."},
      {t:"There is no particular risk at GB20",
       c:"風池無所忌",ok:false,
       note:"GB20 sits below the occiput near the foramen magnum. It is one of the points where technique matters most."}
     ]}
  ],
  card:{en:"Fengchi — Wind Pool — disperses wind from outside and settles wind from within. Angle and depth matter here.",
        zh:"風池，外可祛風，內可熄風。針之須慎其方向與深度。"} },

{ id:"TE17", region:"head",
  beats:[
    {en:"A young man's face has gone slack on one side. He cannot close the eye properly, and behind that ear there is a tender, aching spot.",
     zh:"一位少年半面弛緩，目不能閉，耳後有壓痛。"},
    {en:"Shen Yi presses in the hollow behind the earlobe, between the jaw angle and the mastoid bone. He winces. \"That tenderness is the channel telling you where it is stuck,\" she says.",
     zh:"沈醫師按其耳垂後、下頜角與乳突之間陷中，少年蹙眉。「此壓痛，即經氣所滯之處。」她說。"}
  ],
  qs:[
    {q:"Why is Yifeng used for facial paralysis and for ear complaints?",
     cq:"翳風何以治面癱與耳疾？",
     opts:[
      {t:"It sits right behind the ear on the Triple Burner channel — a local point for the ear, the jaw and the side of the face",
       c:"在耳後，屬手少陽三焦經，為耳、頜、面側之局部要穴",ok:true,
       note:"<b>Correct.</b> Deafness, tinnitus, facial paralysis, toothache and jaw problems all live within reach of this one hollow."},
      {t:"Because it is a distal point on the leg",
       c:"為下肢遠端穴",ok:false,
       note:"It is at the ear — local, not distal."},
      {t:"Because it is the Source point of the Triple Burner",
       c:"為三焦經原穴",ok:false,
       note:"The Triple Burner's Source point 原穴 is <b>TE4 陽池</b>."}
     ]},
    {q:"Which combination is the standard shape for treating facial paralysis?",
     cq:"治面癱之常法配穴為何？",
     opts:[
      {t:"Local points on the affected side of the face, plus distal LI4 on the opposite side",
       c:"患側面部局部取穴，配對側合谷",ok:true,
       note:"<b>Correct.</b> Local plus distal, and the classic distal point is LI4 合谷 — because <b>面口合谷收</b>. Choosing the opposite side for the distal point is a common convention."},
      {t:"Only points on the legs",c:"惟取下肢",ok:false,
       note:"Local facial points carry most of the work in this condition."},
      {t:"Only points on the unaffected side of the face",
       c:"惟取健側面部",ok:false,
       note:"The affected side is where local treatment is needed."}
     ]},
    {q:"The young man says the weakness came on over a few hours, with a drooping mouth and one arm that also feels clumsy. What now?",
     cq:"若其面癱數小時內驟成，兼口角下垂、一臂笨拙，當如何？",
     opts:[
      {t:"Refer urgently for medical assessment — sudden facial droop with limb weakness needs stroke evaluated first",
       c:"當即轉診急診——面癱驟起兼肢體無力，須先排除中風",ok:true,
       note:"<b>Correct, and this is the most important answer on this screen.</b> Facial weakness <i>with</i> limb involvement, speech change or sudden severe headache is a red flag. Recognising what must leave your room is a core clinical skill."},
      {t:"Begin a full course of acupuncture immediately",
       c:"即行針灸療程",ok:false,
       note:"Not before serious causes are excluded. Acupuncture may well have a role afterwards — but not first."},
      {t:"Wait a week and see whether it resolves",
       c:"觀察一週再議",ok:false,
       note:"Delay is exactly the wrong response to these signs."}
     ]}
  ],
  card:{en:"Yifeng sits in the hollow behind the earlobe — for the ear, the jaw and the side of the face. Sudden droop with limb weakness is referred, not needled.",
        zh:"翳風在耳垂後陷中，主耳、頜、面側之疾。若驟發兼肢體無力，當先轉診。"} },

{ id:"GB8", region:"head",
  beats:[
    {en:"A wine-seller wakes with a splitting pain above one ear. Light hurts, he feels sick, and the pain pulses.",
     zh:"一位酒販晨起一側耳上劇痛，畏光欲嘔，痛如脈動。"},
    {en:"Shen Yi measures up from the apex of the ear, about one and a half cun into the hair, and finds the tender spot.",
     zh:"沈醫師自耳尖直上入髮際約一寸半，尋其壓痛之處。"}
  ],
  qs:[
    {q:"Why does GB8 suit a one-sided headache above the ear?",
     cq:"率谷何以宜於耳上偏頭痛？",
     opts:[
      {t:"It is a local point on the Gallbladder channel, which covers the side of the head — Shaoyang territory",
       c:"膽經局部穴，頭側屬少陽",ok:true,
       note:"<b>Correct.</b> Temporal headache = <b>Shaoyang 少陽</b>. GB8 率谷 is local; GB20 風池 and TE3 中渚 or GB41 add distal support."},
      {t:"Because it is on the Bladder channel",
       c:"屬膀胱經",ok:false,
       note:"The Bladder channel runs over the top and back of the head, not the temple."},
      {t:"Because all headaches are treated at the vertex",
       c:"頭痛皆取巔頂",ok:false,
       note:"The vertex is Jueyin territory — a different pattern."}
     ]},
    {q:"The wine-seller drinks heavily and his headaches follow heavy nights, with nausea and a bitter mouth. What pattern fits?",
     cq:"其人嗜酒，痛多發於酒後，兼噁心口苦，屬何證？",
     opts:[
      {t:"Damp-heat in Liver and Gallbladder rising to the head — so clearing and draining suits, with GB34 and LR3 added",
       c:"肝膽濕熱上擾清竅，宜清利；可配陽陵泉、太衝",ok:true,
       note:"<b>Correct.</b> Bitter mouth, nausea, alcohol as a trigger and a temporal headache is a coherent Liver-Gallbladder damp-heat picture. Local point plus channel points plus, honestly, a conversation about the wine."},
      {t:"Blood deficiency failing to nourish the head",
       c:"血虛不能上榮",ok:false,
       note:"That headache is dull, gradual, worse with fatigue — and comes with pale complexion, not a bitter mouth."},
      {t:"Wind-cold on the exterior",c:"風寒束表",ok:false,
       note:"No chills, no aversion to cold, no sudden exterior onset."}
     ]},
    {q:"GB8 is also used for a very practical complaint. Which?",
     cq:"率谷尚可治一甚實用之症，為何？",
     opts:[
      {t:"Vomiting and dizziness after alcohol, and childhood convulsions",
       c:"酒後嘔吐眩暈，及小兒驚風",ok:true,
       note:"<b>Correct.</b> The classical texts are unusually direct about the alcohol indication for this point."},
      {t:"Lower back pain",c:"腰痛",ok:false,
       note:"That is BL40 委中 territory."},
      {t:"Loose stools",c:"便溏",ok:false,
       note:"That belongs to the Spleen and Stomach points."}
     ]}
  ],
  card:{en:"Shuaigu sits a cun and a half above the ear apex — the local point for a Shaoyang headache on the side of the head.",
        zh:"率谷在耳尖直上入髮際一寸半。頭側少陽頭痛之局部要穴。"} },

{ id:"TAIYANG", region:"head",
  beats:[
    {en:"A student has been reading by poor light. Her temples throb, her eyes ache, and she keeps pressing her fingers into the hollows beside her brows.",
     zh:"一位學子燈下苦讀，兩太陽脹痛，目痛，時以指按眉外之陷。"},
    {en:"\"You have already found it,\" Shen Yi says. \"That is Taiyang — one of the extra points. Not on any of the twelve channels, and used every day.\"",
     zh:"「你已自尋得之。」沈醫師說，「此太陽穴，經外奇穴也。不屬十二經，而日日用之。」"}
  ],
  qs:[
    {q:"What kind of point is Taiyang?",
     cq:"太陽為何類穴？",
     opts:[
      {t:"An extra point 經外奇穴 — outside the fourteen channels, with its own definite location and indications",
       c:"經外奇穴，不屬十四經，而有定位定治",ok:true,
       note:"<b>Correct.</b> Extra points have a fixed site and fixed uses but no channel membership. Others you will meet: 印堂 Yintang, 四神聰 Sishencong, 十宣 Shixuan, 膝眼 Xiyan."},
      {t:"A point on the Bladder channel",c:"屬膀胱經",ok:false,
       note:"It is not on any of the twelve regular channels."},
      {t:"A Front-Mu point",c:"為募穴",ok:false,
       note:"Front-Mu points 募穴 lie on the chest and abdomen and correspond to specific organs."}
     ]},
    {q:"What is Taiyang chiefly used for?",
     cq:"太陽穴主治為何？",
     opts:[
      {t:"Temporal headache, eye pain and red eyes, and dizziness — often bled for excess heat",
       c:"偏頭痛、目赤腫痛、眩暈；熱盛者可點刺出血",ok:true,
       note:"<b>Correct.</b> Bleeding a small amount at Taiyang for stubborn temporal headache or red painful eyes is a classic method — under strict clean-needle technique."},
      {t:"Abdominal pain and diarrhoea",c:"腹痛泄瀉",ok:false,
       note:"Those belong to the abdomen and to ST36."},
      {t:"Cough and wheezing",c:"咳喘",ok:false,
       note:"Lung and upper back points."}
     ]},
    {q:"The student's headache is dull, comes on when she is tired, and eases when she rests and eats. Is bleeding the right method?",
     cq:"其痛隱隱，勞則發，休息進食則減。可用刺血否？",
     opts:[
      {t:"No — that is a deficiency pattern, and bleeding drains. Nourishing and reinforcing suits better",
       c:"不可——此屬虛證，刺血為泄；宜補宜養",ok:true,
       note:"<b>Correct, and this is the whole lesson.</b> The point can be right while the method is wrong. Bleeding suits <b>excess and heat 實熱</b>; a tired, dull, better-after-rest headache is <b>deficiency 虛</b>."},
      {t:"Yes — bleeding always relieves headache",
       c:"可——刺血皆能止頭痛",ok:false,
       note:"Draining a deficient patient can leave them worse. Method follows pattern."},
      {t:"Yes, but only on the other side",
       c:"可——惟刺對側",ok:false,
       note:"Side does not change the fact that a draining method is wrong for a deficient pattern."}
     ]}
  ],
  card:{en:"Taiyang is an extra point in the hollow beside the brow — for temporal headache and painful eyes. Bleed only excess, never deficiency.",
        zh:"太陽，經外奇穴，在眉梢與目外眥之間陷中。主偏頭痛、目赤。實熱可刺血，虛證不可。"} }

];

