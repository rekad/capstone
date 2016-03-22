app.factory('CompletedFormsFactory', function($window) {
	var PouchDB = $window.PouchDB;
	var db = PouchDB('thekraken-test');

	return {
		fetchAll: function(templateId) {
			// fetch all documents that are type formTemplate
			return db.query(function(doc, emit) {
				if (doc.type === 'completedForm' && doc.formTemplateId === templateId) emit(doc);
			})
			.then(function(results) {
				return results.rows.map(function(row) {
					return row.key;
				});
			});
		},
		fetchOne: function(completedFormId) {
			return db.get(completedFormId);
		}
	};
});