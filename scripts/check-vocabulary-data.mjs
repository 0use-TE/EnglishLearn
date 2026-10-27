import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const context=vm.createContext({});
const html=fs.readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
const sources=[...html.matchAll(/<script defer src="([^"?]+)(?:\?[^"]*)?"><\/script>/g)].map(m=>m[1]).filter(f=>/^vocabulary-[\w-]+\.js$/.test(f));
for(const file of sources)vm.runInContext(fs.readFileSync(new URL('../dist/'+file,import.meta.url),'utf8'),context,{filename:file});
const {entries,categories}=JSON.parse(vm.runInContext('JSON.stringify({entries:vocabularyBank,categories:vocabularyCategories})',context));
assert.equal(entries.filter(e=>e.type==='word').length,1100);
assert.equal(entries.filter(e=>e.type==='phrase').length,300);
assert.equal(new Set(entries.map(e=>e.id)).size,entries.length,'IDs must be unique to preserve distinct favourites and review records');
assert.equal(new Set(entries.map(e=>e.en.toLowerCase())).size,entries.length,'No duplicate headwords');
for(const e of entries){
 assert.match(e.id,/^bank:[a-z0-9-]+$/);
 assert.ok(categories[e.category],e.en+': unknown category');
 assert.ok(['core','practical'].includes(e.tier),e.en+': missing learning tier');
 for(const key of ['en','meaning','example','translation'])assert.ok(typeof e[key]==='string'&&e[key].trim(),e.en+': missing '+key);
 assert.match(e.meaning,/[\u3400-\u9fff]/);
 assert.match(e.translation,/[\u3400-\u9fff]/);
 assert.ok(!/[\u3400-\u9fff]/.test(e.example),e.en+': English example contains Chinese');
 assert.ok(!e.example.includes('…'),e.en+': example must be complete');
 if(e.type==='word')assert.ok(e.example.toLowerCase().includes(e.en.toLowerCase()),e.en+': word not used in its example');
}
for(const category of Object.keys(categories))assert.ok(entries.some(e=>e.category===category),category+': empty category');
assert.ok(html.includes('src="vocabulary-data.js'),'Vocabulary data must be served');
assert.ok(html.includes('src="vocabulary.js'),'Vocabulary UI must be served');
console.log(`${entries.length} unique entries: 1100 words, 300 phrases; ${Object.keys(categories).length} categories. Examples, translations and learning tiers are complete.`);
