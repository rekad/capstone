app.controller('AddDataCtrl', function($scope, forms) {
	$scope.forms = forms;
})

app.controller('AddDataSubmitCtrl', function($scope, form) {
	$scope.form = form;

	$scope.formValues = [];

	$scope.submitForm = function() {
		// merge values with the formTemplate data and save as completed form
		var completedForm = angular.copy(form);
		console.log(completedForm)
		completedForm.formElements = completedForm.formElements.map(function(el, i) {
			el.value = $scope.formValues[i];
			return el;
		})
		console.log('Form submitted!', completedForm);
	}
})