export default {
  data() {
    return {
      swiper: {}, // swiper 实例
      autoplay: true, // 自动播放
      animate04Autoplay: false, // 04页面自动播放单独配置
      // swiper 公共配置
      swiperOptions: {
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 50,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          waitForTransition: false,
        },
      },
    }
  },
}
