---
metaTitle: Taille des icônes de la barre latérale | Finder | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Finder > Taille des icônes de la barre latérale
  - name: 'description'
    content: 'Personnaliser la taille des icônes dans la barre latérale du Finder'
  - property: 'og:description'
    content: 'Personnaliser la taille des icônes dans la barre latérale du Finder'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Taille des icônes de la barre latérale

Personnaliser la taille des icônes dans la barre latérale du Finder

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
  - Catalina
- **Type de paramètre**: int

## Avec la valeur `1`

Petites

```bash
defaults write NSGlobalDomain "NSTableViewDefaultSizeMode" -int "1" && killall Finder
```

<img
  src="../../../images/finder/NSTableViewDefaultSizeMode/1.png"
  alt="Exemple avec la valeur 1"
  width="740" height="415" style="height: auto"
/>

## Avec la valeur `2` (par défaut)

Moyennes

```bash
defaults write NSGlobalDomain "NSTableViewDefaultSizeMode" -int "2" && killall Finder
```

<img
  src="../../../images/finder/NSTableViewDefaultSizeMode/2.png"
  alt="Exemple avec la valeur 2"
  width="740" height="415" style="height: auto"
/>

## Avec la valeur `3`

Grosses

```bash
defaults write NSGlobalDomain "NSTableViewDefaultSizeMode" -int "3" && killall Finder
```

<img
  src="../../../images/finder/NSTableViewDefaultSizeMode/3.png"
  alt="Exemple avec la valeur 3"
  width="740" height="415" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read NSGlobalDomain "NSTableViewDefaultSizeMode"
```

## Remettre la valeur à l'état initial

```bash
defaults delete NSGlobalDomain "NSTableViewDefaultSizeMode" && killall Finder
```
