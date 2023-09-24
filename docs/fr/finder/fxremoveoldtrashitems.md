---
title: Vider la corbeille automatiquement | Finder
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Vider la corbeille automatiquement

Supprimer automatiquement les éléments se trouvant dans la corbeille depuis plus de 30 jours.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true`

Supprime automatiquement les éléments après 30 jours

```bash
defaults write com.apple.finder "FXRemoveOldTrashItems" -bool "true" && killall Finder
```

## Avec la valeur `false` (par défaut)

Garde les éléments dans la corbeille

```bash
defaults write com.apple.finder "FXRemoveOldTrashItems" -bool "false" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "FXRemoveOldTrashItems"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "FXRemoveOldTrashItems" && killall Finder
```
