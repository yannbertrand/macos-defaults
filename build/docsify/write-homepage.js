const fs = require('fs')
const Handlebars = require('handlebars')

module.exports = ({ defaults }, templatesPath, destinationPath) => {
  mkdirIfNeededSync(destinationPath)

  const homeTemplate = fs.readFileSync(`${templatesPath}/home.md.handlebars`, 'utf8')
  const rootReadmeContent = Handlebars.compile(homeTemplate)(defaults)
  fs.writeFileSync(`${destinationPath}/readme.md`, rootReadmeContent)
}

const mkdirIfNeededSync = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true })
  }
}
