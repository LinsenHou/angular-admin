var alertFactory = function($rootScope, $q, $location, $sce, $modal, $modalStack, $document) {

    var modals = [];
    var wrapData = function(data) {
        if (!angular.isObject(data)) {
            return {
                message: data
            }
        }
        return data;
    }
    var deleteModal = function(modalInstance) {
        var newModals = modals.filter(function(ins) {
            return modalInstance !== ins;
        });
        modals = newModals;
    };
    var isExistModal = function(modalInstance) {
        return modals.some(function(ins) {
            return modalInstance === ins;
        });
    };

    var Alert = function(data) {
        var resultReferred = $q.defer();
        data = wrapData(data);
        var modalInstance = $modal.open({
            windowClass : "ui-alert-modal",
            templateUrl: "components/ui-alert/template/alert.tpl",
            controller: 'ui.alertCtrl',
            backdrop: 'static', //用户需要主动确定
            keyboard: false, //不支持Esc退出
            size: 'sm',
            resolve: {
                data: function() {
                    return {
                        stateClass: data.state || Alert.STATE.INFO,
                        message: data.message || "",
                        resolveText: data.resolveText || "确定"
                    };
                }
            }
        });
        modals.push(modalInstance);
        modalInstance.result.then(function(result) {
            deleteModal(modalInstance);
            resultReferred.resolve(result);
            if (data.direct) {
                $location.url(data.direct);
            }
        }, function(reason) {
            deleteModal(modalInstance);
            resultReferred.reject(reason);
        });

        return resultReferred.promise;
    };

    Alert.STATE = {
        "SUCCESS": "success",
        "ERROR": "danger",
        "INFO": "info",
        "WARNING": "warning",
        "DANGER": "danger"
    };

    //始终保持回车键的监听
    $document.on('keydown', function(evt) {
        var modalStack;
        if (evt.which === 13) {
            modalStack = $modalStack.getTop();
            //最上层一定要为modal实例才可以
            if (modalStack && isExistModal(modalStack.key)) {
                evt.preventDefault();
                $rootScope.$apply(function() {
                    modalStack.key.close();
                });
            }
        }
    });


    Object.keys(Alert.STATE).forEach(function(state) {
        state = state.toLowerCase();
        Alert[state] = function(message) {
            return Alert({
                state: state,
                message: message
            });
        };
    });

    return Alert;
};
alertFactory.$inject = ['$rootScope' , '$q' , '$location' , '$sce' , '$modal' , '$modalStack' , '$document'];

angular.module('components.ui.alert',[])

.controller('ui.alertCtrl', function ($scope , $modalInstance , data) {
	$scope.data = data;

	$scope.ok = function () {
	    $modalInstance.close();
	};

})
.factory('uiAlert', alertFactory)

.factory('UIAlert', alertFactory);

/**
 * Usage : 
 * 
 * Function >
 * UIAlert({state: UIAlert.STATE.SUCCESS , message : "xxxx" , resolveText : "确定"});
 * UIAlert.success("xxxx");
 * UIAlert.info("xxx");
 * UIAlert.error("xxx");
 * UIAlert.warning("xxx");
 * UIAlert.danger("xxx");
 *
 * Constant >
 * UIAlert.STATE["SUCCESS","ERROR","WARNING","INFO","ERROR"]
 * 
 */
var confirmFactory = function($rootScope, $q, $location, $sce, $modal, $modalStack, $document) {

    var modals = [];
    var wrapData = function(data) {
        if (!angular.isObject(data)) {
            return {
                message: data
            }
        }
        return data;
    }
    var deleteModal = function(modalInstance) {
        var newModals = modals.filter(function(ins) {
            return modalInstance !== ins;
        });
        modals = newModals;
    };
    var isExistModal = function(modalInstance) {
        return modals.some(function(ins) {
            return modalInstance === ins;
        });
    };

    var Confirm = function(data) {
        var resultReferred = $q.defer();
        data = wrapData(data);
        var modalInstance = $modal.open({
            windowClass : "ui-confirm-modal",
            templateUrl: "components/ui-confirm/template/confirm.tpl",
            controller: 'ui.confirmCtrl',
            backdrop: 'static', //用户需要主动确定或取消
            keyboard: true, //支持键盘Esc退出
            size: 'sm',
            resolve: {
                data: function() {
                    return {
                        stateClass: data.state || Confirm.STATE.INFO,
                        message: data.message || "",
                        resolveText: data.resolveText || "确定",
                        rejectText: data.rejectText || "取消"
                    };
                }
            }
        });
        modals.push(modalInstance);
        modalInstance.result.then(function(result) {
            deleteModal(modalInstance);
            resultReferred.resolve(result);
            if (data.direct) {
                $location.url(data.direct);
            }
        }, function(reason) {
            deleteModal(modalInstance);
            resultReferred.reject(reason);
        });

        return resultReferred.promise;
    };

    Confirm.STATE = {
        "SUCCESS": "success",
        "ERROR": "danger",
        "INFO": "info",
        "WARNING": "warning",
        "DANGER": "danger"
    };

    //始终保持回车键的监听
    $document.on('keydown', function(evt) {
        var modalStack;
        if (evt.which === 13) {
            modalStack = $modalStack.getTop();
            if (modalStack && isExistModal(modalStack.key)) {
                evt.preventDefault();
                $rootScope.$apply(function() {
                    modalStack.key.close();
                });
            }
        }
    });

    Object.keys(Confirm.STATE).forEach(function(state) {
        state = state.toLowerCase();
        Confirm[state] = function(message) {
            return Confirm({
                state: state,
                message: message
            });
        };
    });
    return Confirm;
};
confirmFactory.$inject = ['$rootScope' , '$q' , '$location' , '$sce' , '$modal' , '$modalStack' , '$document'];

