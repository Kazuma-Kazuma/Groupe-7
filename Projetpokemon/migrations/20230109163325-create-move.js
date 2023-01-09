'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Moves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Movetype: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PP: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Power: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Effect: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Accuracy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Moves');
  }
};