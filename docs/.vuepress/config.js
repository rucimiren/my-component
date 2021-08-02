const path = require('path')

module.exports = (options, ctx) => {
  console.log('options', options)
  console.log('ctx', ctx)
  return {
    title: '肖强的博客',
    description: '肖强的博客',
    base: '/',   // 设置站点根路径
    dest: './root',  // 设置输出目录
    port: 8086,
    head: [],
    configureWebpack: {
      resolve: {
        // 别名配置
        alias: {
          '@alias': 'path/to/some/dir'
        }
      }
    },
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      }
    },
    themeConfig : {
      logo: '/logo.jpeg',
      lastUpdated: '上次更新',
      smoothScroll: true,
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

        { text: '组件', link: '/views/components/' },
        { text: '介绍', link: '/views/desc/' },
      ],
      sidebar: {
          '/views/components/' : [
            {
              title: '快速上手',
              collapsable:  true,
              // path: '/views/test/',
              children: [
                {
                  title: 'DatePicker',
                  path: '/views/components/DatePicker',
                },
                {
                  title: 'SerialAnimation',
                  path: '/views/components/SerialAnimation',
                },
                {
                  title: '测试2',
                  path: '/views/components/test2',
                },
              ]
            }
          ],
          '/views/desc/':['/views/desc/']

      },
      sidebarDepth : 2
    },
    markdown: {
      lineNumbers: false, // 行号 (你可以通过配置来为每个代码块显示行号)
    },
    plugins: [
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
          componentsDir: path.resolve(__dirname, '../../src/views'),
          /* components: [
            {
              name: 'DatePicker',
              path: path.resolve(__dirname, '../../src/views/DatePicker/components/DatePicker.vue'),
            }
          ] */
        },
      ],
    ],
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
}
