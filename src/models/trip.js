'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Station }) {
      this.belongsTo(Station, { foreignKey: 'departureId', as: 'departure' });
      this.belongsTo(Station, { foreignKey: 'destinationId', as: 'destination' });
    }
  }
  Trip.init({
    startTime: DataTypes.DATE,
    price: DataTypes.FLOAT,
    departureId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    destinationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Trip',
  });
  return Trip;
};