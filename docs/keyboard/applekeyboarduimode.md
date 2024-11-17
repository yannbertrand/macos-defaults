---
title: Keyboard navigation | Keyboard
description: Choose whether to enable moving focus with Tab and Shift Tab.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Keyboard navigation
  - - meta
    - property: 'og:description'
      content: Choose whether to enable moving focus with Tab and Shift Tab.
---

# Keyboard navigation

Choose whether to enable moving focus with Tab and Shift Tab.

- **Tested on macOS**:
  - Sonoma
  - Sequoia
- **Parameter type**: int
  - 0
  - 2

## Set to: Disabled (default)

```bash
defaults write NSGlobalDomain AppleKeyboardUIMode -int "0"
```

<img
  src="./images/AppleKeyboardUIMode/disabled.png"
  alt="Save changes dialog with keyboard navigation disabled"
  width="574" height="674" style="height: auto"
/>

## Set to: Enabled

```bash
defaults write NSGlobalDomain AppleKeyboardUIMode -int "2"
```

<img
  src="./images/AppleKeyboardUIMode/enabled.png"
  alt="Save changes dialog with keyboard navigation enabled, showing focus ring on Don't Save"
  width="574" height="674" style="height: auto"
/>

## Read current value

```bash
defaults read NSGlobalDomain AppleKeyboardUIMode
```

## Reset to default value

```bash
defaults delete NSGlobalDomain AppleKeyboardUIMode
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.preference.keyboard">Open the Keyboard preference pane in System Preferences</a>
2. Toggle "Keyboard navigation"
