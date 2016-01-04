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
