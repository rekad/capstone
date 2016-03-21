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
                './logging.js',
                './style.css',
                './main.js',
                './bootstrap/dist/css/bootstrap.min.css',
                './font-awesome/css/font-awesome.min.css',
                new Request('https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css', {mode: 'no-cors'}),
                './admin-lte/dist/css/AdminLTE.min.css',
                './admin-lte/dist/css/skins/skin-blue.min.css',
                new Request('https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js', {mode: 'no-cors'}),
                new Request('https://oss.maxcdn.com/respond/1.4.2/respond.min.js', {mode: 'no-cors'}),
                './lodash/index.js',
                './angular/angular.js',
                './angular-ui-router/release/angular-ui-router.js',
                './angular-animate/angular-animate.js',
                './angular-ui-bootstrap/ui-bootstrap.js',
                './angular-ui-bootstrap/ui-bootstrap-tpls.js',
                './socket.io-client/socket.io.js',
                './font-awesome/fonts/fontawesome-webfont.ttf?v=4.5.0',
                './font-awesome/fonts/fontawesome-webfont.woff2?v=4.5.0',
                './admin-lte/plugins/jQuery/jQuery-2.1.4.min.js',
                './admin-lte/bootstrap/js/bootstrap.min.js',
                './admin-lte/dist/js/app.min.js',
                './admin-lte/dist/img/avatar3.png',
                new Request('https://fonts.gstatic.com/s/sourcesanspro/v9/toadOcfmlt9b38dHJxOBGCP2LEk6lMzYsRqr3dHFImA.woff2'),
                new Request('https://fonts.gstatic.com/s/sourcesanspro/v9/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2'),
                new Request('https://fonts.gstatic.com/s/sourcesanspro/v9/toadOcfmlt9b38dHJxOBGJkF8H8ye47wsfpWywda8og.woff2'),
                './pouchdb/dist/pouchdb.js',
                new Request('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic'),
                './js/forms/forms-view.html',
                './js/forms/forms-list-view.html',
                './js/forms/sync.view.html'
                               
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