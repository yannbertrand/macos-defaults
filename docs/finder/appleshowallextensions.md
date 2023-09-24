---
title: Show extensions | Finder
description: Show all file extensions in the Finder.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Show extensions
  - - meta
    - property: 'og:description'
      content: Show all file extensions in the Finder.
---

# Show extensions

Show all file extensions in the Finder.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `false` (default value)

Do not show all file extensions inside the Finder

```bash
defaults write NSGlobalDomain "AppleShowAllExtensions" -bool "false" && killall Finder
```

## Set to `true`

Show all file extensions inside the Finder

```bash
defaults write NSGlobalDomain "AppleShowAllExtensions" -bool "true" && killall Finder
```

## Read current value

```bash
defaults read NSGlobalDomain "AppleShowAllExtensions"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "AppleShowAllExtensions" && killall Finder
```
