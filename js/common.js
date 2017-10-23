var app = angular.module('myApp', ['ngRoute', 'ngMap']);
	app.config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true); //to eliminate the # in the url
	
	$routeProvider
	.when("/",{
		 templateUrl:"/templates/home.html",
		})
	.when("/build",{
		 templateUrl:"/templates/build.html",
		})
	.when("/contact",{
		 templateUrl:"/templates/contact.html",
		})
	.when("/reviews",{
		 templateUrl:"/templates/reviews.html",
		})
	.when("/about",{
		 templateUrl:"/templates/about.html",
		})
	.otherwise({
		redirectTo: "/"
		});
		
		
});