const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res)=>{
    const params = req.query;
    console.log(params);
    // Query Params
    return res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'NeitanDev'
    });
});

routes.get('/getUserId/:id', (req, res)=>{
    const params = req.params;
    console.log(params);
    // Routes Params
    return res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'NeitanDev'
    });
});

routes.post('/createUser', (req, res)=>{
    const body = req.body;
    console.log(body);
    // Routes Params
    return res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'NeitanDev'
    });
});

module.exports = routes;