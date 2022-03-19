"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class MaterialsForCharacter extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			MaterialsForCharacter.belongsTo(models.materials);
			// MaterialsForCharacter.belongsTo(models.stats);
		}
	}
	MaterialsForCharacter.init(
		{
			materialId: DataTypes.INTEGER,
			statId: DataTypes.INTEGER,
			quantity: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "MaterialsForCharacter",
		}
	);
	return MaterialsForCharacter;
};
