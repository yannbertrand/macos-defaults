---
title: Toggle language indicator | Miscellaneous
description: Turn off the language indicator while switching input sources.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Disable indicator of input sources
  - - meta
    - property: 'og:description'
      content: Turn off the language indicator while switching input sources.
---

# Disable indicator of input sources

Turn off the language indicator while switching input sources.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: bool

## Set to `true` (default value)

Turn on the language indicator while switching input sources.

```bash
defaults write kCFPreferencesAnyApplication TSMLanguageIndicatorEnabled -bool "true"
```

<img
  src="./images/toggle-language-indiacator/on.png"
  alt="Example output with value set to true"
  width="740" height="463" style="height: auto"
/>

## Set to `false`

Turn off the language indicator while switching input sources.

```bash
defaults write kCFPreferencesAnyApplication TSMLanguageIndicatorEnabled -bool "false"
```

<img
  src="./images/toggle-language-indiacator/off.png"
  alt="Example output with value set to false"
  width="740" height="463" style="height: auto"
/>

## Read current value

```bash
defaults read kCFPreferencesAnyApplication TSMLanguageIndicatorEnabled
```

## Reset to default value

```bash
defaults delete kCFPreferencesAnyApplication TSMLanguageIndicatorEnabled
```
