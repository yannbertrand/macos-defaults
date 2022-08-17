# Production Build

![macos-defaults.com build status](https://api.netlify.com/api/v1/badges/44ddda91-1e32-4e41-9afc-5f640b33aca7/deploy-status)

## How does it work?

Here is the built website architecture:

- [`.vuepress/config.yml`](./templates/.vuepress/config.yml.handlebars)
  - Contains the whole VuePress configuration from title to sidebar config
- `readme.md`
  - The main page content

All the other pages (including translations) are markdown files that are carefully put under their folder (e.g. `screenshot/disable-shadow.md`). Assets are stored at the same level.

There is a second build phase where VuePress generates the static website.

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
