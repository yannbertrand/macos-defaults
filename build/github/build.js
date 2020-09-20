const fs = require('fs')
const YAML = require('yaml')

const writeInitialTree = require('./write-initial-tree')
const writeTree = require('./write-tree')

const input = fs.readFileSync('../../defaults.yml', 'utf8')
const defaults = YAML.parse(input)

writeInitialTree('dist-initial')
writeTree(defaults, 'dist')
