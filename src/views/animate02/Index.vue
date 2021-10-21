<template>
  <div>
    <back />
    <switchAutoplay :switchPlay.sync="autoplay" />
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
      autoplay: true,
      mySwiper: null,
    }
  },
  mounted() {
    this.swiper()
  },
  watch: {
    autoplay: {
      handler(val) {
        console.log(val, '000')
        if (val) {
          this.mySwiper && this.mySwiper.autoplay.start()
        } else {
          this.mySwiper.autoplay.stop()
        }
      },
      immediate: true,
    },
  },
  methods: {
    swiper() {
      // eslint-disable-next-line
      this.mySwiper = new Swiper('.swiper', {
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
