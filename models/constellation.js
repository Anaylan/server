const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class constellation extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			// constellation.hasOne(models.icons);
			constellation.belongsTo(models.icons);
		}
	}
	constellation.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
			iconId: DataTypes.INTEGER,
			characterId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "constellation",
		}
	);
	return constellation;
};
