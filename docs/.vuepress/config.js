module.exports = (options, ctx) => {
  console.log('options', options)
  console.log('ctx', ctx)
  return {
    title: 'Hello VuePress',
    description: 'Just playing around',
    lastUpdated: '上次更新',
    configureWebpack: {
      resolve: {
        alias: {
          '@alias': 'path/to/some/dir'
        }
      }
    },
    themeConfig : {
      nav : [
          { text: '下拉菜单', 
            items: [
              { text: '附录：错误码', link: '/error' },
              { text: '接口定义', link: '/apiword' },
              { text: '接口定义', link: '/api' },
            ]
          },
          
          { text: '测试', link: '/views/test/test' },
      ],
      sidebar: {
          '/' : [
                "/", //指的是根目录的md文件 也就是 README.md 里面的内容
              "apiword",  
              "api",
              "error" ,
              '/views/test/test'
          ]
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
      }]
    ]
  }
}