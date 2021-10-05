const requireContext = require('./requireContext')
module.exports = {
    /* '/views/webDocument/Git/': [
      {
        title: '01.手册',
        collapsable:  true,
        children: requireContext({
          dirname: '../../../views/webDocument/Git/01.手册',
          filePath: '/views/webDocument/Git/01.手册/'
        })
      },
      {
        title: '02.文档笔记',
        collapsable:  true,
        children: requireContext({
          dirname: '../../../views/webDocument/Git/02.文档笔记',
          filePath: '/views/webDocument/Git/02.文档笔记/'
        })
      }
    ] */
    '/views/webDocument/Git/': requireContext({
      dirname: '../../../views/webDocument/Git',
      filePath: '/views/webDocument/Git/',
      useSubdirectories: true,
      collapsable: true,
    })
  }
