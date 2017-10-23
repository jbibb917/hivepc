app.controller('contactController', function($scope){
	
	$scope.submitForm = function()
	{
	if($scope.registrationForm.$valid){
		alert('Thank you for subscribing');
	}	
	};
});

app.controller('reviewController', ['$scope', function($scope){

	$scope.reviews = [
	{
	name: 'Ringo Lennon',
	overview: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	GPU:'Nvidia GeForce 1070',
	CPU:'Intel i7',
	RAM:'16gb',
	Cooler:'Coolermaster Seidon v2',
	Case:'NZXT h440',
	cover:'../images/caspar-rubin-220711.jpg'
	},
	{
	name: 'John McCartney',
	overview: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	GPU:'Nvidia GeForce 980ti',
	CPU:'Intel i5',
	RAM:'16gb',
	Cooler:'Coolermaster Seidon v2',
	Case:'NZXT h440',
	cover:'../images/caspar-rubin-220711.jpg'
	},
	{
	name: 'Paul Harrison',
	overview: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	GPU:'Nvidia GeForce 980ti',
	CPU:'Intel i5',
	RAM:'16gb',
	Cooler:'Coolermaster Seidon v2',
	Case:'NZXT h440',
	cover:'../images/caspar-rubin-220711.jpg'
	},	
	{
	name: 'George Starr',
	overview: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	GPU:'Nvidia GeForce 980ti',
	CPU:'Intel i5',
	RAM:'16gb',
	Cooler:'Coolermaster Seidon v2',
	Case:'NZXT h440',
	cover:'../images/caspar-rubin-220711.jpg'
	},	
	{
	name: 'Grag Davis',
	overview: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	GPU:'Nvidia GeForce 980ti',
	CPU:'Intel i5',
	RAM:'16gb',
	Cooler:'Coolermaster Seidon v2',
	Case:'NZXT h440',
	cover:'../images/caspar-rubin-220711.jpg'
	},	
	
	];	
}]);

app.controller ('buildController', function($scope){

});

app.controller('mapController', function(NgMap) {
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
});
