/* Independent oracles: path enumeration for AOE and shortest paths; edge subsets for MST. */
const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const f of ['review-bank.js','training-engine.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const R=ctx.window.REVIEW_QUESTIONS,E=ctx.window.TrainingEngine;let checks=0;
function check(x,m){assert(x,m);checks++;}
function edges(q){return JSON.parse(q.title.match(/\[[^\]]+\]/)[0].replace(/\(/g,'[').replace(/\)/g,']'));}
function paths(es,from,to){const result=[];function walk(u,p,w){if(u===to){result.push({path:p,cost:w});return;}for(const[a,b,d]of es)if(a===u&&!p.includes(b))walk(b,[...p,b],w+d);}walk(from,[from],0);return result;}
function vec(actual,expected,label){check(E.equal(actual,expected.join(','),'sequence'),label);}
for(const q of R.filter(q=>['R6-aoe-full','R6-aoe-tables','R6-activity'].includes(q.family))){
 const es=edges(q),n=Math.max(...es.flatMap(e=>e.slice(0,2))),longest=(u,v)=>Math.max(...paths(es,u,v).map(p=>p.cost));
 const duration=longest(1,n),ve=Array.from({length:n},(_,i)=>longest(1,i+1)),vl=Array.from({length:n},(_,i)=>duration-longest(i+1,n));
 check([...ve,...vl].every(Number.isFinite),'single-source/sink assumptions actually hold');
 const early=es.map(([u])=>ve[u-1]),late=es.map(([,v,w])=>vl[v-1]-w),critical=es.flatMap((e,i)=>early[i]===late[i]?[i+1]:[]);
 if(q.family==='R6-aoe-tables'){vec(q.fields[0].answer,ve,'all event earliest times');vec(q.fields[1].answer,vl,'all event latest times');vec(q.fields[2].answer,critical,'all critical activities');check(E.number(q.fields[3].answer)===duration,'AOE duration');}
 else if(q.family==='R6-activity'){const i=Number(q.title.match(/求 a(\d+)/)[1])-1;const expected=[early[i],late[i],late[i]-early[i],duration];q.fields.forEach((f,j)=>check(E.number(f.answer)===expected[j],'activity start/slack/duration'));}
 else{for(const row of q.worked[0].rows)check(Number(row[2])===ve[Number(row[0])-1],'written event ve');for(const row of q.worked[1].rows)check(Number(row[2])===vl[Number(row[0])-1],'written event vl');for(const row of q.worked[2].rows){const i=Number(row[0])-1;check(Number(row[2])===early[i]&&Number(row[3])===late[i]&&Number(row[4])===late[i]-early[i],'written activity e/l/slack');}}
}
for(const q of R.filter(q=>['R6-dijkstra','R6-shortestpath'].includes(q.family))){
 const es=edges(q),n=Math.max(...es.flatMap(e=>e.slice(0,2))),dist=Array.from({length:n},(_,i)=>Math.min(...paths(es,1,i+1).map(p=>p.cost)));
 if(q.family==='R6-dijkstra'){
  vec(q.fields[0].answer,dist.map(d=>Number.isFinite(d)?d:'∞'),'distance vector from all simple paths');
  if(es.every(e=>e[2]>0))vec(q.fields[1].answer,Array.from({length:n},(_,i)=>i+1).sort((a,b)=>dist[a-1]-dist[b-1]||a-b),'settlement order for positive-weight graph');
 }else{
  const best=dist[n-1],optimal=paths(es,1,n).filter(p=>p.cost===best),accepted=[q.fields[0].answer,...q.fields[0].aliases];
  check(E.number(q.fields[1].answer)===best,'shortest-path cost');
  for(const p of optimal){check(accepted.includes(p.path.join(',')),'every equally shortest path accepted');check(E.grade(q,[p.path.join('→'),String(best)]).score===q.points,'natural arrow notation accepted without losing order');}
  for(const s of accepted)check(optimal.some(p=>p.path.join(',')===s),'no non-shortest alias accepted');
  check(E.grade(q,['1→'+n,String(best)]).score<q.points||optimal.some(p=>p.path.join(',')==='1,'+n),'direct shortcut cannot get path credit unless it is optimal');
 }
}
for(const q of R.filter(q=>q.family==='R6-mst')){
 const es=edges(q),n=Math.max(...es.flatMap(e=>e.slice(0,2)));let best=Infinity;
 function choose(at,selected){if(selected.length===n-1){const reached=new Set([1]);let changed=true;while(changed){changed=false;for(const[u,v]of selected)if(reached.has(u)!==reached.has(v)){reached.add(u);reached.add(v);changed=true;}}if(reached.size===n)best=Math.min(best,selected.reduce((s,e)=>s+e[2],0));return;}for(let i=at;i<es.length;i++)choose(i+1,[...selected,es[i]]);}
 choose(0,[]);check(E.number(q.fields[0].answer)===best,'MST matches exhaustive spanning subsets');check(E.number(q.fields[1].answer)===n-1,'MST edge count');
}
console.log(`${checks} graph checks passed using independent path/subset enumeration, including all equivalent shortest routes.`);
