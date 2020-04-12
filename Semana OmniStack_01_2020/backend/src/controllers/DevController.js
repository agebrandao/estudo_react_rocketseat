//Chamadas para outras apis
const axios = require ('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray')

//  methods: index (list), show (Unico), store (inserir), update (alterar), destroy (deletar)

module.exports = {

    async index (req, res) {
        const devs = await Dev.find();        
        return res.json(devs);
    },

    async store (req, res) {

        const { gitHub_username, techs } = req.body;

        //Verifica se já existe o usuário no banco
        let dev = await Dev.findOne({ gitHub_username });

        if(!dev){

            //Faz uma chamada a API do gitHub que pode demorar a responder, então async e await vai esperar essa resposta.
            const apiRes = await axios.get(`http://api.github.com/users/${gitHub_username}`)
        
            //Data: todos os dados da resposta.
            //Armazena só as propriedades name, bio ...
            let { name, avatar_url, bio } = apiRes.data;
        
            //Se name não existir, colocar o login
            if(!name){
                name = apiRes.data.login
            }
        
            //Outra forma de fazer é o desestruturação  / Se name não existir, colocar o login
            // const { name = login, avatar_url, bio } = apiRes.data;
        
            const techsArray = parseStringAsArray(techs);

            // const techsArray = techs.split(',').map(tech => tech.trim());

            // const dev = await Dev.create({
            //     gitHub_username: gitHub_username,
            //     name: name,
            //     avatar_url: avatar_url,
            //     bio: bio,       
            //     techs: techsArray,
            // })
        
            //Como o nome da propriedade é igual do valor pode se usar a short sintaxe do javascript
            
            dev = await Dev.create({
                name,
                gitHub_username,     
                bio,  
                avatar_url,      
                techs: techsArray,
            })
        
            //Retorna tudo
            console.log(apiRes.data);
        
            console.log(name,
                gitHub_username,
                bio,
                avatar_url)
        
            // return res.send('Hello World');
            console.log(req.body);

        }
    
        // return res.json({ message: 'Hello World'});
    
        return res.json(dev);
    },

    async update(){

    },

    async destroy(){
        
    }
};