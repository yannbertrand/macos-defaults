# GitHub Build

:warning: GitHub build is not maintained anymore.

Instead of building a website, I wanted to try constructing GitHub readmes linked from one to the other.
As the project is simple, I thought it could be a decent choice.

## My opinion

Unfortunately, it's not possible to display videos in GitHub Flavored Markdown. Images can't be sized using HTML `width` and `height` to avoid [Cumulative Layout Shift](https://web.dev/cls/). I also didn't a find a proper way to internationalize.

Apart from that I'm sure it could be used for real small projects as it avoids setting up anything else.

## How does it work?

The [build-github.yml](../../.github/workflows/build-github.yml) GitHub Action workflow is triggered when the [defaults.yml file](../../defaults.yml) or the related build scripts are updated.

This workflow compile a `dist` folder where [gitmoji-changelog](https://github.com/frinyvonnick/gitmoji-changelog) is run and everything is commited and pushed to the [current](https://github.com/yannbertrand/macos-defaults/tree/current) branch.

There is also some complicated stuff to build a clean initial commit, that's the point of `write-initial-tree.js`.

The GitHub action that runs gitmoji-changelog and pushes to the other branch can be found on [gha-publish-to-git](https://github.com/yannbertrand/gha-publish-to-git/tree/develop).

## Try locally

### 🏗 Install

```sh
yarn install
```

### 🚀 Usage

This will build the [defaults.yml file](../../defaults.yml) to a `dist` and a `dist-initial` folders containing GitHub Flavored Markdown files.

```sh
yarn build
```

It's not yet possible to launch a webserver to preview it locally.

### 🚧 Run unit tests

```sh
yarn test
```
