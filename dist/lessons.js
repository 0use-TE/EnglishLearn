/* Original beginner explanations and examples. No remote content or API required. */
const chapters = [
 {id:'foundation',name:'句子基础',en:'THE FOUNDATIONS',desc:'认识句子的骨架，知道每个词站在哪里。',icon:'▧',color:'sage',level:'从这里开始'},
 {id:'words',name:'词性与搭配',en:'WORDS & THEIR ROLES',desc:'名词、冠词、形容词……让表达更准确。',icon:'Aa',color:'sand',level:'基础必学'},
 {id:'verbs',name:'时态',en:'VERBS & TIME',desc:'把现在、过去和将来放进一句话里。',icon:'◷',color:'blue',level:'核心重点'},
 {id:'expression',name:'常用句式',en:'EVERYDAY STRUCTURES',desc:'提问、否定、比较，说出更多意思。',icon:'⇄',color:'peach',level:'日常实用'},
 {id:'clauses',name:'从句',en:'CONNECTING IDEAS',desc:'用从句补充信息，让想法完整展开。',icon:'⌘',color:'purple',level:'进阶理解'},
 {id:'beyond',name:'进阶语法',en:'GOING FURTHER',desc:'非谓语、假设和强调，认识更大的地图。',icon:'✳',color:'yellow',level:'之后再学'}
];
// id, chapter, title, English title, summary, explanation, pattern, examples, tip, quiz
const lessons = [];
function L(id,chapter,title,en,summary,explain,pattern,examples,tip,q,options,answer,why){lessons.push({id,chapter,title,en,summary,explain,pattern,examples,tip,quiz:{q,options,answer,why}})}
L('sentence',0,'句子成分','The anatomy of a sentence','先找到“谁”和“怎么样”。','英语句子通常围绕主语和谓语展开。主语告诉我们在说谁或什么；谓语说明动作或状态。宾语是动作涉及的对象，表语说明主语是什么或怎么样。先抓住骨架，再看时间、地点等补充信息。','主语（谁） + 谓语（做什么） + 其他信息',[
 ['I write code.','我写代码。','I 是主语；write 是谓语动词；code 是宾语。'],['My cat is sleepy.','我的猫困了。','My cat 是主语；is 是系动词；sleepy 是表语。'],['We work at home.','我们在家工作。','We work 是骨架；at home 补充地点。']
],'“词性”和“句子成分”是两回事：名词是一类词，主语是词在句子里承担的角色。','在 I like music. 中，哪个是宾语？',['I','like','music'],2,'like 是“喜欢”这个动作，music 是喜欢的对象，所以是宾语。');
L('patterns',0,'基本句型','Five basic sentence patterns','把复杂句子先缩成几个简单模型。','常见陈述句可以用五种入门模型理解：主谓、主系表、主谓宾、主谓双宾、主谓宾补。不是每个句子都要有宾语；要看动词需要怎样的搭配。这是入门分析工具，不是所有句式的穷尽分类。','S 主语 · V 动词 · O 宾语 · C 补足语',[
 ['Birds fly. / She is happy.','鸟会飞。/ 她很开心。','主谓 / 主系表。'],['I like tea. / She gave me a book.','我喜欢茶。/ 她给了我一本书。','主谓宾 / 主谓双宾：me 是接受者，a book 是事物。'],['We keep the room clean.','我们让房间保持干净。','主谓宾补：clean 补充说明 the room 的状态。']
],'不要在每个英文动词后面都加东西。例如 arrive 通常不直接接地点宾语，要说 arrive at the station。','She gave me a pen. 属于哪种句型？',['主谓','主谓双宾','主系表'],1,'gave 后有接受者 me 和物品 a pen，构成双宾语。');
L('transitive',0,'及物与不及物动词','Transitive & intransitive verbs','看动词能不能直接接宾语。','及物用法中，动词直接接宾语，如 enjoy music；不及物用法中，动词不直接接宾语，如 sleep。要补充地点或对象时，可能需要介词，如 arrive at the station、listen to music。许多动词两种用法都有，要连同词义和搭配一起学。词典里的 vt. 表示及物，vi. 表示不及物；有的词典用 T / I。','及物：动词 + 宾语 · 不及物：动词（+ 补充信息）',[
 ['I enjoy music.','我喜欢音乐。','enjoy 直接接 music，是及物用法。'],
 ['The cat sleeps on the sofa.','猫在沙发上睡觉。','sleep 是不及物用法；on the sofa 是地点信息。'],
 ['We reached the station. / We arrived at the station.','我们到达了车站。','同样是“到达”，reach 直接接地点，arrive 需要 at / in。'],
 ['I read books. / I read every day.','我读书。/ 我每天阅读。','read 既可带宾语，也可不带宾语，不能只把一个单词固定归一类。']
],'介词后面的名词不是动词的直接宾语：listen to music 中，music 是介词 to 的宾语。','哪句表示“我们到达了车站”？',['We arrived the station.','We reached the station.','We reached to the station.'],1,'reach 直接接地点；arrive 通常用 arrive at / in + 地点。');
L('double-objects',0,'双宾语常用动词','Verbs with two objects','先记“给谁什么”，再记动词搭配。','双宾语结构中，间接宾语常是接受者或受益者，直接宾语常是所给的事物。常见结构是 give someone something。许多这类动词也能用“物 + to / for + 人”的结构，但不能对所有动词机械换序。下表给出常用搭配，先把词组一起记。','动词 + 人（间接宾语） + 物（直接宾语）',[
 ['She gave me a book.','她给了我一本书。','me 是间接宾语，a book 是直接宾语；也可说 She gave a book to me.'],
 ['He bought me a coffee.','他给我买了一杯咖啡。','也可说 He bought a coffee for me.；这里 a coffee 表示一杯咖啡。'],
 ['She gave a book to me. / He bought a coffee for me.','她给了我一本书。/ 他给我买了一杯咖啡。','give 常用 to 引出接受者；buy 常用 for 引出受益者。'],
 ['Please explain the rule to me.','请向我解释这条规则。','标准英语中通常不说 explain me the rule；describe 也常用 describe something to someone。'],
 ['Give it to me.','把它给我。','物是 it 等代词时，初学先用“物 + to / for + 人”的顺序，更稳妥。']
],'to / for 取决于具体动词及含义；不要把 explain、describe 等照搬成“动词 + 人 + 物”。','把“她给我买了一本书”换成另一种表达：She bought a book ___ me.',['to','for','at'],1,'buy someone something 可换成 buy something for someone，表示为某人购买。');
L('be',0,'be 动词','Be: am, is, are','英语里的“很开心”，也需要一个动词。','be 可以连接主语和身份、状态或位置。现在时中 I 配 am；he、she、it 和单数名词通常配 is；you、we、they 和复数名词配 are。过去时常用 was / were。','I am… / He is… / You are…',[
 ['I am a developer.','我是一名开发者。','a developer 说明身份。'],['The cat is happy.','这只猫很开心。','happy 是形容词，前面需要 is。'],['They were at home yesterday.','他们昨天在家。','were 表示过去的状态。']
],'I am happy. 不能写成 I happy.；但 I write code. 中也不要多加 am。be 只有在相应结构里才出现。','选择正确的句子。',['She happy.','She is happy.','She are happy.'],1,'She 使用 is，happy 通过 is 描述主语的状态。');
L('agreement',0,'主谓一致','Subject–verb agreement','主语变化，动词有时也要跟着变。','一般现在时的肯定句里，主语是第三人称单数时，实义动词通常加 -s 或 -es。主语是 I、you、we、they 时通常用原形。be 有自己的变化；情态动词后仍接原形。','She works. / They work. / She can work.',[
 ['My friend likes music.','我的朋友喜欢音乐。','friend 是单数，like 变成 likes。'],['My friends like music.','我的朋友们喜欢音乐。','friends 是复数，使用 like。'],['She does not like coffee.','她不喜欢咖啡。','does 已承担变化，后面的 like 用原形。']
],'不是“看见 he 就把后面所有动词加 s”：He can swim. 和 He is working. 都不用 swims。','My brother ___ games every weekend.',['play','plays','playing'],1,'一般现在时，My brother 是第三人称单数，使用 plays。');
L('nouns',1,'可数与不可数名词','Nouns & countability','先判断能不能直接数“一、二、三”。','名词给人、事物和概念命名。可数名词可用单数或复数；单数普通可数名词通常需要 a、the、my 等限定词。不可数名词如 information、advice，不直接加 a 或复数 -s，可以通过 a piece of 等表达数量。','a book → two books / some information',[
 ['I have a question.','我有一个问题。','question 可数，单数前加 a。'],['These books are useful.','这些书很有用。','book 的复数是 books。'],['Could you give me some advice?','你能给我一些建议吗？','advice 通常不可数，不说 an advice。']
],'可数性和具体含义有关：coffee 可以表示咖啡这种饮品，也可以在点单时表示一杯咖啡。','哪项表示“一些信息”？',['an information','some information','many informations'],1,'information 是不可数名词；some 可修饰不可数名词。');
L('articles',1,'冠词 a / an / the','Articles & determiners','“一个”和“你我都知道的那个”不一样。','a / an 常引入一个尚未特定的单数可数事物；the 表示语境里能辨认出的特定对象。a / an 看紧随其后的读音，而不是字母。泛指复数和不可数名词时常用零冠词。this、my 等限定词也能帮助指明对象。','a / an：某一个 · the：能辨认的那个',[
 ['I saw a cat. The cat was white.','我看到一只猫。那只猫是白色的。','先引入 a cat，再用 the cat 指回它。'],['an hour / a university','一小时 / 一所大学','hour 的 h 不发音；university 以辅音音素 /j/ 开头。'],['I like music. This song is beautiful.','我喜欢音乐。这首歌很美。','泛指 music 不加冠词；this 指明某一首。']
],'不是“首次出现永远用 a”：双方都知道的对象，即使第一次说到也可以用 the，如 Close the door.','她是一名工程师。She is ___ engineer.',['a','an','the'],1,'表示职业且没有特指时，用 an engineer；engineer 以元音音素开头。');
L('quantifiers',1,'数量词','Quantifiers: some, any, much, many','根据可数性，选择合适的数量表达。','many 常修饰复数可数名词；much 常修饰不可数名词，尤其常见于疑问句和否定句。a lot of 两类都能搭配。some 常用于肯定陈述，any 常用于疑问或否定；但请求、提供和期待肯定回答时，疑问句也常用 some。','many books / much time / a lot of work',[
 ['I have some questions.','我有一些问题。','some 可修饰复数可数名词。'],['I do not have much time.','我没有多少时间。','time 在这里不可数，搭配 much。'],['Would you like some tea?','你想喝点茶吗？','提供饮品的疑问句中，some 很自然。']
],'a few / a little 表示“有一些”，分别搭配可数复数 / 不可数；few / little 则侧重“几乎没有”，语气不同。','房间里有许多人。There are ___ people in the room.',['much','many','a little'],1,'people 在这里是复数可数名词，使用 many。');
L('pronouns',1,'代词','Pronouns & possession','用 I、me、my 等词指代人和事物。','主语位置常用 I / he / she / we / they；宾语位置常用 me / him / her / us / them。my、your、their 后面接名词；mine、yours、theirs 可以独立使用。反身代词如 myself，常表示动作回到主语自身。','I help him. / This is my book. / It is mine.',[
 ['She knows me.','她认识我。','She 作主语；me 作 knows 的宾语。'],['This is her laptop. That one is mine.','这是她的笔记本电脑。那台是我的。','her 后接 laptop；mine 独立使用。'],['I taught myself English.','我自学英语。','myself 指回主语 I。']
],'my 和 mine 不能随意互换：my cat 正确，mine cat 不正确。','你能帮我吗？Can you help ___?',['I','my','me'],2,'help 后面是宾语，因此使用 me。');
L('adjectives',1,'形容词与副词','Adjectives & adverbs','一个描述事物，一个常描述动作。','形容词常修饰名词，也可接在 be、seem 等系动词后。副词常修饰动词、形容词、其他副词或整句。很多副词以 -ly 结尾，但不是全部，例如 fast 也可作副词。','a careful driver / drive carefully',[
 ['She is a careful developer.','她是一位细心的开发者。','careful 描述 developer。'],['She checks the code carefully.','她仔细检查代码。','carefully 说明怎样检查。'],['The music sounds good.','音乐听起来不错。','sounds 在这里是系动词，后接形容词 good。']
],'good 是形容词；well 常作副词，如 She writes well。well 也可表示身体健康，不能只靠词尾判断词性。','他英语说得很流利。He speaks English ___.',['fluent','fluently','fluency'],1,'这里修饰 speaks，使用副词 fluently。');
L('prepositions',1,'介词：把关系说清楚','Prepositions & phrases','时间、地点和搭配里的“小连接”。','介词后常接名词、代词或动名词，形成介词短语。入门先掌握时间 at / on / in，地点 in / on / at，以及常见固定搭配。介词含义很多，不能总按一个中文意思机械翻译。','at 8:00 / on Monday / in October',[
 ['The cat is under the table.','猫在桌子下面。','under 说明位置关系。'],['I study English on Mondays.','我每周一学英语。','具体星期通常用 on。'],['I am interested in learning languages.','我对学语言感兴趣。','interested in 是常见搭配，in 后用 learning。']
],'I go home. 通常不加 to，因为 home 在这里作方向副词；但要说 go to school。','We usually meet ___ Friday.',['in','on','at'],1,'在某个星期几，通常用 on。');
L('present',2,'一般现在时','Present simple','说习惯、事实和比较稳定的状态。','一般现在时常用于经常发生的事情、一般事实和相对稳定的情况。它不等于“此刻正在发生”。第三人称单数肯定句中，实义动词通常加 -s / -es；其他常见人称用原形。','I / you / we / they work · he / she / it works',[
 ['I write code every day.','我每天写代码。','every day 表示日常习惯。'],['My cat sleeps a lot.','我的猫睡得很多。','说的是通常的情况。'],['Water freezes at 0°C under standard pressure.','标准气压下，水在零摄氏度结冰。','用一般现在时陈述一般事实。']
],'“我现在在写代码”通常说 I am writing code.，而不是用一般现在时表示这个正在进行的动作。','描述日常习惯：She ___ to work by bus every day.',['go','goes','going'],1,'描述习惯，且 She 是第三人称单数，用 goes。');
L('continuous',2,'进行时','Continuous forms','把镜头放在动作进行的过程中。','进行结构是 be + 动词 -ing。am / is / are 表示现在进行，was / were 表示过去某时正在进行。现在进行时也可描述暂时情况或已经安排好的未来活动。know、believe 等状态动词通常不用进行形式表达一般状态。','am / is / are + doing · was / were + doing',[
 ['I am reading a book now.','我现在正在看书。','动作此刻正在进行。'],['I was cooking when you called.','你打来电话时，我正在做饭。','was cooking 提供过去正在进行的背景。'],['We are meeting tomorrow.','我们明天见面。','现在进行时可以表示已安排的未来活动。']
],'be 不能丢：I reading. 不完整，应说 I am reading。也不要把所有动词都强行变成进行时。','猫此刻正在沙发上睡觉。The cat ___ on the sofa.',['sleep','is sleeping','sleeps'],1,'Look! 引导我们看眼前正在发生的动作，用 is sleeping。');
L('past',2,'一般过去时','Past simple','讲一件发生在过去的事情。','一般过去时描述过去发生的动作或状态。规则动词常加 -ed；不规则形式需逐步记住，如 go → went、write → wrote。否定和一般疑问常用 did，此时实义动词恢复原形。be 的过去式为 was / were。','worked / went · did not work · Did you work?',[
 ['I fixed a bug yesterday.','我昨天修复了一个 bug。','fixed 表示过去的动作。'],['We went to a concert last week.','我们上周去听了一场音乐会。','go 的过去式是 went。'],['Did you finish the task?','你完成那个任务了吗？','did 后使用原形 finish。']
],'不能说 Did you went?；did 已经表示过去，后面应该用 go。','我昨晚看了一部电影。I ___ a film last night.',['watch','watched','have watched'],1,'last night 是已结束的过去时间，这里用 watched。');
L('perfect',2,'现在完成时','Present perfect','从过去发生的事，看到它与现在的联系。','have / has + 过去分词，常用于截至现在的经历、已经造成的结果，或从过去延续至今的情况。它与一般过去时的重点不同：一般过去时把事情放在过去；现在完成时把视角连到现在。','have / has + 过去分词（done）',[
 ['I have lost my keys.','我的钥匙丢了。','重点是现在找不到钥匙这个结果。'],['I have visited Beijing twice.','我去过北京两次。','截至现在的人生经历。'],['I have lived here for two years.','我在这里住了两年了。','从过去住到现在。for 后接时长，since 后接起点。']
],'明确说 yesterday、last year 等已结束的过去时间时，一般不用现在完成时：I finished it yesterday。','哪句表示“我昨天完成了这件事”？',['I have finished it yesterday.','I finished it yesterday.','I have finish it yesterday.'],1,'yesterday 将事情定位在已结束的过去，使用一般过去时。');
L('future',2,'将来表达','Future forms & the big picture','先学会常用表达，再看完整的时间地图。','英语表达将来有多种方式：will 常用于预测、当下决定或意愿；be going to 常用于先前打算或根据迹象预测。教学中常用“时间 × 状态”整理十二种形式；这些形式不都同样常见，先掌握最常用的几种。严格说，英语没有独立的将来时动词词形。','will + 原形 / be going to + 原形',[
 ['I will help you.','我来帮你。','可用于当下作出的决定或承诺。'],['I am going to study tonight.','我打算今晚学习。','表达已有的计划。'],['Look at those clouds. It is going to rain.','看那些云，要下雨了。','根据眼前迹象作出预测。']
],'未来时间状语从句中，常用一般现在时表达将来：I will call you when I arrive。','I will call you when I ___.',['will arrive','arrive','arriving'],1,'when 引导的未来时间状语从句，常用一般现在时 arrive。');
L('questions',3,'否定句与疑问句','Negatives & questions','先找 be、情态动词或助动词。','有 be 或情态动词时，否定常在它后面加 not，一般疑问常把它移到主语前。一般现在、过去时的实义动词句，通常借助 do / does / did。特殊疑问句常把 what、where、why 等放在一般疑问结构前。','Do you like…? / Are you…? / Where do you…?',[
 ['She is not tired. / Is she tired?','她不累。/ 她累吗？','使用已有的 is。'],['I do not drink coffee. / Do you drink coffee?','我不喝咖啡。/ 你喝咖啡吗？','drink 借助 do 构成否定和疑问。'],['Where does he work? / Who called you?','他在哪里工作？/ 谁给你打了电话？','疑问词本身作主语时，如 Who called，不必再加 did。']
],'注意间接问句用陈述语序：Do you know where he lives?，不是 where does he live。','她喜欢茶吗？___ she like tea?',['Is','Does','Do'],1,'like 是实义动词，主语 she 为第三人称单数，用 Does。');
L('modals',3,'情态动词','Modal verbs','为动作加上“能、应该、可能”。','can、could、may、might、must、should、will 等情态动词后接动词原形，不因第三人称单数加 -s。它们可以表达能力、许可、建议、义务和推测。相同词在不同语境中可能表达不同意思。','can / should / must / might + 动词原形',[
 ['I can speak a little English.','我会说一点英语。','can 表示能力。'],['You should take a break.','你应该休息一下。','should 提建议。'],['It might rain tonight.','今晚可能会下雨。','might 表达不确定的可能性。']
],'must not 表示“不准”；do not have to 表示“不必”，不是一个意思。','She can ___ very well.',['swims','to swim','swim'],2,'can 后接原形 swim，不加 s，也不加 to。');
L('passive',3,'被动语态','The passive voice','把注意力放在“受到动作的事物”上。','被动结构通常为 be + 过去分词。be 承担时态变化；by 短语可以补充动作执行者，但不一定要出现。只有能在相应结构里带宾语的动词，才通常能形成这种被动。','动作承受者 + be + 过去分词 (+ by 执行者)',[
 ['The app was built by our team.','这个应用由我们团队开发。','把 app 放在句子中心。'],['English is spoken in many countries.','许多国家使用英语。','不强调具体是谁说。'],['The bug has been fixed.','这个 bug 已修复。','现在完成时被动：has been + fixed。']
],'过去分词不等于过去时。The door is closed. 中的 closed 还可能描述状态，具体要结合语境。','文件昨天被删除了。The file ___ yesterday.',['deleted','was deleted','is deleting'],1,'文件是被删除的，且事情发生在昨天，用 was deleted。');
L('comparison',3,'比较级与最高级','Comparatives & superlatives','表达“更……”和“一组里最……”。','短形容词常加 -er / -est；较长形容词常用 more / most。两者比较常用 than；最高级常搭配 the 和比较范围。good → better → best 等是不规则变化。副词也可以有比较形式。','faster than / more useful than / the best',[
 ['This laptop is faster than mine.','这台笔记本电脑比我的快。','faster 表示更快。'],['This explanation is more useful.','这个解释更有用。','useful 通常用 more 构成比较级。'],['It is the best option for us.','它是对我们最好的选择。','best 是 good 的最高级。']
],'不要叠加比较标记：more easier 不正确，用 easier。也可用 as…as… 表达“和……一样”。','This task is ___ than that one.',['easy','easier','easiest'],1,'easy 变 y 为 i，再加 -er，成为 easier。');
L('there',3,'there be 与祈使句','There is / are & imperatives','描述“有”，或者请别人做一件事。','there is / are 常介绍某处存在某物，和 have 表示拥有不同。祈使句常省略主语 you，以动词原形开始；否定常用 do not / don’t。please 能让语气更礼貌，但语境和语调同样重要。','There is a… / There are… / Please + 原形',[
 ['There is a cat under the desk.','桌子下面有一只猫。','说明某处存在什么。'],['I have a cat.','我养了一只猫。','have 表示拥有或关系。'],['Please open the window. / Don’t worry.','请打开窗户。/ 别担心。','祈使句直接以 open 或 don’t 开始。']
],'不能用 There have a cat. 来表示“有一只猫”。主语是具体的人时，才可能用 have 表示拥有。','___ two books on the table.',['There is','There are','There have'],1,'two books 是复数，用 There are。');
L('conjunctions',4,'短语与分句','Phrases, coordination & clauses','句子长起来，通常是在补信息或连接想法。','短语是一组发挥整体作用的词，如 in the room。典型从句包含主语和谓语。独立分句可以单独成句；从属分句需要依附其他部分。and、but、or 常连接并列内容；because、when 等常引出从属部分。','一个想法 + and / but / because… + 另一个想法',[
 ['I like tea, but she likes coffee.','我喜欢茶，但她喜欢咖啡。','but 连接两个对照的分句。'],['I stayed home because it was raining.','因为下雨，我待在家里。','because 引导原因状语从句。'],['The book on the desk is mine.','桌上的书是我的。','on the desk 是介词短语，补充说明 book。']
],'because 和 so 通常不重复连接同一组主从关系：Because it rained, we stayed home。','哪一项是典型的完整分句？',['in the room','because of the rain','she opened the door'],2,'she 是主语，opened 是谓语动词，构成完整分句。');
L('relative',4,'定语从句','Relative clauses','用一句小句子说明“哪一个人或东西”。','定语从句修饰名词或代词。who 常指人，which 常指物，that 可在许多限定性定语从句中指人或物。关系词会在从句里承担角色。先找到被修饰的名词，再看后面补了什么信息。','名词 + who / which / that + 补充说明',[
 ['The person who called you is my friend.','给你打电话的那个人是我的朋友。','who called you 修饰 person，who 在从句中作主语。'],['This is the app that I built.','这就是我开发的应用。','that I built 修饰 app，that 在从句中作宾语，可省略。'],['My cat, which is very shy, hides under the bed.','我的猫很胆小，总躲在床下。','逗号隔开的非限定性从句补充说明，不能用 that 替换这里的 which。']
],'关系词已经充当宾语时，不要重复：the app that I built 正确，that I built it 多了 it。','The girl ___ lives next door is a student.',['who','what','where'],0,'修饰人 girl，且关系词在从句中作主语，使用 who。');
L('noun-clauses',4,'名词性从句','Noun clauses','把一个想法放进主语、宾语或表语的位置。','当一个从句整体像名词一样作句子成分时，可用名词性从句来理解。入门先学宾语从句：I know 后面可以接一个完整想法。常见引导词有 that、whether、if 和 what、where 等疑问词。一般使用陈述语序。','I know + that / what / where… + 陈述语序',[
 ['I think that this is useful.','我认为这很有用。','that 引出 think 的内容，口语中常可省略。'],['I do not know where he lives.','我不知道他住在哪里。','从句用 he lives，不用 does he live。'],['What you said makes sense.','你说的话有道理。','What you said 整体作主语。']
],'what 可以兼有“……的事物”这个含义；that 通常只起连接作用，不能在所有位置互换。','你知道她在哪里吗？Do you know ___?',['where is she','where she is','where she be'],1,'嵌入的问句通常使用陈述语序 where she is。');
L('adverbial',4,'状语从句','Adverbial clauses','补充“什么时候、为什么、虽然怎样”。','状语从句说明时间、原因、条件、让步、目的或结果。常见连接词包括 when、while、because、if、although、so that。看见连接词，先判断两件事之间的关系。','when 时间 · because 原因 · although 让步',[
 ['I listen to music while I cook.','我做饭时听音乐。','while 引导同时发生的背景。'],['Although it was late, I kept reading.','虽然很晚了，我还是继续读。','although 表达让步。'],['I speak slowly so that you can understand me.','我说得慢一点，以便你能听懂。','so that 在这里说明目的。']
],'although 和 but 通常不在同一主从结构里重复使用。Although it was cold, we went out. 就够了。','虽然很累，我还是完成了任务。___ I was tired, I finished the task.',['Because','Although','If'],1,'“虽然累，仍完成”表示让步，用 Although。');
L('conditionals',4,'条件句','Conditionals','区分真实可能和假设想象。','真实条件可用 if + 一般现在时，主句用 will 等表达未来结果。一般规律常在两边都用一般现在时。假设现在不太可能或与事实不同的情况，常用 if + 过去式，主句 would + 原形；假设过去则常用 had done / would have done。','If + 现在时, … will… / If + 过去式, … would…',[
 ['If it rains tomorrow, I will stay home.','如果明天下雨，我就待在家。','真实的未来可能。'],['If I had more time, I would learn Japanese.','如果我有更多时间，我就会学日语。','对现在情况的假设，had 不是单纯在讲过去。'],['If I had left earlier, I would have caught the train.','如果我早点出发，就赶上火车了。','与过去事实相反的假设。']
],'if 从句通常不用 will 表示普通未来条件，但 will 表示意愿等特殊用法时可以出现；先掌握常见模型。','If I have time tomorrow, I ___ you.',['helped','will help','would have helped'],1,'真实的未来可能：if 从句用现在时，主句用 will help。');
L('infinitive',5,'不定式与动名词','To-infinitives & -ing forms','动作也可以当成“事情”来谈。','to + 动词原形可以作宾语、目的等；-ing 形式也能充当主语或宾语。不同动词的后续搭配不同，例如 want to do、enjoy doing。这里的形式不独立承担完整句子的时态变化。','want to do / enjoy doing / doing 作主语',[
 ['I want to learn English.','我想学英语。','want 后常接 to learn。'],['I enjoy playing games.','我喜欢玩游戏。','enjoy 后接 playing，不接 to play。'],['Reading helps me relax. / I came here to help.','阅读帮助我放松。/ 我来这里帮忙。','Reading 作主语；to help 表示目的。']
],'有些动词换形式会换意思：stop doing 是停止正在做的事；stop to do 是停下原来的事去做另一件事。','I enjoy ___ music.',['listen','to listen to','listening to'],2,'enjoy 后用 -ing，且“听音乐”搭配 listen to。');
L('participles',5,'分词与句子缩短','Participles & reduced structures','用 doing、done 补充描述或背景。','现在分词常表达主动或进行；过去分词常表达被动或完成，但要结合具体动词和语境判断。它们可以修饰名词，也可构成补充背景的分词结构。先确保逻辑主语对应，避免“动作不知道是谁做的”。','a sleeping cat / a broken window',[
 ['The sleeping cat is mine.','那只正在睡觉的猫是我的。','sleeping 修饰 cat。'],['The app developed by our team is free.','我们团队开发的应用是免费的。','developed by our team 修饰 app，含被动关系。'],['Walking home, I saw a dog.','步行回家时，我看见一只狗。','Walking 的逻辑主语是主句的 I。']
],'感受类形容词要区分：I am bored. 是我感到无聊；The film is boring. 是电影令人无聊。','This film is ___. I feel ___.',['bored / boring','boring / bored','boring / boring'],1,'电影令人无聊用 boring；人的感受用 bored。');
L('reported',5,'直接引语与间接引语','Reported speech','转述别人说过的话。','直接引语保留原话；间接引语将原话嵌入你的句子。人称、时间和地点可能随转述视角变化。主句为过去时时，从句时态常往过去移动；仍成立的事实不一定必须回移。','She said, “I am tired.” → She said she was tired.',[
 ['He said, “I am busy.” / He said he was busy.','他说：“我很忙。”/ 他说他很忙。','从原说话者的 I 变成转述中的 he。'],['She asked where I lived.','她问我住在哪里。','转述疑问用陈述语序。'],['He told me to wait.','他让我等一下。','转述指令可用 tell someone to do。']
],'say 和 tell 搭配不同：say something / say to someone；tell someone something。不要说 He said me…。','她问我住在哪里。She asked me where I ___.',['was live','lived','living'],1,'转述问题使用陈述语序，过去转述语境中可用 lived。');
L('subjunctive',5,'愿望与虚拟表达','Wishes & hypothetical meaning','语法里的“过去”，也能表达与现实的距离。','wish 后常用过去式表示对现在的遗憾，用过去完成式表示对过去的遗憾。正式的建议、要求等从句中，可见 should + 原形或直接用原形。先认出这些含义，不必一开始记住全部术语。','I wish + 过去式 / I wish + had done',[
 ['I wish I had more time.','真希望我有更多时间。','表达现在时间不够的遗憾。'],['I wish I had studied harder.','真希望当时更努力学习了。','表达对过去的遗憾。'],['I suggest that he be more careful.','我建议他更细心一些。','正式用法中，建议从句可用原形 be。']
],'I wish I knew. 常指“我现在真希望自己知道”，不是单纯说过去知道。if 假设句可回到上一章一起理解。','I wish I ___ the answer now.',['know','knew','will know'],1,'对现在事实的遗憾常用过去式 knew 表示与现实的距离。');
L('emphasis',5,'强调、倒装与省略','Emphasis, inversion & ellipsis','认识常规语序之外的表达。','强调句 It is / was… that… 可以突出某部分。否定或限制性表达放在句首时，正式语体常出现助动词倒装。省略则让上下文已知的信息不必重复。这些是进阶阅读线索，不需要急着在日常交流中堆叠使用。','It was… that… / Never have I… / I can, too.',[
 ['It was Tom who fixed the bug.','修好 bug 的是 Tom。','强调动作执行者 Tom。'],['Never have I seen such a beautiful sky.','我从未见过这么美的天空。','Never 前置，引起 have I 的倒装。'],['She can swim, and I can, too.','她会游泳，我也会。','第二个 can 后省略了 swim。']
],'倒装不是随意把词倒过来。先熟悉普通语序和助动词，再学习触发倒装的具体结构。','Never ___ such a thing.',['I have seen','have I seen','I seen have'],1,'否定副词 Never 前置时，使用助动词 have + 主语 I 的部分倒装。');
const tenseGrid = [
 ['现在','I work.','I am working.','I have worked.','I have been working.'],
 ['过去','I worked.','I was working.','I had worked.','I had been working.'],
 ['将来表达','I will work.','I will be working.','I will have worked.','I will have been working.']
];

