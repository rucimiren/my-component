<template>
  <div>
    <button @click="empty">重玩</button>
    <canvas
      ref="gobangCanvas"
      width="600"
      height="600"
      @click="render"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: 'gobang',

  data() {
    return {
      arr: [],
      mrow: 15, //棋盘行数
      mcol: 15, //棋盘列数
      len: 40, //棋盘的每个小格的宽高
      chessXY: 36, //棋子的大小
      boo: true, // 控制黑白棋的切换
      black: new Image(),
      white: new Image(),
      canvas: null,
      ctx: null,
      left: 0, // 棋盘距离页面左侧的距离
      top: 0, // 棋盘距离页面顶部的距离
    }
  },

  mounted() {
    this.init()
    this.offset(this.canvas)
    window.addEventListener('resize', () => {
      this.left = 0
      this.top = 0
      this.offset(this.canvas)
      // console.log(this.left, this.top)
    })
  },

  methods: {
    offset(ele) {
      if (ele.offsetParent === document.body) {
        this.left += ele.offsetLeft
        this.top += ele.offsetTop
      } else {
        this.left += ele.offsetLeft
        this.top += ele.offsetTop
        this.offset(ele.offsetParent)
      }
    },
    init() {
      this.canvas = this.$refs.gobangCanvas
      this.ctx = this.canvas.getContext('2d')
      this.black.src = 'http://yaru.vip:8080/images/icon/black.png'
      this.white.src = 'http://yaru.vip:8080/images/icon/white.png'
      for (let i = 0; i <= this.mrow; i++) {
        this.arr[i] = new Array()
        for (let j = 0; j <= this.mcol; j++) {
          //让数组内所有的初始值都为零
          this.arr[i][j] = 0
        }
      }
      //构建棋盘
      this.ctx.strokeStyle = '#fff' //棋盘线的颜色
      for (let i = 0; i <= this.mrow; i++) {
        for (let j = 0; j <= this.mcol; j++) {
          this.ctx.strokeRect(i * this.len, j * this.len, this.len, this.len)
        }
      }
    },
    render(event) {
      let cliX = event.pageX - this.left
      let cliY = event.pageY - this.top
      // /*console.log(cliX,cliY);*/
      //转换成坐标
      let x = Math.round(cliX / this.len)
      let y = Math.round(cliY / this.len)
      // console.log(x, y)

      if (this.arr[x][y] != 0) {
        alert('你压到我了')
        return
      }

      if (this.boo) {
        // console.log(this.ctx)
        this.ctx.drawImage(
          this.black,
          x * this.len - this.len / 2,
          y * this.len - this.len / 2,
          this.chessXY,
          this.chessXY,
        ) //把黑子放到棋盘上
        this.arr[x][y] = 1 //代表黑子
        this.boo = false //切换白子
        this.estimate(1, x, y)
      } else {
        this.ctx.drawImage(
          this.white,
          x * this.len - this.len / 2,
          y * this.len - this.len / 2,
          this.chessXY,
          this.chessXY,
        ) //把白子放到棋盘上
        this.arr[x][y] = 2 //代表白子
        this.boo = true //切换黑子
        this.estimate(2, x, y)
      }
    },
    estimate(target, row, col) {
      //保存一份传进来的行列坐标
      let myRow = row
      let myCol = col
      let num = 1 //存储相同棋子的数量

      //水平方向判断
      while (row - 1 >= 0 && this.arr[row - 1][col] == target) {
        num++
        row--
      }
      row = myRow
      col = myCol
      while (row + 1 <= this.mrow && this.arr[row + 1][col] == target) {
        row++
        num++
      }
      this.ying(num, target, '水平方向五子连珠')

      //垂直方向判断
      row = myRow //回归初始值
      col = myCol
      num = 1

      while (col - 1 >= 0 && this.arr[row][col - 1] == target) {
        col--
        num++
      }
      row = myRow
      col = myCol
      while (col + 1 <= this.mcol && this.arr[row][col + 1] == target) {
        col++
        num++
      }
      this.ying(num, target, '垂直方向五子连珠')

      //左下,右上判断
      row = myRow //回归初始值
      col = myCol
      num = 1
      while (
        row - 1 >= 0 &&
        col + 1 <= this.mcol &&
        this.arr[row - 1][col + 1] == target
      ) {
        row--
        col++
        num++
      }
      row = myRow
      col = myCol
      while (
        row + 1 <= this.mrow &&
        col - 1 >= 0 &&
        this.arr[row + 1][col - 1] == target
      ) {
        row++
        col--
        num++
      }
      this.ying(num, target, '左下右上五子连珠')

      //左上,右下判断
      row = myRow //回归初始值
      col = myCol
      num = 1
      while (
        row - 1 >= 0 &&
        col - 1 >= 0 &&
        this.arr[row - 1][col - 1] == target
      ) {
        row--
        col--
        num++
      }
      row = myRow
      col = myCol
      while (
        row + 1 <= this.mrow &&
        col + 1 <= this.mcol &&
        this.arr[row + 1][col + 1] == target
      ) {
        row++
        col++
        num++
      }
      this.ying(num, target, '左上右下五子连珠')
    },
    ying(num, target, str) {
      if (num >= 5) {
        if (target == 1) {
          alert('恭喜黑方获得胜利' + ' ' + str)
          return
        } else {
          alert('恭喜白方获得胜利' + ' ' + str)
          return
        }
      }
    },
    empty() {
      this.ctx.clearRect(0, 0, 600, 600) //清空画布
      //清除数组
      for (let i = 0; i <= this.mrow; i++) {
        for (let j = 0; j <= this.mcol; j++) {
          //让数组内所有的初始值都为零
          this.arr[i][j] = 0
        }
      }
      //重新绘制棋盘
      this.ctx.strokeStyle = '#fff' //棋盘线的颜色
      for (let i = 0; i <= this.mrow; i++) {
        for (let j = 0; j <= this.mcol; j++) {
          this.ctx.strokeRect(i * this.len, j * this.len, this.len, this.len)
        }
      }
    },
  },
}
</script>

<style lang="less" scoped>
canvas {
  background-color: sandybrown;
  border: 1px solid #ccc;
}
button {
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  background-color: orange;
  color: white;
  font-size: 16px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 900;
  vertical-align: top;
}
</style>
