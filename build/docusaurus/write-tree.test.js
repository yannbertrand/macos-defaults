const fs = require('fs')
jest.mock('fs')

const writeTree = require('./write-tree')

const destinationPath = './dist'
const copiedFiles = [
  'package.json',
  'yarn.lock',
  'siteConfig.js',
  'core/Footer.js',
  'static/index.html',
  'static/img/docusaurus.svg',
  'static/img/favicon.ico',
]

describe('write-tree', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('no categories', () => {
    beforeEach(() => callWriteTree({ categories: null }))

    it('should copy some static files', () => {
      copiedFiles.forEach(file => {
        const fileContent = readFile(`${destinationPath}/website/${file}`)
        expect(fileContent).toEqual(`copied:./templates/website/${file}`)
      })
    })

    it('should write an empty website/sidebars.json file using the sidebars template', () => {
      const docsReadmeContent = readFile(
        `${destinationPath}/website/sidebars.json`
      )
      expect(docsReadmeContent).toMatchSnapshot()
    })

    it('should write an empty docs/readme.md file using the home template', () => {
      const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
      expect(docsReadmeContent).toMatchSnapshot()
    })
  })

  describe('one category, one page', () => {
    describe('with text examples', () => {
      describe('with special chars values', () => {
        beforeEach(() =>
          callWriteTree({
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
                    versions: ['Catalina']
                  }
                ]
              }
            ]
          })
        )

        it('should copy some static files', () => {
          copiedFiles.forEach(file => {
            const fileContent = readFile(`${destinationPath}/website/${file}`)
            expect(fileContent).toEqual(`copied:./templates/website/${file}`)
          })
        })

        it('should write a website/sidebars.json file using the sidebars template', () => {
          const docsReadmeContent = readFile(
            `${destinationPath}/website/sidebars.json`
          )
          expect(docsReadmeContent).toMatchSnapshot()
        })

        it('should write an empty docs/readme.md file using the home template', () => {
          const docsReadmeContent = readFile(
            `${destinationPath}/docs/readme.md`
          )
          expect(docsReadmeContent).toMatchSnapshot()
        })

        it('should write a category/page.md file using the page template', () => {
          const pageReadmeContent = readFile(
            `${destinationPath}/docs/category/page.md`
          )
          expect(pageReadmeContent).toMatchSnapshot()
        })
      })

      describe('with requirements', () => {
        beforeEach(() =>
          callWriteTree({
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
                        value: true
                      },
                      {
                        folder: 'a-third-category',
                        key: 'a-third-key',
                        name: 'com.apple.category2 a-third-key',
                        value: 0.5
                      },
                    ],
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
                    versions: ['Catalina'],
                    after: 'killall App'
                  }
                ]
              }
            ]
          })
        )

        it('should copy some static files', () => {
          copiedFiles.forEach(file => {
            const fileContent = readFile(`${destinationPath}/website/${file}`)
            expect(fileContent).toEqual(`copied:./templates/website/${file}`)
          })
        })

        it('should write a website/sidebars.json file using the sidebars template', () => {
          const docsReadmeContent = readFile(
            `${destinationPath}/website/sidebars.json`
          )
          expect(docsReadmeContent).toMatchSnapshot()
        })

        it('should write an empty docs/readme.md file using the home template', () => {
          const docsReadmeContent = readFile(
            `${destinationPath}/docs/readme.md`
          )
          expect(docsReadmeContent).toMatchSnapshot()
        })

        it('should write a category/page.md file using the page template', () => {
          const pageReadmeContent = readFile(
            `${destinationPath}/docs/category/page.md`
          )
          expect(pageReadmeContent).toMatchSnapshot()
        })
      })

      describe('with an after command', () => {
        beforeEach(() =>
          callWriteTree({
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
                    versions: ['Catalina'],
                    after: 'killall App'
                  }
                ]
              }
            ]
          })
        )

        it('should copy some static files', () => {
          copiedFiles.forEach(file => {
            const fileContent = readFile(`${destinationPath}/website/${file}`)
            expect(fileContent).toEqual(`copied:./templates/website/${file}`)
          })
        })

        it('should write a website/sidebars.json file using the sidebars template', () => {
          const docsReadmeContent = readFile(
            `${destinationPath}/website/sidebars.json`
          )
          expect(docsReadmeContent).toMatchSnapshot()
        })

        it('should write an empty docs/readme.md file using the home template', () => {
          const docsReadmeContent = readFile(
            `${destinationPath}/docs/readme.md`
          )
          expect(docsReadmeContent).toMatchSnapshot()
        })

        it('should write a category/page.md file using the page template', () => {
          const pageReadmeContent = readFile(
            `${destinationPath}/docs/category/page.md`
          )
          expect(pageReadmeContent).toMatchSnapshot()
        })
      })
    })

    describe('with text and possible values example', () => {
      beforeEach(() =>
        callWriteTree({
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
                      text: 'output when value is start'
                    },
                    {
                      value: 'middle',
                      default: true,
                      text: 'output when value is middle'
                    },
                    {
                      value: 'end',
                      text: 'output when value is end'
                    }
                  ],
                  versions: ['Catalina']
                }
              ]
            }
          ]
        })
      )

      it('should copy some static files', () => {
        copiedFiles.forEach(file => {
          const fileContent = readFile(`${destinationPath}/website/${file}`)
          expect(fileContent).toEqual(`copied:./templates/website/${file}`)
        })
      })

      it('should write a website/sidebars.json file using the sidebars template', () => {
        const docsReadmeContent = readFile(
          `${destinationPath}/website/sidebars.json`
        )
        expect(docsReadmeContent).toMatchSnapshot()
      })

      it('should write an empty docs/readme.md file using the home template', () => {
        const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
        expect(docsReadmeContent).toMatchSnapshot()
      })

      it('should write a category/page.md file using the page template', () => {
        const pageReadmeContent = readFile(
          `${destinationPath}/docs/category/page.md`
        )
        expect(pageReadmeContent).toMatchSnapshot()
      })
    })

    describe('with image example', () => {
      beforeEach(() =>
        callWriteTree({
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
                        height: 400
                      }
                    },
                    {
                      value: false,
                      image: {
                        filename: 'false.png',
                        width: 400,
                        height: 200
                      }
                    }
                  ],
                  versions: ['Catalina']
                }
              ]
            }
          ]
        })
      )

      it('should copy some static files', () => {
        copiedFiles.forEach(file => {
          const fileContent = readFile(`${destinationPath}/website/${file}`)
          expect(fileContent).toEqual(`copied:./templates/website/${file}`)
        })
      })

      it('should write a website/sidebars.json file using the sidebars template', () => {
        const docsReadmeContent = readFile(
          `${destinationPath}/website/sidebars.json`
        )
        expect(docsReadmeContent).toMatchSnapshot()
      })

      it('should write an empty docs/readme.md file using the home template', () => {
        const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
        expect(docsReadmeContent).toMatchSnapshot()
      })

      it('should write a category/page.md file using the page template', () => {
        const pageReadmeContent = readFile(
          `${destinationPath}/docs/category/page.md`
        )
        expect(pageReadmeContent).toMatchSnapshot()
      })

      it('should copy the true.png example image to a docs/assets/category/page folder', () => {
        const originImagePath = readFile(
          `${destinationPath}/docs/assets/category/page/true.png`
        )
        expect(originImagePath).toMatchInlineSnapshot(
          `"copied:../../images/category/page/true.png"`
        )
      })

      it('should copy the false.png example image to a docs/assets/category/page folder', () => {
        const originImagePath = readFile(
          `${destinationPath}/docs/assets/category/page/false.png`
        )
        expect(originImagePath).toMatchInlineSnapshot(
          `"copied:../../images/category/page/false.png"`
        )
      })
    })

    describe('with video example', () => {
      beforeEach(() =>
        callWriteTree({
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
                        height: 400
                      }
                    },
                    {
                      value: '0.5',
                      video: {
                        filename: '0.5.mp4',
                        width: 720,
                        height: 390
                      }
                    }
                  ],
                  versions: ['Catalina']
                }
              ]
            }
          ]
        })
      )

      it('should copy some static files', () => {
        copiedFiles.forEach(file => {
          const fileContent = readFile(`${destinationPath}/website/${file}`)
          expect(fileContent).toEqual(`copied:./templates/website/${file}`)
        })
      })

      it('should write a website/sidebars.json file using the sidebars template', () => {
        const docsReadmeContent = readFile(
          `${destinationPath}/website/sidebars.json`
        )
        expect(docsReadmeContent).toMatchSnapshot()
      })

      it('should write an empty docs/readme.md file using the home template', () => {
        const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
        expect(docsReadmeContent).toMatchSnapshot()
      })

      it('should write a category/page.md file using the page template', () => {
        const pageReadmeContent = readFile(
          `${destinationPath}/docs/category/page.md`
        )
        expect(pageReadmeContent).toMatchSnapshot()
      })

      it('should copy the 0.mp4 example video to a docs/assets/category/page folder', () => {
        const originVideoPath = readFile(
          `${destinationPath}/docs/assets/category/page/0.mp4`
        )
        expect(originVideoPath).toMatchInlineSnapshot(
          `"copied:../../images/category/page/0.mp4"`
        )
      })

      it('should copy the 0.5.mp4 example image to a docs/assets/category/page folder', () => {
        const originVideoPath = readFile(
          `${destinationPath}/docs/assets/category/page/0.5.mp4`
        )
        expect(originVideoPath).toMatchInlineSnapshot(
          `"copied:../../images/category/page/0.5.mp4"`
        )
      })
    })
  })

  describe('one category, two pages', () => {
    beforeEach(() =>
      callWriteTree({
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
                versions: ['Catalina']
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
                versions: ['Catalina']
              }
            ]
          }
        ]
      })
    )

    it('should copy some static files', () => {
      copiedFiles.forEach(file => {
        const fileContent = readFile(`${destinationPath}/website/${file}`)
        expect(fileContent).toEqual(`copied:./templates/website/${file}`)
      })
    })

    it('should write a website/sidebars.json file using the sidebars template', () => {
      const docsReadmeContent = readFile(
        `${destinationPath}/website/sidebars.json`
      )
      expect(docsReadmeContent).toMatchSnapshot()
    })

    it('should write an empty docs/readme.md file using the home template', () => {
      const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
      expect(docsReadmeContent).toMatchSnapshot()
    })

    it('should write a category/page1.md file using the page template', () => {
      const pageReadmeContent = readFile(
        `${destinationPath}/docs/category/page1.md`
      )
      expect(pageReadmeContent).toMatchSnapshot()
    })

    it('should write a category/page2.md file using the page template', () => {
      const pageReadmeContent = readFile(
        `${destinationPath}/docs/category/page2.md`
      )
      expect(pageReadmeContent).toMatchSnapshot()
    })
  })

  describe('two categories, one page in each', () => {
    beforeEach(() =>
      callWriteTree({
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
                versions: ['Catalina']
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
                versions: ['Catalina']
              }
            ]
          }
        ]
      })
    )

    it('should copy some static files', () => {
      copiedFiles.forEach(file => {
        const fileContent = readFile(`${destinationPath}/website/${file}`)
        expect(fileContent).toEqual(`copied:./templates/website/${file}`)
      })
    })

    it('should write a website/sidebars.json file using the sidebars template', () => {
      const docsReadmeContent = readFile(
        `${destinationPath}/website/sidebars.json`
      )
      expect(docsReadmeContent).toMatchSnapshot()
    })

    it('should write an empty docs/readme.md file using the home template', () => {
      const docsReadmeContent = readFile(`${destinationPath}/docs/readme.md`)
      expect(docsReadmeContent).toMatchSnapshot()
    })

    it('should write a category1/page.md file using the page template', () => {
      const pageReadmeContent = readFile(
        `${destinationPath}/docs/category1/page.md`
      )
      expect(pageReadmeContent).toMatchSnapshot()
    })

    it('should write a category2/page.md file using the page template', () => {
      const pageReadmeContent = readFile(
        `${destinationPath}/docs/category2/page.md`
      )
      expect(pageReadmeContent).toMatchSnapshot()
    })
  })
})

const callWriteTree = sourceFile => writeTree(sourceFile, destinationPath)
const readFile = file => fs.readFakeFileSync(file, 'utf8')
