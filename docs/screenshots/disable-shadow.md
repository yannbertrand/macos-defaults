---
title: Disable shadow | Screenshots
description: Disable screenshot shadow when capturing an app (`⌘ cmd`+`⇧ shift`+`4` then `space`).
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Screenshots > Disable shadow
  - - meta
    - property: 'og:description'
      content: Disable screenshot shadow when capturing an app (`⌘ cmd`+`⇧ shift`+`4` then `space`).
---

# Disable shadow

Disable screenshot shadow when capturing an app (`⌘ cmd`+`⇧ shift`+`4` then `space`).

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: bool

## Set to `false` (default value)

Add a shadow to screenshots

```bash
defaults write com.apple.screencapture "disable-shadow" -bool "false"
```

<img
  src="./images/disable-shadow/false.png"
  alt="Example output with value set to false"
  width="740" height="574" style="height: auto"
/>

## Set to `true`

Remove the default shadow from screenshots

```bash
defaults write com.apple.screencapture "disable-shadow" -bool "true"
```

<img
  src="./images/disable-shadow/true.png"
  alt="Example output with value set to true"
  width="740" height="550" style="height: auto"
/>

## Read current value

```bash
defaults read com.apple.screencapture "disable-shadow"
```

## Reset to default value

```bash
defaults delete com.apple.screencapture "disable-shadow"
```
