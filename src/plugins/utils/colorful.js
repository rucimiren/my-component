;((window, document) => {
  function isBody() {
    if (!(document.body || window.document.body)) {
      setTimeout(isBody, 0)
    } else {
      render()
    }
  }

  function render() {
    const doc = document || window.document
    let canvas = doc.createElement('canvas')
    let ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = 'fixed'
    canvas.style.left = '0'
    canvas.style.top = '0'
    canvas.style.zIndex = '99999'
    canvas.style.pointerEvents = 'none'
    function Ball(x, y, r) {
      //传入小球的属性，x和y表示小球left和top的位置
      this.x = x
      this.y = y
      this.r = r
      //当增量的dx、dy都为0的时候再随机一次
      do {
        this.dx = parseInt(Math.random() * 18) - 9
        this.dy = parseInt(Math.random() * 18) - 9
      } while (this.dx == 0 || this.dy == 0)
      //随机颜色
      let colors = [
        '#f90',
        '#ff0',
        '#09c',
        '#c06',
        '#F99',
        '#9c3',
        '#6cc',
        '#9cc',
      ]
      this.color = colors[parseInt(Math.random() * colors.length)]
      arr.push(this) //将小球的实例放进数组
    }
    //渲染方法，画一个小球
    Ball.prototype.render = function () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
      ctx.fillStyle = this.color
      ctx.fill()
    }
    Ball.prototype.update = function () {
      this.x += this.dx
      this.y += this.dy
      this.r--
      if (this.r <= 0) {
        this.goDie()
      }
      if (this.x >= canvas.width - this.r || this.x <= this.r) {
        this.dx = -this.dx
      }
      if (this.y >= canvas.height - this.r || this.y <= this.r) {
        this.dy = -this.dy
      }
    }
    Ball.prototype.goDie = function () {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == this) {
          arr.splice(i, 1) //从数组第i项，删除一项
        }
      }
    }
    let arr = []
    setInterval(() => {
      //清屏
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      //渲染
      for (let i = 0; i < arr.length; i++) {
        arr[i].render()
        arr[i].update()
      }
    }, 20)
    doc.onmousemove = function (e) {
      new Ball(e.clientX, e.clientY, 20)
    }
    doc.ontouchmove = function (e) {
      console.log(e)
      new Ball(e.changedTouches[0].clientX, e.changedTouches[0].clientY, 20)
    }
    doc.body.appendChild(canvas)
  }
  isBody()
})(window, document)
