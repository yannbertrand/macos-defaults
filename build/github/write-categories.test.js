const fs = require('fs')
jest.mock('fs')

const writeCategories = require('./write-categories')

const templatesPath = 'templates'
const destinationPath = 'dist'

describe('write-categories', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('one category, no page', () => {
    describe('with image', () => {
      beforeEach(() =>
        callWriteCategories({
          categories: [
            {
              folder: 'category',
              name: 'Category',
              description: 'Category description.',
              image: {
                filename: 'category.png',
                width: 740,
                height: 80,
              },
            },
          ],
        })
      )

      it('should write a category/readme.md file using the category template', () => {
        const categoryReadmeContent = readFile(
          `${destinationPath}/category/readme.md`
        )
        expect(categoryReadmeContent).toMatchSnapshot()
      })

      it('should copy the category.png example image to a category folder', () => {
        const originImagePath = readFile(
          `${destinationPath}/category/category.png`
        )
        expect(originImagePath).toMatchInlineSnapshot(
          `"copied:../../images/category/category.png"`
        )
      })
    })
  })

  describe('one category, one page', () => {
    beforeEach(() =>
      callWriteCategories({
        categories: [
          {
            folder: 'category',
            name: 'Category',
            description: 'Category description.',
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
                    text: 'output when value is ~/Desktop',
                  },
                  {
                    value: '~/Pictures',
                    text: 'output when value is ~/Pictures',
                  },
                ],
                versions: ['Big Sur'],
              },
            ],
          },
        ],
      })
    )

    it('should write a category/readme.md file using the category template', () => {
      const categoryReadmeContent = readFile(
        `${destinationPath}/category/readme.md`
      )
      expect(categoryReadmeContent).toMatchSnapshot()
    })
  })

  describe('one category, two pages', () => {
    beforeEach(() =>
      callWriteCategories({
        categories: [
          {
            folder: 'category',
            name: 'Category',
            description: 'Category description.',
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
                    text: 'output when value is true',
                  },
                  {
                    value: false,
                    text: 'output when value is false',
                  },
                ],
                versions: ['Big Sur'],
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
                    text: 'output when value is true',
                  },
                  {
                    value: false,
                    default: true,
                    text: 'output when value is false',
                  },
                ],
                versions: ['Big Sur'],
              },
            ],
          },
        ],
      })
    )

    it('should write a category/readme.md file using the category template', () => {
      const categoryReadmeContent = readFile(
        `${destinationPath}/category/readme.md`
      )
      expect(categoryReadmeContent).toMatchSnapshot()
    })
  })

  describe('two categories, one page in each', () => {
    beforeEach(() =>
      callWriteCategories({
        categories: [
          {
            folder: 'category1',
            name: 'Category 1',
            description: 'Category 1 description.',
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
                    text: 'output when value is true',
                  },
                  {
                    value: false,
                    text: 'output when value is false',
                  },
                ],
                versions: ['Big Sur'],
              },
            ],
          },
          {
            folder: 'category2',
            name: 'Category 2',
            description: 'Category 2 description.',
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
                    text: 'output when value is true',
                  },
                  {
                    value: false,
                    default: true,
                    text: 'output when value is false',
                  },
                ],
                versions: ['Big Sur'],
              },
            ],
          },
        ],
      })
    )

    it('should write a category1/readme.md file using the category template', () => {
      const categoryReadmeContent = readFile(
        `${destinationPath}/category1/readme.md`
      )
      expect(categoryReadmeContent).toMatchSnapshot()
    })

    it('should write a category2/readme.md file using the category template', () => {
      const categoryReadmeContent = readFile(
        `${destinationPath}/category2/readme.md`
      )
      expect(categoryReadmeContent).toMatchSnapshot()
    })
  })
})

const callWriteCategories = (defaults) => writeCategories(defaults, templatesPath, destinationPath)
const readFile = (file) => fs.readFakeFileSync(file, 'utf8')
