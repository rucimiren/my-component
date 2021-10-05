const path = require('path')

module.exports = [
  /* ['sakura', {
    num: 20,
    show: false,
    zIndex: 9999999,
    img: {
      replace: false,
      httpUrl: '', // 绝对路径
    }
  }], */
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
      left: '38px',
      bottom: '200px'
    },
    modelStyle: {
      left: '70px',
      bottom: '0px',
      opacity: '0.9'
    },
    btnStyle: {
      left: '70px',
      bottom: '60px'
    },
    backStyle: {
      left: '70px'
    }
  }],
  ['demo-container', {
    // component: 'InitDemoBlock'
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
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: true, // whether to display on the mobile side(是否在移动端显示/目前没用，源码里没有这个属性), default: false.
      toolTipMessage: '复制', // 元素的title属性 default is ''Copy to clipboard'
    },
  ],
]
