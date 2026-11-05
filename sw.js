const CACHE='ski-ready-v9';const ASSETS=['./','./index.html','./styles.css','./image-fix.css','./fluid-ios.css','./core-image.css','./app.js','./image-session.js','./manifest.webmanifest','./icon.svg','./exercise-guide-v2.png','./form-band.png','./form-bridge.png','./form-squat.png','./form-split.png','./form-skater.png','./form-calf.png','./form-tib.png','./form-dead.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
