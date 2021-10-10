const requireContext = require('./requireContext')
module.exports = {
    '/views/common/animation/': requireContext({
      dirname: '../../../views/common/animation',
      filePath: '/views/common/animation/',
      useSubdirectories: true,
      collapsable: true,
    })
  }
