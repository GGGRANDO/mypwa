const staticPwaADS = "cache_web_app_ads_upf_v1";
const assets = [
  "/",
  "/index.html",
  "/formulario.html",
  "/outros.html",
  "/fotos.html",
  "/manifest.json",
  "/panda.png",
  "/sea_turtle.jpg",
  "/elefante.jpg",
  "/style.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
  "icons/icon-512x512.png",
  "icons/icon-384x384.png",
  "icons/icon-256x256.png",
  "icons/icon-192x192.png",
  "icons/icon-152x152.png",
  "icons/icon-144x144.png",
  "icons/icon-96x96.png",
  "icons/icon-72x72.png",
  "icons/icon-48x48.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(staticPwaADS).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});
