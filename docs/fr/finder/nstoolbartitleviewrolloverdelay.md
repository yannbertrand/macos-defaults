---
metaTitle: Délai au survol du titre | Finder | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Délai au survol du titre
  - name: 'description'
    content: "Choisir le délai d'affichage du titre complet."
  - property: 'og:description'
    content: "Choisir le délai d'affichage du titre complet."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Délai au survol du titre

Choisir le délai d'affichage du titre complet.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Type de paramètre**: float

## Prérequis

- [`com.apple.universalaccess showWindowTitlebarIcons`](../../fr/finder/showWindowTitlebarIcons.html#avec-la-valeur-false) doit avoir la valeur `false`

## Avec la valeur `0.5` (par défaut)

Par défaut, le titre met 0.5 secondes à s'afficher

```bash
defaults write NSGlobalDomain "NSToolbarTitleViewRolloverDelay" -float "0.5" && killall Finder
```

<video autoplay loop muted playsinline width="741" height="416" style="max-width: 100%; height: auto">
  <source src="./finder-NSToolbarTitleViewRolloverDelay-0.5.mp4" type="video/mp4">
  Exemple avec la valeur 0.5
</video>

## Avec la valeur `0`

Supprimer le délai au survol du titre

```bash
defaults write NSGlobalDomain "NSToolbarTitleViewRolloverDelay" -float "0" && killall Finder
```

<video autoplay loop muted playsinline width="741" height="416" style="max-width: 100%; height: auto">
  <source src="./finder-NSToolbarTitleViewRolloverDelay-0.mp4" type="video/mp4">
  Exemple avec la valeur 0
</video>

## Avec la valeur `1`

Ajouter du délai au survol du titre

```bash
defaults write NSGlobalDomain "NSToolbarTitleViewRolloverDelay" -float "1" && killall Finder
```

<video autoplay loop muted playsinline width="741" height="416" style="max-width: 100%; height: auto">
  <source src="./finder-NSToolbarTitleViewRolloverDelay-1.mp4" type="video/mp4">
  Exemple avec la valeur 1
</video>

## Lire la valeur courante

```bash
defaults read NSGlobalDomain "NSToolbarTitleViewRolloverDelay"
```

## Remettre la valeur à l'état initial

```bash
defaults delete NSGlobalDomain "NSToolbarTitleViewRolloverDelay" && killall Finder
```
