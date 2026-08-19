/* the desktop layer must never leak into the phone layout, and the desktop
   town must actually use the width it is given */
const {chromium}=require(process.env.PW||'playwright');
(async()=>{
const b=await chromium.launch({executablePath:process.env.CHROME||'/opt/pw-browsers/chromium'});
let fail=0; const ok=(c,m)=>{console.log((c?'  ✅ ':'  ✗ ')+m);if(!c)fail++};
const measure=async(w,h)=>{
  const p=await b.newPage({viewport:{width:w,height:h}});
  await p.goto('file:///home/claude/site/index.html'); await p.waitForTimeout(400);
  await p.evaluate(()=>{AG.state.char='he';AG.state.flags.prologueDone=true;AG.save();enterHub()});
  await p.waitForTimeout(400);
  const r=await p.evaluate(()=>{
    const app=document.getElementById('app'), map=document.querySelector('.mapbox');
    const s4=document.getElementById('s4');
    const seal=document.querySelector('.seal').getBoundingClientRect();
    const streak=[...document.querySelectorAll('.topbar .stat')].pop();
    const st=streak?streak.getBoundingClientRect():null;
    const overlap=st? !(st.right<seal.left||st.left>seal.right||st.bottom<seal.top||st.top>seal.bottom):false;
    return {app:Math.round(app.getBoundingClientRect().width),
            map:Math.round(map.getBoundingClientRect().width),
            sealOverlap:overlap,
            hOverflow:[...document.querySelectorAll('#s4 *')].some(e=>e.getBoundingClientRect().right>app.getBoundingClientRect().right+1)};});
  await p.close(); return r;
};
const phone=await measure(390,844);
ok(phone.app===390,'phone: the card is still the full 390px width (got '+phone.app+')');
ok(!phone.hOverflow,'phone: nothing overflows the card');
const desk=await measure(1440,900);
ok(desk.app===1240,'desktop: the card widens to 1240px (got '+desk.app+')');
ok(desk.map>600,'desktop: the town map is the hero at '+desk.map+'px wide');
ok(!desk.sealOverlap,'desktop: the corner seal no longer sits on the streak');
ok(!desk.hOverflow,'desktop: nothing overflows the card');
const tab=await measure(820,1180);
ok(tab.app===620,'tablet: 620px column (got '+tab.app+')');
await b.close();
console.log(fail?('\n'+fail+' FAILURES'):'\nresponsive layout holds at phone, tablet and desktop');
process.exit(fail?1:0);})();
