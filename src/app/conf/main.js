angular.module('app')
    .constant('ValidatePattern', {
        mobile : /^(?:13|14|15|16|17|18|19)[\d]{9}$/
    })
;