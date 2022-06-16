'use strict';

const { sequelize, TeamModel, FoodModel } = require('./src/models');
const server = require('./src/server')


sequelize.sync()
  .then(() => {
      console.log('Success!!!!!!!!!');
    })
  .catch((err) => {
      console.error(err);
    });

// server.start();