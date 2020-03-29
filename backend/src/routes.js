const express = require('express');
// Crypto e Connection repassados para o OngController
// const crypto = require('crypto');
// Conexão com o BD
// const connection = require('./database/connection');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); 
routes.post('/ongs', OngController.create); 

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index); 
routes.post('/incidents', IncidentController.create); 
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

// routes.get('/ongs', async (request, response) => {
//   const ongs = await connection('ongs').select('*');

//   return response.json(ongs);
// });


// Código migrado para o OngController
// routes.post('/ongs',  async (request, response) => {  
    
    // data = retornará todos os dados passados pelo JSON
    // const data = request.body;
    // console.log(data);
    
    // const { name, email, whatsapp, city, uf } =  request.body;

    // const id = crypto.randomBytes(4).toString('HEX');

    // await connection('ongs').insert({
    //     id,
    //     name,
    //     email,
    //     whatsapp,
    //     city,
    //     uf,
    // });
    
    // return response.json({ id });
// }); 

// module.exports = routes;