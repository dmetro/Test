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
        
        if (response != null) {
            if (response.data["Error"] != null) {
                //$scope.products = response.data.Data;
                console.log("getAllProducts() response: ", response);
                $scope.products = [
                    { name: 'blblba', price: '21:99', info: 'TSee more snippets like this online store item at , blah', pic: 'https://cdn.atlassbx.com/FB/11087209645403/AZR_FY17_language_HE_IL_728x90_BAN_Sept-16.png' },
                    { name: 'blblba2', price: '25:99', info: 'The equals2 operator does See more snippets like this online store item at blah, blah', pic: 'https://i.stack.imgur.com/wfMTF.jpg?s=328&g=1' },
                    { name: 'blblba3', price: '20:99', info: 'The See more snippets like this online store item at  equals3 operator does blah, blah', pic: 'http://placehold.it/320x150' },
                    { name: 'blblba4', price: '250:99', info: 'The equals4 operator does blah, blahSee more snippets like this online store item at ', pic: 'http://placehold.it/320x150' }
                ]
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
        $scope.product = product;
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29uZmlnL3JvdXRlcy5qcyIsImFwcC9jb250cm9sbGVycy9tYWluLmpzIiwiYXBwL2NvbnRyb2xsZXJzL3Byb2R1Y3QuanMiLCJhcHAvZW50cnkuanMiLCJhcHAvc2VydmljZXMvQmFja2VuZFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvYXBpLmpzIiwiYXBwL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLmpzIiwiYXBwL3NlcnZpY2VzL21lbnVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL21haW4nKTtcclxuXHJcbiAgICAkc3RhdGVQcm92aWRlclxyXG5cclxuICAgICAuc3RhdGUoJ21haW4nLCB7XHJcbiAgICAgICAgIHVybDogJy9tYWluJyxcclxuICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL3ZpZXdzL21haW4vbWFpbi5odG1sJyxcclxuICAgICAgICAgY29udHJvbGxlcjogcmVxdWlyZSgnY29udHJvbGxlcnMvbWFpbi5qcycpXHJcbiAgICAgfSlcclxuICAgICAuc3RhdGUoJ3Byb2R1Y3RQYWdlJywge1xyXG4gICAgICAgIHVybDogJy9wcm9kdWN0UGFnZScsXHJcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvdmlld3MvcHJvZHVjdFBhZ2UvcHJvZHVjdFBhZ2UuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogcmVxdWlyZSgnY29udHJvbGxlcnMvcHJvZHVjdC5qcycpXHJcbiAgICB9KVxyXG5cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJhY2tlbmRTZXJ2aWNlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgJHNjb3BlLnByb2R1Y3RzID0gW107XHJcblxyXG4gICAgQmFja2VuZFNlcnZpY2UuZ2V0QWxsUHJvZHVjdHMoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhW1wiRXJyb3JcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8kc2NvcGUucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEFsbFByb2R1Y3RzKCkgcmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnYmxibGJhJywgcHJpY2U6ICcyMTo5OScsIGluZm86ICdUU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0ICwgYmxhaCcsIHBpYzogJ2h0dHBzOi8vY2RuLmF0bGFzc2J4LmNvbS9GQi8xMTA4NzIwOTY0NTQwMy9BWlJfRlkxN19sYW5ndWFnZV9IRV9JTF83Mjh4OTBfQkFOX1NlcHQtMTYucG5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ2JsYmxiYTInLCBwcmljZTogJzI1Ojk5JywgaW5mbzogJ1RoZSBlcXVhbHMyIG9wZXJhdG9yIGRvZXMgU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0IGJsYWgsIGJsYWgnLCBwaWM6ICdodHRwczovL2kuc3RhY2suaW1ndXIuY29tL3dmTVRGLmpwZz9zPTMyOCZnPTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnYmxibGJhMycsIHByaWNlOiAnMjA6OTknLCBpbmZvOiAnVGhlIFNlZSBtb3JlIHNuaXBwZXRzIGxpa2UgdGhpcyBvbmxpbmUgc3RvcmUgaXRlbSBhdCAgZXF1YWxzMyBvcGVyYXRvciBkb2VzIGJsYWgsIGJsYWgnLCBwaWM6ICdodHRwOi8vcGxhY2Vob2xkLml0LzMyMHgxNTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnYmxibGJhNCcsIHByaWNlOiAnMjUwOjk5JywgaW5mbzogJ1RoZSBlcXVhbHM0IG9wZXJhdG9yIGRvZXMgYmxhaCwgYmxhaFNlZSBtb3JlIHNuaXBwZXRzIGxpa2UgdGhpcyBvbmxpbmUgc3RvcmUgaXRlbSBhdCAnLCBwaWM6ICdodHRwOi8vcGxhY2Vob2xkLml0LzMyMHgxNTAnIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXNzdWVcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5sb2FkTW9yZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZE1vcmVcIik7XHJcbiAgICAgICAgdmFyIG1tID0gW1xyXG4gICAgICAgIHsgbmFtZTogJ2JsYmxiYTYnLCBwcmljZTogJzIxOjk5JywgaW5mbzogJ1RTZWUgbW9yZSBzbmlwcGV0cyBsaWtlIHRoaXMgb25saW5lIHN0b3JlIGl0ZW0gYXQgLCBibGFoJywgcGljOiAnaHR0cHM6Ly9jZG4uYXRsYXNzYnguY29tL0ZCLzExMDg3MjA5NjQ1NDAzL0FaUl9GWTE3X2xhbmd1YWdlX0hFX0lMXzcyOHg5MF9CQU5fU2VwdC0xNi5wbmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYmxibGJhMjYnLCBwcmljZTogJzI1Ojk5JywgaW5mbzogJ1RoZSBlcXVhbHMyIG9wZXJhdG9yIGRvZXMgU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0IGJsYWgsIGJsYWgnLCBwaWM6ICdodHRwczovL2kuc3RhY2suaW1ndXIuY29tL3dmTVRGLmpwZz9zPTMyOCZnPTEnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYmxibGJhMzQzJywgcHJpY2U6ICcyMDo5OScsIGluZm86ICdUaGUgU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0ICBlcXVhbHMzIG9wZXJhdG9yIGRvZXMgYmxhaCwgYmxhaCcsIHBpYzogJ2h0dHA6Ly9wbGFjZWhvbGQuaXQvMzIweDE1MCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdibGJsYmE2ODQnLCBwcmljZTogJzI1MDo5OScsIGluZm86ICdUaGUgZXF1YWxzNCBvcGVyYXRvciBkb2VzIGJsYWgsIGJsYWhTZWUgbW9yZSBzbmlwcGV0cyBsaWtlIHRoaXMgb25saW5lIHN0b3JlIGl0ZW0gYXQgJywgcGljOiAnaHR0cDovL3BsYWNlaG9sZC5pdC8zMjB4MTUwJyB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdHMucHVzaChtbVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5jbGlja09uUHJvZHVjdCA9IGZ1bmN0aW9uKHByb2R1Y3QpXHJcbiAgICB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2V0TmFtZShwcm9kdWN0Lm5hbWUpO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNldFByaWNlKHByb2R1Y3QucHJpY2UpO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNldEluZm8ocHJvZHVjdC5pbmZvKTtcclxuICAgICAgICBkYXRhU2VydmljZS5zZXRQaWMocHJvZHVjdC5waWMpO1xyXG4gICAgICAgICRzdGF0ZS5nbygncHJvZHVjdFBhZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3ZhciBkYXRhID0ge307XHJcbiAgICAvL2RhdGFbXCJwcm92aWRlcklkXCJdID0gMTtcclxuICAgIC8vZGF0YVtcInJvdGF0aW9uSWRcIl0gPSAwO1xyXG5cclxuICAgIC8vJHNjb3BlLm9yZGVycyA9IHt9O1xyXG4gICAgLy8kc2NvcGUucm90ZXRpb25zID0ge307XHJcblxyXG4gICAgLy8kc2NvcGUuZGF0ZTtcclxuICAgIC8vLy9mdW5jdGlvbiBjYWxsXHJcbiAgICAvLy8vICRzY29wZS5HZXREYXRhKCk7XHJcbiAgICAvL0JhY2tlbmRTZXJ2aWNlLkdldFJvdGV0aW9ucygxKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIC8vICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbXCJFcnJvclwiXSAhPSBudWxsKSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAkc2NvcGUucm90ZXRpb25zID0gcmVzcG9uc2UuZGF0YS5EYXRhO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIE5vdG9rIFwiKVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH1cclxuICAgIC8vfSk7XHJcblxyXG4gICAgLy8kc2NvcGUuc2VsZWN0ZWRJdGVtID0gXCIwXCI7XHJcblxyXG4gICAgLy9nZXREYXRhKCk7XHJcblxyXG4gICAgLy9mdW5jdGlvbiBnZXREYXRhKCkge1xyXG5cclxuICAgIC8vICAgIHZhciBjb3VudCA9IE9iamVjdC5rZXlzKCRzY29wZS5zZWxlY3RlZEl0ZW0pLmxlbmd0aDtcclxuXHJcbiAgICAvLyAgICBkYXRhW1wicHJvdmlkZXJJZFwiXSA9IDE7Ly9UT0RPOiBOZWVkIHRvIGNoYW5nZSBpdCB0byBkeW5hbWljIHBhcmFtIGZyb20gbG9naW5cclxuXHJcbiAgICAvLyAgICBkYXRhW1wicm90YXRpb25JZFwiXSA9IGNvdW50ID09IDAgPyAwIDogJHNjb3BlLnNlbGVjdGVkSXRlbTsvL0RpbWEgUGxlYXNlIGZpeCB0aGlzIHNoaXRcclxuXHJcbiAgICAvLyAgICBkYXRhW1wiZGF0ZVwiXSA9ICRzY29wZS5kYXRlID09IHVuZGVmaW5lZCA/IDAgOiAkc2NvcGUuZGF0ZTtcclxuXHJcbiAgICAvLyAgICBCYWNrZW5kU2VydmljZS5nZXRBbGxPcmRlcnMoZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVtcIkVycm9yXCJdICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICRzY29wZS5vcmRlcnMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgTm90b2sgXCIpXHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vJHNjb3BlLmNoYW5nZU9yZGVyID0gZnVuY3Rpb24oKVxyXG4gICAgLy97ICAgICAgIFxyXG4gICAgLy8gICAgQmFja2VuZFNlcnZpY2UudHJpZ2dlckFjY291bnRpbmcoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVtcIkVycm9yXCJdICE9IG51bGwpIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGNvbmZpZ1wiKTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9rIENvbmZpZyBjaGFuZ2VkXCIpO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSk7XHJcblxyXG4gICAgLy99XHJcbiAgICAvLy8vTkVXIFxyXG4gICAgLy8kc2NvcGUuR2V0RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgLy8gICAgZGF0YVtcInByb3ZpZGVySWRcIl0gPSAxOy8vTmVlZCB0byBjaGFuZ2UgaXQgdG8gZHluYW1pYyBwYXJhbSBmcm9tIGxvZ2luXHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcIiRzY29wZS5zZWxlY3RlZEl0ZW06IFwiICsgJHNjb3BlLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImRhdGUgXCIgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICAvLyAgICBkYXRhW1wicm90YXRpb25JZFwiXSA9ICRzY29wZS5zZWxlY3RlZEl0ZW07Ly9EaW1hIFBsZWFzZSBmaXggdGhpcyBzaGl0XHJcblxyXG5cclxuICAgIC8vICAgIGRhdGFbXCJkYXRlXCJdID0gJHNjb3BlLmRhdGU7XHJcblxyXG4gICAgLy8gICAgQmFja2VuZFNlcnZpY2UuZ2V0QWxsT3JkZXJzKGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgLy8gICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhW1wiRXJyb3JcIl0gIT0gbnVsbCkge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICRzY29wZS5vcmRlcnMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIE5vdG9rIFwiKVxyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvLyRzY29wZS5zZXRSb2xlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRGF0YVwiLCBkYXRhKVxyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJSb3cgQ2xpY2tlZFwiLCBkYXRhKTtcclxuICAgIC8vfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vJHNjb3BlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgLy8gICAgZGF0YVtcInByb3ZpZGVySWRcIl0gPSAxO1xyXG4gICAgLy8gICAgZGF0YVtcInJvdGF0aW9uSWRcIl0gPSAkc2NvcGUuc2VsZWN0ZWRJdGVtO1xyXG5cclxuICAgIC8vICAgIEJhY2tlbmRTZXJ2aWNlLmdldEFsbE9yZGVycyhkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVtcIkVycm9yXCJdICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICRzY29wZS5vcmRlcnMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUub3JkZXJzKTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgTm90b2sgXCIpXHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9KTtcclxuXHJcbiAgICAvLyAgICAvLyB1c2UgJHNjb3BlLnNlbGVjdGVkSXRlbS5jb2RlIGFuZCAkc2NvcGUuc2VsZWN0ZWRJdGVtLm5hbWUgaGVyZVxyXG4gICAgLy8gICAgLy8gZm9yIG90aGVyIHN0dWZmIC4uLlxyXG4gICAgLy99XHJcblxyXG4gICAgLy8kc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgZ2V0RGF0YSgpO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy8kc2NvcGUucHJpbnRFeGFtcGxlID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG4gICAgLy8gICAgcHJpbnRTdHlsZShpZCk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvLyRzY29wZS5nb1RvRGVwYXJ0bWVudDEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJnb1RvRGVwYXJ0bWVudFwiKTtcclxuICAgIC8vICAgIG1lbnVTZXJ2aWNlLmdvVG9EZXBhcnRtZW50KCk7XHJcblxyXG4gICAgLy8gICAgJHN0YXRlLmdvKCdkZXBhcnRtZW50Jyk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvLy8vR2lsaXhcclxuICAgIC8vZnVuY3Rpb24gcHJpbnRTdHlsZShpZCkge1xyXG4gICAgLy8gICAgdmFyIGRpdlRvUHJpbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImRpdlRvUHJpbnQ6XCIgKyBkaXZUb1ByaW50KTtcclxuICAgIC8vICAgIGlmIChkaXZUb1ByaW50ICE9IFtdKSB7XHJcbiAgICAvLyAgICAgICAgbmV3V2luID0gd2luZG93Lm9wZW4oXCJcIik7XHJcbiAgICAvLyAgICAgICAgbmV3V2luLmRvY3VtZW50LndyaXRlKGRpdlRvUHJpbnQub3V0ZXJIVE1MKTtcclxuICAgIC8vICAgICAgICBuZXdXaW4ucHJpbnQoKTtcclxuICAgIC8vICAgICAgICBuZXdXaW4uY2xvc2UoKTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vfVxyXG5cclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJhY2tlbmRTZXJ2aWNlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIHByb2R1Y3QgPSBkYXRhU2VydmljZS5wcm9kdWN0KCk7XHJcbiAgICBpZiAoIWlzRW1wdHkocHJvZHVjdCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3Q6IFwiLCBwcm9kdWN0KTtcclxuICAgICAgICAkc2NvcGUucHJvZHVjdCA9IHByb2R1Y3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vdmFyIGNvb2tpZVdPYmplY3QgPSAkY29va2llU3RvcmUuZ2V0T2JqZWN0KCdjb29raWVOYW1lJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbXB0eVwiKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiYW5ndWxhci5tb2R1bGUoJ2J5Q2xpY2snLCBbJ3VpLnJvdXRlcicsICdqa3VyaS5kYXRlcGlja2VyJywgJ3VpLmJvb3RzdHJhcCddKVxyXG4gICAgLy8gRGlyZWN0aXZlc1xyXG4gICAgLy8uZGlyZWN0aXZlKC4uLi4pXHJcblxyXG4gICAgLy8gU2VydmljZXNcclxuICAgIC5zZXJ2aWNlKCdBUEknLCByZXF1aXJlKCcuL3NlcnZpY2VzL2FwaS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ0JhY2tlbmRTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9CYWNrZW5kU2VydmljZS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ21lbnVTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9tZW51U2VydmljZS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ2RhdGFTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9kYXRhU2VydmljZS5qcycpKVxyXG5cclxuICAgIC8vIFJvdXRpbmdcclxuICAgIC5jb25maWcocmVxdWlyZSgnLi9jb25maWcvcm91dGVzLmpzJykpXHJcblxyXG4gICAgLy8gQ29udHJvbGxlcnNcclxuICAgIC5jb250cm9sbGVyKCdtYWluQ29udHJvbGxlcicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdsb2dpbicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdtYWluJywgZnVuY3Rpb24gKCkgeyB9KVxyXG4gICAgLmNvbnRyb2xsZXIoJ3VwbG9hZGNvbnRlbnQnLCBmdW5jdGlvbiAoKSB7IH0pXHJcbiAgICAuY29udHJvbGxlcignZGVwYXJ0bWVudCcsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdwcm9kdWN0JywgZnVuY3Rpb24gKCkgeyB9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFja2VuZF9zZXJ2aWNlKCRxLCAkaHR0cCkge1xyXG5cclxuICAgIHRoaXMuZ2V0QWxsUHJvZHVjdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcHJvZHVjdC9nZXRwcm9kdWN0cycpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGVuIG9idGFpbmluZyBkaWN0aW9uYXJ5IGZpbGUgZm9yIGxhbmd1YWdlcyEnO1xyXG4gICAgICAgICAgICAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRBbGxPcmRlcnMgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9vcmRlci9nZXRvcmRlcnMvJywgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgIC8vICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldEFsbE9yZGVyc0J0Um90YXRpb24gPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL29yZGVyL2dldG9yZGVycy8nLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgLy8gJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuR2V0Um90ZXRpb25zID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9vcmRlci9nZXRSb3RhdGlvbnMvJyArIGlkKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuR2V0QWxsUHJvZHVjdHNCeUNhdGVnb3J5TmFtZSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL29yZGVyL2dldHByb2R1Y3RzY2F0ZWdvcnkvJywgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgIC8vICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL29yZGVyL2dldGNhdGVnb3JpZXMvJyArIGlkKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJpZ2dlckFjY291bnRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9vcmRlci90cmlnZ2VyYWNjb3VudGluZycpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGlsZSB0cmlnZ2VyIGFjY291bnRpbmcgJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgIFxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRxLCAkaHR0cCkge1xyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGVmZXJyZXMucmVqZWN0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vY2soZnVuYywgdGltZW91dCkge1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoZikge1xyXG4gICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGYoKSk7XHJcbiAgICAgICAgfSwgdGltZW91dCwgZnVuYyk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyBCYXNpYyBmdW5jdGlvbnNcclxuICAgICAgICBHRVQ6IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoJ0dFVCcsIHVybCwgZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBQT1NUOiBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KCdQT1NUJywgdXJsLCBkYXRhKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBGdW5jdGlvbnNcclxuICAgICAgICBnZXRXb3JrZXJzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIHJlcXVlc3QoJ0dFVCcsICcvYXBpL3dvcmtlci9hbGwnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1vY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9ianMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ianMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6IGNoYW5jZS5maXJzdCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lcklkOiBpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoJHN0YXRlKSB7XHJcblxyXG4gICAgdGhpcy5wcm9kdWN0RGF0YSA9IHsgfTtcclxuXHJcbiAgICB0aGlzLnByb2R1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdERhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0UHJpY2UgPSBmdW5jdGlvbiAocHJpY2UpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3REYXRhLnByaWNlID0gcHJpY2U7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5nZXRQcmljZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGF0YS5wcmljZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXROYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3REYXRhLm5hbWUgPSBuYW1lO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGF0YS5uYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldEluZm8gPSBmdW5jdGlvbiAoaW5mbykge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdERhdGEuaW5mbyA9IGluZm87XHJcbiAgICB9O1xyXG4gICAgdGhpcy5nZXRJbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3REYXRhLmluZm87XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0UGljID0gZnVuY3Rpb24gKHBpYykge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdERhdGEucGljID0gcGljO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0UGljID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3REYXRhLmluZm87XHJcbiAgICB9O1xyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzdGF0ZSkge1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImQxMjNcIik7XHJcblxyXG4gICAgdGhpcy50ZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdvVG9kZXBhcnRtZW50ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzdGF0ZS5nbygnZGVwYXJ0bWVudCcpO1xyXG4gICAgfVxyXG4gICAgLy8kc2NvcGUuZ29Ub0RlcGFydG1lbnQgPSAgZnVuY3Rpb24oKVxyXG4gICAgLy97XHJcbiAgICAvLyAgICAkc3RhdGUuZ28oJ2RlcGFydG1lbnQnKTtcclxuICAgIC8vfVxyXG59Il19
