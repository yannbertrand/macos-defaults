---
title: Mouse | Acceleration
description: Set movement speed of the mouse cursor
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Mouse > Acceleration
  - - meta
    - property: 'og:description'
      content: Enable or disable mouse acceleration
---

# Acceleration

Enable or disable mouse acceleration.

By default, macOS has mouse acceleration enabled, which causes the cursor to move less when you slowly move the mouse, and much more when you move the mouse faster.

The underlying acceleration curve (which determines how much movement you get at any given mouse speed) is not customizable without third party tools.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: bool

## Requirements

This setting was introduced in macOS 14 Sonoma.

## Disable mouse acceleration

Disabling mouse acceleration can be preferable for gaming, because it's more amenable to building muscle-memory.

```bash
defaults write NSGlobalDomain com.apple.mouse.linear -bool YES
```

## Enable mouse acceleration (default value)

Turning on mouse acceleration can be preferable if you have limited desk space for mouse movements, and need to cover a large screen area.

```bash
defaults write NSGlobalDomain com.apple.mouse.linear -bool NO
```

## Read current value

```bash
defaults read NSGlobalDomain com.apple.mouse.linear
```

## Reset to default value

```bash
defaults delete NSGlobalDomain com.apple.mouse.linear
```
