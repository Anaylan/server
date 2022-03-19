"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class weap_build extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			weap_build.belongsTo(models.weapons);
			weap_build.belongsTo(models.build);
		}
	}
	weap_build.init(
		{
			buildId: DataTypes.INTEGER,
			weaponId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "weap_build",
		}
	);
	return weap_build;
};
