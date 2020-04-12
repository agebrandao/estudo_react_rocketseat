const jwt = require('jsonwebtoken');
const { promisify } = require('util');

// https://imasters.com.br/back-end/autenticacao-json-web-token-jwt-em-node-js
module.exports = async (req, res, next) =>{

    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({ message: 'Token not provided'});        
    }

    // pega apenas a segunda parte do split [, token]
    const [, token] = authHeader.split(' ');

    try{
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);

        req.userID = decode.id;

        return next();

    }catch(err){
        return res.status(401).json({ message: 'Token invalid!'});       
    }
}