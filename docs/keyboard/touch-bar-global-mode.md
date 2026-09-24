---
title: Default Touch Bar style | Keyboard
description: Configure what the Touch Bar shows by default.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Keyboard > Default Touch Bar style
  - - meta
    - property: 'og:description'
      content: Configure what the Touch Bar shows by default.
---

# Default Touch Bar style

Change what the Touch Bar shows by default.

- **Tested on macOS**:
  - Golden Gate
- **Parameter type**: string
  - `app`
  - `appWithControlStrip`
  - `functionKeys`
  - `spaces`
  - `spacesWithControlStrip`
  - `workflows`
  - `workflowsWithControlStrip`

## Set to `app`

Show app-specific controls on the Touch Bar.

```bash
defaults write com.apple.touchbar.agent PresentationModeGlobal -string "app" && sudo killall TouchBarServer
```

![Example output with value set to app](./images/touchbar-presentation-mode/app.png)

## Set to `appWithControlStrip` (default value)

Show app-specific controls and the Control Strip on the Touch Bar.

```bash
defaults write com.apple.touchbar.agent PresentationModeGlobal -string "appWithControlStrip" && sudo killall TouchBarServer
```

![Example output with value set to appWithControlStrip](./images/touchbar-presentation-mode/appWithControlStrip.png)

## Set to `functionKeys`

Show function keys on the Touch Bar.

```bash
defaults write com.apple.touchbar.agent PresentationModeGlobal -string "functionKeys" && sudo killall TouchBarServer
```

![Example output with value set to functionKeys](./images/touchbar-presentation-mode/functionKeys.png)

## Set to `fullControlStrip`

Show the Expanded Control Strip on the Touch Bar.

```bash
defaults write com.apple.touchbar.agent PresentationModeGlobal -string "fullControlStrip" && sudo killall TouchBarServer
```

![Example output with value set to fullControlStrip](./images/touchbar-presentation-mode/fullControlStrip.png)

## Set to `spaces`

Show spaces on the Touch Bar.

```bash
defaults write com.apple.touchbar.agent PresentationModeGlobal -string "spaces" && sudo killall TouchBarServer
```

![Example output with value set to spaces](./images/touchbar-presentation-mode/spaces.png)

## Set to `spacesWithControlStrip`

Show spaces and the Control Strip on the Touch Bar.

```bash
defaults write com.apple.touchbar.agent PresentationModeGlobal -string "spacesWithControlStrip" && sudo killall TouchBarServer
```

![Example output with value set to spacesWithControlStrip](./images/touchbar-presentation-mode/spacesWithControlStrip.png)

## Set to `workflows`

Show Quick Actions on the Touch Bar.

```bash
defaults write com.apple.touchbar.agent PresentationModeGlobal -string "workflows" && sudo killall TouchBarServer
```

![Example output with value set to workflows](./images/touchbar-presentation-mode/workflows.png)

## Set to `workflowsWithControlStrip`

Show Quick Actions and the Control Strip on the Touch Bar.

```bash
defaults write com.apple.touchbar.agent PresentationModeGlobal -string "workflowsWithControlStrip" && sudo killall TouchBarServer
```

![Example output with value set to app](./images/touchbar-presentation-mode/workflowsWithControlStrip.png)

## Read current value

```bash
defaults read com.apple.touchbar.agent PresentationModeGlobal
```

## Reset to default value

```bash
defaults delete com.apple.touchbar.agent PresentationModeGlobal
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.Keyboard-Settings.extension?TouchBarSettings">Access Touch Bar settings from macOS UI</a>
2. Set "Touch Bar shows" dropdown value
3. Toggle "Show Control Strip" as desired
