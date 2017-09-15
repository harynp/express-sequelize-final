'use strict';
module.exports = (sequelize, DataTypes) => {
  var supplier = sequelize.define('suppliers', {
    nama: DataTypes.STRING,
    kota: DataTypes.STRING,
    ItemId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  supplier.associate = function(models){
      supplier.belongsToMany(models.items, {through:models.supplieritem})
      supplier.hasMany(models.supplieritem)
    }
  return supplier;
};
