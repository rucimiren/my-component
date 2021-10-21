import dayjs from 'dayjs'
import numbers from 'number-precision'

// 延时 delay(3000)
export const delay = async t => new Promise(r => setTimeout(r, t))

// 格式化日期
export function formatDate(value, format = 'YYYY-MM-DD') {
  if (!value) return ''
  return dayjs(value).format(format)
}

/*
金额格式化
*/
export function formatCurrency(s, bit = 2) {
  // if (!s) return '0.00'
  s = String(s)
  if (!s.replace(/^\s+|\s+$/g, '')) return '0.00'
  let bitTxt = ''
  if (!/^(-?\d+)(\.\d*)?$/.test(s)) {
    return '-'
  }

  let sign = ''
  s = Number(s)
  if (s < 0) {
    sign = '-'
  } else {
    sign = ''
  }
  s = Math.abs(s)
  if (/^\d+$/.test(s)) {
    for (let i = 0; i < bit; i++) {
      bitTxt += '0'
    }
    if (bitTxt === '') return sign + (s + '').replace(/\B(?=(\d{3})+$)/g, ',')
    return sign + (s + '').replace(/\B(?=(\d{3})+$)/g, ',') + '.' + bitTxt
  }
  if (/^(\d+)\.(\d+)$/.test(s)) {
    s = s + '0'
    var v = s.split('.')
    var f = (v[0] + '').replace(/\B(?=(\d{3})+$)/g, ',')
    var h = v[1].substring(0, bit)
    if (h === '') return sign + f
    return sign + f + '.' + h
  }
}

// 只能输入两位小数
export function inputMoney(newVal = '') {
  newVal = newVal.toString()
  newVal = newVal.replace(/[^\d.]/gi, '')
  if (newVal.length === 0) {
    return ''
  }
  let vals = newVal.split('.')
  if (vals.length >= 2) {
    vals = vals.splice(0, 2)
    let [a, b] = vals
    let aN = Number(a)
    if (a.length === 0 || Number.isNaN(aN)) {
      return ''
    }
    vals[0] = aN.toString()
    vals[1] = b.substring(0, 2)
    if (b.length === 0) {
      vals[1] = ''
    }
    b.replace(/[^\d]/gi, '')
    return vals.join('.')
  } else {
    let num = Number(newVal)
    return Number.isNaN(num) ? '' : num.toString()
  }
}

// 只能输入正整数
export function inputInt(newVal = '') {
  newVal = newVal.toString()
  newVal = newVal.replace(/[^\d]/gi, '')
  if (newVal.length === 0) {
    return ''
  }
  let num = Number(newVal)
  return Number.isNaN(num) ? '' : num.toString()
}

//检测浏览器版本信息
export function getUaType() {
  let u = navigator.userAgent
  console.log(u)
  let u2 = navigator.userAgent.toLowerCase()
  if (u.indexOf('Trident') > -1) {
    return 'Trident'
  } else if (u.indexOf('Presto') > -1) {
    return 'Presto'
  } else if (u.indexOf('Android') > -1) {
    return 'Android'
  } else if (u.indexOf('iPhone') > -1) {
    return 'iPhone'
  } else if (u.indexOf('Mac') > -1) {
    return 'Mac'
  } else if (u.indexOf('iPad') > -1) {
    return 'iPad'
  } else if (u.indexOf('Safari')) {
    return 'Safari'
  } else if (u2.match(/MicroMessenger/i) === 'micromessenger') {
    return 'micromessenger'
  } else if (u2.match(/QQ/i) === 'qq') {
    return 'QQ'
  }
}

/**
 * 获得当前地址栏传递参数
 * 哈希模式传递参数的地址示例 http://10.13.134.205:8080/?aa=44#/ （直接用 $route.query 不香吗， 直接在后面拼就行了）
 * 历史模式正常拼接就行
 */
export function getQueryParams(search) {
  search = search || window.location.search
  let params = {}
  let query
  let pos = search.indexOf('?')
  if (pos !== -1) {
    query = search.slice(pos + 1)
    if (query.length > 0) {
      params = {}
      query = query.split('&')
      query.forEach(function (param) {
        var tempParam = param.split('=')
        params[tempParam[0]] = decodeURIComponent(
          param.substring(param.indexOf('=') + 1, param.length),
        )
      })
    }
  }
  return params
}

// 判断是不是微信
export function isWX() {
  let ua = navigator.userAgent.toLowerCase()
  return ua.indexOf('micromessenger') > -1
}

export const isSafeNumber = num => num !== null && !isNaN(num) && isFinite(num)
// 除
export const divide = (...args) => {
  if (args.some(n => !isSafeNumber(n))) {
    return NaN
  }

  return numbers.divide(...args)
}

// 加
export const plus = (...args) => {
  if (args.some(n => !isSafeNumber(n))) {
    return NaN
  }

  return numbers.plus(...args)
}

// 乘
export const times = (...args) => {
  if (args.some(n => !isSafeNumber(n))) {
    return NaN
  }

  return numbers.times(...args)
}

// 减
export const minus = (...args) => {
  if (args.some(n => !isSafeNumber(n))) {
    return NaN
  }

  return numbers.minus(...args)
}

// 四舍五入
export const round = (...args) => {
  if (args.some(n => !isSafeNumber(n))) {
    return NaN
  }

  return numbers.round(...args)
}

// 把小数转成整数，支持科学计数法。如果是小数则放大成整数
export const float2Fixed = (...args) => {
  if (args.some(n => !isSafeNumber(n))) {
    return NaN
  }

  return numbers.float2Fixed(...args)
}
