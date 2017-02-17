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

    var skip = 0;
    var take = 3;
    //var data = {};
    //data["skip"] = skip;
    //data["take"] = take;

    $scope.products = [];

    var data = JSON.stringify({ skip: skip, take: take});
    BackendService.getAllProducts(data).then(function (response) {
        
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
                console.log("Issue getAllProducts()");
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

    this.getAllProducts = function (data) {
        return $http.post('/api/product/getproducts', data)
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29uZmlnL3JvdXRlcy5qcyIsImFwcC9jb250cm9sbGVycy9tYWluLmpzIiwiYXBwL2NvbnRyb2xsZXJzL3Byb2R1Y3QuanMiLCJhcHAvZW50cnkuanMiLCJhcHAvc2VydmljZXMvQmFja2VuZFNlcnZpY2UuanMiLCJhcHAvc2VydmljZXMvYXBpLmpzIiwiYXBwL3NlcnZpY2VzL2RhdGFTZXJ2aWNlLmpzIiwiYXBwL3NlcnZpY2VzL21lbnVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvbWFpbicpO1xyXG5cclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcblxyXG4gICAgIC5zdGF0ZSgnbWFpbicsIHtcclxuICAgICAgICAgdXJsOiAnL21haW4nLFxyXG4gICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvdmlld3MvbWFpbi9tYWluLmh0bWwnLFxyXG4gICAgICAgICBjb250cm9sbGVyOiByZXF1aXJlKCdjb250cm9sbGVycy9tYWluLmpzJylcclxuICAgICB9KVxyXG4gICAgIC5zdGF0ZSgncHJvZHVjdFBhZ2UnLCB7XHJcbiAgICAgICAgdXJsOiAnL3Byb2R1Y3RQYWdlJyxcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC92aWV3cy9wcm9kdWN0UGFnZS9wcm9kdWN0UGFnZS5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiByZXF1aXJlKCdjb250cm9sbGVycy9wcm9kdWN0LmpzJylcclxuICAgIH0pXHJcblxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzY29wZSwgQmFja2VuZFNlcnZpY2UsICRzdGF0ZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB2YXIgc2tpcCA9IDA7XHJcbiAgICB2YXIgdGFrZSA9IDM7XHJcbiAgICAvL3ZhciBkYXRhID0ge307XHJcbiAgICAvL2RhdGFbXCJza2lwXCJdID0gc2tpcDtcclxuICAgIC8vZGF0YVtcInRha2VcIl0gPSB0YWtlO1xyXG5cclxuICAgICRzY29wZS5wcm9kdWN0cyA9IFtdO1xyXG5cclxuICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBza2lwOiBza2lwLCB0YWtlOiB0YWtlfSk7XHJcbiAgICBCYWNrZW5kU2VydmljZS5nZXRBbGxQcm9kdWN0cyhkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhW1wiRXJyb3JcIl0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8kc2NvcGUucHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImdldEFsbFByb2R1Y3RzKCkgcmVzcG9uc2U6IFwiLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucHJvZHVjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnYmxibGJhJywgcHJpY2U6ICcyMTo5OScsIGluZm86ICdUU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0ICwgYmxhaCcsIHBpYzogJ2h0dHBzOi8vY2RuLmF0bGFzc2J4LmNvbS9GQi8xMTA4NzIwOTY0NTQwMy9BWlJfRlkxN19sYW5ndWFnZV9IRV9JTF83Mjh4OTBfQkFOX1NlcHQtMTYucG5nJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ2JsYmxiYTInLCBwcmljZTogJzI1Ojk5JywgaW5mbzogJ1RoZSBlcXVhbHMyIG9wZXJhdG9yIGRvZXMgU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0IGJsYWgsIGJsYWgnLCBwaWM6ICdodHRwczovL2kuc3RhY2suaW1ndXIuY29tL3dmTVRGLmpwZz9zPTMyOCZnPTEnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnYmxibGJhMycsIHByaWNlOiAnMjA6OTknLCBpbmZvOiAnVGhlIFNlZSBtb3JlIHNuaXBwZXRzIGxpa2UgdGhpcyBvbmxpbmUgc3RvcmUgaXRlbSBhdCAgZXF1YWxzMyBvcGVyYXRvciBkb2VzIGJsYWgsIGJsYWgnLCBwaWM6ICdodHRwOi8vcGxhY2Vob2xkLml0LzMyMHgxNTAnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnYmxibGJhNCcsIHByaWNlOiAnMjUwOjk5JywgaW5mbzogJ1RoZSBlcXVhbHM0IG9wZXJhdG9yIGRvZXMgYmxhaCwgYmxhaFNlZSBtb3JlIHNuaXBwZXRzIGxpa2UgdGhpcyBvbmxpbmUgc3RvcmUgaXRlbSBhdCAnLCBwaWM6ICdodHRwOi8vcGxhY2Vob2xkLml0LzMyMHgxNTAnIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSXNzdWUgZ2V0QWxsUHJvZHVjdHMoKVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5sb2FkTW9yZSA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZE1vcmVcIik7XHJcbiAgICAgICAgdmFyIG1tID0gW1xyXG4gICAgICAgIHsgbmFtZTogJ2JsYmxiYTYnLCBwcmljZTogJzIxOjk5JywgaW5mbzogJ1RTZWUgbW9yZSBzbmlwcGV0cyBsaWtlIHRoaXMgb25saW5lIHN0b3JlIGl0ZW0gYXQgLCBibGFoJywgcGljOiAnaHR0cHM6Ly9jZG4uYXRsYXNzYnguY29tL0ZCLzExMDg3MjA5NjQ1NDAzL0FaUl9GWTE3X2xhbmd1YWdlX0hFX0lMXzcyOHg5MF9CQU5fU2VwdC0xNi5wbmcnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYmxibGJhMjYnLCBwcmljZTogJzI1Ojk5JywgaW5mbzogJ1RoZSBlcXVhbHMyIG9wZXJhdG9yIGRvZXMgU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0IGJsYWgsIGJsYWgnLCBwaWM6ICdodHRwczovL2kuc3RhY2suaW1ndXIuY29tL3dmTVRGLmpwZz9zPTMyOCZnPTEnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYmxibGJhMzQzJywgcHJpY2U6ICcyMDo5OScsIGluZm86ICdUaGUgU2VlIG1vcmUgc25pcHBldHMgbGlrZSB0aGlzIG9ubGluZSBzdG9yZSBpdGVtIGF0ICBlcXVhbHMzIG9wZXJhdG9yIGRvZXMgYmxhaCwgYmxhaCcsIHBpYzogJ2h0dHA6Ly9wbGFjZWhvbGQuaXQvMzIweDE1MCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdibGJsYmE2ODQnLCBwcmljZTogJzI1MDo5OScsIGluZm86ICdUaGUgZXF1YWxzNCBvcGVyYXRvciBkb2VzIGJsYWgsIGJsYWhTZWUgbW9yZSBzbmlwcGV0cyBsaWtlIHRoaXMgb25saW5lIHN0b3JlIGl0ZW0gYXQgJywgcGljOiAnaHR0cDovL3BsYWNlaG9sZC5pdC8zMjB4MTUwJyB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtbS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAkc2NvcGUucHJvZHVjdHMucHVzaChtbVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5jbGlja09uUHJvZHVjdCA9IGZ1bmN0aW9uKHByb2R1Y3QpXHJcbiAgICB7XHJcbiAgICAgICAgZGF0YVNlcnZpY2Uuc2V0TmFtZShwcm9kdWN0Lm5hbWUpO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNldFByaWNlKHByb2R1Y3QucHJpY2UpO1xyXG4gICAgICAgIGRhdGFTZXJ2aWNlLnNldEluZm8ocHJvZHVjdC5pbmZvKTtcclxuICAgICAgICBkYXRhU2VydmljZS5zZXRQaWMocHJvZHVjdC5waWMpO1xyXG4gICAgICAgICRzdGF0ZS5nbygncHJvZHVjdFBhZ2UnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3ZhciBkYXRhID0ge307XHJcbiAgICAvL2RhdGFbXCJwcm92aWRlcklkXCJdID0gMTtcclxuICAgIC8vZGF0YVtcInJvdGF0aW9uSWRcIl0gPSAwO1xyXG5cclxuICAgIC8vJHNjb3BlLm9yZGVycyA9IHt9O1xyXG4gICAgLy8kc2NvcGUucm90ZXRpb25zID0ge307XHJcblxyXG4gICAgLy8kc2NvcGUuZGF0ZTtcclxuICAgIC8vLy9mdW5jdGlvbiBjYWxsXHJcbiAgICAvLy8vICRzY29wZS5HZXREYXRhKCk7XHJcbiAgICAvL0JhY2tlbmRTZXJ2aWNlLkdldFJvdGV0aW9ucygxKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIC8vICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGFbXCJFcnJvclwiXSAhPSBudWxsKSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAkc2NvcGUucm90ZXRpb25zID0gcmVzcG9uc2UuZGF0YS5EYXRhO1xyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIE5vdG9rIFwiKVxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIH1cclxuICAgIC8vfSk7XHJcblxyXG4gICAgLy8kc2NvcGUuc2VsZWN0ZWRJdGVtID0gXCIwXCI7XHJcblxyXG4gICAgLy9nZXREYXRhKCk7XHJcblxyXG4gICAgLy9mdW5jdGlvbiBnZXREYXRhKCkge1xyXG5cclxuICAgIC8vICAgIHZhciBjb3VudCA9IE9iamVjdC5rZXlzKCRzY29wZS5zZWxlY3RlZEl0ZW0pLmxlbmd0aDtcclxuXHJcbiAgICAvLyAgICBkYXRhW1wicHJvdmlkZXJJZFwiXSA9IDE7Ly9UT0RPOiBOZWVkIHRvIGNoYW5nZSBpdCB0byBkeW5hbWljIHBhcmFtIGZyb20gbG9naW5cclxuXHJcbiAgICAvLyAgICBkYXRhW1wicm90YXRpb25JZFwiXSA9IGNvdW50ID09IDAgPyAwIDogJHNjb3BlLnNlbGVjdGVkSXRlbTsvL0RpbWEgUGxlYXNlIGZpeCB0aGlzIHNoaXRcclxuXHJcbiAgICAvLyAgICBkYXRhW1wiZGF0ZVwiXSA9ICRzY29wZS5kYXRlID09IHVuZGVmaW5lZCA/IDAgOiAkc2NvcGUuZGF0ZTtcclxuXHJcbiAgICAvLyAgICBCYWNrZW5kU2VydmljZS5nZXRBbGxPcmRlcnMoZGF0YSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVtcIkVycm9yXCJdICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICRzY29wZS5vcmRlcnMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgTm90b2sgXCIpXHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vfVxyXG5cclxuICAgIC8vJHNjb3BlLmNoYW5nZU9yZGVyID0gZnVuY3Rpb24oKVxyXG4gICAgLy97ICAgICAgIFxyXG4gICAgLy8gICAgQmFja2VuZFNlcnZpY2UudHJpZ2dlckFjY291bnRpbmcoKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVtcIkVycm9yXCJdICE9IG51bGwpIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGNvbmZpZ1wiKTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9rIENvbmZpZyBjaGFuZ2VkXCIpO1xyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSk7XHJcblxyXG4gICAgLy99XHJcbiAgICAvLy8vTkVXIFxyXG4gICAgLy8kc2NvcGUuR2V0RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgLy8gICAgZGF0YVtcInByb3ZpZGVySWRcIl0gPSAxOy8vTmVlZCB0byBjaGFuZ2UgaXQgdG8gZHluYW1pYyBwYXJhbSBmcm9tIGxvZ2luXHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcIiRzY29wZS5zZWxlY3RlZEl0ZW06IFwiICsgJHNjb3BlLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImRhdGUgXCIgKyAkc2NvcGUuZGF0ZSk7XHJcbiAgICAvLyAgICBkYXRhW1wicm90YXRpb25JZFwiXSA9ICRzY29wZS5zZWxlY3RlZEl0ZW07Ly9EaW1hIFBsZWFzZSBmaXggdGhpcyBzaGl0XHJcblxyXG5cclxuICAgIC8vICAgIGRhdGFbXCJkYXRlXCJdID0gJHNjb3BlLmRhdGU7XHJcblxyXG4gICAgLy8gICAgQmFja2VuZFNlcnZpY2UuZ2V0QWxsT3JkZXJzKGRhdGEpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgLy8gICAgICAgIGlmIChyZXNwb25zZSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhW1wiRXJyb3JcIl0gIT0gbnVsbCkge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgICAgICRzY29wZS5vcmRlcnMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIE5vdG9rIFwiKVxyXG4gICAgLy8gICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgfVxyXG4gICAgLy8gICAgfSk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvLyRzY29wZS5zZXRSb2xlID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRGF0YVwiLCBkYXRhKVxyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJSb3cgQ2xpY2tlZFwiLCBkYXRhKTtcclxuICAgIC8vfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vJHNjb3BlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgLy8gICAgZGF0YVtcInByb3ZpZGVySWRcIl0gPSAxO1xyXG4gICAgLy8gICAgZGF0YVtcInJvdGF0aW9uSWRcIl0gPSAkc2NvcGUuc2VsZWN0ZWRJdGVtO1xyXG5cclxuICAgIC8vICAgIEJhY2tlbmRTZXJ2aWNlLmdldEFsbE9yZGVycyhkYXRhKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgIC8vICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YVtcIkVycm9yXCJdICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICRzY29wZS5vcmRlcnMgPSByZXNwb25zZS5kYXRhLkRhdGE7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUub3JkZXJzKTtcclxuICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgTm90b2sgXCIpXHJcbiAgICAvLyAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9KTtcclxuXHJcbiAgICAvLyAgICAvLyB1c2UgJHNjb3BlLnNlbGVjdGVkSXRlbS5jb2RlIGFuZCAkc2NvcGUuc2VsZWN0ZWRJdGVtLm5hbWUgaGVyZVxyXG4gICAgLy8gICAgLy8gZm9yIG90aGVyIHN0dWZmIC4uLlxyXG4gICAgLy99XHJcblxyXG4gICAgLy8kc2NvcGUuc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgZ2V0RGF0YSgpO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy8kc2NvcGUucHJpbnRFeGFtcGxlID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG4gICAgLy8gICAgcHJpbnRTdHlsZShpZCk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvLyRzY29wZS5nb1RvRGVwYXJ0bWVudDEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gICAgY29uc29sZS5sb2coXCJnb1RvRGVwYXJ0bWVudFwiKTtcclxuICAgIC8vICAgIG1lbnVTZXJ2aWNlLmdvVG9EZXBhcnRtZW50KCk7XHJcblxyXG4gICAgLy8gICAgJHN0YXRlLmdvKCdkZXBhcnRtZW50Jyk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvLy8vR2lsaXhcclxuICAgIC8vZnVuY3Rpb24gcHJpbnRTdHlsZShpZCkge1xyXG4gICAgLy8gICAgdmFyIGRpdlRvUHJpbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhcImRpdlRvUHJpbnQ6XCIgKyBkaXZUb1ByaW50KTtcclxuICAgIC8vICAgIGlmIChkaXZUb1ByaW50ICE9IFtdKSB7XHJcbiAgICAvLyAgICAgICAgbmV3V2luID0gd2luZG93Lm9wZW4oXCJcIik7XHJcbiAgICAvLyAgICAgICAgbmV3V2luLmRvY3VtZW50LndyaXRlKGRpdlRvUHJpbnQub3V0ZXJIVE1MKTtcclxuICAgIC8vICAgICAgICBuZXdXaW4ucHJpbnQoKTtcclxuICAgIC8vICAgICAgICBuZXdXaW4uY2xvc2UoKTtcclxuICAgIC8vICAgIH1cclxuICAgIC8vfVxyXG5cclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc2NvcGUsIEJhY2tlbmRTZXJ2aWNlLCAkc3RhdGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgdmFyIHByb2R1Y3QgPSBkYXRhU2VydmljZS5wcm9kdWN0KCk7XHJcbiAgICBpZiAoIWlzRW1wdHkocHJvZHVjdCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3Q6IFwiLCBwcm9kdWN0KTtcclxuICAgICAgICAkc2NvcGUucHJvZHVjdCA9IHByb2R1Y3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vdmFyIGNvb2tpZVdPYmplY3QgPSAkY29va2llU3RvcmUuZ2V0T2JqZWN0KCdjb29raWVOYW1lJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlbXB0eVwiKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiYW5ndWxhci5tb2R1bGUoJ2J5Q2xpY2snLCBbJ3VpLnJvdXRlcicsICdqa3VyaS5kYXRlcGlja2VyJywgJ3VpLmJvb3RzdHJhcCddKVxyXG4gICAgLy8gRGlyZWN0aXZlc1xyXG4gICAgLy8uZGlyZWN0aXZlKC4uLi4pXHJcblxyXG4gICAgLy8gU2VydmljZXNcclxuICAgIC5zZXJ2aWNlKCdBUEknLCByZXF1aXJlKCcuL3NlcnZpY2VzL2FwaS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ0JhY2tlbmRTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9CYWNrZW5kU2VydmljZS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ21lbnVTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9tZW51U2VydmljZS5qcycpKVxyXG4gICAgLnNlcnZpY2UoJ2RhdGFTZXJ2aWNlJywgcmVxdWlyZSgnLi9zZXJ2aWNlcy9kYXRhU2VydmljZS5qcycpKVxyXG5cclxuICAgIC8vIFJvdXRpbmdcclxuICAgIC5jb25maWcocmVxdWlyZSgnLi9jb25maWcvcm91dGVzLmpzJykpXHJcblxyXG4gICAgLy8gQ29udHJvbGxlcnNcclxuICAgIC5jb250cm9sbGVyKCdtYWluQ29udHJvbGxlcicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdsb2dpbicsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdtYWluJywgZnVuY3Rpb24gKCkgeyB9KVxyXG4gICAgLmNvbnRyb2xsZXIoJ3VwbG9hZGNvbnRlbnQnLCBmdW5jdGlvbiAoKSB7IH0pXHJcbiAgICAuY29udHJvbGxlcignZGVwYXJ0bWVudCcsIGZ1bmN0aW9uICgpIHsgfSlcclxuICAgIC5jb250cm9sbGVyKCdwcm9kdWN0JywgZnVuY3Rpb24gKCkgeyB9KSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmFja2VuZF9zZXJ2aWNlKCRxLCAkaHR0cCkge1xyXG5cclxuICAgIHRoaXMuZ2V0QWxsUHJvZHVjdHMgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Byb2R1Y3QvZ2V0cHJvZHVjdHMnLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hlbiBvYnRhaW5pbmcgZGljdGlvbmFyeSBmaWxlIGZvciBsYW5ndWFnZXMhJztcclxuICAgICAgICAgICAgJHN0YXRlLmdvKCdlcnJvcicsIHsgJ2Vycm9yX29iaic6IGVyciB9KTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2V0QWxsT3JkZXJzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvb3JkZXIvZ2V0b3JkZXJzLycsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGVuIG9idGFpbmluZyBkaWN0aW9uYXJ5IGZpbGUgZm9yIGxhbmd1YWdlcyEnO1xyXG4gICAgICAgICAgICAvLyAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRBbGxPcmRlcnNCdFJvdGF0aW9uID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9vcmRlci9nZXRvcmRlcnMvJywgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgIC8vICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkdldFJvdGV0aW9ucyA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvb3JkZXIvZ2V0Um90YXRpb25zLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLkdldEFsbFByb2R1Y3RzQnlDYXRlZ29yeU5hbWUgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9vcmRlci9nZXRwcm9kdWN0c2NhdGVnb3J5LycsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBlcnJbJ3RleHQnXSA9ICdTb21ldGhpbmcgaGFwcGVucyB3aGVuIG9idGFpbmluZyBkaWN0aW9uYXJ5IGZpbGUgZm9yIGxhbmd1YWdlcyEnO1xyXG4gICAgICAgICAgICAvLyAkc3RhdGUuZ28oJ2Vycm9yJywgeyAnZXJyb3Jfb2JqJzogZXJyIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5HZXRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9vcmRlci9nZXRjYXRlZ29yaWVzLycgKyBpZClcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGVyclsndGV4dCddID0gJ1NvbWV0aGluZyBoYXBwZW5zIHdoZW4gb2J0YWluaW5nIGRpY3Rpb25hcnkgZmlsZSBmb3IgbGFuZ3VhZ2VzISc7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRyaWdnZXJBY2NvdW50aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvb3JkZXIvdHJpZ2dlcmFjY291bnRpbmcnKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgZXJyWyd0ZXh0J10gPSAnU29tZXRoaW5nIGhhcHBlbnMgd2hpbGUgdHJpZ2dlciBhY2NvdW50aW5nICc7XHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygnZXJyb3InLCB7ICdlcnJvcl9vYmonOiBlcnIgfSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkcSwgJGh0dHApIHtcclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGEpIHtcclxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRlZmVycmVzLnJlamVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtb2NrKGZ1bmMsIHRpbWVvdXQpIHtcclxuICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShmKCkpO1xyXG4gICAgICAgIH0sIHRpbWVvdXQsIGZ1bmMpO1xyXG4gICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gQmFzaWMgZnVuY3Rpb25zXHJcbiAgICAgICAgR0VUOiBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KCdHRVQnLCB1cmwsIGRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgUE9TVDogZnVuY3Rpb24gKHVybCwgZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdCgnUE9TVCcsIHVybCwgZGF0YSk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb25zXHJcbiAgICAgICAgZ2V0V29ya2VyczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3JldHVybiByZXF1ZXN0KCdHRVQnLCAnL2FwaS93b3JrZXIvYWxsJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2NrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmpzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOiBjaGFuY2UuZmlyc3QoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXJJZDogaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCRzdGF0ZSkge1xyXG5cclxuICAgIHRoaXMucHJvZHVjdERhdGEgPSB7IH07XHJcblxyXG4gICAgdGhpcy5wcm9kdWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3REYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFByaWNlID0gZnVuY3Rpb24gKHByaWNlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0RGF0YS5wcmljZSA9IHByaWNlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0UHJpY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdERhdGEucHJpY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2V0TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0RGF0YS5uYW1lID0gbmFtZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmdldE5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdERhdGEubmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZXRJbmZvID0gZnVuY3Rpb24gKGluZm8pIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3REYXRhLmluZm8gPSBpbmZvO1xyXG4gICAgfTtcclxuICAgIHRoaXMuZ2V0SW5mbyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGF0YS5pbmZvO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnNldFBpYyA9IGZ1bmN0aW9uIChwaWMpIHtcclxuICAgICAgICB0aGlzLnByb2R1Y3REYXRhLnBpYyA9IHBpYztcclxuICAgIH07XHJcbiAgICB0aGlzLmdldFBpYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0RGF0YS5pbmZvO1xyXG4gICAgfTtcclxuXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkc3RhdGUpIHtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJkMTIzXCIpO1xyXG5cclxuICAgIHRoaXMudGVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nb1RvZGVwYXJ0bWVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc3RhdGUuZ28oJ2RlcGFydG1lbnQnKTtcclxuICAgIH1cclxuICAgIC8vJHNjb3BlLmdvVG9EZXBhcnRtZW50ID0gIGZ1bmN0aW9uKClcclxuICAgIC8ve1xyXG4gICAgLy8gICAgJHN0YXRlLmdvKCdkZXBhcnRtZW50Jyk7XHJcbiAgICAvL31cclxufSJdfQ==
