'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { Trip } ) {
      this.hasMany(Trip, { foreignKey: 'departureId' });
      this.hasMany(Trip, { foreignKey: 'destinationId' });
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 30],
      }
    
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    
    }
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};