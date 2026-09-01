/* Every piece of text a player actually reads must clear WCAG AA against what
   is behind it. This walks the rendered pages rather than the palette, because
   the palette can be fine while a token is used on the wrong background.

   AA: 4.5:1 for body text, 3.0:1 for large text (>=24px, or >=18.7px bold).
   Decorative elements with no text are not checked. */
const {chromium}=require(process.env.PW||'playwright');
const B='file:///home/claude/site/';
const PAGES=[['index.html',null],['progress.html',null],['practice.html?d=pulse','#go'],
             ['sort.html?s=five_elements','#go'],['pointroom.html',null],['herbroom.html',null],
             ['chapter.html?ch=09',null],['dailycase.html',null],['yinyang.html',null],
             ['wuqinxi.html',null],['acuting-play.html',null],['prologue.html',null],
             ['review.html',null]];
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
let bad=[], checked=0;
for(const [url,start] of PAGES){
  const p=await b.newPage({viewport:{width:390,height:844}});
  await p.goto(B+url); await p.waitForTimeout(450);
  if(start){try{await p.click(start,{timeout:1500});await p.waitForTimeout(350)}catch(e){}}
  const found=await p.evaluate(()=>{
    const lum=c=>{const m=c.match(/\d+(\.\d+)?/g).map(Number);
      const f=v=>{v/=255;return v<=.03928?v/12.92:((v+.055)/1.055)**2.4};
      return .2126*f(m[0])+.7152*f(m[1])+.0722*f(m[2])};
    const ratio=(a,b)=>{const la=lum(a),lb=lum(b),hi=Math.max(la,lb),lo=Math.min(la,lb);return (hi+.05)/(lo+.05)};
    const bgOf=el=>{let n=el;while(n&&n!==document.documentElement){
        const s=getComputedStyle(n).backgroundColor;
        if(s&&!/rgba\(0, 0, 0, 0\)|transparent/.test(s)) return s; n=n.parentElement;}
      return 'rgb(242, 234, 216)';};
    const out=[];
    document.querySelectorAll('*').forEach(el=>{
      // only elements whose own text node is visible
      const own=[...el.childNodes].filter(n=>n.nodeType===3&&n.textContent.trim()).map(n=>n.textContent.trim()).join(' ');
      if(!own) return;
      const s=getComputedStyle(el);
      if(s.display==='none'||s.visibility==='hidden'||+s.opacity===0) return;
      const r=el.getBoundingClientRect(); if(!r.width||!r.height) return;
      // text drawn over a photograph cannot be measured this way — skip those
      let n=el, overImage=false;
      while(n&&n!==document.documentElement){ if(/url\(/.test(getComputedStyle(n).backgroundImage)){overImage=true;break} n=n.parentElement; }
      if(overImage) return;
      const size=parseFloat(s.fontSize), w=s.fontWeight;
      const large = size>=24 || (size>=18.66 && (+w>=700||w==='bold'));
      const need = large?3.0:4.5;
      const got = ratio(s.color, bgOf(el));
      if(got < need-0.05) out.push({t:own.slice(0,26), size:Math.round(size*10)/10, color:s.color,
                                    bg:bgOf(el), got:Math.round(got*100)/100, need});
    });
    return out;
  });
  checked++;
  found.forEach(f=>bad.push({page:url, ...f}));
  await p.close();
}
await b.close();
/* group so one shared token does not print forty times */
const byColor={};
bad.forEach(f=>{const k=f.color+' on '+f.bg+' @'+f.size+'px';
  (byColor[k]=byColor[k]||{n:0,got:f.got,need:f.need,ex:[]}); byColor[k].n++;
  if(byColor[k].ex.length<2) byColor[k].ex.push(f.page+': "'+f.t+'"');});
const keys=Object.keys(byColor);
if(keys.length){
  keys.sort((a,b)=>byColor[a].got-byColor[b].got).forEach(k=>{
    const v=byColor[k];
    console.log('  ✗ '+v.got.toFixed(2)+':1 (needs '+v.need+')  '+k+'  ×'+v.n);
    v.ex.forEach(e=>console.log('        '+e));});
  console.log('\n  '+bad.length+' text elements below AA across '+checked+' pages');
  process.exitCode=1;
}else console.log('  ✅ every measurable text element clears WCAG AA across '+checked+' pages');
})();
