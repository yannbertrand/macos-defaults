const fs = require('fs')
const Handlebars = require('handlebars')

module.exports = (defaults, destinationPath) => {
  fs.mkdirSync(destinationPath)

  fs.copyFileSync('./templates/license', `${destinationPath}/license`)
  fs.copyFileSync('./templates/.gitmoji-changelogrc', `${destinationPath}/.gitmoji-changelogrc`)

  const homeTemplate = fs.readFileSync('./templates/home.md.handlebars', 'utf8')
  const rootReadmeContent = Handlebars.compile(homeTemplate)(defaults)
  fs.writeFileSync(`${destinationPath}/readme.md`, rootReadmeContent)

  if (defaults.categories !== undefined) {
    const categoryTemplate = fs.readFileSync('./templates/category.md.handlebars', 'utf8')
    const renderCategory = Handlebars.compile(categoryTemplate)
    defaults.categories.forEach(category => {
      fs.mkdirSync(`${destinationPath}/${category.folder}`)
      const categoryReadmeContent = renderCategory(category)
      fs.writeFileSync(`${destinationPath}/${category.folder}/readme.md`, categoryReadmeContent)
    })

    const pageTemplate = fs.readFileSync('./templates/page.md.handlebars', 'utf8')
    const renderPage = Handlebars.compile(pageTemplate)
    defaults.categories.forEach(({ folder, name, domain, keys }) => {
      keys.forEach(page => {
        fs.mkdirSync(`${destinationPath}/${folder}/${page.key}`)
        const pageReadmeContent = renderPage({ ...page, name, domain })
        fs.writeFileSync(`${destinationPath}/${folder}/${page.key}/readme.md`, pageReadmeContent)

        page.examples.forEach(example => {
          if (example.image !== undefined) {
            fs.copyFileSync(`../../images/${folder}/${page.key}/${example.image}`, `${destinationPath}/${folder}/${page.key}/${example.image}`)
          }
        })
      })
    })
  }
}
