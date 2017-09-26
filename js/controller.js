app.controller('contactController',
				 
	function($scope){
	
	$scope.submitForm = function()
	{
	if($scope.registrationForm.$valid){
		alert('Thank you for subscribing');
	}	
	};
});