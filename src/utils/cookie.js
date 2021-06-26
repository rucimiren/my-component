/*
 *   cookie的封装:
 *       1.setItem  传入json进行批量增加
 *
 *       2.removeItem  传入指定键  删除cookie
 *
 *       3.modifyItem  键不存在 则不修改 键存在再修改
 *
 *       4.getAllItems 返回json
 *
 *       5.getItem  传入键 获取指定cookie的值
 *
 *       6.clearItem 清空所有cookie
 *
 * */
export const cookie = {
  // 设置cookie的过期时间
  getGMTString(ms) {
    if (typeof ms !== 'number') {
      return
    }
    let nowMS = new Date().getTime()
    let futureDate = new Date(nowMS + ms)
    return futureDate.toGMTString()
  },

  // 1.增加cookie  传入json进行批量增加
  /*
        expiresMS表示本次存储的cookie时长的毫秒值
        expiresMS是可选的  如果不传则 不指明时长
  
     */
  setItem(json, expiresMS) {
    //5000 毫秒值
    if (!json) {
      return
    }
    for (let k in json) {
      if (expiresMS && typeof expiresMS === 'number') {
        document.cookie =
          k + '=' + json[k] + '; expires=' + this.getGMTString(expiresMS)
      } else {
        //没有传第二个参数  那就没有时长 那就直接存储cookie
        document.cookie = k + '=' + json[k]
      }
    }
  },

  //    删除指定cookie  (根据键删除指定cookie)
  removeItem(key) {
    let cookie = document.cookie
    if (!cookie) {
      return
    }
    //    如果不为空 那么就直接设置一个新cookie 但是 时长为过去时
    //只要时长是过去时 那么既不会新增 又可以把原来的同一个键的删除
    document.cookie = key + '=随便; expires=' + this.getGMTString(-1000)
  },

  //    修改cookie
  modifyItem(oldkey, newVal) {
    let cookie = document.cookie
    if (!cookie) {
      return false
    }
    if (this.getAllItems()[oldkey] !== undefined) {
      //    如果键存在 那么就修改
      document.cookie = oldkey + '=' + newVal

      return true
    } else {
      // 如果键不存在
      return false
    }
  },

  //    获取所有cookie返回json
  getAllItems() {
    let cookie = document.cookie
    if (!cookie) {
      return ''
    }
    let json = {}
    let arr = cookie.split(';')
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      //这个arr里面包含 key和value  newArr[0]是键 newArr[1]是值
      let newArr = arr[i].trim().split('=')
      // console.log(newArr);
      //把键值对放入json里面
      json[newArr[0]] = newArr[1]
    }

    return json
  },
  //根据键获取指定的值
  getItem(key) {
    let cookie = document.cookie
    if (!cookie) {
      return ''
    }

    return this.getAllItems()[key]
  },
  //    清空所有cookie

  clearItem() {
    this.setItem(this.getAllItems(), -1000)
  },
}
