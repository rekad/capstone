app.factory('AuthFactory', function($window) {
	var PouchDB = $window.PouchDB;
	var remoteDb = new PouchDB('http://104.131.103.208:5984/thekraken-test', {skipSetup: true});
	var db = new PouchDB('users');

	return {
		login: function(loginInfo) {
			var masterUser;
			var localUser;

			return remoteDb.login(loginInfo.username, loginInfo.password)
	            .then(function(res) {
	                if (res.error) throw res;
	                return remoteDb.getUser(res.name);
	            })
	            .then(function(user) {
	            	masterUser = user;

	            	return db.get('org.couchdb.user:' + masterUser.name)
	            })
	            .then(function(user) {
	            	localUser = user;

	            	var localUserRev = localUser._rev;
	            	localUser = masterUser;
	            	localUser._rev = localUserRev;
	            	return db.put(localUser);
	            })
	            .then(function() {
	            	return db.get('currentUser')
	            })
	            .then(function(currentUser) {
	            	currentUser.name = localUser.name;
	            	return db.put(currentUser);
	            }, function(error) {
	            	var currentUser = {_id: 'currentUser', name: localUser.name};
	            	return db.put(currentUser);
	            })
                .catch(function(error) {
	                console.log("error: ", error);
            	})
		},
		logout: function() {
			
		},
		getUser: function() {
			return db.get('currentUser')
				.then(function(currentUser) {
					return db.get('org.couchdb.user:' + currentUser.name)
				})
				.catch(function(err) {
					return null;
				})
		}
	}
})