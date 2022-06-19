'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const teamSchema = require('./team.schema')
const foodSchema = require('./food.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgresql://localhost:5432/database_development';

  const sequelize = new Sequelize(DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }); 

const TeamModel = teamSchema(sequelize, DataTypes);
const FoodModel = foodSchema(sequelize, DataTypes);


module.exports = {
  sequelize,
  TeamModel,
  FoodModel,
};