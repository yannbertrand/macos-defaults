const fs = require('fs')
const Handlebars = require('handlebars')

Handlebars.registerHelper('lowerCase', (string) => {
  return string.toLowerCase()
})

module.exports = (defaults, templatesPath, destinationPath) => {
  fs.mkdirSync(destinationPath)

  const homeTemplate = fs.readFileSync(`${templatesPath}/home.md.handlebars`, 'utf8')
  const rootReadmeContent = Handlebars.compile(homeTemplate)(defaults)
  fs.writeFileSync(`${destinationPath}/readme.md`, rootReadmeContent)
}
