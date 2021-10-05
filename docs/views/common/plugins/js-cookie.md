---
title: js-cookie
date: 2021-09-28 16:23:48
permalink: /pages/4c8835/
categories:
  - common
  - plugins
  - js-cookie
tags:
  - plugins
---

::: tip js-cookie
js-cookie是一个简单的，轻量级的处理cookies的js API
:::

## 安装

```js
npm install js-cookie -S
```

## 引入

```js
import Cookies from 'js-cookie'
```

## 创建

```js
//创建简单的cookie
Cookies.set('name', 'value');
//创建有效期为7天的cookie
Cookies.set('name', 'value', { expires: 7 });
//为当前页创建有效期7天的cookie
Cookies.set('name', 'value', { expires: 7, path: '' });
```

## 取值

```js
Cookies.get('name'); // => 'value'
Cookies.get('nothing'); // => undefined
//获取所有cookie
Cookies.get(); // => { name: 'value' }
```

## 删除值

```js
Cookies.remove('name');

//如果值设置了路径，那么不能用简单的delete方法删除值，需要在delete时指定路径
Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // 删除失败
Cookies.remove('name', { path: '' }); // 删除成功
//注意，删除不存在的cookie不会报错也不会有返回
```

## 命名空间
如果担心不小心修改掉Cookies中的数据，可以用`noConflict`方法定义一个新的cookie。

```js
var Cookies2 = Cookies.noConflict();
Cookies2.set('name', 'value');
```

## json相关
- js-cookie允许你向cookie中存储json信息。
- 如果你通过set方法，传入Array或类似对象，而不是简单的string，那么js-cookie会将你传入的数据用JSON.stringify转换为string保存。

```js
Cookies.set('name', { foo: 'bar' });
Cookies.get('name'); // => '{"foo":"bar"}'
Cookies.get(); // => { name: '{"foo":"bar"}' }
```

- 如果你用getJSON方法获取cookie，那么js-cookie会用JSON.parse解析string并返回

```js
Cookies.getJSON('name'); // => { foo: 'bar' }
Cookies.getJSON(); // => { name: { foo: 'bar' } }
```

## set方法支持的属性

### expires
定义有效期。如果传入Number，那么单位为天，你也可以传入一个Date对象，表示有效期至Date指定时间。默认情况下cookie有效期截止至用户退出浏览器。

### path
tring，表示此cookie对哪个地址可见。默认为”/”。

### domain
string，表示此cookie对哪个域名可见。设置后cookie会对所有子域名可见。默认为对创建此cookie的域名和子域名可见。

### secure
true或false，表示cookie传输是否仅支持https。默认为不要求协议必须为https。

## 骚操作

::: note read
通过withConverter方法可以覆写默认的decode实现，并返回一个新的cookie实例。所有与decode有关的get操作，如Cookies.get()或Cookies.get(‘name’)都会先执行此方法中的代码。
:::

```js
document.cookie = 'escaped=%u5317';
document.cookie = 'default=%E5%8C%97';
var cookies = Cookies.withConverter(function (value, name) {
    if ( name === 'escaped' ) {
        return unescape(value);
    }
});
cookies.get('escaped'); // 北
cookies.get('default'); // 北
cookies.get(); // { escaped: '北', default: '北' }
```

::: note write
通过withConverter方法也可以覆写默认的encode实现，并返回一个新的cookie实例。
:::

```js
Cookies.withConverter({
    read: function (value, name) {
        // Read converter
    },
    write: function (value, name) {
        // Write converter
    }
});
```



