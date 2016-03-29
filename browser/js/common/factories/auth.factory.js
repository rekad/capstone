
app.factory('AuthFactory', function(DatabaseFactory) {
	var remoteDb = DatabaseFactory.getRemoteDb();
	var usersDb = DatabaseFactory.getUsersDb();

	return {
		login: function(loginInfo) {
			var masterUser;
			var localUser;

			// Logging in has multiple steps
			// 1. Login the user
			// 2. get user info from the master usersDb
			// 3. save/update user info in local usersDb
			// 4. store reference to current user in local usersDb

			// Todo: Add offline login
			return remoteDb.login(loginInfo.username, loginInfo.password)
	            .then(function(res) {
	                if (res.error) throw res;
	                return remoteDb.getUser(res.name);
	            })
	            .then(function(user) {
	            	masterUser = user;
	            	console.log('masterUser: ', masterUser)

	            	return usersDb.get('org.couchdb.user:' + masterUser.name)
	            })
	            .then(function(user) {
	            	localUser = user;

	            	console.log('localUser: ', localUser)

	            	var localUserRev = localUser._rev;
	            	localUser = masterUser;
	            	localUser._rev = localUserRev;
	            	
	            	return usersDb.put(localUser);

	            })
	            .then(function() {
	            	return usersDb.get('currentUser')
	            })
	            .then(function(currentUser) {
	            	currentUser.name = localUser.name;

	            	return usersDb.put(currentUser);
	            }, function(error) {
	            	var currentUser = {_id: 'currentUser', name: localUser.name};
	            	return usersDb.put(currentUser);
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
			return usersDb.get('currentUser').then(function(currentUser) {
				return usersDb.remove(currentUser);
			})
			.catch(function(err) {
				console.log(err);
			})
		},
		getUser: function() {
			return usersDb.get('currentUser')
				.then(function(currentUser) {

					return usersDb.get('org.couchdb.user:' + currentUser.name)
				})
				.catch(function(err) {
					console.log('could not find current user')
					return null;
				})
		}
	}
})