angular.module('components.ui.confirm',[])

.controller('ui.confirmCtrl', function ($scope , $modalInstance , data) {
	$scope.data = data;

	$scope.ok = function () {
	    $modalInstance.close();
	};

	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	};
})

.factory('uiConfirm', confirmFactory)

.factory('UIConfirm', confirmFactory);

/**
 * Usage : 
 * 
 * Function >
 * UIConfirm({state: UIConfirm.STATE.SUCCESS , message : "xxxx" , resolveText : "确定" , rejectText : "取消"});
 * UIConfirm.success("xxxx");
 * UIConfirm.info("xxx");
 * UIConfirm.error("xxx");
 * UIConfirm.warning("xxx");
 * UIConfirm.danger("xxx");
 *
 * Constant >
 * UIConfirm.STATE["SUCCESS","ERROR","WARNING","INFO","ERROR"]
 * 
 */
//forked from https://github.com/g00fy-/angular-datepicker
angular.module('components.ui.datepicker',[])

.constant('UIDatePickerConfig', {
    templateUrl: 'components/ui-datepicker/template/datepicker.tpl',
    view: 'date',
    views: ['year', 'month', 'date', 'hours', 'minutes'],
    format: 'yyyy-MM-dd HH:mm',
    closeOnDateSelection: true,
    step: 5,
    appendToBody: false
})

.filter('UITime', function() {
    function format(date) {
        return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    }

    return function(date) {
        if (!(date instanceof Date)) {
            date = new Date(date);
            if (isNaN(date.getTime())) {
                return undefined;
            }
        }
        return format(date);
    };
})

.factory('UIDatePickerUtils', function() {
    var createNewDate = function(year, month, day, hour, minute) {
        // without any arguments, the default date will be 1899-12-31T00:00:00.000Z
        return new Date(year | 0, month | 0, day | 0, hour | 0, minute | 0);
    };
    return {
        getVisibleMinutes: function(date, step) {
            date = new Date(date || new Date());
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var hour = date.getHours();
            var minutes = [];
            var minute, pushedDate;
            for (minute = 0; minute < 60; minute += step) {
                pushedDate = createNewDate(year, month, day, hour, minute);
                minutes.push(pushedDate);
            }
            return minutes;
        },
        getVisibleWeeks: function(date) {
            date = new Date(date || new Date());
            var startMonth = date.getMonth();
            var startYear = date.getYear();
            // set date to start of the week
            date.setDate(1);

            if (date.getDay() === 0) {
                // day is sunday, let's get back to the previous week
                date.setDate(-5);
            } else {
                // day is not sunday, let's get back to the start of the week
                date.setDate(date.getDate() - (date.getDay() - 1));
            }
            if (date.getDate() === 1) {
                // day is monday, let's get back to the previous week
                date.setDate(-6);
            }

            var weeks = [];
            var week;
            while (weeks.length < 6) {
                if (date.getYear() === startYear && date.getMonth() > startMonth) {
                    break;
                }
                week = this.getDaysOfWeek(date);
                weeks.push(week);
                date.setDate(date.getDate() + 7);
            }
            return weeks;
        },
        getVisibleYears: function(date) {
            date = new Date(date || new Date());
            date.setFullYear(date.getFullYear() - (date.getFullYear() % 10));
            var year = date.getFullYear();
            var years = [];
            var pushedDate;
            for (var i = 0; i < 12; i++) {
                pushedDate = createNewDate(year);
                years.push(pushedDate);
                year++;
            }
            return years;
        },
        getDaysOfWeek: function(date) {
            date = new Date(date || new Date());
            date.setDate(date.getDate() - (date.getDay() - 1));
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var days = [];
            var pushedDate;
            for (var i = 0; i < 7; i++) {
                pushedDate = createNewDate(year, month, day);
                days.push(pushedDate);
                day++;
            }
            return days;
        },
        getVisibleMonths: function(date) {
            date = new Date(date || new Date());
            var year = date.getFullYear();
            var months = [];
            var pushedDate;
            for (var month = 0; month < 12; month++) {
                pushedDate = createNewDate(year, month, 1);
                months.push(pushedDate);
            }
            return months;
        },
        getVisibleHours: function(date) {
            date = new Date(date || new Date());
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var hours = [];
            var hour, pushedDate;
            for (hour = 0; hour < 24; hour++) {
                pushedDate = createNewDate(year, month, day, hour);
                hours.push(pushedDate);
            }
            return hours;
        },
        isAfter: function(model, date) {
            return model.getTime() >= date.getTime();
        },
        isBefore: function(model, date) {
            return model.getTime() <= date.getTime();
        },
        isSameYear: function(model, date) {
            return model.getFullYear() === date.getFullYear();
        },
        isSameMonth: function(model, date) {
            return this.isSameYear(model, date) && model.getMonth() === date.getMonth();
        },
        isSameDay: function(model, date) {
            return this.isSameMonth(model, date) && model.getDate() === date.getDate();
        },
        isSameHour: function(model, date) {
            return this.isSameDay(model, date) && model.getHours() === date.getHours();
        },
        isSameMinutes: function(model, date) {
            return this.isSameHour(model, date) && model.getMinutes() === date.getMinutes();
        },
        isValidDate: function(value) {
            // Invalid Date: getTime() returns NaN
            return value && !(value.getTime && value.getTime() !== value.getTime());
        },
        parseDate: function(value, willReturn) {
            if (angular.isNumber(value)) {
                // presumably timestamp to date object
                value = new Date(value);
            }
            willReturn = willReturn || NaN;
            if (!value) {
                return willReturn;
            } else if (angular.isDate(value)) {
                return angular.copy(value);
            } else if (angular.isString(value)) {
                var time = Date.parse(value);
                if (isNaN(time)) {
                    return willReturn;
                } else {
                    return new Date(value);
                }
            } else {
                return willReturn;
            }
        }
    };
})


