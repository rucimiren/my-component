module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  themeConfig : {
    nav : [
        { text: '接口定义', link: '/apiword' },
        { text: '接口字段定义', link: '/api' },
        { text: '附录：错误码', link: '/error' },
        { text: '测试', link: '/views/test' },
    ],
    sidebar: {
        '/' : [
              "/", //指的是根目录的md文件 也就是 README.md 里面的内容
            "apiword",  
            "api",
            "error" ,
            '/views/test'
        ]
    },
    sidebarDepth : 2
  },
  markdown: {
    lineNumbers: true, // 行号 (你可以通过配置来为每个代码块显示行号)
  }
}