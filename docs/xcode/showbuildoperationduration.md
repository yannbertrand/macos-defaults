---
title: Show Build Durations | Xcode
description: Show build durations in the Activity Viewer in Xcode's toolbar at the top of the workspace window.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Xcode > Show Build Durations
  - - meta
    - property: 'og:description'
      content: Show build durations in the Activity Viewer in Xcode's toolbar at the top of the workspace window.
---

# Show Build Durations

Show build durations in the Activity Viewer in Xcode's toolbar at the top of the workspace window.

<!-- break lists -->

- **Tested on macOS**:
  - Catalina
- **Parameter type**: bool

## Set to `true`

Show the build duration in the Xcode's toolbar

```bash
defaults write com.apple.dt.Xcode "ShowBuildOperationDuration" -bool "true" && killall Xcode
```

## Set to `false` (default value)

Do not show the build duration in the Xcode's toolbar

```bash
defaults write com.apple.dt.Xcode "ShowBuildOperationDuration" -bool "false" && killall Xcode
```

## Read current value

```bash
defaults read com.apple.dt.Xcode "ShowBuildOperationDuration"
```

## Reset to default value

```bash
defaults delete com.apple.dt.Xcode "ShowBuildOperationDuration" && killall Xcode
```
