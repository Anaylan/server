"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("artifact_builds", {
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
			artifactId: {
				type: Sequelize.INTEGER,
				references: {
					model: "artifacts",
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
		await queryInterface.dropTable("artifact_builds");
	},
};
