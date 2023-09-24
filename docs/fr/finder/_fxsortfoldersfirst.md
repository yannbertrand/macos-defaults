---
title: Laisser les dossiers en haut | Finder
---

# Laisser les dossiers en haut

Laisser les dossiers en haut lors d'un tri par nom.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true`

Laisse les dossiers en haut

```bash
defaults write com.apple.finder "_FXSortFoldersFirst" -bool "true" && killall Finder
```

<img
  src="../../finder/images/_FXSortFoldersFirst/true.png"
  alt="Exemple avec la valeur true"
  width="740" height="400" style="height: auto"
/>

## Avec la valeur `false` (par défaut)

Ne laisse pas les dossiers en haut

```bash
defaults write com.apple.finder "_FXSortFoldersFirst" -bool "false" && killall Finder
```

<img
  src="../../finder/images/_FXSortFoldersFirst/false.png"
  alt="Exemple avec la valeur false"
  width="740" height="400" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read com.apple.finder "_FXSortFoldersFirst"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "_FXSortFoldersFirst" && killall Finder
```
