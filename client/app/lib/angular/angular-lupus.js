/*global angular:true, document:true,window:true */
/*jshint unused:false */
"use strict";
var lupus = angular.module("lupus", ["lupus.acrophobia", "lupus.danceFloor",
    "lupus.scrollDisplay", "lupus.templates", "lupus.disko",
    "lupus.service"
]);
/**
 * @ngdoc service
 * @name lupus.acrofobia.service
 * @restrict EA
 *
 * @description
 * Sayfanın scrollTop değerini ihtiva eden obje döndürür.
 */
angular.module("lupus.acrophobia", [])
    .factory("$acrophobia", function () {
        var doc = document.documentElement,
            acrophobia = {};
        acrophobia.top = 0;

        function setPostion() {
            acrophobia.top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop ||
                0);
        }
        setPostion();
        acrophobia.update = setPostion;
        return acrophobia;
    });
angular.module('lupus.service', [])
    .factory('windowSize', function () {
        var w = window,
            d = document,
            de = d.documentElement,
            b = d.getElementsByTagName('body')[0],
            windowSize = {};

        function calcWindowSize() {
            windowSize.width = w.innerWidth || de.clientWidth || b.clientWidth;
            windowSize.height = w.innerHeight || de.clientHeight || b.clientHeight;
        }
        angular.element(window)
            .on('resize', function () {
                calcWindowSize();
            });

        calcWindowSize();

        return function (referance) {
            referance = windowSize;
        };
    });
angular.module('lupus.scrollDisplay', ['lupus.acrophobia'])
    .directive('scrollDisplay', ['$acrophobia',
        function ($acrophobia) {
            // Runs during compile
            return {
                // name: '',
                // priority: 1,
                // terminal: true,
                // scope: {}, // {} = isolate, true = child, false/undefined = no change
                // controller: function($scope, $element, $attrs, $transclude) {},
                // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
                restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
                // template: ,
                templateUrl: '',
                replace: true,
                transclude: true,
                // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
                link: function ($scope, iElm, iAttrs, controller) {
                    $scope.scrollPosition = $acrophobia;
                    window.onscroll = function () {
                        $acrophobia.update();
                        $scope.$apply();
                    };
                }
            };
        }
    ]);
angular.module('lupus.danceFloor', [])
    .controller('DanceFloorCtrl', ['$scope',
        function ($scope) {}
    ])
    .directive('danceFloor', [

        function () {
            // Runs during compile
            return {
                // name: '',
                // priority: 1,
                // terminal: true,
                scope: {
                    elemanlar: "="
                }, // {} = isolate, true = child, false/undefined = no change
                // controller: function($scope, $element, $attrs, $transclude) {},
                // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
                restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
                // template: '',
                // templateUrl: '',
                // replace: true,
                transclude: true,
                // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
                link: function ($scope, iElm, iAttrs, controller) {
                    var autoSetFloorWidth = function () {
                        $scope.floorWidth = iElm[0].getBoundingClientRect()
                            .width;
                    };
                    window.onresize = autoSetFloorWidth;
                    autoSetFloorWidth();
                }
            };
        }
    ]);
angular.module('lupus.disko', [])
    .directive('lupusDiskoImage', function () {
        // Runs during compile
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                slideNo: "="
            },
            // {} = isolate, true = child, false/undefined = no change
            controller: function ($scope, $element, $attrs, $transclude) {},
            require: '^lupusDisko',
            // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'AE',
            // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function ($scope, iElm, iAttrs, diskoCtrl) {
                var img = iElm.find('img');
                $scope.slide = diskoCtrl.slides[$scope.slideNo];
                img.load(function () {
                    $scope.slide.loaded = true;
                    $scope.$apply();
                });
            }
        };
    })
    .directive('lupusDiskoVideoIntro', function () {
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                videoIntro: "=videoIntro"
            },
            // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            require: '^lupusDisko',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'AE',
            // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function ($scope, iElm, iAttrs, diskoCtrl) {
                var jQ = angular.element;
                iElm.find('video')
                    .on('ended', function () {
                        diskoCtrl.videoIntroEnded();
                        //jQ(this)[0].start();
                    });
            }
        };
    })

