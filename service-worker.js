const CACHE_NAME = 'hse-online-only-v1';

// 1. التثبيت: لا تقم بتحميل أي ملفات، فقط جهز نفسك
self.addEventListener('install', (event) => {
    self.skipWaiting(); // تفعيل فوري
});

// 2. التفعيل: امسح أي كاش قديم (مهم جداً لتنظيف أجهزة المستخدمين)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        Promise.all([
            self.clients.claim(), // السيطرة على الصفحة
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        // مسح أي كاش موجود فوراً
                        console.log('Deleting cache:', cacheName);
                        return caches.delete(cacheName);
                    })
                );
            })
        ])
    );
});

// 3. الجلب (Fetch): استراتيجية "الشبكة فقط" (Network Only)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                // (اختياري) لو مفيش نت، ممكن نرجع رسالة نصية بسيطة
                return new Response("You are offline. Please check your internet connection.", {
                    headers: { 'Content-Type': 'text/plain' }
                });
            })
    );
});
