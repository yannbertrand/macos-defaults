---
title: Position | Dock
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Position

Choisir la position du Dock

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: string
  - left
  - bottom
  - right

## Avec la valeur `left`

Placer le Dock sur la gauche de l'écran

```bash
defaults write com.apple.dock "orientation" -string "left" && killall Dock
```

<img
  src="../../dock/images/orientation/left.png"
  alt="Exemple avec la valeur left"
  width="740" height="463" style="height: auto"
/>

## Avec la valeur `bottom` (par défaut)

Placer le Dock en bas de l'écran

```bash
defaults write com.apple.dock "orientation" -string "bottom" && killall Dock
```

<img
  src="../../dock/images/orientation/bottom.png"
  alt="Exemple avec la valeur bottom"
  width="740" height="463" style="height: auto"
/>

## Avec la valeur `right`

Placer le Dock sur la droite de l'écran

```bash
defaults write com.apple.dock "orientation" -string "right" && killall Dock
```

<img
  src="../../dock/images/orientation/right.png"
  alt="Exemple avec la valeur right"
  width="740" height="463" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read com.apple.dock "orientation"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "orientation" && killall Dock
```
