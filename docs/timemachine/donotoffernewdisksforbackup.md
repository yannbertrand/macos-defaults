---
title: Don't offer new disks for Time Machine backup | Time Machine
description: Prevent Time Machine from prompting to use newly connected storage as backup volumes.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Time Machine > Don't offer new disks for Time Machine backup
  - - meta
    - property: 'og:description'
      content: Prevent Time Machine from prompting to use newly connected storage as backup volumes.
---

# Don't offer new disks for Time Machine backup

Prevent Time Machine from prompting to use newly connected storage as backup volumes.

<!-- break lists -->

- **Tested on macOS**:
  - Catalina
- **Parameter type**: bool

## Set to `false` (default value)

When a new disk is connected, system prompts to ask if you want to use it as a backup volume.

```bash
defaults write com.apple.TimeMachine "DoNotOfferNewDisksForBackup" -bool "false"
```

## Set to `true`

When a new disk is connected, system does not prompt to ask if you want to use it as a backup volume.

```bash
defaults write com.apple.TimeMachine "DoNotOfferNewDisksForBackup" -bool "true"
```

## Read current value

```bash
defaults read com.apple.TimeMachine "DoNotOfferNewDisksForBackup"
```

## Reset to default value

```bash
defaults delete com.apple.TimeMachine "DoNotOfferNewDisksForBackup"
```
