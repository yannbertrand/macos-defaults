const fs = require('fs')
const Handlebars = require('handlebars')

Handlebars.registerHelper('escapeDoubleQuote', (string) => {
  return string.replace(/"/g, '&#34;')
})

module.exports = ({ defaults, url }, templatesPath, destinationPath) => {
  if (defaults.categories !== null) {
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
        page.examples.forEach(example => {
          if (!Array.isArray(example.value)) {
            example.value = [example.value]
          }
        })
        const pageReadmeContent = renderPage({
          ...page,
          folder,
          name,
          domain,
          url,
        })
        fs.writeFileSync(
          `${destinationPath}/${folder}/${page.key.toLowerCase()}.md`,
          pageReadmeContent
        )

        page.examples.forEach((example) => {
          if (example.image !== undefined) {
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.image.filename}`,
              `${destinationPath}/${folder}/${folder}-${page.key}-${example.image.filename}`
            )
          }
          if (example.video !== undefined) {
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.video.filename}`,
              `${destinationPath}/${folder}/${folder}-${page.key}-${example.video.filename}`
            )
          }
        })
      })
    })
  }
}
