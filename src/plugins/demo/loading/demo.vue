// #region vue
<template>
  <div class="loading">
    <div class="loading__desc">
      对于自定义指令v-loading只需要绑定Boolean即可。默认状况下，Loading
      遮罩会插入到绑定元素的子节点，通过添加fullscreen修饰符，可以使遮罩插入至
      DOM 中的 body 上。
    </div>
    <div class="loading__container">
      <div v-loading="loading1" class="loading__container__item">默认样式</div>
      <div class="loading__container__button" @click="loading1 = !loading1">
        展示
      </div>
    </div>
    <hr style="margin: 20px 0" />
    <div class="loading__desc">
      在绑定了v-loading指令的元素上添加xiao-loading-text属性，其值会被渲染为加载文案，
      并显示在加载图标的下方。类似地，xiao-loading-class、xiao-loading-color和
      xiao-loading-background属性分别用来设定图标类名、图标色值和背景色值。
    </div>
    <div class="loading__container">
      <div
        v-loading="loading2"
        xiao-loading-color="#F52F3E"
        xiao-loading-class="xiao-icon-91jiazai"
        xiao-loading-text="玩命加载中..."
        xiao-loading-background="rgba(0,0,0,0.8)"
        xiao-loading-customClass="customClassXiao"
        class="loading__container__item"
      >
        可配置
      </div>
      <div class="loading__container__button" @click="loading2 = !loading2">
        展示
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',

  data() {
    return {
      loading1: false,
      loading2: false,
    }
  },
}
</script>
// #endregion vue
<style lang="less" scoped>
.loading {
  &__desc {
    font-size: 14px;
    margin-bottom: 10px;
  }

  &__container {
    display: flex;
    align-items: center;

    &__item {
      width: 200px;
      height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: #2c68ff;
    }

    &__button {
      width: 100px;
      height: 40px;
      border-radius: 4px;
      background-color: #2c68ff;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>
