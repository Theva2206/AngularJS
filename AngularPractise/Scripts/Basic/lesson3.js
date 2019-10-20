
var demoApp = angular.module('appAngularJs', ['ngRoute']);

demoApp.controller('SimpleController', ['$scope', function ($scope) {
    $scope.customers = [
       { name: 'Dave Jones', city: 'Phoenix' },
       { name: 'Jamie Riley', city: 'Atlanta' },
       { name: 'Heedy Wahlin', city: 'Chandler' },
       { name: 'Thomas Winter', city: 'Seattle' }
    ];


    $scope.addCustomer = function () {
   
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })

        console.log("total: " + $scope.customers.length + "  Customer: " + $scope.newCustomer.name + " city: " + $scope.newCustomer.city);
    };
}]);

demoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/filter',
        {
            controller: 'SimpleController',
            templateUrl: 'Filter'
        })
        .when('/',
        {
            controller: 'SimpleController',
            templateUrl: 'Create'
        })
        .otherwise({ redirectTo: '/filter' });
});

