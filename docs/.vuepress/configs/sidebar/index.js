const components = require('./components')
const unify = require('./unify')
const commonPlugins = require('./commonPlugins')
const commonCase = require('./commonCase')
const webDocumentEs6 = require('./webDocumentEs6')

module.exports = {
  ...components,
  ...unify,
  ...commonPlugins,
  ...commonCase,
  ...webDocumentEs6,
}
