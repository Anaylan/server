const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class characters extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			characters.hasMany(models.advantages, {
				onDelete: "cascade",
			});
			characters.belongsTo(models.rarity);
			characters.belongsTo(models.element);
			characters.belongsTo(models.w_types);
			characters.hasMany(models.w_get);
			characters.hasMany(models.disadvantages, {
				onDelete: "cascade",
			});
			characters.hasMany(models.build, {
				onDelete: "cascade",
			});
			characters.hasMany(models.skills, {
				onDelete: "cascade",
			});
			characters.hasMany(models.stats, {
				onDelete: "cascade",
			});
			characters.hasMany(models.constellation, {
				onDelete: "cascade",
			});
			characters.hasMany(models.stories, {
				onDelete: "cascade",
			});
		}
	}
	characters.init(
		{
			title: DataTypes.STRING,
			fullname: DataTypes.STRING,
			description: DataTypes.STRING,
			wTypeId: DataTypes.INTEGER,
			isHidden: DataTypes.BOOLEAN,
			birthday: DataTypes.STRING,
			elementId: DataTypes.INTEGER,
			rarityId: DataTypes.INTEGER,
			gender: DataTypes.ENUM(["Мужской", "Женский", "Не указан"]),
			sp_stat: DataTypes.STRING,
			sp_food: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "characters",
		}
	);
	return characters;
};
