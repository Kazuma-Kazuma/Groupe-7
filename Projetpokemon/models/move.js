'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Move extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Move.hasMany(models.Pokemon);
    }
  }
  Move.init({
    name: DataTypes.STRING,
    Movetype: DataTypes.STRING,
    PP: DataTypes.INTEGER,
    Power: DataTypes.STRING,
    Effect: DataTypes.STRING,
    Accuracy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Move',
  });
  return Move;
};