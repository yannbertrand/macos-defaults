const fs = require('fs')
jest.mock('fs')

const writeConfig = require('./write-config')

const templatesPath = 'templates'
const destinationPath = 'dist'
const copiedFiles = [
  'package.json',
  'yarn.lock',
  'siteConfig.js',
  'core/Footer.js',
  'static/index.html',
  'static/img/docusaurus.svg',
  'static/img/favicon.ico',
]

describe('write-config', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('no categories', () => {
    beforeEach(() => callWriteConfig({ categories: null }))

    it('should copy some static files', () => {
      copiedFiles.forEach(file => {
        const fileContent = readFile(`${destinationPath}/website/${file}`)
        expect(fileContent).toEqual(`copied:${templatesPath}/website/${file}`)
      })
    })

    it('should write an empty website/sidebars.json file using the sidebars template', () => {
      const docsReadmeContent = readFile(
        `${destinationPath}/website/sidebars.json`
      )
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })

  describe('one category, one page', () => {
    beforeEach(() =>
      callWriteConfig({
        categories: [
          {
            folder: 'category',
            name: 'Category',
            keys: [
              {
                key: 'page',
                domain: 'com.apple.category',
                title: 'Page',
                description: 'Page description.',
                param: { type: 'string' },
                examples: [
                  {
                    value: '~/Desktop',
                    default: true,
                    text: 'output when value is ~/Desktop'
                  },
                  {
                    value: '~/Pictures',
                    text: 'output when value is ~/Pictures'
                  }
                ],
                versions: ['Big Sur']
              }
            ]
          }
        ]
      })
    )

    it('should copy some static files', () => {
      copiedFiles.forEach(file => {
        const fileContent = readFile(`${destinationPath}/website/${file}`)
        expect(fileContent).toEqual(`copied:${templatesPath}/website/${file}`)
      })
    })

    it('should write a website/sidebars.json file using the sidebars template', () => {
      const docsReadmeContent = readFile(
        `${destinationPath}/website/sidebars.json`
      )
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })

  describe('one category, two pages', () => {
    beforeEach(() =>
      callWriteConfig({
        categories: [
          {
            folder: 'category',
            name: 'Category',
            keys: [
              {
                key: 'page1',
                domain: 'com.apple.category',
                title: 'Page 1',
                description: 'Page 1 description.',
                param: { type: 'bool' },
                examples: [
                  {
                    value: true,
                    default: true,
                    text: 'output when value is true'
                  },
                  {
                    value: false,
                    text: 'output when value is false'
                  }
                ],
                versions: ['Big Sur']
              },
              {
                key: 'page2',
                domain: 'com.apple.category',
                title: 'Page 2',
                description: 'Page 2 description.',
                param: { type: 'bool' },
                examples: [
                  {
                    value: true,
                    text: 'output when value is true'
                  },
                  {
                    value: false,
                    default: true,
                    text: 'output when value is false'
                  }
                ],
                versions: ['Big Sur']
              }
            ]
          }
        ]
      })
    )

    it('should copy some static files', () => {
      copiedFiles.forEach(file => {
        const fileContent = readFile(`${destinationPath}/website/${file}`)
        expect(fileContent).toEqual(`copied:${templatesPath}/website/${file}`)
      })
    })

    it('should write a website/sidebars.json file using the sidebars template', () => {
      const docsReadmeContent = readFile(
        `${destinationPath}/website/sidebars.json`
      )
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })

  describe('two categories, one page in each', () => {
    beforeEach(() =>
      callWriteConfig({
        categories: [
          {
            folder: 'category1',
            name: 'Category 1',
            keys: [
              {
                key: 'page',
                domain: 'com.apple.category1',
                title: 'Page',
                description: 'Page description.',
                param: { type: 'bool' },
                examples: [
                  {
                    value: true,
                    default: true,
                    text: 'output when value is true'
                  },
                  {
                    value: false,
                    text: 'output when value is false'
                  }
                ],
                versions: ['Big Sur']
              }
            ]
          },
          {
            folder: 'category2',
            name: 'Category 2',
            keys: [
              {
                key: 'page',
                domain: 'com.apple.category2',
                title: 'Page',
                description: 'Page description.',
                param: { type: 'bool' },
                examples: [
                  {
                    value: true,
                    text: 'output when value is true'
                  },
                  {
                    value: false,
                    default: true,
                    text: 'output when value is false'
                  }
                ],
                versions: ['Big Sur']
              }
            ]
          }
        ]
      })
    )

    it('should copy some static files', () => {
      copiedFiles.forEach(file => {
        const fileContent = readFile(`${destinationPath}/website/${file}`)
        expect(fileContent).toEqual(`copied:${templatesPath}/website/${file}`)
      })
    })

    it('should write a website/sidebars.json file using the sidebars template', () => {
      const docsReadmeContent = readFile(
        `${destinationPath}/website/sidebars.json`
      )
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })
})

const callWriteConfig = defaults => writeConfig(defaults, templatesPath, destinationPath)
const readFile = file => fs.readFakeFileSync(file, 'utf8')
