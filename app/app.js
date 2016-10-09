'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  	$routeProvider
  	.when('/view1', {
    	templateUrl: 'view1/view1.html',
    	controller: 'Profile'
  	})
	.when('/view2', {
	    templateUrl: 'view2/view2.html',
	    controller: 'ChatCtrl'
	});

 
}]);
