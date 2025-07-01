---
title: Toggle Apple Intelligence | Miscellaneous
description: Toggle Apple Intelligence from command line interface.
head:
  - - meta
    - property: 'og:title'
      content: macOS defaults > Miscellaneous > Toggle Apple Intelligence
  - - meta
    - property: 'og:description'
      content: Toggle Apple Intelligence from command line interface.
---

# Toggle Apple Intelligence

Starting from macOS 15.3, Apple Intelligence is activated by default on ARM Macs. It is possible to deactivate it from the command line.

> [!TIP]
> It may be needed to restart the Mac after toggling the option.

- **Tested on macOS**:
  - Sequoia
- **Parameter type**: bool

## Set to `false`

Deactivate Apple Intelligence.

```bash
defaults write com.apple.CloudSubscriptionFeatures.optIn "545129924" -bool "false"
```

## Set to `true` (default value)

Activate Apple Intelligence.

```bash
defaults write com.apple.CloudSubscriptionFeatures.optIn "545129924" -bool "true"
```

## Read current value

```bash
defaults read com.apple.CloudSubscriptionFeatures.optIn "545129924"
```

## Reset to default value

```bash
defaults delete com.apple.CloudSubscriptionFeatures.optIn "545129924"
```

## Set value from UI

1. <a href="x-apple.systempreferences:com.apple.Siri-Settings">Access Apple Intelligence settings from macOS UI</a>
2. Toggle "Apple Intelligence" value

## END USER NOTE: 
After a few other post release updates, it appears the "patchID / code" for Apple Intelligence (referenced above)
seems to CHANGE after updates. I am using the following technique to "extract" this code using simple bash, and THEN apply 
the aforementioned update: 
(NOTE TO AUTHOR: apologies in advance, I did not know where this information wouold best be structured on your
original page format. Please feel free to adjust or advise me where this should be structured)


```
patchID=""
tmpres=`defaults read com.apple.CloudSubscriptionFeatures.optIn`
IFS=$' \n\t'
myarr=($tmpres)
for item in "${myarr[@]}"; do
  # Only care about lines that ONLY contain digits
  if [[ "$item" =~ [^0-9] ]]; then
    continue
  fi
  # If $patchID is empty, we fill it in with the value that is "only digits"
  # We only care about first entry, so we break loop when done
  if [[ -z $patchID ]]; then
    patchID=$item
    break
  fi    
done

echo "Patch ID is: $patchID"
defaults write com.apple.CloudSubscriptionFeatures.optIn ${patchID} -bool false
defaults write com.apple.CloudSubscriptionFeatures.optIn auto_opt_in -bool false
defaults read com.apple.CloudSubscriptionFeatures.optIn
```

