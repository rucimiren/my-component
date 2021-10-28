<template>
  <div id="app">
    <!-- 测试一下同时提交gitee 和 githup -->
    <!-- 测试虚拟机mac同时提交gitee 和 githup -->
    <router-view></router-view>
    <Audio />
  </div>
</template>
<script>
import Audio from '@/components/audio'

export default {
  name: 'APP',
  components: {
    Audio,
  },
}
</script>
<style lang="less"></style>
