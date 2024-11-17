---
title: Keep windows when quitting an application | Miscellaneous
description: 
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Keep windows when quitting an application
  - - meta
    - property: 'og:description'
      content: When enabled, open documents and windows will be restored when you re-open an application.
---

# Keep windows when quitting an application

When enabled, open documents and windows will be restored when you re-open an application.
This setting is the inverse of the option accessible through
System Preferences > Desktop & Dock > Close windows when quitting an application.
Requires logging out and in again before working.

- **Tested on macOS**:
  - Sequoia
- **Parameter type**: bool

## Set to `true` (default value)

Keep windows when quitting an application.
Open documents and windows will be restored when you re-open an application.

```bash
defaults write NSGlobalDomain "NSQuitAlwaysKeepsWindow" -bool "true"
```

## Set to `false`

Close windows when quitting an application.
Open documents and windows will not be restored when you re-open an application.

```bash
defaults write NSGlobalDomain "NSQuitAlwaysKeepsWindow" -bool "false"
```

## Read current value

```bash
defaults read NSGlobalDomain "NSQuitAlwaysKeepsWindow"
```

## Reset to default value

```bash
defaults delete NSGlobalDomain "NSQuitAlwaysKeepsWindow"
```
