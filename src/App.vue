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

    /* const imgList = await loadImg({
      count: 18,
      publicPath: 'http://yaru.vip:8080/images/family/1/',
    }) */
    /* count: [
        'IkATn1',
        'IkAqAK',
        'IkAOhD',
        'IkAj9e',
        'IkA70x',
        'IkALtO',
        'IkAv1H',
        'IkAxcd',
        'IkAzjA',
        'IkECHP',
        'IkEk4S',
        'IkEpnI',
        'IkE9Bt',
        'IkEiAf',
        'IkEFN8',
        'IkEV3Q',
        'IkEZcj',
        'IkEE9g',
      ], */
    const imgList = await loadImg({
      count: [
        'IkKbfP',
        'IkKOl8',
        'IkKjOg',
        'IkKX6S',
        'IkKLSf',
        'IkKxmQ',
        'IkKzwj',
        'IkMSTs',
        'IkM9kn',
        'IkMCYq',
        'IkMFpV',
        'IkMPf0',
        'IkMklT',
      ],
      publicPath: 'https://z3.ax1x.com/2021/11/02/',
      syncPublicPath: 'http://yaru.vip:8080/images/family/1/',
      syncCount: ['13', '14', '15', '16', '17'],
    })
    this.imgList.push(...imgList)
  },
}
</script>
<style lang="less"></style>
