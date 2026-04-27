---
layout: layouts/guide.njk
title: yt-dlp en pratique
description: Télécharger n'importe quelle vidéo, playlist ou audio depuis YouTube, Twitch, et 1000+ sites.
category: cli
level: "🧠 avancé"
readtime: "8 min"
updated: "04/2026"
permalink: /guides/guide-yt-dlp/index.html
---

## Installation

**Windows**
```
winget install yt-dlp
```
ou télécharge `yt-dlp.exe` depuis [GitHub Releases](https://github.com/yt-dlp/yt-dlp/releases)

**Linux / macOS**
```
pip install yt-dlp
```
ou via ton gestionnaire de paquets (`pacman -S yt-dlp`, `brew install yt-dlp`)

---

## Commandes essentielles

**Télécharger une vidéo (meilleure qualité)**
```
yt-dlp URL
```

**Télécharger uniquement l'audio (MP3)**
```
yt-dlp -x --audio-format mp3 URL
```

**Télécharger une playlist entière**
```
yt-dlp -i URL_PLAYLIST
```

**Choisir la qualité manuellement**
```
yt-dlp -f "bestvideo[height<=1080]+bestaudio" URL
```

**Télécharger avec les sous-titres**
```
yt-dlp --write-subs --sub-lang fr URL
```

---

## Organisation des fichiers

**Nommer automatiquement les fichiers**
```
yt-dlp -o "%(title)s.%(ext)s" URL
```

**Organiser par chaîne/auteur**
```
yt-dlp -o "%(uploader)s/%(title)s.%(ext)s" URL
```

---

## Cas d'usage fréquents

**Spotify / SoundCloud → MP3**
Yt-dlp ne supporte pas Spotify directement. Utilise [SpotiFlyer](https://github.com/Shabinder/SpotiFlyer) ou Deemix.

**Twitch VOD**
```
yt-dlp https://www.twitch.tv/videos/ID
```

**Twitter/X vidéo**
```
yt-dlp https://twitter.com/user/status/ID
```

---

## Mise à jour

```
yt-dlp -U
```

> yt-dlp est mis à jour fréquemment — une erreur sur un site se règle souvent par une simple mise à jour.
