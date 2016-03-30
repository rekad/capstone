app.controller('AnalysisCtrl', function($scope, forms, CompletedFormsFactory) {
    $scope.forms = forms;
    $scope.values = null;
    $scope.currentForm = null;
    $scope.labels = [];
    $scope.data = [[]];
    $scope.chartTypes = ['bar graph', 'pie chart', 'donut chart'];

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
                          if (typeof element.value === 'object') {
                            if (Array.isArray(element.value)) {
                            element.value.forEach(function(item) {
                              result.push(item);
                            });
                            } else {
                              for (var key in element.value) {
                                result.push(element.value[key]);
                              }
                            }
                          } else {
                            result.push(element.value);
                          }
                        }
                    });
                });
                return result;
            }).then(function(result) {
                var labelsDataObject = {};
                $scope.labels = [];
                if ($scope.chartOptions === 'bar graph') $scope.data = [
                    []
                ];
                else $scope.data = [];
                result.forEach(function(value) {
                    if (labelsDataObject[value]) {
                        labelsDataObject[value]++;
                    } else {
                        labelsDataObject[value] = 1;
                    }
                });
                for (var key in labelsDataObject) {
                    $scope.labels.push(key);
                    if ($scope.chartOptions === 'bar graph') $scope.data[0].push(labelsDataObject[key]);
                    else $scope.data.push(labelsDataObject[key]);
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

});
