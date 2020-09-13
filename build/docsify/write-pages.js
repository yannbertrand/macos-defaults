const fs = require('fs')
const Handlebars = require('handlebars')

module.exports = ({ defaults, url }, templatesPath, destinationPath, needAsset = false) => {
  if (defaults.categories !== null) {
    const pageTemplate = fs.readFileSync(`${templatesPath}/page.md.handlebars`, 'utf8')
    const renderPage = Handlebars.compile(pageTemplate)
    defaults.categories.forEach(({ folder, name, keys }) => {
      if (keys === undefined) { return }

      keys.forEach(({ domain, ...page }) => {
        const pageReadmeContent = renderPage({ ...page, folder, name, domain, url })
        fs.writeFileSync(`${destinationPath}/${folder}/${page.key}.md`, pageReadmeContent)

        if (!needAsset) { return }

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
