<template>
  <div class="animate04">
    <switchAutoplay :autoplay="animate04Autoplay" :swiper="swiper" />
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div v-for="v in imgList" :key="v.src" class="swiper-slide">
          <img :src="v.src" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import switchAutoplay from '@/components/switchAutoplay.vue'
import swiperMixins from '@/mixins/swiperMixins'

export default {
  name: 'Index',
  props: ['imgList'],
  components: {
    switchAutoplay,
  },
  mixins: [swiperMixins],
  mounted() {
    this.swiperRender()
  },
  methods: {
    swiperRender() {
      // eslint-disable-next-line
      this.swiper = new Swiper('.mySwiper', {
        effect: 'cards',
        grabCursor: true,
        ...this.swiperOptions,
      })
      !this.animate04Autoplay && this.swiper.autoplay.stop()
    },
  },
}
</script>

<style lang="less" scoped>
.animate04 {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .swiper {
    width: 72%;
    height: 62%;

    img {
      border-radius: 10px;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
