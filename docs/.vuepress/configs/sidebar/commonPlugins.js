module.exports = {
  '/views/common/plugins': [
    {
      title: '常用插件',
      collapsable:  false,
      path: '/views/common/plugins',
      children: [
        {
          title: 'dayjs',
          path: '/views/common/plugins/dayjs',
        },
        {
          title: 'vue-clipboard2',
          path: '/views/common/plugins/vue-clipboard2',
        },
        {
          title: 'qs',
          path: '/views/common/plugins/qs',
        },
        {
          title: 'number-precision',
          path: '/views/common/plugins/number-precision',
        },
      ]
    }
  ]
}
