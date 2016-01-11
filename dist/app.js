
var app = angular.module("app", ['ngRoute']);

angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/demo', {
            templateUrl : '/src/app/template/demo/index.tpl',
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
        $scope.now = Date.parse(new Date());
        console.log(now,123123);
    })
;
