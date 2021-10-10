module.exports = [
  { text: 'Home', link: '/' },
  { text: 'Guide', link: '/views/guide/' },
  { text: 'Web Document', link: '/views/webDocument/' },
  { text: 'Common',
    link: '/views/common/case',
    items: [
      { text: 'Plugins', link: '/views/common/plugins/' },
      { text: 'Case', link: '/views/common/case/' },
      { text: 'Animation', link: '/pages/00c33a/' }, // 此文件夹没有README文件承接，所以需要固定到某一页面
    ]
  },

  { text: 'Components', link: '/views/components/' },
  {
    text: 'Article Index',
    link: '/archives/',
    items: [
      { text: 'Categories', link: '/categories/' },
      { text: 'Tags', link: '/tags/' },
      { text: 'Archives', link: '/archives/' },
    ],
  },
  { text: 'Website Tools', link: '/views/websiteTools/' },
]
