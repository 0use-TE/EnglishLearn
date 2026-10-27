// Curated learning entries. Definitions are intentionally scoped to the example.
// Meanings and examples are written for this handbook, not copied dictionary entries.
const vocabularyCategories={software:'软件系统',documents:'文档与开发',communication:'书面沟通',daily:'日常生活'};
const vocabularyBank=[];
function V(category,type,rows,tier=(category==='software'||category==='documents'?'practical':'core')){
 for(const line of rows.trim().split('\n')){
  const [en,meaning,example,translation,note='']=line.split('|').map(s=>s.trim());
  const id='bank:'+en.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-$/,'');
  vocabularyBank.push({id,category,type,tier,en,meaning,example,translation,note});
 }
}
V('software','word',`
file|n. 文件|Save the file before closing the window.|关闭窗口前保存文件。
folder|n. 文件夹|Move the photo to a different folder.|将照片移到另一个文件夹。
directory|n. 目录|The directory contains three configuration files.|该目录包含三个配置文件。|计算机中常指文件目录；日常也可指名录。
path|n. 路径|Copy the full path to the file.|复制文件的完整路径。
device|n. 设备|This device is not connected to the network.|这台设备未连接网络。
application|n. 应用程序|Restart the application to apply the change.|重启应用以应用更改。|这里是应用程序；也可指申请，需看上下文。
software|n. 软件|The software works without an account.|这款软件无需账户即可运行。|通常不可数，不说 a software；可说 a piece of software。
hardware|n. 硬件|The update does not require new hardware.|此更新不需要新硬件。|通常不可数。
network|n. 网络|The network is temporarily unavailable.|网络暂时不可用。
connection|n. 连接|Check your internet connection before trying again.|重试前检查网络连接。
server|n. 服务器|The server did not respond in time.|服务器未及时响应。
client|n. 客户端|The client sends a request to the server.|客户端向服务器发送请求。|日常也可指客户；这里指客户端程序。
browser|n. 浏览器|Open the link in your browser.|在浏览器中打开链接。
extension|n. 扩展；插件|Disable the extension and reload the page.|禁用扩展并重新加载页面。
account|n. 账户|Sign in with your work account.|用工作账户登录。
password|n. 密码|Do not include your password in the report.|不要在报告中包含密码。
permission|n. 权限；许可|You need permission to edit this folder.|你需要权限才能修改这个文件夹。
access|n. 访问权限；v. 访问|You need access to the shared folder.|你需要共享文件夹的访问权限。|名词常用 access to；动词直接接对象：access the folder。
update|n. 更新；v. 更新|Install the update after saving your work.|保存工作后安装更新。
install|v. 安装|Install the package that matches your system.|安装与你系统匹配的软件包。
remove|v. 移除|Remove the old shortcut from the desktop.|移除桌面上的旧快捷方式。
enable|v. 启用|Enable notifications for important messages.|为重要消息启用通知。
disable|v. 禁用|Disable automatic renewal in your account settings.|在账户设置中禁用自动续费。
default|n. 默认值；adj. 默认的|The default language is English.|默认语言是英语。
available|adj. 可用的；可获得的|The file is available on this device.|此设备上可以访问该文件。|也可指人有空；具体含义看主语与语境。
`);
V('documents','word',`
require|v. 需要；要求|This operation requires administrator permission.|此操作需要管理员权限。|require something；require someone to do something。
allow|v. 允许|This setting allows users to edit comments.|这个设置允许用户编辑评论。|allow someone to do something；不要漏掉 to。
support|v. 支持；n. 支持|The tool does not support this file format.|这个工具不支持此文件格式。
include|v. 包含|Please include the version number in your report.|请在报告中包含版本号。
exclude|v. 排除；不包括|The export will exclude private notes.|导出将不包含私人笔记。
provide|v. 提供|Please provide a small example of the problem.|请提供一个能展示问题的小例子。
return|v. 返回|The method will return an empty list.|该方法会返回空列表。|这里是程序返回结果；日常也可指归还或返回某地。
value|n. 值|Enter a value between one and ten.|输入一到十之间的值。
result|n. 结果|Check the result before continuing.|继续之前检查结果。
input|n. 输入；输入内容|Empty input is not valid in this field.|这个字段不接受空输入。
output|n. 输出；输出内容|Save the output in a text file.|将输出保存到文本文件。
parameter|n. 参数；形参|The second parameter controls the page size.|第二个参数控制每页大小。|函数定义中常称形参；文档也常泛指可配置参数。
argument|n. 实参；争论；论点|Pass the file name as the first argument.|把文件名作为第一个实参传入。|此例是调用时传入的值；日常 have an argument 可表示发生争论。
method|n. 方法|This method searches the current collection.|这个方法搜索当前集合。
function|n. 函数；功能|The function returns a list of matching names.|这个函数返回匹配名称的列表。
configuration|n. 配置|Check the configuration before starting the service.|启动服务前检查配置。
option|n. 选项|Choose an option from the list.|从列表中选择一个选项。
feature|n. 功能；特性|The new feature is available for testing.|新功能已可供测试。
version|n. 版本|Include the exact version number.|请包含准确版本号。
error|n. 错误|Copy the exact error message.|复制准确的错误消息。
warning|n. 警告|Read the warning before replacing the file.|替换文件前阅读警告。
valid|adj. 有效的；符合要求的|The address must be valid before you continue.|继续前地址必须有效。
invalid|adj. 无效的；不符合要求的|An empty identifier is invalid.|空标识符无效。
missing|adj. 缺少的；找不到的|The configuration file is missing.|配置文件缺失。
optional|adj. 可选的；非必需的|The description field is optional.|描述字段是可选的。
`);
V('communication','word',`
request|n. 请求；v. 请求|I sent a request for read access.|我发送了只读权限申请。
confirm|v. 确认|Could you confirm the new date?|你能确认新日期吗？
clarify|v. 澄清；说明清楚|Please clarify what you mean by real time.|请说明你说的实时具体是什么意思。
explain|v. 解释|Could you explain the change to the team?|你能向团队解释这个改动吗？|explain something to someone，不说 explain someone something。
suggest|v. 建议|I suggest testing the new form first.|我建议先测试新表单。|常用 suggest doing 或 suggest that…；不说 suggest someone to do。
recommend|v. 推荐；建议|I recommend keeping a separate backup.|我建议保留独立备份。|这里用 recommend doing。
propose|v. 提议|I propose a small trial before the full launch.|我提议在全面发布前进行小规模试用。
agree|v. 同意；意见一致|I agree with your main point.|我同意你的主要观点。|agree with 人或观点；agree on 共同商定的事项。
review|v. 审查；复习|Please review the draft before Friday.|请在周五前审查草稿。
approve|v. 批准；认可|The owner must approve the access request.|负责人必须批准权限申请。|approve a request 表示批准；approve of 表示赞同。
attach|v. 附上|Please attach a screenshot to your reply.|请在回复中附上截图。
reply|v. 回复；n. 回复|Please reply to this message by Thursday.|请在周四前回复这条消息。|reply to a message；直接说 reply me 不合适。
respond|v. 回应；响应|The support team will respond to your request.|支持团队会回应你的请求。
notify|v. 通知|Please notify the team of any change.|如有变化，请通知团队。|notify someone of something；也可用 notify someone that…。
schedule|n. 日程；v. 安排|We can schedule the review for Monday.|我们可以把审查安排在周一。
deadline|n. 截止时间|The deadline for comments is Wednesday.|提交意见的截止时间是周三。
progress|n. 进展|We made progress on the installation guide.|我们在安装指南上取得了进展。|通常不可数；用 make progress，不说 make a progress。
issue|n. 问题；议题|The issue affects new accounts only.|这个问题只影响新账户。
concern|n. 担忧；关注的问题|My main concern is the loss of revision history.|我主要担心修改历史会丢失。
evidence|n. 证据；依据|We need more evidence before making that claim.|作出那个断言前，我们需要更多证据。|通常不可数；一条证据可说 a piece of evidence。
assumption|n. 假设；未经确认的前提|This plan depends on one important assumption.|这个计划依赖一个重要假设。
estimate|n. 估计；v. 估算|The delivery date is an estimate, not a guarantee.|交付日期是估计，不是保证。
relevant|adj. 相关的|Include only the relevant parts of the log.|只包含日志中相关的部分。
expected|adj. 预期的|Describe the expected result separately.|单独描述预期结果。
actual|adj. 实际的|The actual result differs from the example.|实际结果与示例不同。
`);
V('daily','word',`
appointment|n. 预约|I would like to change my appointment.|我想更改预约。
reservation|n. 预订|Please confirm the reservation for two people.|请确认两人的预订。
cancellation|n. 取消|Keep the cancellation confirmation.|保留取消确认。
refund|n. 退款；v. 退款|I would prefer a refund rather than a replacement.|比起换货，我更希望退款。
replacement|n. 替换品；替代品|The replacement will arrive next week.|替换品将于下周到达。
receipt|n. 收据|Please keep the receipt until the refund arrives.|请保留收据，直到退款到账。
delivery|n. 配送；交付|The delivery may take one extra day.|配送可能额外需要一天。
address|n. 地址|Check the delivery address before confirming.|确认前检查配送地址。
amount|n. 数额；数量|The amount will be refunded to your original payment method.|这笔款项会原路退回。
total|n. 总数；adj. 总计的|The total includes delivery.|总额包含配送费。
charge|n. 费用；v. 收费|There is no extra charge for changing the date.|更改日期不额外收费。
subscription|n. 订阅|Your subscription ends next month.|你的订阅在下个月结束。
renew|v. 续订；续期|The service will renew your subscription automatically.|该服务会自动续订你的订阅。
expire|v. 到期；失效|The link will expire after thirty minutes.|链接将在三十分钟后失效。
delay|n. 延迟；v. 推迟|Please let me know if there is a delay.|如果有延迟，请告诉我。
urgent|adj. 紧急的|This is not urgent; tomorrow is fine.|这不紧急，明天就可以。
temporary|adj. 暂时的；临时的|This is a temporary solution.|这是临时解决方案。
permanent|adj. 永久的；长期不变的|The trial is not a permanent arrangement.|试用不是永久安排。
sufficient|adj. 足够的|A plain text copy is sufficient for this task.|一份纯文本副本足以完成此任务。
necessary|adj. 必要的|A new account is not necessary.|不必新建账户。
convenient|adj. 方便的|Is Monday afternoon convenient for you?|周一下午对你方便吗？
separate|adj. 单独的；v. 分开|Keep a separate copy of the original file.|单独保留一份原文件副本。
original|adj. 原始的；最初的|Your original booking remains active.|你的原预约仍然有效。
current|adj. 当前的|You can keep using the current version.|你可以继续使用当前版本。
previous|adj. 先前的|The previous link is no longer valid.|先前的链接不再有效。
`);
V('software','phrase',`
log in to|登录到……|Log in to your account before changing the settings.|更改设置前先登录账户。|log in 是动词；login 常作名词或定语。
sign out of|退出……的登录|Sign out of your account on shared devices.|在共用设备上退出你的账户。
connect to|连接到……|Connect to the network before uploading the file.|上传文件前连接网络。
disconnect from|断开与……的连接|Disconnect from the network to test offline editing.|断开网络以测试离线编辑。
have access to|有权限访问……|Only team members have access to this folder.|只有团队成员有权访问这个文件夹。|这里 to 是介词，后接对象；access 作动词时不加 to。
grant access to|授予对……的访问权限|The owner can grant access to the project.|负责人可以授予项目访问权限。|也可说 grant someone access to something。
be compatible with|与……兼容|This extension is compatible with the current version.|这个扩展与当前版本兼容。
be available to|可供……使用|The feature is available to all team members.|所有团队成员都可以使用这个功能。|to 后接可使用的人；available on a device 表示在哪个设备上可用。
be available on|在……上可用|The guide is available on the website.|指南可在网站上查看。|与 available to someone 区分。
be connected to|与……连接|The printer is connected to another computer.|打印机连接着另一台电脑。
be stored in|存储在……中|Your drafts are stored in this browser.|你的草稿保存在这个浏览器中。
be located in|位于……中|The configuration file is located in this directory.|配置文件位于这个目录。
be protected from|受到保护，免于……|The files are protected from accidental changes.|这些文件受到保护，避免意外修改。
be limited to|仅限于……|Read access is limited to this project.|读取权限仅限此项目。
be associated with|与……相关联|This address is associated with your account.|这个地址与你的账户关联。
be responsible for|负责……|The service is responsible for storing the records.|此服务负责存储记录。|介词 for 后可接名词或 doing。
by default|默认情况下|Notifications are disabled by default.|通知默认关闭。
in the background|在后台|The client checks for updates in the background.|客户端在后台检查更新。
on this device|在这台设备上|The latest file is available on this device.|此设备上已有最新文件。
out of date|过时的；不是最新的|The local copy is out of date.|本地副本不是最新的。|与 up to date 对照。
up to date|最新的|Check that the guide is up to date.|确认指南是最新的。|作定语常加连字符：an up-to-date guide。
take effect|生效|The change will take effect after a restart.|更改将在重启后生效。
run out of|用完……|The device may run out of storage space.|设备可能耗尽存储空间。
back up|备份|Back up important files before the update.|更新前备份重要文件。|动词两词 back up；名词通常为 backup。
turn off|关闭|Turn off automatic renewal before the next billing date.|在下次计费日前关闭自动续费。
`);
V('documents','phrase',`
depend on|取决于；依赖……|The result will depend on the input.|结果将取决于输入。
refer to|参阅；指的是……|Refer to the installation guide for details.|详情请参阅安装指南。|refer to a guide 表示参阅；What does it refer to? 可问指代什么。
apply to|适用于……|This rule does not apply to existing accounts.|这条规则不适用于现有账户。|规则 apply to 对象表示适用于；申请某物则用 apply for。
consist of|由……组成|The response will consist of three sections.|响应将由三部分组成。|一般不用 be consisted of。
result in|导致……|An invalid value may result in an error.|无效值可能导致错误。|result in 后接结果；result from 后接原因。
result from|由……引起|The error may result from a missing file.|这个错误可能由文件缺失引起。|不要与 result in 混淆。
prevent A from doing B|阻止 A 做 B|This setting prevents users from deleting files.|这个设置阻止用户删除文件。|A 是被阻止的对象；from 后用 doing，不用动词原形。
provide A with B|向 A 提供 B|The API provides callers with a list of matches.|这个 API 向调用方提供匹配列表。|A 是接收者，B 是提供的内容；也可 provide B for A。
replace A with B|用 B 替换 A|Replace the old address with the new one.|用新地址替换旧地址。|with 后是替换后的新内容。
convert A to B|将 A 转换成 B|Convert the response to plain text.|将响应转换成纯文本。
be based on|以……为依据|The estimate is based on the sample data.|这个估计基于示例数据。
be required for|是……所必需的|An account is required for cloud synchronisation.|云同步需要账户。
be suitable for|适合……|This format is suitable for short messages.|这种格式适合短消息。
be different from|与……不同|The actual result is different from the example.|实际结果与示例不同。|这里选常用的 different from；不同语境也可能见到 different to/than。
be similar to|与……相似|The new interface is similar to the previous one.|新界面与旧界面相似。
be consistent with|与……一致；与……相符|The result is consistent with the documented behaviour.|结果与文档描述的行为一致。
access to|对……的访问权限|You need access to the sample project.|你需要示例项目的访问权限。|名词 access 后常用 to；动词 access 直接接对象。
a solution to|……的解决方案|We need a solution to this problem.|我们需要这个问题的解决方案。
the reason for|……的原因|The log does not explain the reason for the failure.|日志没有解释失败原因。
in response to|作为对……的回应|The server returns a message in response to the request.|服务器返回消息以响应请求。
in terms of|就……而言|Compare the tools in terms of export quality.|从导出质量方面比较这些工具。
at least|至少|Wait at least ten seconds before trying again.|重试前至少等待十秒。
up to|最多；至多|A response contains up to fifty records.|一个响应最多包含五十条记录。|这是此例中的“最多”；也可表示直到某范围，需看语境。
as long as|只要……|You can edit the file as long as you have permission.|只要有权限，你就可以编辑文件。|这里引导条件；也可表示时间一样长，不能脱离语境理解。
in order to|为了……|Restart the app in order to apply the change.|重启应用以应用更改。|to 后用动词原形。
`);
V('communication','phrase',`
agree with|赞同……|I agree with your explanation.|我赞同你的解释。|常接人、观点或说法；agree on 侧重商定事项。
agree on|就……达成一致|We need to agree on a review date.|我们需要商定审查日期。
ask for|请求；索要……|Ask for clarification before starting the work.|开始工作前请求澄清。
reply to|回复……|Please reply to the original message.|请回复原消息。
respond to|回应……|We will respond to your request tomorrow.|我们明天会回应你的请求。
apologise to A for B|因 B 向 A 道歉|I apologise to the team for the delay.|我为延迟向团队道歉。|to 后是对象，for 后是原因或 doing；美式也拼作 apologize。
explain A to B|向 B 解释 A|Please explain the change to the support team.|请向支持团队解释改动。|不能直接照搬中文成 explain someone something。
inform A of B|将 B 告知 A|Please inform the owner of any change.|如有变化，请告知负责人。|也可用 inform someone that…。
remind A to do B|提醒 A 做 B|Please remind me to send the revised draft.|请提醒我发送修改稿。|这里是提醒做某事；remind someone of something 是使想起或提醒某事。
look forward to doing|期待做……|I look forward to hearing your thoughts.|期待听到你的想法。|这里 to 是介词，后接名词或 doing，不接动词原形。
be aware of|知道；意识到……|Please be aware of the remaining limitations.|请注意仍然存在的限制。
be interested in|对……感兴趣|We are interested in testing the new workflow.|我们有兴趣测试新流程。|in 后接名词或 doing。
be concerned about|担心……|I am concerned about the loss of old links.|我担心旧链接丢失。
be satisfied with|对……满意|The team is satisfied with the revised instructions.|团队对修改后的说明满意。
be familiar with|熟悉……|I am familiar with the current process.|我熟悉当前流程。|人 be familiar with 事物；事物 be familiar to 人 表示对某人来说熟悉。
approval for|对……的批准|We still need approval for the trial.|我们仍需要试用批准。
a request for|对……的请求|I sent a request for read access.|我发送了只读权限申请。
an update on|关于……的最新情况|Could you send an update on the migration?|你能提供迁移的最新情况吗？
by the end of|在……结束之前|Please send the draft by the end of Friday.|请在周五结束前发送草稿。|by 表示最迟时间，不是一直持续到；持续到常用 until。
in advance|提前|Thank you for checking the details in advance.|感谢你提前核对细节。
on behalf of|代表……|I am writing on behalf of the documentation team.|我代表文档团队写信。
with regard to|关于……|I have a question with regard to the new deadline.|关于新的截止时间，我有一个问题。
as discussed|如先前讨论的|As discussed, we will begin with a small trial.|如先前讨论的，我们将从小规模试用开始。|表示讨论过，不自动意味着所有人已正式批准。
for now|暂时；目前|For now, please keep the current setting.|暂时请保留当前设置。
at this stage|在这个阶段|We do not need a final design at this stage.|这个阶段不需要最终设计。
`);
V('daily','phrase',`
wait for|等待……|Please wait for the confirmation before travelling.|出发前请等待确认。
pay for|为……付款|You do not need to pay for return postage.|你不必支付退货邮费。
apply for|申请……|You can apply for a replacement online.|你可以在线申请替换品。|apply for 是申请某物；规则 apply to 是适用于。
prepare for|为……作准备|I need time to prepare for the appointment.|我需要时间为预约作准备。
deal with|处理；应对……|The support team will deal with the request.|支持团队会处理这个请求。
look for|寻找……|I am looking for the collection point.|我在寻找自提点。
look after|照看；照顾……|Could you look after the parcel until tomorrow?|你能帮忙保管包裹到明天吗？|与 look for 寻找区分。
check in|办理入住；报到|You can check in at the reception desk.|你可以在前台办理入住。|这里为动词短语；名词或定语常写 check-in。
be ready for|为……准备好|The parcel is ready for collection.|包裹已可领取。
be eligible for|符合获得……的条件|This order is eligible for a refund.|这个订单符合退款条件。
be subject to|受……条件限制；须视……而定|Replacement seats are subject to availability.|能否提供替代座位取决于余位情况。
be in charge of|负责；主管……|Who is in charge of the booking?|谁负责这项预订？
be good at|擅长……|She is good at explaining difficult ideas.|她擅长解释难懂的概念。|at 后接名词或 doing。
be afraid of|害怕……|I am afraid of losing the original file.|我怕丢失原文件。|of 后接名词或 doing。
be used to doing|习惯于做……|I am used to reading instructions in English.|我习惯阅读英文说明。|be used to doing 是习惯；used to do 表示过去常做；be used to do 可表示被用于做。
a refund for|……的退款|I would like a refund for the damaged item.|我想申请这件损坏物品的退款。
a change to|对……的变更|There has been a change to your appointment.|你的预约有变更。
on time|准时|The train arrived on time.|火车准时到达。|强调按计划；in time 强调来得及。
in time|及时；来得及|We arrived in time to catch the train.|我们及时到达，赶上了火车。|不一定恰好准点，只要未错过即可。
at the moment|目前；此刻|No seats are available at the moment.|目前没有空位。
from now on|从现在起|From now on, I will keep a copy of each receipt.|从现在起，我会保留每张收据的副本。
so far|到目前为止|So far, I have received only one confirmation.|到目前为止，我只收到一份确认。
in case|以防；以备……|Keep the receipt in case you need a refund.|保留收据，以备需要退款时使用。|表示预防性准备，不等同于 if 引导的一般条件。
instead of|而不是；代替……|I chose a refund instead of a replacement.|我选择退款，而不是换货。|of 后接名词或 doing。
as soon as|一……就……|I will reply as soon as I receive the confirmation.|我一收到确认就回复。|谈将来时，时间从句通常用现在时：as soon as I receive。
`);
