<template>
  <div id="app">
    <!-- 测试一下同时提交gitee 和 githup -->
    <!-- 测试虚拟机mac同时提交gitee 和 githup -->
    <router-view></router-view>
  </div>
</template>
<script>
import { isFireworksCanvas } from '@/utils'
export default {
  mounted() {
    isFireworksCanvas('none')
  },
}
</script>
<style lang="less">
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #fff;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
</style>
