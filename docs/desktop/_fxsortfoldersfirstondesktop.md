---
metaTitle: Keep folders on top | Desktop | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Desktop > Keep folders on top
  - name: "description"
    content: "Keep folders on top when sorting"
  - property: "og:description"
    content: "Keep folders on top when sorting"
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Keep folders on top

Keep folders on top when sorting

<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Monterey
  * Big Sur
- **Parameter type**: bool

## Set to `true`

Keep folders on top

```bash
defaults write com.apple.finder "_FXSortFoldersFirstOnDesktop" -bool "true" && killall Finder
```

## Set to `false` (default value)

Don't keep folders on top

```bash
defaults write com.apple.finder "_FXSortFoldersFirstOnDesktop" -bool "false" && killall Finder
```

## Read current value
```bash
defaults read com.apple.finder "_FXSortFoldersFirstOnDesktop"
```

## Reset to default value
```bash
defaults delete com.apple.finder "_FXSortFoldersFirstOnDesktop" && killall Finder
```
