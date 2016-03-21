app.config(function($stateProvider) {
  $stateProvider.state('completed-forms', {
    url: '/completed-forms',
    templateUrl: '/js/completed-forms/completed-forms.view.html',
    controller: 'CompletedFormsCtrl',
    resolve: {
      forms: function(FormTemplateFactory) {
        return FormTemplateFactory.fetchAll();
      }
    }
  })
  .state('completed-forms.forms-list', {
    url: '/:formTemplateId/list',
    templateUrl: '/js/completed-forms/completed-forms-list.view.html',
    controller: 'CompletedFormsListCtrl',
    resolve: {
      form: function($stateParams, FormTemplateFactory) {
        return FormTemplateFactory.fetchOne($stateParams.formTemplateId);
      }
    }
  });
});
