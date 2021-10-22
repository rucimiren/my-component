<template>
  <div class="switch__autoplay">
    <div v-if="!switchplay" @click="switchAutoplay">自动播放</div>
    <div v-else @click="switchAutoplay">手动播放</div>
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
      switchplay: '',
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
    background-image: -webkit-linear-gradient(bottom, red, #ff5f60, #f0c41b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
