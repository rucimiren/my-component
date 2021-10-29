<template>
  <div>
    <back />
    <components
      v-if="imgList.length"
      :imgList="imgList"
      :is="$route.query.animate"
    />
    <loading v-else />
  </div>
</template>

<script>
import back from '@/components/back.vue'
import loading from '@/components/loading.vue'
import animate01 from '@/views/animate/components/animate01'
import animate02 from '@/views/animate/components/animate02'
import animate03 from '@/views/animate/components/animate03'
import animate04 from '@/views/animate/components/animate04'
import animate05 from '@/views/animate/components/animate05'
import animate06 from '@/views/animate/components/animate06'
export default {
  name: 'Index',
  props: ['imgList'],
  components: {
    loading,
    back,
    animate01,
    animate02,
    animate03,
    animate04,
    animate05,
    animate06,
  },
}
</script>
