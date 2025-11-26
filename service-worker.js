// غير الرقم هنا أيضاً
const CACHE_NAME = 'hse-dashboard-v-nuclear-4.0';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/login.html',
  '/system.html',
  '/style.css?v=9', // شيلنا ?v=... من هنا عشان ميحصلش لخبطة، المتصفح هيجيب الجديد كده كده
  '/script.js',
  '/TURNKEY.png',
  '/TURNKEY3.png',
  '/manifest.json',
  'https://d3js.org/d3.v7.min.js'
];

// ... (باقي الكود كما هو: install, activate, fetch) ...
// تأكد إن self.skipWaiting() موجودة في الـ install
self.addEventListener('install', (event) => {
  self.skipWaiting(); // مهم جداً
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // السيطرة الفورية
  // كود مسح الكاش القديم...
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((key) => {
        if (![CACHE_NAME].includes(key)) {
          return caches.delete(key);
        }
      })
    ))
  );
});

// استراتيجية Network First لملف HTML (ضروري جداً)
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => response || fetch(event.request))
    );
  }
});
