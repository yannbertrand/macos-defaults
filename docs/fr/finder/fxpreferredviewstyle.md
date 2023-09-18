---
title: Style de présentation par défaut | Finder
---

# Style de présentation par défaut

Définir le style d'affichage par défaut des dossiers sans réglage spécifique.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Type de paramètre**: string

## Avec la valeur `clmv`

Vue en colonnes

```bash
defaults write com.apple.finder "FXPreferredViewStyle" -string "clmv" && killall Finder
```

## Avec la valeur `Nlsv`

Vue en liste

```bash
defaults write com.apple.finder "FXPreferredViewStyle" -string "Nlsv" && killall Finder
```

## Avec la valeur `glyv`

Vue en galerie d'icônes

```bash
defaults write com.apple.finder "FXPreferredViewStyle" -string "glyv" && killall Finder
```

## Avec la valeur `icnv` (par défaut)

Vue en icônes

```bash
defaults write com.apple.finder "FXPreferredViewStyle" -string "icnv" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "FXPreferredViewStyle"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "FXPreferredViewStyle" && killall Finder
```
