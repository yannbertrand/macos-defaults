const fs = require('fs')
const Handlebars = require('handlebars')

module.exports = (supportedLanguages, templatesPath, destinationPath) => {
  fs.mkdirSync(`${destinationPath}/.vuepress`)
  fs.mkdirSync(`${destinationPath}/.vuepress/public`)

  fs.copyFileSync(`${templatesPath}/.vuepress/public/favicon.ico`, `${destinationPath}/.vuepress/public/favicon.ico`)

  const vuepressConfig = fs.readFileSync(`${templatesPath}/.vuepress/config.yml.handlebars`, 'utf8')
  const vuepressConfigContent = Handlebars.compile(vuepressConfig)(supportedLanguages)
  fs.writeFileSync(`${destinationPath}/.vuepress/config.yml`, vuepressConfigContent)
}
