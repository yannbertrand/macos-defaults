---
title: Function keys behavior | Keyboard
description: Allows you to change the behavior of the function keys.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Keyboard > Function keys behaviour
  - - meta
    - property: 'og:description'
      content: Allows you to change the behavior of the function keys.
---

# Function keys behavior

Allows you to change the behavior of the function keys. The two possible options are:

- Use `F1`, `F2`, etc. as special keys (default)
- Use `F1`, `F2`, etc. as standard function keys

⚠️ A restart of your Mac is required to apply these changes.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: bool

## Set to `false` (default value)

By default, pressing a function key will perform the special feature printed on that key.

```bash
defaults write NSGlobalDomain com.apple.keyboard.fnState -bool false
```

## Set to `true`

`F1`, `F2`, etc. behave as standard function keys. Press the `fn` key to use the special features printed on the key.

```bash
defaults write NSGlobalDomain com.apple.keyboard.fnState -bool true
```

## Read current value

```bash
defaults read NSGlobalDomain com.apple.keyboard.fnState
```

## Reset to default value

```bash
defaults delete NSGlobalDomain com.apple.keyboard.fnState
```
