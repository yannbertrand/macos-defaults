---
title: Autohide delay | Dock
description: Change the Dock opening delay.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Dock > Autohide delay
  - - meta
    - property: 'og:description'
      content: Change the Dock opening delay.
---

# Autohide delay

Change the Dock opening delay.

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: float

## Requirements

- [`com.apple.dock autohide`](/dock/autohide.md#set-to-true) must be set to `true`

## Set to `0.2` (default value)

By default, the Dock only opens if the mouse doesn't move for 0.2 seconds

```bash
defaults write com.apple.dock "autohide-delay" -float "0.2" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="./images/autohide-delay/0.5.mp4" type="video/mp4">
  Example output with value set to 0.2
</video>

## Set to `0`

Remove the autohide delay, the Dock appears instantly

```bash
defaults write com.apple.dock "autohide-delay" -float "0" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="./images/autohide-delay/0.mp4" type="video/mp4">
  Example output with value set to 0
</video>

## Read current value

```bash
defaults read com.apple.dock "autohide-delay"
```

## Reset to default value

```bash
defaults delete com.apple.dock "autohide-delay" && killall Dock
```
