---
metaTitle: Afficher les fichiers cachés | Finder | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Afficher les fichiers cachés
  - name: 'description'
    content: 'Afficher les fichiers cachés dans le Finder.'
  - property: 'og:description'
    content: 'Afficher les fichiers cachés dans le Finder.'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Afficher les fichiers cachés

Afficher les fichiers cachés dans le Finder.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

Ne pas afficher les fichiers cachés dans le Finder

```bash
defaults write com.apple.finder "AppleShowAllFiles" -bool "false" && killall Finder
```

<img
  src="../../finder/images/AppleShowAllFiles/false.png"
  alt="Exemple avec la valeur false"
  width="740" height="451" style="height: auto"
/>

## Avec la valeur `true`

Afficher les fichiers cachés dans le Finder

```bash
defaults write com.apple.finder "AppleShowAllFiles" -bool "true" && killall Finder
```

<img
  src="../../finder/images/AppleShowAllFiles/true.png"
  alt="Exemple avec la valeur true"
  width="740" height="451" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read com.apple.finder "AppleShowAllFiles"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "AppleShowAllFiles" && killall Finder
```
