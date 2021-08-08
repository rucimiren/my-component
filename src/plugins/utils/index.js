/**
 *  获取样式
 */
export const getStyle = (ele, attrName) => {
  if (window.getComputedStyle != undefined) {
    return window.getComputedStyle(ele)[attrName]
  } else {
    return ele.currentStyle[attrName]
  }
}
