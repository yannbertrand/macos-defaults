---
metaTitle: Key held down behavior | Miscellaneous | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Miscellaneous > Key held down behavior
  - name: 'description'
    content: "Allows you to select the behavior when a key is held down for a long time. The two possible behaviors are:\n\n- show character accents menu (default)\n- repeat character while key held\n\n⚠️ Restarting the Mac, closing the session or restarting the application is necessary to take into effect the changes.\n"
  - property: 'og:description'
    content: "Allows you to select the behavior when a key is held down for a long time. The two possible behaviors are:\n\n- show character accents menu (default)\n- repeat character while key held\n\n⚠️ Restarting the Mac, closing the session or restarting the application is necessary to take into effect the changes.\n"
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Key held down behavior

Allows you to select the behavior when a key is held down for a long time. The two possible behaviors are:

- show character accents menu (default)
- repeat character while key held

⚠️ Restarting the Mac, closing the session or restarting the application is necessary to take into effect the changes.

<!-- break lists -->

- **Tested on macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Parameter type**: bool

## Set to `true` (default value)

By default, when a key is held down, the accents menu is displayed.

```bash
defaults write NSGlobalDomain "ApplePressAndHoldEnabled" -bool "true"
```

<img
  src="./misc-ApplePressAndHoldEnabled-true.png"
  alt="Example output with value set to true"
  width="696" height="252" style="height: auto"
/>

## Set to `false`

Repeats the key as long as it is held down.

```bash
defaults write NSGlobalDomain "ApplePressAndHoldEnabled" -bool "false"
```

<img
  src="./misc-ApplePressAndHoldEnabled-false.png"
  alt="Example output with value set to false"
  width="696" height="252" style="height: auto"
/>

## Read current value

```bash
defaults read NSGlobalDomain "ApplePressAndHoldEnabled"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "ApplePressAndHoldEnabled"
```
