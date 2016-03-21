app.factory('FormFactory', function($window) {
  var PouchDB = $window.PouchDB;
  var db = PouchDB('thekraken-test');
  var remoteDb = 'http://127.0.0.1:5984/thekraken-test';

  return {

    fetchAll: function() {
      return db.allDocs({ include_docs: true })
        .then(function(forms) {
          return forms.rows.map(function(row) {
            return row.doc;
          });
        })
    },
    fetchOne: function(formTemplateId) {
      return db.get(formTemplateId);
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
  $stateProvider.state('forms', {
    url: '/forms',
    templateUrl: '/js/forms/forms-view.html',
    controller: 'FormsCtrl',
    resolve: {
      forms: function(FormFactory) {
        return FormFactory.fetchAll();
      }
    }
  })
});

app.config(function($stateProvider) {
  $stateProvider.state('forms.forms-list', {
    url: '/list/:formTemplateId',
    templateUrl: '/js/forms/forms-list-view.html',
    controller: 'FormsListCtrl',
    resolve: {
      form: function($stateParams, FormFactory) {
        return FormFactory.fetchOne($stateParams.formTemplateId);
      }
    }
  })
})

app.controller('FormsListCtrl', function($scope, form) {
  $scope.form = form;
});

app.controller('FormsCtrl', function($scope, forms) {

  $scope.forms = forms;
  console.log(forms);


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
