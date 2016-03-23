app.controller('FormBuilder', function($scope){
	$scope.tabSelected = 'one';
	console.log($scope.tabSelected);
	$scope.formElements = [{type: 'checkbox'}, {type: 'multipleChoice'}, {type: 'paragraphText'}, {type: 'dropdown'}, {type: 'lineText'}];
	
	$scope.placeElements = function(type) {
		$scope.formElements.push({type: type});
	}
});