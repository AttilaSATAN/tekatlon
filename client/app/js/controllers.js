/*global angular */
/*jshint devel:true, browser:true */
angular.module('lupusshow.controllers', [])
    .controller('HomeCtrl', function ($scope) {
        "use strict";
        
                
        $scope.diskoBG = {
            type: 'image',
            src: 'http://lorempixel.com/g/1920/595',
            captionUrl: 'cap1'
        };

        $scope.homeSlides = [{
            type: 'image',
            src: 'img/dummy-slide-1.jpg',
            captionUrl: 'cap1'
        },{
            type: 'image',
            src: 'img/dummy-slide-4.jpg',
            captionUrl: 'cap big 4'
        },{
            type: 'image',
            src: 'img/dummy-slide-2.jpg',
            captionUrl: 'cap big'
        }];
    });