const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../database/database.sqlite'
})

const Urls = sequelize.define('tb_urls',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    label_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value_url:{
        type:DataTypes.STRING,
        allowNull: false
    },
    id_user:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    access:{
        type:DataTypes.INTEGER,
        allowNull: true
    }
});

Urls.sync({force: true})

module.exports = {
    Urls
}