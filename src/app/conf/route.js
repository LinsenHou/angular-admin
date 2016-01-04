'use strict';
angular.module('app')
    .config(function ($routeProvider, APPCONF) {
        $routeProvider
            .when('/', {
                redirectTo : '/index'
            })
            .when('/index', {
                redirectTo : '/user/list'
            })
            //----------- 默认页面----------------------
            .simpleWhen('/user/list', {
                controller  : 'app.user.listCtrl',
                templateUrl : '/app/template/user/list.tpl'
            })
            .otherwise('/index');
    });
