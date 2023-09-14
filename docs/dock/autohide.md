---
title: Autohide | Dock
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Autohide
  - name: 'description'
    content: 'Autohides the Dock. You can toggle the Dock using `⌥ alt`+`⌘ cmd`+`d`.'
  - property: 'og:description'
    content: 'Autohides the Dock. You can toggle the Dock using `⌥ alt`+`⌘ cmd`+`d`.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Autohide

Autohides the Dock. You can toggle the Dock using `⌥ alt`+`⌘ cmd`+`d`.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `false` (default value)

Always display the Dock

```bash
defaults write com.apple.dock "autohide" -bool "false" && killall Dock
```

## Set to `true`

Autohide the Dock when the mouse is out

```bash
defaults write com.apple.dock "autohide" -bool "true" && killall Dock
```

## Read current value

```bash
defaults read com.apple.dock "autohide"
```

## Reset to default value

```bash
defaults delete com.apple.dock "autohide" && killall Dock
```
