'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ascension: {
        type: Sequelize.INTEGER
      },
      lvl_s: {
        type: Sequelize.STRING
      },
      lvl_e: {
        type: Sequelize.STRING
      },
      hp_s: {
        type: Sequelize.INTEGER
      },
      hp_e: {
        type: Sequelize.INTEGER
      },
      atk_s: {
        type: Sequelize.INTEGER
      },
      atk_e: {
        type: Sequelize.INTEGER
      },
      def_s: {
        type: Sequelize.INTEGER
      },
      def_e: {
        type: Sequelize.INTEGER
      },
      sp_stat: {
        type: Sequelize.STRING
      },
      characterId: {
        type: Sequelize.INTEGER,
        references: {
          model: "characters",
          key: "id"
        }
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
    await queryInterface.dropTable('stats');
  }
};