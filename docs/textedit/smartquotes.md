---
title: Smart quotes | TextEdit
description: Set if quotation marks should be converted from neutral form to opening/closing variants.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > TextEdit > Smart quotes
  - - meta
    - property: 'og:description'
      content: Set if quotation marks should be converted from neutral form to opening/closing variants.
---

# Smart quotes

Set if quotation marks should be converted from neutral form to opening/closing variants.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true` (default value)

Quotes will be converted to opening/closing variants.

```bash
defaults write com.apple.TextEdit "SmartQuotes" -bool "true" && killall TextEdit
```

## Set to `false`

Quotes will remain in the form they are typed.

```bash
defaults write com.apple.TextEdit "SmartQuotes" -bool "false" && killall TextEdit
```

## Read current value

```bash
defaults read com.apple.TextEdit "SmartQuotes"
```

## Reset to default value

```bash
defaults delete com.apple.TextEdit "SmartQuotes" && killall TextEdit
```
