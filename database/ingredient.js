const { DataTypes } = require('sequelize');
const sequelize = require('.');

const Ingredient = sequelize.define('ingredient', {
    id: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  },{
    timestamps: true,
    paranoid: true
  });
  
  module.exports = Ingredient;