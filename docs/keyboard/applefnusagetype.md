---
title: Fn/🌐 key usage | Keyboard
description: Choose what happens when you press the Fn or 🌐︎ key on the keyboard.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Keyboard > Fn/🌐 key usage
  - - meta
    - property: 'og:description'
      content: Choose what happens when you press the Fn or 🌐︎ key on the keyboard.
---

# Fn/🌐 key usage

Choose what happens when you press the Fn or 🌐︎ key on the keyboard.

⚠️ A restart of your Mac is required to apply these changes.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: int
  - 0
  - 1
  - 2
  - 3

## Set to: Do Nothing (default)

Nothing happens.

```bash
defaults write com.apple.HIToolbox AppleFnUsageType -int "0"
```

## Set to: Change input source

Switches between keyboard layouts for writing in other languages (known as input sources).

```bash
defaults write com.apple.HIToolbox AppleFnUsageType -int "1"
```

## Set to: Show Emoji & Symbols

Opens the Character Viewer for entering emoji, symbols, and more.

```bash
defaults write com.apple.HIToolbox AppleFnUsageType -int "2"
```

## Set to: Start Dictation

Starts dictation when you press the key twice (you may be asked to enable dictation first).

```bash
defaults write com.apple.HIToolbox AppleFnUsageType -int "3"
```

## Read current value

```bash
defaults read com.apple.HIToolbox AppleFnUsageType
```

## Reset to default value

```bash
defaults delete com.apple.HIToolbox AppleFnUsageType
```
