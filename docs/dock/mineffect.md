---
title: Minimize animation effect | Dock
description: Change the Dock minimize animation.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Minimize animation effect
  - - meta
    - property: 'og:description'
      content: Change the Dock minimize animation.
---

# Minimize animation effect

Change the Dock minimize animation.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: string
  - genie
  - scale
  - suck

## Requirements

- [`com.apple.dock autohide`](/dock/autohide.md#set-to-true) must be set to `true`

## Set to `genie` (default value)

```bash
defaults write com.apple.dock "mineffect" -string "genie" && killall Dock
```

<video autoplay loop muted playsinline width="740" height="740" style="max-width: 100%; height: auto">
  <source src="./images/mineffect/genie.mp4" type="video/mp4">
  Example output with value set to genie
</video>

## Set to `scale`

```bash
defaults write com.apple.dock "mineffect" -string "scale" && killall Dock
```

<video autoplay loop muted playsinline width="740" height="740" style="max-width: 100%; height: auto">
  <source src="./images/mineffect/scale.mp4" type="video/mp4">
  Example output with value set to scale
</video>

## Set to `suck`

Suck is an secret value you can't find inside the System Preferences

```bash
defaults write com.apple.dock "mineffect" -string "suck" && killall Dock
```

<video autoplay loop muted playsinline width="740" height="740" style="max-width: 100%; height: auto">
  <source src="./images/mineffect/suck.mp4" type="video/mp4">
  Example output with value set to suck
</video>

## Read current value

```bash
defaults read com.apple.dock "mineffect"
```

## Reset to default value

```bash
defaults delete com.apple.dock "mineffect" && killall Dock
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.dock?Dock">Access Dock settings from macOS UI</a>
2. Set "Minimise window using" dropdown value
