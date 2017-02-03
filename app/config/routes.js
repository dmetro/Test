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