---
metaTitle: Removable media | Desktop | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Desktop > Removable media
  - name: 'description'
    content: 'Hide removable media _(CDs, DVDs and iPods)_ on desktop'
  - property: 'og:description'
    content: 'Hide removable media _(CDs, DVDs and iPods)_ on desktop'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Removable media

Hide removable media _(CDs, DVDs and iPods)_ on desktop

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `false`

Hide removable media

```bash
defaults write com.apple.finder "ShowRemovableMediaOnDesktop" -bool "false" && killall Finder
```

## Set to `true` (default value)

Show removable media

```bash
defaults write com.apple.finder "ShowRemovableMediaOnDesktop" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "ShowRemovableMediaOnDesktop"
```

## Reset to default value

```bash
defaults delete com.apple.finder "ShowRemovableMediaOnDesktop" && killall Finder
```
