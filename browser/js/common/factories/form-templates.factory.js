app.factory('FormTemplateFactory', function($window) {
  var PouchDB = $window.PouchDB;
  var db = PouchDB('thekraken-test');
  var remoteDb = 'http://127.0.0.1:5984/thekraken-test';

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
    },

    syncUp: function() {
      return PouchDB.replicate(db, remoteDb);
    },

    syncDown: function() {
    	return PouchDB.replicate(remoteDb, db);
    },

    clearDb: function() {
      return db.destroy()
      .then(function() {
        db = PouchDB('thekraken-test');
      });
    }

  }
})