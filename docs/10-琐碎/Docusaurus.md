---
hide_title: true
sidebar_position: 998
title: Docusaurus
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Docusaurus

### 配置运行

```
npx create-docusaurus@latest my-website classic

cd my-website

npm (run) start
```



### 博客摘要

```
<!--truncate-->
```

### Mdx示例

```
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

---

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>

---

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>

---

<br/>

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```

---
<br/>

:::note 注意

注意

:::

:::tip

提示

:::

:::info

信息

:::

:::caution

谨慎

:::

:::danger 危险

危险

:::


---
<br/>

:::tip Use tabs in admonitions


<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::

---

<br/>

<details>
  <summary>Emoji</summary>
  <div>
    <div>
Code：https://github.com/ikatyang/emoji-cheat-sheet/<br/>
Copy：https://emojipedia.org/<br/>
📕📙📗📘 🔴🟠🟡🟢🟤🔵🟣⚫⚪🌙☀️🌕📖📚🏠🏘️✈️🚀🛰️✨⏳🎉🔍✉️📧💊<br/>
    </div>
    <br/>
  </div>
</details>

<details>
  <summary>01</summary>
  <div>
    <div>一</div>
    <br/>
    <details>
      <summary>02</summary>
      <div>二</div>
      <br/>
      <details>
        <summary>03</summary>
        <div>......</div>
      </details>
    </details>
  </div>
</details>


---

<br/>


## Markdown

### 标题

```
# 这里是 h1
## 这里是 h2
### 这里是 h3
#### 这里是 h4
##### 这里是 h5
###### 这里是 h6
```


### 段落

段落1111

段落2222


### 超链接

[2333](https://b23.tv/sUHITCZ)

```
[2333](https://b23.tv/sUHITCZ)
```

### 引用

> 这里是引用

```
> 这里是引用
```

### 空格
```
插入一个空格 (non-breaking space)    &nbsp;    或    &#160;     或      &#xA0;
插入两个空格 (en space)    &ensp;     或    &#8194;   或      &#x2002;
插入四个空格 (em space)    &emsp;    或    &#8195;   或      &#x2003;
插入细空格 (thin space)    &thinsp;   或     &#8201;  或      &#x2009;
```

### 字体样式

_斜体_

**粗体**

~~删除线~~

<u>下划线</u>

<center>居中</center>

<p align="center">align居中</p>

```
_斜体_
**粗体**
~~删除线~~
<u>下划线文本</u>
<center>居中</center>
<p align="center">align居中</p>
```

### 列表

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

### 分割线

---

<br/>

```
---
```

### 图片

![line](/img/000.png)

```md
![line](url)
```



### 代码行

这是一段文字`rm -rf /*`这是一段文字

```
这是一段文字`rm -rf /*`这是一段文字
```

### 代码块

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

### 表格

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


### html


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

### iframe

<iframe src="//music.163.com/outchain/player?type=2&id=4988618&auto=0&height=66" frameborder="0" width="100%" height="86px" ></iframe>

```html
<iframe src="//music.163.com/outchain/player?type=2&id=28445796&auto=0&height=66"
        frameborder="0"
        width="100%"
        height="86px"></iframe>
```