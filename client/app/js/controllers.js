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
        }, {
            type: 'image',
            src: 'img/dummy-slide-4.jpg',
            captionUrl: 'cap big 4'
        }, {
            type: 'image',
            src: 'img/dummy-slide-2.jpg',
            captionUrl: 'cap big'
        }];

    })
    .controller('TelefonlarCtrl', function ($scope) {
        $scope.telefonlar = [{
            src: 'img/telefonlar/1.jpg',
            description:'Şık Tasarım',
            brand:'Yesky'
        }, {
            src: 'img/telefonlar/2.jpg',
            description:'İnce ve Eğimli',
            brand: 'Samsung'
        },{
            src: 'img/telefonlar/3.jpg',
            description:'Bu Bir Öncekinin Aynısı',
            brand: 'Samsung'
        },{
            src: 'img/telefonlar/4.jpg',
            description:'Esnek ve Zarif',
            brand:'LastiX'
        },{
            src: 'img/telefonlar/5.jpg',
            description: 'Hayatı Renkli Yaşayanlar İçin...',
            brand:'Nokia'
        },{
            src: 'img/telefonlar/6.jpg',
            description:'Xperia',
            brand:'Sony'
        },{
            src: 'img/telefonlar/7.jpg',
            description: 'Samsung',
            brand:'Samsung'
        },{
            src: 'img/telefonlar/8.jpg',
            description: 'İsimsiz',
            brand:'İsimsiz'
            
        },{
            src: 'img/telefonlar/9.jpg',
            description: 'Sony',
            brand:'Sony'
        },{
            src: 'img/telefonlar/10.jpg',
            description: 'Samsung',
            brand:'Sony'
        },{
            src: 'img/telefonlar/11.jpg',
            description: 'Motorola',
            brand:'Motorola'
        },{
            src: 'img/telefonlar/12.jpg',
            description: 'Sony',
            brand:'Sony'
        },{
            src: 'img/telefonlar/13.jpg',
            description: 'Samsung',
            brand:'Samsung'
        },{
            src: 'img/telefonlar/14.jpg',
            description: 'LG',
            brand:'LG'
        },{
            src: 'img/telefonlar/15.jpg',
            description: 'Motorola',
            brand:'Motorola'
        },{
            src: 'img/telefonlar/16.jpg',
            description: 'Nokia',
            brand:'Nokia'
        },{
            src: 'img/telefonlar/17.jpg',
            description: 'Nokia',
            brand:'Nokia'
        },{
            src: 'img/telefonlar/18.jpg',
            description: 'Samsung',
            brand:'Samsung'
        },{
            src: 'img/telefonlar/19.jpg',
            description: 'Samsung',
            brand:'Samsung'
        },{
            src: 'img/telefonlar/20.jpg',
            description: 'Samsung',
            brand:'Samsung'
        },{
            src: 'img/telefonlar/21.jpg',
            description: 'Sony',
            brand:'Sony'
        }]
    })