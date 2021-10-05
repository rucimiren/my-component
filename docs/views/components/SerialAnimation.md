---
title: serialAnimation
date: 2021-08-18 16:54:23
permalink: /pages/8afb55/
categories:
  - components
tags:
  - components
---
## 序列帧动画

<!-- ::: demo 序列帧动画
```vue
<SerialAnimation-Index/>
```
<<< @/src/views/SerialAnimation/Index.vue
::: -->

<InitDemoBlock>
  <serialAnimation-demo/>
</InitDemoBlock>

<<< @/src/plugins/demo/serialAnimation/demo.vue#vue



## Props

参数	| 说明	| 类型	| 默认值	| 
:--- | :---| :--- | :--- | :---
publicPath | 图片链接的公共部分 | string | -
format | 图片格式 | string | jpg
count | 图片的数量 | Number | -
diffTime | 播放的速度 | Number | 60
forStart | 从第几张图片开始循环播放 | Number | -
aspectRatio | 图片宽度与图片高度的比 | Number | 1

## 图片命名说明

图片完整链接组成 : publicPath + index + . + format-----
index : 根据count（图片数量）循环的索引

```js
for (let index = 0; index < count; index++) {
  src = `${publicPath}${index}.${format}`
}
```