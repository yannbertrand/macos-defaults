---
title: Choisir le format de la capture | Capture d'écran
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

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
