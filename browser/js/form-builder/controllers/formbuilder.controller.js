app.controller('FormBuilder', function($scope){
	$scope.formElements = [{type: 'checkbox'}, {type: 'multipleChoice'}, {type: 'paragraphText'}, {type: 'dropdown'}, {type: 'lineText'}];
	
	$scope.placeElements = function(something) {
		$scope.formElements.push({type: something});
	}
});