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
    await queryInterface.bulkInsert("todoItems", [
      {
        task: "cleaning",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        todoListsId: 1,
      },
      {
        task: "shower",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        todoListsId: 2,
      },
      {
        task: "bike",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        todoListsId: 1,
      },
      {
        task: "vacation",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        todoListsId: 3,
      },
      {
        task: "holiday",
        important: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        todoListsId: 2,
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
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
