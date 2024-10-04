---
title: Default search scope | Finder
description: Set the default search scope when performing a search
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Default search scope
  - - meta
    - property: 'og:description'
      content: Set the default search scope when performing a search
---

# Default search scope

Set the default search scope when performing a search

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: string

## Set to `SCcf`

Search the current folder

```bash
defaults write com.apple.finder "FXDefaultSearchScope" -string "SCcf" && killall Finder
```

## Set to `SCsp`

Use the previous search scope

```bash
defaults write com.apple.finder "FXDefaultSearchScope" -string "SCsp" && killall Finder
```

## Set to `SCev` (default value)

Search this Mac

```bash
defaults write com.apple.finder "FXDefaultSearchScope" -string "SCev" && killall Finder
```

## Read current value

```bash
defaults read com.apple.finder "FXDefaultSearchScope"
```

## Reset to default value

```bash
defaults delete com.apple.finder "FXDefaultSearchScope" && killall Finder
```
