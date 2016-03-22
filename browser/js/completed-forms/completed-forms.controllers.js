app.controller('CompletedFormsListCtrl', function($scope, forms, formTemplate) {
  $scope.completedForms = forms;
  $scope.formTemplate = formTemplate;

  $scope.data = {availableOptions: [10,25,50,100]}

  //if we implement jquery the following will work
  // $scope.tableLength = $('#completed-forms-table tbody tr').length;
});

app.controller('CompletedFormsCtrl', function($scope, forms) {
	$scope.forms = forms;
});