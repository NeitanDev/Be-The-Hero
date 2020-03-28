const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**Rotas da aplicação:  */
routes.get('/ongs', OngsController.index);//Lista todas as cadastradas ongs
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(15),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngsController.create);//Cadastra uma ong

routes.get('/incident', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.index);//Lista todos os casos

routes.post('/incident', IncidentController.create);//Cadastra um caso

routes.delete('/incident/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), IncidentController.delete);//Deleta um caso

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
}), ProfileController.index);//Lista todos os casos de uma ong

routes.post('/session', SessionController.create);//

module.exports = routes;