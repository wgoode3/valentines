
var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '/partials/login.html'
    })
    .when('/dashboard', {
    	templateUrl: 'partials/dashboard.html'
    })
    .when('/valentine/:id', {
      templateUrl: 'partials/valentine.html'
    })
    .when('/valentine/:id/new', {
      templateUrl: 'partials/new.html'
    })
    .otherwise({
      redirectTo: '/login'
    });
});