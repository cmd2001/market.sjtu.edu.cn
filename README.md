# market.sjtu.edu.cn

**超市你～**

## 使用的技术

node.js

typescript

react

axios

argon-design-system-react

## 用户手册

详见`public/manual/index.html`。

## 写在前面

本工具一切请求均发送自前端(即用户浏览器)，后端服务器并未向交大的服务器发送任何数据

使用本工具，将由使用者自行承担相关风险，开发者使用后果不做出任何保证

换句话说，本工具只是提供了一把枪，而真正有罪的，是扣动扳机的人

## 用途

显然就是抢交大限量供应的超市、理发、以及一切预约制的东西！

## 准备工作

### 插件安装

首先需要安装一个浏览器插件`simple-modify-headers`

本插件用于修改从浏览器发送的数据包以达到欺诈交大服务器的目的

<a href="https://chrome.google.com/webstore/detail/simple-modify-headers/gjgiipmpldkpbdfjkgofildhapegmmic/related" target="_blank">Google Chrome</a> <a href="https://microsoftedge.microsoft.com/addons/detail/simplemodifyheaders/nmjjhcnkglmnieepjlgodcaebeigppjh" target="_blank">Microsoft Edge</a> <a href="https://addons.mozilla.org/zh-CN/firefox/addon/simple-modify-header" target="_blank">Firefox</a>


对于其他浏览器用户或移动端用户，请自行寻找PC

### 获取Cookie

在抢购开始前$10$分钟内(为什么要$10$分钟？因为时间太长的话`Cooki`e会过期！)

浏览器打开 <a href="https://dailyreport.sjtu.edu.cn/market/" target="_blank">market</a> 或 <a href="https://dailyreport.sjtu.edu.cn/haircut/" target="_blank">haircut</a> 并登陆你的`jAccount`账户

单击浏览器地址栏左边的🔒图标，`Cookie`


接着，展开`dailyreport.sjtu.edu.cn`，获取`JSESSIONID`和`dailyreport.sjtu`两个Cookie


注意：对`market`和`haircut`：

其`dailyreport.sjtu`Cookie相同，只需获取一次；

`JSESSIONID`Cookie不同，需要分别获取。

### 配置插件

下载 SimpleModifyHeader.conf 并导入到插件

填入你上一步获取的Cookie

点击右上角`Start`启动插件

## 配置工具

打开工具主页面

勾选你想要抢购的内容

输入抢购日期、抢购开始时间

配置抢购参数，推荐采用默认参数即可

## 见证奇迹

点击`开始`，保持电脑开机及浏览器活跃

抢购时间过后见证奇迹即可！

## 对于高级用户

打开控制台，实时查看状态！

