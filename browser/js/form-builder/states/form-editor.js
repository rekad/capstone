app.config(function ($stateProvider) {
    $stateProvider.state('form-templates.form-builder', {
        url: '/editor',
        templateUrl: '/js/form-builder/templates/form-editor.template.html',
        controller: 'FormBuilder'        
    });
});