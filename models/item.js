'use strict';
module.exports = (sequelize, DataTypes) => {
  var item = sequelize.define('items', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    codeitem: {
      type: DataTypes.STRING,
        validate: {
          is: /(HP|SW|LP)\d+/
        }
    }
},{
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  item.associate = function(models){
      item.belongsToMany(models.suppliers, {through:models.supplieritem})
      item.hasMany(models.supplieritem)
    }
  return item;
};
