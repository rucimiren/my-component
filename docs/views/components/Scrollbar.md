---
title: scrollbar
date: 2021-08-18 16:54:23
permalink: /pages/f9cca4/
categories:
  - components
tags:
  - components
---
## Scrollbar组件

### 代替浏览器默认的滚动条

<InitDemoBlock>
  <scrollbar-demo/>
</InitDemoBlock>

<<< @/src/plugins/demo/scrollbar/demo.vue#vue



## props

参数	| 说明	| 类型	| 默认值	| 可选值
:--- | :---| :--- | :--- | :---
wrapStyle | 组件的style | string | - | -
wrapClass | 组件的class | string | - | -
viewClass | 内容区域的class | string | - | -
viewStyle | 内容区域的style | string | - | -
native | 是否取消展示滚动条 | boolean | false | -
noresize | 如果 container 尺寸不会发生变化，最好设置它可以优化性能 | boolean | false | -