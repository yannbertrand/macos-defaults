---
title: Music accent color | Miscellaneous
description: Set the accent color of the Music app.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Music accent color
  - - meta
    - property: 'og:description'
      content: Set the accent color of the Music app.
---

# Music accent color

Set the accent color of the Music app, used for buttons, selections and other highlighted elements.

Starting with macOS 27.2, the Music app uses a blue accent color instead of the red one it used before.

> [!NOTE]
> The accent color of a single app cannot be set from the macOS UI. The "Accent color" setting in System Settings > Appearance applies to every app.

- **Tested on macOS**:
  - Golden Gate
- **Parameter type**: int
- **Accepted parameter values**:
  - `-2`: app default
  - `-1`: graphite
  - `0`: red
  - `1`: orange
  - `2`: yellow
  - `3`: green
  - `4`: blue
  - `5`: purple
  - `6`: pink

## Set to `0`

Red accent color.

```bash
defaults write com.apple.Music "AppleAccentColor" -int "0" && killall Music
```

## Set to `-2` (default value)

App default accent color.

```bash
defaults write com.apple.Music "AppleAccentColor" -int "-2" && killall Music
```

## Read current value

```bash
defaults read com.apple.Music "AppleAccentColor"
```

## Reset to default value

```bash
defaults delete com.apple.Music "AppleAccentColor" && killall Music
```
