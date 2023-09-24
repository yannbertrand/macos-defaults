---
title: Afficher l'URL complète | Safari
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Afficher l'URL complète

Afficher l'adresse des sites web en entier.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
- **Type de paramètre**: bool

## Avec la valeur `true`

Affiche l'URL complète des sites web.

```bash
defaults write com.apple.Safari "ShowFullURLInSmartSearchField" -bool "true" && killall Safari
```

<img
  src="../../safari/images/ShowFullURLInSmartSearchField/true.png"
  alt="Exemple avec la valeur true"
  width="740" height="207" style="height: auto"
/>

## Avec la valeur `false` (par défaut)

N'affiche pas l'URL complète des sites web.

```bash
defaults write com.apple.Safari "ShowFullURLInSmartSearchField" -bool "false" && killall Safari
```

<img
  src="../../safari/images/ShowFullURLInSmartSearchField/false.png"
  alt="Exemple avec la valeur false"
  width="740" height="207" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read com.apple.Safari "ShowFullURLInSmartSearchField"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.Safari "ShowFullURLInSmartSearchField" && killall Safari
```
