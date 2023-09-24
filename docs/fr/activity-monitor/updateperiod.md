---
title: Modifier la fréquence | Moniteur d'activité
---

::: warning Attention
La langue française n'est plus supportée sur macos-defaults.com. Cette page redirigera automatiquement vers la version anglaise correspondante en 2024.
:::

# Modifier la fréquence

Modifier la fréquence à laquelle le Moniteur d'activité met à jour ses données, en secondes.

<!-- break lists -->

- **Testé sur macOS**:
  - Ventura
  - Monterey
- **Type de paramètre**: int
  - 1
  - 2
  - 5

## Avec la valeur `1`

Très souvent (1s)

```bash
defaults write com.apple.ActivityMonitor "UpdatePeriod" -int "1" && killall Activity\ Monitor
```

## Avec la valeur `2`

Souvent (2s)

```bash
defaults write com.apple.ActivityMonitor "UpdatePeriod" -int "2" && killall Activity\ Monitor
```

## Avec la valeur `5` (par défaut)

Normale (5s)

```bash
defaults write com.apple.ActivityMonitor "UpdatePeriod" -int "5" && killall Activity\ Monitor
```

## Lire la valeur courante

```bash
defaults read com.apple.ActivityMonitor "UpdatePeriod"
```

## Remettre la valeur à l'état initial

```bash
defaults delete com.apple.ActivityMonitor "UpdatePeriod" && killall Activity\ Monitor
```
