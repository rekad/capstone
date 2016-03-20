// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
importScripts('serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
    //allows multiple versions of our app to run at once
    if (self.skipWaiting) self.skipWaiting();

    // We pass a promise to event.waitUntil to signal how 
    // long install takes, and if it failed
    event.waitUntil(
        // We open a cache…
        caches.open('simple-sw-v1').then(function(cache) {
            // And add resources to it
            return cache.addAll([
                './',
                './style.css',
                './main.js',
                './bootstrap/dist/css/bootstrap.css',
                './lodash/index.js',
                'logging.js',
                './angular-animate/angular-animate.js',
                './angular-ui-bootstrap/ui-bootstrap.js',
                './angular-ui-bootstrap/ui-bootstrap-tpls.js',
                './socket.io-client/socket.io.js',
                '/angular/angular.js',
                '/angular-ui-router/release/angular-ui-router.js',
                './js/about/about.html',
                './js/common/directives/navbar/navbar.html',
                './js/home/home.html',
                './js/common/directives/rando-greeting/rando-greeting.html',
                './js/common/directives/fullstack-logo/fullstack-logo.html',
                new Request('https://jlau-bucket-1.s3.amazonaws.com/uploads/topic/image/42/fullstack.png', {mode: 'no-cors'}),
                new Request('https://pbs.twimg.com/media/BsSseANCYAEOhLw.jpg:large', {mode: 'no-cors'}),
                new Request('https://pbs.twimg.com/media/B-Uj9COIIAIFAh0.jpg:large', {mode: 'no-cors'}),
                new Request('https://pbs.twimg.com/media/B79-X7oCMAAkw7y.jpg', {mode: 'no-cors'}),
                'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'

            ]);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('activated and claiming clients');
    event.waitUntil(self.clients.claim());
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
    // if (/\.jpg$/.test(event.request.url)) {
    //     event.respondWith(fetch('trollface.svg'));
    //     return;
    // }
    // var pageURL = new URL('./', location);

    // if (event.request.url === pageURL.href) {
    //     event.respondWith(new Response("Hello world!"))
    //     return;
    // }
    // Calling event.respondWith means we're in charge
    // of providing the response. We pass in a promise
    // that resolves with a response object  
    event.respondWith(
        // First we look for something in the caches that
        // matches the request
        caches.match(event.request)
        .then(function(response) {
            console.log('event.request: ', event.request);
            // If we get something, we return it, otherwise
            // it's null, and we'll pass the request to
            // fetch, which will use the network.
            console.log('is there a response', response);
            return response;
            // || fetch(event.request);
        })
    );
});