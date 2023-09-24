---
title: Quitter | Finder
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Quitter

Afficher ou non l'option pour quitter le Finder. Non recommandé.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

Cacher l'option "Quitter" du Finder

```bash
defaults write com.apple.finder "QuitMenuItem" -bool "false" && killall Finder
```

## Avec la valeur `true`

Afficher l'option "Quitter" du Finder

```bash
defaults write com.apple.finder "QuitMenuItem" -bool "true" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "QuitMenuItem"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "QuitMenuItem" && killall Finder
```
