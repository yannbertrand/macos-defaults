---
title: Réorganiser automatiquement | Mission Control
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Réorganiser automatiquement

Réorganiser les bureaux virtuels automatiquement.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Déplacer les bureaux virtuels les plus récemment utilisés

```bash
defaults write com.apple.dock "mru-spaces" -bool "true" && killall Dock
```

## Avec la valeur `false`

Toujours conserver l'arrangement de bureaux virtuels

```bash
defaults write com.apple.dock "mru-spaces" -bool "false" && killall Dock
```

## Lire la valeur courante

```bash
defaults read com.apple.dock "mru-spaces"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "mru-spaces" && killall Dock
```
