angular.module('app')
    .controller('app.indexCtrl', function ($scope, Menu, APPENV) {
        $scope.menuData = [];
        MenuSvc.getAll().then(function (data) {
            $scope.menuData = data;
        });
        $scope.APPENV = APPENV;
    });