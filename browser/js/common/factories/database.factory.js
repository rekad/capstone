app.factory('DatabaseFactory', function($window) {
	var PouchDB = $window.PouchDB;
	var localDb = new PouchDB('thekraken-test');
	var usersDb = new PouchDB('users');
	var remoteDb = new PouchDB('https://rekad.cloudant.com/thekraken-test', {skipSetup: true});

	return {
		getLocalDb: function() {
			return localDb;
		},
		getRemoteDb: function() {
			return remoteDb;
		},
		getUsersDb: function() {
			return usersDb;
		},
		clearLocalDb: function() {
			return localDb.destroy()
				.then(function() {
					localDb = new PouchDB('thekraken-test');
				})
		},
		replicateUp: function() {
			return PouchDB.replicate(localDb, remoteDb);
		},
		replicateDown: function() {
			return PouchDB.replicate(remoteDb, localDb);
		}
	}
})