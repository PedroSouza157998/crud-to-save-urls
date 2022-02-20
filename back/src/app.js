const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { Sequelize } = require('sequelize');
const { Users } = require('./models/Users')
const { Urls } = require('./models/Urls')
const ControllerUser = require('./controller/User/user_controller')
const ControllerUrl = require('./controller/Url/url_controller')


const app = express();
const port = 3000;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/database.sqlite'
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/urls', ControllerUrl.getAll);
app.post('/create_url', ControllerUrl.createUrl);

//  ----------USER-------------
app.get('/', ControllerUser.getAll);
app.post('/signup', ControllerUser.create);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});