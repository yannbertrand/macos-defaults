---
title: Battery Percentage | Menu Bar
description: When enabled, this command allows you to show or hide (hidden by default) the battery percentage in the menu bar on macOS.
head:
  - meta:
      property: 'og:title'
      content: System Settings → Battery → Show Battery Percentage
  - meta:
      property: 'og:description'
      content: When enabled, this command allows you to show or hide (default) the battery percentage in the menu bar on macOS.
---

# Battery Percentage

When enabled, this command allows you to show or hide (hidden by default) the battery percentage in the menu bar on macOS.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma

- **Parameter type**: bool

## Set to `false` (default value)

Disable Battery Percentage.

```bash
defaults write ~/Library/Preferences/ByHost/com.apple.controlcenter.plist BatteryShowPercentage -bool false
```

<video autoplay loop muted playsinline width="727" height="40" style="max-width: 100%; height: auto">
  <source src="./images/FlashDateSeparators/false.mp4" type="video/mp4">
  Example output with value set to false
</video>

## Set to `true`

Enable Battery Percentage.

```bash
defaults write ~/Library/Preferences/ByHost/com.apple.controlcenter.plist BatteryShowPercentage -bool true
```

## Read current value

```bash
defaults read ~/Library/Preferences/ByHost/com.apple.controlcenter.plist BatteryShowPercentage
```

## Reset to default value

```bash
defaults write ~/Library/Preferences/ByHost/com.apple.controlcenter.plist BatteryShowPercentage -bool false
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.ControlCenter-Settings.extension?">Access Clock settings from macOS UI</a>
2. Toggle "Show percentage" value
