# docsify Build
![Docsify build status](https://api.netlify.com/api/v1/badges/8af81039-12cc-4080-a434-d8f162d5c416/deploy-status)

## My opinion
docsify was the easiest to setup as it's pretty much the same markdown as VuePress.

### 😄 Good
- Really easy to setup & deploy
- index.html direct access
- Provides 3 other themes than the Vue default one

### 😕 Bad
- Requires JavaScript
- The full text search is pretty bad
- The docsify-cli is really basic

### 😫 Ugly
- The pure theme

## How does it work?
Here is the built website architecture:
- [`index.html`](./templates/index.html)
  * A basic HTML file that will build the pages dynamically from the others files using the docsify JS library
- [`_sidebar.md`](./templates/_sidebar.md.handlebars)
  * The sidebar configuration which is really easy to setup
- `readme.md`
  * The main page content

All the other pages are markdown files that are carefully put under their folder (e.g. `screenshot/disable-shadow.md`). Assets are stored at the same level.

It is deployed as is on Netlify!

I also added some plugins ([JS libs in the index.html file](./templates/index.html#L27)):
- [prismjs prism-bash](https://docsify.js.org/#/language-highlight) for language highliting
- [docsify search](https://docsify.js.org/#/plugins?id=full-text-search) to get a full text search
- [docsify zoom-image](https://docsify.js.org/#/plugins?id=zoom-image) to add Medium zoom on images
- [docsify copy-to-clipboard](https://docsify.js.org/#/plugins?id=copy-to-clipboard) to... Copy code

## Try locally
### 🏗 Install

```sh
yarn install
```

### 🚀 Usage

This will build the [defaults.yml file](../../defaults.yml) and run a docsify server on http://localhost:3000/. Sources of the website are available in the `docs` folder.

```sh
yarn start
```

### 🚧 Run unit tests

```sh
yarn test
```
