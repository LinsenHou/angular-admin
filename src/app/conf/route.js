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