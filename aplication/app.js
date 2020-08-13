const express = require ('express');
const bodyParser = require('body-parser');
const App = express();
const Agenda = require('./routes/agenda');
const Contacto = require('./routes/contacto');


App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended : false}));

App.use('/agenda',Agenda);
App.use('/contacto',Contacto);

module.exports = App;