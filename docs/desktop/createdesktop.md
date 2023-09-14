---
title: All icons | Desktop
meta:
  - property: 'og:title'
    content: macOS defaults > Desktop > All icons
  - name: 'description'
    content: 'Hide all icons on desktop'
  - property: 'og:description'
    content: 'Hide all icons on desktop'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# All icons

Hide all icons on desktop

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `false`

Hide all icons

```bash
defaults write com.apple.finder "CreateDesktop" -bool "false" && killall Finder
```

## Set to `true` (default value)

Show all icons

```bash
defaults write com.apple.finder "CreateDesktop" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "CreateDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "CreateDesktop" && killall Finder
```
