# *标题

如题,电脑显卡驱动似乎出了些问题, 清洁后重装驱动没解决于是决定重装系统

由于上一次重装系统得有一年半以前了, 一些使用习惯和系统内软件环境也发生了一些变化

重装后安装git和相关GUI软件, 添加认证秘钥时也出现了一些坑, 故记录于此

1.尝试安装Git=> 安装Winget后安装Git

按往常习惯是走官网下载exe(还是msi?总之是安装包), 今天看官网的时候发现可以尝试用Winget安装Git

但是我的电脑并没有安装Winget, 于是搜索如何安装Winget

然后跑到了微软的文档网站给我看迷糊了, 实际上在PowerShell内执行这个就行了, 这个是微软自己提供的安装脚本

```bash
Install-Script winget-install -Force   //在PowerShell内运行
```

安装完Winget后还是在PowerShell内执行用Winget安装Git的指令就行了, 指令来源Git网站

```bash
 winget install --id Git.Git -e --source winget   //在PowerShell内运行
```

运行结束后Git安装完毕, 开始菜单出现Git相关的文件夹.

2.安装GUI

因为之前有需要传非Github平台的Git的需求, 所以用的GitExtension, 但是现在想试试Github自己出的客户端, 于是乎就主页下载了.

安装登录一气呵成, 可以直接克隆自己的库下来(并且权限齐全), 但是原本硬盘上的旧库却没有推送权限, 姑且不知道原因.(马后炮来看应该是因为两个库的内文件记录的认证方式不一样,旧库文件内应该是用的SSH认证,当时没设认证所以没权限)

暂时搁置Github出的这个客户端, 我安装GitExtension后按老方式生成并上传SSH秘钥, 菜单内插件Github选项添加个人秘钥, 但是提示远端禁止访问

3.解决远端禁止访问的问题

按照网络上的测试方法, 在Git Bash内执行如下指令

```bash
ssh -vT git@github.com   //在Git Bash内运行, 行开头自带一个$号
```

结果得到了这么个东西

```bash
debug1: OpenSSH_10.0p2, OpenSSL 3.2.4 11 Feb 2025
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: Connecting to github.com [127.0.0.1] port 22.
debug1: connect to address 127.0.0.1 port 22: Connection refused
ssh: connect to host github.com port 22: Connection refused
```

根据网络信息这里应该是跟我使用了上网工具有关, 但是我平时上网工具都是常开不关的

所以这里我想通过修改git的设置而非系统的代理设置解决问题

有尝试过以"git" "ssh" "代理"为关键词搜索内容, 多次尝试后目前可用的解决方法如下

生成ssh秘钥的".ssh"文件夹下新建一个无扩展名的"Config"文件

内部填写如下内容

```bash
Host github.com
Hostname ssh.github.com
Port 443
User git
```

关键应当是 Port 443这一行, 不过原因一时半会儿还没太明白

目前能知道的是之前的提示信息里面有提到port 22不能用, 网络上也有提过22端口可能会被加速工具或者防火墙被占用

保存后再测试Git Bash的"ssh -vT git@github.com"指令,滚动信息后似乎是能正常访问了

但是最后需要我填写一个fingerPrint, 似乎是需要我填写ssh的公钥(咋又要填?)

填完之后网络似乎卡住了, 再次测试Git Bash指令之后依旧是滚动信息, 但是最后需要我填yes or no or fingerpring

填写Yes回车, 最后返回访问正常的信息

再次测试GitExtension和Github客户端的推送功能, 这次推送成功.