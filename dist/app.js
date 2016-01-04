angular.module('app')
    .constant('ValidatePattern', {
        mobile : /^(?:13|14|15|16|17|18|19)[\d]{9}$/
    })
;
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

angular.module('app')
    .controller('app.indexCtrl', function ($scope, Menu, APPENV) {
        $scope.menuData = [];
        MenuSvc.getAll().then(function (data) {
            $scope.menuData = data;
        });
        $scope.APPENV = APPENV;
    });
angular.module("app")
    .controller("app.user.listCtrl", function ($scope) {
        $scope.now = Date.parse(new Date());
    })
;



angular.module('app')
    .service('MenuSvc', function (Api) {
        this.getAll = function (params) {
            return Api.post('/menu/all', params);
        }
    });

angular.module('app')
    .service('UserSvc', function (Api) {
        this.detail = function (params) {
            return baseApi.post('/user/detail', params);
        }
        this.lists = function (params) {
            return baseApi.post('/user/lists', params);
        }
        this.create = function (params) {
            return baseApi.post('/user/create', params);
        }
        this.update = function (params) {
            return baseApi.post('/user/update', params);
        }
        this.delete = function (params) {
            return baseApi.post('/user/delete', params);
        }
    });
