var cacheName='awerenessalertPWA';
var filesToCache=[
                  '/',
                  '/index.html'
                ];

self.addEventListener('install', function(inst) {
  inst.waitUntil(
    caches.open(cacheName).then(function(cache){
       return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(f) {
  f.respondWith(
    caches.match(f.request).then(function(response) {
      return response || fetch(f.request);
    })
  );
});