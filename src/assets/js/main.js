// NEXUS.FR — Main JS

// Active nav link
const path = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') !== '/' && path.startsWith(link.getAttribute('href').replace('/index.html',''))) {
    link.classList.add('active');
  }
});

// Tag filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.resource-card').forEach(card => {
      if (filter === 'all') {
        card.style.display = '';
      } else {
        const tags = (card.dataset.tags || '').split(' ');
        card.style.display = tags.includes(filter) ? '' : 'none';
      }
    });
  });
});
