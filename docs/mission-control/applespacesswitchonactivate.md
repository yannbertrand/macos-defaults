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
  - Sonoma
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

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?WindowsApps">Access Dock settings from macOS UI</a>
2. Toggle "When switching to an application, switch to a Space with open windows for the application" value
