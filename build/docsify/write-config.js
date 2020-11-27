const fs = require('fs')
const Handlebars = require('handlebars')

Handlebars.registerHelper('ifCond', function (v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this)
  }
  return options.inverse(this)
})

module.exports = (
  supportedLanguage,
  supportedLanguages,
  templatesPath,
  destinationPath,
  rootConfig = false
) => {
  const sidebarTemplate = fs.readFileSync(
    `${templatesPath}/_sidebar.md.handlebars`,
    'utf8'
  )
  const sidebarContent = Handlebars.compile(sidebarTemplate)(supportedLanguage)
  fs.writeFileSync(`${destinationPath}/_sidebar.md`, sidebarContent)

  const navbarTemplate = fs.readFileSync(
    `${templatesPath}/_navbar.md.handlebars`,
    'utf8'
  )
  const navbarContent = Handlebars.compile(navbarTemplate)({
    currentUrl: supportedLanguage.url,
    ...supportedLanguages,
  })
  fs.writeFileSync(`${destinationPath}/_navbar.md`, navbarContent)

  if (!rootConfig) {
    return
  }

  fs.copyFileSync(
    `${templatesPath}/favicon.ico`,
    `${destinationPath}/favicon.ico`
  )

  const indexTemplate = fs.readFileSync(
    `${templatesPath}/index.html.handlebars`,
    'utf8'
  )
  const indexContent = Handlebars.compile(indexTemplate)({
    ...supportedLanguage,
    ...supportedLanguages,
  })
  fs.writeFileSync(`${destinationPath}/index.html`, indexContent)
}
