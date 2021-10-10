<template>
  <div>
    <canvas
      ref="snakeCanvas"
      width="400"
      height="400"
      style="background: Black; display: block; margin: 20px auto"
    ></canvas>
  </div>
</template>
<script>
export default {
  name: 'gluttonousSnake',
  data() {
    return {
      sn: [42, 41],
      dz: 43,
      fx: 1,
      n: null,
    }
  },
  mounted() {
    window.addEventListener('keydown', e => {
      this.fx =
        this.sn[1] - this.sn[0] ==
        (this.n = [-1, -20, 1, 20][e.keyCode - 37] || this.fx)
          ? this.fx
          : this.n
      e.preventDefault()
    })
    this.snakeRender()
  },
  methods: {
    snakeRender() {
      const ctx = this.$refs.snakeCanvas.getContext('2d')
      this.sn.unshift((this.n = this.sn[0] + this.fx))
      if (
        this.sn.indexOf(this.n, 1) > 0 ||
        this.n < 0 ||
        this.n > 399 ||
        (this.fx == 1 && this.n % 20 == 0) ||
        (this.fx == -1 && this.n % 20 == 19)
      )
        return alert('GAME OVER')
      this.draw(this.n, 'Lime', ctx)
      if (this.n == this.dz) {
        while (this.sn.indexOf((this.dz = ~~(Math.random() * 400))) >= 0);
        this.draw(this.dz, 'Yellow', ctx)
      } else this.draw(this.sn.pop(), 'Black', ctx)
      setTimeout(this.snakeRender, 300)
    },
    draw(t, c, ctx) {
      ctx.fillStyle = c
      ctx.fillRect((t % 20) * 20 + 1, ~~(t / 20) * 20 + 1, 18, 18)
    },
  },
}
</script>
