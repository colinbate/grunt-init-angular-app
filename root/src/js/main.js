/*globals require: false*/
(function () {
    'use strict';
    require.config({
        paths: {
            'lib'             : '../lib',
            'angular'         : '../lib/angular'
        },
        shim: {
            'angular'           : { exports: 'angular' },
            'lib/angular-route' : ['angular']
        },
        waitSeconds: 15
    });

    require(['bootstrap', 'vendor'], function (app) {
        app.initialize();
    });
}());