.directive('uiDatePicker', ['UIDatePickerConfig', 'UIDatePickerUtils', '$filter','$log',
    function datePickerDirective(UIDatePickerConfig, UIDatePickerUtils, $filter , $log) {
        var dateFilter = $filter('date');
        return {
            restrict: 'A',
            transclude: true,
            require: '?^ngModel',
            templateUrl: UIDatePickerConfig.templateUrl,
            scope: {
                after: '=?',
                minDate: '=?',
                before: '=?',
                maxDate: '=?',
                dateDisabled : '&'
            },
            link: function(scope, element, attrs, ngModel) {
                var step = parseInt(attrs.step || UIDatePickerConfig.step, 10),
                    model = new Date(),
                    arrowClick = false,
                    now = new Date(),
                    format = attrs.format || UIDatePickerConfig.format;
                var views = UIDatePickerConfig.views;
                scope.date = new Date();
                scope.view = attrs.view || UIDatePickerConfig.view;
                views = views.slice(
                    views.indexOf(attrs.maxView || views[0]),
                    views.indexOf(attrs.minView || views[views.length-1]) + 1
                );
                if (views.length === 1 || views.indexOf(scope.view) === -1) {
                    scope.view = views[0];
                }

                if (ngModel) {
                    ngModel.$render = function() {
                        $log.info("render-picker", ngModel.$modelValue);
                        model = UIDatePickerUtils.parseDate(ngModel.$modelValue, new Date());
                        scope.date = angular.copy(model);
                    };

                    function parser(viewValue) {
                        $log.info("parser-picker", viewValue);
                        return UIDatePickerUtils.parseDate(viewValue);
                    };

                    ngModel.$parsers.unshift(parser);
                    ngModel.$viewChangeListeners.push(function() {
                        $log.info('viewChangeListeners-picker', ngModel.$modelValue);
                    });
                }

                scope.setView = function(nextView) {
                    if (views.indexOf(nextView) !== -1) {
                        setTimeout(function(){
                            scope.view = nextView;
                            scope.$apply();
                        },100);
                        //scope.view = nextView;
                    }
                };

                scope.setLastView = function(nextView) {
                    var index = views.indexOf(scope.view),
                        lastView = index > 0 ? views[index - 1] : null;
                    if (lastView) {
                        scope.view = lastView;
                    }
                };

                scope.setDate = function(date) {
                    if (attrs.disabled) {
                        return;
                    }
                    scope.date = date;
                    // change next view
                    var nextView = views[views.indexOf(scope.view) + 1];
                    switch (scope.view) {
                        case 'minutes':
                            model.setMinutes(date.getMinutes());
                            /*falls through*/
                        case 'hours':
                            model.setHours(date.getHours());
                            /*falls through*/
                        case 'date':
                            model.setDate(date.getDate());
                            /*falls through*/
                        case 'month':
                            model.setMonth(date.getMonth());
                            /*falls through*/
                        case 'year':
                            model.setFullYear(date.getFullYear());
                    }

                    if (nextView) {
                        scope.setView(nextView);
                    } else {
                        if (ngModel) {
                            ngModel.$setViewValue(angular.copy(model));
                            ngModel.$render();
                        }
                        scope.$emit('setDate', model, scope.view);
                    }
                    arrowClick = false;
                };

                function update() {
                    var view = scope.view;
                    if (model && !arrowClick) {
                        scope.date = new Date(model);
                    }
                    var date = scope.date;

                    switch (view) {
                        case 'year':
                            scope.years = UIDatePickerUtils.getVisibleYears(date);
                            break;
                        case 'month':
                            scope.months = UIDatePickerUtils.getVisibleMonths(date);
                            break;
                        case 'date':
                            scope.weekdays = scope.weekdays || UIDatePickerUtils.getDaysOfWeek();
                            scope.weeks = UIDatePickerUtils.getVisibleWeeks(date);
                            break;
                        case 'hours':
                            scope.hours = UIDatePickerUtils.getVisibleHours(date);
                            break;
                        case 'minutes':
                            scope.minutes = UIDatePickerUtils.getVisibleMinutes(date, step);
                            break;
                    }
                }

                function watch() {
                    if (scope.view !== 'date') {
                        return scope.view;
                    }
                    return scope.date ? scope.date.getMonth() : null;
                }


                scope.$watch(watch, update);

                scope.next = function(delta) {
                    var date = scope.date;
                    delta = delta || 1;
                    switch (scope.view) {
                        case 'year':
                        case 'month':
                            date.setFullYear(date.getFullYear() + delta);
                            break;
                        case 'date':
                            /* Reverting from ISSUE #113
          var dt = new Date(date);
          date.setMonth(date.getMonth() + delta);
          if (date.getDate() < dt.getDate()) {
            date.setDate(0);
          }
          */
                            date.setMonth(date.getMonth() + delta);
                            break;
                        case 'hours':
                        case 'minutes':
                            date.setHours(date.getHours() + delta);
                            break;
                    }
                    arrowClick = true;
                    update();
                };

                scope.prev = function(delta) {
                    return scope.next(-delta || -1);
                };

                scope.isDisabled = function(date){
                    if(scope.view=="date"){
                        return (scope.minDate && date < scope.minDate) || (scope.maxDate && date > scope.maxDate) || (attrs.dateDisabled && scope.dateDisabled({date: date, view: scope.view}));
                    }
                    return attrs.dateDisabled && scope.dateDisabled({date: date, view: scope.view});
                };

                scope.isAfter = function(date) {
                    return scope.after && UIDatePickerUtils.isAfter(date, scope.after);
                };

                scope.isBefore = function(date) {
                    return scope.before && UIDatePickerUtils.isBefore(date, scope.before);
                };

                scope.isSameMonth = function(date) {
                    return UIDatePickerUtils.isSameMonth(model, date);
                };

                scope.isSameYear = function(date) {
                    return UIDatePickerUtils.isSameYear(model, date);
                };

                scope.isSameDay = function(date) {
                    return UIDatePickerUtils.isSameDay(model, date);
                };

                scope.isSameHour = function(date) {
                    return UIDatePickerUtils.isSameHour(model, date);
                };

                scope.isSameMinutes = function(date) {
                    return UIDatePickerUtils.isSameMinutes(model, date);
                };

                scope.isNow = function(date) {
                    var is = true;
                    //noinspection FallThroughInSwitchStatementJS
                    switch (scope.view) {
                        case 'minutes':
                            is &= ~~(date.getMinutes() / step) === ~~(now.getMinutes() / step);
                            /*falls through*/
                        case 'hours':
                            is &= date.getHours() === now.getHours();
                            /*falls through*/
                        case 'date':
                            is &= date.getDate() === now.getDate();
                            /*falls through*/
                        case 'month':
                            is &= date.getMonth() === now.getMonth();
                            /*falls through*/
                        case 'year':
                            is &= date.getFullYear() === now.getFullYear();
                    }
                    return is;
                };
            }
        };
    }
])

