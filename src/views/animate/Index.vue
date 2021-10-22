<template>
  <div>
    <components :is="animate" />
  </div>
</template>

<script>
import animate01 from '@/views/animate/components/animate01'
import animate02 from '@/views/animate/components/animate02'
import animate03 from '@/views/animate/components/animate03'
import animate04 from '@/views/animate/components/animate04'
import animate05 from '@/views/animate/components/animate05'
import animate06 from '@/views/animate/components/animate06'
export default {
  name: 'Index',
  components: {
    animate01,
    animate02,
    animate03,
    animate04,
    animate05,
    animate06,
  },
  data() {
    return {
      animate: this.$route.query.animate,
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="less" scoped></style>
