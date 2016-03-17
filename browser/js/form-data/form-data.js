app.config(function($stateProvider) {
	$stateProvider.$state('form-data', {
		url: '/form-data',
		templateUrl: '/js/form-data/form-data.html',
		controller: 'FormDataCtrl'
	})
})

app.controller('FormDataCtrl', function($scope, $window) {

	var db = $window.PouchDB('form-data');

	db.allDocs({include_docs: true})
		.then(function(forms) {
			$scope.forms = forms;
		})

	$scope.submitForm = function() {
		db.post(newForm)
			.then(function() {
				$scope.forms = $scope.forms.concat(newForm);
			})
	}



})