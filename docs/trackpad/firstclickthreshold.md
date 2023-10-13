---
title: Click weight (threshold) | Trackpad
description: Choose between Light/Medium/Firm.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Trackpad > Click weight (threshold)
  - - meta
    - property: 'og:description'
      content: Choose between Light/Medium/Firm.
---

# Click weight (threshold)

Choose between Light/Medium/Firm.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
- **Parameter type**: int
  - 0
  - 1
  - 2

## Set to `0`

Light

```bash
defaults write com.apple.AppleMultitouchTrackpad "FirstClickThreshold" -int "0"
```

## Set to `1` (default value)

Medium

```bash
defaults write com.apple.AppleMultitouchTrackpad "FirstClickThreshold" -int "1"
```

## Set to `2`

Firm

```bash
defaults write com.apple.AppleMultitouchTrackpad "FirstClickThreshold" -int "2"
```

## Read current value

```bash
defaults read com.apple.AppleMultitouchTrackpad "FirstClickThreshold"
```

## Reset to default value

```bash
defaults delete com.apple.AppleMultitouchTrackpad "FirstClickThreshold"
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.trackpad?trackpadTab">Access Trackpad settings from macOS UI</a>
2. Slide "Click" range value
