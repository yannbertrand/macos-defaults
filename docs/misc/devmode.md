---
title: Help Menu position | Miscellaneous
meta:
  - property: 'og:title'
    content: macOS defaults > Miscellaneous > Help Menu position
  - name: 'description'
    content: 'Choose whether the Help Menu should be always-on-top.'
  - property: 'og:description'
    content: 'Choose whether the Help Menu should be always-on-top.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Help Menu position

Choose whether the Help Menu should be always-on-top.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `false` (default value)

By default, the Help Menu is always-on-top

```bash
defaults write com.apple.helpviewer "DevMode" -bool "false"
```

## Set to `true`

The Help Menu can go behind other windows

```bash
defaults write com.apple.helpviewer "DevMode" -bool "true"
```

## Read current value

```bash
defaults read com.apple.helpviewer "DevMode"
```

## Reset to default value

```bash
defaults delete com.apple.helpviewer "DevMode"
```
