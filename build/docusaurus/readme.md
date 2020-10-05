# Docusaurus Build
![Docusaurus build status](https://api.netlify.com/api/v1/badges/92522518-2bcc-4086-8926-6c3534666011/deploy-status)

## My opinion
Docusaurus was quite though to setup. It goes too far for my need. It's certainly more suited for real project documentation.

### 😄 Good
- Default theme is nice
- It's possible to use React components
- Default theme got a footer

### 😕 Bad
- The new project boilerplate is too complicated. Would have prefer something simpler but extensible as I need it
- Search is only available using Algolia

### 😫 Ugly
- Didn't find a way not to have that `/docs/` base href

## How does it work?
Here is the built website architecture:
- [`website/package.json`](./templates/website/package.json)
  * To install docusaurus
- [`website/siteConfig.js`](./templates/website/siteConfig.js)
  * Main configuration
- [`website/sidebars.json`](./templates/website/sidebars.json.handlebars)
  * Construct sidebar architecture
- [`website/core/Footer.js`](./templates/website/core/Footer.js)
  * A React footer... I'm not even sure I can throw this one away
- [`website/static/index.html`](./templates/website/static/index.html)
  * The page the user accesses if he goes to `/`. It just redirects to `/docs/`...
- `docs/readme.md`
  * The main page content

All the other pages are markdown files that are carefully put under their folder (e.g. `docs/screenshot/disable-shadow.md`). Assets are stored under the `docs/assets` folder.

I didn't implement internationalization as it requires the use of the [Crowdin](https://crowdin.com) SaaS solution and is [likely to change in v2](https://github.com/facebook/docusaurus/issues/3317).

There is a second build phase where Docusaurus generates the static website.

## Try locally
### 🏗 Install

```sh
yarn install
```

### 🚀 Usage

This will build the [defaults.yml file](../../defaults.yml) and run a Docusaurus server on http://localhost:3000/docs/. Sources of the website are available in the `dist` folder.

```sh
yarn start
```

### 🚧 Run unit tests

```sh
yarn test
```
