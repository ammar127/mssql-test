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
// sequelize-auto -o "./models" -d pkdseers_bank -h pkdservers.com -u pkdseers_bank -p 1433 -x xAk6%w09 -e mssql
sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
const db = {};

db.sequelize = sequelize;

module.exports = db;