// Concise default view; full explanations stay available on demand.
const quickNotes = {
 transitive:[['及物 vt.：直接接宾语，如 enjoy music。','不及物 vi.：不直接接宾语，如 sleep。','同一动词可两用：I read books. / I read every day.'],'reach the station ✓；arrive at the station ✓'],
 'double-objects':[['人 + 物：give me a book。','换序常见两类：give a book to me；buy a book for me。','先记搭配，不是所有动词都能这样换。'],'explain the rule to me ✓；explain me the rule ✗'],
 sentence:[['主语：谁或什么。','谓语：动作或状态。','宾语：动作的对象；表语：主语的身份或状态。'],'词性是词的类别，成分是词在句中的作用。'],
 patterns:[['主谓 / 主系表 / 主谓宾。','主谓双宾：给某人某物。','主谓宾补：补充说明宾语。'],'动词决定搭配，不是每句都有宾语。'],
 be:[['I 用 am；he / she / it 用 is。','you / we / they 用 are。','过去用 was / were。'],'I am happy. ✓　I happy. ✗'],
 agreement:[['一般现在时：he / she / it 后的实义动词通常加 s。','do / does / did、情态动词后用动词原形。'],'She likes tea.　She can swim.'],
 nouns:[['可数：a book / two books。','不可数：some advice / some information。'],'不说 an advice 或 informations。'],
 articles:[['a / an：某一个；the：特定的那个。','a / an 按读音选：a university / an hour。','泛指复数、不可数名词时常不加冠词。'],'the 不一定要第二次提到才能用。'],
 quantifiers:[['many + 可数复数；much + 不可数。','a lot of 两类都能用。','a few / a little：有一些；few / little：几乎没有。'],'some 常用于肯定，any 常用于疑问、否定。'],
 pronouns:[['主语：I / he / she / we / they。','宾语：me / him / her / us / them。','my 后接名词；mine 独立用。'],'my book ✓　mine book ✗'],
 adjectives:[['形容词描述事物：a careful driver。','副词描述动作：drive carefully。'],'系动词后常用形容词：sounds good。'],
 prepositions:[['时间：at 8:00 / on Monday / in October。','地点：in the room / on the desk。','介词后接名词、代词或 -ing。'],'搭配一起记：interested in / listen to。'],
 present:[['用途：习惯、事实、稳定状态。','he / she / it：实义动词通常加 s。'],'此刻正在做 → am / is / are + doing。'],
 continuous:[['现在正在做：am / is / are + doing。','过去某时正在做：was / were + doing。'],'不能漏 be：I am reading. ✓'],
 past:[['用于过去发生的事。','规则动词通常加 ed；不规则变化单独记。','did 后用原形。'],'Did you go? ✓　Did you went? ✗'],
 perfect:[['过去发生，与现在有关：经历、结果、持续。','for + 时长；since + 起点。'],'有 yesterday 等明确过去时间，通常用一般过去时。'],
 future:[['will：预测、当下决定、意愿。','be going to：已有打算、根据迹象预测。'],'I will call you when I arrive.（不用 will arrive）'],
 questions:[['有 be / 情态动词：加 not；提问时移到主语前。','实义动词：借助 do / does / did，后接原形。'],'Does she like tea? ✓　Is she like tea? ✗'],
 modals:[['can：能；should：应该；might：可能。','情态动词后接动词原形。'],'must not：不准；do not have to：不必。'],
 passive:[['突出动作的承受者。','be 随时态变化；by 可引出执行者。'],'The file was deleted. 文件被删除了。'],
 comparison:[['比较：-er / more + than。','最高级：the + -est / most。','good → better → best。'],'easier ✓　more easier ✗'],
 there:[['某处有：there is + 单数；there are + 复数。','让别人做：动词原形；别做：Don’t + 原形。'],'There is a cat. ✓　There have a cat. ✗'],
 conjunctions:[['短语：一组词，如 in the room。','典型分句：有主语和谓语。','and 并列；but 转折；because 原因。'],'because 和 so 通常不重复连同一组分句。'],
 relative:[['修饰名词，说明“哪一个”。','who 常指人；which 常指物。','that 常用于限定性从句，可指人或物。'],'the app that I built ✓　不要再加 it。'],
 'noun-clauses':[['整个从句作主语、宾语或表语。','从句通常用陈述语序。'],'I know where he lives. ✓'],
 adverbial:[['when / while：时间；because：原因。','although：虽然；so that：目的或结果。'],'although 和 but 通常不重复连接。'],
 conditionals:[['真实可能：If + 现在时，主句 will + 原形。','假设现在：If + 过去式，主句 would + 原形。','假设过去：If + had done，主句 would have done。'],'普通未来条件中，if 从句通常不用 will。'],
 infinitive:[['want to do；enjoy doing。','-ing 可作主语；to do 可表示目的。'],'stop doing：停止做；stop to do：停下去做另一件事。'],
 participles:[['doing 常表示主动或进行。','done 常表示被动或完成。','分词结构的逻辑主语要对应。'],'boring：令人无聊；bored：感到无聊。'],
 reported:[['转述时，人称和时间随视角调整。','过去转述，时态常回移；事实可不回移。','转述问题用陈述语序。'],'tell someone；say something / say to someone。'],
 subjunctive:[['wish + 过去式：对现在的遗憾。','wish + had done：对过去的遗憾。'],'I wish I knew. 意为“真希望我现在知道”。'],
 emphasis:[['It is / was … that …：强调。','Never 等否定词前置，常引起助动词倒装。','省略上下文已知的内容。'],'Never have I seen… ✓']
};
for (const lesson of lessons) {
 const [rules,shortTip]=quickNotes[lesson.id];
 lesson.rules=rules;lesson.shortTip=shortTip;
}

