/**
 * Created by shivrajs on 4/10/16.
 */

/**
 * Application initialization file
 * What to do ?
 * 1) Initialize angular module and inject the necessary dependencies
 * 2) Configure routes
 */

var shubhaApp = angular.module('shubhaApp', [
    'ngRoute',
    'stateCountryCtrl'
]);


shubhaApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/country-state.html',
            controller: 'stateCountryCtrl'
        }).otherwise({
            redirectTo: '/'
        });;
    }
]);