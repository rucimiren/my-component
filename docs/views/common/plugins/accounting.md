---
title: accounting
date: 2021-09-28 16:53:27
permalink: /pages/894618/
categories:
  - 常用
  - 插件
  - accounting
tags:
  - 插件
---

::: tip accounting 
可以将货币进行转换，将数值转换为货币，运算非常精确，可以设置任何一个货币符号及其他功能。
::: right
<div style='margin-top:10px;'></div>

[`官方手册`](http://openexchangerates.github.io/accounting.js/)
[`案例效果`](http://cheng.lolku.cn/html/accounting.html)
:::

## 安装

```js
npm install accounting -S
```

## 引入

```js
import accounting from 'accounting'
```

## formatMoney() 方法

::: theorem 使用
formatMoney(参数一，参数二,参数三,参数四,参数五)
:::

| 参数 | 参数说明 | 
| :---:|:---:| 
| 参数一|	货币值（多个值是可以放在数组内）|
|	参数二|	货币的符号|	
|	参数三|	小数点后面尾数多少位(自动四舍五入帮你算好)|	
|	参数四|	改变分隔符号，比如满3个单位就的使用,逗号来分隔|	
|	参数五|	改变小数点的符号|

```js
// 参数一：货币值
console.log(accounting.formatMoney(12345678)); // 输出结果：$12345678

// 参数二： 货币的符号（默认是美金符号）
console.log(accounting.formatMoney(12345678,'￥'));

// 参数三：小数点后面尾数多少位(自动四舍五入帮你算好)
console.log(accounting.formatMoney(12345.678,'¥',2)) // ¥12345.68

// 参数四:改变分隔符号，比如满3个单位就的使用,逗号来分隔；
console.log(accounting.formatMoney(12345.678,'¥',2,'▲')) // 

// 下面参数五：改变小数点的符号
console.log(accounting.formatMoney(-12345.678,'¥',2,'▲','★')); // ¥12▲345★68
```

::: theorem 简写
看着这么多传参，太臃肿，1、如果我只要是小数点符号，改变了，还要一个一个值传进去，是不是不优化啊。2、再加上看的不直观，不能一眼就能看出传的什么东西，那么官方就提供了一个非常有效传参方式
将第二个参数用json对象方式传值
:::

```js
// 语法：
formatMoney(参数一，{
    symbol : "$", // 货币符号为$
    decimal : ".", // 小数点（位数）符号为.
    thousand: ",", // 货币分隔符号
    precision : 2, // 货币后面的小数点位数为2（就是说，精确到后面两位数）
    format: "%s%v" // 货币符号位置（简写）
});

// 参数一还是数值。
```

### 更改一些特殊需求
- 更改负数符号
- 将货币设置位置
- 当货币值为0时，设置字符串

```js
// 更改负数符号改成其他符号。
accounting.formatMoney(-5318008, {
    symbol: "￥",
    precision: 0,
    thousand: "·",
    format: {
        neg : "%s (%v)"
    }
});

// 将货币设置位置。
accounting.formatMoney(5318008, {
    symbol: "￥",
    precision: 0,
    thousand: "·",
    format: {
        pos : "%v %s" // 如果值为： "%s %v" 的话，则默认的在左边
    }
    // 简写（直接可以使用），format:"%v %s"
});

// 当数字为0时，设置字符串
accounting.formatMoney(0, { // 这里设置为0。
    symbol: "￥",
    precision: 0,
    thousand: "·",
    format: {
        zero: "%s  没有钱" // 如果值为： "%s %v" 的话，则默认的在左边
    }
    // 简写（直接可以使用），format:"%v %s"
});
```

## formatColumn()方法

formatColumn将多个数值进行一次性转换。此处还有些东西，不知道是神马？？

| 参数 | 参数说明 | 
| :---:|:---:| 
| 参数一|	货币金额 |
|	参数二|	精确的小数点尾数|	
|	参数三|	改变分隔符号，比如满3个单位就的使用,逗号来分隔|	
|	参数四|	改变小数点的符号|	

参数和上面差不多

```js
// 参数一 :货币金额
console.log(accounting.formatNumber(5318008));

// 参数二 :精确的小数点尾数
console.log(accounting.formatNumber(9876543.21, 3));

// 参数三： 改变分隔符号，比如满3个单位就的使用,逗号来分隔；
console.log(accounting.formatNumber(9876543.21, 3, "@");

// 参数四 | 改变小数点的符号
console.log(accounting.formatNumber(9876543.21, 3, "@",'★'));
```

## toFixed()

::: theorem  toFixed
将小数点进行舍入，比如四舍五入。大家都知道，满十进一的十进制，满60进一（表），对于javascript来说，运算也有不精确度的地方。
:::

| 参数 | 参数说明 | 
| :---:|:---:| 
| 参数一|	货币的数字（小数点）|
|	参数二|	省略的位数|	

```js
// 下面，使用原生javascript的 toFixed() 方法来运算做比较。
console.log((0.615).toFixed(2)); // 0.61

// 使用toFixed来计算浮点数，和上面进行比较
console.log(accounting.toFixed(0.615, 2)); // 0.62
```

## unformat()

::: theorem  unformat
将字符串格式格式货币，去除（删除）货币的格式，返回数字。他只认识一些常用的符号，其他的特殊符号，都是不认识的。
:::

```js
console.log(accounting.unformat("GBP5,318,008.00")); // 5318008
console.log(accounting.unformat("$12,345,678.00")); // 12345678
console.log(accounting.unformat("9@876@543★210")); // 9876543210
```

## accounting.settings

::: theorem  settings
配置一些常用的货币符号、货币的分隔符号、货币的精确等等
:::

```js
accounting.settings = {
    currency: {
        symbol : "$",   // 配置：货币符号为$
        format: "%s%v", // 配置：货币符号的位置
        decimal : ".",  // 配置：小数点
        thousand: ",",  // 配置：分隔符（货币分隔符）
        precision : 2   // 配置：分隔位数
    },
    number: {
        precision : 0,  // 精确的数字
        thousand: ",", // 分隔
        decimal : "." // 小数位数尾号符号
    }
}
```