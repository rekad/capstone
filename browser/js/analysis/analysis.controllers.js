app.controller('AnalysisCtrl', function($scope, forms, CompletedFormsFactory) {
  $scope.forms = forms;
  $scope.formLabels = {};
  $scope.values = null;
  $scope.currentForm = null;
  $scope.labels = [];
  $scope.data = [[]];

  $scope.scourForms = function(forms, soughtItem) {
    var result = {};
    forms.forEach(function(form) {
      form.formElements.forEach(function(element) {
        if (element[soughtItem]) {
          if (result[form._id]) {
            result[form._id].push(element[soughtItem]);
          } else {
            result[form._id] = [element[soughtItem]];
          }
        }
      });
    });
    return result;
  };

  $scope.formLabels = $scope.scourForms($scope.forms, 'label');

  $scope.valuesFromLabels = function(soughtLabel) {
    CompletedFormsFactory.fetchAll($scope.currentForm)
    .then(function(forms) {
      var result = [];
      forms.forEach(function(form) {
        form.formElements.forEach(function(element) {
          if (element.label && element.label === soughtLabel) {
            result.push(element.value);
            //need to add something to deal with arrays here, multiple values
          }
      });
    });
      return result;
  }).then(function(result) {
      var labelsDataObject = {};
      $scope.labels = [];
      $scope.data = [[]];
      result.forEach(function(value) {
        if (labelsDataObject[value]) {
          labelsDataObject[value] ++;
        } else {
          labelsDataObject[value] = 1;
        }
      });
      for (var key in labelsDataObject) {
        $scope.labels.push(key);
        $scope.data[0].push(labelsDataObject[key]);
      }
    }).then(function(result) {
      $scope.$digest();
    });
  };

  $scope.seedLabels = function(form) {
    $scope.currentForm = form._id;
  }; 

  $scope.graphChange = function() {
    $scope.valuesFromLabels($scope.dataOptions);
    //possibly include dataOptions2 at some point?
  };

  $scope.chartTypes = ['map', 'bar graph', 'pie chart', 'donut chart'];
  
  // $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  // $scope.series = ['Series A'];
  // $scope.data = [
  //   [28, 48, 40, 19, 86, 27, 90]
  // ];
  
});