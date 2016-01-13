angular.module("app", ['ngRoute', 'components']);

angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/demo'
        })
        .when('/demo', {
            templateUrl : 'app/template/demo/index.tpl',
            controller  : 'demoCtrl'
        })
        .otherwise({
            redirectTo : '/demo'
        });
}]);
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



angular.module("app")
    .controller("demoCtrl", function ($scope) {
        $scope.menuData = [
            {
                id: 1000,
                title: "系统设置",
                url: "",
                children: [
                    {
                        id: 1001,
                        title: "权限管理",
                        url: "/aaa/",
                        children: [ ]
                    },
                    {
                        id: 1001,
                        title: "人员管理",
                        url: "/bbb/",
                        children: [ ]
                    }
                ]
            }
        ];
    })
;

angular.module("app")
    .controller("indexCtrl", function ($scope,$location) {
        console.log('start angular app');
        $location.url('/');
    })
;
