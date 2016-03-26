app.factory("SyncFactory", function(DatabaseFactory) {
    var db = DatabaseFactory.getLocalDb();
    var remoteDb = DatabaseFactory.getRemoteDb();

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
        },

        getStats: function() {
            // This has to be optimized using design docs and views
            return db.allDocs({ include_docs: true })
                .then(function(docs) {

                    var groupedCompleted = _.groupBy(docs.rows.filter(function(row) {
                        return row.doc.type === "completedForm";
                    }).map(function(row) {
                        return row.doc }), function(doc) {
                        return doc.formTemplateId;
                    })

                    var formTemplates = docs.rows.filter(function(row) {
                        return row.doc.type === "formTemplate";
                    }).map(function(row) {
                        return row.doc;
                    });

                    return {
                        completedFormsCount: docs.rows.filter(function(row) {
                            return row.doc.type === "completedForm";
                        }).length,
                        formTemplatesCount: docs.rows.filter(function(row) {
                            return row.doc.type === "formTemplate";
                        }).length,
                        completedFormsPerTemplate: formTemplates.map(function(formTemplate) {
                            return {
                                title: formTemplate.title,
                                count: groupedCompleted[formTemplate._id].length
                            }
                        })
                    }
                })
        }

    }
})

app.run(function($window, $rootScope) {
    $rootScope.online = navigator.onLine;
    $window.addEventListener("offline", function() {
        $rootScope.$apply(function() {
            $rootScope.online = false;
        });
    }, false);

    $window.addEventListener("online", function() {
        $rootScope.$apply(function() {
            $rootScope.online = true;
        });
    }, false);
});