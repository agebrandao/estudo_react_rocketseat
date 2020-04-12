const { Router } = require ('express');
// const { User} = require ('./app/models');
const SessionController  = require ('./app/controllers/SessionController')
const authMiddleware  = require ('./app/middleware/auth')

const routes = Router();

// User.create({
//     name: "Usuário teste",
//     email: "usuario@email.com",
//     password_hash: "123456789456123",
// });

routes.post('/sessions', SessionController.store);

// a autenticação será verificada apenas para as rotas abaixo
routes.use(authMiddleware)

routes.get('/dahsboard', (req, res) => {
    return res.status(200).send()
});

module.exports = routes;