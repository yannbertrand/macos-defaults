const fs = require('fs')
jest.mock('fs')

const writeConfig = require('./write-config')

const templatesPath = 'templates'
const destinationPath = 'dist'
const copiedFiles = ['.vuepress/public/favicon.ico']

describe('write-config', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  beforeEach(() => {
    callWriteConfig()
  })

  it('should copy some static files', () => {
    copiedFiles.forEach((file) => {
      const fileContent = readFile(`${destinationPath}/${file}`)
      expect(fileContent).toEqual(`copied:${templatesPath}/${file}`)
    })
  })

  it('should write a vuepress config.yml file using the template', () => {
    const vuepressConfigContent = readFile(
      `${destinationPath}/.vuepress/config.yml`
    )
    expect(vuepressConfigContent).toMatchSnapshot()
  })
})

const supportedLanguages = {
  languages: [
    {
      url: '/',
      lang: 'en-US',
      home: 'Home',
      defaults: {
        categories: [
          {
            folder: 'category1',
            name: 'Category 1',
            keys: [
              {
                key: 'page',
                title: 'Page',
              },
            ],
          },
          {
            folder: 'category2',
            name: 'Category 2',
            keys: [
              {
                key: 'page',
                title: 'Page',
              },
            ],
          },
        ],
      },
    },
    {
      url: '/fr/',
      lang: 'fr-FR',
      home: 'Accueil',
      defaults: {
        categories: [
          {
            folder: 'categorie1',
            name: 'Catégorie 1',
            keys: [
              {
                key: 'page',
                title: 'Page',
              },
            ],
          },
          {
            folder: 'categorie2',
            name: 'Catégorie 2',
            keys: [
              {
                key: 'page',
                title: 'Page',
              },
            ],
          },
        ],
      },
    },
  ],
}

const callWriteConfig = () =>
  writeConfig(supportedLanguages, templatesPath, destinationPath)
const readFile = (file) => fs.readFakeFileSync(file, 'utf8')
