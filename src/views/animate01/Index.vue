<template>
  <div>
    <back />
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
// import { loadImg } from '@/utils/businessUtils'

export default {
  name: 'Index',
  components: {
    back,
  },
  data() {
    return {
      imgList: [],
    }
  },
  async created() {
    /* this.imgList = await loadImg({
      publicPath: 'http://yaru.vip:8080/images/family/',
      count: 20,
    })
    console.log(this.imgList)
    let swiperWrapper = this.$refs.swiperWrapper
    this.imgList.forEach(v => {
      const swiperSilde = document.createElement('div')
      swiperSilde.className = 'swiper-slide'
      swiperSilde.appendChild(v)
      swiperWrapper.appendChild(swiperSilde)
    })
    this.swiper() */
  },
  mounted() {
    this.swiper()
  },
  methods: {
    swiper() {
      // eslint-disable-next-line
      new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 100,
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
.swiper-container {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -150px;
}

/deep/ .swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
