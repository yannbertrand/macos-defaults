---
title: Mouse | Right Click
description: Enable mouse right click.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Mouse > Right Click
  - - meta
    - property: 'og:description'
      content: Enable or disable mouse right click
---

# Right Click

Enable or disable mouse right click and also invert the Air Mouse click for left-hand persons.

By default, macOS has mouse secondary button disabled for the Apple Air Mouse.

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
- **Parameter type**: bool

## Enable mouse right click

With this setting the secondary click will be enable on right side.

```bash
defaults write com.apple.driver.AppleBluetoothMultitouch.mouse MouseButtonMode -string 'TwoButton'
```

## Left click side (invert buttons)

With this setting the secondary click will be enable on left side.

```bash
defaults write com.apple.driver.AppleBluetoothMultitouch.mouse MouseButtonMode -string 'TwoButtonSwapped'
```

## Disable mouse right click (default value)

```bash
defaults write com.apple.driver.AppleBluetoothMultitouch.mouse MouseButtonMode -string 'OneButton'
```

## Read current value

```bash
defaults read com.apple.driver.AppleBluetoothMultitouch.mouse MouseButtonMode
```

## Reset to default value

```bash
defaults delete com.apple.driver.AppleBluetoothMultitouch.mouse MouseButtonMode
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.Mouse-Settings.extension">Access Mouse settings from macOS UI</a>
2. Find the Secondary click
3. Select the value on the dropdown list
