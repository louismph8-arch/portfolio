// ═══════════════════════════════════════════════
//  Testarossa Service Worker · v1.0.0
//  Strategy: Cache-first for page, network-first
//  for navigation, skip CDN & API requests.
// ═══════════════════════════════════════════════
const CACHE = 'testarossa-v1';
const SHELL = [
  '/portfolio/',
  '/portfolio/index.html',
  '/portfolio/manifest.json',
  '/portfolio/icons/icon.svg'
];

// ── Install: pre-cache app shell ──
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: evict old caches ──
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: tiered strategy ──
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip non-GET, chrome-extension, and browser internals
  if (e.request.method !== 'GET') return;
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return;

  // External APIs (GitHub, Lanyard, contributions): network-only, no cache
  const isAPI = url.hostname.includes('api.github.com')
    || url.hostname.includes('api.lanyard.rest')
    || url.hostname.includes('github-contributions-api')
    || url.hostname.includes('fonts.googleapis.com')
    || url.hostname.includes('fonts.gstatic.com')
    || url.hostname.includes('cdn.jsdelivr.net')
    || url.hostname.includes('cdnjs.cloudflare.com');

  if (isAPI) return; // let browser handle CDN / API natively

  // Navigation requests: network-first, fallback to cached shell
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match('/portfolio/index.html'))
    );
    return;
  }

  // Same-origin assets: cache-first, update in background
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        const network = fetch(e.request).then(res => {
          if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          return res;
        });
        return cached || network;
      })
    );
  }
});
