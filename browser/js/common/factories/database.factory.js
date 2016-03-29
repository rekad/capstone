app.factory('DatabaseFactory', function($window) {
	var PouchDB = $window.PouchDB;
	var localDb = new PouchDB('thekraken-test');
	var usersDb = new PouchDB('users');
	// var remoteDb = new PouchDB('https://still-garden-49949.herokuapp.com/thekraken-test', {skipSetup: true, ajax: {rejectUnauthorized: false}});
	var remoteDb = new PouchDB('http://127.0.0.1:5984/thekraken-test', {skipSetup: true, ajax: {rejectUnauthorized: false}});


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