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
* 关闭容器后再打开的指令是`docker start`, 不是`docker run`, `run`是新建(重复)

### 如何迁移这个容器?

#### 方法1:手动生成·迁移·恢复

1. 在当前环境准备固化+生成`.tar`文件
```bash
docker commit kitex-learning kitex-learning-env:v1
docker save -o J:\Learning\kitex-learning-env-v1.tar kitex-learning-env:v1
```
2. 在新电脑上恢复
```bash
docker load -i J:\Learning\kitex-learning-env-v1.tar
docker run -it --name kitex-learning -v J:\Learning\KitexLearning:/src -w /src kitex-learning-env:v1 /bin/bash
```

#### 方法2：用powershell的脚本语言自动处理

* 可以自增版本号, 此脚本来自Gemini(没写过PowerShell的脚本所以让它多写了点注释)
1. 编写保存环境的脚本`save-env.ps1`
``` PowerShell
# ==========================================
# 自动化存档脚本 (含缓存清理)
# ==========================================
  
# --- 1. 基础配置 (根据你的实际情况修改) ---
$imageName = "kitex-learning-env"        # 镜像的名字
$containerName = "kitex-learning"       # 你当前正在跑的容器名字
$versionFile = "J:\Learning\version.txt"  # 记录版本号的小本子
  
# --- 2. 自动获取并增加版本号 ---
# 如果文件存在就读数字，不存在就从 0 开始
if (Test-Path $versionFile) {
    $v = [int](Get-Content $versionFile)
} else {
    $v = 0
}
$newV = $v + 1
$tag = "v$newV"
$savePath = "J:\Learning\${imageName}-${tag}.tar"
  
Write-Host ">>> Ready to save version: $tag" -ForegroundColor Cyan
  
# --- 3. 核心：清理 Go 缓存 (瘦身关键) ---
# 这条指令会进入容器内部，删掉编译产生的临时缓存和下载的旧包
Write-Host ">>> Remove Go Cache in container..." -ForegroundColor Yellow
docker exec $containerName go clean -cache -modcache
  
# --- 4. 提交并保存环境 ---
Write-Host ">>> Generating .tar file (a few minutes)..." -ForegroundColor Cyan
# commit: 把现在的容器状态“固化”成一个新的镜像
docker commit $containerName "${imageName}:${tag}"
# save: 把镜像导出成移动硬盘里的 .tar 文件
docker save -o $savePath "${imageName}:${tag}"
  
# --- 5. 更新版本号记录 ---
$newV | Out-File $versionFile
Write-Host ">>> Success! Path: $savePath" -ForegroundColor Green
```
2. 编写复现环境的脚本
```PowerShell
# ==========================================
# 自动化读档脚本 (环境复现)
# ==========================================
  
# --- 1. 基础配置 ---
$imageName = "kitex-learning-env"
$containerName = "kitex-learning"       # 统一两台电脑的容器名，方便操作
$versionFile = "J:\Learning\version.txt"
  
# --- 2. 获取最新版本号 ---
if (-not (Test-Path $versionFile)) {
    Write-Error "Error: Can not find version.txt in J:/Learning."
    exit
}
$v = Get-Content $versionFile
$tag = "v$v"
$loadPath = "J:\Learning\${imageName}-${tag}.tar"
  
Write-Host ">>> Load latest version: $tag" -ForegroundColor Cyan
  
# --- 3. 导入镜像 ---
# 把硬盘里的 .tar 包重新加载进电脑的 Docker 仓库
docker load -i $loadPath
  
# --- 4. 重置容器 (换上新环境) ---
# 因：旧容器绑定的是旧镜像 ID，必须删掉重建
Write-Host ">>> Remove old containers..." -ForegroundColor Yellow
docker rm -f $containerName  # 强制删除同名旧容器
  
Write-Host ">>> Run new env..." -ForegroundColor Yellow
# 执行 run: 创建新容器并挂载 J 盘代码
# -v 参数建立了“传送门”，-w 设置了进门后的起始位置
docker run -it --name $containerName `
    -v J:\Learning\KitexLearning:/src `
    -w /src `
    "${imageName}:${tag}" /bin/bash
  
