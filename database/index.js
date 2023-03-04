const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('alcohols_db', 'alandanel', 'molten237', {
  host: 'db4free.net',
  dialect: 'mysql'
});

module.exports = sequelize;