'use strict';
window.app = angular.module('TheKraken', ['ui.router', 'ui.bootstrap', 'completedFormsFilters', 'chart.js']);

app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);

    // If we go to a URL that ui-router doesn't have registered, go to the this url.
    $urlRouterProvider.otherwise('/completed-forms/list/null');

    // starting page are the forms
    $urlRouterProvider.when('/', '/completed-forms/list/null');
});

