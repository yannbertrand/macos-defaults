---
title: Quit | Finder
description: Add a quit option to the Finder. Behaves strangely when activated, would not recommend.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Quit
  - - meta
    - property: 'og:description'
      content: Add a quit option to the Finder. Behaves strangely when activated, would not recommend.
---

# Quit

Add a quit option to the Finder. Behaves strangely when activated, would not recommend.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `false` (default value)

Hide the Finder "Quit" option

```bash
defaults write com.apple.finder "QuitMenuItem" -bool "false" && killall Finder
```

## Set to `true`

Display the Finder "Quit" option

```bash
defaults write com.apple.finder "QuitMenuItem" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "QuitMenuItem"
```

## Reset to default value

```bash
defaults delete com.apple.finder "QuitMenuItem" && killall Finder
```
