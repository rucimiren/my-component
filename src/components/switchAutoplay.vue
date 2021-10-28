<template>
  <div class="switch__autoplay">
    <div @click="switchAutoplay">
      {{ switchplay ? '手动播放' : '自动播放' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Switchautoplay',
  props: {
    swiper: Object,
    autoplay: Boolean,
  },
  data() {
    return {
      switchplay: true,
    }
  },
  watch: {
    autoplay: {
      handler(val) {
        this.switchplay = val
      },
      immediate: true,
    },
  },
  methods: {
    switchAutoplay() {
      this.switchplay = !this.switchplay
      if (this.switchplay) this.swiper.autoplay.start()
      else this.swiper.autoplay.stop()
    },
  },
}
</script>

<style lang="less" scoped>
.switch__autoplay {
  user-select: none;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 9999999;
  div {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 0px;
    cursor: pointer;
    // background-image: -webkit-linear-gradient(bottom, red, #ff5f60, #f0c41b);
    background-image: linear-gradient(
      to right,
      rgb(238, 9, 121),
      rgb(255, 106, 0)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
