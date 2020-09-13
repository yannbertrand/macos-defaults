const fs = require('fs')

module.exports = (defaults, templatesPath, destinationPath) => {
  fs.copyFileSync(`${templatesPath}/license`, `${destinationPath}/license`)
  fs.copyFileSync(`${templatesPath}/.gitmoji-changelogrc`, `${destinationPath}/.gitmoji-changelogrc`)
}
