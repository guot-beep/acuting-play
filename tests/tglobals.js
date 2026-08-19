/* Two data modules must never claim the same window global.
   data/practice.js once shipped as data/drills.js and silently replaced the
   in-chapter retreat drills — the pages still loaded, the feature just vanished.
   This is the cheap test that would have caught it. */
const fs=require('fs'), path=require('path'), vm=require('vm');
const DIR='/home/claude/site/data';
const owner={}, bad=[];
fs.readdirSync(DIR).filter(f=>f.endsWith('.js')).sort().forEach(f=>{
  const sandbox={window:{},document:undefined,localStorage:undefined};
  sandbox.window.window=sandbox.window;
  try{ vm.runInNewContext(fs.readFileSync(path.join(DIR,f),'utf8'), sandbox); }
  catch(e){ bad.push(f+' failed to load: '+e.message); return; }
  Object.keys(sandbox.window).filter(k=>k!=='window').forEach(k=>{
    if(owner[k]&&owner[k]!==f) bad.push('global '+k+' claimed by BOTH '+owner[k]+' and '+f);
    owner[k]=f;
  });
});
/* and every global a page loads must actually be defined by a file it loads */
fs.readdirSync('/home/claude/site').filter(f=>f.endsWith('.html')).forEach(f=>{
  const s=fs.readFileSync('/home/claude/site/'+f,'utf8');
  const loaded=[...s.matchAll(/<script src="(data\/[a-z0-9_.-]+\.js)/g)].map(m=>m[1].replace('data/',''));
  [...s.matchAll(/window\.(AG_[A-Z_]+)/g)].map(m=>m[1]).forEach(g=>{
    if(!owner[g]) bad.push(f+' reads window.'+g+' which no data file defines');
    else if(loaded.indexOf(owner[g])<0) bad.push(f+' reads window.'+g+' but does not load data/'+owner[g]);
  });
});
if(bad.length){bad.forEach(x=>console.log('  ✗ '+x));process.exitCode=1}
else console.log('  ✅ '+Object.keys(owner).length+' data globals, no collisions, every page loads what it reads');
