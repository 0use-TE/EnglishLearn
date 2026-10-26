// Add comparisons only where a real choice or common confusion needs explaining.
const lessonComparisons={};
function C(id,title,a,b,takeaway){(lessonComparisons[id] ||= []).push({title,options:[a,b],takeaway});}

C('modals','can 和 might：能做，还是可能会做？',
 ['can','这里表示具备能力，或条件允许。','I can help you tomorrow.','我明天能帮你。'],
 ['might','表示事情可能发生，尚不确定是否会做。','I might help you tomorrow.','我明天可能会帮你。'],
 'can 在这里回答“能不能”，might 回答“会不会发生”。can 也能表示一般可能性，不能永远只翻译成“会”。');
C('modals','should 和 must：建议，还是必须？',
 ['should','建议某事值得做，不等于强制要求。','You should wear a helmet.','你最好戴头盔。'],
 ['must','表达必须履行的要求或强烈必要性。','You must wear a helmet.','你必须戴头盔。'],
 '给建议用 should；表达规则、要求或强烈必要性可用 must。同一个动作，换词会改变说话者的态度。');
C('modals','mustn’t 和 don’t have to：禁止，还是不必？',
 ['mustn’t','不允许做，做了违反要求。','You mustn’t finish this alone.','你不准独自完成这件事。'],
 ['don’t have to','没有必要做，但通常仍然可以选择做。','You don’t have to finish this alone.','你不必独自完成这件事。'],
 'mustn’t 不是“不必”。如果想说“没有这个必要”，用 don’t have to 或 needn’t。');
C('modals','must 和 can’t：推测中的肯定与否定',
 ['must','根据证据作出把握很大的肯定推测。','She must be tired after that long walk.','走了那么久，她一定累了。'],
 ['can’t','根据证据判断某种情况不可能或极不可能。','She can’t be at home; I just saw her at the office.','她不可能在家；我刚在办公室见到她。'],
 '这里的 must 不是命令，而是“一定是”。入门阶段把否定推测记成 can’t；mustn’t 通常用于禁止。');

C('questions','be 和 do / does / did：提问时先找动词',
 ['原句有 be','将 be 移到主语前。','She is tired. → Is she tired?','她累了。→ 她累了吗？'],
 ['一般时态的实义动词','通常借助 do / does / did，主要动词用原形。','She likes tea. → Does she like tea?','她喜欢茶。→ 她喜欢茶吗？'],
 '不要写 Is she like tea?。若已有情态动词或助动词，就使用它：Can she swim? / Has she left?，不再加 do。');
C('questions','直接问，和把问题放进另一句话',
 ['直接疑问','通常使用疑问语序。','Where does he live?','他住在哪里？'],
 ['嵌入的疑问内容','通常恢复陈述语序，不再把 does 放进从句。','Do you know where he lives?','你知道他住在哪里吗？'],
 '外层 Do you know 已经在提问；里面用 where he lives。不是所有带问号的句子，内部每一层都要倒装。');

C('present','一般现在和现在进行：习惯，还是正在做？',
 ['一般现在','说日常习惯或相对稳定的情况。','I work at home.','我在家工作。'],
 ['现在进行','说此刻或当前阶段正在发生的活动。','I am working at home today.','我今天正在家里工作。'],
 '一般现在不等于“正在发生”。进行时也不只限于此刻的一秒，可以描述当前暂时的安排或活动。');
C('perfect','一般过去和现在完成：过去的事，还是连到现在？',
 ['一般过去','把事情定位在已结束的过去时间。','I lost my keys yesterday.','我昨天丢了钥匙。'],
 ['现在完成','突出截至现在的结果、经历或持续。','I have lost my keys.','我把钥匙丢了，现在找不到。'],
 '不是“有影响就必须完成时”。关键看表达视角；明确说 yesterday 等已结束时间时，通常用一般过去时。');
C('perfect','have done 和 have been doing：结果，还是持续过程？',
 ['现在完成','这里侧重做完后的结果或数量。','I have written three emails.','我已经写了三封邮件。'],
 ['现在完成进行','这里侧重从过去持续到现在或刚结束的活动。','I have been writing emails for an hour.','我已经连续写邮件一小时了。'],
 '完成进行不保证活动还会继续，也不强调完成了多少。状态动词有自己的限制，如 I have known her for years 通常不用进行形式。');
