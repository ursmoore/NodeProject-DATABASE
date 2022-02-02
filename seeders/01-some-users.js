"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Peter Pegel",
        email: "Ass@gmail.com",
        phone: 1234567,
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hans Peter",
        email: "pipi@gmail.com",
        phone: 1234567,
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Karla Columna",
        email: "Kaka@gmail.com",
        phone: 1234567,
        password: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
