var myApp = angular.module("myApp", ['ngRoute','RouteControllers']);

angular.module('myApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
	
	$routeProvider
	.when('/',{
		 templateUrl:'templates/about.html',
		  controller:'AboutController',
		})
	.when('/build',{
		 templateUrl:'templates/build.html',
		  controller:'BuildController',
		})
	.when('/contact',{
		 templateUrl:'templates/contact.html',
		  controller:'ContactController',
		})
	.when('/inside',{
		 templateUrl:'templates/inside.html',
		  controller:'InsideController',
		});
	
});