.directive('uiDateRange', function() {
    return {
        templateUrl: 'components/ui-datepicker/template/daterange.tpl',
        scope: {
            start: '=',
            end: '='
        },
        link: function(scope, element, attrs) {

            /*
             * If no date is set on scope, set current date from user system
             */
            scope.start = new Date(scope.start || new Date());
            scope.end = new Date(scope.end || new Date());

            attrs.$observe('disabled', function(isDisabled) {
                scope.disableDatePickers = !!isDisabled;
            });
            scope.$watch('start.getTime()', function(value) {
                if (value && scope.end && value > scope.end.getTime()) {
                    scope.end = new Date(value);
                }
            });
            scope.$watch('end.getTime()', function(value) {
                if (value && scope.start && value < scope.start.getTime()) {
                    scope.start = new Date(value);
                }
            });
        }
    };
})

.directive('uiDateTimeAppend', function() {
    return {
        link: function(scope, element) {
            element.bind('click', function() {
                element.find('input')[0].focus();
            });
        }
    };
})

.directive('uiDateTime', ['$compile', '$document', '$filter', 'UIDatePickerConfig', 'UIDatePickerUtils','$log',

    function($compile, $document, $filter, UIDatePickerConfig, UIDatePickerUtils,$log) {
        var body = $document.find('body');
        var dateFilter = $filter('date');

        return {
            restrict: 'A',
            require: 'ngModel',
            scope: {
                dateDisabled: '&'
            },
            link: function(scope, element, attrs, ngModel) {
                scope.picked = NaN;
                scope.watchData = {};

                var format = attrs.format || UIDatePickerConfig.format;
                var views = UIDatePickerConfig.views ;
                var closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : UIDatePickerConfig.closeOnDateSelection;
                var appendToBody = angular.isDefined(attrs.appendToBody) ? scope.$parent.$eval(attrs.appendToBody) : UIDatePickerConfig.appendToBody;
                var picker = null;
                var container = null;
                var clickFromPicker = false;
                var makePopupTemplate = (function() {
                    function cameltoDash(string) {
                        return string.replace(/([A-Z])/g, function($1) {
                            return '-' + $1.toLowerCase();
                        });
                    }
                    return function() {
                        var datepickerEl = angular.element('<div ui-date-picker class="ui-date-picker-date-time"><div ng-transclude></div></div>');
                        var pickerAttrs = {
                            'ng-model': 'picked',
                            'ng-change': 'dateSelection(date)'
                        };
                        //不可变
                        ['minView', 'maxView', 'view', 'step'].forEach(function(key) {
                            if (attrs[key]) {
                                //如果不为Express则直接取其字符串
                                pickerAttrs[cameltoDash(key)] = scope.$parent.$eval(attrs[key]) || attrs[key];
                                //将数组转成特定字符串 -> 已废弃用法
                                // if(key=="views"){
                                //     pickerAttrs[cameltoDash(key)] = "['"+pickerAttrs[cameltoDash(key)].join("','")+"']";
                                // }
                            }
                        });
                        //可变
                        ['minDate', 'maxDate'].forEach(function(key) {
                            if (attrs[key]) {
                                //scope.watchDate 再各自需要的地方定义及赋值            
                                pickerAttrs[cameltoDash(key)] = 'watchData.' + key;
                            }
                        });
                        if (attrs.dateDisabled) {
                            pickerAttrs['date-disabled'] = 'dateDisabled({ date: date, view: view })';
                        }

                        datepickerEl.attr(pickerAttrs);

                        var template = datepickerEl[0];
                        datepickerEl.remove();
                        //只返回文本内容 因为DOM再compile后会绑定很多奇怪属性 会影响再次compile
                        return template;
                    }
                })()

                var template = makePopupTemplate();


                //modelValue ->format[]()-> {viewValue->render()}->validator[key]()
                function formatter(modelValue) {
                    //先将model变为dateObj 有可能是第三方不可控改变的
                    var modelValue = UIDatePickerUtils.parseDate(modelValue)
                    $log.info("formatter-input", modelValue, format, dateFilter(modelValue, format));
                    if (UIDatePickerUtils.isValidDate(modelValue)) {
                        scope.picked = modelValue
                    }
                    return modelValue ? dateFilter(modelValue, format) : "";
                }

                //viewValue ->parser[]()-> modelValue->validator[key]()->$viewChangeListeners()
                function parser(viewValue) {
                    $log.info("parser-input", viewValue, UIDatePickerUtils.parseDate(viewValue));
                    var modelValue = UIDatePickerUtils.parseDate(viewValue);
                    if (UIDatePickerUtils.isValidDate(modelValue)) {
                        scope.picked = modelValue
                    }
                    return modelValue;
                }

                function validator(modelValue, viewValue) {
                    $log.info("validator-input", modelValue, viewValue);
                    var value = modelValue || viewValue;
                    if(!value) {
                        return true;
                    } else {
                        return UIDatePickerUtils.isValidDate(UIDatePickerUtils.parseDate(viewValue));
                    }
                }
                ngModel.$$parserName = 'date';
                ngModel.$validators.date = validator;
                ngModel.$formatters.push(formatter);
                ngModel.$parsers.unshift(parser);
                ngModel.$viewChangeListeners.push(function() {
                    $log.info('viewChangeListeners-input', ngModel.$modelValue);
                });


                if (attrs.minDate) {
                    var minVal;
                    ngModel.$validators.min = function(value) {
                        return !minVal || !UIDatePickerUtils.isValidDate(minVal) || !UIDatePickerUtils.isValidDate(value) || value >= minVal;
                    };
                    scope.$parent.$watch(attrs.minDate, function(val) {
                        minVal = UIDatePickerUtils.parseDate(val);
                        if(UIDatePickerUtils.isValidDate(minVal)){
                            minVal.setHours(0,0,0,0);
                            ngModel.$validate();
                            scope.watchData['minDate'] = minVal;
                        }
                    });
                }

                if (attrs.maxDate) {
                    var maxVal;
                    ngModel.$validators.max = function(value) {
                        return !maxVal || !UIDatePickerUtils.isValidDate(maxVal) || !UIDatePickerUtils.isValidDate(value) || value <= maxVal;
                    };
                    scope.$parent.$watch(attrs.maxDate, function(val) {
                        maxVal = UIDatePickerUtils.parseDate(val);
                        if(UIDatePickerUtils.isValidDate(minVal)){
                            maxVal.setHours(23,59,59,0);
                            ngModel.$validate();
                            scope.watchData['maxDate'] = maxVal;
                        }
                    });
                }

                element.on('click', open);
                $document.on('mousedown', documentClickBind);

                scope.$on('setDate', function(event, date, view) {
                    var date = date ? dateFilter(date, format) : '';
                    $log.info('setDate', date);
                    ngModel.$setViewValue(date)
                    ngModel.$render();
                    if (closeOnDateSelection) {
                        close();
                        //只能此时给焦点 以免干扰其他交互
                        element[0].focus();
                    }
                });

                scope.$on('$destroy', function() {
                    element.off('click', open);
                    $document.off('mousedown', documentClickBind);
                    close();
                });

                function documentClickBind(event){
                    //console.log(event.target , angular.element(event.target).closest("[ui-date-picker]"),picker && picker[0].contains(event.target));
                    //由于采用ng-switch方案瞬间摘出DOM，所以根本无法准备判断父子关系
                    //console.log(clickFromPicker);
                    if(event.target != element[0] && picker && clickFromPicker==false){
                        close();
                    }
                }

                function close() {
                    if (picker) {
                        picker.remove();
                        picker = null;
                    }
                    if (container) {
                        container.remove();
                        container = null;
                    }
                }

                function open() {
                    if (picker) {
                        return;
                    }
                    picker = $compile(template)(scope);
                    scope.$digest();
                    if (appendToBody) {
                        var pos = angular.extend(element.offset(), {
                            height: element[0].offsetHeight
                        });
                        picker.css({
                            top: pos.top + pos.height,
                            left: pos.left
                        });
                        body.append(picker);
                    } else {
                        container = angular.element('<div ui-date-picker-wrapper></div>');
                        element[0].parentElement.insertBefore(container[0], element[0]);
                        var pos = angular.extend(element.position(), {
                            height: element[0].offsetHeight
                        }) ,wrapPos = container.position();
                        container.append(picker); 
                        picker.css({
                            left: pos.left - wrapPos.left,
                            top: pos.top + pos.height - wrapPos.top
                        });
                    }

                    //由于采用ng-switch方案瞬间摘出DOM，所以根本无法准备判断父子关系
                    //但又不想强制picker不做冒泡 这样强制不冒泡有阻碍正常行为的风险
                    //故采取flag方式
                    picker.on('mousedown', function(evt) {
                        clickFromPicker = true;
                        //这里不用$timeout
                        setTimeout(function(){
                            clickFromPicker = false;
                        },0);
                    });
                }

            }
        };
    }
]);
'use strict';

