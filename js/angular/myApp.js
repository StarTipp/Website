var app = angular.module('StarTipp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider
        
        .when('/', {
            templateUrl : 'pages/login.html',
            controller  : 'loginController'
        })
        
        .when('/start', {
            templateUrl : 'pages/startpage.html',
            controller  : 'startpageController'
        })
        
        .when('/tip', {
            templateUrl : 'pages/tipprunde.html',
            controller  : 'mainController'
        });
});
