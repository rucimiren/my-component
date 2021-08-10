<template>
  <div>
    <div class="text-14 mb-10">
      对于自定义指令v-loading只需要绑定Boolean即可。默认状况下，Loading
      遮罩会插入到绑定元素的子节点，通过添加fullscreen修饰符，可以使遮罩插入至
      DOM 中的 body 上。
    </div>
    <div class="flex items-center">
      <div
        v-loading="loading1"
        class="
          w-200
          h-200
          bg-primary
          flex
          justify-center
          items-center
          text-white
        "
      >
        默认样式
      </div>
      <div
        class="
          w-100
          h-40
          rounded-4
          bg-primary
          text-white
          flex
          justify-center
          items-center
          ml-20
          cursor-pointer
        "
        @click="loading1 = !loading1"
      >
        展示
      </div>
    </div>
    <hr class="my-20" />
    <div class="text-14 mb-10">
      在绑定了v-loading指令的元素上添加xiao-loading-text属性，其值会被渲染为加载文案，
      并显示在加载图标的下方。类似地，xiao-loading-class、xiao-loading-color和
      xiao-loading-background属性分别用来设定图标类名、图标色值和背景色值。
    </div>
    <div class="flex items-center">
      <div
        v-loading="loading2"
        xiao-loading-class="xiao-icon-91jiazai"
        xiao-loading-text="玩命加载中..."
        xiao-loading-background="rgba(0,0,0,0.8)"
        xiao-loading-customClass="customClassXiao"
        class="w-200 h-200 bg-error flex justify-center items-center text-white"
      >
        可配置
      </div>
      <div
        class="
          w-100
          h-40
          rounded-4
          bg-error
          text-white
          flex
          justify-center
          items-center
          ml-20
          cursor-pointer
        "
        @click="loading2 = !loading2"
      >
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
