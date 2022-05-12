


---


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
![logo](image2.png ':size=WIDTHxHEIGHT')
<!-- 支持百分比缩放 -->
![logo](image2.png ':size=50%')
![logo](image2.png ':size=200x200')
![logo](image2.png ':size=100')

````
![logo](image2.png ':size=WIDTHxHEIGHT')
![logo](image2.png ':size=50%')
![logo](image2.png ':size=200x200')
![logo](image2.png ':size=100')

设置图片的 Class
```html
![logo](image2.png ':class=someCssClass')
```
设置图片的 ID
```html
![logo](image2.png ':id=someCssId')
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

---

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