app.config(function($stateProvider) {
	$stateProvider.state('sync', {
		url: '/sync',
		templateUrl: '/js/sync/sync.view.html',
		controller: 'SyncCtrl',
		resolve: {
			stats: function(SyncFactory) {
				return SyncFactory.getStats();
			}
		}
	});
})

app.controller('SyncCtrl', function($scope, SyncFactory, stats) {
	$scope.stats = stats;
	$scope.syncResult = '';

	$scope.syncUp = function () {
		SyncFactory.syncUp()
		.then(function(res) {
			$scope.syncResult = res;
			console.log('sync up successful');
			$scope.$apply();
		})
	}

	$scope.syncDown = function() {
		SyncFactory.syncDown()
		.then(function(res) {
			$scope.syncResult = res;
			console.log('sync down successful');
			$scope.$apply();

		})
	}

	$scope.clearLocalDb = function() {
		SyncFactory.clearDb()
		.then(function(res) {
			console.log(res)
			$scope.syncResult = res;
			console.log('cleared local db');
		})
	}
})