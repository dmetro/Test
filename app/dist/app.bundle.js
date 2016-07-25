(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider

     .state('main', {
         url: '/main',
         templateUrl: '/app/views/main/main.html',
         controller: require('controllers/main.js')
     })

};
},{"controllers/main.js":2}],2:[function(require,module,exports){
module.exports = function ($scope, BackendService, $state, menuService) {

    //var data = {};
    //data["providerId"] = 1;
    //data["rotationId"] = 0;

    //$scope.orders = {};
    //$scope.rotetions = {};

    //$scope.date;
    ////function call
    //// $scope.GetData();
    //BackendService.GetRotetions(1).then(function (response) {

    //    if (response != null) {
    //        if (response.data["Error"] != null) {

    //            $scope.rotetions = response.data.Data;
    //        }
    //        else {
    //            console.log("user Notok ")
    //        }
    //    }
    //});

    //$scope.selectedItem = "0";

    //getData();

    //function getData() {

    //    var count = Object.keys($scope.selectedItem).length;

    //    data["providerId"] = 1;//TODO: Need to change it to dynamic param from login

    //    data["rotationId"] = count == 0 ? 0 : $scope.selectedItem;//Dima Please fix this shit

    //    data["date"] = $scope.date == undefined ? 0 : $scope.date;

    //    BackendService.getAllOrders(data).then(function (response) {
    //        if (response != null) {
    //            if (response.data["Error"] != null) {
    //                $scope.orders = response.data.Data;
    //            }
    //            else {
    //                console.log("user Notok ")
    //            }
    //        }
    //    });
    //}

    //$scope.changeOrder = function()
    //{       
    //    BackendService.triggerAccounting().then(function (response) {

    //        if (response != null) {
    //            if (response.data["Error"] != null) {

    //                console.log("Error while config");
    //            }
    //            else {

    //                console.log("Ok Config changed");
    //            }
    //        }
    //    });

    //}
    ////NEW 
    //$scope.GetData = function (data) {

    //    data["providerId"] = 1;//Need to change it to dynamic param from login
    //    console.log("$scope.selectedItem: " + $scope.selectedItem);
    //    console.log("date " + $scope.date);
    //    data["rotationId"] = $scope.selectedItem;//Dima Please fix this shit


    //    data["date"] = $scope.date;

    //    BackendService.getAllOrders(data).then(function (response) {

    //        if (response != null) {
    //            if (response.data["Error"] != null) {

    //                $scope.orders = response.data.Data;
    //            }
    //            else {

    //                console.log("user Notok ")
    //            }
    //        }
    //    });
    //}

    //$scope.setRole = function (data) {
    //    console.log("Data", data)
    //    console.log("Row Clicked", data);
    //}

    ////BackendService.getAllOrders(data).then(function (response) {

    ////    var data = {};
    ////    data["providerId"] = 1;
    ////    data["rotationId"] = 1;
    ////    if (response != null) {
    ////        if (response.data["Error"] != null) {
    ////            $scope.orders = response.data.Data;
    ////            console.log($scope.orders);
    ////        }
    ////        else {
    ////            console.log("user Notok ")
    ////        }
    ////    }
    ////});

    //$scope.update = function () {

    //    var data = {};
    //    data["providerId"] = 1;
    //    data["rotationId"] = $scope.selectedItem;

    //    BackendService.getAllOrders(data).then(function (response) {

    //        if (response != null) {
    //            if (response.data["Error"] != null) {
    //                $scope.orders = response.data.Data;
    //                console.log($scope.orders);
    //            }
    //            else {

    //                console.log("user Notok ")
    //            }
    //        }
    //    });

    //    // use $scope.selectedItem.code and $scope.selectedItem.name here
    //    // for other stuff ...
    //}

    //$scope.submit = function () {
    //    getData();
    //}

    //$scope.printExample = function (id) {

    //    printStyle(id);
    //}

    //$scope.goToDepartment1 = function () {

    //    console.log("goToDepartment");
    //    menuService.goToDepartment();

    //    $state.go('department');
    //}

    ////Gilix
    //function printStyle(id) {
    //    var divToPrint = document.getElementById(id);
    //    console.log("divToPrint:" + divToPrint);
    //    if (divToPrint != []) {
    //        newWin = window.open("");
    //        newWin.document.write(divToPrint.outerHTML);
    //        newWin.print();
    //        newWin.close();
    //    }
    //}


}
},{}],3:[function(require,module,exports){
angular.module('byClick', ['ui.router', 'jkuri.datepicker', 'ui.bootstrap'])
    // Directives
    //.directive(....)

    // Services
    .service('API', require('./services/api.js'))
    .service('BackendService', require('./services/BackendService.js'))
    .service('menuService', require('./services/menuService.js'))

    // Routing
    .config(require('./config/routes.js'))

    // Controllers
    .controller('mainController', function () { })
    .controller('login', function () { })
    .controller('main', function () { })
    .controller('uploadcontent', function () { })
    .controller('department', function () { })
},{"./config/routes.js":1,"./services/BackendService.js":4,"./services/api.js":5,"./services/menuService.js":6}],4:[function(require,module,exports){
module.exports = function backend_service($q, $http) {

    this.login = function (data) {
        return $http.post('/api/user/login', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.getAllOrders = function (data) {

        return $http.post('/api/order/getorders/', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            // $state.go('error', { 'error_obj': err });
        })
    }

    this.getAllOrdersBtRotation = function (data) {
        return $http.post('/api/order/getorders/', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            // $state.go('error', { 'error_obj': err });
        })
    }

    this.GetRotetions = function (id) {
        return $http.get('/api/order/getRotations/' + id)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.GetAllProductsByCategoryName = function (data) {

        return $http.post('/api/order/getproductscategory/', data)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            // $state.go('error', { 'error_obj': err });
        })
    }

    this.GetCategories = function (id) {
        return $http.get('/api/order/getcategories/' + id)
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error', { 'error_obj': err });
        })
    }

    this.triggerAccounting = function () {
        return $http.get('/api/order/triggeraccounting')
            .then(function (response) {
                return response
            },
        function (err) {
            err['text'] = 'Something happens while trigger accounting ';
            $state.go('error', { 'error_obj': err });
        })
    }
    
   
};
},{}],5:[function(require,module,exports){
module.exports = function ($q, $http) {
    function request(method, url, data) {
        var deferred = $q.defer();

        $http({
            method: method,
            url: url,
            data: data
        }).then(function (response) {
            deferred.resolve(response.data);
        }, function (response) {
            deferres.reject();
        });

        return deferred.promise;
    }

    function mock(func, timeout) {
        var deferred = $q.defer();
        setTimeout(function (f) {
            deferred.resolve(f());
        }, timeout, func);
        return deferred.promise;
    }

    return {
        // Basic functions
        GET: function (url, data) {
            return request('GET', url, data);
        },
        POST: function (url, data) {
            return request('POST', url, data);
        },

        // Functions
        getWorkers: function () {
            //return request('GET', '/api/worker/all');
            return mock(function () {
                var objs = [];
                for (var i = 0; i < 10; i++) {
                    objs.push({
                        Name: chance.first(),
                        CustomerId: i
                        
                    });
                }
                return objs;
            }, 1500);
        }
    };
};
},{}],6:[function(require,module,exports){
module.exports = function ($state) {


    console.log("d123");

    this.test = function () {
        console.log("test");
    }

    this.goTodepartment = function () {
        $state.go('department');
    }
    //$scope.goToDepartment =  function()
    //{
    //    $state.go('department');
    //}
}
},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29uZmlnL3JvdXRlcy5qcyIsImFwcC9jb250cm9sbGVycy9tYWluLmpzIiwiYXBwL2VudHJ5LmpzIiwiYXBwL3NlcnZpY2VzL0JhY2tlbmRTZXJ2aWNlLmpzIiwiYXBwL3NlcnZpY2VzL2FwaS5qcyIsImFwcC9zZXJ2aWNlcy9tZW51U2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvbWFpbicpO1xyXG5cclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcblxyXG4gICAgIC5zdGF0ZSgnbWFpbicsIHtcclxuICAgICAgICAgdXJsOiAnL21haW4nLFxyXG4gICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvdmlld3MvbWFpbi9tYWluLmh0bWwnLFxyXG4gICAgICAgICBjb250cm9sbGVyOiByZXF1aXJlKCdjb250cm9sbGVycy9tYWluLmpzJylcclxuICAgICB9KVxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJhY2tlbmRTZXJ2aWNlLCAkc3RhdGUsIG1lbnVTZXJ2aWNlKSB7XHJcblxyXG4gICAgLy92YXIgZGF0YSA9IHt9O1xyXG4gICAgLy9kYXRhW1wicHJvdmlkZXJJZFwiXSA9IDE7XHJcbiAgICAvL2RhdGFbXCJyb3RhdGlvbklkXCJdID0gMDtcclxuXHJcbiAgICAvLyRzY29wZS5vcmRlcnMgPSB7fTtcclxuICAgIC8vJHNjb3BlLnJvdGV0aW9ucyA9IHt9O1xyXG5cclxuICAgIC8vJHNjb3BlLmRhdGU7XHJcbiAgICAvLy8vZnVuY3Rpb24gY2FsbFxyXG4gICAgLy8vLyAkc2NvcGUuR2V0RGF0YSgpO1xyXG4gICAgLy9CYWNrZW5kU2VydmljZS5HZXRSb3RldGlvbnMoMSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAvLyAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgIGlmIChyZXNwb25zZS5kYXRhW1wiRXJyb3JcIl0gIT0gbnVsbCkge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgJHNjb3BlLnJvdGV0aW9ucyA9IHJlc3BvbnNlLmRhdGEuRGF0YTtcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBOb3RvayBcIilcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL30pO1xyXG5cclxuICAgIC8vJHNjb3BlLnNlbGVjdGVkSXRlbSA9IFwiMFwiO1xyXG5cclxuICAgIC8vZ2V0RGF0YSgpO1xyXG5cclxuICAgIC8vZnVuY3Rpb24gZ2V0RGF0YSgpIHtcclxuXHJcbiAgICAvLyAgICB2YXIgY291bnQgPSBPYmplY3Qua2V5cygkc2NvcGUuc2VsZWN0ZWRJdGVtKS5sZW5ndGg7XHJcblxyXG4gICAgLy8gICAgZGF0YVtcInByb3ZpZGVySWRcIl0gPSAxOy8vVE9ETzogTmVlZCB0byBjaGFuZ2UgaXQgdG8gZHluYW1pYyBwYXJhbSBmcm9tIGxvZ2luXHJcblxyXG4gICAgLy8gICAgZGF0YVtcInJvdGF0aW9uSWRcIl0gPSBjb3VudCA9PSAwID8gMCA6ICRzY29wZS5zZWxlY3RlZEl0ZW07Ly9EaW1hIFBsZWFzZSBmaXggdGhpcyBzaGl0XHJcblxyXG4gICAgLy8gICAgZGF0YVtcImRhdGVcIl0gPSAkc2NvcGUuZGF0ZSA9PSB1bmRlZmluZWQgPyAwIDogJHNjb3BlLmRhdGU7XHJcblxyXG4gICAgLy8gICAgQmFja2VuZFNlcnZpY2UuZ2V0QWxsT3JkZXJzKGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvLyAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbXCJFcnJvclwiXSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAkc2NvcGUub3JkZXJzID0gcmVzcG9uc2UuZGF0YS5EYXRhO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIE5vdG9rIFwiKVxyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvLyRzY29wZS5jaGFuZ2VPcmRlciA9IGZ1bmN0aW9uKClcclxuICAgIC8veyAgICAgICBcclxuICAgIC8vICAgIEJhY2tlbmRTZXJ2aWNlLnRyaWdnZXJBY2NvdW50aW5nKCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAvLyAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbXCJFcnJvclwiXSAhPSBudWxsKSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB3aGlsZSBjb25maWdcIik7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPayBDb25maWcgY2hhbmdlZFwiKTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pO1xyXG5cclxuICAgIC8vfVxyXG4gICAgLy8vL05FVyBcclxuICAgIC8vJHNjb3BlLkdldERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgIC8vICAgIGRhdGFbXCJwcm92aWRlcklkXCJdID0gMTsvL05lZWQgdG8gY2hhbmdlIGl0IHRvIGR5bmFtaWMgcGFyYW0gZnJvbSBsb2dpblxyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCIkc2NvcGUuc2VsZWN0ZWRJdGVtOiBcIiArICRzY29wZS5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJkYXRlIFwiICsgJHNjb3BlLmRhdGUpO1xyXG4gICAgLy8gICAgZGF0YVtcInJvdGF0aW9uSWRcIl0gPSAkc2NvcGUuc2VsZWN0ZWRJdGVtOy8vRGltYSBQbGVhc2UgZml4IHRoaXMgc2hpdFxyXG5cclxuXHJcbiAgICAvLyAgICBkYXRhW1wiZGF0ZVwiXSA9ICRzY29wZS5kYXRlO1xyXG5cclxuICAgIC8vICAgIEJhY2tlbmRTZXJ2aWNlLmdldEFsbE9yZGVycyhkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVtcIkVycm9yXCJdICE9IG51bGwpIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICAkc2NvcGUub3JkZXJzID0gcmVzcG9uc2UuZGF0YS5EYXRhO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBOb3RvayBcIilcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy8kc2NvcGUuc2V0Um9sZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcIkRhdGFcIiwgZGF0YSlcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwiUm93IENsaWNrZWRcIiwgZGF0YSk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvLy8vQmFja2VuZFNlcnZpY2UuZ2V0QWxsT3JkZXJzKGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgLy8vLyAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgLy8vLyAgICBkYXRhW1wicHJvdmlkZXJJZFwiXSA9IDE7XHJcbiAgICAvLy8vICAgIGRhdGFbXCJyb3RhdGlvbklkXCJdID0gMTtcclxuICAgIC8vLy8gICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgIC8vLy8gICAgICAgIGlmIChyZXNwb25zZS5kYXRhW1wiRXJyb3JcIl0gIT0gbnVsbCkge1xyXG4gICAgLy8vLyAgICAgICAgICAgICRzY29wZS5vcmRlcnMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAvLy8vICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm9yZGVycyk7XHJcbiAgICAvLy8vICAgICAgICB9XHJcbiAgICAvLy8vICAgICAgICBlbHNlIHtcclxuICAgIC8vLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgTm90b2sgXCIpXHJcbiAgICAvLy8vICAgICAgICB9XHJcbiAgICAvLy8vICAgIH1cclxuICAgIC8vLy99KTtcclxuXHJcbiAgICAvLyRzY29wZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gICAgdmFyIGRhdGEgPSB7fTtcclxuICAgIC8vICAgIGRhdGFbXCJwcm92aWRlcklkXCJdID0gMTtcclxuICAgIC8vICAgIGRhdGFbXCJyb3RhdGlvbklkXCJdID0gJHNjb3BlLnNlbGVjdGVkSXRlbTtcclxuXHJcbiAgICAvLyAgICBCYWNrZW5kU2VydmljZS5nZXRBbGxPcmRlcnMoZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAvLyAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbXCJFcnJvclwiXSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAkc2NvcGUub3JkZXJzID0gcmVzcG9uc2UuZGF0YS5EYXRhO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm9yZGVycyk7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIE5vdG9rIFwiKVxyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSk7XHJcblxyXG4gICAgLy8gICAgLy8gdXNlICRzY29wZS5zZWxlY3RlZEl0ZW0uY29kZSBhbmQgJHNjb3BlLnNlbGVjdGVkSXRlbS5uYW1lIGhlcmVcclxuICAgIC8vICAgIC8vIGZvciBvdGhlciBzdHVmZiAuLi5cclxuICAgIC8vfVxyXG5cclxuICAgIC8vJHNjb3BlLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgIGdldERhdGEoKTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vJHNjb3BlLnByaW50RXhhbXBsZSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgIC8vICAgIHByaW50U3R5bGUoaWQpO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy8kc2NvcGUuZ29Ub0RlcGFydG1lbnQxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZ29Ub0RlcGFydG1lbnRcIik7XHJcbiAgICAvLyAgICBtZW51U2VydmljZS5nb1RvRGVwYXJ0bWVudCgpO1xyXG5cclxuICAgIC8vICAgICRzdGF0ZS5nbygnZGVwYXJ0bWVudCcpO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy8vL0dpbGl4XHJcbiAgICAvL2Z1bmN0aW9uIHByaW50U3R5bGUoaWQpIHtcclxuICAgIC8vICAgIHZhciBkaXZUb1ByaW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJkaXZUb1ByaW50OlwiICsgZGl2VG9QcmludCk7XHJcbiAgICAvLyAgICBpZiAoZGl2VG9QcmludCAhPSBbXSkge1xyXG4gICAgLy8gICAgICAgIG5ld1dpbiA9IHdpbmRvdy5vcGVuKFwiXCIpO1xyXG4gICAgLy8gICAgICAgIG5ld1dpbi5kb2N1bWVudC53cml0ZShkaXZUb1ByaW50Lm91dGVySFRNTCk7XHJcbiAgICAvLyAgICAgICAgbmV3V2luLnByaW50KCk7XHJcbiAgICAvLyAgICAgICAgbmV3V2luLmNsb3NlKCk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL31cclxuXHJcblxyXG59IiwiYW5ndWxhci5tb2R1bGUoJ2J5Q2xpY2snLCBbJ3VpLnJvdXRlcicsICdqa3VyaS5kYXRlcGlja2VyJywgJ3VpLmJvb3RzdHJhcCddKVxyXG4gICAgLy8gRGlyZWN0aXZlc1xyXG4gICAgLy8uZGlyZWN0aXZlKC4uLi4pXHJcblxyXG4gICAgLy8gU2VydmljZXNcclxuICAgIC5zZXJ2aWNlKCdBUEknLCByZXF1aXJlKCcuL3NlcnZpY2VzL2FwaS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ0JhY2tlbmRTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9CYWNrZW5kU2VydmljZS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ21lbnVTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9tZW51U2VydmljZS5qcycpKVxyXG5cclxuICAgIC8vIFJvdXRpbmdcclxuICAgIC5jb25maWcocmVxdWlyZSgnLi9jb25maWcvcm91dGVzLmpzJykpXHJcblxyXG4gICAgLy8gQ29udHJvbGxlcnNcclxuICAgIC5jb250cm9sbGVyKCdtYWluQ29udHJvbGxlcicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdsb2dpbicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdtYWluJywgZnVuY3Rpb24gKCkgeyB9KVxyXG4gICAgLmNvbnRyb2xsZXIoJ3VwbG9hZGNvbnRlbnQnLCBmdW5jdGlvbiAoKSB7IH0pXHJcbiAgICAuY29udHJvbGxlcignZGVwYXJ0bWVudCcsIGZ1bmN0aW9uICgpIHsgfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhY2tlbmRfc2VydmljZSgkcSwgJGh0dHApIHtcclxuXHJcbiAgICB0aGlzLmxvZ2luID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2VyL2xvZ2luJywgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEFsbE9yZGVycyA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL29yZGVyL2dldG9yZGVycy8nLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgLy8gJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0QWxsT3JkZXJzQnRSb3RhdGlvbiA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvb3JkZXIvZ2V0b3JkZXJzLycsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGVuIG9idGFpbmluZyBkaWN0aW9uYXJ5IGZpbGUgZm9yIGxhbmd1YWdlcyEnO1xyXG4gICAgICAgICAgICAvLyAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5HZXRSb3RldGlvbnMgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL29yZGVyL2dldFJvdGF0aW9ucy8nICsgaWQpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGVuIG9idGFpbmluZyBkaWN0aW9uYXJ5IGZpbGUgZm9yIGxhbmd1YWdlcyEnO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5HZXRBbGxQcm9kdWN0c0J5Q2F0ZWdvcnlOYW1lID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvb3JkZXIvZ2V0cHJvZHVjdHNjYXRlZ29yeS8nLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgLy8gJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuR2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvb3JkZXIvZ2V0Y2F0ZWdvcmllcy8nICsgaWQpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGVuIG9idGFpbmluZyBkaWN0aW9uYXJ5IGZpbGUgZm9yIGxhbmd1YWdlcyEnO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50cmlnZ2VyQWNjb3VudGluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL29yZGVyL3RyaWdnZXJhY2NvdW50aW5nJylcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoaWxlIHRyaWdnZXIgYWNjb3VudGluZyAnO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgXHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHEsICRodHRwKSB7XHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkZWZlcnJlcy5yZWplY3QoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW9jayhmdW5jLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoZigpKTtcclxuICAgICAgICB9LCB0aW1lb3V0LCBmdW5jKTtcclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIEJhc2ljIGZ1bmN0aW9uc1xyXG4gICAgICAgIEdFVDogZnVuY3Rpb24gKHVybCwgZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCgnR0VUJywgdXJsLCBkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIFBPU1Q6IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoJ1BPU1QnLCB1cmwsIGRhdGEpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIEZ1bmN0aW9uc1xyXG4gICAgICAgIGdldFdvcmtlcnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9yZXR1cm4gcmVxdWVzdCgnR0VUJywgJy9hcGkvd29ya2VyL2FsbCcpO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9jayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTogY2hhbmNlLmZpcnN0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbWVySWQ6IGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqcztcclxuICAgICAgICAgICAgfSwgMTUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc3RhdGUpIHtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJkMTIzXCIpO1xyXG5cclxuICAgIHRoaXMudGVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nb1RvZGVwYXJ0bWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2RlcGFydG1lbnQnKTtcclxuICAgIH1cclxuICAgIC8vJHNjb3BlLmdvVG9EZXBhcnRtZW50ID0gIGZ1bmN0aW9uKClcclxuICAgIC8ve1xyXG4gICAgLy8gICAgJHN0YXRlLmdvKCdkZXBhcnRtZW50Jyk7XHJcbiAgICAvL31cclxufSJdfQ==
