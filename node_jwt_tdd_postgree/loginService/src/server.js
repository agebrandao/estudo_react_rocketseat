require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Define que apenas a aplicação na porta 3000 poderá acessar o backend
app.use(cors({ origin: 'http://localhost:3000'}))

// Libera o acesso externo pra todas as aplicações
// app.use(cors())

//Define que o express irá utilizar requisicões no formato json.
//use: Algo que vai ser valido para todas as rotas da aplicação. ex: get, post, put...
app.use(express.json());
app.use(routes);

//Application port
 app.listen(process.env.PORT || 3001);
