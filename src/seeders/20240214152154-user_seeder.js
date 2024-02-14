'use strict';

const { RoleEnum } = require('../utils/enum');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: "Nduchau",
        email: "hau.nguyenbk191@hcmut.edu.vn",
        password: "12345678",
        phone: "0978665779",
        role: RoleEnum.Admin,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nduchau",
        email: "hau.nguyenbk192@hcmut.edu.vn",
        password: "12345678",
        phone: "0978665779",
        role: RoleEnum.Customer,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nduchau",
        email: "hau.nguyenbk193@hcmut.edu.vn",
        password: "12345678",
        phone: "0978665779",
        role: RoleEnum.Customer,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Nduchau",
        email: "hau.nguyenbk194@hcmut.edu.vn",
        password: "12345678",
        phone: "0978665779",
        role: RoleEnum.Customer,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
