const {
  Model
} = require('sequelize');
const {characters} = require("./index");
module.exports = (sequelize, DataTypes) => {
  class disadvantages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  disadvantages.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    characterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: characters,
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'disadvantages',
  });
  return disadvantages;
};