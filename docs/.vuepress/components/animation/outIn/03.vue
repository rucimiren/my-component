<template>
  <div>
    <button @click="onShow = !onShow">显示/隐藏</button>
    <div class="ani-admission-03" :class="{ show: onShow }"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onShow: false,
    }
  },
}
</script>
<style lang="less" scoped>
button {
  border: none;
  outline: none;
  padding: 6px 15px;
  border-radius: 4px;
  background: #2c68ff;
  color: white;
  margin-bottom: 50px;
}

// SCSS_VAR_START
@Company: 1px; // 单位基数
@admission-03-time: 0.5s; // 过渡时间
// SCSS_VAR_END

.ani-admission-03 {
  border-radius: 8px;
  // background: url(http://yaru.vip:8080/images/animation/outIn/a0817289458410fc.png)
  background: url(http://yaru.vip:8080/images/family/16.jpg) 0 0 / cover
    no-repeat;
  width: 150 * @Company;
  height: 150 * @Company;
  transform: translateY(100 * @Company);
  // 以上需自行修改所要UI样式

  opacity: 0;
  transition: transform @admission-03-time cubic-bezier(1, -0.6, 0.2, 0),
    opacity @admission-03-time linear;
  &.show {
    transition: transform @admission-03-time cubic-bezier(0, 1.6, 0.8, 1),
      opacity @admission-03-time linear;
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
