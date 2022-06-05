---
hide_title: true
sidebar_position: 998
title: Docusaurus
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


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