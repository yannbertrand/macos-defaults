---
metaTitle: 'Liste de defaults macOS'
meta:
  - property: 'og:title'
    content: 'Une liste de commandes `defaults` pour macOS ✨'
  - name: 'description'
    content: "Vous avez déjà copié des commandes du style `defaults write`. Parfois sans être sur de ce qu'elles font ou si elles fonctionnent toujours. Cette liste de commandes `defaults` macOS est là pour vous aider."
  - property: 'og:description'
    content: "Vous avez déjà copié des commandes du style `defaults write`. Parfois sans être sur de ce qu'elles font ou si elles fonctionnent toujours. Cette liste de commandes `defaults` macOS est là pour vous aider."
  - property: 'twitter:card'
    content: 'summary_large_image'
  - property: 'twitter:image'
    content: 'https://macos-defaults.netlify.app/media-2x1.webp'
  - property: 'og:image'
    content: 'https://macos-defaults.netlify.app/media-2x1.jpg'
---

# macOS `defaults`

Une liste de commandes `defaults` pour macOS avec des exemples ✨

## 🙋 Qu'est-ce qu'une commande `defaults` ?

<div class="custom-block tip">
  <p>
    <em>Les applications macOS et les autres programmes</em> utilisent le sytème de <code>defaults</code> pour sauvegarder les préférences utilisateurs et stocker des infos lorsque l'application ne tourne pas (police d'écriture pour des nouveaux documents, ou la position d'un paneau d'informations).
    La plupart de ces informations sont accessibles à travers les panneaux de préférences de l'application concernée mais elles sont parfois cachées.
  </p>
  <p>
    Les <code>defaults</code> d'un utilisateur appartiennent à des <strong>domaines</strong>, qui correspondent généralement à une application.
    Les applications, les services systèmes et les autres programmes ont souvent leur propre domaine. Elles partagent aussi un domaine commun <strong>NSGlobalDomain</strong>.
    Si un default n'est pas placé dans le domaine d'une application, il est possible qu'il soit dans le NSGlobalDomain.
  </p>
  <p>
    Chaque domaine possède un dictionnaire de clés et valeurs qui représente les defaults. Par exemple <strong>"Default Font" = "Helvetica"</strong>.
    Les <strong>clés</strong> sont des chaines de charactères, les <strong>valeurs</strong> peuvent être des structures de données complexes comme des tableaux, des dictionnaires, des chaines de charactères, ou de la donnée binaire.
    Elles sont stockées dans des fichiers Property List XML.
  </p>
  <p>L'interface de ligne de commandes <code>defaults</code> est un moyen de manipuler des valeurs.</p>
</div>

