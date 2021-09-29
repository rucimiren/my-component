const components = require('./components')
const unify = require('./unify')
const commonPlugins = require('./commonPlugins')
const commonCase = require('./commonCase')

module.exports = {
  ...components,
  ...unify,
  ...commonPlugins,
  ...commonCase
}
