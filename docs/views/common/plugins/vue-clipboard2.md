---
title: vue-clipboard2
date: 2021-09-26 16:54:40
permalink: /pages/ac0978/
categories:
  - views
  - common
  - plugins
tags:
  - 
---

---
::: tip vue-clipboard2
vue-clipboard2是前端能够调用剪切板的一个插件
:::

## 安装

```js
npm install --save vue-clipboard2
```

## 引入

```js
在main.js中引入
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
```

## 使用

### 使用指令的方式进行绑定

```vue
<template>
  <div class="container">
   {{qq}}
   <button type="button" 
           v-clipboard:copy="qq"
           v-clipboard:success="onCopy"
           v-clipboard:error="onError">复制QQ</button>
   </div>
</template>
 
<script>
export default {
  data() {
    return {
      qq:'123456 '
    }
  },
  methods: {
     onCopy: function (e) {
       alert('复制成功： ' + e.text)
     },
     onError: function (e) {
       alert('复制失败')
     }
   }
 }
</script> 
```

### 使用服务方式进行调用

```vue
<template>
  <div class="container">
    {{qq}}
    <button type="button" @click="doCopy">复制QQ</button>
  </div>
</template>

<script>
export default {
  data() {
     return {
       qq: '123456'
     }
   },
   methods: {
     doCopy: function () {
        this.$copyText(this.qq).then(function (e) {
           alert('复制成功')
           console.log(e)
        }, function (e) {
            alert('复制失败')
            console.log(e)
        })
      }
   }
}
</script> 
```
