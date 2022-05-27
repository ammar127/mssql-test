'use strict'

const Sequelize = require('sequelize');

// server: pkdservers.com
// dbName: pkdseers_bank
// user: pkdseers_bank
// password: xAk6%w09
const sequelize = new Sequelize('pkdseers_bank', 'admin','admin', {
    host: 'DESKTOP-QM2CPN2',
    port:61408, 
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true
    },
    
});

const db = {};

db.sequelize = sequelize;

module.exports = db;
