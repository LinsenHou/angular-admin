angular.module("app")
    .controller("app.user.listCtrl", function ($scope) {
        $scope.now = Date.parse(new Date());
    })
;