C('future','will 和 be going to：当下决定，还是已有打算？',
 ['will','这里用于听到情况后当下作出的决定。','The phone is ringing. I’ll answer it.','电话响了，我来接。'],
 ['be going to','这里用于说之前已有的计划。','I’m going to call Anna tonight.','我打算今晚给 Anna 打电话。'],
 '这是常见区别，不是绝对分工；两者都能用于预测。先根据语境判断是在作决定、说计划，还是作预测。');
C('future','将来的主句，和 when / if 从句',
 ['主句表达未来','will 可表示将来的动作。','I will call you tomorrow.','我明天会给你打电话。'],
 ['未来时间或条件从句','when / if 从句通常用现在形式。','I will call you when I arrive.','我到了就给你打电话。'],
 '普通未来时间、条件中，不说 when I will arrive。但宾语从句不同：I don’t know when he will arrive 是“我不知道他何时会到”。');

C('articles','a / an 和 the：某一个，还是特定的那个？',
 ['a / an','引入一个尚未确定的单数可数对象。','I need a pen.','我需要一支笔。'],
 ['the','语境中可以辨认出具体指哪一个。','I need the pen on your desk.','我需要你桌上的那支笔。'],
 '不是简单的“第一次 a，第二次 the”。即使第一次提到，只要双方知道指哪个，也可以用 the。');
C('articles','a 和 an：看读音，不看字母',
 ['a','紧随其后以辅音音素开头。','a university / a useful tool','一所大学／一个有用的工具'],
 ['an','紧随其后以元音音素开头。','an hour / an old book','一小时／一本旧书'],
 'university 的开头是辅音 /j/，hour 的 h 不发音。冠词看紧挨着的发音，所以是 a book，却是 an old book。');
C('quantifiers','many 和 much：数几个，还是量多少？',
 ['many','修饰可数名词复数。','I don’t have many books.','我没有很多书。'],
 ['much','修饰不可数名词，尤其常见于疑问和否定。','I don’t have much time.','我没有多少时间。'],
 '日常肯定陈述常用 a lot of，两类都能搭配：a lot of books / a lot of time。不是把“很多”固定翻成一个词。');
C('quantifiers','a few / a little 和 few / little：有一些，还是几乎没有？',
 ['a few / a little','侧重至少有一些；分别搭配可数复数、不可数名词。','I have a few friends here.','我在这里有几个朋友。'],
 ['few / little','侧重数量少，常带“几乎没有、不够”的意味。','I have few friends here.','我在这里几乎没什么朋友。'],
 'a little time 表示有一点时间；little time 常强调时间很少。一个 a 会改变说话重点，不只是形式变化。');
C('adjectives','good 和 well：描述事物，还是描述动作？',
 ['good','形容词，常修饰名词，或在系动词后作表语。','She is a good singer.','她是一位好歌手。'],
 ['well','这里是副词，说明动作做得怎样。','She sings well.','她唱得很好。'],
 'The music sounds good 中 sounds 是系动词，不是因为“动词后面”就要用副词。well 也可作形容词表示身体健康，如 I’m well。');

C('relative','限定性和非限定性：识别对象，还是补充信息？',
 ['不加逗号','限定范围，帮助说明是哪一个对象。','The students who passed will get certificates.','通过考试的那些学生会拿到证书。'],
 ['用逗号隔开','对已确定的一组人补充信息。','The students, who all passed, will get certificates.','这些学生都通过了考试，他们会拿到证书。'],
 '第一句只谈通过的那部分学生；第二句说明这里谈到的学生全都通过了。非限定性定语从句通常不能用 that。');
C('noun-clauses','that 和 what：只连接，还是也充当成分？',
 ['that','连接一个内容完整的陈述，从句里通常不靠它充当成分。','I know that she bought a book.','我知道她买了一本书。'],
 ['what','可表示“……的事物”，同时在从句里承担成分。','I know what she bought.','我知道她买了什么。'],
 '第一句的 bought 已有宾语 a book；第二句 what 本身是 bought 的宾语。要表达“她买了什么”，用 what，而不是仅将它换成不承担成分的 that。');
C('conditionals','真实可能和假设：不只是在换时态',
 ['真实的未来可能','if + 现在时，主句常用 will。','If I have time tomorrow, I will help you.','如果明天有时间，我会帮你。'],
 ['与现实有距离的假设','if + 过去式，主句常用 would。','If I had more time, I would help you.','如果我有更多时间，我就会帮你。'],
 '第二句的 had 不一定指过去；过去式在这里常表达假设与现实的距离。不能只看动词形状就判断时间。');
