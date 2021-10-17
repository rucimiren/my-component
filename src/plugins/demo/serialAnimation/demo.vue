<template>
  <div style="width: 300px; background: rgba(0, 0, 0, 0.6)">
    <!-- #region vue -->
    <xiao-serial-animation
      :aspectRatio="1"
      :count="53"
      :diffTime="60"
      :forStart="0"
      format="png"
      publicPath="http://yaru.vip:8080/images/serial/sun/"
    />

    <xiao-serial-animation
      :aspectRatio="750 / 520"
      :count="100"
      :diffTime="60"
      :forStart="60"
      format="jpg"
      publicPath="//storage.jd.com/activity-public-static/demo/newloan_"
    />
    <!-- #endregion vue -->
  </div>
</template>
