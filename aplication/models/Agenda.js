const mongoose = require('mongoose');

// los Usuarios de la agenda tendran que colocar su nombre, su telefono y se registrara la fecha del dia que se crearon y  aparte se les creara una id
const AgendaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

const Agenda = mongoose.model('Agenda',AgendaSchema);

module.exports = Agenda;