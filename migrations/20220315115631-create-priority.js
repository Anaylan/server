"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("priorities", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			buildId: {
				type: Sequelize.INTEGER,
				references: {
					model: "builds",
					key: "id",
				},
			},
			iconId: {
				type: Sequelize.INTEGER,
				references: {
					model: "icons",
					key: "id",
				},
			},
			stat_1: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			stat_2: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("priorities");
	},
};
