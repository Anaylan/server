"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("weap_builds", {
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
			weaponId: {
				type: Sequelize.INTEGER,
				references: {
					model: "weapons",
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
		await queryInterface.dropTable("weap_builds");
	},
};