angular.module('components.ui.menu',[])

/**
 * [UIMenu]
 * Notice : 不适用于增量变化的菜单 菜单数据需在UIMenu.init时全量设置完毕
 * Fixed: 
 *  - 15/6/30 同一个url对应多个node
 *  - 15/7/1  $location.path()引起unfold策略:采取按"/"分割后逐个缩短的策略查找对应node
 *            即 存在节点A的url为"/a/b"时 且不存在节点url为"/a/b/c" , 
 *            $location.path()为"/a/b/c"或"/a/b/c/:param" 均使节点A置为unfold
 *  - ...
 * 
 * return {
 * 		init:<function> return <Nodes>;
 * 		getAll:<function> return <Nodes>;
 * 		getById:<function> return <Node>;
 * }
 */
.factory('UIMenu', function($q , $location , $rootScope) {

	var menuData = [],
		nodeTree = [],
		nodeMap  = {};
		

	var UrlToNodes = (function(){
		/**
		 * [urlToNodes description]
		 * @type {Object}
		 * 
		 * {
		 * 	'/realtime/game':[1000,1010,1011] ,
		 *  '/realtime/total':[1100],
		 *  '/realtime/department':[1200,1210],
		 * }
		 */
		var store = {};

		return {
			set: function(url , node){
				if(store[url] && angular.isArray(store[url])){
					store[url].push(node);
				}else{
					store[url] = [node];
				}
			},
			get : function(url){
				return store[url] || null;
			}
		}
	})();

	var NodeState = (function(){
		var unfoldNodeIds = [];

		return {
			isUnfold : function(node){
				return node && node.id && unfoldNodeIds.indexOf(node.id)>-1;
			},
			unfold : function(nodes){
				if(!angular.isArray(nodes)){
					nodes = [nodes];
				}
				var comboNoedIds = [];
				var parentNode , parentId;
				
				nodes.forEach(function(node){
					if(comboNoedIds.indexOf(node.id)==-1){
						comboNoedIds.push(node.id);
					}
					parentId = node.parentId;
		        	while(parentId && (parentNode = nodeMap[parentId])){
		        		if(comboNoedIds.indexOf(parentNode.id)==-1){
							comboNoedIds.push(parentNode.id);
						}
		        		parentId = parentNode.parentId;
		        	}
				});
				unfoldNodeIds = comboNoedIds;
	        	//console.log("unfoldNodeIds",unfoldNodeIds);
	        },
	        fold : function(nodes){
	        	if(!angular.isArray(nodes)){
					nodes = [nodes];
				}
				var unfoldNodes = [];
				var parentNode;

				nodes.forEach(function(node){
					if(node.parentId && (parentNode = nodeMap[node.parentId])){
		        		unfoldNodes.push(parentNode);
		        	}
				});

				NodeState.unfold(unfoldNodes);
	        },
	        update : function(){

	        	if(!$location.path()){
					return;
				}
				var pathArr = $location.path().split("/");
				var path , nodes;
				while(pathArr.length>0){
					path = pathArr.join("/");
					nodes = UrlToNodes.get('#'+path);
					if(nodes && nodes.length>0){
						NodeState.unfold(nodes);
						break;
					}else{
						pathArr.pop();
					}
				}
			},
			init : function(){
				NodeState.clear();
				NodeState.update();
			},
			clear : function(){
				unfoldNodeIds = [];
			}
		};
	})();



	var Node = function(node){
		this.node = node;
		this.id   = node.id;
		this.url  = node.url;
		this.title = node.title;
		if(node.parentId){
			this.parentId = node.parentId;
		}
	};
	Node.prototype = {
		isParent : function(){
			return this.node && this.node.children && this.node.children.length > 0;
		},
		isChild : function(){
            return this.node && !this.isParent();
        },
        getChildren : function(){
            return this.node.children || null;
        },
        isUnfold : function(){
        	return NodeState.isUnfold(this.node);
        },
        toggleUnfold : function(){
        	NodeState.isUnfold(this.node) ? NodeState.fold(this.node) : NodeState.unfold(this.node);
        }
	};


	var scanChildren = function(children , parentId){

		var nodeMap = {};
		var nodeTree = children.map(function(item){
			item = angular.copy(item);
			if(parentId){
				item.parentId = parentId;
			}
			if(item.children && item.children.length > 0){
				var res = scanChildren(item.children , item.id);
				item.children = res[0];
				angular.extend(nodeMap, res[1]);
	    	}
	    	if(item.url && item.url.indexOf("http://")==-1 && item.url.indexOf("https://")==-1){
	    		//注意执行顺序
	    		if(item.url[0]!="/"){
	    			item.url = "/"+item.url;
	    		}
	    		item.url = "#"+item.url;
	    	}
	    	var node = new Node(item);
	    	nodeMap[item.id] = node;
	    	UrlToNodes.set(item.url , node);
	    	
	    	return node;
		});
		return [nodeTree , nodeMap];
	} ;


	var Menu = {

		init : function(data){
			if(!data){
				return [];
			}
			var currentMenuData = angular.copy(data);
			if(!angular.equals(currentMenuData, menuData)){
				menuData = currentMenuData;
				var res = scanChildren(menuData);
				nodeTree = res[0],
				nodeMap  = res[1];
				NodeState.init();
			}
			return nodeTree;
		},

		getAll : function(){
			return nodeTree;
		},

		getById : function(id){
			return nodeMap[id] || null;
		}

	};

	$rootScope.$on('$locationChangeSuccess', NodeState.update);

	return Menu;
})

