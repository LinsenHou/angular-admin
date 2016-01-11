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