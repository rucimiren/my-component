<template>
  <div>
    <canvas ref="verificationCode"></canvas>
    <button @click="render">刷新</button>
    <div>验证码为：{{ code }}</div>
  </div>
</template>

<script>
export default {
  name: 'verificationCode',

  data() {
    return {
      code: '', //创建的验证码
    }
  },

  mounted() {
    this.render()
  },

  methods: {
    render() {
      const canvas = this.$refs.verificationCode
      const ctx = canvas.getContext('2d')
      canvas.width = 120
      canvas.height = 30
      canvas.style.boxShadow = '2px 2px 5px #aaa'
      canvas.style.verticalAlign = 'middle'

      const text =
        '0123456789abcdefghijklmnopqrstuvwsyzABCDEFGHIGKLMNOPQRSTUVWSYZ'

      //设置4个内容 将canvas 平分成4分 然后让内容在1/4的空间旋转缩放
      //原理 ：每次都是位移旋转之后再回复原位
      this.code = ''
      for (let i = 0; i < 4; i++) {
        let txt = text[this.randNum(0, text.length - 1)]

        ctx.fillStyle = this.getRandColor(80, 150)
        ctx.font = this.randNum(16, 25) + "px '宋体'"
        ctx.textBaseline = 'top'
        let x = this.randNum(0, 10)

        let deg = this.randNum(-30, 30)

        ctx.translate(x + 30 * i, 0)
        ctx.rotate((Math.PI / 180) * deg)
        ctx.fillText(txt, 0, 0)
        ctx.rotate((Math.PI / 180) * -deg)
        ctx.translate(-(x + 30 * i), 0)
        this.code += txt + ''
      }

      /*干扰点*/
      for (let i = 0; i < 30; i++) {
        ctx.beginPath()
        ctx.arc(this.randNum(0, 120), this.randNum(0, 30), 1, 0, Math.PI * 2)
        ctx.fillStyle = this.getRandColor(150, 180)
        ctx.fill()
      }

      /*干扰线*/
      for (let i = 0; i < 4; i++) {
        ctx.beginPath()
        ctx.moveTo(this.randNum(0, 120), this.randNum(0, 30))
        ctx.lineTo(this.randNum(0, 120), this.randNum(0, 30))
        ctx.strokeStyle = this.getRandColor(150, 180)
        ctx.lineWidth = this.randNum(1, 2)
        ctx.stroke()
      }
    },
    // c获取随机颜色值
    getRandColor(min, max) {
      const R = this.randNum(min, max)
      const G = this.randNum(min, max)
      const B = this.randNum(min, max)

      return 'rgb(' + R + ',' + G + ',' + B + ')'
    },
    // 获取一个区间段的随机数(整数)
    randNum(min, max) {
      return parseInt(Math.random() * (max - min + 1) + min)
    },
  },
}
</script>

<style lang="less" scoped>
button {
  outline: none;
  border: none;
  width: 60px;
  height: 30px;
  background: #2c68ff;
  color: white;
  margin-left: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
