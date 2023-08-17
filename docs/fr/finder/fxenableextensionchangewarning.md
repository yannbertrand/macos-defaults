---
metaTitle: Alerte au changement d'extension | Finder | macOS defaults
meta:
  - property: "og:title"
    content: macOS defaults > Finder > Alerte au changement d'extension
  - name: "description"
    content: "Choisir si il faut afficher une alerte au changement de format de fichier ou non."
  - property: "og:description"
    content: "Choisir si il faut afficher une alerte au changement de format de fichier ou non."
  - property: "twitter:card"
    content: "summary"
  - property: "twitter:image"
    content: "https://macos-defaults.netlify.app/media-1x1.webp"
  - property: "og:image"
    content: "https://macos-defaults.netlify.app/media-1x1.jpg"
---
# Alerte au changement d'extension

Choisir si il faut afficher une alerte au changement de format de fichier ou non.

<!-- break lists -->

- **Testé sur macOS**:
  * Ventura
  * Monterey
  * Big Sur
  * Catalina
  * Mojave
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Afficher une alerte au changement de format de fichier

```bash
defaults write com.apple.finder "FXEnableExtensionChangeWarning" -bool "true" && killall Finder
```
<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="./finder-FXEnableExtensionChangeWarning-true.mp4" type="video/mp4">
  Exemple avec la valeur true
</video>

## Avec la valeur `false`

Ne pas afficher d'alerte au changement

```bash
defaults write com.apple.finder "FXEnableExtensionChangeWarning" -bool "false" && killall Finder
```
<video autoplay loop muted playsinline width="739" height="416" style="max-width: 100%; height: auto">
  <source src="./finder-FXEnableExtensionChangeWarning-false.mp4" type="video/mp4">
  Exemple avec la valeur false
</video>

## Lire la valeur courante
```bash
defaults read com.apple.finder "FXEnableExtensionChangeWarning"
```

## Remettre la valeur à l'état initial
```bash
defaults delete com.apple.finder "FXEnableExtensionChangeWarning" && killall Finder
```
