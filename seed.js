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

var completedForms = [];

var latrines = ['simple pit', 'indoor', 'open air'];
var waterConditions = ['non-treated', 'bottled', 'filtered', 'chlorinated', 'boiled'];
var virusInstances = ['Zika', 'Ebola', 'malaria', 'tuberculosis', 'HIV/AIDS', 'hepatitis'];
var streets = ['Ave La Paz', 'Blvd Morazan', 'Blvd Norte', 'Carretera Lepaterique', 'Calle La Alameda', 'Ave Balboa', 'Ave Espana'];
var cities = ['Tegucigalpa', 'San Pedro Sula', 'Choloma', 'La Ceiba', 'El Progreso', 'Choluteca', 'Comayagua', 'Puerto Cortes', 'La Lima', 'Danli', 'Siquatepeque', 'Catacamas', 'Juticalpa', 'Tocoa', 'Villanueva', 'Tela', 'Olanchito', 'Santa Rosa de Copan', 'San Lorenzo', 'Cofradia', 'El Paraiso', 'La Paz', 'Yoro', 'La Entrada', 'Potrerillos', 'Santa Barbara', 'Talanga', 'Nacaome', 'Santa Rita', 'Intibuca'];
var states = ['Atlántida', 'Choluteca', 'Colón', 'Comayagua', 'Copán', 'Cortés', 'El Paraíso', 'Francisco Morazán', 'Gracias a Dios', 'Intibucá', 'Islas de la Bahía', 'La Paz', 'Lempira', 'Ocotepeque', 'Olancho', 'Santa Bárbara', 'Valle', 'Yoro'];
var lastNames = ['Garcia', 'Rodriguez', 'Martinez', 'Lopez', 'Gonzalez', 'Perez', 'Sanchez', 'Ramirez', 'Torres', 'Flores', 'Rivera', 'Gomez', 'Diaz', 'Morales', 'Cruz', 'Ortiz', 'Chavez'];

var randomCompletedFormGenerator = function() {
    //seeding normal random data first
    for (var i = 0; i < 130; i++) {
        var sampleForm = {
            type: "completedForm",
            title: "Family Health Information",
            description: "A form for recording basic family health information in rural areas.",
            formElements: [{
                type: 'lineText',
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
                options: [{ value: "simple pit" }, { value: "indoor" }, { value: "open air" }],
                value: "simple pit"
            }, {
                type: 'checkbox',
                label: 'Drinking Water Conditions',
                options: [{ value: "non-treated" }, { value: "bottled" }, { value: "filtered" }, { value: "chlorinated" }, { value: "boiled" }],
                value: {}
            }, {
                type: 'checkbox',
                label: 'Observed Virus Instances',
                options: [{ value: "Zika" }, { value: "Ebola" }, { value: "malaria" }, { value: "tuberculosis" }, { value: "HIV/AIDS" }, { value: "hepatitis" }],
                value: {}
            }]
        };
        sampleForm.formElements[0].value = lastNames[Math.floor(Math.random() * lastNames.length)];
        sampleForm.formElements[1].value = Math.floor((Math.random() * 10) + 1);
        sampleForm.formElements[2].value.streetAddress = String(Math.floor(Math.random() * 100)) + " " + streets[Math.floor(Math.random() * streets.length)];
        sampleForm.formElements[2].value.streetAddress2 = "Apartment " + Math.floor(Math.random() * 30);
        sampleForm.formElements[2].value.city = cities[Math.floor(Math.random() * cities.length)];
        sampleForm.formElements[2].value.state = states[Math.floor(Math.random() * states.length)];
        sampleForm.formElements[3].value = latrines[Math.floor(Math.random() * latrines.length)];
        var x = Math.floor(Math.random() * waterConditions.length);
        sampleForm.formElements[4].value[x] = waterConditions[x];
        var y = Math.floor(Math.random() * virusInstances.length);
        sampleForm.formElements[5].value[y] = virusInstances[y];
        completedForms.push(sampleForm);
    }
    //seeding our zika virus outbreak data next to skew overall data
    for (var j = 0; j < 70; j++) {
        var otherSampleForm = {
            type: "completedForm",
            title: "Family Health Information",
            description: "A form for recording basic family health information in rural areas.",
            formElements: [{
                type: 'lineText',
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
                options: [{ value: "simple pit" }, { value: "indoor" }, { value: "open air" }],
                value: "simple pit"
            }, {
                type: 'checkbox',
                label: 'Drinking Water Conditions',
                options: [{ value: "non-treated" }, { value: "bottled" }, { value: "filtered" }, { value: "chlorinated" }, { value: "boiled" }],
                value: {}
            }, {
                type: 'checkbox',
                label: 'Observed Virus Instances',
                options: [{ value: "Zika" }, { value: "Ebola" }, { value: "malaria" }, { value: "tuberculosis" }, { value: "HIV/AIDS" }, { value: "hepatitis" }],
                value: {}
            }]
        };
        otherSampleForm.formElements[0].value = lastNames[Math.floor(Math.random() * lastNames.length)];
        otherSampleForm.formElements[1].value = Math.floor((Math.random() * 10) + 1);
        otherSampleForm.formElements[2].value.streetAddress = String(Math.floor(Math.random() * 100)) + " " + streets[Math.floor(Math.random() * streets.length)];
        otherSampleForm.formElements[2].value.streetAddress2 = "Apartment " + Math.floor(Math.random() * 30);
        otherSampleForm.formElements[2].value.city = cities[Math.floor(Math.random() * cities.length)];
        otherSampleForm.formElements[2].value.state = states[Math.floor(Math.random() * states.length)];
        otherSampleForm.formElements[3].value = latrines[2];
        var a = Math.floor(Math.random() * waterConditions.length);
        otherSampleForm.formElements[4].value[a] = waterConditions[a];
        otherSampleForm.formElements[5].value[0] = virusInstances[0];
        completedForms.push(otherSampleForm);
    }
};

randomCompletedFormGenerator();

var formTemplates = [{
    type: "formTemplate",
    title: "Family Health Information",
    description: "A form for recording basic family health information in rural areas.",
    formElements: [{
        type: 'lineText',
        label: 'Family Name'
    }, {
        type: 'number',
        label: 'Family Size'
    }, {
        type: 'address',
        label: 'Address'
    }, {
        type: 'multipleChoice',
        label: 'Latrine Type',
        options: [{value: "simple pit"}, {value: "indoor"}, {value: "open air"}]
    }, {
        type: 'checkbox',
        label: 'Drinking Water Conditions',
        options: [{value: "non-treated"}, {value: "bottled"}, {value: "filtered"}, {value: "chlorinated"}, {value: "boiled"}]
    }, {
        type: 'checkbox',
        label: 'Observed Virus Instances',
        options: [{value: "Zika"}, {value: "Ebola"}, {value: "malaria"}, {value: "tuberculosis"}, {value: "HIV/AIDS"}, {value: "hepatitis"}]
}]}];

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
            completedForms.forEach(function(form) {
                form.formTemplateId = res[0].id;
            });

            db.save(completedForms, function(err, res) {
                if (err) console.log('Error while seeding database', err);
                else console.log('Seeding of completed forms successful', res);
            });
        });
});
});


