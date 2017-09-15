'use strict';
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define('items', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    codeitem: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return item;
};
