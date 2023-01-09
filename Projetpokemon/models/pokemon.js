'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Pokemon.hasMany(models.Team);
      models.Pokemon.belongsTo(models.Move, {
        foreignKey:{
          allowNull: false
        }
      });
      models.Pokemon.belongsTo(models.Item, {
        foreignKey:{
          allowNull: false
        }
      });
    }
  }
  Pokemon.init({
    idMOVES: DataTypes.INTEGER,
    idITEMS: DataTypes.INTEGER,
    nameITEMS: DataTypes.STRING,
    Name: DataTypes.STRING,
    Type1: DataTypes.STRING,
    Type2: DataTypes.STRING,
    Speed: DataTypes.INTEGER,
    Defense: DataTypes.INTEGER,
    Attack: DataTypes.INTEGER,
    SpDef: DataTypes.INTEGER,
    Spatk: DataTypes.INTEGER,
    Hp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};