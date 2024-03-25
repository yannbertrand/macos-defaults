---
title: Key held down behavior | Keyboard
description: Allows you to select the behavior when a key is held down for a long time.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Keyboard > Key held down behavior
  - - meta
    - property: 'og:description'
      content: Allows you to select the behavior when a key is held down for a long time.
---

# Key held down behavior

Allows you to select the behavior when a key is held down for a long time. The two possible behaviors are:

- show character accents menu (default)
- repeat character while key held

⚠️ Restarting the Mac, closing the session or restarting the application is necessary to take into effect the changes.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true` (default value)

By default, when a key is held down, the accents menu is displayed.

```bash
defaults write NSGlobalDomain "ApplePressAndHoldEnabled" -bool "true"
```

<img
  src="./images/ApplePressAndHoldEnabled/true.png"
  alt="Example output with value set to true"
  width="696" height="252" style="height: auto"
/>

## Set to `false`

Repeats the key as long as it is held down.

```bash
defaults write NSGlobalDomain "ApplePressAndHoldEnabled" -bool "false"
```

<img
  src="./images/ApplePressAndHoldEnabled/false.png"
  alt="Example output with value set to false"
  width="696" height="252" style="height: auto"
/>

## Read current value

```bash
defaults read NSGlobalDomain "ApplePressAndHoldEnabled"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "ApplePressAndHoldEnabled"
```
