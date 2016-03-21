app.config(function($stateProvider) {
  $stateProvider.state('forms', {
    url: '/forms',
    templateUrl: '/js/completed-forms/forms-view.html',
    controller: 'FormsCtrl',
    resolve: {
      forms: function(FormFactory) {
        return FormFactory.fetchAll();
      }
    }
  })
});

app.config(function($stateProvider) {
  $stateProvider.state('forms.forms-list', {
    url: '/:formTemplateId/list',
    templateUrl: '/js/completed-forms/forms-list-view.html',
    controller: 'FormsListCtrl',
    resolve: {
      form: function($stateParams, FormFactory) {
        return FormFactory.fetchOne($stateParams.formTemplateId);
      }
    }
  })
})

app.controller('FormsListCtrl', function($scope, form) {
  $scope.form = form;
});

app.controller('FormsCtrl', function($scope, forms) {

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
