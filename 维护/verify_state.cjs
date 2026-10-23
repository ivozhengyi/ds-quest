/* Run the state migrator in a minimal non-browser sandbox, without changing user storage. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),w={addEventListener(){}},element={addEventListener(){}};
const old={version:1,mode:'review',completed:['1-1','unknown'],bookmarks:['1-2'],notes:{'1-1':'旧笔记',unknown:'discard'},quiz:{'q1-1':{attempts:4,correct:3,wrong:1,lastCorrect:false,lastAnswer:0},invalid:{attempts:1}},history:[{date:'2026-10-21T00:00:00Z',label:'旧版挑战',total:8,correct:6,seconds:50}],animations:['binary'],lastLesson:'1-1'};
const ctx={window:w,document:{querySelector(){return element},querySelectorAll(){return[]},addEventListener(){}},localStorage:{getItem(){return JSON.stringify(old)},setItem(){}},setTimeout(){},clearTimeout(){},clearInterval(){},setInterval(){}};
vm.createContext(ctx);for(const f of ['content.js','curriculum.js','learning-guides.js','sources.js','animations.js','learn-bank.js','review-bank.js','review-lessons.js','exam-meta.js','training-engine.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),ctx);Object.assign(ctx,w);
let app=fs.readFileSync(path.join(root,'app.js'),'utf8');const bootstrap="if(!location.hash)history.replaceState(null,'','#home');render();";assert(app.includes(bootstrap));app=app.replace(bootstrap,'window.TEST_API={quickQuestions,topicPractice,committedPractice,sanitize,restoreSession,getState:()=>state,stats,nextLesson,responseLabel,buildMockResults,mockProgress};');vm.runInContext(app,ctx);
const api=w.TEST_API,s=api.getState();assert.strictEqual(s.version,2);assert.deepStrictEqual(JSON.parse(JSON.stringify(s.completed)),['1-1']);assert.strictEqual(s.notes['1-1'],'旧笔记');assert.strictEqual(s.notes.unknown,undefined);assert.strictEqual(s.quiz['q1-1'].attempts,4);assert.strictEqual(s.quiz.invalid,undefined);assert.strictEqual(s.history[0].mode,'learn');assert.strictEqual(s.reviewCompleted.length,0);assert.strictEqual(api.stats('learn').records.length,1);assert.strictEqual(api.stats('review').records.length,0);
const pending=api.restoreSession({ids:['R2-circle-code-v1'],mode:'review',isMock:true,index:0,results:[{id:'R2-circle-code-v1',response:'my code',grade:{kind:'self',score:null,max:8},recorded:false}],response:'my code',finished:true,historyId:'mock1',seconds:120});assert(pending&&pending.finished);assert.strictEqual(pending.results[0].grade.score,null);assert.strictEqual(pending.historyId,'mock1');assert.strictEqual(pending.results[0].response,'my code');
const partial=api.restoreSession({ids:['R1-triangle-v1'],mode:'review',index:0,results:[{id:'R1-triangle-v1',response:['21','O(n)'],grade:{score:99},recorded:true}],responses:['21','O(n)']});assert.strictEqual(partial.results[0].grade.score,2);assert.strictEqual(partial.answered,true);assert.strictEqual(api.restoreSession({ids:['q1-1'],mode:'review'}),null);assert.strictEqual(api.restoreSession({ids:['not-a-question'],mode:'review'}),null);
const v2=api.sanitize({version:2,completed:['1-1'],reviewCompleted:['r5-2'],notes:{'r5-2':'复习纠错'},quiz:{'R2-circle-code-v1':{attempts:1,wrong:1,correct:0,lastGrade:{score:4,max:8}}},history:[]});assert.strictEqual(v2.reviewCompleted[0],'r5-2');assert.strictEqual(v2.notes['r5-2'],'复习纠错');assert.strictEqual(v2.quiz['R2-circle-code-v1'].manual,true);
assert.strictEqual(api.responseLabel(ctx.LEARN_QUESTIONS[0],0),'A · '+ctx.LEARN_QUESTIONS[0].options[0]);
const choices=ctx.REVIEW_QUESTIONS.filter(q=>q.type==='choice').slice(0,1),field=ctx.REVIEW_QUESTIONS.find(q=>q.id==='R1-triangle-v1'),manual=ctx.REVIEW_QUESTIONS.find(q=>q.id==='R2-circle-code-v1');
const editing={questions:[choices[0],field,manual],mockDrafts:{[choices[0].id]:{selection:choices[0].answer,response:'',responses:[]},[field.id]:{selection:null,response:'',responses:['21','']},[manual.id]:{selection:null,response:'pointer solution',responses:[]}}};
assert.strictEqual(api.mockProgress(editing).complete,2);assert.strictEqual(api.mockProgress(editing).partial,1);const assembled=api.buildMockResults(editing);assert.strictEqual(assembled[0].grade.score,1);assert.strictEqual(assembled[1].grade.score,2);assert.strictEqual(assembled[2].grade.score,null);assert.strictEqual(assembled[2].response,'pointer solution');
const blank=api.buildMockResults({questions:[field,manual],mockDrafts:{}});assert(blank.every(r=>r.skipped&&r.grade.score===0));
const restoredEdit=api.restoreSession({ids:[choices[0].id,field.id,manual.id],mode:'review',isMock:true,index:2,mockDrafts:editing.mockDrafts,response:'pointer solution',results:[]});assert.strictEqual(restoredEdit.index,2);assert.strictEqual(restoredEdit.answered,false);assert.strictEqual(restoredEdit.mockDrafts[field.id].responses[0],'21');
const legacyMock=api.restoreSession({ids:[field.id,manual.id],mode:'review',isMock:true,index:0,results:[{id:field.id,response:['21','O(n²)'],grade:{score:4}}]});assert.strictEqual(legacyMock.answered,false);assert.strictEqual(legacyMock.mockDrafts[field.id].responses[0],'21');
s.lastLesson='5-2';assert.strictEqual(api.nextLesson().id,'5-2');
console.log('State checks passed: v1 migration, mode isolation, editable mock drafts, partial/blank-paper scoring, pending self grading, response labels and last-read continuation.');

assert(api.committedPractice({isMock:false,finished:false,questions:[{}],results:[{grade:{score:1}}]}));
assert(!api.committedPractice({isMock:true,finished:false,questions:[{}],results:[{grade:{score:1}}]}));
assert(!api.committedPractice({isMock:false,finished:false,questions:[{},{}],results:[{grade:{score:1}}]}));
assert(!api.committedPractice({isMock:false,finished:false,questions:[{}],results:[{grade:{score:null}}]}));

assert.strictEqual(api.topicPractice('r5-7','shape').length,3);
assert.strictEqual(api.topicPractice('r5-4','forest').length,4);
assert.strictEqual(api.topicPractice('r5-4','integrated').length,1);
assert.strictEqual(api.topicPractice('r1-1','paper-frequency').length,2);

const savedQuiz=s.quiz;
s.quiz=Object.fromEntries(w.REVIEW_QUESTIONS.filter(q=>q.priority==='core').map(q=>[q.id,{attempts:1,lastCorrect:true}]));
assert.strictEqual(api.stats('review').coverage,100,'core coverage does not force optional-only families');
const optional=w.REVIEW_QUESTIONS.find(q=>q.family==='R7-hash-failure');s.quiz={[optional.id]:{attempts:1,lastCorrect:true}};
assert.strictEqual(api.stats('review').coverage,0,'optional-only family does not inflate core coverage');s.quiz=savedQuiz;
for(let i=0;i<50;i++){const qs=api.quickQuestions();assert.strictEqual(qs.length,10);assert.strictEqual(new Set(qs.map(q=>q.family)).size,10);assert(qs.every(q=>q.priority==='core'));assert(qs.slice(0,4).every(q=>q.skill==='concept'));assert(qs.slice(4,8).every(q=>q.skill==='process'&&q.tier==='standard'));assert(qs.slice(8).every(q=>q.tier==='challenge'));}
