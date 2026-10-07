// Bridging Terms service worker.
// v1 is online-only: this worker caches nothing and lets every request go to the network.
// Offline mode (caching the app shell) is on the TODO list for a later version.
const VERSION = 'bt-v1.0.0';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
