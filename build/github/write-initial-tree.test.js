const fs = require('fs')
jest.mock('fs')

const writeInitialTree = require('./write-initial-tree')

const initialDestinationPath = './dist-initial'
const copiedFiles = ['.gitmoji-changelogrc', 'license']

describe('write-initial-tree', () => {
  beforeEach(() => {
    writeInitialTree(initialDestinationPath)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should copy some static files', () => {
    copiedFiles.forEach(file => {
      const fileContent = readFile(`${initialDestinationPath}/${file}`)
      expect(fileContent).toEqual(`copied:./templates/${file}`)
    })
  })

  it('should write an empty readme.md file using the home template', () => {
    const rootReadmeContent = readFile(`${initialDestinationPath}/readme.md`)
    expect(rootReadmeContent).toMatchSnapshot()
  })
})

const readFile = file => fs.readFakeFileSync(file, 'utf8')
