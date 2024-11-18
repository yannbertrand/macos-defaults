---
title: Keep windows when quitting an application | Miscellaneous
description: When enabled, open documents and windows will be restored when you re-open an application.
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

⚠️ Restarting the Mac or closing the session is necessary to take the changes into effect.

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

## Set value from UI

This setting is the inverse of the following option accessible through
System Preferences.

1. Open the <a href="x-apple.systempreferences:com.apple.preference.dock?Windows">Desktop & Dock preference pane in System Preferences</a>.
2. Toggle "Close windows when quitting an application".
