"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class materials extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			materials.belongsTo(models.rarity);
		}
	}
	materials.init(
		{
			title: DataTypes.STRING,
			name: DataTypes.STRING,
			rarityId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "materials",
		}
	);
	return materials;
};
