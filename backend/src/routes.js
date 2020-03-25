const express = require('express');
const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**Rotas da aplicação:  */
routes.get('/ongs', OngsController.index);//Lista todas as cadastradas ongs
routes.post('/ongs', OngsController.create);//Cadastra uma ong

routes.get('/incident', IncidentController.index);//Lista todos os casos
routes.post('/incident', IncidentController.create);//Cadastra um caso
routes.delete('/incident/:id', IncidentController.delete);//Deleta um caso
routes.get('/profile', ProfileController.index);//Lista todos os casos de uma ong

routes.post('/session', SessionController.create);//

module.exports = routes;