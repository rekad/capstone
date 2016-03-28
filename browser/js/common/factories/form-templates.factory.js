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

    updateForm: function(form) {
      return db.put(form);
    },

    createForm: function() {
        var form = {
            title: "Example Title",
            description: "Example description",
            type: "formTemplate",
            formElements: []
        }
        return db.post(form);
        // add error handling
    }
    }
  }
})