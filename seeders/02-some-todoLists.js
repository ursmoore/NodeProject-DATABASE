"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("todoLists", [
      {
        name: "dishes",
        createdAt: new Date(),
        updatedAt: new Date(),
        ownerId: 1,
      },
      {
        name: "coding",
        createdAt: new Date(),
        updatedAt: new Date(),
        ownerId: 3,
      },
      {
        name: "toilet",
        createdAt: new Date(),
        updatedAt: new Date(),
        ownerId: 2,
      },
      {
        name: "paperwork",
        createdAt: new Date(),
        updatedAt: new Date(),
        ownerId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
