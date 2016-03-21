/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

// Rewrite promisified?
// var bluebird = require('bluebird');
// var cradle = bluebird.promisifyAll(require('cradle'));
var cradle = require('cradle');
var dbName = "thekraken-test";

var db = new(cradle.Connection)().database(dbName);

db.destroy(function() {
    db.create(function(err) {
        db.save(documents, function(err, res) {
            if (err) console.log('Error while seeding database', err);
            else console.log('Seeding successfull', res);
        })
    })
});

var documents = [{
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text'
    }, {
        type: 'number'
    }, {
        type: 'checkboxes'
    }, {
        type: 'multipleChoice'
    }, {
        type: 'sectionBreak'
    }]
}, {
    title: "Another spectacular Form",
    description: "This is a rather dull form. Please improve.",
    formElements: [{
        type: 'text'
    }, {
        type: 'number'
    }, {
        type: 'checkboxes'
    }, {
        type: 'multipleChoice'
    }, {
        type: 'sectionBreak'
    }]
}];