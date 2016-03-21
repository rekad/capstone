app.controller('CompletedFormsListCtrl', function($scope, form) {
  $scope.form = form;
});

app.controller('CompletedFormsCtrl', function($scope, forms) {

  $scope.forms = forms;
  console.log(forms);


  // $scope.submitForm = function() {
  //   console.log('submitting!', $scope.newForm);
  //   FormFactory.submitForm($scope.newForm)
  //     .then(function() {
  //       $scope.forms.push($scope.newForm);
  //     })
  // }
  // $scope.syncToDb = function() {
  //   FormFactory.syncUp()
  //     .then(function() {
  //       console.log('Synchronisation to DB was successful!');
  //     });
  // }

  // $scope.syncFromDb = function() {
  // 	FormFactory.syncDown()
  // 		.then(function() {
  // 			console.log('synced down was successful')
  // 			return FormFactory.fetchAll();
  // 		})
  // 		.then(function(forms) {
  // 			$scope.forms = forms;
  // 		})
  // }

});