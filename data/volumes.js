/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/volumes.js
   卷 · the volumes the story is divided into

   Twenty-two chapters in one flat list is a scroll, not a journey.
   Grouping them says what each stretch of the story is teaching, so a
   player can see where they are and a student can find the chapter that
   covers what they are revising.

   A volume is a range of chapter ids, inclusive. Chapters outside every
   range still appear, under the last volume — the list never hides a
   chapter because a range was not updated.

   Adding a volume is a data edit. No code changes.
   ═══════════════════════════════════════════════════════════════ */
window.AG_VOLUMES = [
  { id:"1", from:"01", to:"08",
    en:"Opening the Gate", zh:"開蒙",
    blurb:{ en:"One pathogen, one organ. The eight principles learned on real people rather than on a table.",
            zh:"一邪一臟。八綱之辨，學於病人，而不學於表格。" } },

  { id:"2", from:"09", to:"17",
    en:"Two Organs at Once", zh:"合病",
    blurb:{ en:"Patterns that name two organs — and the question that decides the prescription: which one came first?",
            zh:"證名兩臟者。而定其方者，在一問：孰先？" } },

  { id:"3", from:"18", to:"20",
    en:"Blood and the Channels", zh:"血與絡",
    blurb:{ en:"Stasis, damp-heat lodged in a joint, and pain that names its own channel by where it sits.",
            zh:"血瘀、濕熱著於關節，與能以其部自名其經之痛。" } },

  { id:"4", from:"21", to:"26",
    en:"The Deep Stores", zh:"深虛",
    blurb:{ en:"Depletion that reaches the root — and the questions you ask before you are allowed to name a pattern at all.",
            zh:"虛及根本者。而辨證之先，尚有所必問。" } }
];
