---
title: Choose screenshot format | Screenshots
description: Choose the screenshots image format.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Screenshots > Choose screenshot format
  - - meta
    - property: 'og:description'
      content: Choose the screenshots image format.
---

# Choose screenshot format

Choose the screenshots image format.

- **Tested on macOS**:
  - Sonoma
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
  - heic

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

## Set to `heic`

The generated image is a HEIF image (.heic)

```bash
defaults write com.apple.screencapture "type" -string "heic"
```

## Read current value

```bash
defaults read com.apple.screencapture "type"
```

## Reset to default value

```bash
defaults delete com.apple.screencapture "type"
```
