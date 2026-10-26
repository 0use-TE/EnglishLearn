// A teaching map of the main grammar system, not a list of every usage exception.
const grammarAtlas=(()=>{
 const leaf=s=>{const [title,detail,example]=s.split('|');return {title,detail,example}};
 const T=(title,lesson,items)=>({title,lesson,detail:'展开查看具体用法；点击知识点可查看例句。',children:items.map(leaf)});
 const G=(title,detail,children)=>({title,detail,children});
 return {title:'英语语法',detail:'按学习用途组织的语法体系。词类、句子成分、时间表达等互相关联；这里用树状图帮助定位，覆盖主要板块，不穷尽所有例外。',children:[
 G('词类与限定','先认识词的类别，再看它们在句中做什么。',[
 T('名词','nouns',[
 '可数与不可数|可数名词有单复数；不可数名词常借助单位表达数量。|two books / some advice — 两本书／一些建议',
 '单数与复数|常见复数加 s / es，也有不规则变化。|a child → two children — 一个孩子／两个孩子',
 '普通与专有名词|专有名词给特定的人、地方等命名，通常首字母大写。|a city / London — 一座城市／伦敦',
 '名词所有格|用 ’s、s’ 或 of 等表达所属关系。|Anna’s bag — Anna 的包',
 '名词作修饰语|名词也可放在另一个名词前说明类别或用途。|a coffee cup — 咖啡杯']),
 T('代词','pronouns',[
 '主格与宾格|主语用 I / he 等，动词或介词宾语常用 me / him 等。|She knows me. — 她认识我。',
 '物主代词|my 后接名词；mine 可独立使用。|This book is mine. — 这本书是我的。',
 '反身代词|myself 等常表示动作回到主语自身。|I taught myself. — 我自学。',
 '指示与不定代词|this / that 指示对象；someone / nothing 等泛指。|Someone is here. — 有人在这里。',
 '疑问与关系代词|who / what 等能提问；who / which 等也能连接从句。|Who called? — 谁打电话了？']),
 T('冠词与数量限定','articles',[
 '不定冠词 a / an|泛指一个单数可数事物，按紧随的读音选 a / an。|an apple — 一个苹果',
 '定冠词 the|表示语境中可以辨认出的特定对象。|Close the door. — 关上门。',
 '零冠词|泛指复数、不可数名词等时常不用冠词。|Cats like warmth. — 猫喜欢温暖。',
 'some / any|some 常用于肯定，any 常用于否定、疑问；提供和请求中也可用 some。|Do you have any questions? — 你有什么问题吗？',
 'much / many / few / little|数量词要与可数性搭配；a few 与 few 的侧重点不同。|a little time — 一点时间',
 '基数词与序数词|one / two 表数量，first / second 表次序。|the first lesson — 第一课']),
 T('形容词与副词','adjectives',[
 '定语与表语形容词|形容词可修饰名词，也可通过系动词描述主语。|a quiet room / The room is quiet. — 安静的房间',
 '方式与程度副词|副词可说明动作方式或修饰形容词等。|speak slowly / very useful — 慢慢说／很有用',
 '频率副词位置|often / usually 等常在实义动词前、be 后。|She is always kind. — 她总是很友善。',
 '比较级与最高级|比较常用 -er / more；最高级常用 -est / most。|faster / the fastest — 更快／最快',
 '同级比较|as…as… 表示在某方面程度相同。|as tall as me — 和我一样高']),
 T('介词','prepositions',[
 '时间介词|常见 at 钟点、on 日期、in 月份，也要留意固定搭配。|on Monday — 在周一',
 '地点与方向|in / on / under 描述位置，to / into 等常表达方向。|walk into the room — 走进房间',
 '介词后的形式|介词后常接名词、代词宾格或动名词。|without saying a word — 一句话也没说',
 '固定介词搭配|动词、形容词后的介词要连同搭配记。|interested in music — 对音乐感兴趣']),
 T('连接词与感叹词','conjunctions',[
 '并列连词|and / but / or 等连接同等地位的成分。|tea or coffee — 茶或咖啡',
 '从属连词|because / if / although 等引出从属分句。|because it rained — 因为下雨了',
 '关联并列结构|both…and…、either…or… 等成对连接。|both you and me — 你和我两个人',
 '感叹词|oh / wow / ouch 等表达即时感受，常能独立使用。|Ouch! — 哎哟！'])
 ]),
 G('句子成分与短语','把词组成短语，再把短语放进句子的骨架。',[
 T('句子成分','sentence',[
 '主语|说明句子谈论谁或什么。|The cat sleeps. — 猫在睡觉。',
 '谓语|说明主语的动作或状态，不一定只有一个单词。|She has finished. — 她已经完成了。',
 '宾语|动作涉及的对象；可由名词、代词或从句等充当。|I like music. — 我喜欢音乐。',
 '表语|通过系动词说明主语身份或状态。|He is a teacher. — 他是老师。',
 '定语与状语|定语修饰名词；状语补充时间、地点、方式等信息。|the book on the desk — 桌上的书',
 '补足语与同位语|补足语补充说明；同位语换个说法指同一对象。|We made him captain. — 我们让他当队长。']),
 T('基本句型','patterns',[
 '主谓 S + V|动词不带宾语即可构成骨架。|Birds fly. — 鸟会飞。',
 '主系表 S + V + C|系动词连接主语与表语。|She looks happy. — 她看起来很开心。',
 '主谓宾 S + V + O|动作直接作用于宾语。|I read books. — 我读书。',
 '主谓双宾 S + V + O + O|人常是间接宾语，事物常是直接宾语。|She gave me a pen. — 她给了我一支笔。',
 '主谓宾补 S + V + O + C|最后一项补充说明宾语的身份、状态等。|Keep the room clean. — 保持房间干净。']),
 T('短语类型','conjunctions',[
 '名词短语|以名词或代词为核心，整体可作主语或宾语等。|the small white cat — 那只小白猫',
 '动词短语|可包含助动词和主要动词等，表达动作或状态。|has been working — 一直在工作',
 '形容词与副词短语|以形容词或副词为核心，可含修饰或补充。|very proud of you — 很为你骄傲',
 '介词短语|介词及其宾语组成整体，常作修饰或补充。|under the table — 在桌子下面']),
 T('一致与指代','agreement',[
 '主谓一致|谓语形式要与主语人称、数及结构配合。|She works. / They work. — 她工作／他们工作',
 '代词指代|代词要让读者清楚知道指谁或什么。|Anna has a cat. She loves it. — Anna 有只猫，她很爱它。',
 '并列主语|and 连接不同的人或物时，谓语通常用复数。|Tom and Anna are here. — Tom 和 Anna 在这里。',
 '存在句 there be|介绍某处存在什么，be 通常与后面的名词配合。|There are two books. — 有两本书。'])
 ]),
 G('动词搭配与语态','动词决定后面能接什么；语态决定突出谁。',[
 T('动词类别','transitive',[
 '及物动词 vt.|及物用法直接带宾语。|enjoy music — 喜欢音乐',
 '不及物动词 vi.|不直接带宾语，但可有状语等补充。|The baby slept well. — 宝宝睡得很好。',
 '系动词|be / seem / become / look 等可连接表语。|He became a doctor. — 他成了医生。',
 '一词多种用法|同一动词能否带宾语，要结合具体用法。|The door opened. / I opened it. — 门开了／我打开了它。']),
 T('双宾与宾补','double-objects',[
 '人 + 物|give / send / tell / teach 等有常见双宾搭配。|teach me English — 教我英语',
 '物 + to + 人|give / send / show 等常可用 to 引出接受者。|send a photo to me — 发张照片给我',
 '物 + for + 人|buy / make / cook 等常可用 for 引出受益者。|buy a coffee for me — 给我买杯咖啡',
 '不能照搬的动词|explain / describe 等通常不直接用人加物的顺序。|explain the rule to me — 向我解释规则',
 '宾语 + 补足语|与双宾不同，补足语是在说明宾语。|They named her Anna. — 他们给她起名 Anna。']),
 T('助动词与情态动词','modals',[
 'be / do / have|助动词帮助构成进行、完成、疑问、否定等结构。|Do you work here? — 你在这里工作吗？',
 '能力与许可|can / could / may 等可表达能力或许可，含义看语境。|Can I sit here? — 我能坐这里吗？',
 '建议与义务|should / must / have to 等表达建议或必要性。|You should rest. — 你应该休息。',
 '推测与可能|may / might / must 等可表示不同把握的推测。|She might be at home. — 她可能在家。',
 '情态动词的完成结构|modal + have done 可回看过去，表达推测、遗憾等。|I should have called. — 我本应该打电话的。']),
 T('动词形态与短语动词','past',[
 '原形与第三人称单数|原形 work；一般现在时第三人称单数常用 works。|He works here. — 他在这里工作。',
 '过去式与过去分词|规则词常都为 -ed；不规则词可能不同。|go → went → gone — 去',
 '-ing 形式|用于进行结构，也可构成分词、动名词等用法。|reading a book — 正在读书／读书这件事',
 '短语动词|动词与小品词组合形成意义，部分搭配中代词要居中。|Turn it off. — 把它关掉。']),
 T('主动与被动','passive',[
 '主动语态|通常以动作执行者为主语。|Anna wrote the email. — Anna 写了邮件。',
 '被动基本结构|be + 过去分词，主语是动作承受者。|The email was written by Anna. — 邮件是 Anna 写的。',
 '进行与完成的被动|is being done 表示正在被做；has been done 表示已被做。|The app is being updated. — 应用正在更新。',
 '情态动词的被动|modal + be + 过去分词。|The file must be saved. — 必须保存文件。'])
 ]),
 G('时间与体','按现在、过去、将来及一般、进行、完成来定位。将来并无独立的动词时态词形。',[
 T('现在视角','present',[
 '一般现在|习惯、一般事实或相对稳定的状态。|I work every day. — 我每天工作。',
 '现在进行|此刻或当前阶段正在进行。|I am working now. — 我现在正在工作。',
 '现在完成|截至现在的经历、结果或持续。|I have finished. — 我已完成。',
 '现在完成进行|强调从过去持续到现在或刚结束的活动过程。|I have been working for two hours. — 我已工作两小时。']),
 T('过去视角','past',[
 '一般过去|定位在过去的动作或状态。|I worked yesterday. — 我昨天工作了。',
 '过去进行|过去某时正在进行的背景或动作。|I was working at eight. — 八点时我正在工作。',
 '过去完成|在某个过去参照点之前已发生或完成。|I had finished before she arrived. — 她来之前我就完成了。',
 '过去完成进行|强调持续到某个过去参照点的过程。|I had been working for hours when she arrived. — 她来时我已连续工作数小时。']),
 T('将来表达','future',[
 'will + 原形|可表达预测、当下决定、意愿等。|I will help you. — 我来帮你。',
 'be going to|已有打算或根据迹象作预测。|It is going to rain. — 要下雨了。',
 '现在形式表将来|进行时可表已安排活动，一般现在时可表时刻表。|The train leaves at six. — 火车六点出发。',
 '将来进行|将来某时会处于进行中的活动。|I will be working at eight. — 八点我会在工作。',
 '将来完成|在将来某个参照点之前完成。|I will have finished by Friday. — 我会在周五前完成。',
 '将来完成进行|强调持续到将来某时的活动时长，使用较少。|By noon, I will have been working for four hours. — 到中午我就已连续工作四小时。']),
 T('时间关系与选择','perfect',[
 '过去与完成的区别|明确过去事件与连到现在的经历、结果，侧重点不同。|I saw it yesterday. / I have seen it. — 我昨天看了／我看过。',
 'for 与 since|for 接时长；since 接起点，常与完成结构连用。|for two years / since 2024 — 两年／从 2024 年起',
 '状态动词与进行|know / believe 等表达一般状态时通常不用进行形式。|I know the answer. — 我知道答案。',
 '过去将来|从过去的角度看后来，用 would / was going to 等。|He said he would come. — 他说他会来。'])
 ]),
 G('句式与比较','根据交流目的组织陈述、提问、否定和比较。',[
 T('陈述与否定','questions',[
 '陈述句语序|典型陈述句先主语，再谓语及其他信息。|She likes tea. — 她喜欢茶。',
 'be / 情态动词否定|常在 be 或情态动词后加 not。|She is not tired. — 她不累。',
 'do / does / did 否定|一般现在、过去的实义动词否定借助 do 系列，后接原形。|He does not drink coffee. — 他不喝咖啡。',
 '部分否定|not all / not always 等表示并非全部或并非总是。|Not all birds can fly. — 不是所有鸟都会飞。']),
 T('疑问句','questions',[
 '一般疑问句|常将助动词、be 或情态动词放到主语前。|Are you ready? — 你准备好了吗？',
 '特殊疑问句|用 what / where / why / how 等提问信息。|Where do you live? — 你住在哪里？',
 '疑问词作主语|who 等本身作主语时，一般无需再借助 do。|Who called you? — 谁给你打了电话？',
 '选择与附加疑问|选择问句给出选项；附加疑问用于确认等。|You are ready, aren’t you? — 你准备好了，对吗？',
 '间接疑问|嵌入其他句子的疑问内容常用陈述语序。|Do you know where he is? — 你知道他在哪里吗？']),
 T('祈使与感叹','there',[
 '肯定与否定祈使|常省略 you；否定用 Don’t + 原形。|Please sit down. / Don’t worry. — 请坐／别担心。',
 'let’s 建议|let’s + 原形用于提议一起做什么。|Let’s go. — 我们走吧。',
 'what 感叹|what 常引出名词短语。|What a lovely day! — 多美好的一天！',
 'how 感叹|how 常修饰形容词或副词。|How beautiful it is! — 真美！']),
 T('比较结构','comparison',[
 '比较级 + than|说明一个对象在某方面更高或更低。|This one is cheaper than that one. — 这个比那个便宜。',
 '最高级与范围|最高级需要合适的比较范围。|the tallest in the class — 班里最高的',
 'as…as… 与否定|not as…as… 常表示程度不如。|It is not as hard as I thought. — 它没我想的难。',
 '越来越与越…越…|重复比较级，或用 the + 比较级成对呼应。|The more you practise, the easier it gets. — 越练越容易。'])
 ]),
 G('分句与从句','连接想法，并区分每个小句在大句子中的作用。',[
 T('独立与并列分句','conjunctions',[
 '独立分句|能独立表达一个完整陈述。|She opened the door. — 她打开了门。',
 '从属分句|依附其他部分，承担修饰或句子成分等功能。|because she was tired — 因为她累了',
 '并列句|独立分句通过 and / but 等连接。|I cooked, and she washed up. — 我做饭，她洗碗。',
 '避免逗号拼接|正式书写中，通常不用一个逗号直接拼接两个独立分句。|It rained, so we stayed home. — 下雨了，所以我们待在家。']),
 T('定语从句','relative',[
 '限定性定语从句|帮助确定是哪一个人或事物。|the person who called — 打电话来的那个人',
 '非限定性定语从句|用逗号隔开，补充信息，通常不用 that。|Anna, who lives here, is a teacher. — 住这里的 Anna 是老师。',
 '关系词与成分|who / which / that / whose 等各有用法。|the girl whose bag is red — 包是红色的那个女孩',
 '关系词省略|限定性从句中，关系词作宾语时常能省略。|the book I bought — 我买的书',
 '关系副词|where / when / why 等可在从句中表达相应关系。|the day when we met — 我们见面的那天']),
 T('名词性从句','noun-clauses',[
 '主语从句|一个从句整体作主语。|What you said matters. — 你说的话很重要。',
 '宾语从句|从句作动词或介词等的宾语。|I know what you mean. — 我知道你的意思。',
 '表语从句|从句通过系动词说明主语。|The problem is that we are late. — 问题是我们迟到了。',
 '同位语从句|补充说明 fact / idea / news 等名词的内容。|the fact that he left — 他离开了这个事实',
 'that / whether / what|that 常连接陈述内容；whether 表是否；what 本身也承担成分。|I wonder whether she knows. — 我想知道她是否知道。']),
 T('状语从句','adverbial',[
 '时间从句|when / while / before / after / until 等表达时间关系。|Call me when you arrive. — 你到了给我打电话。',
 '原因与结果|because 表原因；so…that… 可表达结果。|I was so tired that I fell asleep. — 我太累了，就睡着了。',
 '目的从句|so that / in order that 等说明目的。|Speak slowly so that I can understand. — 说慢点，让我听懂。',
 '让步从句|although / even though 等表达虽然如此仍怎样。|Although it rained, we went out. — 虽然下雨，我们还是出去了。',
 '条件、地点与方式|if / unless、where、as / as if 等表达不同关系。|Do as I say. — 按我说的做。']),
 T('条件与假设','conditionals',[
 '一般规律条件|两边可用一般现在时。|If you heat ice, it melts. — 冰受热会融化。',
 '真实未来条件|if + 现在时，主句常用 will 等。|If it rains, I will stay home. — 如果下雨我就待在家。',
 '现在或将来假设|if + 过去式，主句常用 would + 原形。|If I had time, I would help. — 如果有时间，我就会帮忙。',
 '过去假设|if + had done，主句常用 would have done。|If I had known, I would have called. — 当时知道的话，我就打电话了。',
 '混合时间假设|条件与结果指向不同时间，分别按含义选形式。|If I had studied medicine, I would be a doctor now. — 当初学医的话，我现在就是医生了。']),
 T('转述与时态呼应','reported',[
 '直接与间接引语|直接引语保留原话，间接引语调整转述视角。|He said he was tired. — 他说他累了。',
 '人称与时地调整|I / here / today 等可能随说话者与时间地点变化。|He said he would come the next day. — 他说次日会来。',
 '时态回移|过去转述时常回移；仍成立的事实不必一律回移。|She said the Earth is round. — 她说地球是圆的。',
 '转述疑问与指令|转述疑问用陈述语序，指令可用 tell…to do。|She asked where I lived. — 她问我住哪里。'])
 ]),
 G('非谓语与简化','动作形式也能充当句子成分，或帮助缩短句子。',[
 T('不定式','infinitive',[
 '带 to 与不带 to|want 后常用 to do；情态动词后用原形。|I want to learn. / I can learn. — 我想学／我能学。',
 '作主语、宾语、表语|不定式可以整体占据多种句子成分位置。|To learn is to grow. — 学习就是成长。',
 '目的与名词后修饰|to do 可说明目的，也可补充名词内容。|I came to help. — 我来帮忙。',
 '完成与被动形式|to have done 回看更早的动作；to be done 表被动。|The work needs to be finished. — 工作需要完成。']),
 T('动名词','infinitive',[
 '作主语或宾语|-ing 形式可以把活动当作一件事来谈。|Swimming is fun. — 游泳很有趣。',
 '介词后用 -ing|介词后的动作常用动名词形式。|Thank you for helping. — 谢谢你帮忙。',
 '常见动词搭配|enjoy / avoid / finish 等后常用 -ing。|I enjoy reading. — 我喜欢阅读。',
 '不定式与动名词区别|有些动词两种都接，但意义可能变化。|remember to call / remember calling — 记得要打／记得打过']),
 T('分词与缩减结构','participles',[
 '现在分词|常表达主动、进行的关系。|the sleeping cat — 那只睡着的猫',
 '过去分词|常表达被动、完成或状态，依语境判断。|a broken window — 一扇破窗',
 '分词作补充背景|通常需要分词的逻辑主语与主句主语对应。|Walking home, I saw a cat. — 回家途中我看见一只猫。',
 '缩减定语从句|部分定语从句可缩成分词结构，需保持含义。|the app developed by us — 我们开发的应用',
 '独立结构|分词结构可带自己的名词或代词，表达独立背景，属进阶用法。|Weather permitting, we will go. — 天气允许的话，我们就去。'])
 ]),
 G('语气与信息组织','表达态度、突出信息，并让上下文衔接自然。',[
 T('愿望与虚拟','subjunctive',[
 'wish 与遗憾|wish + 过去式常谈现在遗憾；had done 常谈过去遗憾。|I wish I knew. — 真希望我知道。',
 '建议与要求|suggest / insist / demand 等表达建议要求时，从句可用原形或 should + 原形。|I suggest that he be careful. — 我建议他小心。',
 'would rather / it is time|这些结构可用过去式表达对现在或未来的态度。|It is time we left. — 我们该走了。',
 'if only / as if|用于愿望或假设比较，形式随真实程度与时间变化。|If only I had listened! — 要是当时听了就好了！']),
 T('强调','emphasis',[
 '强调句|It is / was…that / who… 突出某个句子成分。|It was Anna who called. — 打电话的是 Anna。',
 'do / does / did 强调|肯定句中可用助动词强调实义动词，后接原形。|I do like it. — 我确实喜欢它。',
 '前置与焦点|改变信息的位置可以突出话题，但需遵守结构限制。|This book, I really enjoyed. — 这本书，我确实很喜欢。']),
 T('倒装','emphasis',[
 '疑问中的倒装|助动词、be 或情态动词常在主语前。|Have you finished? — 你完成了吗？',
 '否定或限制词前置|never / rarely / only then 等前置，常触发部分倒装。|Only then did I understand. — 直到那时我才明白。',
 '地点前置与完全倒装|部分地点、方向表达前置时可出现动词在名词主语前的结构。|On the wall hung a picture. — 墙上挂着一幅画。',
 'so / neither 呼应|表示前面的情况也适用于另一对象。|So do I. / Neither do I. — 我也如此／我也不。']),
 T('省略与替代','emphasis',[
 '并列省略|上下文已知的重复部分可省略。|She can swim, and I can, too. — 她会游泳，我也会。',
 '从句省略|主语对应且含 be 等条件下，一些状语从句可缩减。|When ready, press Start. — 准备好后按开始。',
 'one / ones 替代|代替可数名词，避免重复。|I like the red one. — 我喜欢红色的那个。',
 'do so / so / not 替代|可在合适语境中替代前文动作或命题内容。|I think so. — 我也这么想。']),
 T('衔接与标点','conjunctions',[
 '逻辑连接表达|however / therefore 等表关系，但不等同于并列连词。|It rained; however, we went out. — 下雨了，不过我们还是出去了。',
 '指代与重复控制|代词、同义表达与必要重复帮助读者跟住对象。|I bought a book. It was useful. — 我买了本书，它很有用。',
 '标点与分句边界|逗号、分号、句号用于不同层级的连接与分隔。|I cooked; she washed up. — 我做饭，她洗碗。'])
 ])
 ]};
})();
