const writeTree = require('./write-tree')

module.exports = (initialDestinationPath) => {
  writeTree({}, initialDestinationPath)
}
