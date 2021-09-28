---
title: 介绍
date: 2021-08-04 20:06:47
permalink: /pages/a9023a/
categories:
  - 介绍
tags:
  - 介绍
---
# 目录
[[toc]]

## test
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji
:tada: :100: 😃 👺 🧑🏼‍🎤 🧑🏼‍🎤



## 自定义容器 默认主题
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::


::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

## 指令
同样地，也可以使用指令:
### input
```js
<span v-for="i in 3">{{ i }} </span>
```
### output
```js
1 2 3
```

## Escaping
默认情况下，块级 (block) 的代码块将会被自动包裹在 v-pre 中。如果你想要在内联 (inline) 的代码块或者普通文本中显示原始的大括号，或者一些 Vue 特定的语法，你需要使用自定义容器 v-pre 来包裹：
::: v-pre
`{{ This will be displayed as-is }}`
:::

## 使用组件
所有在 .vuepress/components 中找到的 *.vue 文件将会自动地被注册为全局的异步组件，如：
```js
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```
你可以直接使用这些组件在任意的 Markdown 文件中（组件名是通过文件名取到的）：
```js
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```
## Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>
### Props:
#### text - string
#### type - string, 可选值： "tip"|"warning"|"error"，默认值是： "tip"
#### vertical - string, 可选值： "top"|"middle"，默认值是： "top"


## $site
$site