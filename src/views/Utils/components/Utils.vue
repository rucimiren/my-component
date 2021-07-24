<template>
  <div class="text-20 p-20">
    <div class="mb-10">
      日期格式化：{{ 1624673190000 | formatDate('YYYY.MM.DD HH:mm:ss') }}
    </div>
    <div class="mb-10">金额格式化：{{ 162467.346 | formatCurrency(3) }}</div>
    <div class="mb-10">
      只能输入2位小数：
      <input
        class="border-primary border border-solid pl-10 py-4"
        type="text"
        v-model="inputFixed2"
      />
    </div>
    <div class="mb-10">
      只能输入整数：
      <input
        class="border-primary border border-solid pl-10 py-4"
        type="text"
        v-model="inputFixed"
      />
    </div>
  </div>
</template>

<script>
import { inputMoney, inputInt, getQueryParams } from '@/utils'
export default {
  name: 'Utils',

  data() {
    return {
      inputFixed2: '',
      inputFixed: '',
    }
  },
  watch: {
    inputFixed2(val) {
      this.inputFixed2 = inputMoney(val)
    },
    inputFixed(val) {
      this.inputFixed = inputInt(val)
    },
  },

  mounted() {
    console.log('获得当前地址栏传递参数', getQueryParams())
    console.log(window.root)
  },

  methods: {},
}
</script>

<style lang="less" scoped></style>
