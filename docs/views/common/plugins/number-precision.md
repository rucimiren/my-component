---
title: number-precision
date: 2021-09-27 18:34:33
permalink: /pages/f504df/
categories:
  - 常用
  - 插件
  - number-precision
tags:
  - 插件
---

::: tip number-precision
number-precision是一个精确四则运算的库
:::

## 安装

```js
npm install number-precision --save
```

## 引入

```js
import NP from 'number-precision'
```

## Why

```js
// 为什么会这样，要怎么解决呢
0.1 + 0.2 = 0.30000000000000004
1.0 - 0.9 = 0.09999999999999998
0.105.toFixed(2) = 0.1 // not 0.11
```

## 方法

```js
NP.strip(num)         // strip a number to nearest right number
NP.plus(num1, num2, num3, ...)   // addition, num + num2 + num3, two numbers is required at least.
NP.minus(num1, num2, num3, ...)  // subtraction, num1 - num2 - num3
NP.times(num1, num2, num3, ...)  // multiplication, num1 * num2 * num3
NP.divide(num1, num2, num3, ...) // division, num1 / num2 / num3
NP.round(num, ratio)  // round a number based on ratio
```

## 使用

```js
import NP from 'number-precision'
NP.strip(0.09999999999999998); // = 0.1
NP.plus(0.1, 0.2);             // = 0.3, not 0.30000000000000004
NP.plus(2.3, 2.4);             // = 4.7, not 4.699999999999999
NP.minus(1.0, 0.9);            // = 0.1, not 0.09999999999999998
NP.times(3, 0.3);              // = 0.9, not 0.8999999999999999
NP.times(0.362, 100);          // = 36.2, not 36.199999999999996
NP.divide(1.21, 1.1);          // = 1.1, not 1.0999999999999999
NP.round(0.105, 2);            // = 0.11, not 0.1

//如果你想在转换为整数时消除XXX超出边界，结果可能不准确，在应用程序的开始使用这个来关闭边界检查 
NP.enableBoundaryChecking(false); // default param is true

```

