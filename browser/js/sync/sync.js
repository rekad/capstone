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

app.controller('SyncCtrl', function($scope, SyncFactory, stats, $uibModal) {
	$scope.stats = stats;
	$scope.syncResult = '';

	$scope.syncUp = function () {
		SyncFactory.syncUp()
		.then(function(result) {
			$uibModal.open({
				templateUrl: '/js/sync/syncUp-success.html',
				controller: function($scope, $uibModalInstance) {
					$scope.close = function() {
						$uibModalInstance.close();
					}
					$scope.result = result;
				}
			});
		})
	}

	$scope.syncDown = function() {
		SyncFactory.syncDown()
		.then(function(result) {
			$uibModal.open({
				templateUrl: '/js/sync/syncDown-success.html',
				controller: function($scope, $uibModalInstance) {
					$scope.close = function() {
						$uibModalInstance.close();
					}
					$scope.result = result;
				}
			});
		})
	}

	$scope.clearLocalDb = function() {
		SyncFactory.clearDb()
		.then(function(result) {
			$uibModal.open({
				templateUrl: '/js/sync/clearDb-success.html',
				controller: function($scope, $uibModalInstance) {
					$scope.close = function() {
						$uibModalInstance.close();
					}
					$scope.result = result;
				}
			});
		})
	}
})