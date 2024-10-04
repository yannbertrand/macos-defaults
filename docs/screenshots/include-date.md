---
title: Include date | Screenshots
description: Include date and time in screenshot filenames.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Screenshots > Include date
  - - meta
    - property: 'og:description'
      content: Include date and time in screenshot filenames.
---

# Include date

Include date and time in screenshot filenames.

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `true` (default value)

Screenshot 2020-01-09 at 13.27.20.png

```bash
defaults write com.apple.screencapture "include-date" -bool "true"
```

## Set to `false`

- Screenshot.png
- Screenshot 1.png

```bash
defaults write com.apple.screencapture "include-date" -bool "false"
```

## Read current value

```bash
defaults read com.apple.screencapture "include-date"
```

## Reset to default value

```bash
defaults delete com.apple.screencapture "include-date"
```
