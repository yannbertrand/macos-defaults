---
title: macOS defaults contribution guide
description: To contribute to the website, follow these guidelines.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > contributing
  - - meta
    - property: 'og:description'
      content: To contribute to the website, follow these guidelines.
outline: [2, 3, 4]
---

# Contributing

In case your interested in contributing to the macOS defaults website, please respect the following rules.

All the listed `defaults` commands are Markdown files stored in the [docs folder](https://github.com/yannbertrand/macos-defaults/tree/main/docs). It is recommended to look at a few of them before proposing a new one:

- https://macos-defaults.com/dock/orientation.html
- https://macos-defaults.com/dock/autohide-time-modifier.html
- https://macos-defaults.com/screenshots/disable-shadow.html

## Creating the page

- Each page references one command.
- The page should be a `.md` file in one folder inside `docs`.
- Do not create a new folder for one page only. At least 3 pages are needed before considering creating a folder. Use the `misc` folder in case you can't find one.
- The filename should be the lowercased command key. Examples:
  - `defaults write com.apple.dock "autohide" -bool "true"` is `autohide.md`
  - `defaults write NSGlobalDomain "AppleSpacesSwitchOnActivate" -bool "true"` is `applespacesswitchonactivate.md`
  - `defaults write com.apple.dock "scroll-to-open" -bool "true"` is `scroll-to-open.md`

## Page content

> [!IMPORTANT]
> All infos must be unopionated.
>
> Avoid words like "enable"/"disable", "allow"/"disallow", "turn on"/"turn off"...
> Prefer "toggle", "switch", "set"...

### Meta informations

Some meta informations are required to ensure proper SEO and social media sharing. VitePress uses [Frontmatter](https://vitepress.dev/guide/frontmatter) to fill in these info.

::: details Complete example:

```md
---
title: Autohide animation time | Dock
description: Change the Dock opening and closing animation times.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Autohide animation time
  - - meta
    - property: 'og:description'
      content: Change the Dock opening and closing animation times.
---
```

:::

The following fields are mandatory.

#### Title

> [!IMPORTANT]
> The page title must be 1 to 5 words.

| Field name | Format                                  | Usage        |
| ---------- | --------------------------------------- | ------------ |
| `title`    | `${title} \| ${folder}`                 | SEO          |
| `og:title` | `macOS defaults > ${folder} > ${title}` | Social Media |

#### Description

> [!IMPORTANT]
> The page description should be 1 sentence.

| Field name       | Format            | Usage        |
| ---------------- | ----------------- | ------------ |
| `description`    | Ending with a dot | SEO          |
| `og:description` | Ending with a dot | Social Media |

### Heading section

#### Page title

> [!IMPORTANT]
> Title must be 1 to 5 words.

It's used to generate the sidebars and the Table of contents.

##### Example:

```md
# Page title
```

#### Description

Example:

```md
Describe what the command is doing.

Please add some context if it is helpful.

Specify if the command cannot be activated directly:

> ⚠️ A restart of your Mac is required to apply these changes.
```

Take a look at the [mouse acceleration command](/mouse/linear.md#acceleration) for a well written complete description.

#### Version support

Only include the versions you tested. Sort the versions in reverse release date order.

##### Example:

```md
**Tested on macOS:**

- Sequoia
- Sonoma
```

#### Command parameter

`defaults` commands can take various parameter types:

- `bool`
- `int`
- `float`
- `string`
- `array`

It is possible to find the type of a command with the `defaults` CLI using:

```bash
defaults read-type ${domain} ${key}
```

When the possible values are limited, please list them.

##### Example:

```md
**Parameter type**: int
**Accepted parameter values**:

- 0
- 2
- 3
```

#### Command requirements

Some commands have prerequisites. List them in this section.

##### Example:

```md
## Requirements

- [`com.apple.dock autohide`](/dock/autohide.md#set-to-true) must be set to `true`
```

### Command demos

At least 4 sections are needed:

- Set the domain's key to some value
- Set the domain's key to the default value
- Read current domain's key value
- Reset the domain's key value

Each of them contain a bash command the user can copy. It should use double quotes around the key for stability.

The command should be self-sufficient, usually there is a `killall ${app_name}` command that is needed.

The first two sections contain a description of what the command does.
Avoid direct parameter values such as `0` as type could be wrongly interpreted, always prefer `-${type} "${value}"` with quoted value.
These can and should when possible include a screenshot or a video to demo what the command does.

::: details Example with images demos:

````md
## Set to `36`

Dock icon size of 36 pixels.

```bash
defaults write com.apple.dock "tilesize" -int "36" && killall Dock
```

<img
  src="./images/tilesize/36.png"
  alt="Example output with value set to 36"
  width="740" height="463" style="height: auto"
/>

## Set to `48` (default value)

Dock icon size of 48 pixels.

```bash
defaults write com.apple.dock "tilesize" -int "48" && killall Dock
```

<img
  src="./images/tilesize/48.png"
  alt="Example output with value set to 48"
  width="740" height="463" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.dock "tilesize"
```

## Reset to default value

```bash
defaults delete com.apple.dock "tilesize" && killall Dock
```
````

:::

Take a look at the [Dock's autohide delay command for video examples](https://github.com/yannbertrand/macos-defaults/edit/main/docs/dock/autohide-delay.md).

### macOS UI Alternative

Majority of commands can be updated from macOS UI. When possible, please include the way to do it.

Some macOS System Settings can be directly accessed via special links. E.g. <a href="x-apple.systempreferences:com.apple.preference.dock?Dock">Access Dock settings</a>. You can find this URL with the Script Editor App using this script:

```applescript
tell application "System Settings"
	set myIds to the id of every pane
	set myAnchors to anchors of current pane
end tell
```

##### Example:

```md
## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?Dock">Access Dock settings from macOS UI</a>
2. Set "Position on the screen" dropdown value
```

### Complete page example

Here is a complete template you can copy:

````md
---
title: Icon size | Dock
description: Set the icon size of Dock items in pixels.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Icon size
  - - meta
    - property: 'og:description'
      content: Set the icon size of Dock items in pixels.
---

# Icon size

Set the icon size of Dock items in pixels.

- **Tested on macOS**:
  - Sequoia
  - Sonoma
- **Parameter type**: int

## Set to `36`

Dock icon size of 36 pixels.

```bash
defaults write com.apple.dock "tilesize" -int "36" && killall Dock
```

<img
  src="./images/tilesize/36.png"
  alt="Example output with value set to 36"
  width="740" height="463" style="height: auto"
/>

## Set to `48` (default value)

Dock icon size of 48 pixels.

```bash
defaults write com.apple.dock "tilesize" -int "48" && killall Dock
```

<img
  src="./images/tilesize/48.png"
  alt="Example output with value set to 48"
  width="740" height="463" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.dock "tilesize"
```

## Reset to default value

```bash
defaults delete com.apple.dock "tilesize" && killall Dock
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?Dock">Access Dock settings from macOS UI</a>
2. Slide "Size" range value
````
