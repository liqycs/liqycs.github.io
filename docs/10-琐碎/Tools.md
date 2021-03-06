---
hide_title: true
sidebar_position: 99
title: Tools
---

## Git

#### 基础配置

```
#配置全局账户信息
git config --global user.name "用户名"
git config --global user.email "邮箱"

#取消全局账户信息
git config --unset --global user.name
git config --unset --global user.email

#查看配置信息
git config --list

#生成ssh id_rsa 私钥  id_rsa.pub 公钥
ssh-keygen -t rsa -C “邮箱”

#关联远程库
git remote add origin <远程shh地址>
git branch --set-upstream-to=origin/<branch>

#查看关联的远程库
git remote -v

#退出
ESC + ZZ

#拉取指定分支
git clone -b <branch> <url>

#测试
ssh -T git@gitee.com
ssh -T git@github.com

#查看所有分支
git branch -a
```

#### 连接问题
```
#查询proxy
git config --global -l

#删除proxy
git config --global --unset http.proxy
git config --global --unset https.proxy

#配置proxy
git config --global http.proxy http://127.0.0.1:443
git config --global https.proxy http://127.0.0.1:443

#
```

#### 提交流程
```
#查看
git status

#添加
git add .

#commit
git commit -m 'commit'

#推送 -u -f
git push origin <远程分支>
```

#### 版本回退
```
#提交日志
git log

#提交版本号
git reflog

#回退
git reset --hard <版本号>
```

#### 创建与合并分支
```
#查看分支
git branch

#创建分支
git branch name

#切换分支
git checkout name

#创建并切换分支
git checkout –b name

#合并某分支到当前分支
git merge name

#删除分支
git branch –d name
```

#### 新建远程分支

```
#确认当前无工作
git branch
git status

#新建
git checkout -b xxx

#推送
git push origin xxx:xxx
```
#### 删除远程分支

```
git push origin --delete xxx

git push origin :xxx
```

#### 清空远程仓库
```
#克隆到本地
git clone <远程仓库地址>

#删除当前目录下所有文件
rm -rf ./*

#提交修改
git commit -a -m "delete all"

#推送到远程仓库
git push
```

#### 同时连接Github和Gitee
```
ssh-keygen -t rsa -C 'github邮箱号' -f ~/.ssh/id_rsa_github
ssh-keygen -t rsa -C 'gitee邮箱号' -f ~/.ssh/id_rsa_gitee
```
```
~/.ssh/config

# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitee
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github
```

#### 常用Git命令清单 阮一峰

http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html







## Nodejs

```
安装
F:\nodejs
新建
F:\nodejs\node_global F:\nodejs\node_cache
运行
npm config set prefix "F:\nodejs\node_global"
npm config set cache "F:\nodejs\node_cache"
系统变量-新建
NODE_PATH F:\nodejs\node_global\node_modules
用户变量-path
改为 F:\nodejs\node_global
```


## Vscode

安装时务必勾选添加右键菜单

- 翻译(英汉词典)
- Auto Close Tag
- GitHub.copilot
- Markdown All in One
- One Monokai Theme
- Markdown Preview Enhanced
- Live Server

## Emoji

Code：https://github.com/ikatyang/emoji-cheat-sheet/

Copy：https://emojipedia.org/

📕📙📗📘 🔴🟠🟡🟢🟤🔵🟣⚫⚪🌙☀️🌕📖📚🏠🏘️✈️🚀🛰️✨⏳🎉🔍✉️📧💊

