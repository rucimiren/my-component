<template>
  <div>
    <p class="mb-20">直接通过class的方式使用</p>
    <i class="xiao-icon-arrow-down-filling text-24 mr-4 text-error"></i>
    <i class="xiao-icon-close-bold mr-4 text-24 text-base"></i>
    <i class="xiao-icon-arrow-left-bold text-24 mr-4 text-primary"></i>
    <i class="xiao-icon-warning mr-4 text-24 text-warning"></i>
    <hr class="my-10" />
    <p class="my-20">通过组件的方式使用</p>
    <xiao-icon class="text-24" name="xiao-icon-map-filling" color="red" />
    <xiao-icon class="text-24" name="xiao-icon-meh-filling" color="#409eff" />
    <xiao-icon
      class="text-24"
      name="xiao-icon-smile"
      color="rgba(0, 0, 0, 1)"
    />
    <xiao-icon
      class="text-24"
      name="xiao-icon-arrow-down-filling"
      color="#0ED57D"
    />
    <hr class="my-10" />
    <p class="my-20">加载Icom说明</p>
    <i class="xiao-icon-loading1 text-28" />
    <xiao-icon class="text-28" name="xiao-icon-loading1" />
    <br />
    <span class="text-14 text-gray-7"
      >以class方式使用是静态的，以组件方式使用是动态的</span
    >
  </div>
</template>
