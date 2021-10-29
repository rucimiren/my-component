<template>
  <div class="animate06">
    <switchAutoplay :autoplay="autoplay" :swiper="swiper" />
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="v in imgList" :key="v.src" class="swiper-slide">
          <div
            class="slide-inner"
            :style="`background-image: url(${v.src});`"
          ></div>
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
      let interleaveOffset = 0.5 //视差比值

      let swiperOptions = {
        loop: true,
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        ...this.swiperOptions,
        on: {
          progress: function (swiper) {
            for (let i = 0; i < swiper.slides.length; i++) {
              let slideProgress = swiper.slides[i].progress
              let innerOffset = swiper.width * interleaveOffset
              let innerTranslate = slideProgress * innerOffset
              swiper.slides[i].querySelector('.slide-inner').style.transform =
                'translate3d(' + innerTranslate + 'px, 0, 0)'
            }
          },
          touchStart: function (swiper) {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = ''
            }
          },
          setTransition: function (swiper, speed) {
            for (let i = 0; i < swiper.slides.length; i++) {
              swiper.slides[i].style.transition = speed + 'ms'
              swiper.slides[i].querySelector('.slide-inner').style.transition =
                speed + 'ms'
            }
          },
        },
      }
      // eslint-disable-next-line
      this.swiper = new Swiper('.swiper-container', swiperOptions)
    },
  },
}
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .swiper-slide {
    text-align: center;
    background: #fff;
    overflow: hidden;

    .slide-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-size: cover;
      background-position: center;
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
      color: #fff;
    }
  }
}
</style>
