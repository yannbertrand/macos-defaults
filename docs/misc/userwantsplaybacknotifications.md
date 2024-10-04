---
title: Show Music song notifications | Miscellaneous
description: Display a notification when a new song starts in the Music app.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Show Music song notifications
  - - meta
    - property: 'og:description'
      content: Display a notification when a new song starts in the Music app.
---

# Show Music song notifications

Display a notification when a new song starts in the Music app.

- **Tested on macOS**:
  - Ventura
  - Catalina
- **Parameter type**: bool

## Set to `false`

Notifications will not be displayed.

```bash
defaults write com.apple.Music "userWantsPlaybackNotifications" -bool "false" && killall Music
```

## Set to `true` (default value)

Notifications will be displayed.

```bash
defaults write com.apple.Music "userWantsPlaybackNotifications" -bool "true" && killall Music
```

## Read current value

```bash
defaults read com.apple.Music "userWantsPlaybackNotifications"
```

## Reset to default value

```bash
defaults delete com.apple.Music "userWantsPlaybackNotifications" && killall Music
```
