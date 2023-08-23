---
metaTitle: Minimize animation effect | Dock | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Minimize animation effect
  - name: 'description'
    content: 'Change the Dock minimize animation.'
  - property: 'og:description'
    content: 'Change the Dock minimize animation.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Minimize animation effect

Change the Dock minimize animation.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Parameter type**: string
  - genie
  - scale
  - suck

## Requirements

- [`com.apple.dock autohide`](/dock/autohide.html#set-to-true) must be set to `true`

## Set to `genie` (default value)

```bash
defaults write com.apple.dock "mineffect" -string "genie" && killall Dock
```

<video autoplay loop muted playsinline width="740" height="740" style="max-width: 100%; height: auto">
  <source src="./images/mineffect/genie.mp4" type="video/mp4">
  Example output with value set to genie
</video>

## Set to `scale`

```bash
defaults write com.apple.dock "mineffect" -string "scale" && killall Dock
```

<video autoplay loop muted playsinline width="740" height="740" style="max-width: 100%; height: auto">
  <source src="./images/mineffect/scale.mp4" type="video/mp4">
  Example output with value set to scale
</video>

## Set to `suck`

Suck is an secret value you can't find inside the System Preferences

```bash
defaults write com.apple.dock "mineffect" -string "suck" && killall Dock
```

<video autoplay loop muted playsinline width="740" height="740" style="max-width: 100%; height: auto">
  <source src="./images/mineffect/suck.mp4" type="video/mp4">
  Example output with value set to suck
</video>

## Read current value

```bash
defaults read com.apple.dock "mineffect"
```

## Reset to default value

```bash
defaults delete com.apple.dock "mineffect" && killall Dock
```
