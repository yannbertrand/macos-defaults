const fs = require('fs')
const YAML = require('yaml')

const writeHomepage = require('./write-homepage')
const writePages = require('./write-pages')
const writeConfig = require('./write-config')

const input = fs.readFileSync('../../defaults.yml', 'utf8')
const defaults = YAML.parse(input)

const templatesPath = 'templates'
const destinationPath = 'dist'

writeHomepage(defaults, templatesPath, destinationPath)
writePages(defaults, templatesPath, `${destinationPath}/docs`)

writeConfig(defaults, templatesPath, destinationPath)
