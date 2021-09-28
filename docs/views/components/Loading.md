---
title: loading
date: 2021-08-18 16:54:23
permalink: /pages/11e3f5/
categories:
  - 组件
  - loading
tags:
  - 组件
---
## Loading组件

### 指令模式

<InitDemoBlock>
  <loading-demo/>
</InitDemoBlock>

<<< @/src/plugins/demo/loading/demo.vue#vue

### 服务模式

<InitDemoBlock>
  <loading-demo2/>
</InitDemoBlock>

<<< @/src/plugins/demo/loading/demo2.vue#vue



## Service Options

参数	| 说明	| 类型	| 默认值	| 可选值
:--- | :---| :--- | :--- | :---
target | Loading 需要覆盖的 DOM 节点。传入字符串，会将其作为参数传入 document.querySelector以获取到对应 DOM 节点 | string | body | -
loadingText | loading的加载文案 | string | - | -
loadingClass | loading的图标类名 | string | - | -
loadingColor | loading的颜色 | string | - | -
loadingBackground | 背景的颜色 | string | - | -
loadingCustomClass | 自定义类名 | string | - | -
fullscreen | 全屏loading | string | true | -