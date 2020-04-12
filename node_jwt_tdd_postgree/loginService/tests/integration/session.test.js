const request = require('supertest');
const express = require('express');
const routes = require('../../src/routes');

const { User } = require("../../src/app/models");
// truncate vai deletar a tabela depois de cada teste
const truncate = require('../utils/truncate');
const factory = require('../factories');

const app = express();
app.use(express.json());
app.use(routes);

describe('Autentication', () => {

    // it('should sum two numbers', () => {
    //     const x = 2;
    //     const y = 4;

    //     const sum = x+y;

    //     expect(sum).toBe(6);
    // });

    // it('should receive JWT token when authenticated with valid credencials', async () => {
    //     const user = await User.create({
    //         name: "User Teste",
    //         email: "teste@email.com",
    //         password_hash: "789456123",
    //     });

    //     console.log("User teste: " + user);

    //     expect(user.email).toBe('teste@email.com');
    // });

    // // Executa antes de todos os testes
    // beforeAll();
    // //Executa antes de cada teste
    // beforeEach();
    // // Executa depois de cada teste
    // afterEach();
    // // Executa depois de todos os testes
    // afterAll();

    beforeEach(async () => {
        await truncate();
    });

    it('should authenticated with valid credencials', async () => {

        // const user = await User.create({
        //     name: "User Teste",
        //     email: "teste@email.com",
        //     password: "789456123",
        // });
        // Ou usando factory para nao precisar replicar em todos dos métodos
        const user = await factory.create('User', {
            password: '789456123'
        })

        // console.log(user);

        // Rota sessions
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '789456123'
            });

        expect(response.status).toBe(200);

    });

    it('should not authenticated with invalid credencials', async () => {

        const user = await factory.create('User', {
            password: '789456123'
        })

        // Rota sessions
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '55555555'
            });

        expect(response.status).toBe(401);

    });

    it('should return jwt token when  authenticated', async () => {

        const user = await factory.create('User', {
            password: '789456123'
        })

        // Rota sessions
        const response = await request(app)
            .post('/sessions')
            .send({
                email: user.email,
                password: '789456123'
            });

        expect(response.body).toHaveProperty('token');

    });

    it('should be able to access private routes when authenticated', async () => {

        const user = await factory.create('User', {
            password: '789456123'
        })

        const response = await request(app)
            .get('/dashboard')
            .set('Authorization', 'Bearer ' + user.generateToken())
            // .set('Authorization', `Bearer ${user.generateToken()}`);

        expect(response.status).toBe(200);

    });

    it('should not be able to access private routes without jwt token', async () => {

        const user = await factory.create('User', {
            password: '789456123'
        })

        const response = await request(app).get('/dashboard')

        expect(response.status).toBe(401);

    });

    it('should not be able to access private routes with invalid jwt token', async () => {

        const user = await factory.create('User', {
            password: '789456123'
        })

       const response = await request(app)
       .get('/dashboard')
       .set('Authorization', `Bearer 123456`);

        expect(response.status).toBe(401);

    });

});