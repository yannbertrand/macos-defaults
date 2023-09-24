---
title: Inclure la date | Capture d'écran
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Inclure la date

Inclure la date et l'heure dans le nom du fichier.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Screenshot 2020-01-09 at 13.27.20.png

```bash
defaults write com.apple.screencapture "include-date" -bool "true"
```

## Avec la valeur `false`

- Screenshot.png
- Screenshot 1.png

```bash
defaults write com.apple.screencapture "include-date" -bool "false"
```

## Lire la valeur courante

```bash
defaults read com.apple.screencapture "include-date"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.screencapture "include-date"
```