## Textify
```
; Mouse and keyboard key numbers can be found here:
; https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes
; Set key to 0 to disable the mouse/keyboard shortcut.

[mouse]
key=4
ctrl=1
alt=0
shift=0

[keyboard]
key=84
ctrl=1
alt=1
shift=1

[config]
check_for_updates=0
auto_copy_selection=1
hide_wnd_on_startup=1
hide_tray_icon=0
;font_name=Consolas
;font_size=24

; The following option causes empty Unicode symbols to be removed
; and various space symbols to be replaced with a regular space.
unicode_spaces_to_ascii=0

; Language codes can be found here:
; https://www.autoitscript.com/autoit3/docs/appendix/OSLangCodes.htm
;ui_language=1033

; Set to msaa to make Textify use the old Microsoft Active Accessibility API.
; Set to uia to make Textify use the newer UI Automation API.
; If not set, Textify uses both APIs to retrieve the text in the best way.
;text_retrieval_method=uia

[exclude]
;1=photoshop.exe
;2=notepad.exe
:3=JX3ClientX64.exe

; Web buttons appear below the text, and can be used to open the selected
; text in a website, such as a search engine or a web translation service.
; More web buttons can be added, and existing buttons can be removed.
; If desired, all of the web buttons can be removed.
;
; Web buttons can be used with the keyboard shortcuts: Alt+1, Alt+2, etc.
; A custom key can be configured. For example, to configure a web button
; to open with Alt+Q, add key=q to the relevant button.
;
; A command can be a URL or a program. It can contain the following:
; %s - will be replaced by the selected text, URL encoded.
; %cs - will be replaced by the selected text, with quote characters stripped.
; %rs - will be replaced by the selected text as is (use carefully).
;
; A command can start with popup-web!, followed by a URL.
; In this case, the page will be opened in a browser popup (browser auto-detected).
; You can be more specific by starting a command with one of the following:
; popup-chrome!, popup-edge!, popup-firefox!, popup-ie-control!.

[web_buttons]
icon_size=20
buttons_per_row=8

[web_button_1]
name=
icon=icons\Search.ico
command=popup-web!edge://newtab/
width=500
height=1000
```

## YoloMouse
```
Settings.json

{
    Version: 1.2.3.0
    PickerKey: "ALT SHIFT C"
    BindKey: "ALT SHIFT 1"
    BindAllKey: "ALT SHIFT D"
    UnbindKey: "ALT SHIFT ["
    UnbindAllKey: "ALT SHIFT ]"
    SmallerKey: "ALT SHIFT -"
    LargerKey: "ALT SHIFT ="
    ColorsKey: "ALT SHIFT 2"
    AutoStart: false
    StartInSteam: false
}
```




## Shutdown&Restart

