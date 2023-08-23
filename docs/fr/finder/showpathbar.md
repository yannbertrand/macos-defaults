---
metaTitle: Barre du chemin d'accès | Finder | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Barre du chemin d'accès
  - name: 'description'
    content: "Afficher la barre du chemin d'accès en bas de la fenêtre du Finder."
  - property: 'og:description'
    content: "Afficher la barre du chemin d'accès en bas de la fenêtre du Finder."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Barre du chemin d'accès

Afficher la barre du chemin d'accès en bas de la fenêtre du Finder.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true`

Afficher la barre du chemin d'accès

```bash
defaults write com.apple.finder "ShowPathbar" -bool "true" && killall Finder
```

<img
  src="../../finder/images/ShowPathbar/true.png"
  alt="Exemple avec la valeur true"
  width="740" height="451" style="height: auto"
/>

## Avec la valeur `false` (par défaut)

Masquer la barre du chemin d'accès

```bash
defaults write com.apple.finder "ShowPathbar" -bool "false" && killall Finder
```

<img
  src="../../finder/images/ShowPathbar/false.png"
  alt="Exemple avec la valeur false"
  width="740" height="451" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read com.apple.finder "ShowPathbar"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.finder "ShowPathbar" && killall Finder
```
