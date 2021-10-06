const requireContext = require('./requireContext')
module.exports = {
    '/views/webDocument/JavaScript/': [
      {
        title: 'JavaScript',
        collapsable:  false,
        children: requireContext({
          dirname: '../../../views/webDocument/JavaScript',
          filePath: '/views/webDocument/JavaScript/'
        })
      }
    ],
    '/views/webDocument/Git/': requireContext({
      dirname: '../../../views/webDocument/Git',
      filePath: '/views/webDocument/Git/',
      useSubdirectories: true,
      collapsable: true,
    }),
    '/views/webDocument/ES6/': [
      {
        title: 'ES6',
        collapsable:  false,
        children: requireContext({
          dirname: '../../../views/webDocument/ES6',
          filePath: '/views/webDocument/ES6/'
        })
      }
    ],
    '/views/webDocument/React/': requireContext({
      dirname: '../../../views/webDocument/React',
      filePath: '/views/webDocument/React/',
      useSubdirectories: true,
      collapsable: true,
    }),
    '/views/webDocument/TypeScript-Axios/': requireContext({
      dirname: '../../../views/webDocument/TypeScript-Axios',
      filePath: '/views/webDocument/TypeScript-Axios/',
      useSubdirectories: true,
      collapsable: true,
    }),
    '/views/webDocument/Vue/': requireContext({
      dirname: '../../../views/webDocument/Vue',
      filePath: '/views/webDocument/Vue/',
      useSubdirectories: true,
      collapsable: true,
    }),
    '/views/webDocument/CSS/': [
      {
        title: 'CSS',
        collapsable:  false,
        children: requireContext({
          dirname: '../../../views/webDocument/CSS',
          filePath: '/views/webDocument/CSS/'
        })
      }
    ],
    '/views/webDocument/more/': requireContext({
      dirname: '../../../views/webDocument/more',
      filePath: '/views/webDocument/more/',
      useSubdirectories: true,
      collapsable: true,
    }),
    '/views/webDocument/technicalArticle/': requireContext({
      dirname: '../../../views/webDocument/technicalArticle',
      filePath: '/views/webDocument/technicalArticle/',
      useSubdirectories: true,
      collapsable: true,
    }),
  }
