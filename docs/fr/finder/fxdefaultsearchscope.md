---
title: Portée des recherches | Finder
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Portée des recherches

Définir la portée par défaut des recherche.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Type de paramètre**: string

## Avec la valeur `SCcf`

Recherche dans le dossier courant

```bash
defaults write com.apple.finder "FXDefaultSearchScope" -string "SCcf" && killall Finder
```

## Avec la valeur `SCsp`

Utilise la portée précédente

```bash
defaults write com.apple.finder "FXDefaultSearchScope" -string "SCsp" && killall Finder
```

## Avec la valeur `SCev` (par défaut)

Recherche dans ce Mac

```bash
defaults write com.apple.finder "FXDefaultSearchScope" -string "SCev" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "FXDefaultSearchScope"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "FXDefaultSearchScope" && killall Finder
```
