'use strict';
const {
  Model
} = require('sequelize');
const { RoleEnum } = require('../utils/enum');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip }) {
      this.belongsToMany(Trip, { through: Ticket});
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM(RoleEnum.Admin, RoleEnum.Customer),
      defaultValue: RoleEnum.Customer,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'https://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?size=200',
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};