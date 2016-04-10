/**
 * Created by shivrajs on 4/10/16.
 */


var stateCountryCtrl = angular.module('stateCountryCtrl', []);

stateCountryCtrl.controller('stateCountryCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http({
            method: 'GET',
            url: 'json/country.json'
        }).success(function successCallback(response) {
            $scope.country = response;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

        $http({
            method: 'GET',
            url: 'json/state.json'
        }).success(function successCallback(response) {
            $scope.states = response;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });


        $scope.$watch('countryOptions', function () {
            console.log("$scope.countryOptions: ", $scope.countryOptions);
        });
    }]);