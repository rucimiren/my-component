const path = require('path')

module.exports = [
  ['demo-container', {
    component: 'InitDemoBlock'
  }],
    ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  }],
  '@vuepress/back-to-top',
  ['@vuepress/last-updated', {
    transformer: (timestamp, lang) => {
      // 不要忘了安装 moment
      // const moment = require('moment')
      // moment.locale(lang)
      // return moment(timestamp).fromNow()

      const dayjs = require('dayjs')
      return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
    }
  }],
  ['@vuepress/search', {
    searchMaxSuggestions: 10
  }],
  [
    '@vuepress/register-components',
    {
      componentsDir: path.resolve(__dirname, '../../../../src/views'),
      /* components: [
        {
          name: 'DatePicker',
          path: path.resolve(__dirname, '../../src/views/DatePicker/components/DatePicker.vue'),
        }
      ] */
    },
  ],
]
