const app = require('../src/app.js')
const request = require('supertest');

describe('Validate the functions from url', () => {
    it('should get all urls', async () => {
        const response = await request(app)
        .get('/urls')
        expect(response.status).toBe(200);
    });

    it('should post a new url', async () => {
        const response = await request(app)
        .post('/create_url').send(
            {
                label_url: "test",
                value_url: "https://www.youtube.com/watch?v=LVxhiiE4nTE&list=PLPwtEMoB9hDZEevnobQ9QMuvdaR2DGtZn&index=9",
                name_user: "pedro",
                id_user: 0
            }
        )
        expect(response.body.success).toBeTruthy();
    });

    it('not should post a new url with value_url none', async () => {
        const response = await request(app)
        .post('/create_url').send(
            {
                label_url: "test",
                name_user: "pedro",
                id_user: 0
            }
        )
        expect(response.body.success).toBeFalsy();
    });

    it('should update number of access of a url', async () => {
        // pega primeiro id de todos os urls 
        const urls = await request(app)
        .get('/urls')
        const id = urls.body[urls.body.length-1].id

        const response = await request(app)
        .put('/update_url').send(
            {id}
        )
        expect(response.body.success).toBeTruthy();
    });

    it('should delete a url', async () => {
        // pega primeiro id de todos os urls 
        const urls = await request(app)
        .get('/urls')
        const id = urls.body[urls.body.length-1].id

        const response = await request(app)
        .delete('/delete_url').send({id})

        expect(response.body.success).toBeTruthy();
    });
})

