# Git的远程推送之本地SSH密钥添加至远程

* 如题, git远程推送时的目标地址可选https和ssh两种方式
* 这里记录使用使用ssh方式时如何将本地端添加至Github远程的可信列表中.

## 本地生成SSH秘钥

* 打开Git Bash(Windows系统在开始菜单里面可以找到)
* 输入命令:
```c
ssh-keygen -t ed25519 -C "your_email@example.com"
```
* 回车后按需设置密钥文件位置和密码, 多次回车设置完毕后会显示一堆符号组成的矩阵, 这说明本地的密钥生成完毕.

## 密钥添加至ssh-agent

* Git Bash输入命令启动ssh-agent
```c
eval "$(ssh-agent -s)"
```
* 然后输入命令, 将秘钥添加到ssh-agent
```c
ssh-add ~/.ssh/id_ed25519
```

## 公钥添加到Github

* 根据之前Git Bash内的信息, 找到生成SSH秘钥的文件夹, 内有以".pub"为后缀的文件, 打开后内有一行字符串,以"ssh-"为开头
* 添加至Github网站的"Add new SSH Key"相关设置中,然后保存.
