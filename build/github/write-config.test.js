const fs = require('fs')
jest.mock('fs')

const writeConfig = require('./write-config')

const templatesPath = 'templates'
const destinationPath = 'dist'
const copiedFiles = ['.gitmoji-changelogrc', 'license']

describe('write-config', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  beforeEach(() => {
    callWriteConfig()
  })

  it('should copy some static files', () => {
    copiedFiles.forEach(file => {
      const fileContent = readFile(`${destinationPath}/${file}`)
      expect(fileContent).toEqual(`copied:${templatesPath}/${file}`)
    })
  })
})

const callWriteConfig = () => writeConfig({}, templatesPath, destinationPath)
const readFile = file => fs.readFakeFileSync(file, 'utf8')
