const fs = require('fs')
const YAML = require('yaml')

const writeHomepage = require('./write-homepage')
const writeCategories = require('./write-categories')
const writePages = require('./write-pages')
const writeConfig = require('./write-config')

const input = fs.readFileSync('../../defaults.yml', 'utf8')
const inputFr = fs.readFileSync('../../defaults-fr.yml', 'utf8')
const defaults = YAML.parse(input)
const defaultsFr = YAML.parse(inputFr)

const templatesPath = 'templates'
const destinationPath = 'docs'

const supportedLanguages = {
  languages: [
    { url: '/fr/', lang: 'fr-FR', home: 'Accueil', defaults: getSafeDefaults(defaultsFr, defaults), isFallback: false },
    { url: '/', lang: 'en-US', home: 'Home', defaults: defaults, isFallback: true },
  ]
}

supportedLanguages.languages.forEach((supportedLanguage) => {
  const { url, isFallback } = supportedLanguage
  writeHomepage(supportedLanguage, `${templatesPath}${url}`, `${destinationPath}${url}`)
  writeCategories(supportedLanguage, `${templatesPath}${url}`, `${destinationPath}${url}`, isFallback)
  writePages(supportedLanguage, `${templatesPath}${url}`, `${destinationPath}${url}`, isFallback)
  writeConfig(supportedLanguage, supportedLanguages, `${templatesPath}${url}`, `${destinationPath}${url}`, isFallback)
})

function getSafeDefaults(localizedDefaults, fallbackDefaults) {
  return { ...fallbackDefaults, ...localizedDefaults }
}
