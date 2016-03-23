app.controller('AddDataCtrl', function($scope, forms) {
	$scope.forms = forms;
})

app.controller('AddDataSubmitCtrl', function($scope, form) {
	$scope.form = form;
	console.log(form);
})