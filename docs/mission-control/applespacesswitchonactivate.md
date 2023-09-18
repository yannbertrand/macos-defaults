---
title: Switch to Space with open windows | Mission Control
description: When switching to an app, switch to a space with open windows for this app.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Mission Control > Switch to Space with open windows
  - - meta
    - property: 'og:description'
      content: When switching to an app, switch to a space with open windows for this app.
---

# Switch to Space with open windows

When switching to an app, switch to a space with open windows for this app.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Big Sur
- **Parameter type**: bool

## Set to `true` (default value)

Switch to a Space with open windows for the application.

```bash
defaults write NSGlobalDomain "AppleSpacesSwitchOnActivate" -bool "true" && killall Dock
```

## Set to `false`

Do not switch to a Space with open windows for the application.

```bash
defaults write NSGlobalDomain "AppleSpacesSwitchOnActivate" -bool "false" && killall Dock
```

## Read current value

```bash
defaults read NSGlobalDomain "AppleSpacesSwitchOnActivate"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "AppleSpacesSwitchOnActivate" && killall Dock
```
