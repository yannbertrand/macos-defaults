---
title: Disable application quarantine message | Miscellaneous
description: Turn off the “Application Downloaded from Internet” quarantine warning.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Disable application quarantine message
  - - meta
    - property: 'og:description'
      content: Turn off the “Application Downloaded from Internet” quarantine warning.
---

# Disable application quarantine message

Turn off the “Application Downloaded from Internet” quarantine warning.

⚠️ Stopped working on Big Sur.

- **Tested on macOS**:
  - Catalina
- **Parameter type**: bool

## Set to `true` (default value)

"Application Downloaded from Internet" popup will display

```bash
defaults write com.apple.LaunchServices "LSQuarantine" -bool "true"
```

## Set to `false`

"Application Downloaded from Internet" popup will not display

```bash
defaults write com.apple.LaunchServices "LSQuarantine" -bool "false"
```

## Read current value

```bash
defaults read com.apple.LaunchServices "LSQuarantine"
```

## Reset to default value

```bash
defaults delete com.apple.LaunchServices "LSQuarantine"
```
