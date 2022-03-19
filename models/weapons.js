const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class weapons extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			weapons.belongsTo(models.rarity);
			weapons.belongsTo(models.w_types);
			weapons.belongsTo(models.icons);
			weapons.hasMany(models.weap_build, {
				onDelete: "cascade",
			});
		}
	}
	weapons.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.STRING,
			rarityId: DataTypes.INTEGER,
			wTypeId: DataTypes.INTEGER,
			body: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "weapons",
		}
	);
	return weapons;
};
