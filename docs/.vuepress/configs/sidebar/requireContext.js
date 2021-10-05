require('babel-plugin-require-context-hook/register')()

module.exports = function ({dirname, useSubdirectories, regExp, filePath, fileRegExp, collapsable}) {
  const apisContext = __requireContext(__dirname,dirname, useSubdirectories || false, regExp || /\.md$/).keys()
  if(useSubdirectories) {
    const mapList = apisContext.map((item) => {
      const itemList = item.split("/")
      return [itemList[1], itemList[2].replace(/\.md$/, "")]
    })
    let contextList = []
    mapList.forEach((item, index) => {
      if (index === 0) {
        contextList.push({
          title: item[0],
          collapsable,
          children: [
            {
              title: item[1],
              path: `${filePath}${item[0]}/${item[1]}`,
            },
          ],
        })
      } else {
        if (item[0] === mapList[index - 1][0]) {
          const contextIndex = contextList.findIndex(context => context.title === item[0]);
          contextList[contextIndex].children.push({
            title: item[1],
            path: `${filePath}${item[0]}/${item[1]}`,
          })
        } else {
          contextList.push({
            title: item[0],
            collapsable,
            children: [
              {
                title: item[1],
                path: `${filePath}${item[0]}/${item[1]}`,
              },
            ],
          })
        }
      }
    })
    return contextList
  }
  return apisContext.map(item => {
    const name = item.replace(fileRegExp || /^\.\/|\.md$/g, '')
    return {
      title: name,
      path: `${filePath}${name}`
    }
  })
}
