<template>
  <div class="audio" ref="audio">
    <div class="audio__icon" @click="toggle">
      <i class="iconfont xq-icon-yinleliebiao"></i>
    </div>
    <div class="audio__music" ref="audioMusic">
      <div v-for="(v, i) in musicList" :key="i" @click="handler(i)">
        <span class="audio__music-name">{{ v.zh }}</span>
        <!--autoplay controls loop preload-->
        <audio
          :src="`http://yaru.vip:8080/music/${v.en}.mp3`"
          :ref="v.en"
          :autoplay="i === 0"
          preload
          loop
        ></audio>
      </div>
    </div>
  </div>
</template>

<script>
import { delay } from '@/utils'
export default {
  name: 'Audio',

  data() {
    return {
      audio: null,
      musicList: [
        {
          en: 'shiqisui',
          zh: '十七岁',
        },
        {
          en: 'zaiduchongxiangfeng',
          zh: '再度重相逢',
        },
        {
          en: 'tashanhe',
          zh: '踏山河',
        },
        {
          en: 'wozhizaihuni',
          zh: '我只在乎你',
        },
      ],
      domList: [],
      playIndex: 0, //正在播放歌曲的索引
      playStatus: 'start', // 正在播放歌曲的状态，start 为正在播放 pause是暂停状态
      show: false,
    }
  },

  mounted() {
    this.domList = this.musicList.map(v => {
      return this.$refs[v.en][0]
    })
    window.addEventListener('click', e => {
      const isContains = this.$refs.audio?.contains(e.target)
      !isContains &&
        (async () => {
          this.$refs.audioMusic.style.opacity = '0'
          await delay(400)
          this.$refs.audioMusic.style.display = 'none'
          this.show && (this.show = !this.show)
        })()
    })
  },

  methods: {
    async toggle() {
      this.show = !this.show
      const audioMusic = this.$refs.audioMusic
      if (this.show) {
        audioMusic.style.display = 'block'
        await delay(0)
        audioMusic.style.opacity = '1'
      } else {
        audioMusic.style.opacity = '0'
        await delay(400)
        audioMusic.style.display = 'none'
      }
    },
    handler(i) {
      if (i === this.playIndex) {
        if (this.playStatus === 'start') {
          this.playStatus = 'pause'
          this.domList[i].pause()
        } else {
          this.playStatus = 'start'
          this.domList[i].play()
        }
        return
      }
      this.domList[this.playIndex].currentTime = 0
      this.domList[this.playIndex].pause()
      this.playIndex = i
      this.playStatus = 'start'
      this.domList[i].play()
    },
  },
}
</script>

<style lang="less" scoped>
.audio {
  position: fixed;
  right: 40px;
  bottom: 20px;
  z-index: 9999;
  &__icon {
    i {
      font-size: 30px;
      background-image: linear-gradient(
        to right,
        rgb(238, 9, 121),
        rgb(255, 106, 0)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__music {
    opacity: 0;
    position: absolute;
    top: -93px;
    right: 40px;
    overflow: hidden;
    background: rgba(44, 104, 255, 0.5);
    padding: 10px;
    border-radius: 8px;
    transition: all 0.4s linear;

    &-name {
      font-size: 24px;
      white-space: nowrap;
      background-image: linear-gradient(
        to right,
        rgb(238, 9, 121),
        rgb(255, 106, 0)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
