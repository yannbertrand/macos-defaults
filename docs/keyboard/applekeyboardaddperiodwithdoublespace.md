---
title: Add period with double-space | Keyboard
description: Allows you to type a period by pressing space twice.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Keyboard > Add period with double-space
  - - meta
    - property: 'og:description'
      content: Allows you to type a period by pressing space twice.
---

# Add period with double-space

Allows you to type a period by pressing space twice.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: bool

## Set to `true` (default value)

When on, pressing space twice will insert a period and a space.

```bash
defaults write NSGlobalDomain NSAutomaticPeriodSubstitutionEnabled -bool true
```

## Set to `false`

When off, pressing space twice will insert two spaces.

```bash
defaults write NSGlobalDomain NSAutomaticPeriodSubstitutionEnabled -bool false
```

## Read current value

```bash
defaults read NSGlobalDomain NSAutomaticPeriodSubstitutionEnabled
```

## Reset to default value

```bash
defaults delete NSGlobalDomain NSAutomaticPeriodSubstitutionEnabled
```
