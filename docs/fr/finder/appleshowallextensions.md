---
title: Afficher les extensions | Finder
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Afficher les extensions

Afficher toutes les extensions de fichier ou non.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

Ne pas afficher toutes les extensions dans le Finder

```bash
defaults write NSGlobalDomain "AppleShowAllExtensions" -bool "false" && killall Finder
```

## Avec la valeur `true`

Afficher toutes les extensions de fichier dans le Finder

```bash
defaults write NSGlobalDomain "AppleShowAllExtensions" -bool "true" && killall Finder
```

## Lire la valeur courante

```bash
defaults read NSGlobalDomain "AppleShowAllExtensions"
```

## Remettre la valeur à l'état initial

```bash
defaults delete NSGlobalDomain "AppleShowAllExtensions" && killall Finder
```
