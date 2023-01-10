'use strict';
module.exports = (sequelize, DataTypes) => {
  var Team = sequelize.define('Team', {
    idUSERS: DataTypes.INTEGER,
    idPOKEMONS: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    description: DataTypes.STRING,
    pokemons: DataTypes.STRING,
    pokemons2: DataTypes.STRING,
    pokemons3: DataTypes.STRING,
    pokemons4: DataTypes.STRING,
    pokemons5: DataTypes.STRING,
    pokemons6: DataTypes.STRING,
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