<template>
  <div>
    <back />
    <switchAutoplay :autoplay="autoplay" :swiper="swiper" />
    <div class="swiper-container">
      <div class="swiper-wrapper" ref="swiperWrapper">
        <div
          v-for="v in 19"
          :key="v"
          class="swiper-slide"
          :style="`background-image: url(http://yaru.vip:8080/images/family/${v}.jpg);`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import back from '@/components/back.vue'
import switchAutoplay from '@/components/switchAutoplay.vue'
import swiperMixins from '@/mixins/swiperMixins'

export default {
  name: 'Index',
  components: {
    back,
    switchAutoplay,
  },
  mixins: [swiperMixins],
  mounted() {
    this.swiperRender()
  },
  methods: {
    swiperRender() {
      // eslint-disable-next-line
      this.swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        ...this.swiperOptions,
      })
      !this.autoplay && this.swiper.autoplay.stop()
    },
  },
}
</script>

<style lang="less" scoped>
.swiper-container {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
}
</style>
