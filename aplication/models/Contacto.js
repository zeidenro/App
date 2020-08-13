const mongoose = require('mongoose');
// los contactos tendran 4 caracterisiticas nombre,telefono, el nombre del dueño de la agenda y la fecha en que fue registrado y aparte se le creara una id en la base de datos 
const ContactoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    contactoCreateName: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

const Contacto = mongoose.model('Contacto',ContactoSchema);

module.exports = Contacto;