app.controller('newsController', function($scope, $http){
	method: 'GET',
	url: 'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=750e3a33ee2a4bb88bfa754866c529d8'
}).then(function(response){
	$scope.news = response.data;
});