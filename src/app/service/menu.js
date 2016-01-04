angular.module('app')
    .service('MenuSvc', function (Api) {
        this.getAll = function (params) {
            return Api.post('/menu/all', params);
        }
    });
