// 🔴 غير الرقم لـ v9 (رقم جديد تماماً)
const CACHE_NAME = 'hse-dashboard-v9';

const ASSETS_TO_CACHE = [
  // لاحظ: شيلنا index.html من هنا عشان نتحكم فيه يدوياً تحت
  '/login.html',
  '/system.html',
  '/style.css',
  '/script.js',
  '/TURNKEY.png',
  '/TURNKEY3.png',
  '/manifest.json',
  'https://d3js.org/d3.v7.min.js'
];

// 1. التثبيت (Install)
self.addEventListener('install', (event) => {
  self.skipWaiting(); // تفعيل فوري بدون انتظار
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. التفعيل (Activate) - مسح القديم
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // السيطرة الفورية على الصفحات المفتوحة
  event.waitUntil(
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
  );
});

// 3. جلب الملفات (Fetch) - استراتيجية الشبكة أولاً لصفحة البداية
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // لو الملف هو الصفحة الرئيسية HTML
  if (event.request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return response; // رجع النسخة الجديدة من النت علطول
        })
        .catch(() => {
          // لو مفيش نت، دور في الكاش
          return caches.match(event.request);
        })
    );
  } else {
    // باقي الملفات (صور، سكريبتات) من الكاش للسرعة
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
