// #region vue
<template>
  <div class="datePicker">
    <xiao-date-picker v-model="date" format="YYYY/MM/DD" />
    <div class="datePicker__button" @click="handler">getDate</div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      date: '',
    }
  },

  methods: {
    handler() {
      console.log(this.date)
    },
  },
}
</script>
// #endregion vue
<style lang="less" scoped>
.datePicker {
  width: 224px;

  &__button {
    margin-top: 20px;
    cursor: pointer;
    border-radius: 4px;
    width: 200px;
    height: 50px;
    background-color: #2c68ff;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
}
</style>