# --- 5. 提示 ---
# 脚本执行到这里会直接进入容器的命令行
```

#### 方法3:利用dockerfile一键生成一个新的.

* 听起来很美好, 但是家里网太烂了只能作罢.
* 但是实际工作用这个方案应该很方便.(公司网太烂感觉不太可能)

## 示例项目拉取+第一次尝试直接运行

* 项目地址: `https://github.com/cloudwego/kitex-examples.git`
* 拉取下来后为一个名为kitex-examples的项目,里面有很多个示例
* 这里先从hello项目开始
* 网站侧边栏->快速开始->基础实例
* 打开项目文件夹的hello文件夹: `cd kitex-examples/hello`
* 命令行运行`go run .`, 这表示运行该目录(hello目录)下的go语言.
* 这里是服务器的代码, 运行成功会出来一行消息`2026/02/28 12:07:32.339950 server.go:79: [Info] KITEX: server listen at addr=[::]:8888`
* 另开一个窗口, 进入项目hello文件夹下的client文件夹`cd kitex-examples/hello/client`, 命令行运行`go run .`.
* 如果刚刚服务的代码运行之后没有退出, 这里运行client的窗口会每秒跳一行消息, 类似`2026/02/28 12:10:09 Response({Message:my request})`
* 这就是一个简单的服务器运行+客户端运行.
* 服务器运行代码出来的一行消息提示了我们这个服务是挂载在8888端口上的(代码写死了服务挂载在端口8888上)

## 自己写一个服务+调用这个服务的客户端

### 端口固定8888

#### 大致步骤

* 内容大致来源于官方文档.

1. 设计RPC服务.以下'RPC服务'简称'RPC'或者'服务'
2. 根据设计编写`.thrift`文件.
    * thrift是一种IDL(Interface Definition Language，接口定义语言).
    * thrift有自己的语法.需要学.
    * `.thrift`文件里面写好了服务的各类接口和需要的数据结构&类型.
    * 一个`.thrift`文件里面大致有两种'大括号', 一种关键词是struct,表示数据结构; 一种关键词是service, 表示服务.
3. (不必要但是推荐)把`.thrift`文件放入`idl`文件夹中.
    * 方便文件管理.
4. 使用Kitex Tool依据我们刚刚写好的`.thrift`文件生成服务代码.
    1. 当前目录下，执行如下命令：
    ```bash
    kitex -module module_name path/to/example.thrift
    ```
    2. 执行后在当前目录下会生成一个名为`kitex_gen`目录, 不过还需要再生成服务的脚手架代码.
    3. 进入想要放业务服务代码的文件夹(可新建)
    4. 执行如下命令:
    ```bash
    kitex -module module_name -service namespace.in.thrift -use path/to/kitex_gen path/to/example.thrift
    ```
    * 一个`.thrift`文件生成就要RPC代码.
    * 建议新建一个`rpc`文件夹, 然后把生成的代码按照服务名依次同名文件夹放进去.
    * 一份代码需要生成两次.
5. 回到项目根目录, 执行`go mod tidy`拉取依赖.
6. 然后进入第二次生成的代码文件夹里面修改handle.go,里面可以看到几个函数, 名字与`.thrift`里面定义的service的名字一样. 这里是负责业务代码的部分.

#### 实际执行记录

1. 两份thrift代码,放入项目文件夹的idl文件夹中:(刻意写复杂了)
```thrift
namespace go gostudy.usersystem.user

struct UserID{
    1: i64 no
}

struct UserInfo{
    1: UserID id
    2: string name
}

service UserService{
    UserInfo GetUserInfo (1: UserID userid)
}
```
```thrift
namespace go gostudy.usersystem.order

include "user.thrift"

service OrderService{
    user.UserInfo GetUserInfo(1: i64 userid)
}
```
2. 命令行在项目文件夹依次执行如下命令
```bash
kitex -module usersystem idl/user.thrift
kitex -module usersystem idl/order.thrift
```
3. 项目文件夹内出现了`kitex_gen`文件夹
4. 新建rpc文件夹, 再在rpc文件夹里面新建`user`和`order`文件夹各一, 对应两个`.thrift`文件.
5. 进入`rpc/user`文件夹, 执行
```bash
itex -module usersystem -service gostudy.usersystem.user -use user_system/kitex_gen ../../idl/user.thrift
```
6. 进入`rpc/order`文件夹, 执行
```bash
kitex -module usersystem -service gostudy.usersystem.order -use user_system/kitex_gen ../../idl/order.thrift
```
7. 进入`rpc/user`文件夹, 里面可以看到`handle.go`和`main.go`文件.
8. 修改`handle.go`文件, 把里面的`GetUserInfo`改成这个样子, 这里是编写服务业务代码的地方.
```go
// GetUserInfo implements the UserServiceImpl interface.
func (s *UserServiceImpl) GetUserInfo(ctx context.Context, userid *user.UserID) (resp *user.UserInfo, err error) {
    // TODO: Your code here...
    var name string = "Name"+strconv.FormatInt(userid.No,10)
    resp = &user.UserInfo{Id: userid, Name: name}
    log.Println(name)//简单写了些
    return
}
```
9. 注意`main.go`文件, 这里是启动服务器的代码.目前不做改动(可以启动就行,端口应该是是默认8888)