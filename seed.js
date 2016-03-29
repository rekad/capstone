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

var connection = new(cradle.Connection)('https://couch.io', 443, {
     auth: { username: 'john', password: 'fha82l' }
 });
var db = new(cradle.Connection)().database(dbName);

db.destroy(function() {
    db.create(function(err) {
        db.save(formTemplates, function(err, res) {
            if (err) console.log('Error while seeding database', err);
            else console.log('Seeding of form templates successful', res);
            console.log(res);
            completedForms.forEach(function(form) {
                form.formTemplateId = res[0].id;
            });
            completedForms[12].formTemplateId = res[1].id;

            db.save(completedForms, function(err, res) {
                if (err) console.log('Error while seeding database', err);
                else console.log('Seeding of completed forms successful', res);
            });
        });
    });
});

var streets = ['Ave La Paz', 'Blvd Morazan', 'Blvd Norte', 'Carretera Lepaterique', 'Calle La Alameda', 'Ave Balboa', 'Ave Espana'];
var cities = ['Tegucigalpa', 'San Pedro Sula', 'Choloma', 'La Ceiba', 'El Progreso', 'Choluteca', 'Comayagua', 'Puerto Cortes', 'La Lima', 'Danli', 'Siquatepeque', 'Catacamas', 'Juticalpa', 'Tocoa', 'Villanueva', 'Tela', 'Olanchito', 'Santa Rosa de Copan', 'San Lorenzo', 'Cofradia', 'El Paraiso', 'La Paz', 'Yoro', 'La Entrada', 'Potrerillos', 'Santa Barbara', 'Talanga', 'Nacaome', 'Santa Rita', 'Intibuca'];
var states = ['Atlántida', 'Choluteca', 'Colón', 'Comayagua', 'Copán', 'Cortés', 'El Paraíso', 'Francisco Morazán', 'Gracias a Dios', 'Intibucá', 'Islas de la Bahía', 'La Paz', 'Lempira', 'Ocotepeque', 'Olancho', 'Santa Bárbara', 'Valle', 'Yoro'];
var lastNames = ['Garcia', 'Rodriguez', 'Martinez', 'Lopez', 'Gonzalez', 'Perez', 'Sanchez', 'Ramirez', 'Torres', 'Flores', 'Rivera', 'Gomez', 'Diaz', 'Morales', 'Cruz', 'Ortiz', 'Chavez'];

var randomCompletedFormGenerator = function() {
  for (var i=0; i<200; i++) {
    var newForm = 
    //generate random form
    completedForms.push(newForm);
  }
};

var formTemplates = [{
    type: "formTemplate",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name'
    }, {
        type: 'number',
        label: 'Number of Children'
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"]
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"]
    }]
}, {
    type: "formTemplate",
    title: "Another spectacular Form",
    description: "This is a rather dull form. Please improve.",
    formElements: [{
        type: 'text',
        label: 'Boat Name'
    }, {
        type: 'number',
        label: 'Length'
    }, {
        type: 'sectionBreak',
        title: 'More Questions',
        description: 'These questions are rather silly.'
    }, {
        type: 'multipleChoice',
        label: 'Boat Size',
        choices: ["large", "medium", "small"]
    }, {
        type: 'checkboxes',
        label: 'Amenities',
        choices: ["kitchen", "pool", "pirate flag"]
    }]
}, {
    type: "formTemplate",
    title: "A form with location and date",
    description: "In case we want to do location/date analysis.",
    formElements: [{
        type: 'text',
        label: 'Name of Collection Location'
    }, {
        type: 'number',
        label: 'Latitude/Longitude of Collection Location'
    }, {
        type: 'number',
        label: 'Date of Collection'
    }, {
        type: 'sectionBreak',
        title: 'Form Questions',
        description: 'These questions are excellent.'
    }, {
        type: 'multipleChoice',
        label: 'Virus Sickness Level',
        choices: ["critical", "medium", "minor"]
    }, {
        type: 'checkboxes',
        label: 'Symptoms',
        choices: ["nausea", "spots", "sudden love of cats"]
    }]
}];

var completedForms = [{
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Patrick"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 7
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "male"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "dog"]
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "A form with location and date",
    description: "In case we want to do location/date analysis.",
    formElements: [{
        type: 'text',
        label: 'Name of Collection Location',
        value: 'Medellin, Colombia'
    }, {
        type: 'number',
        label: 'Latitude/Longitude of Collection Location',
        value: ['6.15N', '75.35W']
    }, {
        type: 'number',
        label: 'Date of Collection',
        value: '4/8/17'
    }, {
        type: 'sectionBreak',
        title: 'Form Questions',
        description: 'These questions are excellent.'
    }, {
        type: 'multipleChoice',
        label: 'Virus Sickness Level',
        choices: ["critical", "medium", "minor"],
        value: 'critical'
    }, {
        type: 'checkboxes',
        label: 'Symptoms',
        choices: ["nausea", "spots", "sudden love of cats"],
        value: 'nausea'
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "Family Health Information",
    description: "A form for recording basic family health information in rural areas.",
    formElements: [{
        type: 'text',
        label: 'Family Name',
        value: "Hermida"
    }, {
        type: 'number',
        label: 'Family Size',
        value: 5
    }, {
        type: 'address',
        label: 'Address',
        value: {
            streetAddress: '34 Ave La Paz',
            streetAddress2: 'Apartment 7',
            city: 'San Pedro Sula',
            state: 'Cortes',
            country: 'Honduras'
        }
    }, {
        type: 'multipleChoice',
        label: 'Latrine Type',
        choices: ["simple pit", "indoor", "open air"],
        value: "simple pit"
    }, {
        type: 'checkboxes',
        title: 'Drinking Water Conditions',
        choices: ["non-treated", "bottled", "filtered", "chlorinated", "boiled"],
        value: "non-treated"
    }, {
        type: 'checkboxes',
        title: 'Observed Virus Instances',
        choices: ["Zika", "Ebola", "malaria", "tuberculosis", "HIV/AIDS", "hepatitis"],
        value: "Zika"
    }]
}, {
    type: "completedForm",
    title: "A great Form",
    description: "This is a fantastic form. There might be no better one.",
    formElements: [{
        type: 'text',
        label: 'Name',
        value: "Kate"
    }, {
        type: 'number',
        label: 'Number of Children',
        value: 5
    }, {
        type: 'multipleChoice',
        label: 'Gender',
        choices: ["male", "female", "other"],
        value: "female"
    }, {
        type: 'sectionBreak',
        title: 'Pet Questions',
        description: 'These questions are very important!'
    }, {
        type: 'checkboxes',
        label: 'Pets',
        choices: ["cat", "dog", "parrot"],
        value: ["cat", "parrot"]
    }]
}, {
    type: "completedForm",
    title: "Another spectacular Form",
    description: "This is a rather dull form. Please improve.",
    formElements: [{
        type: 'text',
        label: 'Boat Name',
        value: "Persephone"
    }, {
        type: 'number',
        label: 'Length',
        value: 500
    }, {
        type: 'sectionBreak',
        title: 'More Questions',
        description: 'These questions are rather silly.',
    }, {
        type: 'multipleChoice',
        label: 'Boat Size',
        choices: ["large", "medium", "small"],
        value: "large"
    }, {
        type: 'checkboxes',
        label: 'Amenities',
        choices: ["kitchen", "pool", "pirate flag"],
        value: ["kitchen", "pool"]
    }]
}]