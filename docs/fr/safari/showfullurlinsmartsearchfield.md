---
metaTitle: Afficher l'URL complète | Safari | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Safari > Afficher l'URL complète
  - name: 'description'
    content: "Afficher l'adresse des sites web en entier."
  - property: 'og:description'
    content: "Afficher l'adresse des sites web en entier."
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Afficher l'URL complète

Afficher l'adresse des sites web en entier.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
- **Type de paramètre**: bool

## Avec la valeur `true`

Affiche l'URL complète des sites web.

```bash
defaults write com.apple.Safari "ShowFullURLInSmartSearchField" -bool "true" && killall Safari
```

<img
  src="../../safari/images/ShowFullURLInSmartSearchField/true.png"
  alt="Exemple avec la valeur true"
  width="740" height="207" style="height: auto"
/>

## Avec la valeur `false` (par défaut)

N'affiche pas l'URL complète des sites web.

```bash
defaults write com.apple.Safari "ShowFullURLInSmartSearchField" -bool "false" && killall Safari
```

<img
  src="../../safari/images/ShowFullURLInSmartSearchField/false.png"
  alt="Exemple avec la valeur false"
  width="740" height="207" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read com.apple.Safari "ShowFullURLInSmartSearchField"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.Safari "ShowFullURLInSmartSearchField" && killall Safari
```
