<template>
  <div class="shadow-lg">
    <xiao-scrollbar noresize wrap-style="height: 500px;">
      <div class="px-15 pb-15">
        <div class="text-center text-24 font-bold">三字经</div>
        <div class="text-center text-14 mb-10 text-gray-7">作者：王应麟</div>
        <div class="text-14">{{ article }}</div>
      </div>
    </xiao-scrollbar>
  </div>
</template>

<script>
import { article } from './article'
export default {
  name: 'Index',

  data() {
    return {
      article,
    }
  },
}
</script>
