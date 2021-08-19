<template>
  <i
    :class="{ [name]: true, [`${prefix}icon__loading`]: isLoading }"
    :style="iconStyle"
  ></i>
</template>

<script>
import { PREFIX } from '../../utils/constant'
export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: String,
    size: [Number, String],
  },
  data() {
    return {
      loadingList: [
        `${PREFIX}icon-loading1`,
        `${PREFIX}icon-loading2`,
        `${PREFIX}icon-loading3`,
        `${PREFIX}icon-91jiazai`,
        `${PREFIX}icon-Loading`,
        `${PREFIX}icon-loading4`,
        `${PREFIX}icon-loading5`,
      ],
    }
  },
  computed: {
    isLoading() {
      return this.loadingList.includes(this.name)
    },
    iconStyle() {
      return {
        color: this.color,
        fontSize: `${this.size}px`,
      }
    },
    prefix() {
      return PREFIX
    },
  },

  methods: {},
}
</script>
