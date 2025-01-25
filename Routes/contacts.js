const express = require('express');
const routes = express.Router();

const contactsController = require('../Controllers/contacts');

routes.get('/', contactsController.getAll);

routes.get('/:id', contactsController.getSingle);

routes.post('/', contactsController.createContact);

routes.put('/:id', contactsController.updateContact);

routes.delete('/:id', contactsController.deleteContact);

module.exports = routes;
