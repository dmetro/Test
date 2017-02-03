(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/main');

    $stateProvider

     .state('main', {
         url: '/main',
         templateUrl: '/app/views/main/main.html',
         controller: require('controllers/main.js')
     })
     .state('productPage', {
        url: '/productPage',
        templateUrl: 'app/views/productPage/productPage.html',
        controller: require('controllers/product.js')
    })

};
},{"controllers/main.js":2,"controllers/product.js":3}],2:[function(require,module,exports){
module.exports = function ($scope, BackendService, $state, dataService) {

    $scope.products = [];

    BackendService.getAllProducts().then(function (response) {

        $scope.products = [
        { name: 'blblba', price: '21:99', info: 'TSee more snippets like this online store item at , blah', pic: 'https://cdn.atlassbx.com/FB/11087209645403/AZR_FY17_language_HE_IL_728x90_BAN_Sept-16.png' },
        { name: 'blblba2', price: '25:99', info: 'The equals2 operator does See more snippets like this online store item at blah, blah', pic: 'https://i.stack.imgur.com/wfMTF.jpg?s=328&g=1' },
        { name: 'blblba3', price: '20:99', info: 'The See more snippets like this online store item at  equals3 operator does blah, blah', pic: 'http://placehold.it/320x150' },
        { name: 'blblba4', price: '250:99', info: 'The equals4 operator does blah, blahSee more snippets like this online store item at ', pic: 'http://placehold.it/320x150' }
        ]

        //var products = {};
        //data["providerId"] = 1;
        //data["rotationId"] = 1;
        if (response != null) {
            if (response.data["Error"] != null) {
                //$scope.products = response.data.Data;
                console.log("response: " , response);
            }
            else {
                console.log("Issue")
            }
        }
    });

    $scope.loadMore = function()
    {
        //console.log("loadMore");
        var mm = [
        { name: 'blblba6', price: '21:99', info: 'TSee more snippets like this online store item at , blah', pic: 'https://cdn.atlassbx.com/FB/11087209645403/AZR_FY17_language_HE_IL_728x90_BAN_Sept-16.png' },
        { name: 'blblba26', price: '25:99', info: 'The equals2 operator does See more snippets like this online store item at blah, blah', pic: 'https://i.stack.imgur.com/wfMTF.jpg?s=328&g=1' },
        { name: 'blblba343', price: '20:99', info: 'The See more snippets like this online store item at  equals3 operator does blah, blah', pic: 'http://placehold.it/320x150' },
        { name: 'blblba684', price: '250:99', info: 'The equals4 operator does blah, blahSee more snippets like this online store item at ', pic: 'http://placehold.it/320x150' }
        ];

        for (var i = 0; i < mm.length; i++) {
            $scope.products.push(mm[i]);
        }
    }

    $scope.clickOnProduct = function(product)
    {
        dataService.setName(product.name);
        dataService.setPrice(product.price);
        dataService.setInfo(product.info);
        dataService.setPic(product.pic);
        $state.go('productPage');
    }

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
module.exports = function ($scope, BackendService, $state, dataService) {

    var product = dataService.product();
    if (!isEmpty(product)) {
        console.log("product: ", product);
    } else {
        //var cookieWObject = $cookieStore.getObject('cookieName');
        console.log("empty");
    }
    console.log(product);

    function isEmpty(obj) {
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }
}
},{}],4:[function(require,module,exports){
angular.module('byClick', ['ui.router', 'jkuri.datepicker', 'ui.bootstrap'])
    // Directives
    //.directive(....)

    // Services
    .service('API', require('./services/api.js'))
    .service('BackendService', require('./services/BackendService.js'))
    .service('menuService', require('./services/menuService.js'))
    .service('dataService', require('./services/dataService.js'))

    // Routing
    .config(require('./config/routes.js'))

    // Controllers
    .controller('mainController', function () { })
    .controller('login', function () { })
    .controller('main', function () { })
    .controller('uploadcontent', function () { })
    .controller('department', function () { })
    .controller('product', function () { })
},{"./config/routes.js":1,"./services/BackendService.js":5,"./services/api.js":6,"./services/dataService.js":7,"./services/menuService.js":8}],5:[function(require,module,exports){
module.exports = function backend_service($q, $http) {

    this.getAllProducts = function () {
        return $http.post('/api/product/getproducts')
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
module.exports = function ($state) {

    this.productData = { };

    this.product = function () {
        return this.productData;
    };

    this.setPrice = function (price) {
        this.productData.price = price;
    };
    this.getPrice = function () {
        return this.productData.price;
    };

    this.setName = function (name) {
        this.productData.name = name;
    };
    this.getName = function () {
        return this.productData.name;
    };

    this.setInfo = function (info) {
        this.productData.info = info;
    };
    this.getInfo = function () {
        return this.productData.info;
    };

    this.setPic = function (pic) {
        this.productData.pic = pic;
    };
    this.getPic = function () {
        return this.productData.info;
    };

}
},{}],8:[function(require,module,exports){
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
},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29uZmlnL3JvdXRlcy5qcyIsImFwcC9jb250cm9sbGVycy9tYWluLmpzIiwiYXBwL2NvbnRyb2xsZXJzL3Byb2R1Y3QuanMiLCJhcHAvZW50cnkuanMiLCJhcHAvc2VydmljZXMvQmFja2VuZFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvYXBpLmpzIiwiYXBwL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLmpzIiwiYXBwL3NlcnZpY2VzL21lbnVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL21haW4nKTtcclxuXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG5cclxuICAgICAuc3RhdGUoJ21haW4nLCB7XHJcbiAgICAgICAgIHVybDogJy9tYWluJyxcclxuICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL3ZpZXdzL21haW4vbWFpbi5odG1sJyxcclxuICAgICAgICAgY29udHJvbGxlcjogcmVxdWlyZSgnY29udHJvbGxlcnMvbWFpbi5qcycpXHJcbiAgICAgfSlcclxuICAgICAuc3RhdGUoJ3Byb2R1Y3RQYWdlJywge1xyXG4gICAgICAgIHVybDogJy9wcm9kdWN0UGFnZScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdmlld3MvcHJvZHVjdFBhZ2UvcHJvZHVjdFBhZ2UuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogcmVxdWlyZSgnY29udHJvbGxlcnMvcHJvZHVjdC5qcycpXHJcbiAgICB9KVxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJhY2tlbmRTZXJ2aWNlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgJHNjb3BlLnByb2R1Y3RzID0gW107XHJcblxyXG4gICAgQmFja2VuZFNlcnZpY2UuZ2V0QWxsUHJvZHVjdHMoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAkc2NvcGUucHJvZHVjdHMgPSBbXHJcbiAgICAgICAgeyBuYW1lOiAnYmxibGJhJywgcHJpY2U6ICcyMTo5OScsIGluZm86ICdUU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0ICwgYmxhaCcsIHBpYzogJ2h0dHBzOi8vY2RuLmF0bGFzc2J4LmNvbS9GQi8xMTA4NzIwOTY0NTQwMy9BWlJfRlkxN19sYW5ndWFnZV9IRV9JTF83Mjh4OTBfQkFOX1NlcHQtMTYucG5nJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2JsYmxiYTInLCBwcmljZTogJzI1Ojk5JywgaW5mbzogJ1RoZSBlcXVhbHMyIG9wZXJhdG9yIGRvZXMgU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0IGJsYWgsIGJsYWgnLCBwaWM6ICdodHRwczovL2kuc3RhY2suaW1ndXIuY29tL3dmTVRGLmpwZz9zPTMyOCZnPTEnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYmxibGJhMycsIHByaWNlOiAnMjA6OTknLCBpbmZvOiAnVGhlIFNlZSBtb3JlIHNuaXBwZXRzIGxpa2UgdGhpcyBvbmxpbmUgc3RvcmUgaXRlbSBhdCAgZXF1YWxzMyBvcGVyYXRvciBkb2VzIGJsYWgsIGJsYWgnLCBwaWM6ICdodHRwOi8vcGxhY2Vob2xkLml0LzMyMHgxNTAnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYmxibGJhNCcsIHByaWNlOiAnMjUwOjk5JywgaW5mbzogJ1RoZSBlcXVhbHM0IG9wZXJhdG9yIGRvZXMgYmxhaCwgYmxhaFNlZSBtb3JlIHNuaXBwZXRzIGxpa2UgdGhpcyBvbmxpbmUgc3RvcmUgaXRlbSBhdCAnLCBwaWM6ICdodHRwOi8vcGxhY2Vob2xkLml0LzMyMHgxNTAnIH1cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIC8vdmFyIHByb2R1Y3RzID0ge307XHJcbiAgICAgICAgLy9kYXRhW1wicHJvdmlkZXJJZFwiXSA9IDE7XHJcbiAgICAgICAgLy9kYXRhW1wicm90YXRpb25JZFwiXSA9IDE7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbXCJFcnJvclwiXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyRzY29wZS5wcm9kdWN0cyA9IHJlc3BvbnNlLmRhdGEuRGF0YTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzcG9uc2U6IFwiICwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJc3N1ZVwiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmxvYWRNb3JlID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJsb2FkTW9yZVwiKTtcclxuICAgICAgICB2YXIgbW0gPSBbXHJcbiAgICAgICAgeyBuYW1lOiAnYmxibGJhNicsIHByaWNlOiAnMjE6OTknLCBpbmZvOiAnVFNlZSBtb3JlIHNuaXBwZXRzIGxpa2UgdGhpcyBvbmxpbmUgc3RvcmUgaXRlbSBhdCAsIGJsYWgnLCBwaWM6ICdodHRwczovL2Nkbi5hdGxhc3NieC5jb20vRkIvMTEwODcyMDk2NDU0MDMvQVpSX0ZZMTdfbGFuZ3VhZ2VfSEVfSUxfNzI4eDkwX0JBTl9TZXB0LTE2LnBuZycgfSxcclxuICAgICAgICB7IG5hbWU6ICdibGJsYmEyNicsIHByaWNlOiAnMjU6OTknLCBpbmZvOiAnVGhlIGVxdWFsczIgb3BlcmF0b3IgZG9lcyBTZWUgbW9yZSBzbmlwcGV0cyBsaWtlIHRoaXMgb25saW5lIHN0b3JlIGl0ZW0gYXQgYmxhaCwgYmxhaCcsIHBpYzogJ2h0dHBzOi8vaS5zdGFjay5pbWd1ci5jb20vd2ZNVEYuanBnP3M9MzI4Jmc9MScgfSxcclxuICAgICAgICB7IG5hbWU6ICdibGJsYmEzNDMnLCBwcmljZTogJzIwOjk5JywgaW5mbzogJ1RoZSBTZWUgbW9yZSBzbmlwcGV0cyBsaWtlIHRoaXMgb25saW5lIHN0b3JlIGl0ZW0gYXQgIGVxdWFsczMgb3BlcmF0b3IgZG9lcyBibGFoLCBibGFoJywgcGljOiAnaHR0cDovL3BsYWNlaG9sZC5pdC8zMjB4MTUwJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2JsYmxiYTY4NCcsIHByaWNlOiAnMjUwOjk5JywgaW5mbzogJ1RoZSBlcXVhbHM0IG9wZXJhdG9yIGRvZXMgYmxhaCwgYmxhaFNlZSBtb3JlIHNuaXBwZXRzIGxpa2UgdGhpcyBvbmxpbmUgc3RvcmUgaXRlbSBhdCAnLCBwaWM6ICdodHRwOi8vcGxhY2Vob2xkLml0LzMyMHgxNTAnIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1tLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5wcm9kdWN0cy5wdXNoKG1tW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmNsaWNrT25Qcm9kdWN0ID0gZnVuY3Rpb24ocHJvZHVjdClcclxuICAgIHtcclxuICAgICAgICBkYXRhU2VydmljZS5zZXROYW1lKHByb2R1Y3QubmFtZSk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2V0UHJpY2UocHJvZHVjdC5wcmljZSk7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2V0SW5mbyhwcm9kdWN0LmluZm8pO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNldFBpYyhwcm9kdWN0LnBpYyk7XHJcbiAgICAgICAgJHN0YXRlLmdvKCdwcm9kdWN0UGFnZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdmFyIGRhdGEgPSB7fTtcclxuICAgIC8vZGF0YVtcInByb3ZpZGVySWRcIl0gPSAxO1xyXG4gICAgLy9kYXRhW1wicm90YXRpb25JZFwiXSA9IDA7XHJcblxyXG4gICAgLy8kc2NvcGUub3JkZXJzID0ge307XHJcbiAgICAvLyRzY29wZS5yb3RldGlvbnMgPSB7fTtcclxuXHJcbiAgICAvLyRzY29wZS5kYXRlO1xyXG4gICAgLy8vL2Z1bmN0aW9uIGNhbGxcclxuICAgIC8vLy8gJHNjb3BlLkdldERhdGEoKTtcclxuICAgIC8vQmFja2VuZFNlcnZpY2UuR2V0Um90ZXRpb25zKDEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgLy8gICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVtcIkVycm9yXCJdICE9IG51bGwpIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICRzY29wZS5yb3RldGlvbnMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgTm90b2sgXCIpXHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfVxyXG4gICAgLy99KTtcclxuXHJcbiAgICAvLyRzY29wZS5zZWxlY3RlZEl0ZW0gPSBcIjBcIjtcclxuXHJcbiAgICAvL2dldERhdGEoKTtcclxuXHJcbiAgICAvL2Z1bmN0aW9uIGdldERhdGEoKSB7XHJcblxyXG4gICAgLy8gICAgdmFyIGNvdW50ID0gT2JqZWN0LmtleXMoJHNjb3BlLnNlbGVjdGVkSXRlbSkubGVuZ3RoO1xyXG5cclxuICAgIC8vICAgIGRhdGFbXCJwcm92aWRlcklkXCJdID0gMTsvL1RPRE86IE5lZWQgdG8gY2hhbmdlIGl0IHRvIGR5bmFtaWMgcGFyYW0gZnJvbSBsb2dpblxyXG5cclxuICAgIC8vICAgIGRhdGFbXCJyb3RhdGlvbklkXCJdID0gY291bnQgPT0gMCA/IDAgOiAkc2NvcGUuc2VsZWN0ZWRJdGVtOy8vRGltYSBQbGVhc2UgZml4IHRoaXMgc2hpdFxyXG5cclxuICAgIC8vICAgIGRhdGFbXCJkYXRlXCJdID0gJHNjb3BlLmRhdGUgPT0gdW5kZWZpbmVkID8gMCA6ICRzY29wZS5kYXRlO1xyXG5cclxuICAgIC8vICAgIEJhY2tlbmRTZXJ2aWNlLmdldEFsbE9yZGVycyhkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy8gICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhW1wiRXJyb3JcIl0gIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgJHNjb3BlLm9yZGVycyA9IHJlc3BvbnNlLmRhdGEuRGF0YTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBOb3RvayBcIilcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy8kc2NvcGUuY2hhbmdlT3JkZXIgPSBmdW5jdGlvbigpXHJcbiAgICAvL3sgICAgICAgXHJcbiAgICAvLyAgICBCYWNrZW5kU2VydmljZS50cmlnZ2VyQWNjb3VudGluZygpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgLy8gICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhW1wiRXJyb3JcIl0gIT0gbnVsbCkge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hpbGUgY29uZmlnXCIpO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT2sgQ29uZmlnIGNoYW5nZWRcIik7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9KTtcclxuXHJcbiAgICAvL31cclxuICAgIC8vLy9ORVcgXHJcbiAgICAvLyRzY29wZS5HZXREYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAvLyAgICBkYXRhW1wicHJvdmlkZXJJZFwiXSA9IDE7Ly9OZWVkIHRvIGNoYW5nZSBpdCB0byBkeW5hbWljIHBhcmFtIGZyb20gbG9naW5cclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwiJHNjb3BlLnNlbGVjdGVkSXRlbTogXCIgKyAkc2NvcGUuc2VsZWN0ZWRJdGVtKTtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZGF0ZSBcIiArICRzY29wZS5kYXRlKTtcclxuICAgIC8vICAgIGRhdGFbXCJyb3RhdGlvbklkXCJdID0gJHNjb3BlLnNlbGVjdGVkSXRlbTsvL0RpbWEgUGxlYXNlIGZpeCB0aGlzIHNoaXRcclxuXHJcblxyXG4gICAgLy8gICAgZGF0YVtcImRhdGVcIl0gPSAkc2NvcGUuZGF0ZTtcclxuXHJcbiAgICAvLyAgICBCYWNrZW5kU2VydmljZS5nZXRBbGxPcmRlcnMoZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAvLyAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbXCJFcnJvclwiXSAhPSBudWxsKSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgJHNjb3BlLm9yZGVycyA9IHJlc3BvbnNlLmRhdGEuRGF0YTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgTm90b2sgXCIpXHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vJHNjb3BlLnNldFJvbGUgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRhXCIsIGRhdGEpXHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcIlJvdyBDbGlja2VkXCIsIGRhdGEpO1xyXG4gICAgLy99XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8kc2NvcGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vICAgIHZhciBkYXRhID0ge307XHJcbiAgICAvLyAgICBkYXRhW1wicHJvdmlkZXJJZFwiXSA9IDE7XHJcbiAgICAvLyAgICBkYXRhW1wicm90YXRpb25JZFwiXSA9ICRzY29wZS5zZWxlY3RlZEl0ZW07XHJcblxyXG4gICAgLy8gICAgQmFja2VuZFNlcnZpY2UuZ2V0QWxsT3JkZXJzKGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgLy8gICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhW1wiRXJyb3JcIl0gIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgJHNjb3BlLm9yZGVycyA9IHJlc3BvbnNlLmRhdGEuRGF0YTtcclxuICAgIC8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5vcmRlcnMpO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBOb3RvayBcIilcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH0pO1xyXG5cclxuICAgIC8vICAgIC8vIHVzZSAkc2NvcGUuc2VsZWN0ZWRJdGVtLmNvZGUgYW5kICRzY29wZS5zZWxlY3RlZEl0ZW0ubmFtZSBoZXJlXHJcbiAgICAvLyAgICAvLyBmb3Igb3RoZXIgc3R1ZmYgLi4uXHJcbiAgICAvL31cclxuXHJcbiAgICAvLyRzY29wZS5zdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICBnZXREYXRhKCk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvLyRzY29wZS5wcmludEV4YW1wbGUgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAvLyAgICBwcmludFN0eWxlKGlkKTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vJHNjb3BlLmdvVG9EZXBhcnRtZW50MSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImdvVG9EZXBhcnRtZW50XCIpO1xyXG4gICAgLy8gICAgbWVudVNlcnZpY2UuZ29Ub0RlcGFydG1lbnQoKTtcclxuXHJcbiAgICAvLyAgICAkc3RhdGUuZ28oJ2RlcGFydG1lbnQnKTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vLy9HaWxpeFxyXG4gICAgLy9mdW5jdGlvbiBwcmludFN0eWxlKGlkKSB7XHJcbiAgICAvLyAgICB2YXIgZGl2VG9QcmludCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZGl2VG9QcmludDpcIiArIGRpdlRvUHJpbnQpO1xyXG4gICAgLy8gICAgaWYgKGRpdlRvUHJpbnQgIT0gW10pIHtcclxuICAgIC8vICAgICAgICBuZXdXaW4gPSB3aW5kb3cub3BlbihcIlwiKTtcclxuICAgIC8vICAgICAgICBuZXdXaW4uZG9jdW1lbnQud3JpdGUoZGl2VG9QcmludC5vdXRlckhUTUwpO1xyXG4gICAgLy8gICAgICAgIG5ld1dpbi5wcmludCgpO1xyXG4gICAgLy8gICAgICAgIG5ld1dpbi5jbG9zZSgpO1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy99XHJcblxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQmFja2VuZFNlcnZpY2UsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgcHJvZHVjdCA9IGRhdGFTZXJ2aWNlLnByb2R1Y3QoKTtcclxuICAgIGlmICghaXNFbXB0eShwcm9kdWN0KSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJvZHVjdDogXCIsIHByb2R1Y3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvL3ZhciBjb29raWVXT2JqZWN0ID0gJGNvb2tpZVN0b3JlLmdldE9iamVjdCgnY29va2llTmFtZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0VtcHR5KG9iaikge1xyXG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocHJvcCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsImFuZ3VsYXIubW9kdWxlKCdieUNsaWNrJywgWyd1aS5yb3V0ZXInLCAnamt1cmkuZGF0ZXBpY2tlcicsICd1aS5ib290c3RyYXAnXSlcclxuICAgIC8vIERpcmVjdGl2ZXNcclxuICAgIC8vLmRpcmVjdGl2ZSguLi4uKVxyXG5cclxuICAgIC8vIFNlcnZpY2VzXHJcbiAgICAuc2VydmljZSgnQVBJJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9hcGkuanMnKSlcclxuICAgIC5zZXJ2aWNlKCdCYWNrZW5kU2VydmljZScsIHJlcXVpcmUoJy4vc2VydmljZXMvQmFja2VuZFNlcnZpY2UuanMnKSlcclxuICAgIC5zZXJ2aWNlKCdtZW51U2VydmljZScsIHJlcXVpcmUoJy4vc2VydmljZXMvbWVudVNlcnZpY2UuanMnKSlcclxuICAgIC5zZXJ2aWNlKCdkYXRhU2VydmljZScsIHJlcXVpcmUoJy4vc2VydmljZXMvZGF0YVNlcnZpY2UuanMnKSlcclxuXHJcbiAgICAvLyBSb3V0aW5nXHJcbiAgICAuY29uZmlnKHJlcXVpcmUoJy4vY29uZmlnL3JvdXRlcy5qcycpKVxyXG5cclxuICAgIC8vIENvbnRyb2xsZXJzXHJcbiAgICAuY29udHJvbGxlcignbWFpbkNvbnRyb2xsZXInLCBmdW5jdGlvbiAoKSB7IH0pXHJcbiAgICAuY29udHJvbGxlcignbG9naW4nLCBmdW5jdGlvbiAoKSB7IH0pXHJcbiAgICAuY29udHJvbGxlcignbWFpbicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCd1cGxvYWRjb250ZW50JywgZnVuY3Rpb24gKCkgeyB9KVxyXG4gICAgLmNvbnRyb2xsZXIoJ2RlcGFydG1lbnQnLCBmdW5jdGlvbiAoKSB7IH0pXHJcbiAgICAuY29udHJvbGxlcigncHJvZHVjdCcsIGZ1bmN0aW9uICgpIHsgfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhY2tlbmRfc2VydmljZSgkcSwgJGh0dHApIHtcclxuXHJcbiAgICB0aGlzLmdldEFsbFByb2R1Y3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Byb2R1Y3QvZ2V0cHJvZHVjdHMnKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0QWxsT3JkZXJzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvb3JkZXIvZ2V0b3JkZXJzLycsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGVuIG9idGFpbmluZyBkaWN0aW9uYXJ5IGZpbGUgZm9yIGxhbmd1YWdlcyEnO1xyXG4gICAgICAgICAgICAvLyAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRBbGxPcmRlcnNCdFJvdGF0aW9uID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9vcmRlci9nZXRvcmRlcnMvJywgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgIC8vICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkdldFJvdGV0aW9ucyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvb3JkZXIvZ2V0Um90YXRpb25zLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkdldEFsbFByb2R1Y3RzQnlDYXRlZ29yeU5hbWUgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9vcmRlci9nZXRwcm9kdWN0c2NhdGVnb3J5LycsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGVuIG9idGFpbmluZyBkaWN0aW9uYXJ5IGZpbGUgZm9yIGxhbmd1YWdlcyEnO1xyXG4gICAgICAgICAgICAvLyAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5HZXRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9vcmRlci9nZXRjYXRlZ29yaWVzLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRyaWdnZXJBY2NvdW50aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvb3JkZXIvdHJpZ2dlcmFjY291bnRpbmcnKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hpbGUgdHJpZ2dlciBhY2NvdW50aW5nICc7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkcSwgJGh0dHApIHtcclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGEpIHtcclxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVzLnJlamVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb2NrKGZ1bmMsIHRpbWVvdXQpIHtcclxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmKCkpO1xyXG4gICAgICAgIH0sIHRpbWVvdXQsIGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gQmFzaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgR0VUOiBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwsIGRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUE9TVDogZnVuY3Rpb24gKHVybCwgZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCgnUE9TVCcsIHVybCwgZGF0YSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb25zXHJcbiAgICAgICAgZ2V0V29ya2VyczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3JldHVybiByZXF1ZXN0KCdHRVQnLCAnL2FwaS93b3JrZXIvYWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2NrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmpzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBjaGFuY2UuZmlyc3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXJJZDogaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzdGF0ZSkge1xyXG5cclxuICAgIHRoaXMucHJvZHVjdERhdGEgPSB7IH07XHJcblxyXG4gICAgdGhpcy5wcm9kdWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3REYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFByaWNlID0gZnVuY3Rpb24gKHByaWNlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0RGF0YS5wcmljZSA9IHByaWNlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0UHJpY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdERhdGEucHJpY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0RGF0YS5uYW1lID0gbmFtZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdERhdGEubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXRJbmZvID0gZnVuY3Rpb24gKGluZm8pIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3REYXRhLmluZm8gPSBpbmZvO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0SW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGF0YS5pbmZvO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFBpYyA9IGZ1bmN0aW9uIChwaWMpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3REYXRhLnBpYyA9IHBpYztcclxuICAgIH07XHJcbiAgICB0aGlzLmdldFBpYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGF0YS5pbmZvO1xyXG4gICAgfTtcclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc3RhdGUpIHtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJkMTIzXCIpO1xyXG5cclxuICAgIHRoaXMudGVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nb1RvZGVwYXJ0bWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2RlcGFydG1lbnQnKTtcclxuICAgIH1cclxuICAgIC8vJHNjb3BlLmdvVG9EZXBhcnRtZW50ID0gIGZ1bmN0aW9uKClcclxuICAgIC8ve1xyXG4gICAgLy8gICAgJHN0YXRlLmdvKCdkZXBhcnRtZW50Jyk7XHJcbiAgICAvL31cclxufSJdfQ==
