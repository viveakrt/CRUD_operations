const fs = require('fs');
const winston = require('winston');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const config = require('../config');
const logger = require("../logger");
const db = {};

let sequelize;


sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    logging:  msg => logger.log('info',msg),
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }

});





fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;