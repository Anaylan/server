module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("characters", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
				primaryKey: true,
			},
			fullname: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			wTypeId: {
				type: Sequelize.INTEGER,
				references: {
					model: "w_types",
					key: "id",
				},
			},
			isHidden: {
				type: Sequelize.BOOLEAN,
				defaultValue: 1,
			},
			// wGetId: {
			// 	type: Sequelize.INTEGER,
			// 	references: {
			// 		model: "w_gets",
			// 		key: "id",
			// 	},
			// },
			birthday: {
				type: Sequelize.STRING,
			},
			rarityId: {
				type: Sequelize.INTEGER,
				references: {
					model: "rarities",
					key: "id",
				},
			},
			elementId: {
				type: Sequelize.INTEGER,
				references: {
					model: "elements",
					key: "id",
				},
			},
			gender: {
				type: Sequelize.ENUM(["Мужской", "Женский", "Не указан"]),
			},
			sp_stat: {
				type: Sequelize.STRING,
			},
			sp_food: {
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
		await queryInterface.dropTable("characters");
	},
};
