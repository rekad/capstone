app.controller('AddDataCtrl', function($scope, forms, $state) {
	$scope.forms = forms;
});

app.controller('AddDataSubmitCtrl', function($scope, form, CompletedFormsFactory) {
	$scope.form = form;

	$scope.formValues = [];

	$scope.submitForm = function() {
		// merge values with the formTemplate data and save as completed form
		var completedForm = angular.copy(form);
		// console.log($scope.formValues)
		completedForm.formElements = completedForm.formElements.map(function(el, i) {
			el.value = $scope.formValues[i];
			return el;
		});
		completedForm.type = 'completedForm';
		completedForm.formTemplateId = completedForm._id;
		completedForm.formTemplateVer = completedForm._rev;
		delete completedForm._id;
		delete completedForm._rev;

		console.log(completedForm);

		CompletedFormsFactory.createOne(completedForm)
			.then(function(createdForm) {
			console.log('Form submitted!', createdForm);
			});
	}
})