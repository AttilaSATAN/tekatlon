/*global angular:true */
var lupusshow = angular.module('lupusshow', ['ngAnimate', 'lupusshow.filters',
    'lupusshow.services', 'lupusshow.directives', 'lupusshow.controllers',
    'ngSanitize', 'google-maps', 'ui.router', 'lupus', 'ngTouch'
]);
lupusshow.run(
    ['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {
            "use strict";
            // It's very handy to add references to $state and $stateParams to the $rootScope
            // so that you can access them from any scope within your applications.For example,
            // <li ui-sref-active="active }"> will set the <li> // to active whenever
            // 'contacts.list' or one of its decendents is active.
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.links = [{
                name: 'Ana Sayfa',
                sref: 'home'
            }, {
                name: 'Biz',
                sref: 'home'
            }, {
                name: 'İletişim',
                sref: 'home'
<<<<<<< HEAD
            }, {
                name: 'Telefonlar',
                sref: 'telefonlar'
=======
>>>>>>> ef81955da3864ad7c61e9a09723c484008d3eb60
            }];
            $rootScope.goster1 = false;
            $rootScope.goster2 = false;
            $rootScope.goster3 = false;
            $rootScope.goster4 = false;
            $rootScope.goster5 = false;
            $rootScope.goster6 = false;
            $rootScope.goster7 = false;
            $rootScope.hKapat = function () {
                console.log('hKapat')
                $rootScope.goster1 = false;
                $rootScope.goster2 = false;
                $rootScope.goster3 = false;
                $rootScope.goster4 = false;
                $rootScope.goster5 = false;
                $rootScope.goster6 = false;
                $rootScope.goster7 = false;
            }
        }
    ]);