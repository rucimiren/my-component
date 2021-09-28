---
title: url-parse
date: 2021-09-27 19:38:13
permalink: /pages/495e88/
categories:
  - 常用
  - 插件
  - url-parse
tags:
  - 插件
---

::: tip url-parse
url-parse是一个轻量的处理url的库
:::

## 安装

```
npm install url-parse -S
```

## Usage


```js
'use strict';

var Url = require('url-parse');
```

要解析URL，只需使用需要的URL调用' URL '方法  转换成物体  

```js
var url = new Url('https://github.com/foo/bar');
```

`new`关键字是可选的，但它将为您节省额外的函数调用。 
<br>构造函数接受以下参数 :

- `url` (`String`): 表示绝对或相对URL的字符串.
- `baseURL` (`Object` | `String`): An object or string representing
  the base URL to use in case `url` is a relative URL. This argument is
  optional and defaults to [`location`](https://developer.mozilla.org/en-US/docs/Web/API/Location)
  in the browser.
- `parser` (`Boolean` | `Function`): This argument is optional and specifies
  how to parse the query string. By default it is `false` so the query string
  is not parsed. If you pass `true` the query string is parsed using the
  embedded `querystringify` module. If you pass a function the query string
  will be parsed using this function.

如上所述，我们也支持Node.js接口，所以你也可以这样使用 :

```js
'use strict';

var parse = require('url-parse')
  , url = parse('https://github.com/foo/bar', true);
```

返回的' url '实例包含以下属性  :

- `protocol`: The protocol scheme of the URL (e.g. `http:`).
- `slashes`: A boolean which indicates whether the `protocol` is followed by two
  forward slashes (`//`).
- `auth`: Authentication information portion (e.g. `username:password`).
- `username`: Username of basic authentication.
- `password`: Password of basic authentication.
- `host`: Host name with port number.
- `hostname`: Host name without port number.
- `port`: Optional port number.
- `pathname`: URL path.
- `query`: 包含查询字符串的已解析对象，除非解析设置为false  .
- `hash`: The "fragment" portion of the URL including the pound-sign (`#`).
- `href`: The full URL.
- `origin`: The origin of the URL.

Note that when `url-parse` is used in a browser environment, it will default to
using the browser's current window location as the base URL when parsing all
inputs. To parse an input independently of the browser's current URL (e.g. for
functionality parity with the library in a Node environment), pass an empty
location object as the second parameter:

```js
var parse = require('url-parse');
parse('hostname', {});
```

### Url.set(key, value)

A simple helper function to change parts of the URL and propagating it through
all properties. When you set a new `host` you want the same value to be applied
to `port` if has a different port number, `hostname` so it has a correct name
again and `href` so you have a complete URL.

```js
var parsed = parse('http://google.com/parse-things');

parsed.set('hostname', 'yahoo.com');
console.log(parsed.href); // http://yahoo.com/parse-things
```

It's aware of default ports so you cannot set a port 80 on an URL which has
`http` as protocol.

### Url.toString()

返回的`url`对象带有一个自定义的`toString`方法，在调用时再次生成完整的URL。该方法接受一个额外的函数，它将为您字符串化查询字符串。如果你不提供功能，我们将使用我们的默认方法

```js
var location = url.toString(); // http://example.com/whatever/?qs=32
```


