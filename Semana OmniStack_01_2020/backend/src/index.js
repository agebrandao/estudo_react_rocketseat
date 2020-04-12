const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

//Conexão com o banco MongoDB (Não relacional)
//mongodb+srv://<usuarioteste>:<password>@cluster0-t5kx2.mongodb.net/<bancotest>?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://teste:teste@cluster0-t5kx2.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Define que apenas a aplicação na porta 3000 poderá acessar o backend
app.use(cors({ origin: 'http://localhost:3000'}))

// Libera o acesso externo pra todas as aplicações
// app.use(cors())

//Define que o express irá utilizar requisicões no formato json.
//use: Algo que vai ser valido para todas as rotas da aplicação. ex: get, post, put...
app.use(express.json());
app.use(routes);

//Application port
app.listen(3050);
