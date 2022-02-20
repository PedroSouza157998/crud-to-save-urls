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
        allowNull: true
    },
    access:{
        type:DataTypes.INTEGER,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
});

Urls.sync()

module.exports = {
    Urls
}