---
title: Choisir le format de la capture | Capture d'écran
meta:
  - property: 'og:title'
    content: macOS defaults > Capture d'écran > Choisir le format de la capture
  - name: 'description'
    content: "Choisir le format de fichier de l'image dans lequel la capture est enregistrée."
  - property: 'og:description'
    content: "Choisir le format de fichier de l'image dans lequel la capture est enregistrée."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Choisir le format de la capture

Choisir le format de fichier de l'image dans lequel la capture est enregistrée.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: string
  - png
  - jpg
  - pdf
  - psd
  - gif
  - tga
  - tiff
  - bmp

## Avec la valeur `png` (par défaut)

L'image générée est au format png

```bash
defaults write com.apple.screencapture "type" -string "png"
```

## Avec la valeur `jpg`

L'image générée est au format jpg

```bash
defaults write com.apple.screencapture "type" -string "jpg"
```

## Lire la valeur courante

```bash
defaults read com.apple.screencapture "type"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.screencapture "type"
```
