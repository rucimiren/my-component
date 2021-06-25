<template>
  <div>
    <input v-model="date" type="text" />
    <div>
      <div class="date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Datepicker',

  data() {
    return {
      date: '',
    }
  },

  mounted() {},

  methods: {
    getDate() {
      const date = new Date()
      console.log(date)
    },
  },
}
</script>

<style lang="scss" scoped></style>
