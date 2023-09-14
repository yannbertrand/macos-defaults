---
title: Afficher la vignette | Capture d'écran
meta:
  - property: 'og:title'
    content: macOS defaults > Capture d'écran > Afficher la vignette
  - name: 'description'
    content: 'Afficher ou non la vignette après avoir fait une capture.'
  - property: 'og:description'
    content: 'Afficher ou non la vignette après avoir fait une capture.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Afficher la vignette

Afficher ou non la vignette après avoir fait une capture.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Afficher la vignette après avoir fait une capture

```bash
defaults write com.apple.screencapture "show-thumbnail" -bool "true"
```

## Avec la valeur `false`

Ne pas afficher la vignette

```bash
defaults write com.apple.screencapture "show-thumbnail" -bool "false"
```

## Lire la valeur courante

```bash
defaults read com.apple.screencapture "show-thumbnail"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.screencapture "show-thumbnail"
```
