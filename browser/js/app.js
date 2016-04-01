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

    // var db = DatabaseFactory.getLocalDb();
    // $rootScope.areThereFormTemplates;
    // $rootScope.areThereCompletedForms;
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


    // db.query(function(doc) {
    //     if (doc.type === 'formTemplate') emit(doc);
    //   })
    //   .then(function(results) {
    //     return results.rows.map(function(row) {
    //       return row.key;
    //     })
    //   })
    // .then(function (allTemplates) {
    //     console.log('there are templates', allTemplates.length > 0);
    //     $rootScope.areThereFormTemplates = allTemplates.length > 0;
    //     return db.query(function(doc) {
    //             if (doc.type === 'completedForm' && doc.formTemplateId) emit(doc);
    //         })
    //         .then(function(results) {
    //             return results.rows.map(function(row) {
    //                 return row.key;
    //             });
    //         });
    // })
    // .then(function (completedForms) {
    //     console.log('there are completed forms', completedForms.length > 0);
    //     $rootScope.areThereCompletedForms = completedForms.length > 0;
    // })

});