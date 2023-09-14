---
title: Quitter | Finder
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Quitter
  - name: 'description'
    content: "Afficher ou non l'option pour quitter le Finder. Non recommandé."
  - property: 'og:description'
    content: "Afficher ou non l'option pour quitter le Finder. Non recommandé."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Quitter

Afficher ou non l'option pour quitter le Finder. Non recommandé.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
  - Mojave
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

Cacher l'option "Quitter" du Finder

```bash
defaults write com.apple.finder "QuitMenuItem" -bool "false" && killall Finder
```

## Avec la valeur `true`

Afficher l'option "Quitter" du Finder

```bash
defaults write com.apple.finder "QuitMenuItem" -bool "true" && killall Finder
```

## Lire la valeur courante

```bash
defaults read com.apple.finder "QuitMenuItem"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "QuitMenuItem" && killall Finder
```
