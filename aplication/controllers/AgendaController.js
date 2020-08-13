const Agenda = require('../models/Agenda')

//listar los usuarios con una agenda
function index(req,res){
    Agenda.find({})
        .then(agenda => {
            if(agenda.length) return res.status(200).send({agenda})
            return res.status(204).send({message: 'No Content'});
        }).catch(error => res.status(500).send({error}))
}
// Buscar al usuario
function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.agendas) return res.status(404).send({message: 'not found'});
    let agendas = req.body.agendas;
    return res.status(200).send({agendas});
}
// Crear al usuario 
function create(req,res){
    new Agenda(req.body).save()
        .then(agenda => res.status(201).send({agenda}))
        .catch(error => res.status(500).send({error}))
}
// Actualizar al usuario
function update(req,res){
    if(req.body.error)return res.status(500).send({error});
    if(!req.body.agendas) return res.status(404).send({message: 'no encontrado'})
    let agenda = req.body.agendas[0];
    agenda = Object.assign(agenda, req.body);
    agenda.save()
        .then(agenda => res.status(200).send({message: 'Update', agenda}))
        .catch(error => res.status(500).send({error}));
}
// Eliminar al usuario
function remove(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.agendas) return res.status(404).send({message:'no encontrado'});
    req.body.agendas[0].remove()
        .then(agenda => res.status(200).send({message: 'Removed', agenda}))
        .catch(error => res.status(500).send({error}));
}
// Encontrar al usuario 
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Agenda.find(query)
        .then(agendas => {
            if(!agendas.length)return next();
            req.body.agendas = agendas;
            return next();
        }).catch(error => {
            req.body.error = error;
            next();
        })

}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}