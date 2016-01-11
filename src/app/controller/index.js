angular.module("app")
    .controller("indexCtrl", function ($scope,$location) {
        console.log('start angular app');
        $location.url('/');
    })
;
