var appViewModel = angular.module('appAngularJs', []);
appViewModel.controller('SimpleController', ['$scope', function ($scope) {
     $scope.customers = [
        { name: 'Dave Jones', city: 'Phoenix' },
        { name: 'Jamie Riley', city: 'Atlanta' },
        { name: 'Heedy Wahlin', city: 'Chandler' },
        { name: 'Thomas Winter', city: 'Seattle' }
    ];
}]);
