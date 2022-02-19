const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/database.sqlite'
})

class Users extends Model { }

Users.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
}, { sequelize, modelName: 'tb_users' });

module.exports = {
    Users
}