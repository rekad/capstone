app.config(function($stateProvider) {
    $stateProvider.state('form-templates.form-builder', {
        url: '/editor/:id',
        templateUrl: '/js/form-builder/templates/form-editor.template.html',
        controller: 'FormBuilder',
        resolve: {
            formTemplate: function($stateParams, FormTemplatesFactory) {
                return FormTemplatesFactory.fetchOne($stateParams.id);
            }
        }
    });
});