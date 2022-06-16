'use strict';


module.exports = (sequelize, DataTypes) => {
  return sequelize.define('team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wins: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    losses: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })
}