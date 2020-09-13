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

module.exports = (defaults, templatesPath, destinationPath) => {
  fs.mkdirSync(`${destinationPath}/website`)
  fs.mkdirSync(`${destinationPath}/website/core`)
  fs.mkdirSync(`${destinationPath}/website/i18n`)
  fs.mkdirSync(`${destinationPath}/website/static`)
  fs.mkdirSync(`${destinationPath}/website/static/img`)

  fs.copyFileSync(`${templatesPath}/website/package.json`, `${destinationPath}/website/package.json`)
  fs.copyFileSync(`${templatesPath}/website/yarn.lock`, `${destinationPath}/website/yarn.lock`)
  fs.copyFileSync(`${templatesPath}/website/siteConfig.js`, `${destinationPath}/website/siteConfig.js`)
  fs.copyFileSync(`${templatesPath}/website/core/Footer.js`, `${destinationPath}/website/core/Footer.js`)
  fs.copyFileSync(`${templatesPath}/website/static/index.html`, `${destinationPath}/website/static/index.html`)
  fs.copyFileSync(`${templatesPath}/website/static/img/docusaurus.svg`, `${destinationPath}/website/static/img/docusaurus.svg`)
  fs.copyFileSync(`${templatesPath}/website/static/img/favicon.ico`, `${destinationPath}/website/static/img/favicon.ico`)

  const sidebarsConfig = fs.readFileSync(`${templatesPath}/website/sidebars.json.handlebars`, 'utf8')
  const sidebarsConfigContent = Handlebars.compile(sidebarsConfig)(defaults)
  fs.writeFileSync(`${destinationPath}/website/sidebars.json`, JSON.parse(JSON.stringify(sidebarsConfigContent)))
}
