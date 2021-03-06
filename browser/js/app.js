'use strict';
window.app = angular.module('borderLess', ['ui.router', 'ui.bootstrap', 'completedFormsFilters', 'chart.js', 'as.sortable']);

app.config(function($urlRouterProvider, $locationProvider) {

    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);

    // If we go to a URL that ui-router doesn't have registered, go to the this url.
    $urlRouterProvider.otherwise('/sync');

    // starting page are the forms
    $urlRouterProvider.when('/', '/sync');

});

app.run(function($window, $rootScope, DatabaseFactory) {

    $rootScope.online = navigator.onLine;

    $window.addEventListener("offline", function() {
        $rootScope.$apply(function() {
            $rootScope.online = false;
        });
    }, false);

    $window.addEventListener("online", function() {
        $rootScope.$apply(function() {
            $rootScope.online = true;
        });
    }, false);

});