**Source : [Real-World-Systems](http://www.real-world-systems.com/docs/defaults.1.html)**

### La base de la ligne de commandes

#### Afficher l'aide

```bash
defaults help
```

#### Lister tous les domaines

```bash
defaults domains
```

#### Lister toutes les entrées contenant _word_

```bash
defaults find ${word}
```

#### Afficher le type avec les _domain_, _key_ donnés

```bash
defaults read-type ${domain} ${key}
```

#### Renommer _old_key_ en _new_key_

```bash
defaults rename ${domain} ${old_key} ${new_key}
```

## 💻 Liste de commandes

### Dock

- [Position](./dock/orientation.html)
- [Taille des icônes](./dock/tilesize.html)
- [Caché automatiquement](./dock/autohide.html)
- [Durée de l&#x27;animation d&#x27;affichage](./dock/autohide-time-modifier.html)
- [Délai avant affichage](./dock/autohide-delay.html)
- [Afficher les Apps récentes](./dock/show-recents.html)
- [Animation de minimisation](./dock/mineffect.html)
- [Seulement les applications actives](./dock/static-only.html)

### Capture d&#x27;écran

- [Enlever l&#x27;ombre](./screenshots/disable-shadow.html)
- [Inclure la date](./screenshots/include-date.html)
- [Emplacement](./screenshots/location.html)
- [Afficher la vignette](./screenshots/show-thumbnail.html)
- [Choisir le format de la capture](./screenshots/type.html)

### Safari

- [Afficher l&#x27;URL complète](./safari/showfullurlinsmartsearchfield.html)

### Finder

- [Quitter](./finder/quitmenuitem.html)
- [Afficher les extensions](./finder/appleshowallextensions.html)
- [Afficher les fichiers cachés](./finder/appleshowallfiles.html)
- [Barre du chemin d&#x27;accès](./finder/showpathbar.html)
- [Style de présentation par défaut](./finder/fxpreferredviewstyle.html)
- [Laisser les dossiers en haut](./finder/_fxsortfoldersfirst.html)
- [Portée des recherches](./finder/fxdefaultsearchscope.html)
- [Vider la corbeille automatiquement](./finder/fxremoveoldtrashitems.html)
- [Alerte au changement d&#x27;extension](./finder/fxenableextensionchangewarning.html)
- [Sauvegarder sur le disque ou dans iCloud par défaut](./finder/nsdocumentsavenewdocumentstocloud.html)
- [Icône de la barre de titre](./finder/showwindowtitlebaricons.html)
- [Délai au survol du titre](./finder/nstoolbartitleviewrolloverdelay.html)
- [Taille des icônes de la barre latérale](./finder/nstableviewdefaultsizemode.html)

### Bureau

- [Laisser les dossiers en haut](./desktop/_fxsortfoldersfirstondesktop.html)
- [Toutes les icônes](./desktop/createdesktop.html)
- [Disques](./desktop/showharddrivesondesktop.html)
- [Disques externes](./desktop/showexternalharddrivesondesktop.html)
- [Supports amovibles](./desktop/showremovablemediaondesktop.html)
- [Serveurs connectés](./desktop/showmountedserversondesktop.html)

### Barre des menus

- [Faire clignoter les séparateurs de l&#x27;horloge](./menubar/flashdateseparators.html)
- [Format de date et heure](./menubar/dateformat.html)

### Mission Control

- [Réorganiser automatiquement](./mission-control/mru-spaces.html)

### Assistant d&#x27;évaluation

- [Collecte automatique](./feedback-assistant/autogather.html)

### Xcode

- [Ajouter des suffixes dans les Counterparts](./xcode/ideadditionalcounterpartsuffixes.html)
- [Afficher la durée de build](./xcode/showbuildoperationduration.html)

### Simulateur

- [Emplacement des screenshots](./simulator/screenshotsavelocation.html)

### TextEdit

- [Définir le format de document par défaut](./textedit/richtext.html)

### Time Machine

- [Eviter les nouveaux disques](./timemachine/donotoffernewdisksforbackup.html)

### Moniteur d&#x27;activité

- [Modifier la fréquence](./activity-monitor/updateperiod.html)
- [Icône du Dock](./activity-monitor/icontype.html)

### Divers

- [Position du menu d&#x27;Aide](./misc/devmode.html)
- [Activer le spring loading dans le Dock](./misc/enable-spring-load-actions-on-all-items.html)
- [Afficher les notifications de Musique](./misc/userwantsplaybacknotifications.html)
- [Comportement touche maintenue enfoncée](./misc/applepressandholdenabled.html)
- [Focus du Terminal au survol](./misc/focusfollowsmouse.html)

## 🤔 Comment ajouter une commande ?

Mettez à jour [ce fichier](https://github.com/yannbertrand/macos-defaults/blob/main/defaults.yml) que j'utilise pour [construire plusieurs sites](https://github.com/yannbertrand/macos-defaults/#readme) équivalents.

## ❤️ J'adore ce site, comment faire le même ?

Merci ! Il a été construit grâce à [VuePress](https://vuepress.vuejs.org/). Jetez un coup d'oeil à [mon avis](https://github.com/yannbertrand/macos-defaults/tree/main/build#readme) si vous souhaitez utiliser la même techno.

<a href="https://www.netlify.com">
  <img src="netlify.svg" alt="Déployé par Netlify" />
</a>
