---
hide_title: true
sidebar_position: 998
title: KeepassXC
---

## install

[Keepassxreboot/Keepassxc - Github](https://github.com/keepassxreboot/keepassxc)

[Keepassxc.org](https://keepassxc.org/) 下载便携版 Portable (64-bit, Windows 10/11)

解压，创建 KeePassXC.exe 桌面快捷方式，打开。

创建数据库，保存在 KeePassXC 根目录即可。

设置 密码 或者 密码+秘钥文件 ，**一定保存好！！！**

设置--常规--文件管理，打开备份并选择备份位置。

设置--常规--用户界面，勾选最小化而不是退出。

修改历史默认保存10次记录，根据需要更改。

数据库正常30个条目约7kb，自定义下载图标会增大数据库。


## OneDrive

退出KeepassXC，将整个KeepassXC文件夹移动至OneDrive本地文件夹。（约100Mb+）

只要OneDrive在运行，数据库任意修改都会自动上传保存。

[坚果云](https://help.jianguoyun.com/?p=3348) 也可以，稍微麻烦一点。

## KeePassXC-Browser

设置--浏览器集成--启用--下载扩展，勾选浏览器。保存设置。

浏览器打开扩展，点击 连接 ，输入自定义标识。

刷新，打开扩展查看连接状态。

扩展--设置--保存凭据群组，再使用扩展自动提示保存新增条目功能。

更改某些设置误操作时会导致连接断开，一直提示秘钥交换未成功，不会让重新连接。

浏览器删除扩展。KeePassXC 数据库--数据库设置--浏览器集成，断开所有连接并删除自定义标识。

重新启动浏览器和KeepassXC，重新安装扩展重新连接。

## keepass2android

[keepass2android - Github](https://github.com/PhilippC/keepass2android) 下载安装。

打开文件，选择 OneDrive 登陆，选择访问我的文件好像是第二项。

选择数据库文件，打开。

如果更改云端文件夹/文件名称，则需要选择加载新数据库。

设置，关闭自动填充当个密码记事本即可。

默认快捷解锁只有3位，也支持指纹。

## Auto-Type

参考用户手册。

多数应用程序都会保存账号只需要输入密码，但是2.7.1暂时无法复制密码。

需要勾选"记住账号""自动登录"的应用手动登录一次。