app.factory('FormFactory', function($window) {
  var db = $window.PouchDB('form-data');

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
    }

  }
})

app.config(function($stateProvider) {
  $stateProvider.state('form-data', {
    url: '/form-data',
    templateUrl: '/js/form-data/form-data.html',
    controller: 'FormDataCtrl',
    resolve: {
      forms: function(FormFactory) {
        return FormFactory.fetchAll();
      }
    }
  })
});



app.controller('FormDataCtrl', function($scope, FormFactory, forms) {

  $scope.forms = forms;
  console.log(forms);



  $scope.submitForm = function() {
    console.log('submitting!', $scope.newForm);
    FormFactory.submitForm($scope.newForm)
    	.then(function() {
    		$scope.forms.push($scope.newForm);
    	})
  }



});
