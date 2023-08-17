---
metaTitle: Laisser les dossiers en haut | Finder | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Finder > Laisser les dossiers en haut
  - name: "description"
    content: "Laisser les dossiers en haut lors d'un tri par nom."
  - property: "og:description"
    content: "Laisser les dossiers en haut lors d'un tri par nom."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Laisser les dossiers en haut

Laisser les dossiers en haut lors d'un tri par nom.

<!-- break lists -->

- **Testé sur macOS**:
  * Ventura
  * Monterey
  * Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true`

Laisse les dossiers en haut

```bash
defaults write com.apple.finder "_FXSortFoldersFirst" -bool "true" && killall Finder
```
<img
  src="./finder-_FXSortFoldersFirst-true.png"
  alt="Exemple avec la valeur true"
  width="740" height="400" style="height: auto"
/>

## Avec la valeur `false` (par défaut)

Ne laisse pas les dossiers en haut

```bash
defaults write com.apple.finder "_FXSortFoldersFirst" -bool "false" && killall Finder
```
<img
  src="./finder-_FXSortFoldersFirst-false.png"
  alt="Exemple avec la valeur false"
  width="740" height="400" style="height: auto"
/>

## Lire la valeur courante
```bash
defaults read com.apple.finder "_FXSortFoldersFirst"
```

## Remettre la valeur à l'état initial
```bash
defaults delete com.apple.finder "_FXSortFoldersFirst" && killall Finder
```
