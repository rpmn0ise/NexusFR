---
layout: layouts/guide.njk
title: Configurer Real-Debrid
description: Setup complet pour transformer torrents et liens DDL en téléchargements directs à vitesse max.
category: ddl
level: "🧠 avancé"
readtime: "6 min"
updated: "04/2026"
permalink: /guides/guide-real-debrid/index.html
---

## C'est quoi Real-Debrid ?

Real-Debrid est un débrideur premium : tu lui donnes un lien torrent ou DDL, il télécharge à sa place sur ses serveurs, puis tu récupères le fichier à pleine vitesse — sans exposer ton IP.

**Prix** : ~3€/mois. Pas d'abonnement — tu achètes des jours.

---

## Inscription

1. Va sur [real-debrid.com](https://real-debrid.com)
2. Crée un compte (email jetable accepté)
3. Achète des jours via PayPal, CB ou crypto

---

## Utilisation — Torrents

**Méthode 1 — Interface web**
1. Copie le lien magnet ou le fichier `.torrent`
2. Va dans **Torrents** sur le dashboard RD
3. Colle le magnet → RD télécharge pour toi
4. Récupère le lien de téléchargement direct

**Méthode 2 — qBittorrent + plugin**
Installe le plugin [qBittorrent-RD](https://github.com/osnim/qbittorrent-rd) pour automatiser le workflow.

---

## Utilisation — DDL (liens directs)

1. Copie le lien (Uptobox, 1fichier, Rapidgator, etc.)
2. Dans RD → **Liens** → colle → génère le lien débridé
3. Télécharge à vitesse maximale

**Supporte 200+ hôtes** : 1fichier, Uptobox, Rapidgator, Mega, Filefactory...

---

## Intégration avec Stremio / Kodi

Real-Debrid s'intègre avec **Stremio + Torrentio** pour du streaming direct depuis les torrents, sans téléchargement préalable.

1. Installe Stremio
2. Ajoute l'addon Torrentio : [torrentio.strem.fun](https://torrentio.strem.fun)
3. Configure avec ta clé API RD (disponible dans ton profil)

---

## Récupérer sa clé API

Profil → **Mon compte** → **Clé API**

Utile pour les intégrations tierces (Stremio, Radarr, Sonarr, etc.)

---

## Limites à connaître

- Certains torrents très récents ou rares ne sont pas supportés
- La vitesse dépend du seeding initial — RD ne fait pas de miracles sur un torrent mort
- Pas un VPN : ton IP réelle est visible sur le dashboard RD (eux la voient)