const lessonExtras = {
 transitive:{
  reference:{title:'常见搭配',headers:['用法','例子'],rows:[['及物','enjoy music · 喜欢音乐\nreach the station · 到达车站'],['不及物','sleep · 睡觉\narrive at the station · 到达车站'],['两种都可','open the door · 打开门\nThe door opened. · 门开了']]},
  related:['patterns','double-objects'],
  source:['British Council · 动词与句型','https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/clause-structure-verb-patterns']
 },
 'double-objects':{
  reference:{title:'常用双宾搭配',headers:['动词','人 + 物'],rows:[['give 给','give me a book'],['send 寄、发','send me a message'],['show 展示','show me a photo'],['tell 告诉','tell me a story'],['teach 教','teach me English'],['lend 借出','lend me a pen'],['offer 提供','offer me a job'],['pass 递','pass me the salt'],['hand 递交','hand me the keys'],['buy 买','buy me a coffee'],['make 制作','make me a sandwich'],['cook 做饭','cook me dinner']]},
  related:['patterns','transitive'],
  source:['Cambridge · 宾语','https://dictionary.cambridge.org/us/grammar/british-grammar/objects']
 },
 patterns:{related:['transitive','double-objects']}
};
for (const lesson of lessons) Object.assign(lesson,lessonExtras[lesson.id]||{});

