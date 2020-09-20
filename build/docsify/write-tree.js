const fs = require('fs')
const Handlebars = require('handlebars')

module.exports = (defaults, destinationPath) => {
  fs.mkdirSync(destinationPath)

  fs.copyFileSync('./templates/index.html', `${destinationPath}/index.html`)
  fs.copyFileSync('./templates/favicon.ico', `${destinationPath}/favicon.ico`)

  const homeTemplate = fs.readFileSync('./templates/home.md.handlebars', 'utf8')
  const rootReadmeContent = Handlebars.compile(homeTemplate)(defaults)
  fs.writeFileSync(`${destinationPath}/readme.md`, rootReadmeContent)

  const sidebarConfigTemplate = fs.readFileSync('./templates/_sidebar.md.handlebars', 'utf8')
  const sidebarConfigContent = Handlebars.compile(sidebarConfigTemplate)(defaults)
  fs.writeFileSync(`${destinationPath}/_sidebar.md`, sidebarConfigContent)

  if (defaults.categories !== null) {
    const categoryTemplate = fs.readFileSync('./templates/category.md.handlebars', 'utf8')
    const renderCategory = Handlebars.compile(categoryTemplate)
    defaults.categories.forEach(category => {
      fs.mkdirSync(`${destinationPath}/${category.folder}`)
      const categoryReadmeContent = renderCategory(category)
      fs.writeFileSync(`${destinationPath}/${category.folder}/readme.md`, categoryReadmeContent)

      if (category.image !== undefined) {
        fs.copyFileSync(
          `../../images/${category.folder}/${category.image.filename}`,
          `${destinationPath}/${category.folder}-${category.image.filename}`
        )
      }
    })

    const pageTemplate = fs.readFileSync('./templates/page.md.handlebars', 'utf8')
    const renderPage = Handlebars.compile(pageTemplate)
    defaults.categories.forEach(({ folder, name, keys }) => {
      if (keys === undefined) { return }

      keys.forEach(({ domain, ...page }) => {
        const pageReadmeContent = renderPage({ ...page, folder, name, domain })
        fs.writeFileSync(`${destinationPath}/${folder}/${page.key}.md`, pageReadmeContent)

        page.examples.forEach(example => {
          if (example.image !== undefined) {
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.image.filename}`,
              `${destinationPath}/${folder}-${page.key}-${example.image.filename}`
            )
          }
          if (example.video !== undefined) {
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.video.filename}`,
              `${destinationPath}/${folder}-${page.key}-${example.video.filename}`
            )
          }
        })
      })
    })
  }
}
