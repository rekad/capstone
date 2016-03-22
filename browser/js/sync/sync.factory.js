app.factory("SyncFactory", function($window) {

	var PouchDB = $window.PouchDB;
    var db = PouchDB('thekraken-test');
    var remoteDb = 'http://127.0.0.1:5984/thekraken-test';

    return {

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