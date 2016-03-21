app.config(function($stateProvider) {
  $stateProvider.state('completedForms', {
    url: '/completedforms',
    templateUrl: '/js/completed-forms/main.view.html',
    controller: 'CompletedFormsViewCtrl',
    resolve: {
      forms: function(FormFactory) {
        return FormFactory.fetchAll();
      }
    }
  })
});

app.config(function($stateProvider) {
  $stateProvider.state('completedForms.list', {
    url: '/:formTemplateId/list',
    templateUrl: '/js/completed-forms/list.view.html',
    controller: 'CompletedFormsListCtrl',
    resolve: {
      form: function($stateParams, FormFactory) {
        return FormFactory.fetchOne($stateParams.formTemplateId);
      }
    }
  })
});
