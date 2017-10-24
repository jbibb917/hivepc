app.controller ('buildController', ['$scope', function($scope){

$scope.components = [
	{
		compName: 'Graphics Card',
		selectName: 'gpuSelect',
		selectedPart: null,
		parts:[
		 {
          partName: 'Nvidia 1080',
          partCost: '200',
          partID: 1,

     	 },
     	 {
          partName: 'Nvidia 1070',
          partCost: '150',
          partID: 2,

      	},
     	 {
          partName: 'Nvidia 1060',
          partCost: '100',
          partID: 3,

      	}
		]
	},
	{
		compName: 'Central Processor Card',
		selectName: 'cpuSelect',
		selectedPart: null,
		parts:[
		{

		},
		]
	},
	{
		compName: 'Motherboard',
		selectName: 'moboSelect',
		selectedPart: null,
		parts:[
		{

		}]
	},
	{
		compName: 'Random Access Memory',
		selectName: 'ramSelect',
		selectedPart: null,
		parts:[
		{

		}]
	},
	{
		compName: 'Hard-Drive',
		selectName: 'hddSelect',
		selectedPart: null,
		parts:[
		{

		}]
	},
	{
		compName: 'Cooler',
		selectName: 'coolerSelect',
		selectedPart: null,
		parts:[
		{

		}]
	},
	{
		compName: 'Power Supply',
		selectName: 'powerSelect',
		selectedPart: null,
		parts:[
		{

		}]
	},
	{
		compName: 'Case',
		selectName: 'caseSelect',
		selectedPart: null,
		parts:[
		{

		}]
	},
];
}]);