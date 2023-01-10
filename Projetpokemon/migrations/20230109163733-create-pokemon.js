'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idMOVES: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Moves',
          key: 'id'
        }
      },
      idITEMS: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Items',
          key: 'id'
        }
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Type1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Type2: {
        type: Sequelize.STRING
      },
      Ability1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Ability2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Ability3: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Ability4: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Talent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Speed: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Defense: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Attack: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      SpDef: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Spatk: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Hp: {
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
    await queryInterface.dropTable('Pokemons');
  }
};