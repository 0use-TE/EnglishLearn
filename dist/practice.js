function mountPractice(root, questions, options={}) {
  let order=questions.map((_,i)=>i), answers=order.map(()=>null), position=0;
  function reset(indices){order=indices;answers=indices.map(()=>null);position=0;draw();}
  function draw(){
    const question=questions[order[position]], selected=answers[position];
    const answered=selected!==null;
    root.innerHTML=`<div class="practice-heading"><h2>练习</h2><span>${position+1} / ${order.length}</span></div>
      <p class="quiz-question">${esc(question.q)}</p>
      <div class="quiz-options">${question.options.map((o,i)=>`<button class="quiz-option ${answered?(i===question.answer?'correct':i===selected?'wrong':''):''}" data-answer="${i}" aria-pressed="${selected===i}" ${answered?'disabled':''}><span>${String.fromCharCode(65+i)}</span>${esc(o)}</button>`).join('')}</div>
      <div id="quiz-feedback" class="${answered?'feedback '+(selected===question.answer?'correct':'wrong'):''}" role="status">${answered?`${selected===question.answer?'✓ 正确':'✗ 正确答案：'+String.fromCharCode(65+question.answer)}。${esc(question.why)}`:''}</div>
      <div class="practice-actions"><button class="practice-prev" ${position===0?'disabled':''}>上一题</button><button class="button primary practice-next" ${!answered?'disabled':''}>${position===order.length-1?'查看结果':'下一题 →'}</button></div>`;
    root.querySelectorAll('[data-answer]').forEach(button=>button.onclick=()=>{if(answers[position]!==null)return;answers[position]=Number(button.dataset.answer);options.onAnswer?.(order[position],answers[position],questions[order[position]]);draw();root.querySelector('.practice-next').focus({preventScroll:true});});
    root.querySelector('.practice-prev').onclick=()=>{if(position>0){position--;draw();}};
    root.querySelector('.practice-next').onclick=()=>{if(!answered)return;if(position<order.length-1){position++;draw();}else results();};
  }
  function results(){
    const wrong=order.filter((id,i)=>answers[i]!==questions[id].answer);
    root.innerHTML=`<div class="practice-heading"><h2>练习结果</h2><strong>${order.length-wrong.length} / ${order.length}</strong></div><p class="result-label">${wrong.length?'以下题目需要再练':'本轮全部答对'}</p>
      ${wrong.map(id=>{const question=questions[id],selected=answers[order.indexOf(id)];return `<div class="mistake"><strong>${esc(question.q)}</strong><p>你的选择：${esc(question.options[selected])}<br>正确答案：${esc(question.options[question.answer])}</p><p>${esc(question.why)}</p></div>`}).join('')}
      <div class="practice-actions">${wrong.length?'<button class="button primary retry-wrong">重练错题</button>':''}<button class="retry-all">全部重做</button></div>`;
    const retry=root.querySelector('.retry-wrong');if(retry)retry.onclick=()=>reset(wrong);
    root.querySelector('.retry-all').onclick=()=>reset(questions.map((_,i)=>i));
  }
  draw();
}
