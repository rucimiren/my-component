<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          style="
            background-image: url(http://yaru.vip:8080/images/family/1.jpg);
          "
        ></div>
        <div
          class="swiper-slide"
          style="
            background-image: url(http://yaru.vip:8080/images/family/2.jpg);
          "
        ></div>
        <div
          class="swiper-slide"
          style="
            background-image: url(http://yaru.vip:8080/images/family/3.jpg);
          "
        ></div>
        <div
          class="swiper-slide"
          style="
            background-image: url(http://yaru.vip:8080/images/family/4.jpg);
          "
        ></div>
        <div
          class="swiper-slide"
          style="
            background-image: url(http://yaru.vip:8080/images/family/5.jpg);
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {}
  },
  mounted() {
    // eslint-disable-next-line
    var swiper = new Swiper('.swiper-container', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      loop: true,
      autoplay: {
        delay: 1000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        waitForTransition: false,
      },
    })
  },
  methods: {},
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

.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>
<style>
body {
  background: rgba(0, 0, 0, 0.6);
}
</style>
