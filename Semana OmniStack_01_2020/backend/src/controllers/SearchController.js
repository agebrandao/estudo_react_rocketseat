const axios = require ('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray')

//  methods: index (list), show (Unico), store (inserir), update (alterar), destroy (deletar)

module.exports = {

    async index (req, res) {
        const { techs } = req.query;

        const techsArray = parseStringAsArray(techs);


        const devs = await Dev.find({
            techs:{
                // Devs que trabalham com determinada tecnologia ($in operador do mongo)
                $in: techsArray,
            },
            // Outros filtros acrescentar aqui
            // techs:{
            //     // Devs que trabalham com determinada tecnologia ($in operador do mongo)
            //     $in: techsArray,
            // },
        })
        // console.log(techsArray);

        return res.json({ devs: [] });
    }
}