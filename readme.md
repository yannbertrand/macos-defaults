# Welcome to macOS-defaults 👋

[![macos-defaults.com status](https://img.shields.io/pingpong/uptime/sp_92e9dcd33e474926853ac99968debf88)](https://macos-defaults.pingpong.host/)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/yannbertrand/macos-defaults/tree/main)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)
[![Twitter: macos_defaults](https://img.shields.io/twitter/follow/macos_defaults.svg?style=social)](https://twitter.com/macos_defaults)
[![Twitter: _YannBertrand](https://img.shields.io/twitter/follow/_YannBertrand.svg?style=social)](https://twitter.com/_YannBertrand)

**Stability: 2 - Stable**

https://macos-defaults.com

`defaults` commands allow you to programmatically set System Settings of your Mac. 🤖⚙️🔧

An up-to-date list of [macOS `defaults` commands](https://macos-defaults.com) with demos. ✨

## Add a command

All the listed `defaults` commands are Markdown files stored in the [docs folder](./docs). It is recommended to look at a few of them before proposing a new one:

- https://macos-defaults.com/dock/orientation.html
- https://macos-defaults.com/dock/autohide-time-modifier.html
- https://macos-defaults.com/screenshots/disable-shadow.html

Here are the mandatory infos to add a new command:

- The defaults command's domain
- The command's key
- A neutral title
- A simple description
- Parameter type, and list of accepted values when applicable
- Other command dependency
- A scenario to test the command is still working
- The corresponding option access from UI when it exists
- At least two examples with a small text description
- Ideally, an image or video for each example
- Compatible versions it has been tested on

I will always prefer images and videos examples as they help users and maintenance a lot! Please consider it if you want to [open a PR](https://github.com/yannbertrand/macos-defaults/compare).

### How to discover a `defaults` command

Using this [bash script](diff.sh) (`bash ./diff.sh`), you'll be able to find out which key changed when you change a system or app settings.

After you find the key with your options, simply run `defaults find ${keyname}` to find the domain it is saved in.

# macOS-defaults recorder 📷

Some screenshots and videos were recorded programmatically in the past. Take a look at [the `record` folder in the project history](https://github.com/yannbertrand/macos-defaults/tree/a48f54fe1aab9dd5251cb08a984f4ccf19af6778/record) to learn more about it.

# macOS-defaults builder 🤖

This project used to help compare Static Site Generators (SSG). We now removed this part but you can still find an old comparison between a few of them (Docsify, Docusaurus, VuePress and GitHub markdown) [in the project history](https://github.com/yannbertrand/macos-defaults/tree/1716cb77e7c17f8317e18e9b9418cc834bb3486c/build).

# Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
