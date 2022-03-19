"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("MaterialsForCharacters", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			materialId: {
				type: Sequelize.INTEGER,
				references: {
					model: "materials",
					key: "id",
				},
			},
			statId: {
				type: Sequelize.INTEGER,
				references: {
					model: "stats",
					key: "id",
				},
			},
			quantity: {
				type: Sequelize.INTEGER,
				defaultValue: 0,
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
		await queryInterface.dropTable("MaterialsForCharacters");
	},
};
