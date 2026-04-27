// NEXUS.FR — Search
const searchIndex = [
  // Streaming - Films
  { name: "Cineb.net", usage: "Regarder films et séries en streaming", url: "https://cineb.net", cat: "streaming", tags: ["fr","fast","beginner"] },
  { name: "Wiflix", usage: "Films et séries VF/VOSTFR", url: "https://wiflix.date", cat: "streaming", tags: ["fr","fast"] },
  { name: "HDEncode", usage: "Encodages haute qualité à télécharger", url: "https://hdencode.org", cat: "streaming", tags: ["advanced"] },
  // Streaming - Anime
  { name: "Neko-sama", usage: "Anime en VF et VOSTFR", url: "https://www.neko-sama.fr", cat: "streaming", tags: ["fr","fast","beginner"] },
  { name: "Anime-Sama", usage: "Anime VOSTFR simulcast", url: "https://anime-sama.fr", cat: "streaming", tags: ["fr","fast"] },
  // Streaming - Music
  { name: "SpotiFlyer", usage: "Télécharger de la musique depuis Spotify", url: "https://github.com/Shabinder/SpotiFlyer", cat: "streaming", tags: ["advanced","safe"] },
  // Download - Torrents
  { name: "1337x", usage: "Trouver des torrents fiables", url: "https://1337x.to", cat: "download", tags: ["fast","advanced"] },
  { name: "RARBG Mirror", usage: "Archive des anciens torrents RARBG", url: "https://rarbgmirror.com", cat: "download", tags: ["advanced"] },
  { name: "Nyaa.si", usage: "Torrents anime exclusivement", url: "https://nyaa.si", cat: "download", tags: ["advanced","fast"] },
  // Download - DDL
  { name: "Real-Debrid", usage: "Débrideur premium pour DDL rapide", url: "https://real-debrid.com", cat: "download", tags: ["fast","advanced"] },
  { name: "Bunkr", usage: "Hébergement et partage de fichiers", url: "https://bunkr.site", cat: "download", tags: ["safe","fast"] },
  // Tools
  { name: "yt-dlp", usage: "Télécharger vidéos/audio depuis n'importe quel site", url: "https://github.com/yt-dlp/yt-dlp", cat: "outils", tags: ["advanced","safe","fast"] },
  { name: "FFmpeg", usage: "Conversion et traitement vidéo/audio", url: "https://ffmpeg.org", cat: "outils", tags: ["advanced"] },
  { name: "Mullvad VPN", usage: "VPN sans logs avec paiement anonyme", url: "https://mullvad.net", cat: "outils", tags: ["safe","advanced"] },
  { name: "Bitwarden", usage: "Gestionnaire de mots de passe open source", url: "https://bitwarden.com", cat: "outils", tags: ["safe","beginner"] },
  { name: "uBlock Origin", usage: "Bloqueur de publicités navigateur", url: "https://github.com/gorhill/uBlock", cat: "outils", tags: ["safe","beginner","fast"] },
  { name: "Gofile", usage: "Upload et partage de fichiers volumineux", url: "https://gofile.io", cat: "outils", tags: ["fast","beginner"] },
  // Guides
  { name: "Guide: Débuter avec les torrents", usage: "Client, VPN, sites fiables", url: (window.BASE_PATH || "") + "/guides/guide-torrent-debutant/", cat: "guide", tags: ["beginner"] },
  { name: "Guide: yt-dlp en pratique", usage: "Télécharger vidéos et playlists", url: (window.BASE_PATH || "") + "/guides/guide-yt-dlp/", cat: "guide", tags: ["advanced"] },
  { name: "Guide: uBlock Origin config optimale", usage: "Bloquer pubs, trackers et popups", url: (window.BASE_PATH || "") + "/guides/guide-ublock/", cat: "guide", tags: ["beginner"] },
  { name: "Guide: Configurer Real-Debrid", usage: "DDL à vitesse maximale", url: (window.BASE_PATH || "") + "/guides/guide-real-debrid/", cat: "guide", tags: ["advanced"] },
  { name: "Guide: Télécharger musique depuis Spotify", usage: "SpotiFlyer, Deemix, alternatives", url: (window.BASE_PATH || "") + "/guides/guide-telecharger-musique/", cat: "guide", tags: ["advanced"] },
];

const searchToggle = document.querySelector('.search-toggle');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchToggle.addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) {
    setTimeout(() => searchInput.focus(), 50);
  } else {
    searchResults.classList.remove('has-results');
    searchInput.value = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchBar.classList.remove('open');
    searchResults.classList.remove('has-results');
    searchInput.value = '';
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchBar.classList.add('open');
    setTimeout(() => searchInput.focus(), 50);
  }
});

function search(query) {
  if (!query || query.length < 2) {
    searchResults.classList.remove('has-results');
    searchResults.innerHTML = '';
    return;
  }
  const q = query.toLowerCase().trim();
  const results = searchIndex.filter(item =>
    item.name.toLowerCase().includes(q) ||
    item.usage.toLowerCase().includes(q) ||
    item.cat.toLowerCase().includes(q) ||
    item.tags.some(t => t.includes(q))
  ).slice(0, 6);

  if (results.length === 0) {
    searchResults.classList.remove('has-results');
    searchResults.innerHTML = '';
    return;
  }

  searchResults.innerHTML = results.map(r => `
    <a class="search-result-item" href="${r.url}" ${r.cat !== 'guide' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
      <div>
        <div class="search-result-name">${r.name}</div>
        <div class="search-result-usage">${r.usage}</div>
      </div>
      <span class="search-result-cat">${r.cat}</span>
    </a>
  `).join('');
  searchResults.classList.add('has-results');
}

searchInput.addEventListener('input', (e) => search(e.target.value));
