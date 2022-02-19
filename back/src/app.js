const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { Sequelize } = require('sequelize');
const {Users} = require('./models/Users')


const app = express();
const port = 3000;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/database.sqlite'
})

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', async (req, res) => {
        await sequelize.sync();
        const user = await Users.findAll();
        res.json(user)
    });
    app.post('/signup', (req, res) => {
        res.json(req.body);
    });


    app.listen(port, err => {
        if (err) {
            return console.error(err);
        }
        return console.log(`server is listening on ${port}`);
    });