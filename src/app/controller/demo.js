angular.module("app")
    .controller("demoCtrl", function ($scope) {
        $scope.now = Date.parse(new Date());
        console.log($scope.now,123123);
    })
;
