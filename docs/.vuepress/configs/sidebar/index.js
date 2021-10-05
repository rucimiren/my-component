const components = require('./components')
const unify = require('./unify')
const commonPlugins = require('./commonPlugins')
const commonCase = require('./commonCase')
// const webDocumentES6 = require('./webDocumentES6')
// const webDocumentGit = require('./webDocumentGit')
const webDocument = require('./webDocument')

module.exports = {
  ...components,
  ...unify,
  ...commonPlugins,
  ...commonCase,
  // ...webDocumentES6,
  // ...webDocumentGit,
  ...webDocument,
}
