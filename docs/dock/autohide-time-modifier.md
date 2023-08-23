---
metaTitle: Autohide animation time | Dock | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Autohide animation time
  - name: 'description'
    content: 'Change the Dock opening and closing animation times.'
  - property: 'og:description'
    content: 'Change the Dock opening and closing animation times.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Autohide animation time

Change the Dock opening and closing animation times.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: float

## Requirements

- [`com.apple.dock autohide`](/dock/autohide.html#set-to-true) must be set to `true`

## Set to `0.5` (default value)

By default, the Dock opening and closing animations take 0.5 seconds

```bash
defaults write com.apple.dock "autohide-time-modifier" -float "0.5" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="./images/autohide-time-modifier/0.5.mp4" type="video/mp4">
  Example output with value set to 0.5
</video>

## Set to `2`

Increase the Dock animation time

```bash
defaults write com.apple.dock "autohide-time-modifier" -float "2" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="./images/autohide-time-modifier/2.mp4" type="video/mp4">
  Example output with value set to 2
</video>

## Set to `0`

Remove the Dock autohide animation

```bash
defaults write com.apple.dock "autohide-time-modifier" -float "0" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="./images/autohide-time-modifier/0.mp4" type="video/mp4">
  Example output with value set to 0
</video>

## Read current value

```bash
defaults read com.apple.dock "autohide-time-modifier"
```

## Reset to default value

```bash
defaults delete com.apple.dock "autohide-time-modifier" && killall Dock
```
