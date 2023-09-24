---
title: Liste de defaults macOS
titleTemplate: false
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

**Source : [Real-World-Systems](http://www.real-world-systems.com/docs/defaults.1.md)**

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

- [Position](./dock/orientation.md)
- [Taille des icônes](./dock/tilesize.md)
- [Caché automatiquement](./dock/autohide.md)
- [Durée de l&#x27;animation d&#x27;affichage](./dock/autohide-time-modifier.md)
- [Délai avant affichage](./dock/autohide-delay.md)
- [Afficher les Apps récentes](./dock/show-recents.md)
- [Animation de minimisation](./dock/mineffect.md)
- [Seulement les applications actives](./dock/static-only.md)

### Capture d&#x27;écran

- [Enlever l&#x27;ombre](./screenshots/disable-shadow.md)
- [Inclure la date](./screenshots/include-date.md)
- [Emplacement](./screenshots/location.md)
- [Afficher la vignette](./screenshots/show-thumbnail.md)
- [Choisir le format de la capture](./screenshots/type.md)

### Safari

- [Afficher l&#x27;URL complète](./safari/showfullurlinsmartsearchfield.md)

### Finder

- [Quitter](./finder/quitmenuitem.md)
- [Afficher les extensions](./finder/appleshowallextensions.md)
- [Afficher les fichiers cachés](./finder/appleshowallfiles.md)
- [Barre du chemin d&#x27;accès](./finder/showpathbar.md)
- [Style de présentation par défaut](./finder/fxpreferredviewstyle.md)
- [Laisser les dossiers en haut](./finder/_fxsortfoldersfirst.md)
- [Portée des recherches](./finder/fxdefaultsearchscope.md)
- [Vider la corbeille automatiquement](./finder/fxremoveoldtrashitems.md)
- [Alerte au changement d&#x27;extension](./finder/fxenableextensionchangewarning.md)
- [Sauvegarder sur le disque ou dans iCloud par défaut](./finder/nsdocumentsavenewdocumentstocloud.md)
- [Icône de la barre de titre](./finder/showwindowtitlebaricons.md)
- [Délai au survol du titre](./finder/nstoolbartitleviewrolloverdelay.md)
- [Taille des icônes de la barre latérale](./finder/nstableviewdefaultsizemode.md)

### Bureau

- [Laisser les dossiers en haut](./desktop/_fxsortfoldersfirstondesktop.md)
- [Toutes les icônes](./desktop/createdesktop.md)
- [Disques](./desktop/showharddrivesondesktop.md)
- [Disques externes](./desktop/showexternalharddrivesondesktop.md)
- [Supports amovibles](./desktop/showremovablemediaondesktop.md)
- [Serveurs connectés](./desktop/showmountedserversondesktop.md)

### Barre des menus

- [Faire clignoter les séparateurs de l&#x27;horloge](./menubar/flashdateseparators.md)
- [Format de date et heure](./menubar/dateformat.md)

### Mission Control

- [Réorganiser automatiquement](./mission-control/mru-spaces.md)

### Assistant d&#x27;évaluation

- [Collecte automatique](./feedback-assistant/autogather.md)

### Xcode

- [Ajouter des suffixes dans les Counterparts](./xcode/ideadditionalcounterpartsuffixes.md)
- [Afficher la durée de build](./xcode/showbuildoperationduration.md)

### Simulateur

- [Emplacement des screenshots](./simulator/screenshotsavelocation.md)

### TextEdit

- [Définir le format de document par défaut](./textedit/richtext.md)

### Time Machine

- [Eviter les nouveaux disques](./timemachine/donotoffernewdisksforbackup.md)

### Moniteur d&#x27;activité

- [Modifier la fréquence](./activity-monitor/updateperiod.md)
- [Icône du Dock](./activity-monitor/icontype.md)

### Divers

- [Position du menu d&#x27;Aide](./misc/devmode.md)
- [Activer le spring loading dans le Dock](./misc/enable-spring-load-actions-on-all-items.md)
- [Afficher les notifications de Musique](./misc/userwantsplaybacknotifications.md)
- [Comportement touche maintenue enfoncée](./misc/applepressandholdenabled.md)
- [Focus du Terminal au survol](./misc/focusfollowsmouse.md)

## 🤔 Comment ajouter une commande ?

Mettez à jour [ce fichier](https://github.com/yannbertrand/macos-defaults/blob/main/defaults.yml) que j'utilise pour [construire plusieurs sites](https://github.com/yannbertrand/macos-defaults/#readme) équivalents.

## ❤️ J'adore ce site, comment faire le même ?

Merci ! Il a été construit grâce à [VuePress](https://vuepress.vuejs.org/). Jetez un coup d'oeil à [mon avis](https://github.com/yannbertrand/macos-defaults/tree/main/build#readme) si vous souhaitez utiliser la même techno.

<a href="https://www.netlify.com">
  <img src="/netlify.svg" alt="Déployé par Netlify" />
</a>
