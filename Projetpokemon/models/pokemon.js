'use strict';
module.exports = (sequelize, DataTypes) => {
  var Pokemon = sequelize.define('Pokemon', {
    idMOVES: DataTypes.INTEGER,
    idITEMS: DataTypes.INTEGER,
    nameITEMS: DataTypes.STRING,
    Name: DataTypes.STRING,
    Type1: DataTypes.STRING,
    Type2: DataTypes.STRING,
    Ability: DataTypes.STRING,
    Speed: DataTypes.INTEGER,
    Defense: DataTypes.INTEGER,
    Attack: DataTypes.INTEGER,
    SpDef: DataTypes.INTEGER,
    Spatk: DataTypes.INTEGER,
    Hp: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
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
  });
  return Pokemon;
};