C('conditionals','假设现在和假设过去：遗憾发生在什么时候？',
 ['假设现在','设想现在的条件与现实不同。','If I knew the answer, I would tell you.','如果我知道答案，我就告诉你。'],
 ['假设过去','回想已经结束的事情，设想当时不同。','If I had known the answer, I would have told you.','如果我当时知道答案，就告诉你了。'],
 '过去假设常用 had done / would have done。先确定条件和结果分别指向什么时间，再选择形式。');
C('infinitive','stop doing 和 stop to do：停止哪件事？',
 ['stop doing','停止 doing 所指的那件事。','He stopped talking.','他不再说话了。'],
 ['stop to do','停下原来的活动，去做 to do 所指的事。','He stopped to talk to me.','他停下来和我说话。'],
 '前一句停止的是“说话”；后一句“说话”反而是接下来要做的目的。两种结构都对，但意思不同。');
C('infinitive','remember doing 和 remember to do：记得做过，还是记得要做？',
 ['remember doing','记得过去发生过这件事。','I remember locking the door.','我记得锁过门。'],
 ['remember to do','记得去完成这件事。','Remember to lock the door.','记得锁门。'],
 '不要只背“某动词后两种都能接”。先看是在回忆经历，还是提醒要做的事。forget、try 等也各有搭配和含义。');
C('participles','-ing 和 -ed 感受形容词：令人怎样，还是感到怎样？',
 ['boring / interesting / exciting','描述引起这种感受的特征。','The film is boring.','这部电影令人无聊。'],
 ['bored / interested / excited','描述体验到这种感受的状态。','I am bored.','我感到无聊。'],
 '不能背成“人用 -ed，物用 -ing”：He is boring 是“他这个人很无趣”；He is bored 是“他感到无聊”。');

const modalGuide={
 title:'先按意思选，再套结构',
 rows:[
  ['can','能力；也可请求或给予许可','I can swim. / Can I use this?','我会游泳。／我能用这个吗？'],
  ['should','建议；也可表示合理预期','You should rest. / The bus should arrive soon.','你应该休息。／公交车应该快到了。'],
  ['must','必须；也可作有依据的强推测','You must stop. / She must be tired.','你必须停下。／她一定累了。'],
  ['might','不确定的可能性，不表示能力','It might rain.','可能会下雨。']
 ],
 note:'同一个词不止一个中文意思。先看是在谈能力、建议、义务还是推测；might / may / could 的可能性不适合机械换算成固定百分比。',
 sources:[
  ['British Council · 情态动词与可能性','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/probability'],
  ['British Council · 情态动词推测','https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/modals-deduction']
 ]
};
for(const lesson of lessons){
 if(lessonComparisons[lesson.id])lesson.comparisons=lessonComparisons[lesson.id];
 if(lesson.id==='modals')lesson.usageGuide=modalGuide;
}

function comparisonContent(lesson){
 const guide=lesson.usageGuide;
 const usage=guide?`<section class="lesson-section usage-guide"><h2>${esc(guide.title)}</h2><div class="usage-rows">${guide.rows.map(([word,meaning,example,translation])=>`<div class="usage-row"><strong>${esc(word)}</strong><div><p class="usage-meaning">${esc(meaning)}</p><p class="usage-example" lang="en">${esc(example)}</p><p class="usage-translation">${esc(translation)}</p></div></div>`).join('')}</div><p class="usage-note">${esc(guide.note)}</p></section>`:'';
 const pairs=lesson.comparisons?`<section class="lesson-section comparison-section" aria-label="易混用法对比"><h2>怎么区分</h2>${lesson.comparisons.map(c=>`<article class="comparison-card"><h3>${esc(c.title)}</h3><div class="comparison-options">${c.options.map(([name,meaning,example,translation])=>`<div class="comparison-option"><strong>${esc(name)}</strong><p class="comparison-meaning">${esc(meaning)}</p><p class="comparison-example" lang="en">${esc(example)}</p><p class="comparison-translation">${esc(translation)}</p></div>`).join('')}</div><p class="comparison-takeaway"><span>区别</span>${esc(c.takeaway)}</p></article>`).join('')}</section>`:'';
 return usage+pairs;
}
