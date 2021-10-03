<template>
  <div class="drawing__canvas">
    <canvas ref="drawingCanvas"></canvas>
    <div class="tools">
      <button type="button" class="btn" @click="empty">清空画板</button>
      <span class="ml-30">线条宽度</span>
      <select ref="sel">
        <option v-for="v in 10" :value="v" :key="v">{{ v }}</option>
      </select>
      <span class="ml-30">颜色</span>
      <input type="color" ref="col" />
    </div>
  </div>
</template>

<script>
function offset(ele) {
  let left = 0,
    top = 0
  function fn(e) {
    if (e) {
      if (e.offsetParent === document.body) {
        left += e.offsetLeft
        top += e.offsetTop
      } else {
        left += e.offsetLeft
        top += e.offsetTop
        fn(ele.offsetParent)
      }
    }
  }
  fn(ele)
  return {
    left,
    top,
  }
}

export default {
  name: 'drawing',

  data() {
    return {
      canvas: null,
      ctx: null,
    }
  },

  async mounted() {
    this.canvas = this.$refs.drawingCanvas
    this.ctx = this.canvas.getContext('2d')
    this.canvas.onmousedown = this.canvasStart
    this.canvas.touchstart = this.canvasStart
    this.canvas.onmouseup = this.canvasEnd
    this.canvas.touchend = this.canvasEnd
  },

  methods: {
    canvasStart(e) {
      let event = e || window.event
      let x = event.pageX - offset(this.canvas).left
      let y = event.pageY - offset(this.canvas).top
      this.ctx.beginPath()
      this.ctx.moveTo(x, y)
      this.ctx.lineWidth = this.$refs.sel.value
      this.canvas.onmousemove = this.canvasMove
      this.canvas.touchmove = this.canvasMove
    },
    canvasMove(e) {
      let event = e || window.event
      let mx = event.pageX - offset(this.canvas).left
      let my = event.pageY - offset(this.canvas).top
      this.ctx.lineTo(mx, my)
      this.ctx.strokeStyle = this.$refs.col.value
      this.ctx.stroke()
    },
    canvasEnd() {
      this.canvas.onmousemove = null
      this.canvas.touchmove = null
    },
    empty() {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    },
  },
}
</script>

<style lang="less" scoped>
.drawing__canvas {
  border: 1px solid black;
  box-shadow: 4px 4px 4px grey;
}
canvas {
  width: 100%;
  height: 100%;
  border-bottom: 2px solid red;
}
.tools {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
}
.btn {
  background: #2c68ff;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 4px 8px;
}
.ml-30 {
  margin-left: 30px;
}
</style>
