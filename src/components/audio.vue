<template>
  <div class="audio">
    <!--autoplay controls loop preload-->
    <audio
      src="http://yaru.vip:8080/music/%E5%8D%81%E4%B8%83%E5%B2%81.mp3"
      ref="audio"
      autoplay
      preload
      loop
      controls
    ></audio>
    <button @click="start">开始</button>
    <button @click="pause">暂停</button>
    <button @click="stop">停止</button>
  </div>
</template>

<script>
export default {
  name: 'Audio',

  data() {
    return {
      audio: null,
    }
  },

  mounted() {
    this.audio = this.$refs.audio
  },

  methods: {
    start() {
      this.audio.play()
    },
    pause() {
      this.audio.pause()
    },
    stop() {
      this.audio.currentTime = 0
      this.audio.pause()
    },
  },
}
</script>

<style lang="less" scoped>
.audio {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
