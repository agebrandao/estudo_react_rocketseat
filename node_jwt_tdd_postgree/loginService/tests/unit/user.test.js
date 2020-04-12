const bcrypt = require('bcryptjs');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    });
    it('should encrypt user password', async() => {
        const user = await User.create({
            name: "User Teste",
            email: "teste@email.com",
            password: "789456123",        
        });

        // const hash = await bcrypt.hash("789456123", 8);

        const compareHash = await bcrypt.compare('789456123', user.password_hash);

        expect(compareHash).toBe(true);
    })
});
