app.controller('FormTemplatesCtrl', function($scope, forms, FormTemplatesFactory, $state) {
    $scope.forms = forms;
    $scope.createNewForm = function() {
        FormTemplatesFactory.createForm()
            .then(function(form) {
                $state.go("form-templates.form-builder", { id: form.id });
            })
    }
});