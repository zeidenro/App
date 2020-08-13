const express = require('express');
const ContactoCtrl = require('../controllers/ContactoController');
const Router = express.Router();

Router.get('/',ContactoCtrl.index)
      .post('/', ContactoCtrl.create)
      .get('/:key/:value',ContactoCtrl.find,ContactoCtrl.show)
      .get('/:key/:value/:key/:value',ContactoCtrl.find,ContactoCtrl.show)
      .put('/:key/:value',ContactoCtrl.find,ContactoCtrl.update)
      .delete('/:key/:value',ContactoCtrl.find,ContactoCtrl.remove)


module.exports = Router;