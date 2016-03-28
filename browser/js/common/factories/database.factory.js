app.factory('DatabaseFactory', function($window) {
	var PouchDB = $window.PouchDB;
	var localDb = new PouchDB('thekraken-test');
	var usersDb = new PouchDB('users');
	var remoteDb = new PouchDB('https://104.131.103.208:6984/thekraken-test', {skipSetup: true, ajax: {rejectUnauthorized: false}});

	return {
		getLocalDb: function() {
			return localDb;
		},
		getRemoteDb: function() {
			return remoteDb;
		},
		getUsersDb: function() {
			return usersDb;
		}
	}
})