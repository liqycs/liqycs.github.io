

## Thanks

<div style='font-size:18px'>

[docsify](https://docsify.js.org/#/zh-cn/)

[docsify-theme](https://docsify-darklight-theme.boopathikumar.me/#/)

</div>

<br><br>

## Markdown 基本语法



#### 标题

```
# 这里是 h1
## 这里是 h2
### 这里是 h3
#### 这里是 h4
##### 这里是 h5
###### 这里是 h6
```


#### 段落

段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一

段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二


#### 超链接

[单刷记录](https://b23.tv/sUHITCZ)

```
[单刷记录](https://b23.tv/sUHITCZ)
```

#### 引用

> 这里是引用

```
> 这里是引用
```

#### 常见字体样式

_斜体_

**粗体**

~~删除线~~

```
_斜体_
**粗体**
~~删除线~~
```

#### 列表

- 无序列表 1-1

  缩进 2 空格

  - 缩进 2 空格
  - 缩进 2 空格

- 无序列表 1-2
- 无序列表 1-3

1. 有序列表 1-1

   缩进 3 空格

   1. 缩进 3 空格
   2. 缩进 3 空格

2. 有序列表 1-2
3. 有序列表 1-3

```
- 无序列表 1-1

  缩进 2 空格

  - 缩进 2 空格
  - 缩进 2 空格

- 无序列表 1-2
- 无序列表 1-3

1. 有序列表 1-1

   缩进 3 空格

   1. 缩进 3 空格
   2. 缩进 3 空格

2. 有序列表 1-2
3. 有序列表 1-3
```

#### 分割线

---

```
---
```

#### 图片

![line](img/test.png)

```md
![line](http://xx.com/xx.jpg)
```



#### 代码行

这是一段文字`rm -rf /*`这是一段文字

```
这是一段文字`rm -rf /*`这是一段文字
```

#### 代码块

```javascript
blog.encodeHtml = function(html) {
  var o = document.createElement('div')
  o.innerText = html
  var temp = o.innerHTML
  o = null
  return temp
}
```

````
```javascript
blog.encodeHtml = function(html) {
var o = document.createElement('div')
o.innerText = html
var temp = o.innerHTML
o = null
return temp
}
```
````

#### 表格测试

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

```md
| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |
```


#### 插入 html

<div id="htmldemo"></div>
<style>
#htmldemo{
    height: 30px;
    width: 30px;
    background-color: #00aa9a;
    animation-name: moveX;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode : both;
}
@keyframes moveX {
    0%{
        transform: translateX(0px);
    }
    100%{
        transform: translateX(100px);
    }
}
</style>

```html
<div id="htmldemo"></div>
<style>
  #htmldemo {
    height: 30px;
    width: 30px;
    background-color: #00aa9a;
    animation-name: moveX;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: both;
  }
  @keyframes moveX {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(100px);
    }
  }
</style>
```

#### 插入 iframe

<iframe src="//music.163.com/outchain/player?type=2&id=4988618&auto=0&height=66" frameborder="0" width="100%" height="86px" ></iframe>

```html
<!-- 属性什么的不要错了，最好用双引号括住 -->
<!-- 网易云的iframe需要做些调整，调整如下 -->
<iframe src="//music.163.com/outchain/player?type=2&id=28445796&auto=0&height=66"
        frameborder="0"
        width="100%"
        height="86px"
></iframe>
```
#### 插入空格
```
插入一个空格 (non-breaking space)    &nbsp;    或    &#160;     或      &#xA0;
插入两个空格 (en space)    &ensp;     或    &#8194;   或      &#x2002;
插入四个空格 (em space)    &emsp;    或    &#8195;   或      &#x2003;
插入细空格 (thin space)    &thinsp;   或     &#8201;  或      &#x2009;
```

<br><br>

## docsify 扩展语法


#### 文档助手
docsify 扩展了一些 Markdown 语法，可以让文档更易读。

#### 强调内容
适合显示重要的提示信息，语法为 !> 内容。

!> 一段重要的内容，可以和其他 **Markdown** 语法混用。
```
!> 一段重要的内容，可以和其他 **Markdown** 语法混用。
```
#### 普通提示
普通的提示信息，比如写 TODO 或者参考内容等。

?> _TODO_ 完善示例
```
?> _TODO_ 完善示例
```
#### 忽略编译链接


有时候我们会把其他一些相对路径放到链接上，你必须告诉 docsify 你不需要编译这个链接。 例如：
```html
[link](/demo/)
```
它将被编译为 ```<a href="/#/demo/">link</a>```
并将加载 /demo/README.md. 可能你想跳转到 /demo/index.html。

现在你可以做到这一点
```html
[link](/demo/ ':ignore')
```
即将会得到```<a href="/demo/">link</a>```
html 代码。不要担心，你仍然可以为链接设置标题。

```html
[link](/demo/ ':ignore title')

<a href="/demo/" title="title">link</a>
```


#### 设置链接的 target 属性 
```html
[link](/demo ':target=_blank')
[link](/demo2 ':target=_self')
```
#### 禁用链接
```html
[link](/demo ':disabled')
```
#### 跨域链接
只有当你同时设置了 routerMode: 'history' 和 externalLinkTarget: '_self' 时，你需要为这些跨域链接添加这个配置。
```html
[example.com](https://example.com/ ':crossorgin')
```

#### Github 任务列表


- [ ] foo
- bar
- [x] baz
- [] bam <~ not working
  - [ ] bim
  - [ ] lim

```html
- [ ] foo
- bar
- [x] baz
- [] bam <~ not working
  - [ ] bim
  - [ ] lim
```

#### 图片处理
缩放
```html
![logo](img/test.png ':size=WIDTHxHEIGHT')
![logo](img/test.png ':size=100')
![logo](img/test.png ':size=200x200')
<!-- 支持百分比缩放 -->
![logo](img/test.png ':size=20%')

````
![logo](img/test.png ':size=WIDTHxHEIGHT')
![logo](img/test.png ':size=100')
![logo](img/test.png ':size=200x200')
![logo](img/test.png ':size=20%')

设置图片的 Class
```html
![logo](img/test.png ':class=someCssClass')
```
设置图片的 ID
```html
![logo](img/test.png ':id=someCssId')
```
#### 设置标题的 id 属性
```
## 你好，世界！ :id=hello-world
```
html 标签中的 Markdown
你需要在 html 和 Markdown 内容中插入空行。 当你需要在 details 元素中渲染 Markdown 时很有用。

<details>
<summary>自我评价（点击展开）</summary>

- Abc
- Abc
- Abc

</details>

```html
<details>
<summary>自我评价（点击展开）</summary>

- Abc
- Abc
- Abc

</details>
````



#### Markdown内容也可以被 html 标签包裹

<div style='color: green'>

- listitem
- listitem
- listitem
</div>

```html
<div style='color: green'>

- listitem
- listitem
- listitem
</div>
```

---