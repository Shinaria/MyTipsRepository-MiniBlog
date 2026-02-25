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

## 示例项目拉取+在Windows第一次尝试直接运行

* 前置安装: 
* 项目地址: `https://github.com/cloudwego/kitex-examples.git`
* 拉取下来后为一个名为kitex-examples的项目,里面有很多个示例
* 这里先从hello项目开始
* 网站侧边栏->快速开始->基础实例
* 打开项目文件夹的hello文件夹: 
```bash
cd kitex-examples/hello
```