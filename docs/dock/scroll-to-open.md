---
title: Scroll to Exposé app | Dock
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Scroll to Exposé app
  - name: 'description'
    content: "Scroll up on a Dock icon to show all Space's opened windows for an app, or open stack."
  - property: 'og:description'
    content: "Scroll up on a Dock icon to show all Space's opened windows for an app, or open stack."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Scroll to Exposé app

Scroll up on a Dock icon to show all Space's opened windows for an app, or open stack.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `true`

Enable

```bash
defaults write com.apple.dock "scroll-to-open" -bool "true" && killall Dock
```

## Set to `false` (default value)

Disable

```bash
defaults write com.apple.dock "scroll-to-open" -bool "false" && killall Dock
```

## Read current value

```bash
defaults read com.apple.dock "scroll-to-open"
```

## Reset to default value

```bash
defaults delete com.apple.dock "scroll-to-open" && killall Dock
```
