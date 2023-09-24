---
title: Taille des icônes | Dock
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Taille des icônes

Paramétrer le taille des icônes du Dock

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Type de paramètre**: int

## Avec la valeur `36`

Taille des icônes du Dock de 36 pixels

```bash
defaults write com.apple.dock "tilesize" -int "36" && killall Dock
```

<img
  src="../../dock/images/tilesize/36.png"
  alt="Exemple avec la valeur 36"
  width="740" height="463" style="height: auto"
/>

## Avec la valeur `48` (par défaut)

Taille des icônes du Dock de 48 pixels

```bash
defaults write com.apple.dock "tilesize" -int "48" && killall Dock
```

<img
  src="../../dock/images/tilesize/48.png"
  alt="Exemple avec la valeur 48"
  width="740" height="463" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read com.apple.dock "tilesize"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "tilesize" && killall Dock
```
