'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Team.belongsTo(models.User, {
        foreignKey:{
          allowNull: false
        }
      });
      models.Team.belongsTo(models.Pokemon, {
        foreignKey:{
          allowNull: false
        }
      });
    }
  }
  Team.init({
    idUSERS: DataTypes.INTEGER,
    idPOKEMONS: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    description: DataTypes.STRING,
    pokemons: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};