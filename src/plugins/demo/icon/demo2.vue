<template>
  <!-- #region vue -->
  <div class="icon-demo">
    <div class="icon-demo__class">
      <p>直接通过class的方式使用</p>
      <i class="xiao-icon-arrow-down-filling"></i>
      <i class="xiao-icon-close-bold"></i>
      <i class="xiao-icon-arrow-left-bold"></i>
      <i class="xiao-icon-warning"></i>
    </div>

    <div class="icon-demo__component">
      <p>通过组件的方式使用</p>
      <xiao-icon size="24" name="xiao-icon-map-filling" color="red" />
      <xiao-icon :size="34" name="xiao-icon-meh-filling" color="#409eff" />
      <xiao-icon name="xiao-icon-smile" color="rgba(0, 0, 0, 1)" />
      <xiao-icon
        size="24"
        name="xiao-icon-arrow-down-filling"
        color="#0ED57D"
      />
    </div>

    <div class="icon-demo__desc">
      <p>加载Icom说明</p>
      <i class="xiao-icon-loading1" />
      <xiao-icon size="28" name="xiao-icon-loading1" />
      <p>以class方式使用是静态的，以组件方式使用是动态的</p>
    </div>
  </div>
  <!-- #endregion vue -->
</template>
<style lang="less" scoped>
.icon-demo {
  font-size: 24px;

  &__class {
    p {
      margin-bottom: 20px;
    }

    i {
      font-size: 24px;
      margin-right: 4px;

      &:nth-child(2) {
        color: #f52f3e;
      }

      &:nth-child(3) {
        color: #409eff;
      }

      &:nth-child(4) {
        color: #2c68ff;
      }

      &:nth-child(5) {
        color: #ff9c00;
      }
    }
  }

  &__component {
    p {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  &__desc {
    p {
      &:first-child {
        margin-top: 20px;
        margin-bottom: 20px;
      }

      &:last-child {
        font-size: 14px;
        color: #8c8c8c;
      }
    }

    & > i {
      font-size: 28px;
    }
  }
}
</style>
