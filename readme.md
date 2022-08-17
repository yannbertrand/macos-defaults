# Welcome to macOS-defaults 👋
[![macos-defaults.com status](https://img.shields.io/pingpong/uptime/sp_92e9dcd33e474926853ac99968debf88)](https://macos-defaults.pingpong.host/)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/yannbertrand/macos-defaults/tree/main)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: macos_defaults](https://img.shields.io/twitter/follow/macos_defaults.svg?style=social)](https://twitter.com/macos_defaults)
[![Twitter: \_YannBertrand](https://img.shields.io/twitter/follow/\_YannBertrand.svg?style=social)](https://twitter.com/\_YannBertrand)

**Stability: 2 - Stable**

https://macos-defaults.com

`defaults` commands allow you to programmatically set System Settings of your Mac. 🤖⚙️🔧

An up-to-date list of [macOS `defaults` commands](https://macos-defaults.com) with demos. ✨

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

# macOS-defaults recorder 📷

Programmatically record a Mac screen with a predefined list of actions 📹.

The project also contains scripts that run desktop actions, take screenshots or record videos. The goal is to avoid having to manually recheck the status of commands with each new major version of macOS.

## How does it work?
Take a look at the [record folder](./record/#readme) if you want to go deeper.

# macOS-defaults builder 🤖

This project used to help compare Static Site Generators (SSG). We now removed this part but you can still find an old comparison between a few of them (Docsify, Docusaurus, VuePress and GitHub markdown) [in the project history](https://github.com/yannbertrand/macos-defaults/tree/1716cb77e7c17f8317e18e9b9418cc834bb3486c/build).

# Show your support
Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
