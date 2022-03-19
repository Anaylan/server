"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("artifacts", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			rarityId: {
				type: Sequelize.INTEGER,
				references: {
					model: "rarities",
					key: "id",
				},
			},
			title: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			body: {
				type: Sequelize.STRING,
			},
			iconId: {
				type: Sequelize.INTEGER,
				references: {
					model: "icons",
					key: "id",
				},
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
		await queryInterface.dropTable("artifacts");
	},
};
