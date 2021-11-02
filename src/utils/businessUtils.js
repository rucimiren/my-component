// 加载图片
export function loadImg({
  count,
  publicPath,
  format = 'jpg',
  syncCount,
  syncPublicPath,
  syncFormat = 'jpg',
}) {
  let result = []
  if (typeof count === 'number') {
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
  }

  if (Array.isArray(count)) {
    for (let i = 0; i < count.length; i++) {
      result.push(
        new Promise(rs => {
          const img = new Image()
          img.onload = () => {
            rs(img)
          }
          const src = `${publicPath}${count[i]}.${format}`
          img.src = src
        }),
      )
    }
  }

  let syncResult = []
  if (syncCount) {
    if (typeof syncCount === 'number') {
      for (let i = 0; i < syncCount; i++) {
        syncResult.push(
          new Promise(rs => {
            const img = new Image()
            img.onload = () => {
              rs(img)
            }
            const src = `${syncPublicPath}${i}.${syncFormat}`
            img.src = src
          }),
        )
      }
    }
    if (Array.isArray(syncCount)) {
      for (let i = 0; i < syncCount.length; i++) {
        syncResult.push(
          new Promise(rs => {
            const img = new Image()
            img.onload = () => {
              rs(img)
            }
            const src = `${syncPublicPath}${syncCount[i]}.${syncFormat}`
            img.src = src
          }),
        )
      }
    }
  }

  return Promise.all([...result, ...syncResult])
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
