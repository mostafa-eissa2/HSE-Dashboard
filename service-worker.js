const CACHE_NAME = 'hse-dashboard-v7'; // غير الرقم لـ v6 عشان نضمن

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css?v=6.0', // غير الأرقام هنا كمان
  '/script.js?v=6.0',
  '/login.html',
  '/system.html',
  '/TURNKEY.png',
  '/TURNKEY3.png',
  '/manifest.json',
  'https://d3js.org/d3.v7.min.js' 
];

// 1. استقبال رسالة التحديث الإجباري (الجزء الجديد)
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 2. Install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 3. Activate (تنظيف القديم فوراً)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(), // السيطرة فوراً
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});

// 4. Fetch (كما هو)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
