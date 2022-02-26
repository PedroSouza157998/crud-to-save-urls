const app = require('../src/app.js');
const request = require('supertest');

describe('Validate the functions from user', () => {
    it('should create a new user', async () => {
        const response = await request(app)
        .post('/signup').send(
            {
                name: "test_user",
                password: "12345"
            }
        )
        expect(response.body.success).toBeTruthy();
        expect(response.body.user.name).toBeTruthy();
    });
    
    it('not should create a new user because the min length', async () => {
        const response = await request(app)
        .post('/signup').send(
            {
                name: "test",
                password: "12345"
            }
        )
        expect(response.body.success).toBeFalsy();
        const response_two = await request(app)
        .post('/signup').send(
            {
                name: "teste",
                password: "1234"
            }
        )
        expect(response_two.body.success).toBeFalsy();
    });

    it('delete all new registers', async () => {
        const users = await request(app)
        .get('/')
        const id = users.body.users[users.body.users.length-1].id

        const response = await request(app)
        .delete('/delete_user').send({id})

        expect(response.body.success).toBeTruthy();
    })
})

