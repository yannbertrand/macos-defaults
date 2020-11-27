const fs = require('fs')
const YAML = require('yaml')

const writeHomepage = require('./write-homepage')
const writeCategories = require('./write-categories')
const writePages = require('./write-pages')
const writeConfig = require('./write-config')

const input = fs.readFileSync('../../defaults.yml', 'utf8')
const defaults = YAML.parse(input)

const templatesPath = 'templates'
const initialDestinationPath = 'dist-initial'
const destinationPath = 'dist'

writeHomepage({}, templatesPath, initialDestinationPath)
writeConfig({}, templatesPath, initialDestinationPath)

writeHomepage(defaults, templatesPath, destinationPath)
writeCategories(defaults, templatesPath, destinationPath)
writePages(defaults, templatesPath, destinationPath)
writeConfig(defaults, templatesPath, destinationPath)
