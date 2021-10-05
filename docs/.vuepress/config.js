const nav = require('./configs/nav')
const plugins = require('./configs/plugins')
const sidebar = require('./configs/sidebar')
const vdoingThemeConfig = require('./configs/vdoing/themeConfig')

module.exports = (options, ctx) => {
  return {
    // theme: 'reco',
    theme: 'vdoing',
    title: '肖强的博客',
    description: '肖强的博客',
    base: '/',   // 设置站点根路径
    dest: './root',  // 设置输出目录
    port: 8086,
    head: [
      ['script', { src: 'http://yaru.vip:8080/js/colorful.js' }],
      ['script', { src: 'http://yaru.vip:8080/js/sakura.js' }],
      ['script', { src: 'http://yaru.vip:8080/js/echarts.min.js' }],
      ['script', { src: 'http://yaru.vip:8080/js/china.js' }]
    ],
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
      logo: 'http://yaru.vip:8080/images/family/8.jpg',
      lastUpdated: '上次更新',
      smoothScroll: true,
      nav,
      sidebar,
      sidebarDepth : 2,
      ...vdoingThemeConfig
    },
    markdown: {
      lineNumbers: false, // 行号 (你可以通过配置来为每个代码块显示行号)
    },
    plugins,
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  }
}
