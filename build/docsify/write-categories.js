const fs = require('fs')
const Handlebars = require('handlebars')

module.exports = ({ defaults }, templatesPath, destinationPath, needAsset = false) => {
  if (defaults.categories !== null) {
    const categoryTemplate = fs.readFileSync(`${templatesPath}/category.md.handlebars`, 'utf8')
    const renderCategory = Handlebars.compile(categoryTemplate)
    defaults.categories.forEach(category => {
      fs.mkdirSync(`${destinationPath}/${category.folder}`)
      const categoryReadmeContent = renderCategory(category)
      fs.writeFileSync(`${destinationPath}/${category.folder}/readme.md`, categoryReadmeContent)

      if (!needAsset) { return }

      if (category.image !== undefined) {
        fs.copyFileSync(
          `../../images/${category.folder}/${category.image.filename}`,
          `${destinationPath}/${category.folder}-${category.image.filename}`
        )
      }
    })
  }
}
