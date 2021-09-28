;((window, document) => {
  function isBody() {
    if (!(document.body || window.document.body)) {
      setTimeout(isBody, 0)
    } else {
      render()
    }
  }

  function render() {
    let num = 20
    let imgSrc = 'http://yaru.vip:8080/images/icon/sakura.png'
    const doc = document || window.document
    let canvas = doc.createElement('canvas')
    let cxt = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = 'fixed'
    canvas.style.left = '0'
    canvas.style.top = '0'
    canvas.style.zIndex = '999999'
    canvas.style.pointerEvents = 'none'

    class Sakura {
      constructor(x, y, s, r, fn, that) {
        this.x = x
        this.y = y
        this.s = s
        this.r = r
        this.fn = fn
        this.that = that
      }
      draw(cxt) {
        const img = new Image()
        img.src = imgSrc //樱花效果图路径
        cxt.save()
        cxt.translate(this.x, this.y)
        cxt.rotate(this.r)
        cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
        cxt.restore()
      }
      update() {
        this.x = this.fn.x(this.x, this.y)
        this.y = this.fn.y(this.y, this.y)
        this.r = this.fn.r(this.r)
        if (
          this.x > window.innerWidth ||
          this.x < 0 ||
          this.y > window.innerHeight ||
          this.y < 0
        ) {
          this.r = this.that.getRandom('fnr')
          if (Math.random() > 0.4) {
            this.x = this.that.getRandom('x')
            this.y = 0
            this.s = this.that.getRandom('s')
            this.r = this.that.getRandom('r')
          } else {
            this.x = window.innerWidth
            this.y = this.that.getRandom('y')
            this.s = this.that.getRandom('s')
            this.r = this.that.getRandom('r')
          }
        }
      }
    }
    class SakuraList {
      constructor() {
        this.list = []
      }
      push(sakura) {
        this.list.push(sakura)
      }
      update() {
        for (var i = 0, len = this.list.length; i < len; i++) {
          this.list[i].update()
        }
      }
      draw(cxt) {
        for (var i = 0, len = this.list.length; i < len; i++) {
          this.list[i].draw(cxt)
        }
      }
      get(i) {
        return this.list[i]
      }
      size() {
        return this.list.length
      }
    }

    window.getRandom = function (option) {
      var ret, random
      switch (option) {
        case 'x':
          ret = Math.random() * window.innerWidth
          break
        case 'y':
          ret = Math.random() * window.innerHeight
          break
        case 's':
          ret = Math.random()
          break
        case 'r':
          ret = Math.random() * 6
          break
        case 'fnx':
          random = -0.5 + Math.random() * 1
          ret = function (x) {
            return x + 0.5 * random - 1.7
          }
          break
        case 'fny':
          random = 1.5 + Math.random() * 0.7
          ret = function (x, y) {
            return y + random
          }
          break
        case 'fnr':
          random = Math.random() * 0.03
          ret = function (r) {
            return r + random
          }
          break
      }
      return ret
    }

    function startSakura() {
      let requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame
      var sakuraList = new SakuraList()
      for (var i = 0; i < num; i++) {
        let sakura,
          randomX,
          randomY,
          randomS,
          randomR,
          randomFnx,
          randomFny,
          randomFnR
        randomX = window.getRandom('x')
        randomY = window.getRandom('y')
        randomR = window.getRandom('r')
        randomS = window.getRandom('s')
        randomFnx = window.getRandom('fnx')
        randomFny = window.getRandom('fny')
        randomFnR = window.getRandom('fnr')
        sakura = new Sakura(
          randomX,
          randomY,
          randomS,
          randomR,
          {
            x: randomFnx,
            y: randomFny,
            r: randomFnR,
          },
          window,
        )
        sakura.draw(cxt)
        sakuraList.push(sakura)
      }
      window.stop = requestAnimationFrame(function fn() {
        cxt.clearRect(0, 0, canvas.width, canvas.height)
        sakuraList.update()
        sakuraList.draw(cxt)
        window.stop = requestAnimationFrame(fn)
      })
    }
    startSakura()
    doc.body.appendChild(canvas)
  }

  isBody()
})(window, document)
