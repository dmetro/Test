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