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
