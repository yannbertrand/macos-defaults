const fs = require('fs')
const Handlebars = require('handlebars')

module.exports = (defaults, templatesPath, destinationPath) => {
  fs.mkdirSync(`${destinationPath}/assets`)

  if (defaults.categories !== null) {
    const pageTemplate = fs.readFileSync(`${templatesPath}/page.md.handlebars`, 'utf8')
    const renderPage = Handlebars.compile(pageTemplate)

    defaults.categories.forEach(({ folder, name, keys }) => {
      keys.forEach(({ domain, ...page }) => {
        mkdirIfNeededSync(`${destinationPath}/${folder}`)
        const pageReadmeContent = renderPage({ ...page, folder, name, domain })
        fs.writeFileSync(`${destinationPath}/${folder}/${page.key}.md`, pageReadmeContent)

        page.examples.forEach(example => {
          if (example.image !== undefined) {
            mkdirIfNeededSync(`${destinationPath}/assets/${folder}`)
            mkdirIfNeededSync(`${destinationPath}/assets/${folder}/${page.key}`)
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.image.filename}`,
              `${destinationPath}/assets/${folder}/${page.key}/${example.image.filename}`
            )
          }
          if (example.video !== undefined) {
            mkdirIfNeededSync(`${destinationPath}/assets/${folder}`)
            mkdirIfNeededSync(`${destinationPath}/assets/${folder}/${page.key}`)
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.video.filename}`,
              `${destinationPath}/assets/${folder}/${page.key}/${example.video.filename}`
            )
          }
        })
      })
    })
  }
}

const mkdirIfNeededSync = (path) => {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path)
  }
}
