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
	});
});

app.config(function($stateProvider) {
	$stateProvider.state('add-data.submit', {
		url: '/:formTemplateId/submit',
		templateUrl: '/js/add-data/add-data-submit.view.html',
		controller: 'AddDataSubmitCtrl',
		resolve: {
			form: function($stateParams, FormTemplatesFactory) {
				return FormTemplatesFactory.fetchOne($stateParams.formTemplateId);
			}
		}
	})
})