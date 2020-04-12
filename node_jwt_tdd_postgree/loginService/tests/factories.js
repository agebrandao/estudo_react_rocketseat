const faker = require('faker');
const { factory } = require('factory-girl');
const { User } = require('../src/app/models');


// factory.define('User', User, {
//     name: "User Teste",
//     email: "teste@email.com",
//     password: "789456123",
//   });

factory.define('User', User, {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  });

  module.exports = factory;