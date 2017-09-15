'use strict';
module.exports = (sequelize, DataTypes) => {
  var supplier = sequelize.define('suppliers', {
    nama: DataTypes.STRING,
    kota: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  // supplier.associate = function(models){
  //     supplier.belongsToMany(models.items, {through:models.supplieritem})
  //   }
  return supplier;
};
