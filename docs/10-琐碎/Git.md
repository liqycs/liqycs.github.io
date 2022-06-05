1、配置全局账户信息

git config --global user.name xxx
git config --global user.email xxx@xx.com

2、发现配置有误，想要恢复默认状态

git config --unset --global user.name
git config --unset --global user.email

## Git

#### 常用Git命令清单 阮一峰

http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html

#### 基础配置

```
git config --global user.name "用户名"

git config --global user.email "邮箱"

git config --list

ssh-keygen -t rsa -C “邮箱”
# .SSH备份一份到其它盘
C:\Users\xxx\.ssh  id_rsa 私钥  id_rsa.pub 公钥
# 关联
git remote add origin <远程shh地址>
git branch --set-upstream-to=origin/<branch>
# 当前配置
git config --list
# 退出
ESC + ZZ + Enter
```

#### 提交
```
git status

git add .

git commit -m 'commit'

git push origin <远程分支>
```

#### 版本回退
```
#显示提交日志
git log
#显示提交版本号
git reflog
# 回退
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
git branch
git status
```

```
git checkout -b xxx

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
git clone [远程仓库地址]
#删除当前目录下所有文件
rm -rf ./*
#提交修改
git commit -a -m "delete old files"
#推送到远程仓库
git push
```