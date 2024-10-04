---
title: macOS defaults list
titleTemplate: false
description: You've already copied `defaults write` commands. Sometimes you don't know what they do and are not sure they still work. This list of macOS defaults commands is here to help.
head:
  - - meta
    - property: 'og:title'
      content: A list of macOS defaults commands with demos ✨
  - - meta
    - property: 'og:description'
      content: You've already copied `defaults write` commands. Sometimes you don't know what they do and are not sure they still work. This list of macOS defaults commands is here to help.
  - - meta
    - property: 'og:image'
      content: 'https://macos-defaults.com/media-2x1.jpg'
  - - meta
    - property: 'twitter:image'
      content: 'https://macos-defaults.com/media-2x1.webp'
  - - meta
    - property: 'twitter:card'
      content: 'summary_large_image'
---

<script setup>
import SiteTableOfContents from '../components/SiteTableOfContents.vue'
</script>

# macOS `defaults` list

Incomplete list of macOS `defaults` commands with demos ✨

## 🙋 What's a `defaults` command?

<div class="custom-block tip">
  <p>
    <em>macOS applications and other programs</em> use the <code>defaults</code> system to record user preferences and other information to be maintained when the application isn't running (font for new documents, or the position of an Info panel).
    Much of this information is accessible through an application's Preferences panel but sometimes they're hidden.
  </p>
  <p>
    User defaults belong to <strong>domains</strong>, which typically correspond to individual applications.
    Applications, system services, and other programs have their own domains, they also share a domain named <strong>NSGlobalDomain</strong>.
    If a default isn't specified in the application's domain, it may be specified in NSGlobalDomain.
  </p>
  <p>
    Each domain has a dictionary of keys and values representing its defaults; e.g. <strong>"Default Font" = "Helvetica"</strong>.
    <strong>Keys</strong> are strings, <strong>values</strong> can be complex data structures comprising arrays,
    dictionaries, strings, and binary data. They're stored as XML Property List.
  </p>
  <p>The <code>defaults</code> command line interface is a way to interact with these values.</p>
</div>

**Source: [Real-World-Systems](http://www.real-world-systems.com/docs/defaults.1.html)**

### Command line interface basics

#### Print the help

```bash
defaults help
```

#### List all domains

```bash
defaults domains
```

#### List all entries containing _word_

```bash
defaults find ${word}
```

#### Show the type for the given _domain_, _key_

```bash
defaults read-type ${domain} ${key}
```

#### Rename _old_key_ to _new_key_

```bash
defaults rename ${domain} ${old_key} ${new_key}
```

## 💻 List of commands

<SiteTableOfContents />

## 🤔 How do I add a command?

Please take [a look at the GitHub project](https://github.com/yannbertrand/macos-defaults#add-a-command). Feel free to open an issue if you know an unlisted command. It's also possible to add the command yourself by creating a Pull Request.

## ❤️ I like this website, how can I build the same?

Thank you! I built it using [VitePress](https://vitepress.dev/).

<a href="https://www.netlify.com">
  <img src="/netlify.svg" alt="Deploys by Netlify" width="114" height="51" />
</a>
