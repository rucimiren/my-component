---
title: dayjs
date: 2021-08-18 18:52:57
permalink: /pages/a726b1/
categories:
  - common
  - plugins
tags:
  - plugins
---
::: tip day.js
一个轻量的处理时间和日期的 JavaScript 库
:::

## 安装

```js
npm install dayjs -S
```

## 引入

```js
import dayjs from 'dayjs'
```

## 日期格式化

```js
dayjs().format();                                     // 2020-09-08T13:42:32+08:00
dayjs().format('YYYY-MM-DD');                         // 2020-09-08
dayjs().format('YYYY-MM-DD HH:mm:ss');                // 2020-09-08 13:47:12
dayjs(1318781876406).format('YYYY-MM-DD HH:mm:ss');   // 2011-10-17 00:17:56
```

## 获取或设置年份

```js
dayjs().year() //2019
dayjs().year(2000) //Sun, 28 May 2000 06:14:07 GMT
```

## 获取或设置月份。从 0 开始

```js
dayjs().month() //4 实际上5月
dayjs().month(0) //Mon, 28 Jan 2019 06:15:25 GMT
```

## 获取或设置日期。从 1 开始

```js
dayjs().date() //28 当天是2019年5月28日
dayjs().date(1) //Wed, 01 May 2019 06:17:04 GMT
```

## 获取或设置星期。从星期天 0 开始

```js
dayjs().day() //2 当天是星期二
dayjs().day(0) //Sun, 26 May 2019 06:18:13 GMT 被强行设置为上周日
```

## 获取或设置小时

```js
dayjs().hour()  //14 当时为下午2点
dayjs().hour(12) //Tue, 28 May 2019 04:21:30 GMT 不清楚
```

## 获取或设置分钟

```js
dayjs().minute() //22 
dayjs().minute(59) //Tue, 28 May 2019 06:59:50 GMT
```

## 获取或设置秒

```js
dayjs().second()
dayjs().second(1)
```

## 获取或设置毫秒

```js
dayjs().millisecond()
dayjs().millisecond(1)
```

## 获取从 Dayjs 对象中取到的信息 传入的单位 (unit) 对大小写不敏感

```js
dayjs().get('month') //4
```

## 设置时间

```js
dayjs().set('date', 1);
dayjs().set('month', 3); // 四月
dayjs().set('second', 30);
```

| 单位 | 缩写 | 描述  |
| :---:|:---:| :---:|
|date	 	|日期|
|day	|d	|星期几 (星期天 0, 星期六 6)|
|month|	M	|月 (一月 0, 十二月 11)|
|year	|y	|年|
|hour|	h	|时|
|minute|	m	|分|
|second|	s	|秒|
|millisecond	|ms|	毫秒|


## 获取两个 Dayjs 对象的时间差，默认毫秒

```js
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000
date1.diff(date2, 'month') // 7
date1.diff(date2, 'month', true) // 7.645161290322581
date1.diff(date2, 'day') // 233
```

## 增加时间并返回一个新的 Dayjs() 对象

```js
dayjs().add(value : Number, unit : String);
dayjs().add(7, 'day'); //在当前的基础上加7天
```

## 减少时间并返回一个新的 Dayjs() 对象

```js
dayjs().subtract(value : Number, unit : String);
dayjs().subtract(7, 'day'); //在当前基础上减少7天
```

## 返回当前时间的开头时间的 Dayjs() 对象，如月份的第一天

```js
dayjs().startOf(unit : String);
dayjs().startOf('month'); //Tue, 30 Apr 2019 16:00:00 GMT 
```

## 返回当前时间的末尾时间的 Dayjs() 对象，如月份的最后一天

```js
dayjs().endOf(unit : String);
dayjs().endOf('month'); //Fri, 31 May 2019 15:59:59 GMT
```

## 返回月份的天数

```js
dayjs().daysInMonth()
```

## 返回包含时间数值的数组

```js
dayjs().toArray()
```

## 返回包含时间数值的对象

```js
dayjs().toObject()
```

## 字符串

```js
dayjs().toString()
```

## 检测当前 Dayjs 对象是否是一个有效的时间

```js
dayjs().isValid()
```

## 检查一个 Dayjs 对象是否在另一个 Dayjs 对象时间之前

```js
dayjs().isBefore(Dayjs, unit? : String);
dayjs('2018-06-01').isBefore(dayjs('2018-06-02'))
dayjs().isBefore(dayjs()); // false
dayjs().isBefore(dayjs(), 'year'); // false
```

## 检查一个 Dayjs 对象是否和另一个 Dayjs 对象时间相同

```js
dayjs().isSame(Dayjs, unit? : String);
dayjs().isSame(dayjs()); // true
dayjs().isSame(dayjs(), 'year'); // true
```

## 检查一个 Dayjs 对象是否在另一个 Dayjs 对象时间之后

```js
dayjs().isAfter(Dayjs, unit? : String);
dayjs().isAfter(dayjs()); // false
dayjs().isAfter(dayjs(), 'year'); // false
```

## format参数

| 格式 | 输出 | 描述  |
| :---:|:---:| :---:|
| YY | 18 | 两位数的年份 |
| YYYY | 2018 | 四位数的年份 |
| M	| 1-12 | 月份，从 1 开始 |
| MM | 01-12 | 月份，两位数 |
| MMM | Jan-Dec | 简写的月份名称 |
| MMMM | January-December | 完整的月份名称 |
| D | 1-31 | 月份里的一天 |
| DD | 01-31 | 月份里的一天，两位数 |
|d|	0-6	|一周中的一天，星期天是 0|
|dd	|Su-Sa	|最简写的一周中一天的名称|
|ddd	|Sun-Sat	|简写的一周中一天的名称|
|dddd	|Sunday-Saturday	|一周中一天的名称|
|H	|0-23	|小时|
|HH	|00-23	|小时，两位数|
|h	|1-12	|小时, 12 小时制|
|hh	|01-12	|Hours, 12 小时制, 两位数|
|m	|0-59	|分钟|
|mm	|00-59	|分钟，两位数|
|s	|0-59|	秒|
|ss	|00-59	|秒 两位数|
|SSS	|000-999	|毫秒 三位数|
|Z	|+5:00	|UTC 的偏移量|
|ZZ	|+0500	|UTC 的偏移量，数字前面加上 0|
		
		
		