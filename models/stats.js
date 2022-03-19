"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class stats extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			stats.hasMany(models.MaterialsForCharacter, {
				onDelete: "cascade",
			});
		}
	}
	stats.init(
		{
			ascension: DataTypes.INTEGER,
			lvl_s: DataTypes.STRING,
			lvl_e: DataTypes.STRING,
			hp_s: DataTypes.INTEGER,
			hp_e: DataTypes.INTEGER,
			atk_s: DataTypes.INTEGER,
			atk_e: DataTypes.INTEGER,
			def_s: DataTypes.INTEGER,
			def_e: DataTypes.INTEGER,
			sp_stat: DataTypes.STRING,
			characterId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "stats",
		}
	);
	return stats;
};
