"use strict";
var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');

module.exports = function (app) {

    var root = app.getValue('projectRoot');

    var npmPath = path.join(root, './node_modules');
    var publicPath = path.join(root, './public');
    var browserPath = path.join(root, './browser');

    app.use(favicon(app.getValue('faviconPath')));
    app.use(express.static(npmPath));
    app.use(express.static(publicPath));
    app.use(express.static(browserPath));



    app.get('/sw.js', function(req, res, next) {
    	res.sendFile('/sw.js', {root: root });
    });
    app.get('/logging.js', function(req, res, next) {
    	res.sendFile('/logging.js', {root: root });
    });
    app.get('/serviceworker-cache-polyfill.js', function(req, res, next) {
    	res.sendFile('/serviceworker-cache-polyfill.js', {root: root });
    });

};
