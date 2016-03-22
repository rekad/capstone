app.config(function($stateProvider) {
	$stateProvider.state('sync', {
		url: '/sync',
		templateUrl: '/js/sync/sync.view.html',
		controller: 'SyncCtrl'
	});
})

app.controller('SyncCtrl', function($scope, FormTemplateFactory) {
	$scope.syncUp = function () {
		FormTemplateFactory.syncUp()
		.then(function() {
			console.log('sync up successful');
		})
	}

	$scope.syncDown = function() {
		FormTemplateFactory.syncDown()
		.then(function() {
			console.log('sync down successful');
		})
	}

	$scope.clearLocalDb = function() {
		FormTemplateFactory.clearDb()
		.then(function() {
			console.log('cleared local db');
		})
	}
})