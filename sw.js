// Service worker mínimo de Sinergia Anisacate: no guarda nada en caché (todo se pide siempre a la red).
// Solo existe para que el navegador permita instalar la app en el celular.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
