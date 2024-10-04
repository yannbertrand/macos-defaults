---
title: Changing file extension warning | Finder
description: Choose whether to display a warning when changing a file extension.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Changing file extension warning
  - - meta
    - property: 'og:description'
      content: Choose whether to display a warning when changing a file extension.
---

# Changing file extension warning

Choose whether to display a warning when changing a file extension.

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `true` (default value)

Display a warning when changing a file extension in the Finder

```bash
defaults write com.apple.finder "FXEnableExtensionChangeWarning" -bool "true" && killall Finder
```

<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="./images/FXEnableExtensionChangeWarning/true.mp4" type="video/mp4">
  Example output with value set to true
</video>

## Set to `false`

Do not display the warning

```bash
defaults write com.apple.finder "FXEnableExtensionChangeWarning" -bool "false" && killall Finder
```

<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="./images/FXEnableExtensionChangeWarning/false.mp4" type="video/mp4">
  Example output with value set to false
</video>

## Read current value

```bash
defaults read com.apple.finder "FXEnableExtensionChangeWarning"
```

## Reset to default value

```bash
defaults delete com.apple.finder "FXEnableExtensionChangeWarning" && killall Finder
```
