import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

// Run the same content files, in the same order, as the actual page.
const html=fs.readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
const sources=[...html.matchAll(/<script defer src="([^"?]+)(?:\?[^"]*)?"><\/script>/g)]
 .map(match=>match[1]).filter(file=>/^(study-data|study-advanced|reading-[\w-]+)\.js$/.test(file));
const context=vm.createContext({});
for(const file of sources)vm.runInContext(fs.readFileSync(new URL('../dist/'+file,import.meta.url),'utf8'),context,{filename:file});
const {units,levels}=JSON.parse(vm.runInContext('JSON.stringify({units:readingUnits,levels:readingLevels})',context));
assert.ok(units.length>0,'Reading content must be loaded by index.html');
assert.equal(new Set(units.map(u=>u.id)).size,units.length,'Article IDs must be unique so drafts cannot overwrite each other');
const wordCount=text=>(text.match(/\b[\w]+(?:['’-][\w]+)*\b/g)||[]).length;
const nonempty=text=>typeof text==='string'&&text.trim().length>0;
const distribution=[0,0,0];
for(const u of units){
 const message=u.id+': ';
 assert.match(u.id,/^[a-z0-9-]+$/);
 assert.ok(levels.some(l=>l.id===u.level),message+'unknown level');
 assert.ok(nonempty(u.title)&&nonempty(u.genre),message+'missing metadata');
 assert.ok(u.paragraphs.length>=2,message+'incomplete reading');
 for(const p of u.paragraphs){assert.ok(nonempty(p.en)&&nonempty(p.zh),message+'every paragraph needs a reference translation');assert.ok(!p.en.includes('…'),message+'English text must not be an excerpt placeholder')}
 const length=wordCount(u.paragraphs.map(p=>p.en).join(' '));
 assert.ok(length>=[80,150,280][u.level],message+'article too short for its level');
 assert.equal(u.phrases.length,5,message+'expected five expressions');
 for(const p of u.phrases)assert.ok(p.length===3&&p.every(nonempty),message+'expression needs meaning and context');
 assert.equal(u.questions.length,3,message+'expected three comprehension questions');
 for(const q of u.questions){assert.ok(nonempty(q.q)&&nonempty(q.why),message+'question needs explanation');assert.ok(q.options.length===3&&q.options.every(nonempty),message+'incomplete options');assert.equal(new Set(q.options).size,q.options.length,message+'duplicate options');assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,message+'invalid answer');distribution[q.answer]++}
 for(const key of ['task','audience','length','starter','model'])assert.ok(nonempty(u.writing[key]),message+'missing writing '+key);
 assert.ok(u.writing.requirements.length>=3&&u.writing.requirements.every(nonempty),message+'missing writing criteria');
 const range=u.writing.length.match(/(\d+)～(\d+) 词/);
 if(range){const n=wordCount(u.writing.model);assert.ok(n>=Number(range[1])&&n<=Number(range[2]),message+`model has ${n} words; expected ${range[1]}–${range[2]}`)}
}
assert.ok(distribution.every(n=>n>0),'Correct answers must not always use the same option');
console.log(`${units.length} articles; ${units.reduce((n,u)=>n+u.questions.length,0)} questions; ${units.reduce((n,u)=>n+u.phrases.length,0)} expressions; ${units.length} writing tasks.`);
for(const l of levels){const group=units.filter(u=>u.level===l.id),counts=group.map(u=>wordCount(u.paragraphs.map(p=>p.en).join(' ')));console.log(`${l.name}: ${group.length} articles, ${Math.min(...counts)}–${Math.max(...counts)} words.`)}
