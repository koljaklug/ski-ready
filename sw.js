const CACHE='ski-ready-v5';const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg','./exercise-guide-v2.png','./sequence-1.png','./sequence-2.png','./sequence-3.png','./sequence-4.png','./sequence-calf.png','./lateral-band-walk-loop.mp4'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
