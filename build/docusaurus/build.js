const fs = require('fs')
const YAML = require('yaml')

const writeTree = require('./write-tree')

const input = fs.readFileSync('../../defaults.yml', 'utf8')
const defaults = YAML.parse(input)

writeTree(defaults, 'dist')
