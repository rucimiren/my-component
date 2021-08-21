const path = require('path')

module.exports = [
  ['sakura', {
    num: 20,
    show: true,
    zIndex: 9999999,
    img: {
      replace: false,
      httpUrl: '', // 绝对路径
    }
  }],
  ['vuepress-plugin-cat-model', {
    theme: ['miku','blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'z16'],
    clean: false,
    messages: {
      welcome: '欢迎来到我的家',
      home: '心里的花，我想要带你回家。',
      theme: '好吧，希望你能喜欢我的其他小伙伴。',
      close: '你知道我喜欢吃什么吗？痴痴地望着你。',
      info: '你希望我对你说点什么？'
    },
    messageStyle: {
      height: 'auto',
      right: '68px',
      bottom: '190px'
    },
    modelStyle: {
      right: '100px',
      bottom: '0px',
      opacity: '0.9'
    },
    btnStyle: {
      right: '100px',
      bottom: '60px'
    },
  }],
  ['demo-container', {
    component: 'InitDemoBlock'
  }],
    ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  }],
  // '@vuepress/back-to-top',
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
      componentsDir: path.resolve(__dirname, '../../../../src/plugins/demo'),
      /* components: [
        {
          name: 'DatePicker',
          path: path.resolve(__dirname, '../../src/views/DatePicker/components/DatePicker.vue'),
        }
      ] */
    },
  ],
]
