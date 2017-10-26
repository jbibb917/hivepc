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
				partName: 'Intel i9',
				partCost:'500',
				partID: 4,
			},
			{
				partName: 'Intel i7',
				partCost:'300',
				partID: 5,
			},
			{
				partName: 'Intel i5',
				partCost:'200',
				partID: 6,
			},
			]
	},
	{
		compName: 'Motherboard',
		selectName: 'moboSelect',
		selectedPart: null,
		parts:[
			{
			partName: 'Asus 1',
			partCost:'500',
			partID: 4,
			},
			{
			partName: 'Asus 2',
			partCost:'300',
			partID: 5,
			},
			{
			partName: 'AMD 1',
			partCost:'200',
			partID: 6,
			}
			]
	},
	{
		compName: 'Random Access Memory',
		selectName: 'ramSelect',
		selectedPart: null,
		parts:[
		{
			partName: '32gb',
			partCost:'500',
			partID: 7,
		},
		{
			partName: '16gb',
			partCost:'300',
			partID: 8,
		},
		{
			partName: '8gb',
			partCost:'110',
			partID: 9,
		},
		{
			partName: '4gb',
			partCost:'50',
			partID: 10,
		},

		]
	},
	{
		compName: 'Hard-Drive',
		selectName: 'hddSelect',
		selectedPart: null,
		parts:[
		{
			partName: '2tb',
			partCost:'300',
			partID: 11,		
		},
		{
			partName: '1tb',
			partCost:'120',
			partID: 12,
		},
		{
			partName: '500gb',
			partCost:'300',
			partID: 13,
		},
		]
	},
	{
		compName: 'Cooler',
		selectName: 'coolerSelect',
		selectedPart: null,
		parts:[
		{
			partName: 'Coolermaster',
			partCost:'200',
			partID: 14,
		},
		{
			partName: 'Noctua',
			partCost:'300',
			partID: 15,
		},
		]
	},
	{
		compName: 'Power Supply',
		selectName: 'powerSelect',
		selectedPart: null,
		parts:[
		{
			partName: '10w Coolermaster',
			partCost:'120',
			partID: 16,

		},
		{
			partName: '8w Coolermaster',
			partCost:'80',
			partID: 17,
		},
		]
	},
	{
		compName: 'Case',
		selectName: 'caseSelect',
		selectedPart: null,
		parts:[
		{
			partName: 'NZXT h440',
			partCost: '90',
			partID: 18,
		}]
	},
];
}]);