```html
<html>
 <head> 
  <meta http-equiv="content-type" content="text/html;charset=UTF-8" /> 
  <title>Shutdown & Restart</title> 
 </head>
 <body>
  <hta:application id="WTimer" maximizebutton="No" minimizebutton="Yes" singleinstance="Yes" contextmenu="Yes" sysmenu="Yes" version="1.0" innerborder="No" caption="Yes" showintaskbar="Yes" border="Normal" borderstyle="Normal" applicationname="Windows Timer" icon="TimerIco.ico" /> 
  <style type="text/css"> 
	* { font-family:Courier New,Arial,Sans-serif;font-size:9pt; } 
	body { overflow-y:hidden; } 
	div a:link,div a:visited { text-decoration:none;color:#000 } 
	div a:hover { text-decoration:underline;color:#f00 } 
	#footerinfo { width:100%;display:table;margin-top:5px; } 
	#left { float:left;width:50%; } 
	#right { float:right;width:29%;text-align:right;margin-right:1px; } 
</style> 
  <script language="JavaScript"> 
$bl_Sleep=false; 
function getObject($obj) { 
return(document.getElementById($obj)); 
} 
String.prototype.parseInt=function() { 
return(parseInt(this)); 
} 
function getRadioVal($name) { 
$oEms=document.getElementsByName($name); 
for ($i=0;$i<$oEms.length;$i++) { 
if ($oEms[$i].checked) { return($oEms[$i].value); } 
} 
} 
function isDeclared($varName) { 
return(typeof($varName)!="undefined"); 
} 
function chStatus($name,$status) { 
$ooEms=document.getElementsByName($name); 
for ($a=0;$a<$ooEms.length;$a++) { 
$ooEms[$a].disabled=$status; 
} 
} 
function window.onload() { 
$sWidth=window.screen.width; 
$sHeight=window.screen.height; 
$aWidth=400; 
$aHeight=200; 
window.resizeTo($aWidth,$aHeight); 
window.moveTo(($sWidth-$aWidth)/2,($sHeight-$aHeight)/2); 
document.bgColor="#d4d0c8"; 
getObject("StopButton").disabled=true; 
getObject("left").innerHTML=""; 
} 
function Timer_Quit() { 
window.close(); 
} 
function Timer_Kernel() { 
if ($bl_Sleep) { 
if (isDeclared($time) && isDeclared($mod_time) && isDeclared($operation)) { 
if ($time>0) { 
$Oper_str=""; 
$Hint_str=""; 
$Titl_str=""; 
if ($operation=="rWin") { 
$Oper_str="<span style=\"color:red\"> —— 准备关机 ——</span>"; 
} 
else { 
$Oper_str="<span style=\"color:red\"> —— 准备重启 ——</span>"; 
} 
if ($mod_time=="mod_minute") { 
$tMinute=($time/60).toString().parseInt(); 
$tSecond=$time%60; 
if ($tMinute!=0) { 
if ($tSecond<10) { 
$tSecond="0"+$tSecond; 
} 
$Titl_str="剩余时间："+$tMinute+"分"+$tSecond+"秒"; 
} 
else { 
$Titl_str="剩余时间："+$tSecond+"秒"; 
} 
} 
else { 
$Titl_str="剩余时间："+$time+"秒"; 
} 
getObject("left").innerHTML=$Oper_str; 
document.title=$Titl_str; 
$time=$time-1; 
$o=setTimeout("Timer_Kernel()",1000); 
} 
else { 
$Flag=""; 
if ($operation=="rWin") { 
$Flag=1; //6为重启操作系统 
} 
else { 
$Flag=6; //1为关闭操作系统 
} 
OperateWin32($Flag); 
getObject("left").innerHTML="<span style=\"color:red\">提示：正在执行预定操作！</span>"; 
document.title="正在执行预定操作"; 
} 
} 
} 
} 
function Timer_Stop() { 
$bl_Sleep=false; 
if (isDeclared($o)) { clearTimeout($o); } 
getObject("time").disabled=false; 
getObject("mod_time").disabled=false; 
chStatus("operation",false); 
getObject("StartButton").disabled=false; 
getObject("StopButton").disabled=true; 
getObject("left").innerHTML=""; 
document.title="Shutdown & Restart"; 
} 
function Timer_Start() { 
$bl_Sleep=true; 
$nowTime=""; 
$time=getObject("time").value; 
$mod_time=getObject("mod_time").value; 
$operation=getRadioVal("operation"); 
if (isNaN($time) || $time=="") { 
alert("请正确设定一个时间值！ "); 
getObject("time").select(); 
return; 
} 
else { 
$time=$time.parseInt(); 
if ($mod_time=="mod_minute") { $time=$time*60; } 
} 
getObject("time").disabled=true; 
getObject("mod_time").disabled=true; 
chStatus("operation",true); 
getObject("StartButton").disabled=true; 
getObject("StopButton").disabled=false; 
Timer_Kernel(); 
} 
function OperateWin32($DownFlag) { 
$OS_Pro=GetObject("WinMgmts:{(shutdown)}//./root/cimv2").ExecQuery("select * from win32_operatingsystem where primary=true"); 
for ($e=new Enumerator($OS_Pro);!$e.atEnd();$e.moveNext()) { 
$getProcess=$e.item() 
$getProcess.win32shutdown($DownFlag); 
} 
} 
function ResponseKeyPress() { 
if (event.keyCode==13) { event.keyCode=9; } 
} 
</script>   
  <fieldset> 
   <table width="100%" border="1" cellpadding="4" cellspacing="3"> 
    <form name="form1"></form> 
    <tbody>
     <tr> 
      <td width="25%">设定时间:</td> 
      <td width="75%"><input type="text" name="time" size="20" value="" onkeypress="ResponseKeyPress()" /> <select name="mod_time"> <option value="mod_minute">分钟</option> <option value="mod_second">秒钟</option> </select> </td> 
     </tr> 
     <tr> 
      <td>功能选择:</td> 
      <td> <input type="radio" name="operation" value="rWin" checked="checked" />关机 <input type="radio" name="operation" value="cWin" />重启 </td> 
     </tr> 
     <tr> 
      <td colspan="2" style="text-align:right"> <input type="button" name="StartButton" value=" 应用 " onclick="Timer_Start()" /> <input type="button" name="StopButton" value=" 取消 " onclick="Timer_Stop()" /> <input type="button" name="ExitButton" value=" 退出 " onclick="Timer_Quit()" /> </td> 
     </tr>  
    </tbody>
   </table> 
  </fieldset> 
  <div id="footerinfo"> 
   <div id="left"></div> 
   <div id="right">
     By:Sena
<!-- 来源：吾爱破解 https://www.52pojie.cn/thread-1475980-1-1.html 另存为.hta运行 -->
   </div> 
  </div>  
 </body>
</html>
```