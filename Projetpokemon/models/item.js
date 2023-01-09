'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    effect: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.Item.hasMany(models.Pokemon);
      }
    }
  });
  return Item;
};