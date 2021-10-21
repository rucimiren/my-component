<template>
  <div class="switch__autoplay">
    <div v-if="!switchPlay" @click="switchAutoplay(true)">自动播放</div>
    <div v-else @click="switchAutoplay(false)">手动播放</div>
  </div>
</template>

<script>
export default {
  name: 'Switchautoplay',
  props: {
    switchPlay: Boolean,
  },
  methods: {
    switchAutoplay(show) {
      this.$emit('update:switchPlay', show)
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
