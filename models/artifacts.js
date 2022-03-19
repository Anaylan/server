"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class artifacts extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			artifacts.belongsTo(models.rarity);
			artifacts.belongsTo(models.icons);
			artifacts.hasMany(models.artifact_build, {
				onDelete: "cascade",
			});
		}
	}
	artifacts.init(
		{
			rarityId: DataTypes.INTEGER,
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
			body: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "artifacts",
		}
	);
	return artifacts;
};
