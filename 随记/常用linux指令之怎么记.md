# 前言

* 因为经常记不住linux的指令(全是辅音.记不住,太苦手了)
* 所以姑且在这里放一个指令表和可能的全称,方便记忆
* 来源是菜鸟

## 如果一时半会儿没得查

* man -> manual 可查看命令的使用方法
```bash
man [参数] [节号] 命令/主题
```
* 如:
```bash
man ls          \\查看ls指令的说明,参数和节号均置空
man 3 printf    \\查看C库函数的说明,参数置空,节号为3
man -k keyword  \\查看拥有 'keyword' 的所有条目, 参数为 -k ,节号置空
```

### 文件·目录

* `cd` -> change directory 切换目录,打开文件夹.
* `ls` -> list (files) 列出内部的文件和文件夹.
* `pwd` -> print work directory 显示当前目录.
* `mkdir` -> make directory 创建新目录.
* `rmdir` -> remove directory 移除目录.
* `cp` -> copy 复制files.
* `mv` -> move 移动files.
* `rm` -> remove 移除files.
