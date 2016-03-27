app.controller('AnalysisCtrl', function($scope, forms, CompletedFormsFactory) {
  $scope.forms = forms;
  $scope.formLabels = {};
  $scope.currentForm = null;

  $scope.forms.forEach(function(form) {
    form.formElements.forEach(function(element) {
      if (element.label) {
        if ($scope.formLabels[form._id]) {
          $scope.formLabels[form._id].push(element.label);
        } else {
          $scope.formLabels[form._id] = [element.label];
        }
      }
    });
  });

  $scope.seedLabels = function(form) {
    $scope.currentForm = form._id;
  }; 

  $scope.chartTypes = ['map', 'bar graph', 'pie chart', 'donut chart'];
  
  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  
});