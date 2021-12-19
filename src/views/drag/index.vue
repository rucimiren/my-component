<template>
  <div class="xq-moves">
    <div class="moves" ref="moves">
      <div class="list overflow" ref="list">
        <div
          class="item display fdc jcc aic"
          v-for="(v, i) in movesList"
          :key="i"
          @touchmove="yidong(i, $event)"
          @touchend="yidongend(i)"
          @touchstart="yidongstart(i, $event)"
          ref="item"
        >
          <!-- 图片框33px -->
          <img :src="v.src" alt="" />
          <span>{{ v.text }}</span>
        </div>
        <!-- 动画的效果 -->
        <div class="after display fdc jcc aic" ref="after">
          <!-- 图片框33px -->
          <img src="" alt="" />
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'drag',
  props: {},
  data() {
    return {
      movesList: [
        {
          src: 'http://yaru.vip:8080/images/icon/ES6.png',
          text: 'es6',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/js.png',
          text: 'javaScript',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/git.png',
          text: 'git',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/ts.png',
          text: 'typeScript',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/vue.png',
          text: 'vue',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/more.png',
          text: 'more',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/other.png',
          text: 'other',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/react.svg',
          text: 'react',
        },
      ],
      movesList2: [
        {
          src: 'http://yaru.vip:8080/images/icon/ES6.png',
          text: 'es6',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/js.png',
          text: 'javaScript',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/git.png',
          text: 'git',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/ts.png',
          text: 'typeScript',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/vue.png',
          text: 'vue',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/more.png',
          text: 'more',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/other.png',
          text: 'other',
        },
        {
          src: 'http://yaru.vip:8080/images/icon/react.svg',
          text: 'react',
        },
      ],
      time: null,
      tuodong: {
        timer: null, // 定时器的开关
        startBoo: false, // 代表长按事件的开关
        index: '',
        boo: false, // 控制只有触发touchmove后，才会触发touchend里的代码
        arrI: [],
        opacityBoo: true,
      },
    }
  },
  methods: {
    yidongstart(i, e) {
      clearTimeout(this.tuodong.timer)
      this.tuodong.timer = setTimeout(() => {
        this.tuodong.startBoo = true
        this.handle(i, e)
      }, 500)
    },
    yidong(i, e) {
      e.preventDefault()
      if (this.tuodong.startBoo) {
        this.handle(i, e)
      }
    },
    // yidongend(i) {
    yidongend() {
      if (this.tuodong.boo) {
        this.$refs.item.forEach(v => {
          v.style.opacity = 1
        })
        let domEleAfter = this.$refs.after
        domEleAfter.style = ''
        this.movesList2 = JSON.parse(JSON.stringify(this.movesList))
        this.tuodong.boo = false
      }
      clearTimeout(this.tuodong.timer)
      this.tuodong.startBoo = false
      this.tuodong.opacityBoo = true
    },
    handle(i, e) {
      // 最外层dom
      let domEleMoves = this.$refs.moves
      // 父盒子
      let domEleList = this.$refs.list
      // 子盒子(需要移动的盒子)
      let domEleItem = this.$refs.item[i]
      // 左的padding
      let paddingX = parseInt(
        window.getComputedStyle(domEleMoves)['paddingLeft'],
      )
      // 子盒子自身的高度
      let childH = domEleItem.offsetHeight
      // 子盒子自身的宽度
      let childW = domEleItem.offsetWidth
      // 父盒子距离顶部的距离
      let parentY = domEleList.offsetTop
      // 行数
      let row = 2
      // 列数
      let col = 4
      // 手指在盒子中x轴的位置
      let touchX = e.touches[0].pageX - paddingX
      // 手指在盒子中Y轴的位置
      let touchY = e.touches[0].pageY - parentY
      // 动画及其样式开始
      let domEleAfter = this.$refs.after
      let cirX = touchX - domEleAfter.offsetWidth / 2
      let cirY = touchY - domEleAfter.offsetHeight / 2
      if (cirX >= childW * (col - 1)) {
        cirX = childW * (col - 1)
      } else if (cirX <= 0) {
        cirX = 0
      }
      if (cirY >= childH * (row - 1)) {
        cirY = childH * (row - 1)
      } else if (cirY <= 0) {
        cirY = 0
      }
      domEleAfter.style.opacity = 0.8
      domEleAfter.style.left = cirX + 'px'
      domEleAfter.style.top = cirY + 'px'
      domEleAfter.style.transition = 'all 0.06s'
      if (this.tuodong.opacityBoo) {
        domEleItem.style.opacity = 0
      }
      // 动画里的子元素
      let myImg = domEleAfter.firstElementChild
      let mySpan = domEleAfter.lastElementChild
      myImg.src = this.movesList2[i].src
      mySpan.innerHTML = this.movesList2[i].text
      // 动画小圆点及其样式结束
      // 换成坐标索引
      let indexX = parseInt(touchX / childW)
      let indexY = parseInt(touchY / childH)
      // 边界
      if (indexY >= row - 1) {
        indexY = row - 1
      } else if (indexY <= 0) {
        indexY = 0
      }
      if (indexX >= col - 1) {
        indexX = col - 1
      } else if (indexX <= 0) {
        indexX = 0
      }
      // 最终索引
      let indexEnd = ''
      if (indexY === 0) {
        indexEnd = indexX
      } else if (indexY === 1) {
        indexEnd = indexX + col
      }
      this.tuodong.index = indexEnd
      this.tuodong.boo = true
      clearTimeout(this.time)
      this.time = setTimeout(() => {
        if (this.tuodong.boo) {
          if (this.tuodong.opacityBoo) {
            this.tuodong.arrI = this.movesList.splice(i, 1)
          } else {
            let hh = this.movesList.findIndex(
              v => v.text === this.tuodong.arrI[0].text,
            )
            this.movesList.splice(hh, 1)
          }
          this.movesList.splice(this.tuodong.index, 0, ...this.tuodong.arrI)
          domEleItem.style.opacity = 1
          this.tuodong.opacityBoo = false
          this.$refs.item.forEach((v, i) => {
            if (i === indexEnd) {
              v.style.opacity = 0
            } else {
              v.style.opacity = 1
            }
          })
        }
      }, 50)
    },
  },
}
</script>
<style>
.xq-moves {
  width: 100vw;
  height: 100vh;
  padding-top: 46px;
  padding-bottom: 50px;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
}
/* 拖动部分样式开始 */
.moves {
  padding: 15px;
}
.list {
  background: #fff;
  /* !!! */
  height: calc(145rem / 37.5);
  border-radius: 0.10667rem;
  box-shadow: 0 0.21333rem 0.42667rem 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  position: relative;
}
.xq-moves .item {
  float: left;
  width: 25%;
  height: 50%;
}
.xq-moves .item img {
  width: 33px;
}
.xq-moves .item span {
  font-size: 14px;
  color: #6d7582;
}
.after {
  position: absolute;
  width: 25%;
  height: 50%;
  background-color: #cbdacb67;
  border-radius: 15px;
  z-index: 9999;
  opacity: 0;
  pointer-events: none;
}
.after img {
  width: 33px;
}
.after span {
  font-size: 14px;
  color: #6d7582;
}
.display {
  display: flex;
}
.jcc {
  justify-content: center;
}
.fdc {
  flex-direction: column;
}
.aic {
  align-items: center;
}
.overflow {
  overflow: hidden;
}
</style>
