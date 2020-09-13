const fs = require('fs')
jest.mock('fs')

const writeHomepage = require('./write-homepage')

const templatesPath = 'templates'
const destinationPath = './dist'

describe('write-homepage', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('no categories', () => {
    beforeEach(() => callWriteHomepage({ categories: null }))

    it('should write an empty docs/readme.md file using the home template', () => {
      const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })

  describe('one category, no page', () => {
    beforeEach(() =>
      callWriteHomepage({
        categories: [
          {
            folder: 'category',
            name: 'Category',
            description: 'Category description.',
            image: {
              filename: 'category.png',
              width: 740,
              height: 80
            }
          }
        ]
      })
    )

    it('should write a docs/readme.md file using the home template', () => {
      const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })

  describe('one category, one page', () => {
    beforeEach(() =>
      callWriteHomepage({
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

    it('should write a docs/readme.md file using the home template', () => {
      const docsReadmeContent = readFile(
        `${destinationPath}/docs/readme.md`
      )
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })

  describe('one category, two pages', () => {
    beforeEach(() =>
      callWriteHomepage({
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

    it('should write a docs/readme.md file using the home template', () => {
      const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })

  describe('two categories, one page in each', () => {
    beforeEach(() =>
      callWriteHomepage({
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

    it('should write a docs/readme.md file using the home template', () => {
      const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })
})

const callWriteHomepage = defaults => writeHomepage(defaults, templatesPath, destinationPath)
const readFile = file => fs.readFakeFileSync(file, 'utf8')
