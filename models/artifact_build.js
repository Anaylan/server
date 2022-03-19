"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class artifact_build extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			artifact_build.belongsTo(models.artifacts);
			artifact_build.belongsTo(models.build);
		}
	}
	artifact_build.init(
		{
			buildId: DataTypes.INTEGER,
			artifactId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "artifact_build",
		}
	);
	return artifact_build;
};
