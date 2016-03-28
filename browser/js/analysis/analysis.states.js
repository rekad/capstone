app.config(function($stateProvider) {
  $stateProvider.state('analysis', {
    url: '/analysis',
    templateUrl: '/js/analysis/analysis.view.html',
    controller: 'AnalysisCtrl',
    resolve: {
      forms: function(FormTemplatesFactory) {
        return FormTemplatesFactory.fetchAll();
      }
    }
  });

});
