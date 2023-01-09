'use strict';
module.exports = (sequelize, DataTypes) => {
  var Move = sequelize.define('Move', {
    name: DataTypes.STRING,
    Movetype: DataTypes.STRING,
    PP: DataTypes.INTEGER,
    Power: DataTypes.STRING,
    Effect: DataTypes.STRING,
    Accuracy: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Move.hasMany(models.Pokemon);
      }
    }
  });
  return Move;
};
