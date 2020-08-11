const fs = require('fs')
const Handlebars = require('handlebars')

Handlebars.registerHelper('renderJsonCategories', (categories) => {
  const renderJsonPagesArray = (folder, keys) => keys.map(({ key }) => `"${folder}/${key}"`).join(', ')

  const defaultsCategories = '"Home": ["index"]'
  if (categories === null) {
    return defaultsCategories
  }

  return [
    defaultsCategories,
    ...categories.map(({ folder, name, keys }) => `"${name}": [${renderJsonPagesArray(folder, keys)}]`)
  ].join(',\n    ')
})

module.exports = (defaults, destinationPath) => {
  fs.mkdirSync(destinationPath)
  fs.mkdirSync(`${destinationPath}/website`)
  fs.mkdirSync(`${destinationPath}/website/core`)
  fs.mkdirSync(`${destinationPath}/website/i18n`)
  fs.mkdirSync(`${destinationPath}/website/static`)
  fs.mkdirSync(`${destinationPath}/website/static/img`)

  fs.copyFileSync('./templates/website/package.json', `${destinationPath}/website/package.json`)
  fs.copyFileSync('./templates/website/yarn.lock', `${destinationPath}/website/yarn.lock`)
  fs.copyFileSync('./templates/website/siteConfig.js', `${destinationPath}/website/siteConfig.js`)
  fs.copyFileSync('./templates/website/core/Footer.js', `${destinationPath}/website/core/Footer.js`)
  fs.copyFileSync('./templates/website/static/index.html', `${destinationPath}/website/static/index.html`)
  fs.copyFileSync('./templates/website/static/img/docusaurus.svg', `${destinationPath}/website/static/img/docusaurus.svg`)
  fs.copyFileSync('./templates/website/static/img/favicon.ico', `${destinationPath}/website/static/img/favicon.ico`)

  const sidebarsConfig = fs.readFileSync('./templates/website/sidebars.json.handlebars', 'utf8')
  const sidebarsConfigContent = Handlebars.compile(sidebarsConfig)(defaults)
  fs.writeFileSync(`${destinationPath}/website/sidebars.json`, JSON.parse(JSON.stringify(sidebarsConfigContent)))

  fs.mkdirSync(`${destinationPath}/docs`)
  fs.mkdirSync(`${destinationPath}/docs/assets`)

  const homeTemplate = fs.readFileSync('./templates/home.md.handlebars', 'utf8')
  const rootReadmeContent = Handlebars.compile(homeTemplate)(defaults)
  fs.writeFileSync(`${destinationPath}/docs/readme.md`, rootReadmeContent)

  if (defaults.categories !== null) {
    const pageTemplate = fs.readFileSync('./templates/page.md.handlebars', 'utf8')
    const renderPage = Handlebars.compile(pageTemplate)

    defaults.categories.forEach(({ folder, name, keys }) => {
      keys.forEach(({ domain, ...page }) => {
        mkdirIfNeededSync(`${destinationPath}/docs/${folder}`)
        const pageReadmeContent = renderPage({ ...page, folder, name, domain })
        fs.writeFileSync(`${destinationPath}/docs/${folder}/${page.key}.md`, pageReadmeContent)

        page.examples.forEach(example => {
          if (example.image !== undefined) {
            mkdirIfNeededSync(`${destinationPath}/docs/assets/${folder}`)
            mkdirIfNeededSync(`${destinationPath}/docs/assets/${folder}/${page.key}`)
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.image.filename}`,
              `${destinationPath}/docs/assets/${folder}/${page.key}/${example.image.filename}`
            )
          }
          if (example.video !== undefined) {
            mkdirIfNeededSync(`${destinationPath}/docs/assets/${folder}`)
            mkdirIfNeededSync(`${destinationPath}/docs/assets/${folder}/${page.key}`)
            fs.copyFileSync(
              `../../images/${folder}/${page.key}/${example.video.filename}`,
              `${destinationPath}/docs/assets/${folder}/${page.key}/${example.video.filename}`
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
