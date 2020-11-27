const fs = require('fs')
jest.mock('fs')

const writePages = require('./write-pages')

const templatesPath = 'templates'
const destinationPath = './dist/docs'

describe('write-pages', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('one category, one page', () => {
    describe('with text examples', () => {
      describe('with special chars values', () => {
        beforeEach(() =>
          callWritePages({
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

        it('should write a category/page.md file using the page template', () => {
          const pageReadmeContent = readFile(
            `${destinationPath}/category/page.md`
          )
          expect(pageReadmeContent).toMatchSnapshot()
        })
      })

      describe('with requirements', () => {
        beforeEach(() =>
          callWritePages({
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
                    requirements: [
                      {
                        folder: 'another-category',
                        key: 'another-key',
                        name: 'com.apple.category2 another-key',
                        value: true,
                      },
                      {
                        folder: 'a-third-category',
                        key: 'a-third-key',
                        name: 'com.apple.category2 a-third-key',
                        value: 0.5,
                      },
                    ],
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
                    after: 'killall App',
                  },
                ],
              },
            ],
          })
        )

        it('should write a category/page.md file using the page template', () => {
          const pageReadmeContent = readFile(
            `${destinationPath}/category/page.md`
          )
          expect(pageReadmeContent).toMatchSnapshot()
        })
      })

      describe('with an after command', () => {
        beforeEach(() =>
          callWritePages({
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
                        text: 'output when value is ~/Desktop',
                      },
                      {
                        value: '~/Pictures',
                        text: 'output when value is ~/Pictures',
                      },
                    ],
                    versions: ['Big Sur'],
                    after: 'killall App',
                  },
                ],
              },
            ],
          })
        )

        it('should write a category/page.md file using the page template', () => {
          const pageReadmeContent = readFile(
            `${destinationPath}/category/page.md`
          )
          expect(pageReadmeContent).toMatchSnapshot()
        })
      })
    })

    describe('with text and possible values example', () => {
      beforeEach(() =>
        callWritePages({
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
                  param: { type: 'string', values: ['start', 'middle', 'end'] },
                  examples: [
                    {
                      value: 'start',
                      text: 'output when value is start',
                    },
                    {
                      value: 'middle',
                      default: true,
                      text: 'output when value is middle',
                    },
                    {
                      value: 'end',
                      text: 'output when value is end',
                    },
                  ],
                  versions: ['Big Sur'],
                },
              ],
            },
          ],
        })
      )

      it('should write a category/page.md file using the page template', () => {
        const pageReadmeContent = readFile(
          `${destinationPath}/category/page.md`
        )
        expect(pageReadmeContent).toMatchSnapshot()
      })
    })

    describe('with image example', () => {
      beforeEach(() =>
        callWritePages({
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
                  param: { type: 'bool' },
                  examples: [
                    {
                      value: true,
                      default: true,
                      image: {
                        filename: 'true.png',
                        width: 600,
                        height: 400,
                      },
                    },
                    {
                      value: false,
                      image: {
                        filename: 'false.png',
                        width: 400,
                        height: 200,
                      },
                    },
                  ],
                  versions: ['Big Sur'],
                },
              ],
            },
          ],
        })
      )

      it('should write a category/page.md file using the page template', () => {
        const pageReadmeContent = readFile(
          `${destinationPath}/category/page.md`
        )
        expect(pageReadmeContent).toMatchSnapshot()
      })

      it('should copy the true.png example image to a docs/assets/category/page folder', () => {
        const originImagePath = readFile(
          `${destinationPath}/assets/category/page/true.png`
        )
        expect(originImagePath).toMatchInlineSnapshot(
          `"copied:../../images/category/page/true.png"`
        )
      })

      it('should copy the false.png example image to a docs/assets/category/page folder', () => {
        const originImagePath = readFile(
          `${destinationPath}/assets/category/page/false.png`
        )
        expect(originImagePath).toMatchInlineSnapshot(
          `"copied:../../images/category/page/false.png"`
        )
      })
    })

    describe('with video example', () => {
      beforeEach(() =>
        callWritePages({
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
                  param: { type: 'float' },
                  examples: [
                    {
                      value: '0',
                      default: true,
                      video: {
                        filename: '0.mp4',
                        width: 750,
                        height: 400,
                      },
                    },
                    {
                      value: '0.5',
                      video: {
                        filename: '0.5.mp4',
                        width: 720,
                        height: 390,
                      },
                    },
                  ],
                  versions: ['Big Sur'],
                },
              ],
            },
          ],
        })
      )

      it('should write a category/page.md file using the page template', () => {
        const pageReadmeContent = readFile(
          `${destinationPath}/category/page.md`
        )
        expect(pageReadmeContent).toMatchSnapshot()
      })

      it('should copy the 0.mp4 example video to a docs/assets/category/page folder', () => {
        const originVideoPath = readFile(
          `${destinationPath}/assets/category/page/0.mp4`
        )
        expect(originVideoPath).toMatchInlineSnapshot(
          `"copied:../../images/category/page/0.mp4"`
        )
      })

      it('should copy the 0.5.mp4 example image to a docs/assets/category/page folder', () => {
        const originVideoPath = readFile(
          `${destinationPath}/assets/category/page/0.5.mp4`
        )
        expect(originVideoPath).toMatchInlineSnapshot(
          `"copied:../../images/category/page/0.5.mp4"`
        )
      })
    })
  })

  describe('one category, two pages', () => {
    beforeEach(() =>
      callWritePages({
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

    it('should write a category/page1.md file using the page template', () => {
      const pageReadmeContent = readFile(`${destinationPath}/category/page1.md`)
      expect(pageReadmeContent).toMatchSnapshot()
    })

    it('should write a category/page2.md file using the page template', () => {
      const pageReadmeContent = readFile(`${destinationPath}/category/page2.md`)
      expect(pageReadmeContent).toMatchSnapshot()
    })
  })

  describe('two categories, one page in each', () => {
    beforeEach(() =>
      callWritePages({
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

    it('should write a category1/page.md file using the page template', () => {
      const pageReadmeContent = readFile(`${destinationPath}/category1/page.md`)
      expect(pageReadmeContent).toMatchSnapshot()
    })

    it('should write a category2/page.md file using the page template', () => {
      const pageReadmeContent = readFile(`${destinationPath}/category2/page.md`)
      expect(pageReadmeContent).toMatchSnapshot()
    })
  })
})

const callWritePages = (defaults) =>
  writePages(defaults, templatesPath, destinationPath)
const readFile = (file) => fs.readFakeFileSync(file, 'utf8')
