angular.module('lupusshow')
    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                "use strict";
                /////////////////////////////
                // Redirects and Otherwise //
                /////////////////////////////
                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                //////////////////////////
                // State Configurations //
                //////////////////////////
                // Use $stateProvider to configure your states.
                console.log("STATES")
                $urlRouterProvider.otherwise('/');
                $stateProvider.state("home", {
                    // Use a url of "/" to set a states as the "index".
                    url: "/",
                    // Example of an inline template string. By default, templates
                    // will populate the ui-view within the parent state's template.
                    // For top level states, like this one, the parent template is
                    // the index.html file. So this template will be inserted into the
                    // ui-view within index.html.
                    views: {
                        'top': {
                            templateUrl: 'partials/home-top.html',
                            controller: 'HomeCtrl'
                        },
                        'bottom': {
                            templateUrl: 'partials/home-bottom.html',
                            controller: 'HomeCtrl'
                        }
                    }
                })
                    .state('egitimler', {
                        url: '/egitimler',
                        views: {
                            'top': {},
                            'bottom': {

                                templateUrl: 'partials/ic-sayfa.html',
                                controller: 'HomeCtrl'
                            },

                        }
                    });
            }
        ]);