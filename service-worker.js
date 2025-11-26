// 🔴 غير الرقم ده ضروري (مثلاً v8)
const CACHE_NAME = 'hse-dashboard-v9';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/login.html',
  '/system.html',
  '/style.css',
  '/script.js',
  '/TURNKEY.png',
  '/TURNKEY3.png',
  '/manifest.json',
  'https://d3js.org/d3.v7.min.js'
];

// استقبال أمر التحديث الفوري
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', (event) => {
  self.skipWaiting(); // تفعيل فوري
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // السيطرة على الصفحة
  // مسح الكاش القديم
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

// استراتيجية الشبكة أولاً (Network First) لملف HTML
// هذا يضمن أن المستخدم يرى أحدث نسخة دائماً إذا كان متصلاً بالنت
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match(event.request);
        })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
