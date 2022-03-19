module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("skills", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			iconId: {
				type: Sequelize.INTEGER,
				references: {
					model: "icons",
					key: "id",
				},
			},
			characterId: {
				type: Sequelize.INTEGER,
				references: {
					model: "characters",
					key: "id",
				},
			},
			video: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("skills");
	},
};
