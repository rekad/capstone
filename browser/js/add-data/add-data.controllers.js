app.controller('AddDataCtrl', function($scope, forms) {
	$scope.forms = forms;
});

app.controller('AddDataSubmitCtrl', function($scope, form, CompletedFormsFactory, $uibModal) {
	$scope.form = form;

	$scope.formValues = [];


	//DELETE AFTER DEMO DAY
	// $scope.form.formElements[0].value = "Sneep";
	// $scope.form.formElements[1].value = 2;
	// $scope.form.formElements[2].value = {
	// 	city: "Tegucigalpa",
	// 	country: "Honduras",
	// 	state: "Francisco Morazan Department",
	// 	streetAddress: "Colonia San Carlos",
	// 	streetAddress2: "Apt 7"
	// };
	

	$scope.submitForm = function() {
		// merge values with the formTemplate data and save as completed form

		var completedForm = angular.copy(form);
		console.log($scope.formValues)
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
					size: 'sm'
				});
				console.log('Form submitted!', createdForm);
			});
	}
})