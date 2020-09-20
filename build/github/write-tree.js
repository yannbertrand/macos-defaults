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

      if (category.image !== undefined) {
        fs.copyFileSync(
          `../../images/${category.folder}/${category.image.filename}`,
          `${destinationPath}/${category.folder}/${category.image.filename}`
        )
      }
    })

    const pageTemplate = fs.readFileSync('./templates/page.md.handlebars', 'utf8')
    const renderPage = Handlebars.compile(pageTemplate)
    defaults.categories.forEach(({ folder, name, keys }) => {
      if (keys === undefined) { return }

      keys.forEach(({ domain, ...page }) => {
        fs.mkdirSync(`${destinationPath}/${folder}/${page.key}`)
        const pageReadmeContent = renderPage({ ...page, name, domain })
        fs.writeFileSync(`${destinationPath}/${folder}/${page.key}/readme.md`, pageReadmeContent)

        page.examples.forEach(example => {
          if (example.image !== undefined) {
            fs.copyFileSync(`../../images/${folder}/${page.key}/${example.image.filename}`, `${destinationPath}/${folder}/${page.key}/${example.image.filename}`)
          }
          if (example.video !== undefined) {
            fs.copyFileSync(`../../images/${folder}/${page.key}/${example.video.filename}`, `${destinationPath}/${folder}/${page.key}/${example.video.filename}`)
          }
        })
      })
    })
  }
}
