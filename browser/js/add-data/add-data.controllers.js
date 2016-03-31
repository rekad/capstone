app.controller('AddDataCtrl', function($scope, forms) {
	$scope.forms = forms;
});

app.controller('AddDataSubmitCtrl', function($scope, form, CompletedFormsFactory, $uibModal) {
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
				$uibModal.open({
					templateUrl: '/js/add-data/add-data-success.html',
					controller: function($scope, $uibModalInstance) {
						$scope.close = function() {
							$uibModalInstance.close();
						}
					},
					size: 'md'
				});
				console.log('Form submitted!', createdForm);
			});
	}
})