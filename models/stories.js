const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  stories.init({
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    character_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stories',
  });
  return stories;
};