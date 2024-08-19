# github: Permission denied (publickey)

来源: https://www.cnblogs.com/Jaguar/p/12738836.html

问题出现在第一次用GitHub拉一个fork的库下来的时候。

之前只在工作的时候用过国内的Git库，各个流程基本上都是傻瓜式的+全中文，第一次用GitHub拉东西下来啥都不知道
（更不用说这个荒废的账号上一次用还是七年前，那时我居然还把大一写的作业传上来了）

工作的时候用的HTTP链接克隆的库，我寻思自己操作就用个别的方式————比如SSH
然后命令行显示Permission denied (publickey)
搜索下来发现可能是我没有配置SSH Key，故而远程端无法确认身份信息->于是拒绝访问

#### 解决方式大致步骤为：
**1**. 在本地机器上，用git命令行(git-bash?或者用git的GUI软件找到命令行功能)下生成SSH秘钥至用户目录下(Windows 10,C盘User对应文件夹)

**2**. 文档形式打开用户目录下id_rsa.pub

**3**. 复制内容至Github网站用户设置内的SSHKey相关设置内容框，保存并应用生效

#### 原文具体内容:复制至来源网页(博客园)


###### 在Linux上安装Git
```
sudo apt-get install git
```

安装完成后，还需要最后一步设置，在命令行输入：
```
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```
这相当于在本地记录你将来要用的GitHub(或其他Git网站)的账号所有邮箱。
在继续阅读后续内容前，请自行用youremail@example.com注册GitHub账号。

由于你的本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，**所以，需要一点设置：**

##### 第1步：创建SSH Key

在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有id_rsa和id_rsa.pub这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：
```
$ ssh-keygen -t rsa -C "youremail@example.com"
```
你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。

如果一切顺利的话，可以在用户主目录里找到.ssh目录，里面有id_rsa和id_rsa.pub两个文件，这两个就是SSH Key的秘钥对，id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。

##### 第2步：在远端网站添加SSH Key
登陆GitHub，打开“Account settings”->“SSH Keys”页面

然后点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容。
点“Add Key”，你就应该看到已经添加的Key。

为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。

当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。


至此，问题解决。
