'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Team', {
    idUSERS: DataTypes.INTEGER,
    idPOKEMONS: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    description: DataTypes.STRING,
    pokemons: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
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
  });
  return Team;
};