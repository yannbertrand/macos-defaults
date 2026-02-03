---
title: Icon gap size | Menu Bar
description: This setting configures the size of the gap between icons in the Menu Bar.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Menu Bar > Set icon gap size
  - - meta
    - property: 'og:description'
      content: This setting configures the size of the gap between icons in the Menu Bar.
---

# Icon gap size

This setting configures the size of the gap between icons in the Menu Bar.
Accepted values are positive integers, although the range has not been fully tested. 
Larger values provide larger gaps.

Recommended: 7 or 8 for a smaller gap.

⚠️ A logout/login or restart is required for changes to take effect.


- **Tested on macOS**:
  - Monterey
  - Ventura
  - Sequoia
    
- **Parameter type**: integer


## Set to `<int>`

```bash
defaults -currentHost write -globalDomain NSStatusItemSpacing -int <int>
```

## Read current value

```bash
defaults -currentHost read -globalDomain NSStatusItemSpacing
```

## Reset to default value

```bash
defaults -currentHost delete -globalDomain NSStatusItemSpacing
```