.directive('lupusVideo', function(){
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            // scope: {}, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            require: '^lupusDisko',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'AE',
            // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            // templateUrl: '',
            // replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function ($scope, iElm, iAttrs, diskoCtrl) {
                var img = iElm.find('video')
                    .css('opacity', '0.1');
                    
                iElm.find('video')
                    .load(function () {
                        // Video slider elementi sonra eklenecek
                    });
            }
        };
})
    .directive('lupusDisko', function ($interval, $document, windowSize,
        $timeout) {
        

        function calcOptimumHeight() {
            var oran = 539 / 1350;
            var opH = windowSize()
                .width * oran; // Şimdi sabit verdiğimiz bu değer ileride shrink-menu'den alınacak.
            return opH;
        }

        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                slides: '=',
                videoIntro: '='
            },
            // {} = isolate, true = child, false/undefined = no change
            controller: function ($scope, $element, $attrs, $transclude) {
                var timer = null;

                $scope.allSlides = [];

                $scope.nextIndex = 0;

                $scope.startTimer = function () {

                    $scope.slides.push($scope.allSlides[$scope.nextIndex]);
                    timer = $interval(function () {
                        $scope.nextIndex++;
                        $scope.slides.shift();
                        $scope.nextIndex = $scope.nextIndex % $scope.allSlides.length;
                        $timeout(function () {
                            $scope.slides.push($scope.allSlides[
                                $scope.nextIndex]);
                            //$scope.$apply();
                        }, 1000);
                    }, 10000);
                };
                
                $scope.activate = function (slideNo) {
                    if (slides[slideNo].type === 'image') {} else if (
                        slideObject.type === 'video') { /* TODO Düzenle*/ }
                };
                
                this.videoIntroEnded = function () {
                    $scope.initSlider();
                    $scope.videoGrid = true;
                    $scope.$apply();
                };
                
                $scope.initSlider = function () {
                    $timeout(function () {
                        $scope.startTimer();
                    }, 500);
                };
                
                $scope.init = function () {
                    $scope.allSlides = angular.copy($scope.slides);
                    $scope.slides = [];
                    if ($scope.videoIntro) {} else {
                        $scope.initSlider();
                    }
                };
                
                this.slides = $scope.slides;
                $scope.init();
            },
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'AE',
            // E = Element, A = Attribute, C = Class, M = Comment
            // template: '',
            templateUrl: 'template/lupus/disko/disko.html',
            // replace: true,
            transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function ($scope, iElm, iAttrs, controller) {
                iElm.height(calcOptimumHeight());
                window.onresize = function () {
                    iElm.height(calcOptimumHeight());
                }
            }
        };
    });
angular.module("lupus.templates", [
    "templates/lupus/scroll-display/display.html"
]);
angular.module('template/lupus/disko/disko.html', [])
    .run(['$templateCache'], function ($templateCache) {
        $templateCache.put("template/typeahead/typeahead-popup.html",
            '<img src="img/gear-loading-32.gif" ng-hide="sliderReady" class="loading-gif" />\
<lupus-disko-video-intro video-intro="videoIntro" class="lupus-disko-canvas">\
    <video lupus-absolute-center id="player" autoplay width="1361" height="548" class="lupus-disko-video">\
        <source ng-repeat="src in videoIntro.srcs" type="{{src.type}}" src="{{src.src}}"\
        />\
    </video>\
</lupus-disko-video-intro>\
\
<div class="lupus-disko-video-grid" ng-class=\'{"lupus-disko-video-grid-active": videoGrid}\'></div>\
\
<div class="lupus-disko-wrapper"  ng-repeat="slide in slides" ng-switch on="slide.type"  >\
    <lupus-disko-image ng-switch-when="image" class="lupus-disko-canvas" slide-no="$index"  >\
        <img class="lupus-disko-image lupus-disko-slide" lupus-absolute-center ng-src="{{slide.src}}"/>\
\
    </lupus-disko-image>\
    \
    <lupus-disko-video ng-switch-when="video" class="lupus-disko-canvas">\
        <video lupus-absolute-center id="player" autoplay width="1361" height="548" class="lupus-disko-video">\
            <source ng-repeat="video in slide.srcs" type="{{video.type}}" src="{{video.src}}"/>\
        </video>\
    </lupus-disko-video>\
\
</div>\
<h1 class="lupus-disko-texts" ng-repeat="slide in slides">{{slide.text}}</h1>');
    });

angular.module("templates/lupus/scroll-display/display.html", [])
    .run(["$templateCache",
        function ($templateCache) {
            $templateCache.put("template/typeahead/typeahead-popup.html",
                '<div style="position:fixed;top:10px;left:10px;padding:10px;background-color:red;z-index:99999">Scroll Top: {{scrollPosition.top}}</div>'
            );
        }
    ]);
if (!angular.isEmptyObject) {
    angular.isEmptyObject = function (obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    };
}