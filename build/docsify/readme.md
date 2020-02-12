# docsify Build
## How does it work?
Here is the built website architecture:
- index.html
 * A basic HTML file that will build the pages dynamically from the others files using the docsify JS library
- _sidebar.md
 * The sidebar configuration which is really easy to setup
- readme.md
 * The main page content

All the other pages are markdown files that are carefully put under their folder (e.g. screenshot/disable-shadow.md).

It is deployed as is on Netlify!

docsify was the easiest to setup as it's pretty much the same markdown as VuePress.

I also added some plugins (JS libs in the index.html file):
- prismjs prism-bash for language highliting
- docsify search to get a full text search
- docsify zoom-image to add Medium zoom on images
- docsify-copy-code to... Copy code

### Good
- Really easy to setup & deploy
- Provides 3 other themes than the Vue default one

### Bad
- Requires JavaScript
- The full text search is pretty bad
- The docsify-cli is really basic

### Ugly
- The pure theme is really ugly

## Try locally
### 🏗 Install

```sh
yarn install
```

### 🚀 Usage

This will build the [defaults.yml file](../../defaults.yml) and run a docsify server on http://localhost:3000/.

```sh
yarn start
```

### 🚧 Run unit tests

```sh
yarn test
```
