---
hide_title: true
sidebar_position: 1
title: Mine
---
### lm89  Fn +   


|Key|功能||Key|功能||Key|功能|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|F1|音乐播放器||Backspace|Numlock||ECS |长按5s恢复出厂设置|
|F2|音量减少|| 0 | Ins||WIN |锁定/解锁 win&剪切键|
|F3|音量增加|| . | Del||]}  |两侧灯光|
|F4|静音|| 1 | End||1/2/3 |短按切换蓝牙设备，长按3s配对|
|F5|停止播放|| 3 | PgDn||4  |长按3s为2.4G配对（出厂已配对）|
|F6|上一曲|| 7 | Home|| - |背光向左切换方向|
|F7|暂停播放|| 9 | PgUp|| =  |背光向右切换方向|
|F8|下一曲|| 2 | ↓ || ↑  |背光亮度增加|
|F9|背光|| 4 | ← || ↓  |背光亮度减少|
|F10|Print Screen|| 6 | → || ←  |背光速度减少|
|F11|Scroll lock|| 8 | ↑ || →  |背光速度增加|
|F12|Pause Break||

<img src="/img/lm89.png" />


### U启动

|主板|华硕F8 |技嘉F12|微星F11|映泰F9 |梅捷ESC F12|七彩虹ESC F11|华擎F11|翔升F10|昂达F11|铭瑄ESC|盈通F8|
|----|----|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|:----:|
|笔记本|华硕ESC|技嘉F12|微星F11|宏基F12|惠普 F9|戴尔F12|神舟F12|三星F12|明基F9|苹果长按option|

### C盘用户文件夹名

:::caution 仅建议全新系统操作：
C:\Users\xxx 改成 C:\Users\abc<br/>
1.Win+R打开命令窗口后、输入regedit、打开系统的注册表、ctrl+f搜索，找到ProfileList，在这里有几个S-1-5-开头的项，挨个检查每一项，找到包含ProfilelmagePath项并且值为C:\Users\xxx的，找到之后再将ProfilelmagePath双击，将xxx改为abc，确定后关闭注册表编辑器。<br/>
2.此时去C:\Users 是不能修改文件夹名称的。直接重启电脑，重启电脑以后桌面会变成第一次使用电脑的样子,不要担心，去C:\Users 把xxx这个文件夹重命名为 abc 然后直接重启电脑。重启以后就会变回原来的样子.<br/>
3.有的人这个时候已经完成了，有的人这个时候还没有完成，因为很多程序的配置文件路径还是原C:\Users\xxx打开那些软件以后会各种报路径不存在。这个时候需要在C:\Users 文件夹下面创建一个快捷方式。进入C:\Windows\System32,找到cmd.exe 右键以管理员身份运行，然后执行命令 mklink/j C:\Users\xxx C\Users\abc 然后就ok了。
:::

### 禁止程序联网

控制面板——Windows Defender 防火墙——高级设置——出站规则——新建规则——

### 禁用文件夹预览.reg
```
Windows Registry Editor Version 5.00
 
[HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags\AllFolders\Shell]
"Logo"="d:\\somefile.jpg"

;C盘右键–属性–磁盘清理，勾选“缩略图”确定;注销或重启电脑
```
