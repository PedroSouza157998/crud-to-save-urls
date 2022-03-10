const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const { Sequelize } = require('sequelize');
const ControllerUser = require('./controller/User/user_controller');
const ControllerUrl = require('./controller/Url/url_controller');


const app = express();
const port = 3333;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/database.sqlite'
})
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  ----------URL-------------
app.get('/urls', ControllerUrl.getAll);
app.get('/urls_user/:id', ControllerUrl.getAllFromUser);
app.post('/create_url', ControllerUrl.createUrl);
app.put('/update_url', ControllerUrl.updateAccess);
app.put('/favorite_url', ControllerUrl.favoriteUrl);
app.post('/delete_url', ControllerUrl.deleteUrl);

//  ----------USER-------------
app.get('/', ControllerUser.getAll);
app.post('/login', ControllerUser.login);
app.post('/signup', ControllerUser.create);
app.delete('/delete_user', ControllerUser.delete_user);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

module.exports = app;