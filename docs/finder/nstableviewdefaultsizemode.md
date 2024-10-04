---
title: Sidebar icon size | Finder
description: Choose the size of Finder sidebar icons
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Finder > Sidebar icon size
  - - meta
    - property: 'og:description'
      content: Choose the size of Finder sidebar icons
---

# Sidebar icon size

Choose the size of Finder sidebar icons

<!-- break lists -->

- **Tested on macOS**:
  - Sonoma
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Parameter type**: int

## Set to `1`

Small

```bash
defaults write NSGlobalDomain "NSTableViewDefaultSizeMode" -int "1" && killall Finder
```

<img
  src="./images/NSTableViewDefaultSizeMode/1.png"
  alt="Example output with value set to 1"
  width="740" height="415" style="height: auto"
/>

## Set to `2` (default value)

Medium

```bash
defaults write NSGlobalDomain "NSTableViewDefaultSizeMode" -int "2" && killall Finder
```

<img
  src="./images/NSTableViewDefaultSizeMode/2.png"
  alt="Example output with value set to 2"
  width="740" height="415" style="height: auto"
/>

## Set to `3`

Large

```bash
defaults write NSGlobalDomain "NSTableViewDefaultSizeMode" -int "3" && killall Finder
```

<img
  src="./images/NSTableViewDefaultSizeMode/3.png"
  alt="Example output with value set to 3"
  width="740" height="415" style="height: auto"
/>

## Read current value

```bash
defaults read NSGlobalDomain "NSTableViewDefaultSizeMode"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "NSTableViewDefaultSizeMode" && killall Finder
```
