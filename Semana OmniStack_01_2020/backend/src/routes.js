const { Router } = require ('express');

const DevControllers = require ('./controllers/DevController');
const SearchControllers = require ('./controllers/SearchController');

const routes = Router();

//HTTP Method: GET, POST, PUT e DELETE

// Query Params (for GET): req.query (Filtros, ordenações, paginações ...)
// Route Params (for PUT or DELETE): req.params (identifica um recurso na alteração ou remoção)
// Body (for POST or PUT): req.body (dados para criação ou alteração de um registro)

//Routes
// routes.get('/', (req, res) => {
//     // return res.send('Hello World');
//     console.log(req.body);
//     return res.json({ message: 'Hello World'});
// })

//Lista todos os devs
routes.get('/devs', DevControllers.index);

//Insere todos os devs
routes.post('/devs', DevControllers.store);

routes.get('/search', SearchControllers.index);

module.exports = routes;