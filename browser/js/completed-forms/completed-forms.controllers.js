app.controller('CompletedFormsListCtrl', function($scope, forms, formTemplate) {
  $scope.completedForms = forms;
  $scope.completedFormsForPage = $scope.completedForms.slice(0,10);
  $scope.formTemplate = formTemplate;
  $scope.currentPage = 1;

  $scope.data = {availableOptions: [{name: 10, id:0}, {name: 25, id: 1}, {name: 50, id:2},{name:100, id:3}], selectedOption:{name: 10, id:0}};

  $scope.startSlice = 0;
  $scope.endSlice = 10;

  $scope.getPaginationNumbers = function () {
  	var paginationAmount = Math.ceil($scope.completedForms.length/$scope.data.selectedOption.name),
  		paginationArr = [];
  	for (let i = 1; i <= paginationAmount; i++) {
  		paginationArr.push(i);
  	}
  	return paginationArr;
  };

  $scope.changePage = function (page) {
  	//set current page
  	$scope.currentPage = page || this.page;
  	//change rows showed
  	$scope.updateSlice();
  	$scope.completedFormsForPage = $scope.completedForms.slice($scope.startSlice, $scope.endSlice);
  	$scope.$evalAsync();
  };

  $scope.updateSlice = function () {
  	$scope.startSlice = ($scope.currentPage-1)*$scope.data.selectedOption.name;
  	$scope.endSlice = Math.min($scope.startSlice+$scope.data.selectedOption.name, $scope.completedForms.length);
  };

  $scope.prevPage = function () {
  	if ($scope.currentPage !== 1) $scope.changePage($scope.currentPage-1);

  };

  $scope.nextPage = function () {
  	if ($scope.currentPage !== $scope.getPaginationNumbers().length) $scope.changePage($scope.currentPage+1);
  };

  $scope.updateRowsPerPage = function () {
  	$scope.updateSlice();
  	$scope.$evalAsync();
  };
});

app.controller('CompletedFormsCtrl', function($scope, forms) {
	$scope.forms = forms;
});

app.controller('IndividualFormCtrl', function($scope, completedForm, CompletedFormsFactory) {
	$scope.completedForm = completedForm;
	$scope.updateForm = function () {
		CompletedFormsFactory.updateOne(completedForm)
			.then(function() {

			})
			//handle errors
	};
});