const doubleObjects = lessons.find(l => l.id === 'double-objects');
doubleObjects.reference.headers.push('换序用');
doubleObjects.reference.rows.forEach((row, index) => row.push(index < 9 ? 'to' : 'for'));

// Section names describe the actual topic; examples precede edge cases.
const lessonHeadings = {
 sentence:'主语、谓语与其他成分',patterns:'五种基本句型',transitive:'动词与宾语的关系',
 'double-objects':'直接宾语与间接宾语',be:'be 的作用',agreement:'主语与动词形式',
 nouns:'名词的数量形式',articles:'泛指与特指',quantifiers:'数量词与名词搭配',pronouns:'代词的形式与位置',
 adjectives:'修饰名词与修饰动作',prepositions:'时间、地点与其他关系',present:'习惯、事实与稳定状态',
 continuous:'进行中的动作',past:'过去的动作与状态',perfect:'过去与现在的联系',future:'将来的计划、决定与预测',
 questions:'否定与疑问的基本结构',modals:'情态动词的基本结构',passive:'动作执行者与承受者',
 comparison:'比较的形式与范围',there:'存在句与祈使句',conjunctions:'短语、分句与连接关系',
 relative:'修饰名词的从句','noun-clauses':'充当句子成分的从句',adverbial:'补充时间、原因与条件',
 conditionals:'条件与结果',infinitive:'非谓语动词',participles:'分词的形式与作用',reported:'转述中的视角变化',
 subjunctive:'愿望、建议与假设',emphasis:'信息的突出与省略'
};
for (const lesson of lessons) lesson.introHeading=lessonHeadings[lesson.id];
const infinitiveLesson=lessons.find(l=>l.id==='infinitive');
Object.assign(infinitiveLesson,{
 explain:'句子需要谓语动词来说明动作或状态。一个句子里出现其他动作时，它们还可以用不定式、动名词等形式，充当主语、宾语或表示目的。这些形式叫非谓语，不能直接代替句子的谓语。例如 I want to learn English 中，want 是谓语，to learn English 表示“想做的事”。',
 pattern:'不定式：to + 动词原形　｜　动名词：动词的 -ing 形式',
 examples:[
  ['I want to learn English.','我想学英语。','want 是谓语；to learn English 作宾语，说明“想做什么”。'],
  ['I came here to help you.','我来这里是为了帮你。','came 是谓语；to help you 表示来这里的目的。'],
  ['Swimming is fun.','游泳很有趣。','Swimming 是动名词，表示“游泳这件事”，在句中作主语。谓语是 is。'],
  ['I enjoy reading.','我喜欢阅读。','enjoy 是谓语；reading 是动名词，作 enjoy 的宾语。'],
  ['I look forward to hearing from you.','我期待收到你的消息。','look forward to 中的 to 是介词，后面接 hearing，不是不定式 to hear。']
 ],
 sections:[
  {title:'不定式',paragraph:'本节先学带 to 的不定式，如 to learn、to work。它可以表示某人想做、计划做的事情，也可以说明一个动作的目的。情态动词后等位置使用不带 to 的原形结构，另有自己的搭配规则。',examples:[0,1]},
  {title:'动名词',paragraph:'动名词把一个动作当作“一件事”来表达，如 reading 表示“阅读这件事”。它常作主语、宾语，或放在介词后。-ing 也出现在进行时中，但 I am reading 的 reading 与 Reading is useful 的 Reading 在句中作用不同。',examples:[2,3]}
 ],
 mainExampleCount:4,
 reference:{title:'常见动词搭配',headers:['后续形式','常用搭配'],rows:[
  ['to + 原形','want to do · 想做\nplan to do · 计划做\ndecide to do · 决定做\nhope to do · 希望做'],
  ['-ing','enjoy doing · 喜欢做\nfinish doing · 做完\navoid doing · 避免做\nmind doing · 介意做'],
  ['两种都可','like / love 等可接两种形式，具体侧重点看语境；stop / remember 等换形式会改变含义。']
 ]},
 shortTip:'动词后面接哪种形式，要按搭配选择：want to do；enjoy doing。',
 tip:'to 并不总是不定式的标记。look forward to 中的 to 是介词，所以后接 -ing。先辨认整个搭配，再判断后面用什么形式。'
});

