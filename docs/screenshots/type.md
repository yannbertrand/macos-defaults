---
title: Choose screenshot format | Screenshots
meta:
  - property: 'og:title'
    content: macOS defaults > Screenshots > Choose screenshot format
  - name: 'description'
    content: 'Choose the screenshots image format.'
  - property: 'og:description'
    content: 'Choose the screenshots image format.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Choose screenshot format

Choose the screenshots image format.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: string
  - png
  - jpg
  - pdf
  - psd
  - gif
  - tga
  - tiff
  - bmp

## Set to `png` (default value)

The generated image is a png

```bash
defaults write com.apple.screencapture "type" -string "png"
```

## Set to `jpg`

The generated image is a jpg

```bash
defaults write com.apple.screencapture "type" -string "jpg"
```

## Read current value

```bash
defaults read com.apple.screencapture "type"
```

## Reset to default value

```bash
defaults delete com.apple.screencapture "type"
```
