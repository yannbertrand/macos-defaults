---
title: Seulement les applications actives | Dock
meta:
  - property: 'og:title'
    content: macOS defaults > Dock > Seulement les applications actives
  - name: 'description'
    content: "Afficher dans le Dock uniquement les applications ouvertes.\n\n⚠️ Attention cette commande vide votre Dock.\n"
  - property: 'og:description'
    content: "Afficher dans le Dock uniquement les applications ouvertes.\n\n⚠️ Attention cette commande vide votre Dock.\n"
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Seulement les applications actives

Afficher dans le Dock uniquement les applications ouvertes.

⚠️ Attention cette commande vide votre Dock.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
- **Type de paramètre**: bool

## Avec la valeur `true`

Affiche uniquement les applications actives

```bash
defaults write com.apple.dock "static-only" -bool "true" && killall Dock
```

## Avec la valeur `false` (par défaut)

Afficher les applications épinglées au dock

```bash
defaults write com.apple.dock "static-only" -bool "false" && killall Dock
```

## Lire la valeur courante

```bash
defaults read com.apple.dock "static-only"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.dock "static-only" && killall Dock
```
