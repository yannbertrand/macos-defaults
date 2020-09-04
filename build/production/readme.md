# Production Build
![macos-defaults.com build status](https://api.netlify.com/api/v1/badges/44ddda91-1e32-4e41-9afc-5f640b33aca7/deploy-status)

## How does it work?
It's similar to the VuePress build with a few tweaks (accent color, assets, SEO stuff...).

See [VuePress' build detail](../vuepress/readme.md) for more explanations.

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
