const fs = require('fs')
const Handlebars = require('handlebars')

module.exports = (defaults, destinationPath) => {
  fs.mkdirSync(destinationPath)
  fs.mkdirSync(`${destinationPath}/.vuepress`)
  fs.mkdirSync(`${destinationPath}/.vuepress/public`)

  fs.copyFileSync('./templates/.vuepress/public/android-chrome-192x192.png', `${destinationPath}/.vuepress/public/android-chrome-192x192.png`)
  fs.copyFileSync('./templates/.vuepress/public/android-chrome-512x512.png', `${destinationPath}/.vuepress/public/android-chrome-512x512.png`)
  fs.copyFileSync('./templates/.vuepress/public/apple-touch-icon.png', `${destinationPath}/.vuepress/public/apple-touch-icon.png`)
  fs.copyFileSync('./templates/.vuepress/public/browserconfig.xml', `${destinationPath}/.vuepress/public/browserconfig.xml`)
  fs.copyFileSync('./templates/.vuepress/public/favicon.ico', `${destinationPath}/.vuepress/public/favicon.ico`)
  fs.copyFileSync('./templates/.vuepress/public/favicon-16x16.png', `${destinationPath}/.vuepress/public/favicon-16x16.png`)
  fs.copyFileSync('./templates/.vuepress/public/favicon-32x32.png', `${destinationPath}/.vuepress/public/favicon-32x32.png`)
  fs.copyFileSync('./templates/.vuepress/public/mstile-150x150.png', `${destinationPath}/.vuepress/public/mstile-150x150.png`)
  fs.copyFileSync('./templates/.vuepress/public/safari-pinned-tab.svg', `${destinationPath}/.vuepress/public/safari-pinned-tab.svg`)
  fs.copyFileSync('./templates/.vuepress/public/site.webmanifest', `${destinationPath}/.vuepress/public/site.webmanifest`)

  const homeTemplate = fs.readFileSync('./templates/home.md.handlebars', 'utf8')
  const rootReadmeContent = Handlebars.compile(homeTemplate)(defaults)
  fs.writeFileSync(`${destinationPath}/readme.md`, rootReadmeContent)

  const vuepressConfig = fs.readFileSync('./templates/.vuepress/config.yml.handlebars', 'utf8')
  const vuepressConfigContent = Handlebars.compile(vuepressConfig)(defaults)
  fs.writeFileSync(`${destinationPath}/.vuepress/config.yml`, vuepressConfigContent)

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
          `${destinationPath}/${category.folder}/${category.image.filename}`
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
