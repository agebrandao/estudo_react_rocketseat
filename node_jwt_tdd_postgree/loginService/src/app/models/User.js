const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (Sequelize, DataType) => {

    const User = Sequelize.define("User", {
        name: DataType.STRING,
        email: DataType.STRING,
        password: DataType.VIRTUAL,
        password_hash: DataType.STRING,
    },{
        hooks:{
            beforeSave: async user => {
                if(user.password){
                    user.password_hash = await bcrypt.hash(user.password, 8)
                }                
            }
        }
    });

    // prototype??
    User.prototype.checkPassword = function(password) {
        return bcrypt.compare(password, this.password_hash);
        // this????
    }

    User.prototype.generateToken = function(password) {
        return jwt.sign({ id: this.id }, process.env.APP_SECRET);
        // this????

        // var token = jwt.sign({ id }, process.env.SECRET, {
        //     expiresIn: 300 // expires in 5min
        // });
        // res.status(200).send({ auth: true, token: token });
    }

    return User;
};