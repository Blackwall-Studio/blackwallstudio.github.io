/* Blackwall Studio — Service Worker v1 */
const CACHE = 'bw-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/404.html',
  '/favicon.png',
  '/blog-posts.json',
  '/sitemap.xml',
  '/robots.txt'
];

// Install: pre-cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => {
      return cache.addAll(ASSETS).catch((err) => {
        // Individual asset failures are non-fatal — the fetch handler will
        // network-fallback for anything not in cache.
        console.warn('[SW] Pre-cache partial failure:', err);
      });
    })
  );
  // Activate immediately without waiting for all tabs to close
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      );
    })
  );
  // Take control of all open tabs immediately
  self.clients.claim();
});

// Fetch: cache-first, network-fallback, update cache in background
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip non-http(s) requests (e.g. chrome-extension://)
  if (!event.request.url.startsWith('http')) return;

  // Let through API calls (GitHub API, Google Fonts, CDN scripts) without caching
  const url = new URL(event.request.url);
  if (
    url.hostname === 'api.github.com' ||
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com' ||
    url.hostname === 'cdn.jsdelivr.net'
  ) {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      // Return cached response immediately, then update cache in background
      const fetchPromise = fetch(event.request)
        .then((response) => {
          // Only cache valid responses
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached); // If network fails, fall back to cache

      return cached || fetchPromise;
    })
  );
});
