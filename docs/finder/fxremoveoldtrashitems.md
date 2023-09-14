---
title: Empty bin items after 30 days | Finder
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Empty bin items after 30 days
  - name: 'description'
    content: 'Remove items in the bin after 30 days'
  - property: 'og:description'
    content: 'Remove items in the bin after 30 days'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Empty bin items after 30 days

Remove items in the bin after 30 days

<!-- break lists -->

- **Tested on macOS**:
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true`

Automatically empty bin after 30 days

```bash
defaults write com.apple.finder "FXRemoveOldTrashItems" -bool "true" && killall Finder
```

## Set to `false` (default value)

Keep bin as is

```bash
defaults write com.apple.finder "FXRemoveOldTrashItems" -bool "false" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "FXRemoveOldTrashItems"
```

## Reset to default value

```bash
defaults delete com.apple.finder "FXRemoveOldTrashItems" && killall Finder
```
