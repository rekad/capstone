app.controller('FormBuilder', function($scope){
	$scope.tabSelected = 'one';
	$scope.formElements = [{type: 'checkbox'}, {type: 'multipleChoice'}, {type: 'paragraphText'}, {type: 'dropdown'}, {type: 'lineText'}];
	
	$scope.placeElements = function(type) {
		$scope.formElements.push({type: type});
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