// Different topics need different explanations, not identical page outlines.
Object.assign(lessons.find(l=>l.id==='be'),{
 explain:'be 是连接主语和身份、状态或位置的动词。中文可以说“我很累”，英文需要 I am tired，中间的 am 不能省略。be 有多种形式，要根据主语和时间选择。',
 pattern:'主语 + be + 身份、状态或位置',
 examples:[
  ['I am a developer.','我是一名开发者。','a developer 说明身份。'],
  ['The cat is happy.','猫很开心。','happy 说明状态，英文需要 is 连接。'],
  ['My keys are on the desk.','我的钥匙在桌上。','on the desk 说明位置，keys 是复数，配 are。'],
  ['I was tired yesterday.','我昨天很累。','yesterday 指过去，I 后的 am 改成 was。'],
  ['She is not tired.','她不累。','否定在 is 后加 not；is not 可以缩写为 isn’t。'],
  ['Is she tired?','她累吗？','把 is 移到主语 she 前，不加 do。']
 ],
 sections:[
  {title:'现在与过去的形式',paragraph:'现在说 am / is / are，谈过去状态常用 was / were。',table:{headers:['主语','现在','过去'],rows:[['I','am','was'],['he / she / it、单数名词','is','was'],['you / we / they、复数名词','are','were']]},examples:[]},
  {title:'身份、状态和位置',paragraph:'be 后面的内容说明主语是什么、怎么样或在哪里。',examples:[0,1,2]},
  {title:'过去的状态',paragraph:'句子骨架相同，时间改变时，be 的形式也要变化。',examples:[3]},
  {title:'否定句与一般疑问句',paragraph:'否定在 be 后加 not；一般疑问把 be 提到主语前。',examples:[4,5]}
 ],
 mainExampleCount:6,
 shortTip:'I am happy. 正确；I happy. 缺少谓语。I work. 已有谓语，不再加 am。',
 tip:'be 还可以作助动词：am reading 构成进行结构，was built 构成被动结构。它们与本节表示身份、状态的用法有关，但结构不同，可分别学习。',
 related:['continuous','passive']
});
Object.assign(lessons.find(l=>l.id==='past'),{
 explain:'一般过去时把动作或状态放在过去。它常与 yesterday、last week 等时间表达一起用；时间已在上下文中明确时，也不必每句都写时间词。先掌握动词的过去式，再学习否定与提问。',
 examples:[
  ['I fixed a bug yesterday.','我昨天修复了一个 bug。','fix 是规则动词，过去式加 -ed。'],
  ['We went to a concert last week.','我们上周听了一场音乐会。','go 是不规则动词，过去式是 went。'],
  ['I did not work yesterday.','我昨天没有工作。','否定用 did not + work；did not 可缩写为 didn’t。'],
  ['Did you finish the task?','你完成任务了吗？','did 已经表示过去，finish 保持原形。']
 ],
 sections:[
  {title:'动词的过去式',paragraph:'规则动词通常加 -ed，部分单词需要改变拼写。不规则动词则要结合例句记住。',table:{headers:['变化','例子'],rows:[['通常加 -ed','work → worked'],['以辅音字母 + y 结尾，常变 y 为 i 再加 -ed','study → studied'],['部分词双写末尾辅音字母再加 -ed','stop → stopped'],['不规则变化','go → went；write → wrote']]},examples:[0,1]},
  {title:'did 后接动词原形',paragraph:'一般过去时的实义动词否定句和一般疑问句通常借助 did。过去的标记交给 did，后面的主要动词恢复原形。',examples:[2,3]}
 ],mainExampleCount:4,
 tip:'be 的过去式是 was / were；其否定和疑问直接用 be，不用 did：She wasn’t tired. / Was she tired?'
});
Object.assign(lessons.find(l=>l.id==='questions'),{
 explain:'提问和否定的结构，取决于原句中的动词。先看有没有 be、情态动词或其他助动词；如果没有，一般现在、过去时的实义动词句通常需要 do / does / did。',
 examples:[
  ['She is not tired. / Is she tired?','她不累。／她累吗？','原句 She is tired 中已有 is，直接用它构成否定和疑问。'],
  ['She does not like tea. / Does she like tea?','她不喜欢茶。／她喜欢茶吗？','like 是实义动词，一般现在时借助 does，后面用原形 like。'],
  ['He cannot swim. / Can he swim?','他不会游泳。／他会游泳吗？','原句已有情态动词 can，不再加 do。cannot 常缩写为 can’t。'],
  ['Who called you? / Where does he work?','谁给你打了电话？／他在哪里工作？','Who 自己作主语；Where 不是主语，后面的问句仍借助 does。']
 ],
 sections:[
  {title:'be 动词句',paragraph:'否定在 be 后加 not；一般疑问把 be 移到主语前。',examples:[0]},
  {title:'实义动词句',paragraph:'一般现在时用 do / does，一般过去时用 did。否定加 not；提问将它放在主语前，主要动词用原形。',examples:[1]},
  {title:'已有情态动词的句子',paragraph:'否定在情态动词后加 not；一般疑问将它移到主语前。完成时中的 have / has 等助动词也不再额外借助 do。',examples:[2]},
  {title:'特殊疑问句',paragraph:'用 who、what、where、why 等询问信息。疑问词本身作主语时，结构与询问其他成分不同。',examples:[3]}
 ],mainExampleCount:4,comparisonsToShow:[1]
});
lessons.find(l=>l.id==='modals').omitExamples=true;
