<template>
  <div>
    <back />
    <switchAutoplay :autoplay="autoplay" :swiper="swiper" />
    <div class="swiper">
      <div class="swiper-wrapper">
        <div v-for="v in 19" :key="v" class="swiper-slide">
          <img :src="`http://yaru.vip:8080/images/family/${v}.jpg`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import back from '@/components/back.vue'
import switchAutoplay from '@/components/switchAutoplay.vue'

export default {
  name: 'Index',
  components: {
    back,
    switchAutoplay,
  },
  data() {
    return {
      swiper: {},
      autoplay: true,
    }
  },
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
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 50,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          waitForTransition: false,
        },
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
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
