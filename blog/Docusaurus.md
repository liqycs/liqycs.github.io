<!-- ---
slug: Daily 3/25/2022
title: Daily 3/25/2022
tags: [Demo, Getting started]
--- -->


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 

# 0 

[Github:emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)


# 1

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

# 2

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

# 3

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>
</Tabs>

<Tabs groupId="operating-systems">
  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>
  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>
</Tabs>

# 4

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

# 5

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


# 6

:::tip Use tabs in admonitions


<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::


# 7

```
npx create-docusaurus@latest my-website classic
/
npx create-docusaurus@latest my-website classic --typescript
```


```
npx create-docusaurus@latest --help
```


```
cd my-website
```

```
npm run start
/
npm start
```


```
npm run build
```
