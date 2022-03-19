'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('builds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      characterId: {
        type: Sequelize.INTEGER,
        references: {
          model: "characters",
          key: "id",
        }
      },
      name: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('builds');
  }
};