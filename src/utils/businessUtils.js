// 加载图片
export function loadImg({ count, publicPath, format = 'jpg' }) {
  let result = []
  for (let i = 0; i < count; i++) {
    result.push(
      new Promise(rs => {
        const img = new Image()
        img.onload = () => {
          rs(img)
        }
        const src = `${publicPath}${i}.${format}`
        img.src = src
      }),
    )
  }
  return Promise.all(result)
}

// 是否显示特效
export function isCanvas(element, show) {
  const ele = document.querySelector(element)
  if (ele) {
    ele.style.display = show
  } else {
    setTimeout(() => isCanvas(element, show), 0)
  }
}
