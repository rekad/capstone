'use strict';
var app = angular.module('TheKraken', ['fsaPreBuilt', 'ui.router', 'ui.bootstrap', 'ngAnimate']);

app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    // $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');

    // starting page are the forms
    $urlRouterProvider.when('/', '/forms');
});

// This app.run is for controlling access to specific states.
app.run(function ($rootScope, AuthService, $state) {

    // The given state requires an authenticated user.
    var destinationStateRequiresAuth = function (state) {
        return state.data && state.data.authenticate;
    };

    // $stateChangeStart is an event fired
    // whenever the process of changing a state begins.
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

        if (!destinationStateRequiresAuth(toState)) {
            // The destination state does not require authentication
            // Short circuit with return.
            return;
        }

        if (AuthService.isAuthenticated()) {
            // The user is authenticated.
            // Short circuit with return.
            return;
        }

        // Cancel navigating to new state.
        event.preventDefault();

        AuthService.getLoggedInUser().then(function (user) {
            // If a user is retrieved, then renavigate to the destination
            // (the second time, AuthService.isAuthenticated() will work)
            // otherwise, if no user is logged in, go to "login" state.
            if (user) {
                $state.go(toState.name, toParams);
            } else {
                $state.go('login');
            }
        });

    });

});


//DELETE ME FOR PRODUCTION!!!! Hopefully a better way of resetting the SW has been implemented
//This is just temporary to reset the SW in a hard way while we are working
app.controller('main', function($scope, $state) {
    $scope.reset = function() {
        console.log('SW is being reset');
        // Let's register our serviceworker
        navigator.serviceWorker.getRegistration('../../').then(function(reg) {
                console.log('Unregistering ServiceWorker');
                return reg && reg.unregister();
            })
            .then(function(reg) {
                console.log('Clearing caches');
                return navigator.serviceWorker.register('/js/clear.js', {
                    scope: './js/'
                });
            })
            .then(function(reg) {
                reg.addEventListener('updatefound', function() {
                    var installing = reg.installing;
                    reg.installing.addEventListener('statechange', function() {
                        if (installing.state == 'installed') {
                            console.log('Done!');
                            reg.unregister();
                            window.document.location.reload(true);
                        }
                    });
                });
            });
    };

});
