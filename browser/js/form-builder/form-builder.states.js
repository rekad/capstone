app.config(function($stateProvider) {
    $stateProvider.state('form-templates.form-builder', {
        url: '/editor/:id',
        templateUrl: '/js/form-builder/templates/form-editor.template.html',
        controller: 'FormBuilder',
        resolve: {
            allFormTemplates: function(FormTemplatesFactory) {
                return FormTemplatesFactory.fetchAll();
            },
            formTemplate: function($stateParams, FormTemplatesFactory, allFormTemplates) {
                if (!$stateParams.id) {
                    if (!allFormTemplates[0]) return null;
                    $stateParams.id = allFormTemplates[0]._id;
                }
                return FormTemplatesFactory.fetchOne($stateParams.id);
            }
        }
    });
});