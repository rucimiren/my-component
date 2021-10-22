<template>
  <div>
    <back />
    <switchAutoplay :autoplay="autoplay" :swiper="swiper" />
    <div class="swiper mySwiper2">
      <div class="swiper-wrapper">
        <div v-for="v in 17" :key="v" class="swiper-slide">
          <img :src="`http://yaru.vip:8080/images/family/0/${v}.jpg`" alt="" />
        </div>
      </div>
    </div>
    <div thumbsSlider="" class="swiper mySwiper">
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
      const swiper = new Swiper('.mySwiper', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      })
      // eslint-disable-next-line
      this.swiper = new Swiper('.mySwiper2', {
        spaceBetween: 10,
        thumbs: {
          swiper,
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
  height: 100%;
}

.swiper-slide {
  text-align: center;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.mySwiper2 {
  height: 80vh;
  width: 100%;
}

.mySwiper {
  height: 20vh;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
  overflow: hidden;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
