/* Validate the teaching material as data and independently cross-check process tables. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const file of ['content.js','curriculum.js','learning-guides.js','learn-bank.js','review-bank.js','review-lessons.js','training-engine.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),ctx);
const{COURSE,LEARNING_GUIDES:G,LEARN_QUESTIONS:L,REVIEW_QUESTIONS:R,REVIEW_LESSONS:T,TrainingEngine:E}=ctx.window;
let checks=0;const ok=(v,msg)=>{assert(v,msg);checks++;};const lessons=COURSE.flatMap(c=>c.lessons),ids=new Set(lessons.map(l=>l.id));
ok(Object.keys(G).length===55,'55 authored guides');
for(const l of lessons){const g=G[l.id];ok(g&&g.goal&&g.scene&&g.steps.length>=3,'concrete guide '+l.id);ok(g.terms.length===3,'three explained terms');ok(g.table.rows.length>=2,'visible states');ok(g.table.rows.every(r=>r.length===g.table.heads.length),'rectangular guide');ok(g.check.options.length===3&&g.check.feedback.length===3,'all three choices explained');ok(g.check.answer>=0&&g.check.answer<3,'check answer');ok(g.needs.every(x=>ids.has(x)&&x!==l.id),'prerequisites valid');if(g.schematic)ok(g.schematic.rows.every(r=>r.length===g.schematic.heads.length),'schematic dimensions '+l.id);for(const x of g.extra||[])ok(x.intro&&x.table.rows.every(r=>r.length===x.table.heads.length),'extra small-step example '+l.id);for(const d of g.diagrams||[]){ok(d.nodes.length===d.points.length,'diagram coordinates');ok(d.edges.every(([u,v])=>d.nodes[u]!==undefined&&d.nodes[v]!==undefined&&u!==v),'diagram targets');}}
function visit(id,path=[]){ok(!path.includes(id),'no prerequisite cycle '+id);for(const previous of G[id].needs)visit(previous,[...path,id]);}for(const id of ids)visit(id);
for(const q of [...L,...R]){
 ok(q.support?.ask&&q.support.plan.length>0&&q.support.format,'every item has a readable task '+q.id);
 if(q.type==='choice'){ok(q.optionReasons?.length===4,'all options explained '+q.id);ok(q.optionReasons.every(t=>t.length>=8),'meaningful rationale '+q.id);ok(!q.optionReasons.some(t=>t.includes('把该条件与选项')),'no generic fallback rationale '+q.id);}
 if(q.mode==='learn')ok(q.solution.length>=3&&q.hint,'beginner steps and graduated starting hint '+q.id);
 for(const t of q.worked||[]){ok(t.caption&&t.heads.length>=2&&t.rows.length>0,'worked table '+q.id);ok(t.rows.every(r=>r.length===t.heads.length),'rectangular worked table '+q.id);}
 const first=q.worked?.[0],last=first?.rows.at(-1);
 if(q.family==='R1-triangle')ok(last[2]===q.fields[0].answer,'triangle cumulative count');
 if(q.family==='R1-geometric')ok(String(first.rows.length-1)===q.fields[0].answer,'geometric legal values, not exit');
 if(q.family==='R1-coupled')ok(last[4]===q.fields[0].answer,'coupled branch count');
 if(q.family==='R3-postfix'||q.family==='E14-postfix')ok(E.equal(last[2],q.fields[0].answer,'number'),'postfix result matches final stack');
 if(q.family==='R3-ring'){ok(last[1]===q.fields[1].answer&&last[2]===q.fields[2].answer&&last[3]===q.fields[3].answer,'ring each-operation final state');}
 if(q.family==='R4-fasttranspose')ok(E.equal(first.rows.map(r=>r[2]).join(','),q.fields[0].answer,'sequence'),'cpot positions');
 if(q.family==='R5-catalan'||q.family==='E14-shapes')ok(first.rows.reduce((s,r)=>s+Number(r[2]),0)===Number(q.fields[0].answer),'Catalan classes sum');
 if(q.family==='R5-huffman-numeric')ok(last[4]===q.fields[0].answer,'merge cost gives WPL');
 if(q.family==='R6-traversal')ok(E.equal(last[3],q.fields[1].answer,'sequence'),'BFS queue trace matches expected');
 if(q.family==='R6-dijkstra')ok(E.equal(last[3],q.fields[0].answer,'sequence'),'Dijkstra forward table');
 if(q.family==='R7-binary-path'){
  const compared=first.rows.filter(r=>r[3]!=='无比较');ok(compared.length===Number(q.fields[1].answer),'binary key comparison count');ok(E.equal(compared.map(r=>r[3]).join(','),q.fields[0].answer,'sequence'),'binary midpoint values');
 }
 if(q.family==='R7-hash-full')ok(E.equal(q.worked[1].rows.map(r=>r[1]).join(','),q.fields[0].answer,'slots'),'hash slot trace');
 if(q.family==='R7-hash-failure')ok(E.equal(q.worked[2].rows.map(r=>r[2]).join(','),q.fields[0].answer,'sequence'),'hash failure trace');
 if(q.family==='R8-quick-first')ok(E.equal(last[2],q.fields[0].answer,'sequence'),'quicksort partition trace');
 if(q.family==='R8-shell')for(const f of q.fields){const gap=f.label.match(/gap=(\d+)/)[1],row=first.rows.filter(r=>r[0]===gap).at(-1);ok(E.equal(row[3],f.answer,'sequence'),'Shell whole gap result');}
 if(q.family==='R8-bubble-count')ok(first.rows.reduce((s,r)=>s+Number(r[1]),0)===Number(q.fields[0].answer),'bubble comparisons add across actual passes');
 if(q.family==='R8-heap')for(const row of first.rows){const a=row[2].split('，').map(Number),size=Number(row[1]);ok(a.slice(0,size).every((v,i)=>i===0||a[Math.floor((i-1)/2)]>=v),'every worked heap is a heap');ok(a.slice(size).every((v,i,tail)=>!i||tail[i-1]<=v),'heap suffix sorted');}
 if(q.family==='R8-insertion')ok(E.equal(first.rows[0][4],q.fields[0].answer,'sequence')&&E.equal(first.rows[1][4],q.fields[1].answer,'sequence'),'insertion first two full arrays');
}
for(const t of T)ok(R.some(q=>q.topic===t.id),'every review topic has an available worked case '+t.id);
ok(L.length===120&&R.length===371,'separate bank counts match the revised curriculum');
console.log(`${checks} pedagogy checks passed: 55 guides, 55 checks, ${L.length+R.length} supported items, ${R.filter(q=>q.worked).length} review items with ${R.reduce((s,q)=>s+(q.worked?.length||0),0)} computed process tables.`);
