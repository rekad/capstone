app.controller('AddDataCtrl', function($scope, forms) {
	$scope.forms = forms;
})

app.controller('AddDataSubmitCtrl', function($scope, form) {
	$scope.form = form;

	$scope.formValues = [];

	$scope.submitForm = function() {
		console.log('Form submitted!', $scope.formValues)
	}
})