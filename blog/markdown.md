


# Markdown
## 标题

```
# 这里是 h1
## 这里是 h2
### 这里是 h3
## 这里是 h4
### 这里是 h5
#### 这里是 h6
```


## 段落

段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一段落一

段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二段落二


## 超链接

[单刷记录](https://b23.tv/sUHITCZ)

```
[单刷记录](https://b23.tv/sUHITCZ)
```

## 引用

> 这里是引用

```
> 这里是引用
```
## 空格
```
插入一个空格 (non-breaking space)    &nbsp;    或    &#160;     或      &#xA0;
插入两个空格 (en space)    &ensp;     或    &#8194;   或      &#x2002;
插入四个空格 (em space)    &emsp;    或    &#8195;   或      &#x2003;
插入细空格 (thin space)    &thinsp;   或     &#8201;  或      &#x2009;
```

## 字体样式

_斜体_

**粗体**

~~删除线~~

```
_斜体_
**粗体**
~~删除线~~
```

## 列表

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

## 分割线

---

```
---
```

## 图片

![line](/img/xxx.png)

```md
![line](http://xx.com/xx.jpg)
```



## 代码行

这是一段文字`rm -rf /*`这是一段文字

```
这是一段文字`rm -rf /*`这是一段文字
```

## 代码块

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

## 表格

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


## html


```html title="似乎不支持？"
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

## iframe

<iframe src="//music.163.com/outchain/player?type=2&id=4988618&auto=0&height=66" frameborder="0" width="100%" height="86px" ></iframe>

```html
<!-- 属性最好用双引号括住;网易云的iframe需要做些调整如下 -->
<iframe src="//music.163.com/outchain/player?type=2&id=28445796&auto=0&height=66"
        frameborder="0"
        width="100%"
        height="86px"
></iframe>
```
