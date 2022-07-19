# Welcome to macOS-defaults 👋
[![macos-defaults.com build status](https://img.shields.io/netlify/44ddda91-1e32-4e41-9afc-5f640b33aca7)](https://macos-defaults.com)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/yannbertrand/macos-defaults/tree/main)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: \_YannBertrand](https://img.shields.io/twitter/follow/\_YannBertrand.svg?style=social)](https://twitter.com/\_YannBertrand)

**Stability: 1 - Experimental**

> https://macos-defaults.com 
>
> `defaults` commands allow you to programmatically set System Settings of your Mac. 🤖⚙️🔧
>
> An up-to-date list of [macOS `defaults` commands](https://macos-defaults.com) with demos. ✨

## Add a command
All the listed `defaults` commands are stored in localized [defaults*.yml files](./defaults.yml). Here is how a command's info is designed:

```yml
      - key: the-command-name-separated-with-dashes # The command's key
        domain: com.some-domain.app-name # The command's domain
        title: My command
        description: Explaining what my command does.
        param:
          type: bool # Other types can be used
        examples: # A list of examples
          - value: false # This example sets the value to `false`
            default: true # `false` is the default value of the command
            image: # Optional: an auto recorded screenshot
              filename: "false.png"
              width: 800
              height: 600
            text: Explaining what happens when the command is set to `false`
          - value: true # This one sets the value to `true`
            image:
              filename: "true.png" # The name of the image
              width: 800 # The width of the image
              height: 600 # And its height
            text: Explaining what happens when the command is set to `true`
        versions: [Big Sur, Catalina] # It's been tested on Big Sur and Catalina
```

You can validate these files locally using the provided [JSON schema](./defaults.schema.json) using the [VSCode YAML Language support extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml) or on the CLI with:

```sh
npx pajv validate -s defaults.schema.json -d defaults.yml
```

Images and videos are built programmatically. Take a look at the [record folder](./record/#readme) to find out how to record some. I will always prefer images and videos examples as they help maintenance a lot! Please consider it if you want to [open a PR](https://github.com/yannbertrand/macos-defaults/compare).

### How to discover a `defaults` command
Using this [bash script](diff.sh) (`bash ./diff.sh`), you'll be able to find out which key changed when you change a system or app settings.

After you find the key with your options, simply run `defaults find ${keyname}` to find the domain it is saved in.

# macOS-defaults builder 🤖
> Compare Static Site Generators by automatically building websites from [this yaml file](./defaults.yml) content 🏗.

It currently builds to:

<table>
  <tr align="center">
    <td><strong><a href="https://github.com/yannbertrand/macos-defaults/tree/current">GitHub Flavored Markdown</a></strong></td>
    <td><strong><a href="https://macos-defaults-vuepress.netlify.com/">VuePress</a></strong></td>
    <td><strong><a href="https://macos-defaults-docusaurus.netlify.com/docs/">Docusaurus</a></strong></td>
    <td><strong><a href="https://macos-defaults-docsify.netlify.com/">docsify</a></strong></td>
  </tr>
  <tr align="center">
    <td width="25%">
      <a href="https://github.com/yannbertrand/macos-defaults/tree/current"><img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt=""></a>
    </td>
    <td width="25%">
      <a href="https://macos-defaults-vuepress.netlify.com/"><img src="https://vuepress.vuejs.org/hero.png" alt=""></a>
    </td>
    <td width="25%">
      <a href="https://macos-defaults-docusaurus.netlify.com/docs/"><img src="https://docusaurus.io/img/docusaurus.svg" alt=""></a>
    </td>
    <td width="25%">
      <a href="https://macos-defaults-docsify.netlify.com/"><img src="https://docsify.js.org/_media/icon.svg" alt=""></a>
    </td>
  </tr>
  <tr align="center">
    <td>latest</td>
    <td>1.6.0</td>
    <td>1.14.6</td>
    <td>latest</td>
  </tr>
</table>

## Features
/ | [GitHub](https://github.github.com/gfm/) | [VuePress](https://vuepress.vuejs.org/) | [Docusaurus](https://docusaurus.io/) | [docsify](https://docsify.js.org/#/)
--: | :-: | :-: | :-: | :-:
**Stars ⭐️** | N/A | [![](https://img.shields.io/github/stars/vuejs/vuepress?label=&color=yellow)](https://github.com/vuejs/vuepress) | [![](https://img.shields.io/github/stars/facebook/docusaurus?label=&color=yellow)](https://github.com/facebook/Docusaurus) | [![](https://img.shields.io/github/stars/docsifyjs/docsify?label=&color=yellow)](https://github.com/docsifyjs/docsify)
**No JS needed** | ✅ | ✅ | ✅ | ❌
**Code highlight** | ✅<br>[docs](https://help.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks#syntax-highlighting) | ✅<br>[docs](https://vuepress.vuejs.org/guide/markdown.html#syntax-highlighting-in-code-blocks)<br>([Prism.js](https://prismjs.com/)) | ✅<br>[docs](https://docusaurus.io/docs/en/doc-markdown#syntax-highlighting)<br>([Highlight.js](https://highlightjs.org/)) | ✅<br>[docs](https://docsify.js.org/#/language-highlight?id=language-highlight)<br>(plugin [Prism.js](https://prismjs.com/))
**Search** | ✅ | ✅ | ❌ | ✅<br>([plugin](https://docsify.js.org/#/plugins?id=full-text-search))
**Video support** | ❌ | ✅ | ✅ | ✅
**Official themes** | 1 | 1 | 1 | 4
**Netlify build time** | N/A | 57s | 1m 1s | 38s
**Click to copy code** | ❌ | ❌ | ❌ | ✅<br>([plugin](https://docsify.js.org/#/plugins?id=copy-to-clipboard))
**Category page** | ✅ | ✅ | ❌ | ✅
**Default port** | N/A | 8080 | 3000 | 3000

## How does it work?
- See [GitHub's build detail](./build/github/#readme) [![GitHub build status](https://github.com/yannbertrand/macos-defaults/workflows/Build%20GitHub/badge.svg)](https://github.com/yannbertrand/macos-defaults/tree/current)
- See [VuePress' build detail](./build/vuepress/#readme) [![VuePress build status](https://img.shields.io/netlify/e73b1f35-9442-45e1-b7b4-6eed2b102a9c)](https://macos-defaults-vuepress.netlify.app/)
- See [Docusaurus' build detail](./build/docusaurus/#readme) [![Docusaurus build status](https://img.shields.io/netlify/92522518-2bcc-4086-8926-6c3534666011)](https://macos-defaults-docusaurus.netlify.app/)
- See [Docsify's build detail](./build/docsify/#readme) [![Docsify build status](https://img.shields.io/netlify/8af81039-12cc-4080-a434-d8f162d5c416)](https://macos-defaults-docsify.netlify.app/)

# macOS-defaults recorder 📷

> Programmatically record a Mac screen with a predefined list of actions 📹.

The project also contains scripts that run desktop actions, take screenshots or record videos. The goal is to avoid having to manually recheck the status of commands with each new major version of macOS.

## How does it work?
Take a look at the [record folder](./record/#readme) if you want to go deeper.

# Show your support
Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
