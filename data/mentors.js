/* ═══════════════════════════════════════════════════════════════
   Apricot Grove 杏林行 · data/mentors.js
   The five school mentors as 16×18 pixel sprites, in one place so a
   new practice page does not have to copy them again. Loaded as a
   plain <script>, exposed on window — no fetch, so it works on file://
   ═══════════════════════════════════════════════════════════════ */
(function (g) {
  "use strict";
  var P = { K:"#2B241C",H:"#3A2E24",F:"#F0CDA8",R:"#B23A2E",D:"#7A5C3A",C:"#EFD9AE",G:"#6E8B57",
            B:"#5B6E86",W:"#FDFBF4",Y:"#C8A44B",S:"#8E9E82",T:"#C26D4E",P2:"#E8A08C",M:"#9C4A2F",
            N:"#4A5560",X:"#A63B2A",O:"#C77B3E",E:"#E0E0DC",Z:"#3C3A36" };

  var SP = {
   zhen:[ /* 針隱 one-armed needle master */
   "................","....SSSSSSSS....","...SSSSSSSSSS...","...HHHHHHHH.....","..HFFFFFFFFH....",
   "..HFKFFFFKFH....","..HFFFFFFFFH....","..HFWWWWWWFH....","...FFFFFFFF.....","....FFFFFF......",
   "...SSSSSSSS.....","..SSSSSSSSSS....","..WSSSSSSSSS....","...SSSSSSSSS....","...SSSSSSSS.....",
   "....SS..SS......","....KK..KK......","................"],
   shu:[ /* 書癡 scholar with scrolls */
   ".......KK.......","......KKKK......",".....HHHHHH.....","....HHHHHHHH....","...HFFFFFFFFH...",
   "...HFWKFFKWFH...","...HFFFFFFFFH...","...HFFFMMFFFH...","....FFFFFFFF....","......FFFF......",
   "....BBBBBBBB....","...BBBBBBBBBB...","..YYBBBBBBBBYY..","..YYBBBBBBBBYY..","...BBBBBBBBBB...",
   "....BB....BB....","....FF....FF....","................"],
   jing:[ /* 靜姑 blind pulse grandmother */
   "................","....WWWWWWWW....","...WWWWWWWWWW...","...HHHHHHHH.....","..HFFFFFFFFH....",
   "..HF----FF-FH...","..HFFFFFFFFH....","..HFFFP2FFFFH...","...FFFFFFFF.....","....FFFFFF......",
   "...MMMMMMMM.....","..MMMMMMMMMM....",".FMMMMMMMMMMF...",".FMMMMMMMMMMF...","...MMMMMMMM.....",
   "....MM..MM......","....KK..KK......","................"],
   yao:[ /* 藥翁 tipsy herb gatherer */
   "................","....DDDDDDDD....","...DDDDDDDDDD...","...HHHHHHHH.....","..HFFFFFFFFH....",
   "..HFKFFFFKFH....","..HFFFFFFFFH....","..HFFP2MMP2FH...","...FFFFFFFF.....","....FFFFFF......",
   "...DDDDDDDD.....","..DDDGGGGDDD....",".FDDDGGGGDDDF...",".FDDDGGGGDDDF...","...DDDDDDDD.....",
   "....DD..DD......","....KK..KK......","................"],
   xiong:[ /* 熊師 bear-shaped daoyin master */
   "..Z..........Z..",".ZZZ........ZZZ.","..EEEEEEEEEE....",".EEEEEEEEEEEE...",".EEZEEEEEEZEE...",
   ".EEEEEEEEEEEE...",".EEEEZZZZEEEE...","..EEEEEEEEEE....","....EEEEEE......","...ZZZZZZZZ.....",
   "..ZZZZZZZZZZ....",".EZZZZZZZZZZE...",".EZZZZZZZZZZE...","..ZZZZZZZZZZ....","...ZZZZZZZZ.....",
   "...ZZZ..ZZZ.....","..EEE....EEE....","................"],
   shen:[ /* 參老 ginseng master */
   "......R.R.......",".....RRRRR......","......G.........","...GG.GG.GG.....","..GGGGGGGGGGG...",
   "...GG.GG.GG.....","...DCCCCCCD.....","..DCCCCCCCCD....","..DCWKCCWKCD....","..DCCCCCCCCD....",
   "..DCP2CMMCP2CD..","...DCCMMCCD.....","....DCCCCD......","...DCC..CCD.....","...DC....CD.....",
   "....D....D......","................","................"]
  };

  /* draws one 16×18 sprite into a canvas; bob nudges it down a pixel */
  function draw(cv, key, bob) {
    var grid = SP[key]; if (!cv || !grid) return;
    var x = cv.getContext("2d"); x.clearRect(0, 0, 16, 18);
    grid.forEach(function (row, y) {
      var i = 0, cx = 0;
      while (i < row.length) {
        var ch = row[i], len = 1;
        if (row[i] === "P" && row[i + 1] === "2") { ch = "P2"; len = 2; }
        if (P[ch]) { x.fillStyle = P[ch]; x.fillRect(cx, Math.min(y + (bob ? 1 : 0), 17), 1, 1); }
        cx++; i += len;
      }
    });
  }

  /* registers a canvas so every sprite on the page breathes together */
  var reg = [], bob = false, timer = null;
  function animate(cv, key) {
    reg.push([cv, key]); draw(cv, key, false);
    if (!timer) timer = setInterval(function () {
      bob = !bob; reg.forEach(function (r) { draw(r[0], r[1], bob); });
    }, 580);
  }

  g.AG_MENTORS = { P: P, SP: SP, draw: draw, animate: animate };
})(window);
