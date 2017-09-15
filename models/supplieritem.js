'use strict';
module.exports = (sequelize, DataTypes) => {
  var supplieritem = sequelize.define('supplieritem', {
    supplierId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  supplieritem.associate = function(models){
      supplieritem.belongsTo(models.items)
      supplieritem.belongsTo(models.suppliers)
    }
  return supplieritem;
};
