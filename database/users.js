const { DataTypes } = require('sequelize');
const sequelize = require('.');


const User = sequelize.define('user', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  emailAddress: {
    type:DataTypes.STRING,
    unique: true
  },
  phone:DataTypes.STRING,
  apikey:DataTypes.STRING,
  password:DataTypes.STRING,
},{
  timestamps: true,
  paranoid: true
});

module.exports = User;