const fs = require('fs')
const Handlebars = require('handlebars')

Handlebars.registerHelper('lowerCase', (string) => {
  return string.toLowerCase()
})

module.exports = (supportedLanguages, templatesPath, destinationPath) => {
  fs.mkdirSync(`${destinationPath}/.vuepress`)
  fs.mkdirSync(`${destinationPath}/.vuepress/public`)
  fs.mkdirSync(`${destinationPath}/.vuepress/styles`)

  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/android-chrome-192x192.png`,
    `${destinationPath}/.vuepress/public/android-chrome-192x192.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/android-chrome-512x512.png`,
    `${destinationPath}/.vuepress/public/android-chrome-512x512.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/apple-touch-icon-120x120-precomposed.png`,
    `${destinationPath}/.vuepress/public/apple-touch-icon-120x120-precomposed.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/apple-touch-icon-120x120.png`,
    `${destinationPath}/.vuepress/public/apple-touch-icon-120x120.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/apple-touch-icon-152x152-precomposed.png`,
    `${destinationPath}/.vuepress/public/apple-touch-icon-152x152-precomposed.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/apple-touch-icon-152x152.png`,
    `${destinationPath}/.vuepress/public/apple-touch-icon-152x152.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/apple-touch-icon-precomposed.png`,
    `${destinationPath}/.vuepress/public/apple-touch-icon-precomposed.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/apple-touch-icon.png`,
    `${destinationPath}/.vuepress/public/apple-touch-icon.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/browserconfig.xml`,
    `${destinationPath}/.vuepress/public/browserconfig.xml`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/favicon.ico`,
    `${destinationPath}/.vuepress/public/favicon.ico`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/favicon-16x16.png`,
    `${destinationPath}/.vuepress/public/favicon-16x16.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/favicon-32x32.png`,
    `${destinationPath}/.vuepress/public/favicon-32x32.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/logo.svg`,
    `${destinationPath}/.vuepress/public/logo.svg`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/media-1x1.jpg`,
    `${destinationPath}/.vuepress/public/media-1x1.jpg`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/media-1x1.webp`,
    `${destinationPath}/.vuepress/public/media-1x1.webp`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/media-2x1.jpg`,
    `${destinationPath}/.vuepress/public/media-2x1.jpg`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/media-2x1.webp`,
    `${destinationPath}/.vuepress/public/media-2x1.webp`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/mstile-150x150.png`,
    `${destinationPath}/.vuepress/public/mstile-150x150.png`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/robots.txt`,
    `${destinationPath}/.vuepress/public/robots.txt`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/safari-pinned-tab.svg`,
    `${destinationPath}/.vuepress/public/safari-pinned-tab.svg`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/public/site.webmanifest`,
    `${destinationPath}/.vuepress/public/site.webmanifest`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/styles/index.styl`,
    `${destinationPath}/.vuepress/styles/index.styl`
  )
  fs.copyFileSync(
    `${templatesPath}/.vuepress/styles/palette.styl`,
    `${destinationPath}/.vuepress/styles/palette.styl`
  )

  const netlifyHeadersTemplate = fs.readFileSync(
    `${templatesPath}/.vuepress/public/_headers.handlebars`,
    'utf8'
  )
  const netlifyHeadersContent = Handlebars.compile(netlifyHeadersTemplate)()
  fs.writeFileSync(
    `${destinationPath}/.vuepress/public/_headers`,
    netlifyHeadersContent
  )

  const vuepressConfig = fs.readFileSync(
    `${templatesPath}/.vuepress/config.yml.handlebars`,
    'utf8'
  )
  const vuepressConfigContent = Handlebars.compile(vuepressConfig)(
    supportedLanguages
  )
  fs.writeFileSync(
    `${destinationPath}/.vuepress/config.yml`,
    vuepressConfigContent
  )
}
