app.config(function($stateProvider) {
	$stateProvider.state('sync', {
		url: '/sync',
		templateUrl: '/js/sync/sync.view.html',
		controller: 'SyncCtrl'
	});
})

app.controller('SyncCtrl', function($scope, FormFactory) {
	$scope.syncUp = function () {
		FormFactory.syncUp()
		.then(function() {
			console.log('sync up successful');
		})
	}

	$scope.syncDown = function() {
		FormFactory.syncDown()
		.then(function() {
			console.log('sync down successful');
		})
	}
})