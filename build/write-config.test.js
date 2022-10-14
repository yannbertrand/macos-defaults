const fs = require('fs')
jest.mock('fs')

const writeConfig = require('./write-config')
require('./handlebars-helpers')

const templatesPath = 'templates'
const destinationPath = 'dist'
const copiedFiles = [
  '.vuepress/public/android-chrome-192x192.png',
  '.vuepress/public/android-chrome-512x512.png',
  '.vuepress/public/apple-touch-icon-120x120-precomposed.png',
  '.vuepress/public/apple-touch-icon-120x120.png',
  '.vuepress/public/apple-touch-icon-152x152-precomposed.png',
  '.vuepress/public/apple-touch-icon-152x152.png',
  '.vuepress/public/apple-touch-icon-precomposed.png',
  '.vuepress/public/apple-touch-icon.png',
  '.vuepress/public/browserconfig.xml',
  '.vuepress/public/favicon.ico',
  '.vuepress/public/favicon-16x16.png',
  '.vuepress/public/favicon-32x32.png',
  '.vuepress/public/logo.svg',
  '.vuepress/public/media-1x1.jpg',
  '.vuepress/public/media-1x1.webp',
  '.vuepress/public/media-2x1.jpg',
  '.vuepress/public/media-2x1.webp',
  '.vuepress/public/mstile-150x150.png',
  '.vuepress/public/netlify.svg',
  '.vuepress/public/robots.txt',
  '.vuepress/public/safari-pinned-tab.svg',
  '.vuepress/public/site.webmanifest',
  '.vuepress/styles/index.styl',
  '.vuepress/styles/palette.styl',
]

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

  it('should write the netlify _headers file', () => {
    const netlifyHeadersContent = readFile(
      `${destinationPath}/.vuepress/public/_headers`
    )
    expect(netlifyHeadersContent).toMatchSnapshot()
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

const algoliaConf = {
  ALGOLIA_API_KEY: 'SAMPLE_ALGOLIA_API_KEY',
  ALGOLIA_INDEX_NAME: 'SAMPLE_ALGOLIA_INDEX_NAME',
  ALGOLIA_APP_ID: 'SAMPLE_ALGOLIA_APP_ID',
}

const config = { ...supportedLanguages, ...algoliaConf }

const callWriteConfig = () =>
  writeConfig(config, templatesPath, destinationPath)
const readFile = (file) => fs.readFakeFileSync(file, 'utf8')
