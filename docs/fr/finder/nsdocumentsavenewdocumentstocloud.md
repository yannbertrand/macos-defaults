---
title: Sauvegarder sur le disque ou dans iCloud par défaut | Finder
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Sauvegarder sur le disque ou dans iCloud par défaut

Définir si l'emplacement de sauvegarde par défaut est sur le disque ou dans iCloud

<!-- break lists -->

- **Testé sur macOS**:
  - Catalina
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

iCloud Documents est le dossier ouvert par défaut lors de la sauvegarde d'un nouveau document

```bash
defaults write NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud" -bool "true"
```

## Avec la valeur `false`

Le répertoire utilisateur est ouvert par défaut lors de la sauvegarde d'un nouveau document

```bash
defaults write NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud" -bool "false"
```

## Lire la valeur courante

```bash
defaults read NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud"
```

## Remettre la valeur à l'état initial

```bash
defaults delete NSGlobalDomain "NSDocumentSaveNewDocumentsToCloud"
```
