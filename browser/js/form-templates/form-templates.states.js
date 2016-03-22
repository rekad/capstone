app.config(function($stateProvider) {
  $stateProvider.state('form-templates', {
    url: '/form-templates',
    templateUrl: '/js/form-templates/form-templates.view.html',
    controller: 'FormTemplatesCtrl',
    resolve: {
      forms: function(FormTemplateFactory) {
        return FormTemplateFactory.fetchAll();
      }
    }
  })
});

// app.config(function($stateProvider) {
//   $stateProvider.state('completed-forms.forms-list', {
//     url: '/:formTemplateId/list',
//     templateUrl: '/js/completed-forms/completed-forms-list.view.html',
//     controller: 'CompletedFormsListCtrl',
//     resolve: {
//       form: function($stateParams, FormFactory) {
//         return FormFactory.fetchOne($stateParams.formTemplateId);
//       }
//     }
//   })
// });
