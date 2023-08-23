---
metaTitle: Format de date et heure | Barre des menus | macOS defaults
meta:
  - property: 'og:title'
    content: macOS defaults > Barre des menus > Format de date et heure
  - name: 'description'
    content: "Ce paramètre permet de préciser le format de date et heure de la barre de menus.\nLes valeurs acceptées dépendent de vos paramètres de Langue & région.\n\n- `ss` pour les secondes.\n- `HH` pour l'heure (24h).\n- `EEE` pour le jour de la semaine en 3 lettres.\n- `d MMM` pour le jour dans le mois et le mois en 3 lettres.\n"
  - property: 'og:description'
    content: "Ce paramètre permet de préciser le format de date et heure de la barre de menus.\nLes valeurs acceptées dépendent de vos paramètres de Langue & région.\n\n- `ss` pour les secondes.\n- `HH` pour l'heure (24h).\n- `EEE` pour le jour de la semaine en 3 lettres.\n- `d MMM` pour le jour dans le mois et le mois en 3 lettres.\n"
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Format de date et heure

Ce paramètre permet de préciser le format de date et heure de la barre de menus.
Les valeurs acceptées dépendent de vos paramètres de Langue & région.

- `ss` pour les secondes.
- `HH` pour l'heure (24h).
- `EEE` pour le jour de la semaine en 3 lettres.
- `d MMM` pour le jour dans le mois et le mois en 3 lettres.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
  - Big Sur
  - Catalina
- **Type de paramètre**: string

## Avec la valeur `"EEE d MMM HH:mm:ss"`

Lun. 5 oct. à 21:56:12

```bash
defaults write com.apple.menuextra.clock "DateFormat" -string "\"EEE d MMM HH:mm:ss\""
```

<video autoplay loop muted playsinline width="727" height="40" style="max-width: 100%; height: auto">
  <source src="../../menubar/images/DateFormat/EEE_d_MMM_HH.mm.ss.mp4" type="video/mp4">
  Exemple avec la valeur "EEE d MMM HH:mm:ss"
</video>

## Avec la valeur `"EEE h:mm:ss"`

Lun. 21:56:40

```bash
defaults write com.apple.menuextra.clock "DateFormat" -string "\"EEE h:mm:ss\""
```

<video autoplay loop muted playsinline width="727" height="40" style="max-width: 100%; height: auto">
  <source src="../../menubar/images/DateFormat/EEE_h.mm.ss.mp4" type="video/mp4">
  Exemple avec la valeur "EEE h:mm:ss"
</video>

## Avec la valeur `"MMM d HH:mm:ss"`

5 oct. à 21:58:33

```bash
defaults write com.apple.menuextra.clock "DateFormat" -string "\"MMM d HH:mm:ss\""
```

## Lire la valeur courante

```bash
defaults read com.apple.menuextra.clock "DateFormat"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.menuextra.clock "DateFormat"
```
