const Contacto = require('../models/Contacto');

// Listar todos los contactos 
function index(req, res){
    Contacto.find({})
        .then(contacto => {
            if(contacto.length) return res.status(200).send({contacto})
            return res.status(204).send({message:'Not Content'})
        }).catch(error => res.status(500).send({error}))
}
// buscar contacto por alguna key
function show(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.contactos) return res.status(404).send({message: 'not found'});
    let contactos = req.body.contactos;
    return res.status(200).send({contactos});
}
// Crear Contacto
function create(req, res){
    new Contacto(req.body).save()
    .then(contacto => res.status(201).send({contacto}))
    .catch(error => res.status(500).send({error}))
}
// Actualizar contacto por la key
function update(req, res){
    if(req.body.error)return res.status(500).send({error});
    if(!req.body.contactos) return res.status(404).send({message: 'NOT Found'})
    let contacto = req.body.contactos[0];
    contacto = Object.assign(contactos, req.body);
    contacto.save()
        .then(contacto => res.status(200).send({message: 'Update', contactos}))
        .catch(error => res.status(500).send({error}));    
}
// Eliminar contacto 
function remove(req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.contactos) return res.status(404).send({message:'Not Found'});
    req.body.contactos[0].remove()
        .then(contacto => res.status(200).send({message: 'Removed', contacto}))
        .catch(error => res.status(500).send({error}));    
}
//Encontrar al contacto 
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Contacto.find(query)
        .then(contactos => {
            if(!contactos.length)return next();
            req.body.contactos = contactos;
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