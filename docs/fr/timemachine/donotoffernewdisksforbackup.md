---
title: Eviter les nouveaux disques | Time Machine
meta:
  - property: 'og:title'
    content: macOS defaults > Time Machine > Eviter les nouveaux disques
  - name: 'description'
    content: 'Ne pas proposer les périphériques de stockage nouvellement branchés en tant que disque de sauvegarde'
  - property: 'og:description'
    content: 'Ne pas proposer les périphériques de stockage nouvellement branchés en tant que disque de sauvegarde'
  - property: 'twitter:card'
    content: 'summary'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-1x1.jpg'
---

# Eviter les nouveaux disques

Ne pas proposer les périphériques de stockage nouvellement branchés en tant que disque de sauvegarde

<!-- break lists -->

- **Testé sur macOS**:
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `false` (par défaut)

Lorsqu'un nouveau périphérique de stockage est branché, l'ordinateur propose de l'ajouter en tant que disque de sauvegarde

```bash
defaults write com.apple.TimeMachine "DoNotOfferNewDisksForBackup" -bool "false"
```

## Avec la valeur `true`

Ne pas proposer les nouveaux périphériques de stockage connectés comme disque de sauvegarde

```bash
defaults write com.apple.TimeMachine "DoNotOfferNewDisksForBackup" -bool "true"
```

## Lire la valeur courante

```bash
defaults read com.apple.TimeMachine "DoNotOfferNewDisksForBackup"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.TimeMachine "DoNotOfferNewDisksForBackup"
```
