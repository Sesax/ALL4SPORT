const Sequelize = require('sequelize');

database = new Sequelize('all4sport', 'root', 'root', {
    host: '192.168.233.15',
    dialect: 'mysql',

    define: {timestamps: false},

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

module.exports = database;