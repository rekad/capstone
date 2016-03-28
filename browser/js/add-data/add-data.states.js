app.config(function($stateProvider) {
    $stateProvider.state('add-data', {
            url: '/add-data',
            templateUrl: '/js/add-data/add-data.view.html',
            controller: 'AddDataCtrl',
            resolve: {
                forms: function(FormTemplatesFactory) {
                    return FormTemplatesFactory.fetchAll();
                }
            }
        })
        .state('add-data.submit', {
            url: '/:formTemplateId/submit',
            templateUrl: '/js/add-data/add-data-submit.view.html',
            controller: 'AddDataSubmitCtrl',
            resolve: {
                allFormTemplates: function(FormTemplatesFactory) {
                    return FormTemplatesFactory.fetchAll();
                },
                form: function($stateParams, FormTemplatesFactory, allFormTemplates) {    
                    if (!$stateParams.formTemplateId) {
                        if (!allFormTemplates[0]) return null;
                        $stateParams.formTemplateId = allFormTemplates[0]._id;
                    }
                    return FormTemplatesFactory.fetchOne($stateParams.formTemplateId);
                }
            }
        });
});