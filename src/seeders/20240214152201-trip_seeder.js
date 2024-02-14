'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('trips', [
      {
        startTime: new Date(),
        price: 80000,
        departureId: 1,
        destinationId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startTime: new Date(),
        price: 85000,
        departureId: 2,
        destinationId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startTime: new Date(),
        price: 80000,
        departureId: 2,
        destinationId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startTime: new Date(),
        price: 80000,
        departureId: 3,
        destinationId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        startTime: new Date(),
        price: 80000,
        departureId: 24,
        destinationId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trips', null, {});

  }
};
