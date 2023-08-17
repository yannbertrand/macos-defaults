---
metaTitle: Display thumbnail | Screenshots | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Screenshots > Display thumbnail
  - name: "description"
    content: "Choose whether to display a thumbnail after taking a screenshot."
  - property: "og:description"
    content: "Choose whether to display a thumbnail after taking a screenshot."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Display thumbnail

Choose whether to display a thumbnail after taking a screenshot.

<!-- break lists -->

- **Tested on macOS**:
  * Ventura
  * Monterey
  * Big Sur
  * Catalina
  * Mojave
- **Parameter type**: bool

## Set to `true` (default value)

Display the thumbnail after taking a screenshot

```bash
defaults write com.apple.screencapture "show-thumbnail" -bool "true" 
```

## Set to `false`

Do not display the thumbnail

```bash
defaults write com.apple.screencapture "show-thumbnail" -bool "false" 
```

## Read current value
```bash
defaults read com.apple.screencapture "show-thumbnail"
```

## Reset to default value
```bash
defaults delete com.apple.screencapture "show-thumbnail"
```
