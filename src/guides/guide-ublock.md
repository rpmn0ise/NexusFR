---
layout: layouts/guide.njk
title: uBlock Origin — config optimale
description: Filtres recommandés pour bloquer pubs, trackers, popups et malwares. Copier-coller direct.
category: privacy
level: "👶 débutant"
readtime: "3 min"
updated: "04/2026"
permalink: /guides/guide-ublock/index.html
---

<div class="notice notice-info">
  <span>ℹ️</span>
  <span>uBlock Origin fonctionne sur Firefox, Chrome et Edge. Installe-le depuis le store officiel de ton navigateur.</span>
</div>

## Installation

- **Firefox** : [addons.mozilla.org](https://addons.mozilla.org/fr/firefox/addon/ublock-origin/)
- **Chrome / Edge** : [Chrome Web Store](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)

> ⚠️ **Ne pas installer "uBlock"** — c'est une extension différente et non fiable. Le bon s'appelle exactement **uBlock Origin**.

---

## Filtres recommandés

Ouvre uBlock Origin → ⚙️ Paramètres → **Filtres** → coche les listes suivantes :

**Activés par défaut (garder)**
- uBlock filters
- EasyList
- EasyPrivacy
- Peter Lowe's Ad and tracking server list

**À activer en plus**
- ✅ **EasyList Cookie** — supprime les bannières cookies
- ✅ **Fanboy's Annoyances** — popups, widgets sociaux
- ✅ **uBlock filters – Annoyances**
- ✅ **Online Malicious URL Blocklist**

---

## Mode avancé (optionnel)

Active le **mode avancé** dans les paramètres pour bloquer les requêtes tierces à la volée.

Utile pour les sites de streaming avec pubs agressives — tu peux bloquer les domaines publicitaires un par un.

---

## Vérifier que ça fonctionne

Rends-toi sur [d3ward.github.io/toolz/adblock](https://d3ward.github.io/toolz/adblock/) — vise **90%+**.

---

## En cas de site cassé

Clique sur l'icône uBlock → bouton **pause** pour désactiver temporairement sur ce site uniquement.

Si le site est souvent cassé, signale-le sur le [forum uBlock](https://github.com/uBlockOrigin/uBlock-issues/issues) pour correction de filtre.
