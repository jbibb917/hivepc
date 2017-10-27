app.controller('newscontroller', function($scope, $http) {
    $http({
        method : "GET",
        url : "https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=750e3a33ee2a4bb88bfa754866c529d8"
    }).then(function mySuccess(response) {
        $scope.news = response.data;
    }, function myError(response) {
        $scope.news = response.statusText;
    });
});