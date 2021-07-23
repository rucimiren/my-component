module.exports = (options, ctx) => {
  console.log('options', options)
  console.log('ctx', ctx)
  return {
    title: '肖强的博客',
    description: '肖强的博客',
    base: '/',   // 设置站点根路径
    dest: './ROOT',  // 设置输出目录
    port: 8086,
    head: [],
    configureWebpack: {
      resolve: {
        alias: {
          '@alias': 'path/to/some/dir'
        }
      }
    },
    themeConfig : {
      logo: '/logo.jpeg',
      lastUpdated: '上次更新',
      nav : [
        { text: '主页', link: '/' },
        { text: '指南', link: '/views/guide/' },
        { text: '下拉菜单', 
          items: [
            { text: '附录：错误码', link: '/views/down/error' },
            { text: '接口定义', link: '/views/down/apiword' },
            { text: '接口定义', link: '/views/down/api' },
          ]
        },
        
        { text: '测试', link: '/views/test/' },
        { text: '介绍', link: '/views/desc/' },
      ],
      sidebar: {
          '/views/test/' : [
            {
              title: '开始',
              collapsable:  false,
              path: '/views/test/',
              children: [
                {
                  title: '测试',
                  path: '/views/test/test',
                },
                {
                  title: '测试1',
                  path: '/views/test/test1',
                },
                {
                  title: '测试2',
                  path: '/views/test/test2',
                },
              ]
            }
          ],
          '/views/desc/':['/views/desc/']

      },
      sidebarDepth : 2
    },
    markdown: {
      lineNumbers: true, // 行号 (你可以通过配置来为每个代码块显示行号)
    },
    plugins: [
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
      }]
    ]
  }
}