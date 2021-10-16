<template>
  <div>
    <button @click="onShow = !onShow">显示/隐藏</button>
    <div
      class="ani-admission-01"
      :class="{ 'box-in': onShow, 'box-out': !onShow }"
    ></div>
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
@admission-01-timeA: 0.6s; // 过渡时间
// SCSS_VAR_END

.ani-admission-01 {
  border-radius: 8px;
  // background: url(http://yaru.vip:8080/images/animation/outIn/a0817289458410fc.png)
  background: url(http://yaru.vip:8080/images/family/17.jpg) 0 0 / cover
    no-repeat;
  width: 150 * @Company;
  height: 150 * @Company;
  transform: translateX(-200 * @Company) rotate(10deg);
  // 以上需自行修改所要UI样式

  opacity: 0;
  transform-origin: 100% 100%;
  &.box-in {
    animation: ani-admission-01 @admission-01-timeA linear forwards;
  }
  &.box-out {
    transform-origin: 0 100%;
    animation: ani-admission-01-2 @admission-01-timeA linear forwards;
  }
}

@keyframes ani-admission-01 {
  0% {
    transform: translateX(-200 * @Company) rotate(10deg);
    opacity: 0;
    animation-timing-function: cubic-bezier(0, 0, 0, 1.2);
  }

  70% {
    transform: translateX(0) rotate(10deg);
  }

  100% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
  }
}

@keyframes ani-admission-01-2 {
  0% {
    transform: translateX(0) rotate(0deg);
    opacity: 1;
    animation-timing-function: ease-out;
  }
  70% {
    transform: translateX(-20 * @Company) rotate(-10deg);
    opacity: 1;
  }
  100% {
    transform: translateX(200 * @Company) rotate(-10deg);
    opacity: 0;
  }
}
</style>
