app.controller('CompletedFormsListCtrl', function($scope, forms, formTemplate) {
  $scope.completedForms = forms;
  $scope.formTemplate = formTemplate;

  $scope.data = {availableOptions: [{name: 10, id:0}, {name: 25, id: 1}, {name: 50, id:2},{name:100, id:3}], selectedOption:{name: 10, id:0}};

  $scope.getRowsOnPage = function () {
  	return ($scope.completedForms.length > $scope.data.selectedOption.name) ? $scope.data.selectedOption.name : $scope.completedForms.length;
  };

  $scope.getPaginationNumbers = function () {
  	var paginationAmount = Math.ceil($scope.completedForms.length/$scope.data.selectedOption.name),
  		paginationArr = [];
  	for (let i = 1; i <= paginationAmount; i++) {
  		paginationArr.push(i);
  	}
  	return paginationArr;
  };

  //if we implement jquery the following will work
  // $scope.tableLength = $('#completed-forms-table tbody tr').length;
});

app.controller('CompletedFormsCtrl', function($scope, forms) {
	$scope.forms = forms;
});

app.controller('IndividualFormCtrl', function($scope, completedForm) {
	$scope.completedForm = completedForm;
});