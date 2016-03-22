app.config(function($stateProvider) {
  $stateProvider.state('completed-forms', {
    url: '/completed-forms',
    templateUrl: '/js/completed-forms/completed-forms.view.html',
    controller: 'CompletedFormsCtrl',
    resolve: {
      forms: function(FormTemplatesFactory) {
        return FormTemplatesFactory.fetchAll();
      }
    }
  })
  .state('completed-forms.forms-list', {
    url: '/:formTemplateId/list',
    templateUrl: '/js/completed-forms/completed-forms-list.view.html',
    controller: 'CompletedFormsListCtrl',
    resolve: {
      forms: function($stateParams, CompletedFormsFactory) {
        return CompletedFormsFactory.fetchAll($stateParams.formTemplateId);
      },
      formTemplate: function($stateParams, FormTemplatesFactory) {
        return FormTemplatesFactory.fetchOne($stateParams.formTemplateId);
      }
    }
  });
});
