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

/**
 *
 * publicPath: ''
 * format: 'jpg'
 * count: 18
 *
 *
 */
export function loadImgNew(list) {
  let allResult = []
  list.forEach(v => {
    let result = []
    if (typeof v.count === 'number') {
      for (let i = 0; i < v.count; i++) {
        result.push(
          new Promise(rs => {
            const img = new Image()
            img.onload = () => {
              rs(img)
            }
            const src = `${v.publicPath}${i}.${v.format}`
            img.src = src
          }),
        )
      }
    }

    if (Array.isArray(v.count)) {
      for (let i = 0; i < v.count.length; i++) {
        result.push(
          new Promise(rs => {
            const img = new Image()
            img.onload = () => {
              rs(img)
            }
            const src = `${v.publicPath}${v.count[i]}.${v.format}`
            img.src = src
          }),
        )
      }
    }

    allResult = [...allResult, ...result]
  })

  return Promise.all(allResult)
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
