---
title: Display thumbnail | Screenshots
description: Choose whether to display a thumbnail after taking a screenshot.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Screenshots > Display thumbnail
  - - meta
    - property: 'og:description'
      content: Choose whether to display a thumbnail after taking a screenshot.
---

# Display thumbnail

Choose whether to display a thumbnail after taking a screenshot.

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
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
