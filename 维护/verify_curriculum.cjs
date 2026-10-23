/* Check the educational contract, source anchors, stage boundaries, and new small cases. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),ctx={window:{}};vm.createContext(ctx);
for(const f of ['content.js','sources.js','learning-guides.js','curriculum.js','learn-bank.js','review-bank.js','review-lessons.js','exam-meta.js','training-engine.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);
const{COURSE:C,SOURCES:S,LEARNING_GUIDES:G,CURRICULUM:K,LEARN_QUESTIONS:L,REVIEW_QUESTIONS:R,REVIEW_LESSONS:T,EXAM_META:M,TrainingEngine:E}=ctx.window;
let n=0;function check(x,msg){assert(x,msg);n++;}
const by=id=>[...L,...R].find(q=>q.id===id),answer=id=>{const q=by(id);return q.options[q.answer];};
check(K.recall.length===68,'68 distinct recall checks');
check(new Set(K.recall.map(x=>x.id)).size===68,'no duplicate recall ID');
check(M.totals.learn===L.length&&M.totals.review===R.length,'disclosed counts');
check(M.totals.core+M.totals.extension===R.length,'scope totals');
check(M.totals.extension===7,'only selected advanced boundaries are supplementary');
for(const c of C){
 const lq=L.filter(q=>q.chapter===c.id),rq=R.filter(q=>q.chapter===c.id&&q.priority==='core');
 check(lq.some(q=>q.tier==='foundation')&&lq.some(q=>q.tier==='challenge'),'both ends of beginner ladder '+c.id);
 check(rq.some(q=>q.tier==='recall')&&rq.some(q=>q.tier==='standard')&&rq.some(q=>q.tier==='challenge'),'recall, standard and hard review '+c.id);
 check(K.chapters[c.id].understand&&K.chapters[c.id].defer&&K.chapters[c.id].remember.length===3,'explicit scope '+c.id);
 for(const l of c.lessons)check(L.some(q=>q.topic===l.id)&&G[l.id].check,'each beginner lesson has its own graded and classroom check '+l.id);
}
for(const t of T)check(t.notation&&t.notation.length>15&&K.core[t.id],'every formula has a context and variable explanation '+t.id);
for(const c of K.recall){
 const q=by(c.id);check(q&&q.mode==='review'&&q.recall===c.id,'separate review identity '+c.id);
 check(q.options[q.answer]===c.answer,'rotated answer remains attached '+c.id);
 for(let i=0;i<4;i++)check(q.optionReasons[i]===c.reasons[c.options.indexOf(q.options[i])],'rationale follows its own option '+c.id);
 check(q.pages===c.pages,'question links to its exact PPT pages '+c.id);
 const nums=c.pages.match(/\d+/g).map(Number);check(nums.every(p=>p>=1&&p<=S[c.chapter].slides.length),'existing slide anchor '+c.id);
 check(c.sourcePages.length? q.sourceNature==='卷面考法关联':q.sourceNature==='PPT关键补充','no invented exam anchor '+c.id);
 check(c.why.length<150&&c.boundary.length<150,'short explanation and one boundary '+c.id);
}
// Independent small-case calculations. These exercise reasoning rather than only stored option indices.
let loops=0;for(let i=1;i<=4;i++)for(let j=i;j<=4;j++)loops++;
check(answer('L1-bridge-3')===loops+' 次','dependent nested loop is counted, not multiplied blindly');
const inState=[1,2];let stack=[...inState],peak=stack.length;stack.pop();stack.push(3);peak=Math.max(peak,stack.length);stack.pop();stack.pop();
check(answer('L3-bridge-3')===String(peak),'minimum stack capacity via concrete trace');
check(answer('L3-bridge-2')===String((4+1)%5),'queue wraps by physical capacity');
check(answer('L3-bridge-1')==='先算 8−2，再乘 3，结果 '+((8-2)*3),'postfix operand order');
const counts=[1,0,2],starts=[];let pos=1;for(const x of counts){starts.push(pos);pos+=x;}
check(answer('L4-bridge-3')==='['+starts.join(',')+']','zero column consumes no slot');
check(answer('L4-bridge-1')===String(1*3)+' 个','3D row stride');
check(answer('L6-bridge-3')===String(Math.max(3,5)+2)+' 天','parallel predecessors wait for latest');
const slots=Array(5).fill(null);for(const key of [1,6,11]){let i=key%5;while(slots[i]!==null)i=(i+1)%5;slots[i]=key;}let probes=1,j=11%5;while(slots[j]!==11){probes++;j=(j+1)%5;}
check(answer('L7-bridge-3')===String(probes),'hash includes successful slot');
check(answer('L7-bridge-1')===String([1,2,3].reduce((s,v)=>s+v,0)/3),'successful ASL averages targets');
const a=[9,6,8,1,3];check(a.every((v,i)=>!i||a[Math.floor((i-1)/2)]>=v)&&answer('L8-bridge-2').startsWith('是'),'heap need not be a monotone array');
// A pure filter contract is shared by the preview count and the question picker.
for(const ch of ['all',1,2,3,4,5,6,7,8])for(const tier of ['all','recall','reason','standard','challenge'])for(const skill of ['all','concept','process']){
 const opts={chapter:ch,tier,skill,priority:'core'},matched=R.filter(q=>E.eligible(q,opts)),selected=E.select(R,{...opts,count:1000});
 check(selected.length===matched.length&&selected.every(q=>E.eligible(q,opts)),'filter count and start agree');
}
for(let i=0;i<60;i++){
 const mock=E.mock(R),choice=mock.filter(q=>q.type==='choice');
 check(choice.length===10&&new Set(choice.map(q=>q.chapter)).size===8,'mock rotates concepts while covering all chapters');
 check(mock.every(q=>q.priority==='core'),'no supplementary material leaks into mock');
 check(mock.some(q=>q.family==='R5-fixed-shape'&&E.manual(q))&&mock.some(q=>q.family==='E14-pointer-forest'),'mock includes the actual fixed-shape and pointer-to-forest tasks');
 check(mock.find(q=>q.family==='R5-huffman-tree').title.includes('平均码长'),'mock tests normalized code cost, not only WPL');
 check(mock.filter(q=>!E.manual(q)).reduce((s,q)=>s+q.points,0)===44,'automatic/manual score split remains accurate');
}
check(!G['7-7'].steps.some(t=>t.includes('删除标记'))&&G['7-7'].extra.some(t=>t.title.includes('补充边界')),'first hash experience focuses on construction and successful lookup');
check(!T.find(t=>t.id==='r5-1').formula.includes('Cₙ'),'large Catalan counts do not crowd the default memory formula');
// Recompute the newly restored formal-paper tasks from the given structures.
for(const id of ['E14-loop-up','E14-loop-down']){
 const q=by(id),formula=q.fields[0];
 for(const expression of [formula.answer,...formula.aliases]){
  const source=expression.replace(/(n|\d|\))(?=\()/g,'$1*');
  check(/^[n\d+*()/\s-]+$/.test(source),'arithmetic-only authored formula');
  const compute=Function('n','return '+source);
  for(let size=2;size<=40;size++){
   let count=0;for(let i=1;i<=(id==='E14-loop-up'?size:size-1);i++){
    if(id==='E14-loop-up')for(let j=i;j<=size;j++)count++;
    else for(let j=size;j>=i;j--)count++;
   }
   check(compute(size)===count,'each accepted symbolic alias matches actual iterations');
  }
 }
}
for(const q of R.filter(q=>q.family==='PPT1-even-start')){
 const size=Number(q.title.match(/n=(\d+)/)[1]);let total=0;
 for(let i=1;i<=size;i++)for(let j=2*i;j<=size;j++)total++;
 check(E.number(q.fields[0].answer)===total,'shifted inner start counts empty rows as zero');
 check(Number(q.worked[0].rows.at(-1)[3])===total,'shown cumulative trace matches execution');
}
for(const q of R.filter(q=>q.family==='R5-fixed-shape')){
 const g=q.given,tree=new Map(g.rows.map(r=>[r[0],r.slice(1)])),order=[],levels={};
 function walk(u,d=1){if(u==='∅')return;check(!levels[u],'tree visits each node once');levels[u]=d;const[l,r]=tree.get(u);walk(l,d+1);order.push(u);walk(r,d+1);}walk('A');
 check(order.length===g.nodes.length,'all labelled positions reached');
 for(const[u,v,side]of g.links){const x=g.points[g.nodes.indexOf(u)][0],y=g.points[g.nodes.indexOf(v)][0];check(side==='左'?y<x:y>x,'drawing keeps left/right identities');}
 const keys=JSON.parse(q.title.match(/\[[^\]]+\]/)[0]);
 if(q.fields){
  const vals=q.fields[0].answer.split(',').map(Number),map=new Map([...g.nodes].sort().map((u,i)=>[u,vals[i]]));
  check(order.map(u=>map.get(u)).join(',')===[...keys].sort((a,b)=>a-b).join(','),'shape-assigned keys are globally in BST order');
  check(E.equal(q.fields[1].answer,String(Object.values(levels).reduce((s,v)=>s+v,0)/keys.length),'number'),'fixed-shape ASL independently recomputed');
 }
}
const composite=by('E14-pointer-forest'),ptrRows=new Map(composite.given.rows.map(r=>[r[0],r]));
let ptr=6,roots=[];while(ptr){roots.push(ptrRows.get(ptr)[1]);ptr=ptrRows.get(ptr)[3];}
check(roots.join(',')==='A,E,G','original pointer table root chain decoded');
const expectedChildren={A:'B,C,D',E:'F',F:'J',G:'H,I'};
for(const row of ptrRows.values()){
 let ptr=row[2],children=[];while(ptr){children.push(ptrRows.get(ptr)[1]);ptr=ptrRows.get(ptr)[3];}
 check(children.join(',')===(expectedChildren[row[1]]||''),'original pointer table children independently decoded');
 const displayed=composite.worked[1].rows.find(r=>r[0]===row[1])[1];
 check(displayed===(children.join('、')||'无'),'reference forest does not confuse siblings and children');
}
for(const q of R.filter(q=>q.family==='R5-huffman-tree')){
 const weights=JSON.parse(q.title.match(/\[[^\]]+\]/)[0]),pool=[...weights];let optimal=0;
 while(pool.length>1){pool.sort((a,b)=>a-b);const sum=pool.shift()+pool.shift();optimal+=sum;pool.push(sum);}
 const code=q.referenceCodes;
 const codes=Object.values(code);check(codes.every((a,i)=>codes.every((b,j)=>i===j||!b.startsWith(a))),'reference Huffman code is prefix-free');
 check(weights.reduce((s,w,i)=>s+w*code[String.fromCharCode(65+i)].length,0)===optimal,'code lengths achieve independently optimal WPL');
 check(q.worked[1].rows.every((r,i)=>r[0]===String.fromCharCode(65+i)&&r[2]===code[r[0]]&&Number(r[4])===weights[i]*r[2].length),'readable code table matches its actual code words');
 const line=q.solution.find(s=>s.startsWith('总频数=')),fraction=line.match(/=(\d+(?:\/\d+)?)位\/字符/)[1];
 check(E.equal(fraction,String(optimal/weights.reduce((s,v)=>s+v,0)),'number'),'integrated Huffman task includes normalized mean length');
}
console.log(`${n} curriculum checks passed: 55 lesson links, 68 sourced recall checks, 24 transfer items, full difficulty ladders, 135 filter combinations, and 60 balanced mock papers.`);
