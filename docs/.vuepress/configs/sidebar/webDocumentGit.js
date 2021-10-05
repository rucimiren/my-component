
const delay = async t => new Promise(r => setTimeout(r, t))
// 等待1s 要不然没有 require.context
  // const apisContext0 = require.context('../../../views/webDocument/Git/01.手册', false, /\.md$/).keys()
  // const apisContext1 = require.context('../../../views/webDocument/Git/02.文档笔记', false, /\.md$/).keys()

async function context() {
  console.log(require.context)
  if(require.context) {
    // await delay(1000)
    const apisContext0 = require.context('../../../views/webDocument/Git/01.手册', false, /\.md$/).keys()
    return apisContext0.map(item => {
      const name = item.match(/^\.\/(\w+)\.md$/)[1]
      return {
        title: name,
        path: `/views/webDocument/Git/01.手册/${name}`
      }
    })
  } else {
    // context()
  }
}
module.exports = {
    '/views/webDocument/Git/': [
      {
        title: '01.手册',
        collapsable:  true,
        /* children: [
          {
            title: '01.常用Git命令清单',
            path: '/views/webDocument/Git/01.手册/01.常用Git命令清单'
          }
        ], */
        children: context()
      },
      {
        title: '02.文档笔记',
        collapsable:  true,
        children: [
          {
            title: '01.Git基础与命令',
            path: '/views/webDocument/Git/02.文档笔记/01.Git基础与命令'
          }
        ],
      }
    ]
  }
