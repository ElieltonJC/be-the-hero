const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
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

routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.create); 

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}),IncidentController.index); 

routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),    
}), IncidentController.create); 

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), IncidentController.delete);

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