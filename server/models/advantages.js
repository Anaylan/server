const { Model } = require("sequelize");
const { characters } = require("./");
module.exports = (sequelize, DataTypes) => {
	class advantages extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}

	advantages.init(
		{
			title: DataTypes.STRING,
			characterId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "advantages",
		}
	);

	return advantages;
};
