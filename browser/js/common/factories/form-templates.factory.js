app.factory('FormTemplatesFactory', function(DatabaseFactory) {
  var db = DatabaseFactory.getLocalDb();

  return {
    fetchAll: function() {
      // fetch all documents that are type formTemplate
      return db.query(function(doc) {
        if (doc.type === 'formTemplate') emit(doc);
      })
      .then(function(results) {
        return results.rows.map(function(row) {
          return row.key;
        });
      });
    },
    
    fetchOne: function(formTemplateId) {
      return db.get(formTemplateId);
    },

    submitForm: function(form) {
      return db.post(form);
      // add error handling
    }

  }
})