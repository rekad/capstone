app.controller('CompletedFormsListCtrl', function($scope, forms, formTemplate) {
  $scope.completedForms = forms;
  $scope.formTemplate = formTemplate;
  //if we implement jquery the following will work
  // $scope.tableLength = $('#completed-forms-table tbody tr').length;
});

app.controller('CompletedFormsCtrl', function($scope, forms) {
	$scope.forms = forms;
});