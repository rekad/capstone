app.config(function($stateProvider) {
	$stateProvider.state('sync', {
		url: '/sync',
		templateUrl: '/js/sync/sync.view.html',
		controller: 'SyncCtrl'
	});
})

app.controller('SyncCtrl', function($scope, FormTemplatesFactory) {
	$scope.syncUp = function () {
		FormTemplatesFactory.syncUp()
		.then(function() {
			console.log('sync up successful');
		})
	}

	$scope.syncDown = function() {
		FormTemplatesFactory.syncDown()
		.then(function() {
			console.log('sync down successful');
		})
	}

	$scope.clearLocalDb = function() {
		FormTemplatesFactory.clearDb()
		.then(function() {
			console.log('cleared local db');
		})
	}
})