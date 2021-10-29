<template>
  <div>
    <switchAutoplay :autoplay="autoplay" :swiper="swiper" />
    <div class="swiper">
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
  components: {
    switchAutoplay,
  },
  props: ['imgList'],
  mixins: [swiperMixins],
  mounted() {
    this.swiperRender()
  },
  methods: {
    swiperRender() {
      // eslint-disable-next-line
      this.swiper = new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        ...this.swiperOptions,
      })
      !this.autoplay && this.swiper.autoplay.stop()
    },
  },
}
</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  padding-top: 150px;
  padding-bottom: 50px;
  .swiper-slide {
    width: 300px;
    height: 400px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }
}
</style>
