---
title: Default view style | Finder
description: Set the default view style for folders without custom setting
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Default view style
  - - meta
    - property: 'og:description'
      content: Set the default view style for folders without custom setting
---

# Default view style

Set the default view style for folders without custom setting

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: string

## Set to `clmv`

Column view

```bash
defaults write com.apple.finder "FXPreferredViewStyle" -string "clmv" && killall Finder
```

## Set to `Nlsv`

List view

```bash
defaults write com.apple.finder "FXPreferredViewStyle" -string "Nlsv" && killall Finder
```

## Set to `glyv`

Gallery View

```bash
defaults write com.apple.finder "FXPreferredViewStyle" -string "glyv" && killall Finder
```

## Set to `icnv` (default value)

Icon view

```bash
defaults write com.apple.finder "FXPreferredViewStyle" -string "icnv" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "FXPreferredViewStyle"
```

## Reset to default value

```bash
defaults delete com.apple.finder "FXPreferredViewStyle" && killall Finder
```
