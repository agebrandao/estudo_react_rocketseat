const { sequelize } = require('../../src/app/models');

module.exports = () => {
    // Deve-se acrescentar promise.all() pois o metódo trucante é uma promise e é demorado. Coloca uma promise envolvendoo tudo
    //Percorre todos os models do sequelize
    return Promise.all(Object.keys(sequelize.models).map(key => {
        return sequelize.models[key].destroy({ truncate: true, force: true });
    }));
}