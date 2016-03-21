app.factory('FormTemplateFactory', function($window) {
  var PouchDB = $window.PouchDB;
  var db = PouchDB('thekraken-test');
  var remoteDb = 'http://127.0.0.1:5984/thekraken-test';

  return {

    fetchAll: function() {
      //fetch all documents that are type formTemplate
      // return db.query('type', {
      //   key: 'formTemplate',
      //   include_docs: true
      // })
      // .then(function(forms) {
      //     return forms.rows.map(function(row) {
      //       return row.doc;
      //     });
      //   });
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
    }

  }
})