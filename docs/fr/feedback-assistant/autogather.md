---
title: Collecte automatique | Assistant d'évaluation
---

# Collecte automatique

Collecter automatiquement des larges fichiers lors de la soumission de compte rendu.

Peut ralentir significativement le Mac et envoyer de grosses quantités de données.

<!-- break lists -->

- **Testé sur macOS**:
  - Monterey
  - Big Sur
- **Type de paramètre**: bool

## Avec la valeur `true` (par défaut)

L'assistant d'évaluation récupère de gros fichiers lors de la soumission

```bash
defaults write com.apple.appleseed.FeedbackAssistant "Autogather" -bool "true"
```

## Avec la valeur `false`

Ne pas collecter ces fichiers lors de l'envoi

```bash
defaults write com.apple.appleseed.FeedbackAssistant "Autogather" -bool "false"
```

## Lire la valeur courante

```bash
defaults read com.apple.appleseed.FeedbackAssistant "Autogather"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.appleseed.FeedbackAssistant "Autogather"
```
