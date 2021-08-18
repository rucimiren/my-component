const components = require('./components')
const unify = require('./unify')
const commonPlugins = require('./commonPlugins')

module.exports = {
  ...components,
  ...unify,
  ...commonPlugins
}
