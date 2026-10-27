const vocabularyTiers={core:'基础必会',practical:'常用场景'};
function vocabularyEntries(){
 const reading=study.words.filter(key=>!key.startsWith('bank:')).map(key=>{const[id,index]=key.split(':');const u=unit(id),p=u?.phrases[Number(index)];return p?{id:key,type:'phrase',category:'reading',en:p[0],meaning:p[1],example:p[2],translation:'',note:'',readingId:id,readingTitle:u.title}:null}).filter(Boolean);
 const categories=['foundation','actions','people','home','world','description','daily','communication','travel','learning','work','software','documents'];
 const bank=[...vocabularyBank].sort((a,b)=>(a.tier==='core'?0:1)-(b.tier==='core'?0:1)||categories.indexOf(a.category)-categories.indexOf(b.category));
 return [...bank,...reading];
}
function vocabularySentence(entry){return `<details class="vocab-own-sentence"><summary>自己说 / 写一句</summary><p>换一个对象、时间或场景，用出这条表达。</p><textarea data-vocab-sentence="${esc(entry.id)}" rows="3" lang="en" spellcheck="true" aria-label="用 ${esc(entry.en)} 造句" placeholder="自己写一句，不必照抄例句。">${esc(draft('vocabulary:'+entry.id).sentence||'')}</textarea><span role="status">本地保存 · 不自动批改</span></details>`}
function bindVocabularySentences(root){root.querySelectorAll('[data-vocab-sentence]').forEach(el=>el.oninput=()=>{draft('vocabulary:'+el.dataset.vocabSentence).sentence=el.value;el.nextElementSibling.textContent=saveStudy()?'✓ 已保存到本地':'保存失败，请复制草稿'})}
function vocabularyReview(entry,original='回想时未记住'){
 const key='vocabulary:'+entry.id;
 study.mistakes[key]={kind:'vocabulary',id:entry.readingId||entry.id,entryId:entry.id,title:entry.meaning,original,correction:entry.en,note:[entry.example,entry.translation,entry.note].filter(Boolean).join('\n'),reviewed:false,date:Date.now()};
 study.knownWords=study.knownWords.filter(id=>id!==entry.id);
 saveStudy();
}
function vocabularyReviewLink(m){return m.entryId?.startsWith('bank:')?'#vocabulary/'+encodeURIComponent(m.entryId):'#read/'+encodeURIComponent(m.id)}
function relatedVocabulary(entry){
 const words=vocabularyBank.filter(x=>x.type==='word'),phrases=vocabularyBank.filter(x=>x.type==='phrase');
 const contains=(text,word)=>new RegExp('\\b'+word.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\b','i').test(text);
 return (entry.type==='word'?phrases.filter(x=>contains(x.en,entry.en)):words.filter(x=>contains(entry.en,x.en))).slice(0,6);
}
function vocabularyDetails(entry){const related=relatedVocabulary(entry);return `<details class="vocab-detail"><summary>例句 / 用法</summary><p lang="en">${esc(entry.example)}</p>${entry.translation?`<p>${esc(entry.translation)}</p>`:''}${entry.note?`<p class="vocab-note">${esc(entry.note)}</p>`:''}${entry.readingId?`<a href="#read/${entry.readingId}">来自：${esc(entry.readingTitle)} →</a>`:''}${related.length?`<div class="vocab-related"><small>${entry.type==='word'?'相关搭配':'相关单词'}</small>${related.map(x=>`<a href="#vocabulary/${encodeURIComponent(x.id)}">${esc(x.en)} →</a>`).join('')}</div>`:''}</details>`}
function mountVocabularyCards(root,items,direction,orderMode='sequence'){
 if(direction==='spelling')items=items.filter(e=>e.type==='word'||(e.readingId&&!/\b[AB]\b/.test(e.en)));
 if(!items.length){root.innerHTML='<div class="empty-state"><p>此筛选下没有可核对拼写的条目。搭配模板请使用回想卡片。</p></div>';return}
 // Each session is bounded; return to the filtered list for the next group.
 const pending=items.filter(e=>!study.knownWords.includes(e.id)),known=items.filter(e=>study.knownWords.includes(e.id));
 if(orderMode==='random')for(const group of [pending,known])for(let i=group.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[group[i],group[j]]=[group[j],group[i]]}
 const order=[...pending,...known];
 const session=order.slice(0,10);let index=0,revealed=false,remembered=0,spellingFeedback='';
 function draw(){
  if(index===session.length){root.innerHTML=`<div class="recall-finish"><h2>本轮完成</h2><p>${session.length} 条中，自评记住 ${remembered} 条。</p><p>没记住的已加入复习本。过几天再回想一次。</p><button class="button primary" data-restart>再练一组</button><a href="#revision">查看复习本 →</a></div>`;root.querySelector('[data-restart]').onclick=()=>mountVocabularyCards(root,items,direction,orderMode);return}
  const entry=session[index],front=direction==='english'?entry.en:entry.meaning,back=direction==='english'?entry.meaning:entry.en;
  root.innerHTML=`<section class="recall-card"><div class="recall-meta"><span>${index+1} / ${session.length}</span><span>${entry.type==='word'?'单词':'搭配 / 表达'}</span></div><p class="recall-prompt">${direction==='english'?'想想它的意思':'回想对应的英文'}</p><h2 ${direction==='english'?'lang="en"':''}>${esc(front)}</h2>${revealed?`<div class="recall-answer"><h3 ${direction!=='english'?'lang="en"':''}>${esc(back)}</h3><p lang="en">${esc(entry.example)}</p>${entry.translation?`<p>${esc(entry.translation)}</p>`:''}${entry.note?`<p class="vocab-note">${esc(entry.note)}</p>`:''}${vocabularySentence(entry)}</div><div class="recall-actions"><button class="button" data-forgot>没记住 · 加入复习</button><button class="button primary" data-remember>记住了 →</button></div>`:'<button class="button primary" data-reveal>显示答案</button>'}</section>`;
  bindVocabularySentences(root);
  if(direction==='spelling'&&!revealed){const button=root.querySelector('[data-reveal]');button.insertAdjacentHTML('beforebegin','<label class="recall-spelling">写出本条的英文<input id="recall-spelling" autocomplete="off" autocapitalize="off" spellcheck="false"></label><p class="spelling-hint">只核对本条写法，不判断其他译法。</p>');button.textContent='核对拼写';button.onclick=()=>{const input=root.querySelector('input'),value=input.value.trim();if(!value){input.focus();return}const matches=value.toLowerCase().replace(/\s+/g,' ')===entry.en.toLowerCase().replace(/\s+/g,' ');spellingFeedback=matches?'✓ 与本条拼写一致':'与本条写法不同；目标单词 / 表达见下方。';if(!matches)vocabularyReview(entry,'拼写回想：'+value);revealed=true;draw()};root.querySelector('input').onkeydown=e=>{if(e.key==='Enter')button.click()}}
  else if(!revealed)root.querySelector('[data-reveal]').onclick=()=>{revealed=true;draw()};
  else{if(spellingFeedback)root.querySelector('.recall-answer').insertAdjacentHTML('afterbegin',`<p role="status">${esc(spellingFeedback)}</p>`);root.querySelector('[data-forgot]').onclick=()=>{vocabularyReview(entry);index++;revealed=false;spellingFeedback='';draw()};root.querySelector('[data-remember]').onclick=()=>{remembered++;if(!study.knownWords.includes(entry.id))study.knownWords.push(entry.id);saveStudy();index++;revealed=false;spellingFeedback='';draw()}}
 }
 draw();
}
function renderVocabulary(routeId){
 const all=vocabularyEntries();let target=null;
 try{target=all.find(x=>x.id===decodeURIComponent(routeId||''))}catch{}
 let exactId=target?.id||null;
 let tab=routeId==='saved'?'saved':'bank',page=0,recall=false;
 const pageSize=25;
 $('#breadcrumb').textContent='词汇与搭配';
 $('#main').innerHTML=`<div class="study-shell vocabulary-shell">${studyHeader('词汇与搭配',`${vocabularyBank.filter(x=>x.type==='word').length} 个常用单词 · ${vocabularyBank.filter(x=>x.type==='phrase').length} 个搭配与表达`)}<div class="level-tabs" role="group" aria-label="词表范围"><button data-vocab-tab="bank" aria-pressed="${tab==='bank'}" class="${tab==='bank'?'selected':''}">常用词库</button><button data-vocab-tab="saved" aria-pressed="${tab==='saved'}" class="${tab==='saved'?'selected':''}">我的收藏 <span id="saved-word-count">${study.words.length}</span></button></div><div class="vocab-filters"><label>查找<input id="vocab-search" type="search" placeholder="英文、中文或用法"></label><label>类别<select id="vocab-type"><option value="all">单词与搭配</option><option value="word">单词</option><option value="phrase">搭配 / 表达</option></select></label><label>层级<select id="vocab-tier"><option value="all">全部层级</option>${Object.entries(vocabularyTiers).map(([id,name])=>`<option value="${id}">${name}</option>`).join('')}</select></label><label>场景<select id="vocab-category"><option value="all">全部场景</option>${Object.entries(vocabularyCategories).map(([id,name])=>`<option value="${id}">${name}</option>`).join('')}<option value="reading">阅读收藏</option></select></label><label>记录<select id="vocab-status"><option value="all">全部</option><option value="new">还需回想</option><option value="known">自评记住</option></select></label></div><div class="vocab-toolbar"><label>显示<select id="vocab-mask"><option value="none">英文 + 中文</option><option value="english">遮住英文</option><option value="meaning">遮住释义</option></select></label><label>卡片方向<select id="recall-direction"><option value="chinese">看中文想英文</option><option value="english">看英文想意思</option><option value="spelling">拼写核对</option></select></label><label>顺序<select id="recall-order"><option value="sequence">顺序 · 未记住优先</option><option value="random">随机 · 未记住优先</option></select></label><button class="button primary" id="start-recall">卡片背诵 · 每轮 10 条</button></div><div class="vocab-result-heading"><span id="vocab-count" role="status"></span><button id="exit-recall" hidden>返回词表</button></div><div id="vocab-content"></div><div id="vocab-pagination" class="vocab-pagination"></div></div>`;
 if(target){$('#vocab-search').value=target.en;if(target.readingId)tab='saved'}
 function filtered(){const query=$('#vocab-search').value.trim().toLowerCase();return all.filter(e=>(!exactId||e.id===exactId)&&($('#vocab-tier').value==='all'||e.tier===$('#vocab-tier').value)&&(tab==='bank'?!e.readingId:study.words.includes(e.id))&&($('#vocab-type').value==='all'||e.type===$('#vocab-type').value)&&($('#vocab-category').value==='all'||e.category===$('#vocab-category').value)&&($('#vocab-status').value==='all'||($('#vocab-status').value==='known'?study.knownWords.includes(e.id):!study.knownWords.includes(e.id)))&&[e.en,e.meaning,e.example,e.translation,e.note].join(' ').toLowerCase().includes(query))}
 function draw(){
  const items=filtered(),pages=Math.ceil(items.length/pageSize);page=Math.min(page,Math.max(0,pages-1));
  $('#vocab-count').textContent=`${items.length} 条${recall?' · 本轮为自评回想':''}`;$('#exit-recall').hidden=!recall;$('#vocab-pagination').hidden=recall;
  $('#start-recall').disabled=!items.length;
  document.querySelectorAll('[data-vocab-tab]').forEach(b=>{b.classList.toggle('selected',b.dataset.vocabTab===tab);b.setAttribute('aria-pressed',String(b.dataset.vocabTab===tab))});
  if(!items.length){$('#vocab-content').innerHTML=`<div class="empty-state"><p>${tab==='saved'&&!study.words.length?'还没有收藏。可从常用词库或阅读中添加。':'没有匹配的条目，试试其他筛选条件。'}</p>${tab==='saved'?'<a href="#reading">去阅读中积累 →</a>':''}</div>`;$('#vocab-pagination').innerHTML='';return}
  if(recall){mountVocabularyCards($('#vocab-content'),items,$('#recall-direction').value,$('#recall-order').value);return}
  const mask=$('#vocab-mask').value;
  $('#vocab-content').innerHTML=`<div class="word-table">${items.slice(page*pageSize,(page+1)*pageSize).map(e=>`<article class="word-row" data-entry="${esc(e.id)}"><div class="word-row-head"><div class="word-heading"><small>${e.type==='word'?'单词':'搭配 / 表达'} · ${esc(vocabularyCategories[e.category]||'阅读收藏')}${e.tier?' · '+vocabularyTiers[e.tier]:''}${study.knownWords.includes(e.id)?' · 自评记住':''}</small><h2>${mask==='english'?'<button class="word-reveal" data-reveal-en>显示英文</button>':`<span lang="en">${esc(e.en)}</span>`}</h2><p>${mask==='meaning'?'<button class="word-reveal" data-reveal-meaning>显示释义</button>':esc(e.meaning)}</p></div><div class="word-actions"><button data-save-word aria-pressed="${study.words.includes(e.id)}">${study.words.includes(e.id)?'★ 已收藏':'☆ 收藏'}</button><button data-review-word>加入复习</button></div></div>${vocabularyDetails(e)}<p class="word-action-status" role="status"></p></article>`).join('')}</div>`;
  document.querySelectorAll('[data-entry]').forEach(row=>{const e=items.find(x=>x.id===row.dataset.entry);const revealEn=row.querySelector('[data-reveal-en]'),revealMeaning=row.querySelector('[data-reveal-meaning]');if(revealEn)revealEn.onclick=()=>{const span=document.createElement('span');span.lang='en';span.textContent=e.en;revealEn.replaceWith(span)};if(revealMeaning)revealMeaning.onclick=()=>{revealMeaning.parentElement.textContent=e.meaning};row.querySelector('[data-save-word]').onclick=()=>{const saved=study.words.includes(e.id);study.words=saved?study.words.filter(id=>id!==e.id):[...study.words,e.id];if(!saveStudy())return;$('#saved-word-count').textContent=study.words.length;if(tab==='saved'&&saved){draw();return}const b=row.querySelector('[data-save-word]');b.textContent=saved?'☆ 收藏':'★ 已收藏';b.setAttribute('aria-pressed',String(!saved))};row.querySelector('[data-review-word]').onclick=()=>{vocabularyReview(e);row.querySelector('.word-action-status').textContent='✓ 已加入统一复习本'}});
  $('#vocab-pagination').innerHTML=pages>1?`<button id="vocab-prev" ${page===0?'disabled':''}>← 上一页</button><span>${page+1} / ${pages}</span><button id="vocab-next" ${page===pages-1?'disabled':''}>下一页 →</button>`:'';
  const previous=$('#vocab-prev'),next=$('#vocab-next');if(previous)previous.onclick=()=>{page--;draw();$('#vocab-content').scrollIntoView({behavior:'instant',block:'start'})};if(next)next.onclick=()=>{page++;draw();$('#vocab-content').scrollIntoView({behavior:'instant',block:'start'})};
 }
 document.querySelectorAll('[data-vocab-tab]').forEach(b=>b.onclick=()=>{tab=b.dataset.vocabTab;exactId=null;page=0;recall=false;draw()});
 for(const id of ['vocab-type','vocab-tier','vocab-category','vocab-status','vocab-mask'])$('#'+id).onchange=()=>{if(id!=='vocab-mask')exactId=null;page=0;recall=false;draw()};
 $('#vocab-search').oninput=()=>{exactId=null;page=0;recall=false;draw()};$('#recall-direction').onchange=()=>{if(recall)draw()};$('#recall-order').onchange=()=>{if(recall)draw()};
 $('#start-recall').onclick=()=>{recall=true;draw();$('#vocab-content').scrollIntoView({behavior:'instant',block:'start'})};$('#exit-recall').onclick=()=>{recall=false;draw()};draw();
}
