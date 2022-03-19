"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class priority extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			priority.belongsTo(models.icons);
		}
	}
	priority.init(
		{
			buildId: DataTypes.INTEGER,
			iconId: DataTypes.INTEGER,
			stat_1: DataTypes.STRING,
			stat_2: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "priority",
		}
	);
	return priority;
};
