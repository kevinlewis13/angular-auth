'use strict';

require('angular/angular');
require('angular-route');
require('angular-cookies');
require('angular-base64');

var booksApp = angular.module('booksApp', ['ngRoute', 'ngCookies', 'base64']);

//services
require('./services/copy')(booksApp);
require('./services/rest_resource')(booksApp);
require('./auth/services/auth')(booksApp);

//controllers
require('./books/controllers/books_controller')(booksApp);
require('./auth/controllers/auth_controller')(booksApp);

//directives
require('./directives/simple_directive')(booksApp);
require('./books/directives/book_form_directive')(booksApp);
require('./auth/directives/signout_directive')(booksApp);

booksApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/books', {
      templateUrl: 'templates/views/books_view.html',
      controller: 'booksController'
    })
    .when('/sign_in', {
      templateUrl: 'templates/views/sign_in.html',
      controller: 'authController'
    })
    .when('/create_user', {
      templateUrl: 'templates/views/create_user.html',
      controller: 'authController'
    })
    .when('/', {
      redirectTo: '/books'
    })
    .otherwise({
      redirectTo: '/sign_in'
    });
}]);
