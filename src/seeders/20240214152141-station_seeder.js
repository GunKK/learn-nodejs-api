'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('stations', [
      {
        name: "Bến xe miền Đông",
        address : "292 Đinh Bộ Lĩnh, phường 26, quận Bình Thạnh, Thành phố Hồ Chí Minh",
        province: "Thành phố Hồ Chí Minh",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bến xe miền Tây",
        address : "395 Kinh Dương Vương, Phường An Lạc, Quận Bình Tân, TP. Hồ Chí Minh",
        province: "Thành phố Hồ Chí Minh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bến xe xe Phương Trang Lê Hồng Phong",
        address : "231 - 233 Lê Hồng Phong, P. 4, Q. 5, TP. HCM.",
        province: "Thành phố Hồ Chí Minh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bến xe Phương Trang Cao Văn Lầu",
        address : "94 Cao Văn Lầu, Q. 6, TP. HCM",
        province: "Thành phố Hồ Chí Minh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bến xe Phương Trang Y Dược",
        address : "15 Lô A Đặng Thái Thân, P. 11, Q. 5, TP. HCM.",
        province: "Thành phố Hồ Chí Minh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stations', null, {});
  }
};
