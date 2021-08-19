<template>
  <div class="utils">
    <div class="utils-mb-10">
      日期格式化：{{ 1624673190000 | formatDate('YYYY.MM.DD HH:mm:ss') }}
    </div>
    <div class="utils-mb-10">
      金额格式化：{{ 162467.346 | formatCurrency(3) }}
    </div>
    <div class="utils-mb-10">
      只能输入2位小数：
      <input class="utils__input" type="text" v-model="inputFixed2" />
    </div>
    <div class="utils-mb-10">
      只能输入整数：
      <input class="utils__input" type="text" v-model="inputFixed" />
    </div>
  </div>
</template>

<script>
import { inputMoney, inputInt, getQueryParams } from '../../../utils'
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

<style lang="less" scoped>
.utils {
  font-size: 20px;

  &-mb-10 {
    margin-bottom: 10px;
  }

  &__input {
    border: 1px solid #2c68ff;
    padding: 4px 0 4px 10px;
  }
}
</style>
