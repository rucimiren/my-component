module.exports = {
  productionSourceMap: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    config.module
      .rule('less')
      .oneOf('vue')
      .use('px2rem-loader')
      .loader('px2rem-loader')
      .before('postcss-loader') // this makes it work.
      .options({ remUnit: 37.5 })
      .end()
  },
}
