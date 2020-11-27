const fs = require('fs')
const Handlebars = require('handlebars')

Handlebars.registerHelper('escapeDoubleQuote', (string) => {
  return string.replace(/"/g, '&#34;')
})

Handlebars.registerHelper('lowerCase', (string) => {
  return string.toLowerCase()
})

module.exports = (defaults, templatesPath, destinationPath) => {
  if (defaults.categories !== null) {
    const categoryTemplate = fs.readFileSync(
      `${templatesPath}/category.md.handlebars`,
      'utf8'
    )
    const renderCategory = Handlebars.compile(categoryTemplate)
    defaults.categories.forEach((category) => {
      fs.mkdirSync(`${destinationPath}/${category.folder}`)
      const categoryReadmeContent = renderCategory(category)
      fs.writeFileSync(
        `${destinationPath}/${category.folder}/readme.md`,
        categoryReadmeContent
      )

      if (category.image !== undefined) {
        fs.copyFileSync(
          `../../images/${category.folder}/${category.image.filename}`,
          `${destinationPath}/${category.folder}/${category.image.filename}`
        )
      }
    })
  }
}
