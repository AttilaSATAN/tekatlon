/*globals angular:true, console:true*/
/* Services */
angular.module('lupusshow.services', [])
    .factory('BildirimlerSrvc', ['$alert',
        function ($alert) {
            "use strict";
            var bildirimler = {
                bildirim: function (data) {
                    $alert(data);
                },
                info: function (msg) {
                    var data = {
                        //duration: 5,
                        animation: 'am-fadeAndSlideTop',
                        title: 'Bilgilendirme: ',
                        content: msg,
                        placement: 'top-left',
                        type: 'info',
                        show: true
                    };
                    this.bildirim(data);
                },
                warning: function (msg) {
                    var data = {
                        //duration: 5,
                        animation: 'am-fadeAndSlideTop',
                        title: 'Uyarı: ',
                        content: msg,
                        placement: 'top-left',
                        type: 'warning',
                        show: true
                    };
                    this.bildirim(data);
                },
                success: function (msg) {
                    var data = {
                        //duration: 5,
                        animation: 'am-fadeAndSlideTop',
                        title: 'Tebrikler: ',
                        content: msg,
                        placement: 'top-left',
                        type: 'success',
                        show: true
                    };
                    this.bildirim(data);
                },
                danger: function (msg) {
                    var data = {
                        //duration: 5,
                        animation: 'am-fadeAndSlideTop',
                        title: 'Dikkat: ',
                        content: msg,
                        placement: 'top-left',
                        type: 'danger',
                        show: true
                    };
                    this.bildirim(data);
                }
            };
            return bildirimler;
        }
    ]);