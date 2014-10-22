#CopyLink（Firefox扩展）
---

作者：于强
时间：2014年10月22日

本扩展开发过程中参考了以下扩展：
[复制链接/标签名称和地址 1.7.1](https://addons.mozilla.org/zh-CN/firefox/addon/copy-linktab-name-and-url/)
作者：[WadeFelix](https://addons.mozilla.org/zh-CN/firefox/user/wadefelix/)
在此表示感谢！

##一、功能介绍

本项目为Firefox扩展，实现的功能为同时复制标签页或网页链接的标题和地址。
本人在写博客的时候使用Markdown语言，经常要在博客中写链接，比如：

```
[百度一下，你就知道](http://www.baidu.com/)
```

每次写这个的时候，对于每个页面来说，都要复制两次，一次是复制网页标题，一次是复制网页地址。
前几天刚刚使用Firefox浏览器，偶然发现上面提到的那个扩展，可以一次性复制得到标题和地址。但是复制得到的格式不是我想要的格式，于是我就自己在该扩展的基础上，增加了设置复制格式的功能，可以自由设置想要得到的格式。
比如：

```
[标题](地址)
```

```
标题-地址
```

```
地址/标题
```

等等。
详细操作见下面的使用说明。

##二、兼容性

支持Firefox 29.0以上版本。

##三、使用说明

###1. 在Firefox安装后，“附加组件”中显示如下：
![](/Instructions/1.png)

###2. 点击“选项”可以设置模式字符串
![](/Instructions/2.png)
输入模式字符串，其中“@1”代表标题，“@2”代表地址。

###3. 设置好模式字符串后，可以在标签或链接上点击右键使用

如：
![](/Instructions/3.png)
得到的内容为：
![](/Instructions/4.png)

![](/Instructions/5.png)
得到的内容为：
![](/Instructions/6.png)

