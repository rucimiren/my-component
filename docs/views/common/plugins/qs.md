---
title: qs
date: 2021-09-27 17:57:22
permalink: /pages/92c6e6/
categories:
  - views
  - common
  - plugins
tags:
  - 
---

::: tip qs
qs是一个流行的查询参数序列化和解析库
:::

## 安装

```js
npm install qs -S
```

## 引入

```js
import qs from 'qs'
```

## 使用
 
### qs.parse()

```js
const str = "username='admin'&password='admin'" 
console.log(qs.parse(str)) // Object { username: "admin", password: "admin" }
```

### qs.stringify()

```js
qs.stringify({username:'admin', password:'admin'})
//username=admin&password=admin
```

## qs序列化url为对象

```js
export const qsUrlToObj = url => {
  if(typeof url === 'string' && url.indexOf('?') > -1) {
    return qs.parse(url.substring(url.indexOf('?') + 1))
  }
  return {}
}
```

## qs 将对象序列化为url后缀模式字符串 &拼接

```js
export const qsStringfy = obj => {
  return qs.stringify(obj) // 只要不是对象，全部都返回的是空字符串
}
```

## qs 将字符串序列化为对象

```js
/**
 * 字符串序列化为对象
 * 允许在查询字符串中使用[]的方式创建嵌套的对象。例如，字符串'name1[name2]=val'可以转换为嵌套对象
 * @param {*} string 需要序列化的字符串
 * @param {*} delimiter 序列化时的分隔符，默认为 &，还支持其它以及正则表达式，比如 /[;,]/
 */
export const qsParse = (string, delimiter = '&') => {
  return qs.parse(string, delimiter)
}
```
