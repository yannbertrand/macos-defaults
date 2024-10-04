---
title: Close confirm changes popup | Miscellaneous
description: Should you be asked to keep changes when closing documents or just have changes saved automatically.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Close confirm changes popup
  - - meta
    - property: 'og:description'
      content: Should you be asked to keep changes when closing documents or just have changes saved automatically.
---

# Close confirm changes popup

Should you be asked to keep changes when closing documents or just have changes saved automatically.
Requires closing and opening the app before working. Tested on Apple Preview.

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
- **Parameter type**: bool

## Set to `true` (default value)

Auto saving is enabled, you are not prompted to save changes.

```bash
defaults write NSGlobalDomain "NSCloseAlwaysConfirmsChanges" -bool "true"
```

## Set to `false`

Auto saving is disabled, you are prompted if you want to save changes.

```bash
defaults write NSGlobalDomain "NSCloseAlwaysConfirmsChanges" -bool "false"
```

## Read current value

```bash
defaults read NSGlobalDomain "NSCloseAlwaysConfirmsChanges"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "NSCloseAlwaysConfirmsChanges"
```
