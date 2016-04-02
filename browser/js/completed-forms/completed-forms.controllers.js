app.controller('CompletedFormsListCtrl', function($scope, forms, formTemplate) {
    $scope.completedForms = forms;
    $scope.filteredForms = $scope.completedForms;
    $scope.completedFormsForPage = $scope.filteredForms.slice(0, 10);
    $scope.formTemplate = formTemplate;

    //variables for pagination 
    $scope.currentPage = 1;
    $scope.formTemplateId = $scope.formTemplate._id;
    $scope.maxSize = 5;
    $scope.data = { availableOptions: [{ name: 10, id: 0 }, { name: 25, id: 1 }, { name: 50, id: 2 }, { name: 100, id: 3 }], selectedOption: { name: 10, id: 0 } };

    $scope.startSlice = 0;
    $scope.endSlice = 10;

    $scope.getTotalItems = function () {
        return $scope.filteredForms.length;
    };

    $scope.$watch('searchBar', function() {
        $scope.filteredForms = $scope.completedForms;
        if ($scope.searchBar) {
            var reg = new RegExp($scope.searchBar, 'i');
            $scope.filteredForms = $scope.filteredForms.filter(function(form) {
                for (let i = 0; i < form.formElements.length; i++) {
                    var val = form.formElements[i].value;
                    if (Array.isArray(val)) {
                        for (let j = 0; j < val.length; j++) {
                            if (reg.test(val[j])) return true;
                        }
                    } else if (reg.test(val)) {
                        // console.log('I am getting here!', val)
                        return true;
                    }
                }
                return false;
            });
        }
        $scope.completedFormsForPage = $scope.filteredForms.slice($scope.startSlice, $scope.endSlice);
        $scope.$evalAsync();
    });

    $scope.getPaginationNumbers = function() {
        var paginationAmount = Math.ceil($scope.filteredForms.length / $scope.data.selectedOption.name),
            paginationArr = [];
        for (let i = 1; i <= paginationAmount; i++) {
            paginationArr.push(i);
        }
        return paginationArr;
    };

    $scope.changePage = function(page) {
        //change rows showed
        $scope.updateSlice();
        $scope.completedFormsForPage = $scope.filteredForms.slice($scope.startSlice, $scope.endSlice);
        $scope.$evalAsync();
    };

    $scope.updateSlice = function() {
        $scope.startSlice = ($scope.currentPage - 1) * $scope.data.selectedOption.name;
        $scope.endSlice = Math.min($scope.startSlice + $scope.data.selectedOption.name, $scope.filteredForms.length);
    };

    $scope.updateRowsPerPage = function() {
        $scope.updateSlice();
        $scope.completedFormsForPage = $scope.filteredForms.slice($scope.startSlice, $scope.endSlice);
        $scope.$evalAsync();
    };
});

app.controller('CompletedFormsCtrl', function($scope, allFormTemplates) {
    $scope.originalForms = allFormTemplates;
    $scope.forms = $scope.originalForms;
    $scope.$watch('searchBar', function() {
        $scope.filteredForms = $scope.originalForms;
        if ($scope.searchBar) {
            var reg = new RegExp($scope.searchBar, 'i');
            $scope.filteredForms = $scope.filteredForms.filter(function(form) {
                return reg.test(form.title);
            });
        }
        $scope.forms = $scope.filteredForms.slice($scope.startSlice, $scope.endSlice);
        $scope.$evalAsync();
    });
});

app.controller('IndividualFormCtrl', function($scope, completedForm, CompletedFormsFactory) {
    $scope.completedForm = angular.copy(completedForm);
    $scope.isEditing = false;
    $scope.formTemplateId = $scope.completedForm.formTemplateId;


    $scope.toggleEdit = function() {
        $scope.isEditing = !$scope.isEditing;
    };

    $scope.cancelEdit = function() {
        $scope.toggleEdit();
        $scope.completedForm = angular.copy(completedForm);
    };

    $scope.updateForm = function() {

        console.log($scope.completedForm);

        CompletedFormsFactory.updateOne($scope.completedForm)
            .then(function(updatedForm) {
                console.log('Form submitted!', updatedForm);
                completedForm = angular.copy(updatedForm);
                $scope.completedForm = updatedForm;
                $scope.toggleEdit();
                $scope.$evalAsync();
            });
            //handle errors
    };
});