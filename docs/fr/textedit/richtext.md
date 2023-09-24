---
title: Définir le format de document par défaut | TextEdit
---

# Définir le format de document par défaut

Définir le format de document par défaut comme texte enrichi (.rtf) ou texte brut (.txt).

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

Texte enrichi activé.

```bash
defaults write com.apple.TextEdit "RichText" -bool "true" && killall TextEdit
```

<img
  src="../../textedit/images/RichText/true.png"
  alt="Exemple avec la valeur true"
  width="740" height="451" style="height: auto"
/>

## Avec la valeur `false`

Texte enrichi désactivé.

```bash
defaults write com.apple.TextEdit "RichText" -bool "false" && killall TextEdit
```

<img
  src="../../textedit/images/RichText/false.png"
  alt="Exemple avec la valeur false"
  width="740" height="451" style="height: auto"
/>

## Lire la valeur courante

```bash
defaults read com.apple.TextEdit "RichText"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.TextEdit "RichText" && killall TextEdit
```
