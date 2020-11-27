const fs = require('fs')
const Handlebars = require('handlebars')

module.exports = (defaults, templatesPath, destinationPath) => {
  if (defaults.categories !== undefined) {
    const pageTemplate = fs.readFileSync(
      `${templatesPath}/page.md.handlebars`,
      'utf8'
    )
    const renderPage = Handlebars.compile(pageTemplate)
    defaults.categories.forEach(({ folder, name, keys }) => {
      if (keys === undefined) {
        return
      }

      keys.forEach(({ domain, ...page }) => {
        fs.mkdirSync(`${destinationPath}/${folder}/${page.key}`)
        const pageReadmeContent = renderPage({ ...page, name, domain })
        fs.writeFileSync(
          `${destinationPath}/${folder}/${page.key}/readme.md`,
          pageReadmeContent
        )

        page.examples.forEach((example) => {
          if (example.image !== undefined) {
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.image.filename}`,
              `${destinationPath}/${folder}/${page.key}/${example.image.filename}`
            )
          }
          if (example.video !== undefined) {
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.video.filename}`,
              `${destinationPath}/${folder}/${page.key}/${example.video.filename}`
            )
          }
        })
      })
    })
  }
}
