"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class build extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			build.hasMany(models.weap_build, {
				onDelete: "cascade",
			});
			build.hasMany(models.artifact_build, {
				onDelete: "cascade",
			});
			build.hasMany(models.priority, {
				onDelete: "cascade",
			});
		}
	}
	build.init(
		{
			description: DataTypes.TEXT,
			characterId: DataTypes.INTEGER,
			name: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "build",
		}
	);
	return build;
};
