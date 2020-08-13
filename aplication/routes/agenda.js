const express = require('express');

const AgendaCtrl = require ('../controllers/AgendaController');

const Router = express.Router();

Router.get('/',AgendaCtrl.index)// localHost/agenda:listar todos los contactos
      .post('/',AgendaCtrl.create)  // localHost/agenda
      .get('/:key/:value',AgendaCtrl.find,AgendaCtrl.show)   // para buscar contacto 
      .put('/:key/:value',AgendaCtrl.find,AgendaCtrl.update)   // para actualizar cosas  
      .delete('/:key/:value',AgendaCtrl.find,AgendaCtrl.remove)// para eliminar

module.exports = Router;