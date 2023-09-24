---
title: Seulement les applications actives | Dock
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Seulement les applications actives

Afficher dans le Dock uniquement les applications ouvertes.

⚠️ Attention cette commande vide votre Dock.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
- **Type de paramètre**: bool

## Avec la valeur `true`

Affiche uniquement les applications actives

```bash
defaults write com.apple.dock "static-only" -bool "true" && killall Dock
```

## Avec la valeur `false` (par défaut)

Afficher les applications épinglées au dock

```bash
defaults write com.apple.dock "static-only" -bool "false" && killall Dock
```

## Lire la valeur courante

```bash
defaults read com.apple.dock "static-only"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "static-only" && killall Dock
```
