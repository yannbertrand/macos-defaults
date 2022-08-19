const fs = require('fs')
const Handlebars = require('handlebars')
const slugify = require('slugify')

module.exports = ({ defaults, url }, templatesPath, destinationPath) => {
  if (defaults.categories !== null) {
    const pageTemplate = fs.readFileSync(
      `${templatesPath}/page.md.handlebars`,
      'utf8'
    )
    Handlebars.registerHelper('shellescape', function (value) {
      return '"'+`${value}`.trim().replace(/(["'$`\\])/g,'\\$1')+'"'
    });
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
          `${destinationPath}/${folder}/${slugify(page.key, {
            lower: true,
          })}.md`,
          pageReadmeContent
        )

        page.examples.forEach((example) => {
          if (example.image !== undefined) {
            fs.copyFileSync(
              `../images/${folder}/${page.key}/${example.image.filename}`,
              `${destinationPath}/${folder}/${folder}-${page.key}-${example.image.filename}`
            )
          }
          if (example.video !== undefined) {
            fs.copyFileSync(
              `../images/${folder}/${page.key}/${example.video.filename}`,
              `${destinationPath}/${folder}/${folder}-${page.key}-${example.video.filename}`
            )
          }
        })
      })
    })
  }
}
