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
  [
    'vuepress-plugin-comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: 'e5bf96f555589812ce86',
        clientSecret: '9c17efc0252c8e46813b3f6cea894c40eff4c2af',
        repo: 'my-component', // GitHub 仓库
        owner: 'rucimiren', // GitHub仓库所有者
        admin: ['rucimiren'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  [ // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=',
        },
        {
          title: "在360中搜索",
          frontUrl: "https://www.so.com/s?q="
        }
      ],
    },
  ],
]
