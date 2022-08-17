const fs = require('fs')
const YAML = require('yaml')

require('./handlebars-helpers')
const writeHomepage = require('./write-homepage')
const writeCategories = require('./write-categories')
const writePages = require('./write-pages')
const writeConfig = require('./write-config')

const input = fs.readFileSync('../defaults.yml', 'utf8')
const inputFr = fs.readFileSync('../defaults-fr.yml', 'utf8')
const defaults = YAML.parse(input)
const defaultsFr = YAML.parse(inputFr)

const templatesPath = 'templates'
const destinationPath = 'docs'

const supportedLanguages = {
  languages: [
    { url: '/', lang: 'en-US', home: 'Home', defaults: defaults },
    {
      url: '/fr/',
      lang: 'fr-FR',
      home: 'Accueil',
      defaults: getSafeDefaults(defaultsFr, defaults),
    },
  ],
}

supportedLanguages.languages.forEach((supportedLanguage) => {
  const { defaults, url } = supportedLanguage
  writeHomepage(defaults, `${templatesPath}${url}`, `${destinationPath}${url}`)
  writeCategories(
    defaults,
    `${templatesPath}${url}`,
    `${destinationPath}${url}`
  )
  writePages(
    supportedLanguage,
    `${templatesPath}${url}`,
    `${destinationPath}${url}`
  )
})

const algoliaConf = {
  ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
  ALGOLIA_INDEX_NAME: process.env.ALGOLIA_INDEX_NAME,
  ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
}

const config = { ...supportedLanguages, ...algoliaConf }

writeConfig(config, templatesPath, destinationPath)

function getSafeDefaults(localizedDefaults, fallbackDefaults) {
  return { ...fallbackDefaults, ...localizedDefaults }
}
