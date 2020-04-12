const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

// Segurança
app.use(cors()); 
// Utilizando JSON, deve ser declarado antes das requisições/métodos GET/POST
app.use(express.json());
app.use(routes);
// Validações
app.use(errors()); 

module.exports = app;


// app.get('/',  (request, response) => {  
    // return response.send('Hello World');
// }); 

/*
 * Rota = localhost:3333/AlgumaCoisa
 * Recurso = /Users
 */

/*
 * Métodos HTTP:
 * GET: Buscar/Listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELET: Deletar uma informação no backend
 */

 /*
 * Tipos de Parâmetros:
 * QUERY PARAMS: Parâmetros nomeados e enviados na rota após o "?" (Filtros. Paginação)
 * ROUTE PARAMS: Parâmetros utilizados para identificar recursos
 * REQUEST BODY: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/*
 * Tipos de Bancos de Dados:
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */ 

 /*
 * Tipos de Acesso ao Bancos de Dados:
 * DRIVER: 'SELECT * FROM USERS
 * QUERY BUILDER: table('users').select('*').where()
 */ 

// app.post('/users/',  (request, response) => {  
//     const body = request.body;

//     console.log(body);
    
//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Elielton Joanir de Carvalho'
//     });
// }); 

// app.get('/users/:id',  (request, response) => {  
//     // Acessar via QUERY
//     //const params = request.query;

//     // Acessar via ROUTE
//     //const params = request.params;

//     console.log(params);
    
//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Elielton Carvalho'
//     });
// }); 

// Antes de implantar os testes de integração
//app.listen(3333);
