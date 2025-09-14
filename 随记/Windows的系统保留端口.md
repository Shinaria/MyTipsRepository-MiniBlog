# 无标题

* 今早起来代理给我报端口占用问题了,我寻思不对啊我之前把Hyper-V给关了应该没有这个问题了
* 用TCPView查了一下也没有软件占用, 所以应该是被系统划去占用了
* 遂搜索相关命令, 得到下面这个指令可以查可能被征用的「TCP 动态端口」

```bash
netsh int ipv4 show dynamicport tcp
```

* 然后发现四位数的端口基本上全被划去征用了, 真有你的
* 虽说可以直接靠重启然后roll一个新的征用范围, 不过查到可以重新指定被征用的端口范围

```bash
netsh int ipv4 set dynamic tcp start=49152 num=16384
netsh int ipv6 set dynamic tcp start=49152 num=16384
```

* 上面的指令可以设置49152及往后16384个端口号被划入征用范围
* 回车可以得到确认的信息
* 然后重启电脑就行
* 不想重启可以用这两条指令

```bash
net stop winnat
net start winnat
#这两条指令基本上就是系统重启的简化版
```

* 内容来源: [知乎专栏](https://zhuanlan.zhihu.com/p/474392069)
