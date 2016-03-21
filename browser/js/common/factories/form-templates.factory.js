app.factory('FormFactory', function($window) {
  var PouchDB = $window.PouchDB;
  var db = PouchDB('thekraken-test');
  var remoteDb = 'http://127.0.0.1:5984/thekraken-test';

  return {

    fetchAll: function() {
      return db.allDocs({ include_docs: true })
        .then(function(forms) {
          return forms.rows.map(function(row) {
            return row.doc;
          });
        })
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