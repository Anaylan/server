module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("weapons", {
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
				type: Sequelize.STRING,
			},
			body: {
				type: Sequelize.STRING,
			},
			wTypeId: {
				type: Sequelize.INTEGER,
				references: {
					model: "w_types",
					key: "id",
				},
			},
			rarityId: {
				type: Sequelize.INTEGER,
				references: {
					model: "rarities",
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
		await queryInterface.dropTable("weapons");
	},
};
