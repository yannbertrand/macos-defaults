---
title: Afficher les extensions | Finder
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Afficher les extensions
  - name: 'description'
    content: 'Afficher toutes les extensions de fichier ou non.'
  - property: 'og:description'
    content: 'Afficher toutes les extensions de fichier ou non.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Afficher les extensions

Afficher toutes les extensions de fichier ou non.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

Ne pas afficher toutes les extensions dans le Finder

```bash
defaults write NSGlobalDomain "AppleShowAllExtensions" -bool "false" && killall Finder
```

## Avec la valeur `true`

Afficher toutes les extensions de fichier dans le Finder

```bash
defaults write NSGlobalDomain "AppleShowAllExtensions" -bool "true" && killall Finder
```

## Lire la valeur courante

```bash
defaults read NSGlobalDomain "AppleShowAllExtensions"
```

## Remettre la valeur à l'état initial

```bash
defaults delete NSGlobalDomain "AppleShowAllExtensions" && killall Finder
```
