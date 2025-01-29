---
title: Toggle Apple Intelligence | Miscellaneous
description: Toggle Apple Intelligence from command line interface.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Toggle Apple Intelligence
  - - meta
    - property: 'og:description'
      content: Toggle Apple Intelligence from command line interface.
---

# Toggle Apple Intelligence

Starting from macOS 15.3, Apple Intelligence is activated by default on ARM Macs. It is possible to deactivate it from the command line.

> [!TIP]
> It may be needed to restart the Mac after toggling the option.

- **Tested on macOS**:
  - Sequoia
- **Parameter type**: bool

## Set to `false`

Deactivate Apple Intelligence.

```bash
defaults write com.apple.CloudSubscriptionFeatures.optIn "545129924" -bool "false"
```

## Set to `true` (default value)

Activate Apple Intelligence.

```bash
defaults write com.apple.CloudSubscriptionFeatures.optIn "545129924" -bool "true"
```

## Read current value

```bash
defaults read com.apple.CloudSubscriptionFeatures.optIn "545129924"
```

## Reset to default value

```bash
defaults delete com.apple.CloudSubscriptionFeatures.optIn "545129924"
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.Siri-Settings">Access Apple Intelligence settings from macOS UI</a>
2. Toggle "Apple Intelligence" value
