---
metaTitle: Délai avant affichage | Dock | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Délai avant affichage
  - name: 'description'
    content: 'Change the Dock opening delay.'
  - property: 'og:description'
    content: 'Change the Dock opening delay.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Délai avant affichage

Change the Dock opening delay.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: float

## Prérequis

- [`com.apple.dock autohide`](/fr/dock/autohide.html#avec-la-valeur-true) doit avoir la valeur `true`

## Avec la valeur `0.5` (par défaut)

By default, the Dock only opens if the mouse doesn't move for 0.5 seconds

```bash
defaults write com.apple.dock "autohide-delay" -float "0.5" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="../../dock/images/autohide-delay/0.5.mp4" type="video/mp4">
  Exemple avec la valeur 0.5
</video>

## Avec la valeur `0`

Remove the autohide delay, the Dock appears instantly

```bash
defaults write com.apple.dock "autohide-delay" -float "0" && killall Dock
```

<video autoplay loop muted playsinline width="742" height="202" style="max-width: 100%; height: auto">
  <source src="../../dock/images/autohide-delay/0.mp4" type="video/mp4">
  Exemple avec la valeur 0
</video>

## Lire la valeur courante

```bash
defaults read com.apple.dock "autohide-delay"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "autohide-delay" && killall Dock
```
