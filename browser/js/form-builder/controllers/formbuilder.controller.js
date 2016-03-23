app.controller('FormBuilder', function($scope){
	$scope.tabSelected = 'one';
	$scope.formElements = [{type: 'checkbox', id: 0, options:["option 1", "option 2", "option 3"]}, {type: 'multipleChoice', id: 1, options:["option 1", "option 2", "option 3"]}, {type: 'paragraphText', id: 2}, {type: 'dropdown', id: 3, options:["opt1", "opt2", "opt3"]}, {type: 'lineText', id: 4}];

	
	$scope.placeElements = function(type) {
		$scope.formElements.push({type: type});
		console.log($scope.formElements);
	}

	$scope.title = $scope.title || 'Form Title';
	$scope.description = $scope.description || 'This describes my form!';

	$scope.selectElement = function(e) {
		$scope.selected = e;
	}

	$scope.onHover = function(e) {
		$scope.hovered = e;
	}
});