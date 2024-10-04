---
title: Location | Screenshots
description: Set default screenshot location.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Screenshots > Set location
  - - meta
    - property: 'og:description'
      content: Set default screenshot location.
---

# Location

Set default screenshot location.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: string

## Set to `~/Desktop` (default value)

```bash
defaults write com.apple.screencapture "location" -string "~/Desktop" && killall SystemUIServer
```

## Set to `~/Pictures`

```bash
defaults write com.apple.screencapture "location" -string "~/Pictures" && killall SystemUIServer
```

## Read current value

```bash
defaults read com.apple.screencapture "location"
```

## Reset to default value

```bash
defaults delete com.apple.screencapture "location" && killall SystemUIServer
```
