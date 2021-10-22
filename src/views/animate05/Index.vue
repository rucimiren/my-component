<template>
  <div class="animate05">
    <back />
    <switchAutoplay :autoplay="autoplay" :swiper="swiper" />
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div v-for="v in 17" :key="v" class="swiper-slide">
          <img :src="`http://yaru.vip:8080/images/family/0/${v}.jpg`" alt="" />
        </div>
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
      this.swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        effect: 'fade',
        ...this.swiperOptions,
      })
      !this.autoplay && this.swiper.autoplay.stop()
    },
  },
}
</script>

<style lang="less" scoped>
.animate05 {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
