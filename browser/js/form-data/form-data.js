app.factory('FormFactory', function($window) {
  var PouchDB = $window.PouchDB;
  var db = PouchDB('form-data');
  var remoteDb = 'http://127.0.0.1:5984/form-data';

  return {

    fetchAll: function() {
      return db.allDocs({ include_docs: true })
        .then(function(forms) {
          return forms.rows.map(function(row) {
            return row.doc;
          });
        })
    },

    submitForm: function(form) {
      return db.post(form);
      // add error handling
    },

    syncUp: function() {
      return PouchDB.replicate(db, remoteDb);
    },

    syncDown: function() {
    	return PouchDB.replicate(remoteDb, db);
    }

  }
})

app.config(function($stateProvider) {
  $stateProvider.state('formData', {
    url: '/forms',
    templateUrl: '/js/form-data/form-data.html',
    controller: 'FormDataCtrl',
    // resolve: {
    //   forms: function(FormFactory) {
    //     return FormFactory.fetchAll();
    //   }
    // }
  })
});

app.controller('FormDataCtrl', function($scope) {

  // $scope.forms = forms;
  // console.log(forms);


  // $scope.submitForm = function() {
  //   console.log('submitting!', $scope.newForm);
  //   FormFactory.submitForm($scope.newForm)
  //     .then(function() {
  //       $scope.forms.push($scope.newForm);
  //     })
  // }
  // $scope.syncToDb = function() {
  //   FormFactory.syncUp()
  //     .then(function() {
  //       console.log('Synchronisation to DB was successful!');
  //     });
  // }

  // $scope.syncFromDb = function() {
  // 	FormFactory.syncDown()
  // 		.then(function() {
  // 			console.log('synced down was successful')
  // 			return FormFactory.fetchAll();
  // 		})
  // 		.then(function(forms) {
  // 			$scope.forms = forms;
  // 		})
  // }

});
