app.controller('FormBuilder', function($scope){
	$scope.formElements = [{type: 'checkbox'}, {type: 'radio'}, {type: 'checkbox'}, {type: 'paragraphText'}, {type: 'dropdown'}, {type: 'lineText'}];
	
	$scope.placeElements = function(something) {
		$scope.formElements.push({type: something});
	}
});