# VuePress Build
## My opinion
VuePress was really easy to setup.

### 😄 Good
- Really easy to setup & deploy
- Default theme is nice
- It's possible to use Vue components
- Development mode is pleasant

### 😕 Bad
- Documentation is not super easy
- Lack of other official themes

### 😫 Ugly
- 🤷‍♂️

## How does it work?
Here is the built website architecture:
- [`.vuepress/config.yml`](./templates/.vuepress/config.yml.handlebars)
  * Contains the whole VuePress configuration from title to sidebar config
- `readme.md`
  * The main page content

All the other pages are markdown files that are carefully put under their folder (e.g. `screenshot/disable-shadow.md`). Assets are stored at the same level.

There is a second build phase where VuePress generates the static website.

I also added the [@vuepress/medium-zoom](https://v1.vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html) plugin to add Medium zoom on images.

## Try locally
### 🏗 Install

```sh
yarn install
```

### 🚀 Usage

This will build the [defaults.yml file](../../defaults.yml) and run a VuePress server on http://localhost:8080/. Sources of the website are available in the `docs` folder.

```sh
yarn start
```

### 🚧 Run unit tests

```sh
yarn test
```
