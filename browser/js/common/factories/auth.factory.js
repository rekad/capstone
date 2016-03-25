app.factory('AuthFactory', function($window, $rootScope) {
	var PouchDB = $window.PouchDB;
	var remoteDb = new PouchDB('http://104.131.103.208:5984/thekraken-test', {skipSetup: true});
	var db = new PouchDB('users');

	return {
		login: function(loginInfo) {
			var masterUser;
			var localUser;

			// Logging in has multiple steps
			// 1. Login the user
			// 2. get user info from the master db
			// 3. save/update user info in local db
			// 4. store reference to current user in local db

			// Todo: Add offline login
			return remoteDb.login(loginInfo.username, loginInfo.password)
	            .then(function(res) {
	                if (res.error) throw res;
	                return remoteDb.getUser(res.name);
	            })
	            .then(function(user) {
	            	masterUser = user;
	            	console.log('masterUser: ', masterUser)

	            	return db.get('org.couchdb.user:' + masterUser.name)
	            })
	            .then(function(user) {
	            	localUser = user;

	            	console.log('localUser: ', localUser)

	            	var localUserRev = localUser._rev;
	            	localUser = masterUser;
	            	localUser._rev = localUserRev;
	            	return db.put(localUser);
	            }, function(error) {
	            	delete masterUser._rev;
	            	localUser = masterUser;
	            	console.log('localUser in case it doesnt exist yet: ', localUser)

	            	return db.put(masterUser);
	            })
	            .then(function() {
	            	return db.get('currentUser')
	            })
	            .then(function(currentUser) {
	            	currentUser.name = localUser.name;
	            	console.log('currentUser: ', currentUser)

	            	return db.put(currentUser);
	            }, function(error) {
	            	var currentUser = {_id: 'currentUser', name: localUser.name};
	            	console.log('currentUser in ca d e y: ', currentUser)

	            	return db.put(currentUser);
	            })
	            .then(function() {
	            	$rootScope.$broadcast('login-success');
	            })
                .catch(function(error) {
	                console.log("error: ", error);
            	})
		},
		logout: function() {
			// logging out means deleting the current user
			return db.get('currentUser').then(function(currentUser) {
				return db.remove(currentUser);
			})
			.catch(function(err) {
				console.log(err);
			})
		},
		getUser: function() {
			return db.get('currentUser')
				.then(function(currentUser) {
					console.log('found current user ', currentUser);
					return db.get('org.couchdb.user:' + currentUser.name)
				})
				.catch(function(err) {
					console.log('could not find current user')
					return null;
				})
		}
	}
})