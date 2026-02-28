# RT

* Kitex文档网站 https://www.cloudwego.io/zh/docs/kitex/

## 环境安装(Windows)

### 安装Go
* 安装Go:https://go.dev/doc/install
* 命令行输入`go version`后回车, 如果出现*版本号*和*系统架构信息*说明装上了.
* 推荐命令行运行`go env -w GOPROXY=https://goproxy.cn`设置国内代理.

### 安装Kitex套件

* 上一步安装Go成功后,命令行执行`go install github.com/cloudwego/kitex/tool/cmd/kitex@latest`
* 安装完成后执行`kitex --version`, 如果跳出*具体版本号*说明安装成功.

### 安装Narcos套件

* 装v2的.
* 命令行执行`go get github.com/kitex-contrib/registry-nacos/v2`

## 环境安装(Docker)

### 安装Docker

* 下载DockerDesktop, 按需安装WSL2和汉化组件.
* 安装的时候勾上添加docker.exe进环境变量的选项.

### 生成一个容器实例

* 打开Powershell命令行终端, 输入`docker pull golang:1.23`
* 1.23是为了保证环境迁移的时候能固定go语言的版本号, 不用下最新的.
* Powershell终端下继续输入`docker run -it --name kitex-learning -v J:\Learning\KitexLearning:/src -w /src golang:1.23 /bin/bash`
* `docker run`指令的意思是新建.
* `--name`后面的`kitex-learning`是给容器的取名
* `J:\Learning\KitexLearning:/src`的意思是':'前的物理文件夹地址映射成为容器的src文件夹地址.
* 新建完容器会自动进入容器的命令行(`root@`开头)
* 然后运行`go install github.com/cloudwego/kitex/tool/cmd/kitex@latest`安装Kitex.
* 然后运行`go get github.com/kitex-contrib/registry-nacos/v2`安装Narcos.

## 示例项目拉取+第一次尝试直接运行

* 项目地址: `https://github.com/cloudwego/kitex-examples.git`
* 拉取下来后为一个名为kitex-examples的项目,里面有很多个示例
* 这里先从hello项目开始
* 网站侧边栏->快速开始->基础实例
* 打开项目文件夹的hello文件夹: `cd kitex-examples/hello`
* 命令行运行`go run .`, 会弹出一行消息窗口
