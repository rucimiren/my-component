<template>
  <div ref="serialAnimation" class="serial-animation" :style="containerStyle">
    <img alt="" :src="defaultSrc" />
  </div>
</template>

<script>
export default {
  name: 'serial-animation',
  props: {
    // 图片链接的公共部分
    publicPath: String,
    // 图片的数量
    count: Number,
    // 从第几张图片开始循环播放
    forStart: Number,
    format: {
      // 图片格式
      type: String,
      default: 'jpg',
    },
    // 播放的速度
    diffTime: {
      type: Number,
      default: 60,
    },
    // 图片宽度与图片高度的比
    aspectRatio: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      num: 0,
      lastTime: Date.now(),
      nowTime: null,
      requestId: null,
    }
  },
  computed: {
    defaultSrc() {
      return `${this.publicPath}0.${this.format}`
    },
    containerStyle() {
      return {
        paddingTop: `calc(100% / ${this.aspectRatio})`,
      }
    },
  },
  methods: {
    async switchImg() {
      const serialAnimation = this.$refs.serialAnimation
      if (!this.imgList) {
        this.loading = true
        this.imgList = await this.loadImg()
        this.loading = false
        return
      }
      this.num = this.num === this.count - 1 ? this.forStart : this.num
      const img = this.imgList[this.num++]
      serialAnimation.innerHTML = ''
      serialAnimation.appendChild(img)
    },
    loadImg() {
      let result = []
      for (let i = 0; i < this.count; i++) {
        result.push(
          new Promise(rs => {
            const img = new Image()
            img.onload = () => {
              rs(img)
            }
            const src = `${this.publicPath}${i}.${this.format}`
            img.src = src
          }),
        )
      }
      return Promise.all(result)
    },
    anim() {
      this.nowTime = Date.now()
      if (this.nowTime - this.lastTime >= this.diffTime) {
        this.lastTime = this.nowTime
        !this.loading && this.switchImg()
      }
      this.requestId = window.requestAnimationFrame(this.anim)
    },
  },
  mounted() {
    this.anim()
  },
  beforeDestroy() {
    window.cancelAnimationFrame(this.requestId)
  },
}
</script>
<style lang="less">
.serial-animation {
  position: relative;
  width: 100%;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>
