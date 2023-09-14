---
title: Keep folders on top | Finder
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Keep folders on top
  - name: 'description'
    content: 'Keep folders on top when sorting by name'
  - property: 'og:description'
    content: 'Keep folders on top when sorting by name'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Keep folders on top

Keep folders on top when sorting by name

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true`

Keep folders on top

```bash
defaults write com.apple.finder "_FXSortFoldersFirst" -bool "true" && killall Finder
```

<img
  src="./images/_FXSortFoldersFirst/true.png"
  alt="Example output with value set to true"
  width="740" height="400" style="height: auto"
/>

## Set to `false` (default value)

Do not keep folders on top

```bash
defaults write com.apple.finder "_FXSortFoldersFirst" -bool "false" && killall Finder
```

<img
  src="./images/_FXSortFoldersFirst/false.png"
  alt="Example output with value set to false"
  width="740" height="400" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.finder "_FXSortFoldersFirst"
```

## Reset to default value

```bash
defaults delete com.apple.finder "_FXSortFoldersFirst" && killall Finder
```
