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

app.controller('SyncCtrl', function($scope, $rootScope, SyncFactory, stats, $uibModal) {
	$scope.stats = stats;

	function updateStats() {
		SyncFactory.getStats()
			.then(function(stats) {
				$scope.stats = stats;
			});
		}

	$scope.syncUp = function () {
		SyncFactory.syncUp()
		.then(function(result) {
			updateStats();
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
			updateStats();
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
			updateStats();
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
		.catch(function(error) {
			console.log('error clearing the db', error);
		})
	}
})