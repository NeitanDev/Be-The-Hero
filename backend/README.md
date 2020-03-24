# Anotações da Aula:

 -> Rota / Recursos

*Metodos HTTP:
    GET: Buscar uma informações do back-end
    POST: Criar uma informação do back-end
    PUT: Alterar uma infmação do back-end
    DELETE: Deleta uma informação do back-end

->Tipos de Parametros:
    Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
    Routes Params: Parametros utilizados para identificar Rotas'
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

->Tipos de Bancos de Dados
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Sever
    NoSQL: MongoDB, CouchDB, etc.
    ->Diferença de usar consulta bruta e query builder:
        Driver: SELECT * FROM users
        Query Builder: table('users').select('*').where()

->Exemplos praticos:

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