.directive('uiMenu', ['$compile' , 'UIMenu' , function ($compile , UIMenu) {
	return {
		restrict: "AE",
		templateUrl : 'components/ui-menu/template/menu.tpl',
		replace: true,
		scope : {rootData : '=' , childrenData : '='},
		compile : function(tElement, tAttr, transclude) {

			var contents = tElement.contents().remove();
			var compiledContents;
			return function PostLinkingFunction (scope, element, attrs) {

				if(!compiledContents) {
                    compiledContents = $compile(contents, transclude);
                }

				scope.$watch(function(){
					return scope['rootData'] || null;
				}, function(data){
					if(data==null){
						return;
					}
			      	scope['uiMenuNodes'] = UIMenu.init(data);
	                compiledContents(scope, function(clone, scope) {
	                    element.empty().append(clone);
	            	});
				},true);

				scope.$watch(function(){
					return scope['childrenData'] || null;
				} , function(data){
					if(data==null){
						return;
					}
			      	scope['uiMenuNodes'] = data;
	                compiledContents(scope, function(clone, scope) {
                        element.empty().append(clone);
                	});
				},true);	

			}
		}
	};
}])
angular.module('ui.validate', [])
    .directive('uiValidate', ['$$uiValidateApplyWatch', function ($$uiValidateApplyWatch) {
        return {
            restrict : 'A',
            require  : 'ngModel',
            link     : function (scope, elm, attrs, ctrl) {
                var validateFn, validateExpr = scope.$eval(attrs.uiValidate);
                if (!validateExpr) {
                    return;
                }
                if (angular.isString(validateExpr)) {
                    validateExpr = {
                        validator : validateExpr
                    };
                }
                angular.forEach(validateExpr, function (exprssn, key) {
                    validateFn = function (modelValue, viewValue) {
                        // $value is left for retrocompatibility
                        var expression = scope.$eval(exprssn, {
                            '$value'      : modelValue,
                            '$modelValue' : modelValue,
                            '$viewValue'  : viewValue,
                            '$name'       : ctrl.$name
                        });
                        // Keep support for promises for retrocompatibility
                        if (angular.isObject(expression) && angular.isFunction(expression.then)) {
                            expression.then(function () {
                                ctrl.$setValidity(key, true);
                            }, function () {
                                ctrl.$setValidity(key, false);
                            });
                            //add validators for async by zhouyao(2015/07/14)
                            ctrl.$asyncValidators[key] = function () {
                                return expression;
                            };
                            // Return as valid for now. Validity is updated when promise resolves.
                            return true;
                        } else {
                            return expression;
                        }
                    };
                    ctrl.$validators[key] = validateFn;
                });
                // Support for ui-validate-watch
                if (attrs.uiValidateWatch) {
                    $$uiValidateApplyWatch(scope, ctrl, scope.$eval(attrs.uiValidateWatch));
                }
            }
        };
    }])
    .directive('uiValidateAsync', ['$$uiValidateApplyWatch', '$timeout', '$q', function ($$uiValidateApplyWatch, $timeout, $q) {
        return {
            restrict : 'A',
            require  : 'ngModel',
            link     : function (scope, elm, attrs, ctrl) {
                var validateFn, validateExpr = scope.$eval(attrs.uiValidateAsync);
                if (!validateExpr) {
                    return;
                }
                if (angular.isString(validateExpr)) {
                    validateExpr = {
                        validatorAsync : validateExpr
                    };
                }
                angular.forEach(validateExpr, function (exprssn, key) {
                    validateFn = function (modelValue, viewValue) {
                        // $value is left for ease of use
                        var expression = scope.$eval(exprssn, {
                            '$value'      : modelValue,
                            '$modelValue' : modelValue,
                            '$viewValue'  : viewValue,
                            '$name'       : ctrl.$name
                        });
                        // Check if it's a promise
                        if (angular.isObject(expression) && angular.isFunction(expression.then)) {
                            return expression;
                            // Support for validate non-async validators
                        } else {
                            return $q(function (resolve, reject) {
                                setTimeout(function () {
                                    if (expression) {
                                        resolve();
                                    } else {
                                        reject();
                                    }
                                }, 0);
                            });
                        }
                    };
                    ctrl.$asyncValidators[key] = validateFn;
                });
                // Support for ui-validate-watch
                if (attrs.uiValidateWatch) {
                    $$uiValidateApplyWatch(scope, ctrl, scope.$eval(attrs.uiValidateWatch));
                }
            }
        };
    }])
    .service('$$uiValidateApplyWatch', function () {
        return function (scope, ctrl, watch) {

            //string - update all validators on expression change
            if (angular.isString(watch)) {
                scope.$watch(watch, function () {
                    ctrl.$validate();
                });
                //array - update all validators on change of any expression
            } else if (angular.isArray(watch)) {
                angular.forEach(watch, function (expression) {
                    scope.$watch(expression, function () {
                        ctrl.$validate();
                    });
                });
                //object - update appropriate validator
            } else if (angular.isObject(watch)) {
                angular.forEach(watch, function (expression /*, validatorKey*/) {
                    //value is string - look after one expression
                    if (angular.isString(expression)) {
                        scope.$watch(expression, function () {
                            ctrl.$validate();
                        });
                    }
                    //value is array - look after all expressions in array
                    if (angular.isArray(expression)) {
                        angular.forEach(expression, function (intExpression) {
                            scope.$watch(intExpression, function () {
                                ctrl.$validate();
                            });
                        });
                    }
                });
            }
        };
    });

angular.module('components', [
    "components.ui.confirm",
    "components.ui.menu",
    "components.ui.datepicker",
    "components.ui.alert",
    "ui.validate"
]);

console.log('load components .. ');
