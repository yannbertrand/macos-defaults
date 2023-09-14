---
title: Portée des recherches | Finder
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Portée des recherches
  - name: 'description'
    content: 'Définir la portée par défaut des recherche.'
  - property: 'og:description'
    content: 'Définir la portée par défaut des recherche.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

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
