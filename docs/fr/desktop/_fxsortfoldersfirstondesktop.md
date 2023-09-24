---
title: Laisser les dossiers en haut | Bureau
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Laisser les dossiers en haut

Laisser les dossiers du bureau en haut lors d'un tri.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true`

Laisse les dossiers en haut

```bash
defaults write com.apple.finder "_FXSortFoldersFirstOnDesktop" -bool "true" && killall Finder
```

## Avec la valeur `false` (par défaut)

Ne laisse pas les dossiers en haut

```bash
defaults write com.apple.finder "_FXSortFoldersFirstOnDesktop" -bool "false" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "_FXSortFoldersFirstOnDesktop"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "_FXSortFoldersFirstOnDesktop" && killall Finder
```
