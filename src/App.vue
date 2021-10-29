<template>
  <div id="app">
    <!-- 测试一下同时提交gitee 和 githup -->
    <!-- 测试虚拟机mac同时提交gitee 和 githup -->
    <router-view :imgList="imgList"></router-view>
    <Audio v-if="imgList.length" />
  </div>
</template>
<script>
import Audio from '@/components/audio'
import { loadImg } from '@/utils/businessUtils'

export default {
  name: 'APP',
  components: {
    Audio,
  },
  data() {
    return {
      imgList: [],
    }
  },
  async created() {
    ;['#sakuraCanvas', '#fireworksCanvas'].forEach(v =>
      this.$isCanvas(v, 'none'),
    )

    const imgList = await loadImg({
      count: 18,
      publicPath: 'http://yaru.vip:8080/images/family/0/',
    })
    this.imgList.push(...imgList)
  },
}
</script>
<style lang="less"></style>
